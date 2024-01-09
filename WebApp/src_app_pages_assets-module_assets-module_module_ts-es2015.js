"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_assets-module_assets-module_module_ts"],{

/***/ 93306:
/*!*********************************************************!*\
  !*** ./src/app/core/services/assets-service.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsServiceService": function() { return /* binding */ AssetsServiceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);




class AssetsServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.expenseAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.assetsAdded$ = this.expenseAddedSource.asObservable();
    }
    notifyassetsAdded() {
        this.expenseAddedSource.next();
    }
    getCurrentAssetsData(data, userId, size, page) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getCurrentAssetData + userId + "?size=" + size + "&page=" + page, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getNONCurrentAssetsData(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.nonCurrentAsset + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    addAssets(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.currentASSEtAdd, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    deleteAssets(data, assetId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.DeleteCurrentAndNonCurrent + assetId, 'DELETE').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAsseTListByledger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.assetsName + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getNONCurrentAssetsDataBYId(data, nonassetId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.nonCurrentAssetbYId + nonassetId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    updateNonCurrentAssets(data, id) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.updateNonCurrentAsset + id, 'PUT').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    addRundeprec(data, id) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.rundeprecationPost + id, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    updateRundeprec(data, id) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.updateRunDeprac + id, 'PUT').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
AssetsServiceService.ɵfac = function AssetsServiceService_Factory(t) { return new (t || AssetsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
AssetsServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AssetsServiceService, factory: AssetsServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74328:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/assets-module/asset-edit-formcompoennet/asset-edit-formcompoennet.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetEditFormcompoennetComponent": function() { return /* binding */ AssetEditFormcompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);














function AssetEditFormcompoennetComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetEditFormcompoennetComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Assets Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetEditFormcompoennetComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class AssetEditFormcompoennetComponent {
    constructor(dialogRef, formBuilder, router, toastService, titleCasePipe, assetsServiceService, assetData) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.assetsServiceService = assetsServiceService;
        this.assetData = assetData;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    ngOnInit() {
        this.assetId = this.assetData.assetId;
        this.getASSETById();
        this.getASSETData();
        this.createAssetForm();
    }
    createAssetForm() {
        this.assetsEditForm = this.formBuilder.group({
            assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            toatalAmount: [""],
        });
    }
    getASSETData() {
        this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then((res) => {
            console.log("AssetsByLedegr", res);
            this.GLData = res.data.map((item) => { return item.glNumber; });
        });
    }
    postAssetsDetails() {
        let Body = {
            "update": {
                "userId": this.currentUser.id,
                "assetsType": "CURRENT",
                "assetName": this.assetsEditForm.controls.assetName.value,
                "date": this.assetsEditForm.controls.assetDate.value,
                "valueOfAsset": this.assetsEditForm.controls.toatalAmount.value,
                "costOfAsset": "",
                "uploadDocument": "",
                "depreciation": "",
                "method": "",
                "process": "",
                "enterDepreciation": "",
                "year": ""
            },
            "additionalDetails": [],
        };
        // let Body =
        // {
        //   "userId": this.currentUser.id,
        //   "assetsType": "CURRENT",
        //   "assetName":  this.assetsEditForm.controls.assetName.value,
        //   "date": this.assetsEditForm.controls.assetDate.value,
        //   "valueOfAsset": this.assetsEditForm.controls.toatalAmount.value,
        // }
        this.assetsServiceService.updateNonCurrentAssets(Body, this.assetId).then((res) => {
            // this.toastService.openSnackBar("Current Assets Added Successfully!!!");
            this.toastService.toastMsg({
                title: "Success",
                content: 'Current Assets Updated Successfully!!!',
            });
            this.assetsServiceService.notifyassetsAdded();
            this.dialogRef.close();
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message),
                });
                // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong.",
                });
            }
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    get f() {
        return this.assetsEditForm.controls;
    }
    openDatepicker() {
        // Check if the current value of taskdate is a Date object
        const selectedDate = this.assetsEditForm.get('assetDate').value;
        if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {
        }
        else {
            // Set a default date or any valid date here
            this.assetsEditForm.get('assetDate').setValue(new Date());
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    getASSETById() {
        this.assetsServiceService.getNONCurrentAssetsDataBYId({}, this.assetId).then((res) => {
            this.assetsEditForm.patchValue({
                assetDate: res.data.date ? moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY"),
                assetName: res.data.assetName ? res.data.assetName : null,
                toatalAmount: res.data.valueOfAsset ? res.data.valueOfAsset : 0,
            });
        });
    }
}
AssetEditFormcompoennetComponent.ɵfac = function AssetEditFormcompoennetComponent_Factory(t) { return new (t || AssetEditFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA)); };
AssetEditFormcompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssetEditFormcompoennetComponent, selectors: [["app-asset-edit-formcompoennet"]], decls: 35, vars: 9, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "9px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "assetDate", "autocomplete", "off", 1, "text-uppercase", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["matNativeControl", "", "type", "text", "placeholder", "Amount", "formControlName", "toatalAmount", 3, "keypress"], [1, "text-danger"]], template: function AssetEditFormcompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Current Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_button_click_6_listener() { return ctx.postAssetsDetails(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_input_click_16_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AssetEditFormcompoennetComponent_mat_error_20_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AssetEditFormcompoennetComponent_mat_error_27_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetEditFormcompoennetComponent_Template_input_keypress_33_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AssetEditFormcompoennetComponent_mat_error_34_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.assetsEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetDate.touched) && (ctx.f.assetDate.errors == null ? null : ctx.f.assetDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, ctx.f.assetName.invalid && ctx.f.assetName.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetName.touched) && (ctx.f.assetName.errors == null ? null : ctx.f.assetName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.toatalAmount.touched) && (ctx.f.toatalAmount.errors == null ? null : ctx.f.toatalAmount.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWVkaXQtZm9ybWNvbXBvZW5uZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYXNzZXQtZWRpdC1mb3JtY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaWNvbmNhbGVuZGVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 99871:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/assets-module/asset-formcompoennet/asset-formcompoennet.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetFormcompoennetComponent": function() { return /* binding */ AssetFormcompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);












function AssetFormcompoennetComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AssetFormcompoennetComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Assets Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AssetFormcompoennetComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Amount is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class AssetFormcompoennetComponent {
    constructor(dialogRef, formBuilder, router, toastService, titleCasePipe, assetsServiceService) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.assetsServiceService = assetsServiceService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
    }
    ngOnInit() {
        this.createAssetForm();
        this.getASSETData();
    }
    getASSETData() {
        this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then((res) => {
            console.log("AssetsByLedegr", res);
            this.GLData = res.data.map((item) => { return item.glNumber; });
        });
    }
    createAssetForm() {
        this.assetsForm = this.formBuilder.group({
            assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            toatalAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            // glNumber:["",[Validators.required]]
        });
    }
    get f() {
        return this.assetsForm.controls;
    }
    postAssetsDetails() {
        this.submitted = true;
        if (this.assetsForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            let Body = {
                "userId": this.currentUser.id,
                // "glNumber": this.assetsForm.controls.glNumber.value,
                "assetsType": "CURRENT",
                "assetName": this.assetsForm.controls.assetName.value,
                "date": this.assetsForm.controls.assetDate.value,
                "valueOfAsset": this.assetsForm.controls.toatalAmount.value,
            };
            this.assetsServiceService.addAssets(Body).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Current Assets Added Successfully!!!"
                });
                // this.toastService.openSnackBar("Current Assets Added Successfully!!!");
                this.assetsServiceService.notifyassetsAdded();
                this.dialogRef.close();
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: this.titleCasePipe.transform(err.error.error_message),
                    });
                    // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: "Something Went Wrong."
                    });
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    cancel() {
        this.dialogRef.close();
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.assetsForm.get('assetDate').value;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.assetsForm.get('assetDate').setValue(new Date());
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
AssetFormcompoennetComponent.ɵfac = function AssetFormcompoennetComponent_Factory(t) { return new (t || AssetFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__.AssetsServiceService)); };
AssetFormcompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AssetFormcompoennetComponent, selectors: [["app-asset-formcompoennet"]], decls: 41, vars: 9, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "500", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "assetDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", 3, "ngClass"], ["matNativeControl", "", "type", "text", "placeholder", "Amount", "formControlName", "toatalAmount", 3, "keypress"], [1, "text-danger"]], template: function AssetFormcompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Current Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_button_click_6_listener() { return ctx.postAssetsDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_input_click_18_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AssetFormcompoennetComponent_mat_error_22_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AssetFormcompoennetComponent_mat_error_31_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AssetFormcompoennetComponent_Template_input_keypress_39_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AssetFormcompoennetComponent_mat_error_40_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.assetsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetDate.touched) && (ctx.f.assetDate.errors == null ? null : ctx.f.assetDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx.f.assetName.invalid && ctx.f.assetName.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetName.touched) && (ctx.f.assetName.errors == null ? null : ctx.f.assetName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.toatalAmount.touched) && (ctx.f.toatalAmount.errors == null ? null : ctx.f.toatalAmount.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFzc2V0LWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uY2FsZW5kZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 24898:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/assets-module/asset-listcompoennet/asset-listcompoennet.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetListcompoennetComponent": function() { return /* binding */ AssetListcompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset-formcompoennet/asset-formcompoennet.component */ 99871);
/* harmony import */ var _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset-edit-formcompoennet/asset-edit-formcompoennet.component */ 74328);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ 76453);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 38021);










function AssetListcompoennetComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_tr_24_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.openEditModel(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_tr_24_Template_span_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.getcurrentAssetsId(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 5, item_r3.date, "dd MMM YYYY")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.assetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 8, item_r3.valueOfAsset, "1.2-2"), "");
} }
function AssetListcompoennetComponent_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 20, 30]; };
function AssetListcompoennetComponent_mat_paginator_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function AssetListcompoennetComponent_mat_paginator_26_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.handlePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx_r2.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0))("length", ctx_r2.totalrow)("pageIndex", ctx_r2.currentPageNo);
} }
class AssetListcompoennetComponent {
    constructor(dialog, assetsServiceService, toastService, titleCasePipe, datePipe) {
        this.dialog = dialog;
        this.assetsServiceService = assetsServiceService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.datePipe = datePipe;
        this.AseetData = [];
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.currentPageNo = 0;
        this.partyPageSize = 5;
        this.p = 1;
        this.pagesize = 1;
    }
    ngOnInit() {
        this.assetsServiceService.assetsAdded$.subscribe(() => {
            this.getCurrentAssetsData();
        });
        this.getCurrentAssetsData();
    }
    getCurrentAssetsData() {
        this.assetsServiceService.getCurrentAssetsData({}, this.currentUser.id, this.partyPageSize, (this.currentPageNo + 1)).then((res) => {
            console.log("res");
            this.AseetData = res.data.pageData;
            this.p = res.data.currentPage;
            this.totalrow = res.data.totalrows;
            this.toatlPages = res.data.totalPages;
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message)
                });
                // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    OpenAddAssets() {
        const dialogRef = this.dialog.open(_asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__.AssetFormcompoennetComponent, {
            width: '50%',
            height: '100vh',
            data: {},
            panelClass: 'custom-dialog-assets-class',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openEditModel(assetId) {
        const dialogRef = this.dialog.open(_asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_1__.AssetEditFormcompoennetComponent, {
            width: '50%',
            height: '100vh',
            data: { assetId: assetId },
            panelClass: 'custom-dialog-assets-class',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getcurrentAssetsId(assetId) {
        this.assetId = assetId;
    }
    deleteAsset() {
        this.assetsServiceService.deleteAssets({}, this.assetId).then((res) => {
            // this.toastService.openSnackBar("Current Assets Deleted Successfully!!!");
            this.toastService.toastMsg({
                title: "Success",
                content: "Current Assets Deleted Successfully!!!"
            });
            this.getCurrentAssetsData();
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message)
                });
                // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    handlePage(e) {
        this.currentPageNo = e.pageIndex;
        this.pagesize = e.pageSize;
        if (this.AseetData.length > 0) {
            this.partyPageSize = e.pageSize;
            this.getCurrentAssetsData();
        }
    }
    downlaodAllData() {
        if (this.AseetData.length > 0) {
            this.exportToExcel();
        }
        else {
            this.toastService.toastMsg({
                title: "Error",
                content: "No Data Available For Download",
            });
        }
    }
    exportToExcel() {
        console.log("EXPORT ___");
        const workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__.Workbook();
        // const worksheet = workbook.addWorksheet('Sheet 1');
        const worksheet = workbook.addWorksheet('Sheet 1', {
            views: [
                {
                    state: 'frozen',
                    xSplit: 1,
                    ySplit: 1, // Number of rows to freeze (e.g., 2 means freeze the first two rows)
                },
            ],
        });
        // Define a header style
        const headerStyle = {
            font: { color: { argb: 'FF0000FF' }, bold: true },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00FF' } },
        };
        // Define your headers
        const header1 = [
            'Date',
            'Asset Name',
            'Amount (In Rs.)',
        ];
        // Apply the header style to the header row
        const headerRow1 = worksheet.addRow(header1);
        headerRow1.eachCell((cell) => {
            cell.border = {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' },
            };
            cell.fill = headerStyle.fill;
            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            //  cell.width = 120
        });
        // Set column widths for header cells
        worksheet.columns.forEach((column, index) => {
            // Assuming you want a fixed width of 120 for all header columns
            column.width = 15;
        });
        // Set background colors for multiple cells using a loop
        const cellBackgroundColors = [
            { cell: 'A1', color: 'FFB4C6E7', width: 5 },
            { cell: 'B1', color: 'FFB4C6E7' },
            { cell: 'C1', color: 'FFB4C6E7' },
        ];
        cellBackgroundColors.forEach((cellColor) => {
            worksheet.getCell(cellColor.cell).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: cellColor.color },
            };
        });
        this.AseetData.forEach((item, index) => {
            const row = [];
            const formattedInvoiceDate = this.datePipe.transform(item.date, 'dd MMM yyyy');
            row.push(formattedInvoiceDate ? formattedInvoiceDate : "NA");
            row.push(item.assetName ? item.assetName : "NA");
            row.push('₹ ' + (item.valueOfAsset ? parseFloat(item.valueOfAsset).toFixed(2) : '0.00'));
            worksheet.addRow(row);
            const vatCellC = worksheet.getCell('C' + worksheet.rowCount);
            // Set the alignment of the VAT cell to right
            vatCellC.alignment = { horizontal: 'right' };
        });
        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, 'Current Asset.xlsx');
        });
    }
}
AssetListcompoennetComponent.ɵfac = function AssetListcompoennetComponent_Factory(t) { return new (t || AssetListcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_4__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe)); };
AssetListcompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AssetListcompoennetComponent, selectors: [["app-asset-listcompoennet"]], decls: 43, vars: 3, consts: [[1, "row", "headerButtons"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Assets Name", 1, "form-control", "pe-5", "my-2", "mx-0"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "text-nowrap", "my-2"], [1, "fas", "fa-upload"], [1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-download"], [2, "width", "100%", "overflow-x", "auto", "margin-top", "8px"], [1, "table", "table-responsive", "table-striped", "fs--1", "mb-0"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right", "width", "150px"], ["class", "btn-reveal-trigger text-left ", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["sticky", "", "class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], [1, "text-nowrap", 2, "vertical-align", "middle", "white-space", "nowrap"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], [1, "text-nowrap", 2, "text-align", "center!important", "vertical-align", "middle"], [1, "flex"], [1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", 2, "color", "red", "padding", "0px !important", 3, "click"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["sticky", "", "showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]], template: function AssetListcompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_button_click_4_listener() { return ctx.OpenAddAssets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Current Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_button_click_10_listener() { return ctx.downlaodAllData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AssetListcompoennetComponent_tr_24_Template, 16, 11, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AssetListcompoennetComponent_tbody_25_Template, 4, 0, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AssetListcompoennetComponent_mat_paginator_26_Template, 1, 5, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Delete Current Asset? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Are you sure to delete current Asset?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_a_click_41_listener() { return ctx.deleteAsset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.AseetData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.AseetData.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.AseetData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n  custom-dialog-assets-class {\n  height: 100vh !important;\n  margin-left: 35% !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n  padding: 0;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 360px;\n}\n\n@media screen and (max-width: 768px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWxpc3Rjb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDRyxtQkFBQTtFQUNELGVBQUE7QUFFTjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUQ1Qzs7QUFLRTtFQUNFLFdBQUE7QUFGSjs7QUFDRTtFQUNFLFdBQUE7QUFGSjs7QUFJRTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBUUE7RUFDRTtJQUNFLHVCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJhc3NldC1saXN0Y29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLCB0ZCB7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG4gIC50Ym9keSwgdGQsIHRmb290LCB0aCwgdGhlYWQsIHRyIHtcclxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC8vIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTdweDtcclxuICAgIC8vY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8vYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSArIDIwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgY3VzdG9tLWRpYWxvZy1hc3NldHMtY2xhc3N7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcblxyXG4uaGVhZGVyQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mb3JtQnV0dG9ucyB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWJhc2lzOiAzNjBweDtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnkgZm9yIGJ1dHRvbnMgYW5kIHNlYXJjaCBiYXIuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 31046:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/assets-module/asset-non-formcompoennet/asset-non-formcompoennet.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetNonFormcompoennetComponent": function() { return /* binding */ AssetNonFormcompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/product.service */ 3560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 32220);















function AssetNonFormcompoennetComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Assets Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Value of Assets is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Scrap Value is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Payment Mode is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.alphaOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.addAddtionalDetails(); })("keypress", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_ng_container_78_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const group_r10 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.deleteaddAddtionalDetails(group_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r11 + 1);
} }
function AssetNonFormcompoennetComponent_div_115_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Depreciation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_div_115_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Useful Life");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AssetNonFormcompoennetComponent_div_115_mat_option_5_Template, 2, 0, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AssetNonFormcompoennetComponent_div_115_mat_option_6_Template, 2, 0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.nonAssetsForm.get("assetsMethod").value == "Simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.nonAssetsForm.get("assetsMethod").value == "Simple");
} }
function AssetNonFormcompoennetComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_116_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enter Depreciation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_117_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AssetNonFormcompoennetComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_119_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
class AssetNonFormcompoennetComponent {
    constructor(formBuilder, router, toastService, titleCasePipe, dialogRef, cdr, assetsServiceService, productService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.assetsServiceService = assetsServiceService;
        this.productService = productService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
        this.ranges = [
            {
                value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
                label: 'Last 7 Days'
            },
            {
                value: [new Date(new Date().setDate(new Date().getMonth() - 1)), new Date()],
                label: 'Last Month'
            }
        ];
        this.today = new Date();
        this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
        this.selectedYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.createnonAseetsForm();
        this.getASSETData();
        this.todaysDate = new Date();
    }
    createnonAseetsForm() {
        this.nonAssetsForm = this.formBuilder.group({
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            valueOfAssets: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            scrapValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            costOfAssets: [0],
            depreciation: [false],
            assetsMethod: [""],
            assetProcess: [""],
            assetDeprecianinPer: [""],
            assetsYear: [""],
            paymentMode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            addtionalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([this.createaddtionalDetails()]),
        });
        this.additionalDetailsControls.valueChanges.subscribe(data => {
            this.toatalAmount = data.reduce((a, b) => a + +b.amount, 0);
            this.updateTotalCostOfAssets();
        });
        // Subscribe to value changes of valueOfAssets control
        this.nonAssetsForm.get('valueOfAssets').valueChanges.subscribe(() => {
            this.updateTotalCostOfAssets();
        });
    }
    updateTotalCostOfAssets() {
        const valueOfAssets = parseFloat(this.nonAssetsForm.get('valueOfAssets').value);
        console.log('valueOfAssets value -->', valueOfAssets);
        let allTotal = 0; // Initialize to 0
        if (!isNaN(valueOfAssets)) {
            allTotal = valueOfAssets; // Set to valueOfAssets if it's a valid number
        }
        if (true) {
            const toatalAmount = parseFloat(this.toatalAmount); // Parse toatalAmount if needed
            console.log('toatalAmount value -->', toatalAmount);
            if (!isNaN(toatalAmount)) {
                allTotal += toatalAmount; // Add toatalAmount if it's a valid number
            }
        }
        console.log('allTotal value -->', allTotal);
        this.nonAssetsForm.patchValue({
            costOfAssets: allTotal,
        });
    }
    alphaOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        // Allow alphabets (a-z, A-Z) and space (charCode 32)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
            return true;
        }
        return false;
    }
    getASSETData() {
        this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then((res) => {
            console.log("AssetsByLedegr", res);
            this.GLData = res.data.map((item) => { return item.glNumber; });
        });
    }
    get f() {
        return this.nonAssetsForm.controls;
    }
    createaddtionalDetails() {
        // this.cdr.detectChanges();
        try {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
            });
        }
        catch (e) {
        }
    }
    get additionalDetailsControls() {
        try {
            return this.nonAssetsForm.get('addtionalDetails');
        }
        catch (e) {
        }
    }
    addAddtionalDetails() {
        try {
            const data = this.nonAssetsForm.get('addtionalDetails');
            data.push(this.createaddtionalDetails());
            this.cdr.detectChanges();
        }
        catch (e) {
            console.log(e);
        }
    }
    deleteaddAddtionalDetails(index) {
        const data = this.nonAssetsForm.get('addtionalDetails');
        if (data.length > 0) {
            data.removeAt(data.length - 1); // Remove the last element
        }
        this.cdr.detectChanges();
    }
    cancel() {
        this.dialogRef.close();
    }
    postnonAsseTsForm() {
        this.submitted = true;
        this.formArrayData = this.additionalDetailsControls.value;
        if (this.nonAssetsForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            return false;
        }
        else {
            let Body = {
                "userId": this.currentUser.id,
                // "glNumber": this.nonAssetsForm.controls.glNumber.value,
                "assetsType": "NON CURRENT",
                "assetName": this.nonAssetsForm.controls.assetName.value,
                "date": this.nonAssetsForm.controls.assetDate.value,
                "valueOfAsset": this.nonAssetsForm.controls.valueOfAssets.value,
                "scrapValue": this.nonAssetsForm.controls.scrapValue.value,
                "costOfAsset": this.nonAssetsForm.controls.costOfAssets.value,
                "paymentMode": this.nonAssetsForm.controls.paymentMode.value,
                "uploadDocument": this.productPicUrl,
                "depreciationStatus": this.nonAssetsForm.controls.depreciation.value,
                "depreciation": this.nonAssetsForm.controls.depreciation.value,
                "method": this.nonAssetsForm.controls.assetsMethod.value,
                "process": this.nonAssetsForm.controls.assetProcess.value,
                "enterDepreciation": this.nonAssetsForm.controls.assetDeprecianinPer.value,
                "year": this.nonAssetsForm.controls.assetsYear.value,
                "additionalDetails": this.formArrayData,
            };
            this.assetsServiceService.addAssets(Body).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: 'Non Current Assets Added Successfully!!!',
                });
                this.assetsServiceService.notifyassetsAdded();
                this.dialogRef.close();
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
    }
    documentChange(e) {
        let formdata = new FormData();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(file);
            if (file == null) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Please Select Image To Upload.",
                });
            }
            else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then((res) => {
                    this.productPicUrl = res.data.location;
                    console.log("this.productPicUrl", this.productPicUrl);
                });
            }
        }
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.nonAssetsForm.get('assetDate').value;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.nonAssetsForm.get('assetDate').setValue(new Date());
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
}
AssetNonFormcompoennetComponent.ɵfac = function AssetNonFormcompoennetComponent_Factory(t) { return new (t || AssetNonFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
AssetNonFormcompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AssetNonFormcompoennetComponent, selectors: [["app-asset-non-formcompoennet"]], decls: 120, vars: 18, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "assetDate", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "ngModel", "maxDate", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["matNativeControl", "", "type", "text", "placeholder", "Value of Assets (in \u20B9)", "formControlName", "valueOfAssets", 3, "keypress"], ["matNativeControl", "", "type", "text", "placeholder", "Scrap Value (in \u20B9)", "formControlName", "scrapValue", 3, "keypress"], [1, "row", "mb-3"], ["required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Payment Mode", "formControlName", "paymentMode"], ["value", "Cash"], ["value", "Bank"], ["value", "Credit"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], [1, "form-label", "mb-5"], [1, "row", "mt-2"], [1, "table-responsive"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center", "inner-model-table-heading", "bg-white"], [1, "p-2", 2, "width", "10% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "width", "50% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "text-align", "center", "vertical-align", "middle"], ["formArrayName", "addtionalDetails", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-end", "mt-2"], [1, "col-sm-12", "col-md-6", "col-lg-6", "text-nowrap", "mb-1", "d-grid"], [1, "btn", "btn-outline-warning", "dash", "fs--1", 3, "click"], ["id", "boot-icon", 1, "bi", "bi-plus-lg", "newrow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add Row", 1, "me-2", "fs--1", "text-black", "newrow"], [1, "col-md-6", "col-sm-12", "col-lg-3", "col-xl-3"], [1, "form-label", 2, "margin-top", "20px"], [1, "col-md-6", "col-sm-12", "col-lg-4", "col-xl-4"], ["appearance", "outline", 1, "example-full-width", "bg-light"], ["matNativeControl", "", "type", "text", "readonly", "", "disabled", "", "placeholder", "Cost of Assets (in \u20B9)", "formControlName", "costOfAssets", 1, "disbaleFieldBg", 3, "keypress"], [1, "mb-3"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12", "px-0", "mx-0", 2, "width", "225px"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 1, "inputImageUpload", "px-0", 2, "margin-left", "16px", "margin-top", "6px", 3, "change"], [1, "col-md-6", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "form-check", "form-switch", "mb-0"], ["id", "customSwitch1", "type", "checkbox", "formControlName", "depreciation", 1, "form-check-input"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Method Name", "formControlName", "assetsMethod"], ["value", "Simple"], ["value", "WDM"], ["class", "col-md-6 col-sm-12 col-lg-6 col-xl-6", 4, "ngIf"], [1, "text-danger"], ["formArrayName", "addtionalDetails"], [3, "formGroupName"], [2, "vertical-align", "middle", "text-align", "center", "padding", "9px"], [2, "vertical-align", "middle", "text-align", "center"], ["matNativeControl", "", "required", "", "matInput", "", "type", "text", "autocomplete", "off", "required", "", "formControlName", "name", 3, "keypress"], ["matInput", "", "type", "text", "formControlName", "amount", 3, "keyup.enter", "keypress"], [1, "Icons", 2, "vertical-align", "middle", "text-align", "center"], ["type", "button", 1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Process Name", "formControlName", "assetProcess"], ["value", "Depreciation", 4, "ngIf"], ["value", "Useful Life", 4, "ngIf"], ["value", "Depreciation"], ["value", "Useful Life"], ["matNativeControl", "", "type", "text", "placeholder", "Enter Amount", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Depreciation %", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Enter Year", "formControlName", "assetsYear", 3, "keypress"]], template: function AssetNonFormcompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Non Current Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_button_click_6_listener() { return ctx.postnonAsseTsForm(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AssetNonFormcompoennetComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AssetNonFormcompoennetComponent_Template_input_ngModelChange_24_listener($event) { return ctx.todaysDate = $event; })("click", function AssetNonFormcompoennetComponent_Template_input_click_24_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AssetNonFormcompoennetComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Value of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_36_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AssetNonFormcompoennetComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Scrap Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_44_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AssetNonFormcompoennetComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Payment Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, AssetNonFormcompoennetComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Additional Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "thead", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Amount (in \u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, AssetNonFormcompoennetComponent_ng_container_78_Template, 11, 2, "ng-container", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_a_click_81_listener() { return ctx.addAddtionalDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Add New Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Cost of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_91_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AssetNonFormcompoennetComponent_Template_input_change_97_listener($event) { return ctx.documentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Depreciation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "mat-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "mat-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "WDM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](115, AssetNonFormcompoennetComponent_div_115_Template, 7, 2, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, AssetNonFormcompoennetComponent_div_116_Template, 5, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, AssetNonFormcompoennetComponent_div_117_Template, 5, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, AssetNonFormcompoennetComponent_div_119_Template, 5, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.nonAssetsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx.f.assetName.invalid && ctx.f.assetName.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetName.touched) && (ctx.f.assetName.errors == null ? null : ctx.f.assetName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.todaysDate)("maxDate", ctx.today)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetDate.touched) && (ctx.f.assetDate.errors == null ? null : ctx.f.assetDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.valueOfAssets.touched) && (ctx.f.valueOfAssets.errors == null ? null : ctx.f.valueOfAssets.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.scrapValue.touched) && (ctx.f.scrapValue.errors == null ? null : ctx.f.scrapValue.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.paymentMode.touched) && (ctx.f.paymentMode.errors == null ? null : ctx.f.paymentMode.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.additionalDetailsControls.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value != "WDM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value === "Simple" && ctx.nonAssetsForm.get("assetProcess").value === "Depreciation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value == "WDM" || ctx.nonAssetsForm.get("assetProcess").value == "Depreciation %");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetProcess").value == "Useful Life");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.inputImageUpload[_ngcontent-%COMP%] {\n  border: 1px solid #d6d2d2;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LW5vbi1mb3JtY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBSEY7O0VBTUE7SUFDRSxnQkFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoiYXNzZXQtbm9uLWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uY2FsZW5kZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW5wdXRJbWFnZVVwbG9hZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIxMCwgMjEwKTtcclxuICB9XHJcbiAgLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQ6cmVhZC1vbmx5e1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 28309:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/assets-module/asset-non-listcompoennet/asset-non-listcompoennet.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetNonListcompoennetComponent": function() { return /* binding */ AssetNonListcompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset-non-formcompoennet/asset-non-formcompoennet.component */ 31046);
/* harmony import */ var _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../non-asset-edit-form/non-asset-edit-form.component */ 72730);
/* harmony import */ var _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../run-depraciation-component/run-depraciation-component.component */ 93082);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exceljs/dist/exceljs.min.js */ 76453);
/* harmony import */ var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










function AssetNonListcompoennetComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_tr_26_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.openEditModel(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_tr_26_Template_span_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.getAssetsId(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 7, item_r2.date, "dd MMM YYYY")));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r2.assetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 10, item_r2.valueOfAsset, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 13, ctx_r0.roundDepreciationValue(item_r2.Yearlydepreciation), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 16, item_r2.costOfAsset, "1.2-2"), "");
} }
function AssetNonListcompoennetComponent_tbody_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class AssetNonListcompoennetComponent {
    constructor(dialog, assetsServiceService, toastService, titleCasePipe, datePipe) {
        this.dialog = dialog;
        this.assetsServiceService = assetsServiceService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.datePipe = datePipe;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.NonAseetData = [];
    }
    ngOnInit() {
        this.assetsServiceService.assetsAdded$.subscribe(() => {
            this.getNonAssetData();
        });
        this.getNonAssetData();
    }
    OpenRunDepreciation() {
        const dialogRef = this.dialog.open(_run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_2__.RunDepraciationComponentComponent, {
            width: '35%',
            height: 'auto',
            data: {},
            panelClass: 'custom-dialog-assets-class',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    nonAssetsAddForm() {
        const dialogRef = this.dialog.open(_asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__.AssetNonFormcompoennetComponent, {
            width: '55%',
            height: '100vh',
            data: {},
            panelClass: 'custom-dialog-assets-class',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openEditModel(NonassetId) {
        const dialogRef = this.dialog.open(_non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_1__.NonAssetEditFormComponent, {
            width: '55%',
            height: '100vh',
            data: { NonassetId: NonassetId },
            panelClass: 'custom-dialog-assets-class',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getNonAssetData() {
        this.assetsServiceService.getNONCurrentAssetsData({}, this.currentUser.id).then((res) => {
            this.NonAseetData = res.data.totalDecriptionValue;
        }, (err) => {
            if (err.error.expose || err.status == 404) {
                this.NonAseetData = [];
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message),
                });
                // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    getAssetsId(aseetId) {
        this.aseetId = aseetId;
    }
    deleteAsset() {
        this.assetsServiceService.deleteAssets({}, this.aseetId).then((res) => {
            this.toastService.toastMsg({
                title: "Success",
                content: "Non Current Assets Added Successfully!!!"
            });
            // this.toastService.openSnackBar("Non Current Assets Deleted Successfully!!!");
            this.getNonAssetData();
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message)
                });
                // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    roundDepreciationValue(value) {
        return (value - Math.floor(value) >= 0.5) ? Math.ceil(value) : Math.floor(value);
    }
    downlaodAllData() {
        if (this.NonAseetData.length > 0) {
            this.exportToExcel();
        }
        else {
            this.toastService.toastMsg({
                title: "Error",
                content: "No Data Available For Download",
            });
        }
    }
    exportToExcel() {
        console.log("EXPORT ___");
        const workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook();
        // const worksheet = workbook.addWorksheet('Sheet 1');
        const worksheet = workbook.addWorksheet('Sheet 1', {
            views: [
                {
                    state: 'frozen',
                    xSplit: 2,
                    ySplit: 2, // Number of rows to freeze (e.g., 2 means freeze the first two rows)
                },
            ],
        });
        // Define a header style
        const headerStyle = {
            font: { color: { argb: 'FF0000FF' }, bold: true },
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF00FF' } },
        };
        // Define your headers
        const header1 = [
            'Assets Details',
            '',
            '',
            '',
            '',
            'Depreciation',
            '',
            ''
        ];
        const headers2 = [
            'Assets Name',
            'Purchase Date',
            'Purchase Value',
            'Scrap Value',
            'Additional Cost',
            'Method',
            'Process',
            'Value',
        ];
        // Apply the header style to the header row
        const headerRow1 = worksheet.addRow(header1);
        const headerRow2 = worksheet.addRow(headers2);
        worksheet.mergeCells('A1:E1');
        worksheet.mergeCells('F1:H1');
        headerRow1.eachCell((cell) => {
            cell.border = {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' },
            };
            cell.fill = headerStyle.fill;
            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            //  cell.width = 120
        });
        headerRow2.eachCell((cell) => {
            cell.border = {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' },
            };
            cell.fill = headerStyle.fill;
            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            //  cell.width = 120
        });
        // Set column widths for header cells
        worksheet.columns.forEach((column, index) => {
            // Assuming you want a fixed width of 120 for all header columns
            column.width = 15;
        });
        // Set background colors for multiple cells using a loop
        const cellBackgroundColors = [
            { cell: 'A1', color: 'FFC6E0B4', width: 5 },
            { cell: 'B1', color: 'FFB4C6E7' },
            { cell: 'C1', color: 'FFB4C6E7' },
            { cell: 'D1', color: 'FFB4C6E7' },
            { cell: 'E1', color: 'FFB4C6E7' },
            { cell: 'F1', color: 'FFC6E0B4' },
            { cell: 'G1', color: 'FFC6E0B4' },
            { cell: 'H1', color: 'FFC6E0B4' },
            { cell: 'A2', color: 'FFB4C6E7', width: 5 },
            { cell: 'B2', color: 'FFB4C6E7' },
            { cell: 'C2', color: 'FFB4C6E7' },
            { cell: 'D2', color: 'FFB4C6E7' },
            { cell: 'E2', color: 'FFB4C6E7' },
            { cell: 'F2', color: 'FFC6E0B4' },
            { cell: 'G2', color: 'FFC6E0B4' },
            { cell: 'H2', color: 'FFC6E0B4' },
            // FF8DB4E2- blue color code  FFFFC4D5 Orange
        ];
        cellBackgroundColors.forEach((cellColor) => {
            worksheet.getCell(cellColor.cell).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: cellColor.color },
            };
        });
        this.NonAseetData.forEach((item, index) => {
            const row = [];
            row.push(item.assetName ? item.assetName : 'NA');
            const formattedInvoiceDate = this.datePipe.transform(item.date, 'dd MMM yyyy');
            row.push(formattedInvoiceDate ? formattedInvoiceDate : "NA");
            row.push(item.valueOfAsset ? parseFloat(item.valueOfAsset).toFixed(2) : 0.00);
            row.push(item.scrapValue ? parseFloat(item.scrapValue).toFixed(2) : 0.00);
            row.push(item.costOfAsset ? parseFloat(item.costOfAsset).toFixed(2) : 0.00);
            row.push(item.method ? item.method : 'NA');
            row.push(item.process ? item.process : 'NA');
            row.push(item.costOfAsset ? parseFloat(item.costOfAsset).toFixed(2) : 0.00);
            worksheet.addRow(row);
            const vatCellC = worksheet.getCell('C' + worksheet.rowCount);
            // Set the alignment of the VAT cell to right
            vatCellC.alignment = { horizontal: 'right' };
            const vatCellD = worksheet.getCell('D' + worksheet.rowCount);
            // Set the alignment of the VAT cell to right
            vatCellD.alignment = { horizontal: 'right' };
            const vatCellE = worksheet.getCell('E' + worksheet.rowCount);
            // Set the alignment of the VAT cell to right
            vatCellE.alignment = { horizontal: 'right' };
            const vatCellH = worksheet.getCell('H' + worksheet.rowCount);
            // Set the alignment of the VAT cell to right
            vatCellH.alignment = { horizontal: 'right' };
        });
        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, 'Non Assets.xlsx');
        });
    }
}
AssetNonListcompoennetComponent.ɵfac = function AssetNonListcompoennetComponent_Factory(t) { return new (t || AssetNonListcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_5__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
AssetNonListcompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AssetNonListcompoennetComponent, selectors: [["app-asset-non-listcompoennet"]], decls: 44, vars: 2, consts: [[1, "row", "headerButtons"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Assets Name", 1, "form-control", "pe-5", "my-2", "mx-0"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "fas", "fa-download"], [2, "width", "100%", "overflow-x", "auto", "margin-top", "8px"], [1, "table", "table-responsive", "table-striped", "fs--1", "mb-0"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], ["class", "btn-reveal-trigger text-left ", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], [2, "vertical-align", "middle"], [2, "vertical-align", "middle", "text-align", "right"], [1, "text-nowrap", 2, "text-align", "right !important", "vertical-align", "middle"], [1, "flex"], [1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", 2, "color", "red", 3, "click"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function AssetNonListcompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_4_listener() { return ctx.nonAssetsAddForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Add Non Current Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_7_listener() { return ctx.OpenRunDepreciation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Run Depreciation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_9_listener() { return ctx.downlaodAllData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Value of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Depreciation of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " Cost of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AssetNonListcompoennetComponent_tr_26_Template, 22, 19, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, AssetNonListcompoennetComponent_tbody_27_Template, 4, 0, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Delete Non Current Asset? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Are you sure to delete non current Asset?");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_a_click_42_listener() { return ctx.deleteAsset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.NonAseetData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.NonAseetData.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n  custom-dialog-assets-class {\n  height: 100vh !important;\n  margin-left: 35% !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n  padding: 0;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 420px;\n}\n\n@media screen and (max-width: 800px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LW5vbi1saXN0Y29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0csbUJBQUE7RUFDRCxlQUFBO0FBRU47O0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFFRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUtBLDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFENUM7O0FBS0U7RUFDRSxXQUFBO0FBRko7O0FBQ0U7RUFDRSxXQUFBO0FBRko7O0FBSUU7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVNBO0VBQ0U7SUFDRSx1QkFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoiYXNzZXQtbm9uLWxpc3Rjb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJTZWFyY2hCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICB9XHJcbiAgLnRib2R5LCB0ZCwgdGZvb3QsIHRoLCB0aGVhZCwgdHIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLy8gYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgLy9jb2xvcjogaW5oZXJpdDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBjdXN0b20tZGlhbG9nLWFzc2V0cy1jbGFzc3tcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSUgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcblxyXG4uaGVhZGVyQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mb3JtQnV0dG9ucyB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWJhc2lzOiA0MjBweDtcclxufVxyXG5cclxuLy8gTWVkaWEgcXVlcnkgZm9yIGJ1dHRvbnMgYW5kIHNlYXJjaCBiYXIuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 89951:
/*!*********************************************************************!*\
  !*** ./src/app/pages/assets-module/assets-module-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsModuleRoutingModule": function() { return /* binding */ AssetsModuleRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maincompoennet/maincompoennet.component */ 82849);
/* harmony import */ var _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset-listcompoennet/asset-listcompoennet.component */ 24898);
/* harmony import */ var _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-non-listcompoennet/asset-non-listcompoennet.component */ 28309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_0__.MaincompoennetComponent,
        children: [
            {
                path: '',
                redirectTo: 'aseets-list',
                pathMatch: 'full'
            },
            {
                path: "aseets-list",
                component: _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_1__.AssetListcompoennetComponent
            },
            {
                path: "non-aseets-list",
                component: _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__.AssetNonListcompoennetComponent
            },
        ]
    }
];
class AssetsModuleRoutingModule {
}
AssetsModuleRoutingModule.ɵfac = function AssetsModuleRoutingModule_Factory(t) { return new (t || AssetsModuleRoutingModule)(); };
AssetsModuleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AssetsModuleRoutingModule });
AssetsModuleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AssetsModuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 29886:
/*!*************************************************************!*\
  !*** ./src/app/pages/assets-module/assets-module.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsModuleModule": function() { return /* binding */ AssetsModuleModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-module-routing.module */ 89951);
/* harmony import */ var _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maincompoennet/maincompoennet.component */ 82849);
/* harmony import */ var _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-listcompoennet/asset-listcompoennet.component */ 24898);
/* harmony import */ var _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset-non-listcompoennet/asset-non-listcompoennet.component */ 28309);
/* harmony import */ var _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-non-formcompoennet/asset-non-formcompoennet.component */ 31046);
/* harmony import */ var _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-formcompoennet/asset-formcompoennet.component */ 99871);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-edit-formcompoennet/asset-edit-formcompoennet.component */ 74328);
/* harmony import */ var _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./non-asset-edit-form/non-asset-edit-form.component */ 72730);
/* harmony import */ var _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./run-depraciation-component/run-depraciation-component.component */ 93082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
















class AssetsModuleModule {
}
AssetsModuleModule.ɵfac = function AssetsModuleModule_Factory(t) { return new (t || AssetsModuleModule)(); };
AssetsModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AssetsModuleModule });
AssetsModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssetsModuleRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AssetsModuleModule, { declarations: [_maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_1__.MaincompoennetComponent,
        _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__.AssetListcompoennetComponent,
        _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_3__.AssetNonListcompoennetComponent,
        _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_4__.AssetNonFormcompoennetComponent,
        _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_5__.AssetFormcompoennetComponent,
        _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_7__.AssetEditFormcompoennetComponent,
        _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_8__.NonAssetEditFormComponent,
        _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_9__.RunDepraciationComponentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssetsModuleRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule] }); })();


/***/ }),

/***/ 82849:
/*!********************************************************************************!*\
  !*** ./src/app/pages/assets-module/maincompoennet/maincompoennet.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaincompoennetComponent": function() { return /* binding */ MaincompoennetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class MaincompoennetComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaincompoennetComponent.ɵfac = function MaincompoennetComponent_Factory(t) { return new (t || MaincompoennetComponent)(); };
MaincompoennetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaincompoennetComponent, selectors: [["app-maincompoennet"]], decls: 14, vars: 0, consts: [[1, "component-container", "container-fluid", "px-3", "pt-3", "bg-white"], ["id", "navPanel", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./aseets-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], ["routerLink", "./non-aseets-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]], template: function MaincompoennetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Non Current Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 72730:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/assets-module/non-asset-edit-form/non-asset-edit-form.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonAssetEditFormComponent": function() { return /* binding */ NonAssetEditFormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/product.service */ 3560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 32220);

















function NonAssetEditFormComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Assets Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Value of Assets is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Scrap Value is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Payment Mode is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_ng_container_78_Template_input_keypress_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.alphaOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function NonAssetEditFormComponent_ng_container_78_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.addAddtionalDetails(); })("keypress", function NonAssetEditFormComponent_ng_container_78_Template_input_keypress_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_ng_container_78_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const group_r11 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.deleteaddAddtionalDetails(group_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r12 + 1);
} }
function NonAssetEditFormComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_div_79_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.addAddtionalDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Add New Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_div_110_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Depreciation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_div_110_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Useful Life");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NonAssetEditFormComponent_div_110_mat_option_5_Template, 2, 0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NonAssetEditFormComponent_div_110_mat_option_6_Template, 2, 0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.nonAssetsForm.get("assetsMethod").value == "Simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.nonAssetsForm.get("assetsMethod").value == "Simple");
} }
function NonAssetEditFormComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enter Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_111_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Enter Depreciation %");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_112_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function NonAssetEditFormComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enter Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_114_Template_input_keypress_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.numberOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
class NonAssetEditFormComponent {
    constructor(formBuilder, router, toastService, titleCasePipe, dialogRef, cdr, assetsServiceService, productService, NonassetData) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.assetsServiceService = assetsServiceService;
        this.productService = productService;
        this.NonassetData = NonassetData;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
        this.additionalCost = [];
        this.ranges = [
            {
                value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
                label: 'Last 7 Days'
            },
            {
                value: [new Date(new Date().setDate(new Date().getMonth() - 1)), new Date()],
                label: 'Last Month'
            }
        ];
        this.today = new Date();
        this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
        this.selectedYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.nonassetId = this.NonassetData.NonassetId;
        this.getASSETData();
        this.getASSETById();
        this.createnonAseetsForm();
        this.todaysDate = new Date();
    }
    createnonAseetsForm() {
        this.nonAssetsForm = this.formBuilder.group({
            assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            valueOfAssets: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            scrapValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            costOfAssets: [0],
            depreciation: [false],
            assetsMethod: [""],
            assetProcess: [""],
            assetDeprecianinPer: [""],
            assetsYear: [""],
            paymentMode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            addtionalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([]),
        });
        this.additionalDetailsControls.valueChanges.subscribe(data => {
            this.toatalAmount = data.reduce((a, b) => a + +b.amount, 0);
            this.updateTotalCostOfAssets();
        });
        // Subscribe to value changes of valueOfAssets control
        this.nonAssetsForm.get('valueOfAssets').valueChanges.subscribe(() => {
            this.updateTotalCostOfAssets();
        });
    }
    alphaOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        // Allow alphabets (a-z, A-Z) and space (charCode 32)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
            return true;
        }
        return false;
    }
    updateTotalCostOfAssets() {
        const valueOfAssets = parseFloat(this.nonAssetsForm.get('valueOfAssets').value);
        console.log('valueOfAssets value -->', valueOfAssets);
        let allTotal = 0; // Initialize to 0
        if (!isNaN(valueOfAssets)) {
            allTotal = valueOfAssets; // Set to valueOfAssets if it's a valid number
        }
        if (true) {
            const toatalAmount = parseFloat(this.toatalAmount); // Parse toatalAmount if needed
            console.log('toatalAmount value -->', toatalAmount);
            if (!isNaN(toatalAmount)) {
                allTotal += toatalAmount; // Add toatalAmount if it's a valid number
            }
        }
        console.log('allTotal value -->', allTotal);
        this.nonAssetsForm.patchValue({
            costOfAssets: allTotal,
        });
    }
    getASSETData() {
        this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then((res) => {
            console.log("AssetsByLedegr", res);
            this.GLData = res.data.map((item) => { return item.glNumber; });
        });
    }
    get f() {
        return this.nonAssetsForm.controls;
    }
    createaddtionalDetails() {
        // this.cdr.detectChanges();
        try {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
            });
        }
        catch (e) {
        }
    }
    get additionalDetailsControls() {
        try {
            return this.nonAssetsForm.get('addtionalDetails');
        }
        catch (e) {
        }
    }
    addAddtionalDetails() {
        try {
            const data = this.nonAssetsForm.get('addtionalDetails');
            data.push(this.createaddtionalDetails());
            this.cdr.detectChanges();
        }
        catch (e) {
            console.log(e);
        }
    }
    deleteaddAddtionalDetails(index) {
        const data = this.nonAssetsForm.get('addtionalDetails');
        if (data.length > 0) {
            data.removeAt(data.length - 1); // Remove the last element
        }
        this.cdr.detectChanges();
    }
    cancel() {
        this.dialogRef.close();
    }
    postnonAsseTsForm() {
        this.formArrayData = this.additionalDetailsControls.value;
        this.submitted = true;
        if (this.nonAssetsForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            return false;
        }
        else {
            if (this.formArrayData.length < 1) {
                // this.toastService.openErrorSnackBar(
                //   "Please Add At Least One Expense Item To Proceed!!!"
                // );
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Please Add At Least One Expense Item To Proceed!!!",
                });
                return false;
            }
            let Body = {
                "update": {
                    "userId": this.currentUser.id,
                    //"glNumber": "1.1.5",
                    "assetsType": "NON CURRENT",
                    "assetName": this.nonAssetsForm.controls.assetName.value,
                    "date": moment__WEBPACK_IMPORTED_MODULE_0__(this.nonAssetsForm.controls.assetDate.value, 'DD-MMM-YYYY').format('YYYY-MM-DD'),
                    "valueOfAsset": this.nonAssetsForm.controls.valueOfAssets.value,
                    "costOfAsset": this.nonAssetsForm.controls.costOfAssets.value,
                    "uploadDocument": "",
                    "depreciation": this.nonAssetsForm.controls.depreciation.value,
                    "method": this.nonAssetsForm.controls.assetsMethod.value,
                    "process": this.nonAssetsForm.controls.assetProcess.value,
                    "enterDepreciation": this.nonAssetsForm.controls.assetDeprecianinPer.value,
                    "year": this.nonAssetsForm.controls.assetsYear.value
                },
                "additionalDetails": this.formArrayData,
            };
            this.assetsServiceService.updateNonCurrentAssets(Body, this.nonassetId).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: 'Non Current Assets updated Successfully!!!',
                });
                this.assetsServiceService.notifyassetsAdded();
                this.dialogRef.close();
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: this.titleCasePipe.transform(err.error.error_message),
                    });
                    // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: "Something Went Wrong.",
                    });
                }
            });
        }
    }
    documentChange(e) {
        let formdata = new FormData();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(file);
            if (file == null) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Please Select Image To Upload.",
                });
                // this.toastService.openErrorSnackBar(
                //   "Please Select Image To Upload.",
                // );
            }
            else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then((res) => {
                    this.productPicUrl = res.data.location;
                    console.log("this.productPicUrl", this.productPicUrl);
                });
            }
        }
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.nonAssetsForm.get('assetDate').value;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.nonAssetsForm.get('assetDate').setValue(new Date());
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    getASSETById() {
        this.assetsServiceService.getNONCurrentAssetsDataBYId({}, this.nonassetId).then((res) => {
            this.nonAssetsForm.patchValue({
                assetName: res.data.assetName ? res.data.assetName : null,
                assetDate: res.data.date ? moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY"),
                valueOfAssets: res.data.valueOfAsset ? res.data.valueOfAsset : 0,
                scrapValue: res.data.scrapValue ? res.data.scrapValue : 0,
                costOfAssets: res.data.costOfAsset ? res.data.costOfAsset : 0,
                depreciation: res.data.depreciation ? res.data.depreciation : false,
                assetsMethod: res.data.method ? res.data.method : null,
                assetProcess: res.data.process ? res.data.process : null,
                assetDeprecianinPer: res.data.enterDepreciation ? res.data.enterDepreciation : null,
                assetsYear: res.data.year ? res.data.year : null,
                paymentMode: res.data.paymentMode ? res.data.paymentMode : null,
            });
            this.additionalCost = res.data.equipmentAdditionals,
                this.additionalCostlength = this.additionalCost.length;
            if (this.additionalCostlength > 0) {
                for (let i = 0; i < this.additionalCostlength; i++) {
                    if (this.additionalCost[i].id) {
                        this.additionalDetailsControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.additionalCost[i].id),
                            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.additionalCost[i].name),
                            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.additionalCost[i].amount),
                        }));
                    }
                    else {
                        this.additionalDetailsControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.additionalCost[i].name),
                            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.additionalCost[i].amount),
                        }));
                    }
                }
            }
        });
    }
}
NonAssetEditFormComponent.ɵfac = function NonAssetEditFormComponent_Factory(t) { return new (t || NonAssetEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
NonAssetEditFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NonAssetEditFormComponent, selectors: [["app-non-asset-edit-form"]], decls: 115, vars: 19, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "assetDate", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "ngModel", "maxDate", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["matNativeControl", "", "type", "text", "placeholder", "Value of Assets (in \u20B9)", "formControlName", "valueOfAssets", "required", "", 3, "keypress"], ["matNativeControl", "", "type", "text", "placeholder", "Scrap Value (in \u20B9)", "formControlName", "scrapValue", "required", "", 3, "keypress"], [1, "row", "mb-3"], ["required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Payment Mode", "formControlName", "paymentMode"], ["value", "Cash"], ["value", "Bank"], ["value", "Credit"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], [1, "form-label", "mb-5"], [1, "row", "mt-2"], [1, "table-responsive"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center", "inner-model-table-heading", "bg-white"], [1, "p-2", 2, "width", "10% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "width", "50% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "text-align", "center", "vertical-align", "middle"], ["formArrayName", "addtionalDetails", 4, "ngFor", "ngForOf"], ["class", "row d-flex justify-content-end mt-2", 4, "ngIf"], [1, "col-md-6", "col-sm-12", "col-lg-3", "col-xl-3"], [1, "form-label", 2, "margin-top", "20px"], [1, "col-md-6", "col-sm-12", "col-lg-4", "col-xl-4"], ["appearance", "outline", 1, "example-full-width", "bg-light"], ["matNativeControl", "", "type", "text", "readonly", "", "disabled", "", "placeholder", "Cost of Assets (in \u20B9)", "formControlName", "costOfAssets", 1, "disbaleFieldBg", 3, "keypress"], [1, "mb-3"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12", "px-0", "mx-0", 2, "width", "225px"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 1, "inputImageUpload", "px-0", 2, "margin-left", "16px", "margin-top", "6px", 3, "change"], [1, "col-md-6", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "form-check", "form-switch", "mb-0"], ["id", "customSwitch1", "type", "checkbox", "formControlName", "depreciation", 1, "form-check-input"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Method Name", "formControlName", "assetsMethod"], ["value", "Simple"], ["value", "WDM"], ["class", "col-md-6 col-sm-12 col-lg-6 col-xl-6", 4, "ngIf"], [1, "text-danger"], ["formArrayName", "addtionalDetails"], [3, "formGroupName"], [2, "vertical-align", "middle", "text-align", "center", "padding", "9px"], [2, "vertical-align", "middle", "text-align", "center"], ["matNativeControl", "", "matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", 3, "keypress"], ["matInput", "", "type", "text", "formControlName", "amount", 3, "keyup.enter", "keypress"], [1, "Icons", 2, "vertical-align", "middle", "text-align", "center"], ["type", "button", 1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red"], [1, "row", "d-flex", "justify-content-end", "mt-2"], [1, "col-sm-12", "col-md-6", "col-lg-6", "text-nowrap", "mb-1", "d-grid"], [1, "btn", "btn-outline-warning", "dash", "fs--1", 3, "click"], ["id", "boot-icon", 1, "bi", "bi-plus-lg", "newrow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add Row", 1, "me-2", "fs--1", "text-black", "newrow"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Process Name", "formControlName", "assetProcess"], ["value", "Depreciation", 4, "ngIf"], ["value", "Useful Life", 4, "ngIf"], ["value", "Depreciation"], ["value", "Useful Life"], ["matNativeControl", "", "type", "text", "placeholder", "Enter Amount", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Depreciation %", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Enter Year", "formControlName", "assetsYear", 3, "keypress"]], template: function NonAssetEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Update Non Current Assets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_Template_button_click_6_listener() { return ctx.postnonAsseTsForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Assets Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NonAssetEditFormComponent_mat_error_19_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NonAssetEditFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.todaysDate = $event; })("click", function NonAssetEditFormComponent_Template_input_click_24_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, NonAssetEditFormComponent_mat_error_28_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Value of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_36_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, NonAssetEditFormComponent_mat_error_37_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Scrap Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_44_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, NonAssetEditFormComponent_mat_error_45_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Payment Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, NonAssetEditFormComponent_mat_error_60_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Additional Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "thead", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Amount (in \u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, NonAssetEditFormComponent_ng_container_78_Template, 11, 2, "ng-container", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, NonAssetEditFormComponent_div_79_Template, 6, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Cost of Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "mat-form-field", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_86_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Upload Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function NonAssetEditFormComponent_Template_input_change_92_listener($event) { return ctx.documentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Depreciation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "mat-select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "WDM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, NonAssetEditFormComponent_div_110_Template, 7, 2, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, NonAssetEditFormComponent_div_111_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](112, NonAssetEditFormComponent_div_112_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](114, NonAssetEditFormComponent_div_114_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.nonAssetsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c0, ctx.f.assetName.invalid && ctx.f.assetName.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetName.touched) && (ctx.f.assetName.errors == null ? null : ctx.f.assetName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.todaysDate)("maxDate", ctx.today)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.assetDate.touched) && (ctx.f.assetDate.errors == null ? null : ctx.f.assetDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.valueOfAssets.touched) && (ctx.f.valueOfAssets.errors == null ? null : ctx.f.valueOfAssets.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.scrapValue.touched) && (ctx.f.scrapValue.errors == null ? null : ctx.f.scrapValue.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.paymentMode.touched) && (ctx.f.paymentMode.errors == null ? null : ctx.f.paymentMode.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.additionalDetailsControls.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.additionalCostlength || !ctx.formArrayData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value != "WDM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value === "Simple" && ctx.nonAssetsForm.get("assetProcess").value === "Depreciation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetsMethod").value == "WDM" || ctx.nonAssetsForm.get("assetProcess").value == "Depreciation %");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nonAssetsForm.get("assetProcess").value == "Useful Life");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.inputImageUpload[_ngcontent-%COMP%] {\n  border: 1px solid #d6d2d2;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1hc3NldC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUhGOztFQU1BO0lBQ0UsZ0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6Im5vbi1hc3NldC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmljb25jYWxlbmRlcntcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0SW1hZ2VVcGxvYWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjEwLCAyMTApO1xyXG59XHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0OnJlYWQtb25seXtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 93082:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/assets-module/run-depraciation-component/run-depraciation-component.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RunDepraciationComponentComponent": function() { return /* binding */ RunDepraciationComponentComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/assets-service.service */ 93306);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function RunDepraciationComponentComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.saveRunDepraciation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RunDepraciationComponentComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.updateRunDepraciation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RunDepraciationComponentComponent {
    constructor(dialogRef, formBuilder, toastService, assetsServiceService, titleCasePipe) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.assetsServiceService = assetsServiceService;
        this.titleCasePipe = titleCasePipe;
        this.isShow = false;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.isQuarterly = false;
        this.isYearly = false;
        this.isHalfYearly = false;
        this.isMonthly = false;
    }
    ngOnInit() {
        this.createRunDepreciationForm();
    }
    createRunDepreciationForm() {
        this.runDepreciationForm = this.formBuilder.group({
            depereceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    saveRunDepraciation() {
        const requestBody = {
            userId: this.currentUser.id,
            monthly: this.isMonthly,
            yearly: this.isYearly,
            quaterly: this.isQuarterly,
            halfyearly: this.isHalfYearly,
        };
        if (!(requestBody.monthly || requestBody.yearly || requestBody.quaterly || requestBody.halfyearly)) {
            this.toastService.toastMsg({
                title: "Error",
                content: this.titleCasePipe.transform("Please Select at List One!!!"),
            });
            return false;
        }
        this.assetsServiceService.addRundeprec(requestBody, this.currentUser.id).then((res) => {
            this.toastService.toastMsg({
                title: "Success",
                content: 'Run Depreciation Added Successfully!!!',
            });
            this.isShow = true;
            this.assetsServiceService.notifyassetsAdded();
            this.dialogRef.close();
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
    updateRunDepraciation() {
        const requestBody = {
            userId: this.currentUser.id,
            monthly: this.isMonthly,
            yearly: this.isYearly,
            quaterly: this.isQuarterly,
            halfyearly: this.isHalfYearly,
        };
        if (!(requestBody.monthly || requestBody.yearly || requestBody.quaterly || requestBody.halfyearly)) {
            this.toastService.toastMsg({
                title: "Error",
                content: this.titleCasePipe.transform("Please Select at List One!!!"),
            });
            return false;
        }
        else {
            this.assetsServiceService.updateRundeprec(requestBody, this.currentUser.id).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: 'Run Depreciation Updated Successfully!!!',
                });
                this.assetsServiceService.notifyassetsAdded();
                this.dialogRef.close();
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
    }
    updateRadio(event, value) {
        if (value === 'monthly') {
            this.isMonthly = event;
            this.isYearly = !event;
            this.isQuarterly = !event;
            this.isHalfYearly = !event;
        }
        else if (value === 'yearly') {
            this.isYearly = event;
            this.isMonthly = !event;
            this.isQuarterly = !event;
            this.isHalfYearly = !event;
        }
        else if (value === 'quarterly') {
            this.isQuarterly = event;
            this.isMonthly = !event;
            this.isYearly = !event;
            this.isHalfYearly = !event;
        }
        else if (value === 'halfYearly') {
            this.isHalfYearly = event;
            this.isMonthly = !event;
            this.isYearly = !event;
            this.isQuarterly = !event;
        }
    }
}
RunDepraciationComponentComponent.ɵfac = function RunDepraciationComponentComponent_Factory(t) { return new (t || RunDepraciationComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe)); };
RunDepraciationComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RunDepraciationComponentComponent, selectors: [["app-run-depraciation-component"]], decls: 28, vars: 6, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], [1, "modal-body"], [1, "container-fluid", "px-0"], [1, "flex-container"], [1, "flex-item", "form-label", "text-nowrap"], ["type", "radio", 3, "checked", "change"], [1, "radio-label", "m-1"], ["type", "radio", 3, "checked", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"]], template: function RunDepraciationComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Run Depreciation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RunDepraciationComponentComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RunDepraciationComponentComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RunDepraciationComponentComponent_Template_input_change_13_listener($event) { return ctx.updateRadio($event.target.checked, "monthly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_17_listener($event) { return ctx.updateRadio($event.target.checked, "quarterly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_21_listener($event) { return ctx.updateRadio($event.target.checked, "yearly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_25_listener($event) { return ctx.updateRadio($event.target.checked, "halfYearly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Half Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isMonthly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isQuarterly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isYearly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.isHalfYearly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-basis: 30px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 1200px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bi1kZXByYWNpYXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoicnVuLWRlcHJhY2lhdGlvbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtYmFzaXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_assets-module_assets-module_module_ts-es2015.js.map