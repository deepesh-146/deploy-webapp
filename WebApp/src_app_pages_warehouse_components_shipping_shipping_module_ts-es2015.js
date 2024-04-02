"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_warehouse_components_shipping_shipping_module_ts"],{

/***/ 67629:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/shipping/components/add-shipping/add-shipping.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddShippingComponent": function() { return /* binding */ AddShippingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/warehouse.service */ 78381);
/* harmony import */ var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/party.service */ 42109);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);












function AddShippingComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddShippingComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sale Invoice is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AddShippingComponent {
    constructor(formBuilder, router, commonService, toastService, dialog, titleCasePipe, 
    // @Inject(MAT_DIALOG_DATA) public data: any,
    dialogRef, warehouseService, partyService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.commonService = commonService;
        this.toastService = toastService;
        this.dialog = dialog;
        this.titleCasePipe = titleCasePipe;
        this.dialogRef = dialogRef;
        this.warehouseService = warehouseService;
        this.partyService = partyService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
        this.today = new Date();
    }
    ngOnInit() {
        try {
            this.TransferOrderForm = this.formBuilder.group({
                name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
                saleInvoice: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            });
            // this.getAllCountries()
        }
        catch (error) {
            this.toastService.toastMsg({
                title: 'Error',
                content: error
            });
        }
    }
    get f() {
        return this.TransferOrderForm.controls;
    }
    cancel() {
        this.dialogRef.close();
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    numberDecimalOnly(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    onSave() {
        this.submitted = true;
        console.log(this.TransferOrderForm.value.country);
        if (this.TransferOrderForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            return false;
        }
        else {
            const data = {
                // "id": "4", //optional
                "userId": this.currentUser.id,
                "name": this.TransferOrderForm.value.name,
                "saleInvoice": this.TransferOrderForm.value.saleInvoice,
            };
            this.warehouseService.postWarehouse(data).then(res => {
                if (res.success) {
                    this.dialogRef.close();
                    this.commonService.notifyDataAdded();
                    this.toastService.toastMsg({
                        title: "Success",
                        content: "Shipping Data Addedd Successfully!!!",
                    });
                }
            });
        }
    }
}
AddShippingComponent.ɵfac = function AddShippingComponent_Factory(t) { return new (t || AddShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__.PartyService)); };
AddShippingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddShippingComponent, selectors: [["app-add-shipping"]], decls: 28, vars: 3, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "5px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-save", "ms-2", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", 2, "font-size", "12px"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Name", "maxlength", "50", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "placeholder", "Sale Invocie", "maxlength", "50", "formControlName", "saleInvoice", "required", ""], [1, "text-danger"]], template: function AddShippingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Add Shipping Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddShippingComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddShippingComponent_Template_button_click_6_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AddShippingComponent_mat_error_18_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Sale Invocie");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AddShippingComponent_mat_error_27_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.TransferOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.name.touched) && (ctx.f.name.errors == null ? null : ctx.f.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.saleInvoice.touched) && (ctx.f.saleInvoice.errors == null ? null : ctx.f.saleInvoice.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: calc(100% - 125px);\n  overflow-y: auto;\n}\n\n.matSuffix[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: medium;\n}\n\n  .cdk-overlay-pane {\n  min-width: 200px !important;\n  transform: translateX(-18px) !important;\n}\n\n.mat-select-panel[_ngcontent-%COMP%] {\n  max-width: 30% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zaGlwcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFLQTtFQUNFLHlCQUFBO0FBRkYiLCJmaWxlIjoiYWRkLXNoaXBwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyNXB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0U3VmZml4IHtcclxuICBwYWRkaW5nIDogMTBweDtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLy8gcmVsYXRlZCB0byBkcm9wZG93biBvZiB0aGUgY291bnRyeSdzXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XHJcbiAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMThweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gcmVsYXRlZCB0byBkcm9wZG93biBvZiB0aGUgY291bnRyeSdzXHJcbi5tYXQtc2VsZWN0LXBhbmVsIHtcclxuICBtYXgtd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 2711:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/shipping/components/shipping-list/shipping-list.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingListComponent": function() { return /* binding */ ShippingListComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var _add_shipping_add_shipping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-shipping/add-shipping.component */ 67629);
/* harmony import */ var _edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-shipping/edit-shipping.component */ 43772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/warehouse.service */ 78381);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);












const _c0 = ["dropdown"];
function ShippingListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_span_14_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_span_14_button_1_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r21.upiCheckedId.length > 0 ? ctx_r21.getUPIcheckId(ctx_r21.upiCheckedId) : ctx_r21.getSingleCheckedId(ctx_r21.checkSingleArray); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "archive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_span_14_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShippingListComponent_span_14_button_1_span_1_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.checkSingleArray.length > 0 || ctx_r19.isChecked);
} }
function ShippingListComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShippingListComponent_span_14_button_1_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.checkSingleArray.length > 0 || ctx_r1.isChecked);
} }
function ShippingListComponent_span_15_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_span_15_button_1_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r25.upiCheckedId.length > 0 ? ctx_r25.getUPIcheckId(ctx_r25.upiCheckedId) : ctx_r25.getSingleCheckedId(ctx_r25.checkSingleArray); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "unarchive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_span_15_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShippingListComponent_span_15_button_1_span_1_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.checkSingleArray.length > 0 || ctx_r23.isChecked);
} }
function ShippingListComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShippingListComponent_span_15_button_1_Template, 2, 1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.checkSingleArray.length > 0 || ctx_r2.isChecked);
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
const _c2 = function (a0, a1) { return { "custom-checkbox": a0, "custom-checkbox deleted": a1 }; };
function ShippingListComponent_ng_container_34_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShippingListComponent_ng_container_34_tr_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.onChekedsingleCheck($event, item_r27.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_ng_container_34_tr_1_Template_span_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.editShippingListModal(item_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_ng_container_34_tr_1_Template_span_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.archhiveShippingList(item_r27.id, item_r27.isDeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const item_r27 = ctx_r37.$implicit;
    const i_r28 = ctx_r37.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c1, item_r27.isDeleted ? "#c7c2de" : i_r28 % 2 === 0 ? "#ffffff" : "#f2f2f2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](21, _c2, !item_r27.isDeleted, item_r27.isDeleted))("checked", ctx_r29.shippingIdList.includes(item_r27.id))("value", item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 16, item_r27 == null ? null : item_r27.createdAt, "dd MMM YYYY")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.shipmentId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.invoiceNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.carrier, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.trackingDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.packStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.shippingCharge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", item_r27.isDeleted ? "Unarchive" : "Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r27.isDeleted ? "unarchive" : "archive");
} }
function ShippingListComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ShippingListComponent_ng_container_34_tr_1_Template, 28, 24, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.selectedTypeFilter === null || item_r27.type === ctx_r3.selectedTypeFilter);
} }
function ShippingListComponent_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are you sure to unarchive all Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are you sure to unarchive all selected Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_51_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_51_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.unArchiveMultipleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unarchive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_52_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_52_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.unArchiveMultipleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unarchive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are you sure to archive all Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are you sure to archive all selected Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_68_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_68_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.archiveMultipleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_69_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.archiveMultipleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h2_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Archive Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h2_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Unarchive Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are You Sure To Archive Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_h4_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Are You Sure To Unarchive Shipping List? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_84_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_84_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.archiveSignleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Archive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShippingListComponent_a_85_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShippingListComponent_a_85_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r48.archiveSignleShippingList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unarchive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ShippingListComponent {
    constructor(router, dialog, commonService, route, warehouseService, toastService, titleCasePipe) {
        this.router = router;
        this.dialog = dialog;
        this.commonService = commonService;
        this.route = route;
        this.warehouseService = warehouseService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.shippingList = [];
        this.currentPageNo = 0;
        this.partyPageSize = 5;
        this.pagesize = 1;
        this.count = 0;
        this.shippingIdList = [];
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
    }
    ngOnInit() {
        this.getAllShippingList();
        this.commonService.rowAdded$.subscribe(() => {
            // Fetch the updated list of users
            this.getAllShippingList();
        });
        this.searchSubscription = this.searchSubject
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(800), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => {
            this.isLoading = true; // Show the loader when the API call is initiated
        })).subscribe(searchKey => {
            // Call the API with the search key
            if (searchKey.length >= 3) {
                this.searchKey = searchKey;
                this.searchShippingList(searchKey.trim());
            }
            else if (searchKey === '') {
                this.isLoading = false; // Hide the loader if the search key is less than the threshold
                this.getAllShippingList();
            }
            else {
                this.isLoading = false; // Hide the loader if the search key is less than the threshold
            }
        });
    }
    getAllShippingList(searchKey) {
        this.warehouseService.getAllPackagesByUser({}, this.currentUser.id).then((res) => {
            if (res.success) {
                this.shippingList = res.data;
                // this.currentPageNo = res.data.currentPage;
                // this.totalrow = res.data.totalrows;
                // this.totalPages = res.data.totalPages
            }
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message),
                });
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong.",
                });
            }
        });
    }
    archhiveShippingList(warehouseId, isdeleted) {
        this.warehouseId = warehouseId;
        this.isdeletedParty = isdeleted;
        this.selectedIdList.push(warehouseId);
    }
    archiveSignleShippingList() {
        // if (this.isdeletedParty) {
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
        //         content: "ShippingList Archived Successfully!!!"
        //       });
        //       this.getAllShippingList();
        //     }
        //   })
        // }
    }
    onChekedsingleCheck(e, partyId) {
        if (e.target.checked) {
            this.shippingIdList.push(partyId);
            this.checkSingleArray.push(e.target.value);
        }
        else {
            const index = this.shippingIdList.indexOf(partyId);
            if (index !== -1) {
                this.shippingIdList.splice(index, 1);
                this.checkSingleArray.splice(index, 1);
            }
        }
        // Clear the archived and unarchived party IDs
        this.archivedPartyIds = [];
        this.unarchivedPartyIds = [];
        // Update the archived and unarchived party IDs based on the selected parties
        this.shippingIdList.forEach(partyId => {
            const party = this.shippingList.find(item => item.id === partyId);
            if (party) {
                if (party.isDeleted) {
                    this.archivedPartyIds.push(partyId);
                }
                else {
                    this.unarchivedPartyIds.push(partyId);
                }
            }
        });
        // Check if all the selected parties are archived
        const allArchived = this.shippingIdList.every(partyId => {
            const party = this.shippingList.find(item => item.id === partyId);
            return party && party.isDeleted;
        });
        // Check if all the selected parties are unarchived
        const allUnarchived = this.shippingIdList.every(partyId => {
            const party = this.shippingList.find(item => item.id === partyId);
            return party && !party.isDeleted;
        });
        // if (allArchived && allUnarchived) {
        if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
            // Show an alert error message to the user
            alert("Please select either archived or unarchived ShippingLists.");
            // Uncheck all the selected parties and header checkbox
            this.shippingIdList = [];
            this.checkSingleArray = [];
            this.checkSelectsingle = false;
            this.upiCheckedId = [];
            this.isChecked = false;
            this.allSelect = false;
            this.checkSelect = false;
            this.checkSelectsingle = false;
            // Uncheck all the checkboxes in the template
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                const inputElement = checkbox;
                inputElement.checked = false;
            });
        }
        else if (allArchived) {
            console.log('Archived');
            // Show unarchive button
            this.showUnarchiveButton = true;
            this.showDeleteButton = false;
        }
        else if (allUnarchived) {
            console.log('Unarchived');
            // Show archive button
            this.showDeleteButton = true;
            this.showUnarchiveButton = false;
        }
        else {
            // Show error message or handle the case when there are both archived and unarchived parties selected
            alert("Please select either archived or unarchived ShippingLists.");
            // Uncheck all the selected parties and header checkbox
            this.shippingIdList = [];
            this.checkSingleArray = [];
            this.checkSelectsingle = false;
            this.upiCheckedId = [];
            this.isChecked = false;
            this.allSelect = false;
            this.checkSelect = false;
            this.checkSelectsingle = false;
            this.showDeleteButton = false;
            this.showUnarchiveButton = false;
            // Uncheck all the checkboxes in the template
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                const inputElement = checkbox;
                inputElement.checked = false;
            });
        }
    }
    getSingleCheckedId(warehouseId) {
        this.warehouseId = warehouseId;
    }
    onChekMultiple($event) {
        const isChecked = $event.target.checked;
        if (isChecked) {
            this.shippingIdList = this.shippingList.map(item => item.id);
        }
        else {
            this.shippingIdList = [];
            this.showDeleteButton = false;
            this.showUnarchiveButton = false;
        }
        this.checkSelect = isChecked; // Update the checkbox state in the header
        let id = $event.target.value;
        this.isChecked = $event.target.checked;
        this.upiCheckedId = this.shippingList.map((item) => {
            if (id === -1) {
                if (this.isChecked == true) {
                    this.checkSelectsingle = true;
                    return item.id;
                }
                else {
                    this.checkSelectsingle = false;
                    this.upiCheckedId = [];
                }
            }
        });
        // Clear the archived and unarchived party IDs
        this.archivedPartyIds = [];
        this.unarchivedPartyIds = [];
        // Update the archived and unarchived party IDs based on the selected parties
        this.shippingIdList.forEach(partyId => {
            const party = this.shippingList.find(item => item.id === partyId);
            if (party) {
                if (party.isDeleted) {
                    this.archivedPartyIds.push(partyId);
                }
                else {
                    this.unarchivedPartyIds.push(partyId);
                }
            }
            // Check if all the selected parties are archived
            const allArchived = this.shippingIdList.every(partyId => {
                const party = this.shippingList.find(item => item.id === partyId);
                return party && party.isDeleted;
            });
            // Check if all the selected parties are unarchived
            const allUnarchived = this.shippingIdList.every(partyId => {
                const party = this.shippingList.find(item => item.id === partyId);
                return party && !party.isDeleted;
            });
            if (allArchived) {
                // Show unarchive button
                this.showUnarchiveButton = true;
                this.showDeleteButton = false;
            }
            else if (allUnarchived) {
                // Show archive button
                this.showDeleteButton = true;
                this.showUnarchiveButton = false;
            }
            else {
                // Show error message or handle the case when there are both archived and unarchived parties selected
            }
        });
        if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
            alert("Please select either archived or unarchived ShippingLists");
            // Uncheck all the selected parties and header checkbox
            this.shippingIdList = [];
            this.checkSingleArray = [];
            this.checkSelectsingle = false;
            this.upiCheckedId = [];
            this.isChecked = false;
            this.allSelect = false;
            this.checkSelect = false;
            this.checkSelectsingle = false;
            // Uncheck all the checkboxes in the template
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
                const inputElement = checkbox;
                inputElement.checked = false;
            });
            // Throw an error to prevent further processing
            this.toastService.toastMsg({
                title: 'Warning',
                content: 'Please select either archived or unarchived ShippingLists'
            });
            throw new Error("Please select either archived or unarchived ShippingLists");
        }
    }
    getUPIcheckId(warehouseId) {
        this.warehouseId = warehouseId;
    }
    archiveMultipleShippingList() {
        if (this.currentPageNo === 1) {
            this.currentPageNo = this.currentPageNo;
        }
        else {
            if (this.totalPages > this.currentPageNo) {
                this.currentPageNo = this.currentPageNo - 1;
            }
        }
        const requestBody = {
            archiveShippingLists: this.shippingIdList
        };
        // this.warehouseService.deleteMultiplewarehouses({ data: requestBody, userId: this.currentUser.id }).then((result: any) => {
        //   if (result.success) {
        //     this.getAllShippingList();
        //     this.toastService.toastMsg({
        //       title: 'Success',
        //       content: "ShippingList Archived Successfully!!!"
        //     });
        //     this.showDeleteButton = false;
        //     this.showUnarchiveButton = false
        //     this.shippingIdList = []; // Clear the selected party IDs after deletion
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
    showDeleteButtonFunc() {
        return this.unarchivedPartyIds.length > 0;
    }
    unArchiveMultipleShippingList() {
        const requestBody = {
            unArchiveShippingLists: this.shippingIdList
        };
        // this.warehouseService.unArchiveMultiplewarehouses({data: requestBody, userId: this.currentUser.id}).then((result: any) => {
        //   if (result.success) {
        //     this.getAllShippingList();
        //     this.toastService.toastMsg({
        //       title: 'Success',
        //       content: "ShippingList Unarchived Successfully!!!"
        //     });
        //     this.showDeleteButton = false;
        //     this.showUnarchiveButton = false
        //     this.shippingIdList = []; // Clear the selected party IDs after unarchiving
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
    searchShippingList(searchKey) {
        setTimeout(() => {
            if (searchKey.trim() === '') {
                this.getAllShippingList();
                this.isLoading = false;
            }
            else {
                this.isLoading = false;
                this.getAllShippingList(searchKey);
                if (this.shippingList.length === 0) {
                    this.isLoading = false;
                    this.toastService.toastMsg({
                        title: "Error",
                        content: searchKey + " Is Not Found",
                    });
                }
            }
            this.isLoading = false; // Hide the loader after the API call is completed
        }, 500);
    }
    onSearchInputChange(searchKey) {
        console.log(searchKey);
        // Emit the search key to the searchSubject
        this.searchSubject.next(searchKey.trim());
    }
    handleInputChange(e) {
        this.excelFileUpload = e.target.files[0];
        const pattern = /\.(xlsx|xls)$/i; // Pattern to match ".xlsx" or ".xls" extension
        if (!pattern.test(this.excelFileUpload.name)) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Invalid Format. Please Select An Excel File.",
            });
            return;
        }
        if (this.excelFileUpload) {
            let formdata = new FormData();
            formdata.set("file", this.excelFileUpload);
            // this.truckOwnerService.postBulkowner(formdata, this.currentUser.id).then((res) => {
            //   this.toastService.toastMsg({
            //     title: "Success",
            //     content: "Excel Uploaded Successfully",
            //   });
            //   this.getAllShippingList();
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
    startUpload() {
        var uploadInput = document.getElementById('uploadFile');
        if (uploadInput) {
            var event = new MouseEvent('click', {
                view: window,
                bubbles: false,
                cancelable: true
            });
            uploadInput.dispatchEvent(event);
        }
        else {
            this.toastService.toastMsg({
                title: 'Error',
                content: "Upload element not found"
            });
        }
    }
    handlePage(e) {
        this.currentPageNo = e.pageIndex;
        this.pagesize = e.pageSize;
        if (this.shippingList.length > 0) {
            if (this.searchKey !== '') {
                this.partyPageSize = e.pageSize;
                this.searchShippingList(this.searchKey);
            }
            else {
                this.partyPageSize = e.pageSize;
                this.getAllShippingList();
            }
        }
    }
    addShippingModal() {
        const dialogRef = this.dialog.open(_add_shipping_add_shipping_component__WEBPACK_IMPORTED_MODULE_0__.AddShippingComponent, {
            width: '700px',
            height: "100vh",
            data: {},
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    editShippingListModal(packageData) {
        const dialogRef = this.dialog.open(_edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_1__.EditShippingComponent, {
            width: '700px',
            height: '100vh',
            data: { packageData: packageData },
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    // isActive(warehouseId, isActive) {
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
    //               this.getAllShippingList()
    //             } else {
    //               this.toastService.toastMsg({
    //                 title: "Success",
    //                 content: "Status Has Changed To Inactive",
    //               });
    //               this.getAllShippingList()
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
    updateTypeFilter(filterValue) {
        if (filterValue === 'ALL') {
            this.selectedTypeFilter = null;
        }
        else {
            this.selectedTypeFilter = filterValue;
        }
    }
    toggleFilter() {
        this.isFilterVisible = !this.isFilterVisible;
    }
    closeDropdown() {
        this.isFilterVisible = false;
    }
}
ShippingListComponent.ɵfac = function ShippingListComponent_Factory(t) { return new (t || ShippingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_3__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe)); };
ShippingListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ShippingListComponent, selectors: [["app-shipping-list"]], viewQuery: function ShippingListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
    } }, decls: 86, vars: 22, consts: [["class", "loader-container", 4, "ngIf"], [1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Search...", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], [1, "table-container", "overflow-visible"], [1, "table-div", 2, "overflow-x", "scroll"], [1, "table", "table-responsive"], [1, "text-nowrap", 2, "display", "flex", "justify-content", "flex-start", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "text-nowrap"], [4, "ngFor", "ngForOf"], ["id", "errorUnarchiveSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["aria-hidden", "true", 1, "fa", "fa-unlock-alt"], ["class", "text-center", 4, "ngIf"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["id", "errorArchiveSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["aria-hidden", "true", 1, "fa", "fa-lock-alt"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["class", "mb-1 text-center font-weight-bold", "style", "font-weight: 800", "id", "modalExampleDemoLabel", 4, "ngIf"], ["class", "btn btn-outline-warning", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorArchiveSelect-modal", "style", "padding-top: 15px", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorArchiveSelect-modal", 1, "btn", 2, "padding-top", "15px"], ["class", "material-icons icon-color iconFontSize", "data-bs-toggle", "tooltip", "style", "color: #fc7643", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 1, "material-icons", "icon-color", "iconFontSize", 2, "color", "#fc7643", 3, "click"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorUnarchiveSelect-modal", "style", "padding-top: 15px", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorUnarchiveSelect-modal", 1, "btn", 2, "padding-top", "15px"], ["class", "material-icons icon-color iconFontSize", "data-bs-toggle", "tooltip", "style", "color: #fc7643", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Unrchive", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Unrchive", 1, "material-icons", "icon-color", "iconFontSize", 2, "color", "#fc7643", 3, "click"], ["style", "color: #676398 !important", 3, "ngStyle", 4, "ngIf"], [2, "color", "#676398 !important", 3, "ngStyle"], [1, "text-nowrap", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "ngClass", "checked", "value", "change"], [1, "long-name", 2, "vertical-align", "middle"], [1, "long-address", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "text-align", "center", "vertical-align", "middle"], [1, "btn"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2", 3, "click"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", "mt-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", 1, "material-icons", "icon-color", "iconFontSize", 2, "color", "#fc7643", 3, "title", "click"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-warning", 3, "click"]], template: function ShippingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ShippingListComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ShippingListComponent_Template_input_input_4_listener($event) { return ctx.onSearchInputChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ShippingListComponent_Template_input_change_12_listener($event) { return ctx.onChekMultiple($event); })("ngModelChange", function ShippingListComponent_Template_input_ngModelChange_12_listener($event) { return ctx.allSelect = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ShippingListComponent_span_14_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ShippingListComponent_span_15_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Shippment #");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Sale Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Carrier");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Tracking #");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Shipping Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ShippingListComponent_ng_container_34_Template, 2, 1, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ShippingListComponent_tbody_35_Template, 4, 0, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Unarchive Shipping List? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ShippingListComponent_h4_46_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ShippingListComponent_h4_47_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ShippingListComponent_a_51_Template, 2, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ShippingListComponent_a_52_Template, 2, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Archive Shipping List? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, ShippingListComponent_h4_63_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, ShippingListComponent_h4_64_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ShippingListComponent_a_68_Template, 2, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, ShippingListComponent_a_69_Template, 2, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, ShippingListComponent_h2_77_Template, 2, 0, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, ShippingListComponent_h2_78_Template, 2, 0, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, ShippingListComponent_h4_79_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, ShippingListComponent_h4_80_Template, 2, 0, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, ShippingListComponent_a_84_Template, 2, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, ShippingListComponent_a_85_Template, 2, 0, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1)("checked", ctx.shippingIdList.length === ctx.shippingList.length)("ngModel", ctx.allSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeleteButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showUnarchiveButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.shippingList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.shippingList.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f8f8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  color: #848e99;\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n  .custom-dialog-clone-class {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n  .custom-dialog-edit-class {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 320px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 350px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  border-color: black;\n  \n}\n\n.custom-checkbox.deleted[_ngcontent-%COMP%] {\n  border-color: white;\n  \n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRkU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUFxQiwrQ0FBQTtBQUV6Qjs7QUFDRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7O0VBRUUsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTs7O0VBR0UsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFFRSxVQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFJRTtFQUNFO0lBQ0UsdUJBQUE7RUFESjtBQUNGOztBQUlFO0VBQ0UsbUJBQUE7RUFBcUIseUJBQUE7QUFEekI7O0FBSUU7RUFDRSxtQkFBQTtFQUFxQiw0Q0FBQTtBQUF6Qjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlFO0VBQ0UsMkJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSwyQkFBQTtBQURKOztBQUlFLGtEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoic2hpcHBpbmctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJTZWFyY2hCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdk9wdGlvbnMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWRkZW4taW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBpY29uJ3Mgd2lkdGggKi9cclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGJvZHkgdHIsXHJcbiAgdGQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGgsXHJcbiAgdGQsXHJcbiAgdHIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2JpbGUge1xyXG4gICAgY29sb3I6ICM4NDhlOTk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtYm9keS10ciB7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGJvZHkgdGQge1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctY2xvbmUtY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nLWVkaXQtY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICAvL2ZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnNlYXJjaEJhciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1CdXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWJhc2lzOiAzNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gTWVkaWEgcXVlcnkgZm9yIGJ1dHRvbnMgYW5kIHNlYXJjaCBiYXIuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5oZWFkZXJCdXR0b25zIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjazsgLyogRGVmYXVsdCBib3JkZXIgY29sb3IgKi9cclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1jaGVja2JveC5kZWxldGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7IC8qIFJlZCBib3JkZXIgY29sb3Igd2hlbiBpc0RlbGV0ZWQgaXMgdHJ1ZSAqL1xyXG4gIH1cclxuICBcclxuICAvLyBUb2dnbGUgYnV0dG9uIENzc1xyXG4gIC50b2dnbGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLnRvZ2dsZS1zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmluYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2JlNTtcclxuICAgIGJvcmRlci1jb2xvcjogIzJjN2JlNTtcclxuICB9XHJcbiAgXHJcbiAgLmluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2dnbGUtYnV0dG9uOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggIzAxMDgwZTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3B0aW9uYWw6IENlbnRlciB0aGUgdG9nZ2xlIHNsaWRlciB2ZXJ0aWNhbGx5ICovXHJcbiAgLnRvZ2dsZS1idXR0b246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 20483:
/*!********************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/shipping/shipping-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingRoutingModule": function() { return /* binding */ ShippingRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shipping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipping.component */ 36333);
/* harmony import */ var _components_shipping_list_shipping_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shipping-list/shipping-list.component */ 2711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _shipping_component__WEBPACK_IMPORTED_MODULE_0__.ShippingComponent,
        children: [
            {
                path: '',
                redirectTo: 'shipping-list',
                pathMatch: 'full'
            },
            {
                path: 'shipping-list',
                component: _components_shipping_list_shipping_list_component__WEBPACK_IMPORTED_MODULE_1__.ShippingListComponent,
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    },
];
class ShippingRoutingModule {
}
ShippingRoutingModule.ɵfac = function ShippingRoutingModule_Factory(t) { return new (t || ShippingRoutingModule)(); };
ShippingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShippingRoutingModule });
ShippingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShippingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 36333:
/*!***************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/shipping/shipping.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingComponent": function() { return /* binding */ ShippingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class ShippingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShippingComponent.ɵfac = function ShippingComponent_Factory(t) { return new (t || ShippingComponent)(); };
ShippingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShippingComponent, selectors: [["app-shipping"]], decls: 11, vars: 0, consts: [[1, "component-container", "container-fluid", "bg-white", "p-4"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "page-nav-link", "mt-3"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./shipping-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]], template: function ShippingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shipping List");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 67388:
/*!************************************************************************!*\
  !*** ./src/app/pages/warehouse/components/shipping/shipping.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingModule": function() { return /* binding */ ShippingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shipping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipping-routing.module */ 20483);
/* harmony import */ var _shipping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping.component */ 36333);
/* harmony import */ var _components_shipping_list_shipping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shipping-list/shipping-list.component */ 2711);
/* harmony import */ var _components_add_shipping_add_shipping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-shipping/add-shipping.component */ 67629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material-moment-adapter */ 63737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _components_edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-shipping/edit-shipping.component */ 43772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);



















class ShippingModule {
}
ShippingModule.ɵfac = function ShippingModule_Factory(t) { return new (t || ShippingModule)(); };
ShippingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ShippingModule });
ShippingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _shipping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShippingRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ShippingModule, { declarations: [_shipping_component__WEBPACK_IMPORTED_MODULE_1__.ShippingComponent,
        _components_shipping_list_shipping_list_component__WEBPACK_IMPORTED_MODULE_2__.ShippingListComponent,
        _components_add_shipping_add_shipping_component__WEBPACK_IMPORTED_MODULE_3__.AddShippingComponent,
        _components_edit_shipping_edit_shipping_component__WEBPACK_IMPORTED_MODULE_5__.EditShippingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shipping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShippingRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_warehouse_components_shipping_shipping_module_ts-es2015.js.map