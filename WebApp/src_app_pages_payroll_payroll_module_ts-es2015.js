"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_payroll_payroll_module_ts"],{

/***/ 92309:
/*!*****************************************************************!*\
  !*** ./src/app/core/services/saalry-release-service.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaalryReleaseServiceService": function() { return /* binding */ SaalryReleaseServiceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);




class SaalryReleaseServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.partyAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.partyAdded$ = this.partyAddedSource.asObservable();
    }
    notifyPartyAdded() {
        this.partyAddedSource.next();
    }
    getAllSalaryData(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAllSalary + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    AddEarnigData(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAllSalary + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAllSalaryDataByEmployeeId(data, employeeId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getSalaryByEmpoyeeId + employeeId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    PostEarningDeduct(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.AddEarningSalary + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
SaalryReleaseServiceService.ɵfac = function SaalryReleaseServiceService_Factory(t) { return new (t || SaalryReleaseServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
SaalryReleaseServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SaalryReleaseServiceService, factory: SaalryReleaseServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66529:
/*!**************************************************************************!*\
  !*** ./src/app/pages/payroll/assign-payroll/assign-payroll.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignPayrollComponent": function() { return /* binding */ AssignPayrollComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/payroll.service */ 86965);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 15644);














function AssignPayrollComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AssignPayrollComponent_mat_radio_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AssignPayrollComponent_mat_radio_button_23_Template_mat_radio_button_change_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const structure_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.selectStructure(structure_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const structure_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", structure_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](structure_r2.name);
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
class AssignPayrollComponent {
    constructor(dialogRef, employeeData, payrollService, toastService, titleCasePipe, rolesPermissionsService, roleService, commonService) {
        this.dialogRef = dialogRef;
        this.employeeData = employeeData;
        this.payrollService = payrollService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.rolesPermissionsService = rolesPermissionsService;
        this.roleService = roleService;
        this.commonService = commonService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.structureName = [];
        this.submitted = false;
        this.empId = [];
        this.PayrollList = [];
        this.payrollData = [];
        this.todaysDate = new Date();
    }
    ngOnInit() {
        console.log("--------", this.employeeData);
        this.empId = this.employeeData.structureId;
        console.log("EMP IDDDD", this.empId);
        this.PayrollList = this.employeeData.payrollList;
        console.log("Payroll List", this.PayrollList);
        // this.PayrollList.forEach((item) => {
        //   this.payrollData.push({
        //     "id":item.employeePayroll.id,
        //     "hra":item.employeePayroll.hra,
        //     "basic": item.employeePayroll.basic,
        //     "specialAllowance": "0",
        //     "pf": item.employeePayroll.employeeContribution,
        //     "userId": item.id
        //   })
        // })
        console.log("payroll Dta--", this.payrollData);
        this.getStructureDetails();
        this.getProfileData();
    }
    getProfileData() {
        for (var i = 0; i < this.empId.length; i++) {
            console.log("empppppp III", this.empId[i]);
            this.roleService.getEmployeeById({}, this.empId[i]).then((res) => {
                console.log("Payroll employee by id ++++++++", res);
                this.PayrollList = res.data;
                this.payrollData.push({
                    "id": this.PayrollList.employeePayroll.id,
                    "hra": this.PayrollList.employeePayroll.hra,
                    "basic": this.PayrollList.employeePayroll.basic,
                    "specialAllowance": "0",
                    "pf": this.PayrollList.employeePayroll.employeeContribution,
                    "userId": this.PayrollList.id
                });
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
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    // To get all the structures.
    getStructureDetails() {
        this.payrollService.getAllStructures({}, this.currentUser.id).then((res) => {
            console.log("Structures", res);
            this.structureName = res.data.rows;
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // To save the assign structure form
    postAssignStructureForm() {
        this.submitted = true;
        if (this.structureId === undefined || this.structureId === null) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            let body = {
                "structureId": this.structureId,
                "empId": this.empId,
            };
            let bodypayrollPut = this.payrollData;
            this.payrollService.assignStructure(body).then((res) => {
                console.log(res);
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Payroll Assigned Successfully!!!",
                });
                // this.toastService.openSnackBar("Payroll Assigned Successfully!!!");
                this.commonService.notifyDataAdded();
                this.submitted = false;
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
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
            this.payrollService.retailerPayrollPut(bodypayrollPut, this.currentUser.id).then((res) => {
                console.log(res);
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Payroll Data Updated Successfully!!!",
                });
                // this.toastService.openSnackBar("Payroll Data Updated  Successfully!!!");
                this.commonService.notifyDataAdded();
                this.submitted = false;
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
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    // Select Structure
    selectStructure(strId) {
        this.structureId = strId;
        console.log("Select Structure", this.structureId);
    }
    // To close the dialog.
    clearAssignPayrollForm() {
        this.dialogRef.close();
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.todaysDate;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.todaysDate = new Date();
        }
    }
}
AssignPayrollComponent.ɵfac = function AssignPayrollComponent_Factory(t) { return new (t || AssignPayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_0__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService)); };
AssignPayrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AssignPayrollComponent, selectors: [["app-assign-payroll"]], decls: 24, vars: 7, consts: [[1, "modal-header"], [1, "modal-title"], [1, "payrollButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "row", "my-3"], [1, "flexAssignPayroll"], [1, "form-label", "flex-item"], ["appearance", "outline", 1, "example-full-width", "flex-item", 2, "font-size", "12px"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "Date", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "ngModelOptions", "ngModel", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6", "ps-1"], ["name", "structures"], [3, "value", "change", 4, "ngFor", "ngForOf"], [1, "text-danger"], [3, "value", "change"], ["value", "id", 1, "structureNames"]], template: function AssignPayrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Assign Salary Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignPayrollComponent_Template_button_click_4_listener() { return ctx.clearAssignPayrollForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignPayrollComponent_Template_button_click_6_listener() { return ctx.postAssignStructureForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignPayrollComponent_Template_input_ngModelChange_15_listener($event) { return ctx.todaysDate = $event; })("click", function AssignPayrollComponent_Template_input_click_15_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AssignPayrollComponent_mat_error_19_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-radio-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AssignPayrollComponent_mat_radio_button_23_Template, 3, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.todaysDate.touched) && (ctx.todaysDate.errors == null ? null : ctx.todaysDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.structureName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton], styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0;\n  white-space: wrap;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n.payrollButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.flexAssignPayroll[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  width: 240px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -20px !important;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 10px 10px 12px;\n}\n\n.structureNames[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 4px;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #EB8B3F;\n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #EB8B3F;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: #EB8B3F !important;\n}\n\n@media screen and (max-width: 992px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .payrollButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBVUE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBUEY7O0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQVJGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBYUE7RUFDRSx5QkFBQTtBQVZGOztBQWNBO0VBQ0UscUJBQUE7QUFYRjs7QUFlQTtFQUNFLG9DQUFBO0FBWkY7O0FBaUJBO0VBR0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBaEJGOztFQW9CQTtJQUNFLGdCQUFBO0VBakJGO0FBQ0YiLCJmaWxlIjoiYXNzaWduLXBheXJvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGlnaW5nIGV2ZXJ5dGhpbmcgYXQgY2VudGVyLlxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICB3aGl0ZS1zcGFjZTogd3JhcDtcclxufVxyXG5cclxuLy8gSGVhZGluZyBvZiB0aGUgbW9kYWxcclxuLm1vZGFsLXRpdGxlIHtcclxuICBjb2xvcjogI0VCOEIzRjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLy8gVG8gYWxpZ24gYnV0dG9ucyBhdCBlbmQuXHJcbi5wYXlyb2xsQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBUbyBmaXggdGhlIHdpZHRoIG9mIGRhdGUuXHJcbi5mbGV4QXNzaWduUGF5cm9sbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC1pdGVtIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgZW5vdWdoIHNwYWNlIGZvciBtb2RhbCBib2R5IGF0IGFueSBzY3JlZW4gc2l6ZS5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGhlaWdodDogODglO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vLyBUbyBnaXZlIGhvdmVyaW5nIGNvbG9yIHRvIGZvcm0gaW5wdXRzLlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgY29sb3IgdG8gYm9yZGVycyBvbiBjbGlja2luZyB0aGUgZm9ybSBpbnB1dHMuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBEYXRlIEljb25cclxuLmljb25jYWxlbmRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gVG8gYXJyYW5nZSByYWRpbyBidXR0b25zIGNvbHVtbi13aXNlXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46MTBweCAxMHB4IDEwcHggMTJweDtcclxufVxyXG5cclxuLy8gSW5jcmVhc2luZyBmb250IHNpemUgb2Ygc3RydWN0dXJlIG5hbWVzLlxyXG4uc3RydWN0dXJlTmFtZXMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4vLyBJdCBhZmZlY3RzIGlubmVyIGNpcmNsZSBjb2xvciBvZiByYWRpbyBidXR0b25zLlxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNFQjhCM0Y7XHJcbn1cclxuXHJcbi8vIEl0IGFmZmVjdHMgb3V0ZXIgY2lyY2xlIGNvbG9yIG9mIHJhZGlvIGJ1dHRvbnMuXHJcbjo6bmctZGVlcCAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRUI4QjNGO1xyXG59XHJcblxyXG4vLyBJdCBhZmZlY3RzIHJpcHBsZSBlZmZlY3QgY29sb3Igb2YgcmFkaW8gYnV0dG9ucy5cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCOEIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyaWVzXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAvLyBBbGlnaW5nIGV2ZXJ5dGhpbmcgYXQgY2VudGVyIGNvbHVtbi13aXNlIGZvciBzbWFsbGVyIHNjcmVlbiBzaXplLlxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8vIEdhcCBiZXR3ZWVuIHRoZSBoZWFkZXIgYW5kIGJ1dHRvbnMuXHJcbiAgLnBheXJvbGxCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 94077:
/*!******************************************************************************!*\
  !*** ./src/app/pages/payroll/create-structure/create-structure.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStructureComponent": function() { return /* binding */ CreateStructureComponent; }
/* harmony export */ });
/* harmony import */ var _new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new-structure/new-structure.component */ 69486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/payroll.service */ 86965);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 32220);













const _c0 = function (a0) { return { "selected-record": a0 }; };
function CreateStructureComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateStructureComponent_div_9_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.selectStructure(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, item_r8.id === ctx_r0.selectedRecordId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r8.name);
} }
function CreateStructureComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r11, " ");
} }
function CreateStructureComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Start day is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateStructureComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r12, " ");
} }
function CreateStructureComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " End Day is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateStructureComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Basic is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateStructureComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " HRA is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CreateStructureComponent_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Employee Contribution is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class CreateStructureComponent {
    constructor(dialog, payrollService, formBuilder, toastService, titleCasePipe, commonservice, rolesPermissionsService) {
        this.dialog = dialog;
        this.payrollService = payrollService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.commonservice = commonservice;
        this.rolesPermissionsService = rolesPermissionsService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
        this.ctc = 0;
        this.pf = false;
        this.deductTax = false;
        this.structureIdFlag = false;
        this.selectedRecordId = null; // Initialize with null or a default ID
        this.slectedStrucureName = "";
        this.PayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31];
    }
    ngOnInit() {
        this.CreateStructureForm = this.formBuilder.group({
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            basic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            hra: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            pf: [false],
            employeeContribution: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deductTax: [false],
        });
        this.getStructureDetails();
        this.commonservice.rowAdded$.subscribe(() => {
            this.getStructureDetails();
        });
        this.getUsersList();
        // To make the first option available as placeholder and remove it when clicked.
        document.getElementById('employeeContributionSelect').addEventListener('click', () => {
            const placeholderOption = document.getElementById('employeeContributionSelect').querySelector('option[data-placeholder]');
            if (placeholderOption) {
                placeholderOption.remove();
            }
        });
    }
    // To get the list of all employees.
    getUsersList() {
        this.rolesPermissionsService.getUsers({}, this.currentUser.id).then((res) => {
            this.employeeList = res.data;
            console.log("employee", this.employeeList);
        });
    }
    // To get the list of all structures.
    getStructureDetails() {
        this.payrollService.getAllStructures({}, this.currentUser.id).then((res) => {
            console.log("Structures", res);
            this.StructureId = res.data.rows;
            this.structureName = res.data.rows;
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message),
                });
                // this.toastService.openErrorSnackBar(
                //   this.titleCasePipe.transform(err.error.error_message)
                // );
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong.",
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // Select Structure
    selectStructure(structureId) {
        console.log("Select Structure", structureId);
        this.payrollService.getStructureById({}, structureId).then((res) => {
            this.StructureId = res.data.id;
            this.selectedRecordId = this.StructureId;
            console.log("Structure by id", this.StructureId);
            const formattedStartDate = res.data.from;
            const formattedEndDate = res.data.to;
            this.slectedStrucureName = res.data.name;
            this.updateEndDateOptions();
            this.CreateStructureForm.patchValue({
                "startDate": formattedStartDate,
                "endDate": formattedEndDate,
                // "startDate": res.data.from ? (moment(res.data.from).format("DD-MMM-YYYY")) : (moment(res.data.from).format("DD-MMM-YYYY")),
                // "endDate": res.data.to ? (moment(res.data.to).format("DD-MMM-YYYY")) : (moment(res.data.to).format("DD-MMM-YYYY")),
                "basic": res.data.basic,
                "hra": res.data.hra,
                "pf": res.data.pfStatus,
                "employeeContribution": res.data.employeeContribution,
                "deductTax": res.data.professionalTax,
                "structureId": res.data.id,
            });
        });
    }
    // Short-cut used in mat errors.
    get f() {
        return this.CreateStructureForm.controls;
    }
    // To save the payroll setting.
    savePayrollsetting() {
        this.submitted = true;
        if (this.CreateStructureForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            console.log(this.CreateStructureForm);
            return false;
        }
        else {
            let body = {
                "from": this.CreateStructureForm.controls.startDate.value,
                "to": this.CreateStructureForm.controls.endDate.value,
                "pfStatus": this.CreateStructureForm.controls.pf.value,
                "employeeContribution": this.CreateStructureForm.controls.employeeContribution.value,
                "professionalTax": this.CreateStructureForm.controls.deductTax.value,
                "basic": this.CreateStructureForm.controls.basic.value,
                "hra": this.CreateStructureForm.controls.hra.value,
                "structureId": this.StructureId,
            };
            console.log(body);
            this.payrollService.payrollSettingSave(body, this.StructureId).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Payroll Setting Data Added Successfully!!!",
                });
                // this.toastService.openSnackBar(
                //   "Payroll Setting Data Added Successfully!!!"
                // );
                this.CreateStructureForm.reset();
                this.submitted = false;
            }, (err) => {
                if (err.error.expose) {
                    // this.toastService.openErrorSnackBar(
                    //   this.titleCasePipe.transform(err.error.error_message)
                    // );
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
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    // To open a dialog box of new structure form.
    addNewStructure() {
        const dialogRef = this.dialog.open(_new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_0__.NewStructureComponent, {
            width: "500px",
            height: "730px",
            data: {},
            panelClass: "custom-dialog-new-structure",
            disableClose: true,
            position: {
                right: "0",
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    updateEndDateOptions() {
        const selectedStartDate = this.f.startDate.value;
        this.endDates = this.PayNumber.slice(selectedStartDate - 1); // Filter options based on selected "From" value
    }
}
CreateStructureComponent.ɵfac = function CreateStructureComponent_Factory(t) { return new (t || CreateStructureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_1__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__.RolesPermissionsService)); };
CreateStructureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateStructureComponent, selectors: [["app-create-structure"]], decls: 111, vars: 19, consts: [[1, "container-fluid", "bg-white", "p-0"], [1, "row", "d-flex", "flex-center", "mb-3"], [1, "navOption-btns", "my-2"], ["type", "button", 1, "btn", "text-nowrap", "mx-3", 2, "float", "right", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "row", "mt-3"], [1, "col-sm-12", "col-md-3", "col-lg-3", "col-xl-4", "col-xxl-5"], [1, "structureList"], ["class", "card cardList mt-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-9", "col-lg-8", "col-xl-7", "col-xxl-6", 2, "margin-bottom", "8px"], [1, "card", 2, "width", "100%", "border-radius", "5px"], [2, "width", "100%", "height", "100%", 3, "formGroup"], [1, "my-0", "py-0"], [1, "row", "my-3", "px-3"], [1, "col-10", 2, "font-size", "18px", "font-weight", "600"], [1, "col-2", 2, "color", "#FC7643"], [1, "col-12"], [1, "row", "my-2"], [1, "col-sm-12", "col-md-6", 2, "display", "flex", "align-items", "center"], [2, "color", "black"], [1, "error-asterisk"], [1, "col-sm-6", "col-md-3", "px-1"], [2, "padding-left", "5px"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "startDate", "placeholder", "From", "autocomplete", "off", "panelClass", "custom-mat-select-panel", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "endDate", "placeholder", "To", "autocomplete", "off", "panelClass", "custom-mat-select-panel"], [1, "row", "mt-2", "mb-4"], [1, "col-sm-12", "col-md-6", "px-1"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "basic", "placeholder", "Basic", "autocomplete", "off", "panelClass", "custom-mat-select-panel", "id", "employeeContributionSelect"], [3, "value"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "hra", "placeholder", "HRA", "autocomplete", "off", "panelClass", "custom-mat-select-panel", "id", "employeeContributionSelect"], ["data-placeholder", "", 3, "value"], [1, "col-sm-6", 2, "display", "flex", "align-items", "center"], [1, "col-sm-6", 2, "padding-left", "14px"], [1, "form-check", "form-switch"], ["type", "checkbox", "formControlName", "pf", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["matNativeControl", "", "disableOptionCentering", "", "formControlName", "employeeContribution", "placeholder", "Employee Contribution", "autocomplete", "off", "panelClass", "custom-mat-select-panel", "id", "employeeContributionSelect"], ["type", "checkbox", "formControlName", "deductTax", "id", "flexSwitchCheckDefault", 1, "form-check-input"], [1, "row", "mt-1", "px-3", 2, "float", "right"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "card", "cardList", "mt-1", 3, "ngClass"], [1, "structureName", 3, "click"], [1, "text-danger"]], template: function CreateStructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateStructureComponent_Template_button_click_3_listener() { return ctx.addNewStructure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CreateStructureComponent_div_9_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Payroll Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Pay Cycle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function CreateStructureComponent_Template_mat_select_selectionChange_33_listener() { return ctx.updateEndDateOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CreateStructureComponent_mat_option_34_Template, 2, 2, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CreateStructureComponent_mat_error_35_Template, 2, 0, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, CreateStructureComponent_mat_option_42_Template, 2, 2, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, CreateStructureComponent_mat_error_43_Template, 2, 0, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "40% CTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "50% CTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "60% CTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CreateStructureComponent_mat_error_59_Template, 2, 0, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "HRA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Basic * 8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Basic * 10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Basic * 12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CreateStructureComponent_mat_error_77_Template, 2, 0, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Does company have PF ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Employee Contribution ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "mat-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Basic * 8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Basic * 10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Basic * 12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, CreateStructureComponent_mat_error_100_Template, 2, 0, "mat-error", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Do you deduct professional tax ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateStructureComponent_Template_button_click_109_listener() { return ctx.savePayrollsetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.structureName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.CreateStructureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.slectedStrucureName ? ctx.slectedStrucureName : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.PayNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.startDate.touched) && (ctx.f.startDate.errors == null ? null : ctx.f.startDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.endDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.endDate.touched) && (ctx.f.endDate.errors == null ? null : ctx.f.endDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.basic.touched) && (ctx.f.basic.errors == null ? null : ctx.f.basic.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.hra.touched) && (ctx.f.hra.errors == null ? null : ctx.f.hra.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.employeeContribution.touched) && (ctx.f.employeeContribution.errors == null ? null : ctx.f.employeeContribution.errors.required));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], styles: [".form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n}\n\n.cardList[_ngcontent-%COMP%] {\n  margin: 0px 0px 16px 0px;\n}\n\n.structureName[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  height: 65px;\n}\n\n.structureList[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-y: auto;\n}\n\n.tableSize[_ngcontent-%COMP%] {\n  width: 75%;\n  border: 1px solid #EBEBEB;\n}\n\n  .custom-dialog-new-structure {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  background: white;\n  border-radius: 4px;\n  font-size: 14px;\n  width: 100%;\n  color: #8994A3;\n  cursor: pointer;\n}\n\n.selected-record[_ngcontent-%COMP%] {\n  background-color: #FC7643;\n  color: white;\n}\n\n.center-text[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  \n  align-items: center !important;\n  \n}\n\n.custom-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: white;\n  color: #333;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid #ccc;\n  transition: background-color 0.3s ease-in-out;\n  height: 30%;\n}\n\n.custom-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.custom-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.custom-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n@media screen and (max-width: 768px) {\n  .cardList[_ngcontent-%COMP%] {\n    margin: 8px 16px 8px;\n  }\n\n  .structureName[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .structureList[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: 300px;\n  }\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -24px;\n}\n\n@media screen and (max-width: 400px) {\n  .tableSize[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #EBEBEB;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFJQTtFQUNFLHdCQUFBO0FBREY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFORjs7QUFZQTtFQUNFLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVRGOztBQVdBO0VBRUMseUJBQUE7RUFDQSxZQUFBO0FBVEQ7O0FBYUE7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0VBQW9DLHlCQUFBO0VBQ3BDLDhCQUFBO0VBQWdDLHVCQUFBO0FBUmxDOztBQWNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7QUFaRjs7QUFnQkE7RUFDRSxtQkFBQTtBQWJGOztBQWlCQTtFQUNFLHlCQUFBO0FBZEY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUFmRjs7QUFtQkE7RUFHRTtJQUNFLG9CQUFBO0VBbEJGOztFQXNCQTtJQUNFLGVBQUE7RUFuQkY7O0VBdUJBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VBcEJGO0FBQ0Y7O0FBdUJBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQXJCRjs7QUF3QkE7RUFHRTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtFQXZCRjtBQUNGIiwiZmlsZSI6ImNyZWF0ZS1zdHJ1Y3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWFyY2ggYmFyXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgbWFyZ2luIGluIGJldHdlZW4gdGhlIGNhcmRzLlxyXG4uY2FyZExpc3Qge1xyXG4gIG1hcmdpbjogMHB4IDBweCAxNnB4IDBweDtcclxufVxyXG5cclxuLy8gVG8gYWxpZ24gc3RydWN0dXJlIG5hbWVzIGluIGNhcmRzLlxyXG4uc3RydWN0dXJlTmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4vLyBTY3JvbGxiYXIgdG8gdGhlIG5ldyBzdHJ1Y3R1cmVzXHJcbi5zdHJ1Y3R1cmVMaXN0IHtcclxuICBoZWlnaHQ6NTAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLy8gVG8gZ2l2ZSBjdXN0b20gc2l6ZSB0byB0YWJsZS5cclxuLnRhYmxlU2l6ZSB7XHJcbiAgd2lkdGg6NzUlO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI0VCRUJFQjtcclxufVxyXG5cclxuLy8gVG8gcGxhY2UgZGlhbG9nIGJveCBhdCByaWdodCBwb3NpdGlvbi5cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1uZXctc3RydWN0dXJlIHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gU2VsZWN0IG9wdGlvblxyXG5cclxuLy8gRm9yIGlucHV0IGJveC5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzg5OTRBMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNlbGVjdGVkLXJlY29yZCB7XHJcblxyXG4gYmFja2dyb3VuZC1jb2xvciA6I0ZDNzY0MztcclxuIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IC8qIEhvcml6b250YWwgY2VudGVyaW5nICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyAvKiBWZXJ0aWNhbCBjZW50ZXJpbmcgKi9cclxufVxyXG5cclxuXHJcblxyXG4vLyBGb3Igb3B0aW9ucy5cclxuLmN1c3RvbS1zZWxlY3Qgb3B0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC8vIGNvbG9yOiAjODk5NEEzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4vLyBMYXN0IG9wdGlvblxyXG4uY3VzdG9tLXNlbGVjdCBvcHRpb246bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLy8gSG92ZXIgZWZmZWN0IG9uIG9wdGlvbnMuXHJcbi5jdXN0b20tc2VsZWN0IG9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG5cclxuLy8gR2l2aW5nIGNvbG9yIHdoZW4gZm9jdXNlZCBvbiBpbnB1dC5cclxuLmN1c3RvbS1zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC8vIFRvIGdpdmUgbWFyZ2luIGluIGJldHdlZW4gdGhlIGNhcmRzLlxyXG4gIC5jYXJkTGlzdCB7XHJcbiAgICBtYXJnaW46IDhweCAxNnB4IDhweDtcclxuICB9XHJcblxyXG4gIC8vIFRvIGFsaWduIHN0cnVjdHVyZSBuYW1lcyBpbiBjYXJkcy5cclxuICAuc3RydWN0dXJlTmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAvLyBTY3JvbGxiYXIgdG8gdGhlIG5ldyBzdHJ1Y3R1cmVzXHJcbiAgLnN0cnVjdHVyZUxpc3Qge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuLmljb25jYWxlbmRlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gIC8vIFRvIGdpdmUgZnVsbCB3aWR0aCB0byB0aGUgdGFibGUuXHJcbiAgLnRhYmxlU2l6ZSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRUJFQkVCO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 78806:
/*!**********************************************************************!*\
  !*** ./src/app/pages/payroll/edit-payroll/edit-payroll.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPayrollComponent": function() { return /* binding */ EditPayrollComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/payroll.service */ 86965);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);















function EditPayrollComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Date Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EditPayrollComponent_mat_error_29_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " CTC is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EditPayrollComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EditPayrollComponent_mat_error_29_mat_error_1_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.ctc.errors == null ? null : ctx_r1.f.ctc.errors.required);
} }
const _c0 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "YYYY-MM-DD", showWeekNumbers: false }; };
const _c1 = function () { return { standalone: true }; };
class EditPayrollComponent {
    constructor(dialogRef, formBuilder, payrollService, toastService, titleCasePipe, commonService, payrollData, roleService) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.payrollService = payrollService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.commonService = commonService;
        this.payrollData = payrollData;
        this.roleService = roleService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
        this.todaysDate = new Date();
    }
    ngOnInit() {
        this.employeeId = this.payrollData.employeeId;
        this.getProfileData();
        this.EditPayrollForm = this.formBuilder.group({
            date: ["", new Date()],
            ctc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            basic: [""],
            hra: [""],
        });
    }
    // Short-cut used in mat errors.
    get f() {
        return this.EditPayrollForm.controls;
    }
    // To close the dialog.
    clearEditStructureForm() {
        this.dialogRef.close();
    }
    // To get the info of selected employees.
    getProfileData() {
        this.roleService.getEmployeeById({}, this.employeeId).then((res) => {
            var _a, _b;
            console.log("Payroll employee by id", res);
            // const calcBasic = (res.data.employeePayroll.ctc * res.data.employeePayroll.employeeStructure.basic);
            //const calcHRA = ((res.data.employeePayroll.ctc * res.data.employeePayroll.employeeStructure.basic) * res.data.employeePayroll.employeeStructure.hra);
            this.EditPayrollForm.patchValue({
                "ctc": res.data.employee ? res.data.employee.salary : 0,
                "basic": res.data.employeePayroll ? res.data.employeePayroll.employeeStructure.basic : 0,
                //"basic": res.data.employeePayroll.employeeStructure.basic,
                "hra": (_b = (_a = res.data.employeePayroll) === null || _a === void 0 ? void 0 : _a.employeeStructure) === null || _b === void 0 ? void 0 : _b.hra,
                // "basic": calcBasic ? calcBasic : 0.00,
                // "hra":calcHRA ? calcHRA : 0.00,
            });
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // To update the ctc of the employee.
    UpdatePayroll() {
        if (this.EditPayrollForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            let body = {
                "date": moment__WEBPACK_IMPORTED_MODULE_0__(this.EditPayrollForm.controls.date.value, 'DD-MMM-YYYY').format('YYYY-MM-DD'),
                "ctc": this.EditPayrollForm.controls.ctc.value,
                "empId": this.employeeId,
                "userId": this.employeeId
            };
            this.payrollService.addSalary(body).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Payroll Updated Successfully!!!",
                });
                // this.toastService.openSnackBar("Payroll Updated Successfully!!!");
                this.commonService.notifyDataAdded();
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
                    // this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.todaysDate;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.todaysDate = new Date();
        }
    }
}
EditPayrollComponent.ɵfac = function EditPayrollComponent_Factory(t) { return new (t || EditPayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_1__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__.RolesPermissionsService)); };
EditPayrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditPayrollComponent, selectors: [["app-edit-payroll"]], decls: 45, vars: 8, consts: [[1, "modal-header", "pt-0"], [1, "modal-title"], [1, "payrollButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "Date", "id", "datePicker", "bsDatepicker", "", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "ngModel", "bsConfig", "ngModelOptions", "ngModelChange", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "CTC", "autocomplete", "off", "formControlName", "ctc"], ["matNativeControl", "", "matInput", "", "placeholder", "Basic", "autocomplete", "off", "formControlName", "basic", "readonly", ""], ["matNativeControl", "", "matInput", "", "placeholder", "HRA", "autocomplete", "off", "formControlName", "hra", "readonly", ""], [1, "text-danger"], [4, "ngIf"]], template: function EditPayrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit Payroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditPayrollComponent_Template_button_click_4_listener() { return ctx.clearEditStructureForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditPayrollComponent_Template_button_click_6_listener() { return ctx.UpdatePayroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditPayrollComponent_Template_input_ngModelChange_17_listener($event) { return ctx.todaysDate = $event; })("click", function EditPayrollComponent_Template_input_click_17_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EditPayrollComponent_mat_error_21_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "CTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, EditPayrollComponent_mat_error_29_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "HRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.EditPayrollForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c0))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.todaysDate.touched) && (ctx.todaysDate.errors == null ? null : ctx.todaysDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.ctc.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.payrollButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-bottom: 0;\n  margin-left: 5px;\n  white-space: nowrap;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -20px !important;\n}\n\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .payrollButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGF5cm9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUFMRjs7QUFTQTtFQUNFLGNBQUE7QUFORjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBWUE7RUFHRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFYRjs7RUFlQTtJQUNFLGdCQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJlZGl0LXBheXJvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGlnaW5nIGV2ZXJ5dGhpbmcgYXQgY2VudGVyLlxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gVG8gYWxpZ24gYnV0dG9ucyBhdCBlbmQuXHJcbi5wYXlyb2xsQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBUbyBnaXZlIGVub3VnaCBzcGFjZSBmb3IgbW9kYWwgYm9keSBhdCBhbnkgc2NyZWVuIHNpemUuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBoZWlnaHQ6IDg4JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4vLyBIZWFkaW5nIG9mIHRoZSBtb2RhbFxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGNvbG9yOiAjRUI4QjNGO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8gVG8gYXJyYW5nZSBsYWJlbCBhbmQgaW5wdXQgZm9ybVxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8vIERhdGUgSWNvblxyXG4uaWNvbmNhbGVuZGVyIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBUbyBnaXZlIGhvdmVyaW5nIGNvbG9yIHRvIGZvcm0gaW5wdXRzLlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgY29sb3IgdG8gYm9yZGVycyBvbiBjbGlja2luZyB0aGUgZm9ybSBpbnB1dHMuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyaWVzXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAvLyBBbGlnaW5nIGV2ZXJ5dGhpbmcgYXQgY2VudGVyIGNvbHVtbi13aXNlIGZvciBzbWFsbGVyIHNjcmVlbiBzaXplLlxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8vIEdhcCBiZXR3ZWVuIHRoZSBoZWFkZXIgYW5kIGJ1dHRvbnMuXHJcbiAgLnBheXJvbGxCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 33709:
/*!**********************************************************************!*\
  !*** ./src/app/pages/payroll/payroll-list/payroll-list.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollListComponent": function() { return /* binding */ PayrollListComponent; }
/* harmony export */ });
/* harmony import */ var _assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign-payroll/assign-payroll.component */ 66529);
/* harmony import */ var _edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-payroll/edit-payroll.component */ 78806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/payroll.service */ 86965);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);










function PayrollListComponent_tr_38_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "NA", " ");
} }
function PayrollListComponent_tr_38_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r2.employee.employeeStructure.name, " ");
} }
function PayrollListComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PayrollListComponent_tr_38_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const item_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onChekedsingleCheckfalse($event, item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PayrollListComponent_tr_38_span_15_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PayrollListComponent_tr_38_span_16_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PayrollListComponent_tr_38_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const item_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.editPayrollById(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r0.checkSelectsinglefalse)("value", item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r2.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.employee.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.employee.employeeStructure === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.employee.employeeStructure !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", item_r2.employee ? item_r2.employee.salary : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", item_r2.employee.employeeStructure ? item_r2.employee.employeeStructure.basic : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", item_r2.employee.employeeStructure ? item_r2.employee.employeeStructure.hra : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", item_r2.employee.employeeStructure ? item_r2.employee.employeeStructure.employeeContribution : 0, "");
} }
function PayrollListComponent_tbody_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class PayrollListComponent {
    constructor(dialog, rolesPermissionsService, toastService, titleCasePipe, payrollService, commonservice) {
        this.dialog = dialog;
        this.rolesPermissionsService = rolesPermissionsService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.payrollService = payrollService;
        this.commonservice = commonservice;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.checkSingleArray = [];
        this.isChecked = false;
        this.upiCheckedId = [];
        this.upiCheckedId1 = [];
        this.allSelect = false;
        this.checkSelect = false;
        this.checkSelectsinglefalse = false;
        this.payrollList = [];
        this.result = [];
        this.basicSalary = [];
        this.hraSalary = [];
        this.pfSalary = [];
        this.payrollResult = [];
    }
    ngOnInit() {
        this.getPayrollList();
        this.commonservice.rowAdded$.subscribe(() => {
            this.getPayrollList();
        });
        this.getStructureDetails();
    }
    // Get all structure details.
    getStructureDetails() {
        this.payrollService.getAllStructures({}, this.currentUser.id).then((res) => {
            console.log("Structures", res);
            this.StructureId = res.data.rows;
            this.structureName = res.data.rows;
            this.getPayrollList();
        }, (err) => {
            if (err.error.expose) {
                // this.toastService.openErrorSnackBar(
                //   this.titleCasePipe.transform(err.error.error_message)
                // );
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // Code for Multiple selection if necessary.
    // onChekMultiple($event) {
    //   let id = $event.target.value;
    //   this.isChecked = $event.target.checked;
    //   console.log("this.isChecked", this.isChecked)
    //   this.upiCheckedId1 = this.payrollList.map((item) => {
    //     if (id == -1) {
    //       if (this.isChecked == true) {
    //         this.checkSelectsinglefalse = true;
    //         return item;
    //       }
    //       else {
    //         this.checkSelectsinglefalse = false;
    //         this.upiCheckedId = [];
    //         this.upiCheckedId1=[];
    //       }
    //     }
    //   })
    //   console.log("multiple click", this.upiCheckedId1)
    //   for (var i = 0; i < this.upiCheckedId1.length; i++) {
    //       this.upiCheckedId.push(this.upiCheckedId1[i].id);
    //   }
    //   console.log("multiple click", this.upiCheckedId)
    // }
    // Code for single selction.
    onChekedsingleCheckfalse(e, id) {
        console.log("checked", e.target.checked);
        if (e.target.checked == true) {
            // this.archiveIconfalse = true;
            this.upiCheckedId.push(e.target.value);
            console.log("this.upiCheckedId", this.upiCheckedId);
        }
        else {
            var index = this.upiCheckedId.indexOf(id);
            console.log(index);
            this.upiCheckedId.splice(index, 1);
            console.log("this.upiCheckedId", this.upiCheckedId);
            if (this.upiCheckedId.length > 0) {
            }
            else {
                this.upiCheckedId = [];
            }
        }
    }
    // Get the info of all employees.
    getPayrollList() {
        this.basicSalary = [];
        this.hraSalary = [];
        this.pfSalary = [];
        this.rolesPermissionsService.getUsers({}, this.currentUser.id).then((res) => {
            console.log("getPayrollList", res.data);
            this.upiCheckedId = [];
            this.payrollList = res.data;
            this.payrollList.forEach((item) => {
                // Calculate basicSalary and hraSalary for each item
                const salary = item.employee.salary ? item.employee.salary : 0;
                item.employeePayroll = item.employeePayroll || {}; // Ensure employeePayroll exists
                item.employeePayroll.employeeStructure = item.employeePayroll.employeeStructure || {}; // Ensure employeeStructure exists
                item.employee.employeeStructure.basic = salary * (item.employee.employeeStructure.basic / 100 || 0);
                item.employee.employeeStructure.hra = item.employee.employeeStructure.basic * (item.employee.employeeStructure.hra / 100 || 0);
                item.employee.employeeStructure.employeeContribution = item.employee.employeeStructure.basic * (item.employee.employeeStructure.employeeContribution / 100 || 0);
                // Push the calculated values to the respective arrays
                // this.basicSalary.push(item.employeePayroll.basic);
                item.employee.employeeStructure.basic = item.employee.employeeStructure.basic;
                item.employee.employeeStructure.hra = item.employee.employeeStructure.hra;
                item.employee.employeeStructure.employeeContribution = item.employee.employeeStructure.employeeContribution;
                //  this.hraSalary.push(item.employeePayroll.hra);
                // this.pfSalary.push(item.employeePayroll.employeeContribution);
            });
            console.log("payrollList", this.payrollList);
            console.log("Basicsalary    hraSalary  pfsalary--->", this.basicSalary, this.hraSalary, this.pfSalary);
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // Search bar functionality
    getUsersListSearch(searchKey) {
        this.rolesPermissionsService.getUsersSearch({}, this.currentUser.id, searchKey).then((res) => {
            this.payrollList = res.data;
            if (this.payrollList.length > 0) {
                //   this.toastService.openSnackBar("Record Found Successfully!!!")
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Record Not Found!!!",
                });
                // this.toastService.openErrorSnackBar("Record Not Found Successfully!!!");
            }
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    // To open dialig box of Assign Payroll form.
    assignPayroll(payrollList) {
        if (this.upiCheckedId.length == 0) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Please Select The Employee You Want To Assign.",
            });
            // this.toastService.openErrorSnackBar("Please select the employee you want to assign.");
        }
        else {
            const dialogRef = this.dialog.open(_assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_0__.AssignPayrollComponent, {
                width: '50%',
                height: '730px',
                data: { structureId: this.upiCheckedId },
                panelClass: 'custom-dialog-assign-payroll',
                disableClose: true,
                position: {
                    right: '0',
                },
            });
            dialogRef.afterClosed().subscribe((result) => {
                console.log(`Dialog result: ${result}`);
            });
        }
    }
    // To open dialig box of Edit Payroll form.
    editPayrollById(employeeId) {
        const dialogRef = this.dialog.open(_edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_1__.EditPayrollComponent, {
            // width: '1050px',
            height: '730px',
            data: { employeeId: employeeId },
            panelClass: 'custom-dialog-edit-payroll',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
PayrollListComponent.ɵfac = function PayrollListComponent_Factory(t) { return new (t || PayrollListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_4__.PayrollService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService)); };
PayrollListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PayrollListComponent, selectors: [["app-payroll-list"]], decls: 40, vars: 3, consts: [[1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Name", 1, "form-control", "pe-5", "mt-2", 3, "ngModel", "ngModelChange", "keyup"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "mt-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "text-nowrap", "mt-2"], [1, "fas", "fa-upload"], [1, "fas", "fa-download"], [1, "table-container", "overflow-visible"], [1, "table-div", 2, "overflow-x", "auto"], [1, "table", "table-responsive", "mb-0", "bg-white"], [1, "text-nowrap", "col-1", 2, "vertical-align", "middle", "width", "40px"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], ["colspan", "9", 2, "padding", "0px !important", "height", "1px!important"], [1, "col-12", 2, "margin-top", "0px", "margin-bottom", "0px"], ["style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "#676398!important"], ["scope", "row", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "change"], [1, "row", 2, "display", "flex", "flex-direction", "row", "justify-content", "flex-start", "align-items", "center", "flex-wrap", "nowrap", "padding-left", "8px", "padding-right", "8px"], [1, "flex-item", 2, "flex-basis", "55px"], ["alt", "Profile", "onerror", "this.src='assets/img/dashboard-party-profiles/party-profile-1.png'", "alt", "Profile", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "flex-item", "party-name", 2, "display", "flex", "flex-direction", "column", "align-items", "flex-start", "flex-basis", "70px"], [1, "mobile"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center"], [1, "btn", "btnp", "me-2", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize"], [1, "text-center"], ["colspan", "12"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function PayrollListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("keyup", function PayrollListComponent_Template_input_keyup_3_listener() { return ctx.getUsersListSearch(ctx.searchKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PayrollListComponent_Template_button_click_5_listener() { return ctx.assignPayroll(ctx.payrollList.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Assign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Salary Structure");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "CTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "HRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, PayrollListComponent_tr_38_Template, 28, 12, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PayrollListComponent_tbody_39_Template, 4, 0, "tbody", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.payrollList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.payrollList.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: [".headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 330px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n.tableSize[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .custom-dialog-edit-payroll {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n  .custom-dialog-assign-payroll {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n@media screen and (max-width: 1100px) {\n  .tableSize[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F8F8F8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0U7RUFFRSxVQUFBO0FBSEo7O0FBS0U7RUFDRSxpQkFBQTtBQUZKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFPRTtFQUNFO0lBQ0UsdUJBQUE7RUFKSjtBQUNGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVNBO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EscVhBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQTBDLCtCQUFBO0FBTDVDOztBQVVBO0VBQ0UsV0FBQTtBQVBGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQVRGOztBQVlBO0VBRUU7SUFDRSxrQkFBQTtFQVZGO0FBQ0Y7O0FBWUE7RUFDRSx5QkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtBQVZGOztBQWFBO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLDZCQUFBO0FBVkYiLCJmaWxlIjoicGF5cm9sbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcblxyXG4gIC5oZWFkZXJCdXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuZmxleC1pdGVtIHtcclxuICAgIC8vZmxleC1iYXNpczogMjQwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuc2VhcmNoQmFye1xyXG4gICAgZmxleC1iYXNpczogMjQwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmZvcm1CdXR0b25zIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWJhc2lzOiAzMzBweDtcclxuICB9XHJcblxyXG4gIC8vIE1lZGlhIHF1ZXJ5IGZvciBidXR0b25zIGFuZCBzZWFyY2ggYmFyLlxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vIFNlYXJjaCBiYXJcclxuLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogN3B4IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbn1cclxuXHJcbi8vIFRvIGZpeCB0aGUgd2lkdGggb2YgdGFibGVcclxuLnRhYmxlU2l6ZSB7XHJcbiAgd2lkdGg6MTAwJSA7XHJcbn1cclxuXHJcbi8vIFRvIHBsYWNlIGRpYWxvZyBib3ggYXQgcmlnaHQgcG9zaXRpb24uXHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctZWRpdC1wYXlyb2xsIHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nLWFzc2lnbi1wYXlyb2xsIHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcblxyXG4gIC50YWJsZVNpemUge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG50Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB0Ym9keSB0ciwgdGQge1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB0aCwgdGQsIHRyIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 92088:
/*!*********************************************************!*\
  !*** ./src/app/pages/payroll/payroll-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollRoutingModule": function() { return /* binding */ PayrollRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll.component */ 69819);
/* harmony import */ var _create_structure_create_structure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-structure/create-structure.component */ 94077);
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ 33709);
/* harmony import */ var _setup_payroll_setup_payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-payroll/setup-payroll.component */ 14059);
/* harmony import */ var _assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assign-payroll/assign-payroll.component */ 66529);
/* harmony import */ var _edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-payroll/edit-payroll.component */ 78806);
/* harmony import */ var _new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-structure/new-structure.component */ 69486);
/* harmony import */ var _saalry_release_list_saalry_release_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saalry-release-list/saalry-release-list.component */ 71972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);

// Main component

// Sub-components



// Child components of payload list


// Child component of create structure




const routes = [
    {
        path: '',
        component: _payroll_component__WEBPACK_IMPORTED_MODULE_0__.PayrollComponent,
        children: [
            {
                path: '',
                redirectTo: 'payroll-list',
                pathMatch: 'full'
            },
            {
                path: 'payroll-list',
                component: _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__.PayrollListComponent,
            },
            {
                path: 'assign-payroll',
                component: _assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_4__.AssignPayrollComponent,
            },
            {
                path: 'edit-payroll',
                component: _edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_5__.EditPayrollComponent,
            },
            {
                path: 'setup-payroll',
                component: _setup_payroll_setup_payroll_component__WEBPACK_IMPORTED_MODULE_3__.SetupPayrollComponent,
            },
            {
                path: 'create-structure',
                component: _create_structure_create_structure_component__WEBPACK_IMPORTED_MODULE_1__.CreateStructureComponent,
            },
            {
                path: 'new-structure',
                component: _new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_6__.NewStructureComponent,
            },
            {
                path: 'release-salary',
                component: _saalry_release_list_saalry_release_list_component__WEBPACK_IMPORTED_MODULE_7__.SaalryReleaseListComponent
            }
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    }
];
class PayrollRoutingModule {
}
PayrollRoutingModule.ɵfac = function PayrollRoutingModule_Factory(t) { return new (t || PayrollRoutingModule)(); };
PayrollRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PayrollRoutingModule });
PayrollRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PayrollRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 2896:
/*!*************************************************!*\
  !*** ./src/app/pages/payroll/payroll.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayrollModule": function() { return /* binding */ PayrollModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll-routing.module */ 92088);
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ 33709);
/* harmony import */ var _setup_payroll_setup_payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-payroll/setup-payroll.component */ 14059);
/* harmony import */ var _create_structure_create_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-structure/create-structure.component */ 94077);
/* harmony import */ var _new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-structure/new-structure.component */ 69486);
/* harmony import */ var _assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign-payroll/assign-payroll.component */ 66529);
/* harmony import */ var _edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-payroll/edit-payroll.component */ 78806);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/payroll.service */ 86965);
/* harmony import */ var _saalry_release_list_saalry_release_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saalry-release-list/saalry-release-list.component */ 71972);
/* harmony import */ var _saalry_release_view_saalry_release_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./saalry-release-view/saalry-release-view.component */ 96084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);

















class PayrollModule {
}
PayrollModule.ɵfac = function PayrollModule_Factory(t) { return new (t || PayrollModule)(); };
PayrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: PayrollModule });
PayrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [src_app_core_services_payroll_service__WEBPACK_IMPORTED_MODULE_8__.PayrollService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _payroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.PayrollRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialExampleModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](PayrollModule, { declarations: [_payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__.PayrollListComponent,
        _setup_payroll_setup_payroll_component__WEBPACK_IMPORTED_MODULE_3__.SetupPayrollComponent,
        _create_structure_create_structure_component__WEBPACK_IMPORTED_MODULE_4__.CreateStructureComponent,
        _assign_payroll_assign_payroll_component__WEBPACK_IMPORTED_MODULE_6__.AssignPayrollComponent,
        _edit_payroll_edit_payroll_component__WEBPACK_IMPORTED_MODULE_7__.EditPayrollComponent,
        _new_structure_new_structure_component__WEBPACK_IMPORTED_MODULE_5__.NewStructureComponent,
        _saalry_release_list_saalry_release_list_component__WEBPACK_IMPORTED_MODULE_9__.SaalryReleaseListComponent,
        _saalry_release_view_saalry_release_view_component__WEBPACK_IMPORTED_MODULE_10__.SaalryReleaseViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _payroll_routing_module__WEBPACK_IMPORTED_MODULE_1__.PayrollRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialExampleModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerModule] }); })();


/***/ }),

/***/ 71972:
/*!************************************************************************************!*\
  !*** ./src/app/pages/payroll/saalry-release-list/saalry-release-list.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaalryReleaseListComponent": function() { return /* binding */ SaalryReleaseListComponent; }
/* harmony export */ });
/* harmony import */ var _saalry_release_view_saalry_release_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saalry-release-view/saalry-release-view.component */ 96084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_saalry_release_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/saalry-release-service.service */ 92309);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function SaalryReleaseListComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "30 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaalryReleaseListComponent_tr_68_Template_button_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openViewSalaryModel(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r2.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.employee ? item_r2.employee.department : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 7, item_r2.employee ? item_r2.employee.grossPay : 0, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 10, item_r2.totalDeduct, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 13, item_r2.Tax ? item_r2.Tax : 0, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](25, 16, item_r2.totalNetPay ? item_r2.totalNetPay : 0, "1.2-2"), "");
} }
function SaalryReleaseListComponent_tbody_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class SaalryReleaseListComponent {
    constructor(dialog, saalryReleaseServiceService, toastService, titleCasePipe) {
        this.dialog = dialog;
        this.saalryReleaseServiceService = saalryReleaseServiceService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.payrollCost = 0;
        this.employeeNetPay = 0;
        this.employeeLength = 0;
        this.salaryData = [];
    }
    ngOnInit() {
        this.getSalaryData();
        this.saalryReleaseServiceService.partyAdded$.subscribe(() => {
            // Fetch the updated list of users
            this.getSalaryData();
        });
    }
    getSalaryData() {
        this.saalryReleaseServiceService.getAllSalaryData({}, this.currentUser.id).then((res) => {
            this.salaryData = res.data.employee;
            this.payrollCost = res.data.payrollCost;
            this.employeeNetPay = res.data.employeeNetPay;
            this.employeeLength = this.salaryData.length;
            console.log("Salary Details", this.salaryData);
        }, (err) => {
            if (err.error.expose) {
                // this.toastService.openErrorSnackBar(
                //   this.titleCasePipe.transform(err.error.error_message)
                // );
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    openViewSalaryModel(employeeId) {
        const dialogRef = this.dialog.open(_saalry_release_view_saalry_release_view_component__WEBPACK_IMPORTED_MODULE_0__.SaalryReleaseViewComponent, {
            width: '50%',
            height: '100vh',
            data: { employeeId: employeeId },
            panelClass: 'custom-dialog-edit-payroll',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
SaalryReleaseListComponent.ɵfac = function SaalryReleaseListComponent_Factory(t) { return new (t || SaalryReleaseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_saalry_release_service_service__WEBPACK_IMPORTED_MODULE_1__.SaalryReleaseServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe)); };
SaalryReleaseListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SaalryReleaseListComponent, selectors: [["app-saalry-release-list"]], decls: 70, vars: 11, consts: [["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Name/Type/Payment", 1, "form-control", "pe-5"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "my-2"], [1, "fas", "fa-plus", "me-1"], [1, "my-0", "py-0"], [1, "row", "m-1", "bg-light", "mb-3"], [1, "col-lg-2", "col-xl-2", "col-sm-12", "col-md-2", "bg-light"], [1, "col-lg-6", "col-xl-6", "col-sm-12", "col-md-6", "card", "bg-light", "m-3", 2, "float", "right !important", "background-color", "#EEEEF6 !important"], [1, "row", "text-center"], [1, "col-lg-12", "col-xl-12", "col-md-12", "col-sm-12"], [1, "text-black", 2, "font-size", "16px!important", "font-weight", "500!important", "font-family", "Poppins"], [1, "btn", "btnp", "me-4"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize"], [1, "col-lg-6", "col-xl-6", "col-md-12", "col-sm-12"], [1, "text-black", 2, "font-weight", "500!important", "font-family", "Poppins"], [2, "color", "gray", "font-family", "Poppins"], [1, "col-lg-2", "col-xl-2", "col-sm-12", "col-md-2", "card", "m-3", "bg-white"], [1, "text-center", 2, "color", "gray", "font-family", "Poppins"], [1, "text-center", "fw-bold", "text-black", 2, "font-family", "Poppins", "font-weight", "500 !important"], [1, "text-center", "text-black", 2, "font-family", "Poppins"], [1, "table-container", "overflow-visible"], [1, "table-div", 2, "overflow-x", "auto"], [1, "table", "table-responsive", "mb-0", "bg-white"], [1, "text-nowrap", 2, "vertical-align", "middle", "padding-left", "15px", "padding-top", "15px"], ["type", "checkbox", 1, "form-check-input"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], ["colspan", "9", 2, "padding", "0px !important", "height", "1px!important"], [1, "col-12", 2, "margin-top", "0px", "margin-bottom", "0px"], ["class", "btn-reveal-trigger text-left ", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], [1, "text-nowrap", 2, "vertical-align", "middle", "margin-left", "100px !important"], [2, "vertical-align", "middle"], [1, "row", 2, "display", "flex", "flex-direction", "row", "justify-content", "flex-start", "align-items", "center", "flex-wrap", "nowrap", "padding-right", "8px"], [1, "flex-item", 2, "flex-basis", "55px"], ["alt", "Profile", "onerror", "this.src='assets/img/dashboard-party-profiles/party-profile-1.png'", "alt", "Profile", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "flex-item", "party-name", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "flex-basis", "70px"], [2, "vertical-align", "middle", "text-align", "right"], [2, "vertical-align", "middle", "text-align", "center"], ["type", "button", 1, "btn", "btnp", "me-4", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View", 1, "bi", "bi-eye", "icon-color", "iconFontSize"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function SaalryReleaseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Period : December 2022 | 30 Base Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "PAYROLL COST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "EMPLOYESS NET PAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "PAY DAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Dec,2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Paid Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Gross Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Deduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Net Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, SaalryReleaseListComponent_tr_68_Template, 29, 19, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, SaalryReleaseListComponent_tbody_69_Template, 4, 0, "tbody", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 5, ctx.payrollCost, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 8, ctx.employeeNetPay, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.employeeLength, " Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.salaryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.salaryData.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F8F8F8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 150px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhYWxyeS1yZWxlYXNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFDOUM7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZCQUFBO0FBQ0o7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1FO0VBRUUsVUFBQTtBQUpKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0U7RUFDRTtJQUNFLHVCQUFBO0VBSko7QUFDRiIsImZpbGUiOiJzYWFscnktcmVsZWFzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VhcmNoIGJhclxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG4gIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgfVxyXG5cclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRib2R5IHRyLCB0ZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGgsIHRkLCB0ciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5mbGV4LWl0ZW0ge1xyXG4gICAgLy9mbGV4LWJhc2lzOiAyNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5zZWFyY2hCYXJ7XHJcbiAgICBmbGV4LWJhc2lzOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5mb3JtQnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1iYXNpczogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAvLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 96084:
/*!************************************************************************************!*\
  !*** ./src/app/pages/payroll/saalry-release-view/saalry-release-view.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaalryReleaseViewComponent": function() { return /* binding */ SaalryReleaseViewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-words */ 18158);
/* harmony import */ var to_words__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_words__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_saalry_release_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/saalry-release-service.service */ 92309);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);








function SaalryReleaseViewComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Adjust Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SaalryReleaseViewComponent_tr_46_Template_input_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.AdjustAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SaalryReleaseViewComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Adjust Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SaalryReleaseViewComponent_tr_77_Template_input_keydown_enter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.deductAmount($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class SaalryReleaseViewComponent {
    constructor(dialogRef, employeeData, saalryReleaseServiceService, toastService, titleCasePipe, roleService) {
        this.dialogRef = dialogRef;
        this.employeeData = employeeData;
        this.saalryReleaseServiceService = saalryReleaseServiceService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.roleService = roleService;
        this.employeeId = [];
        this.salaryData = [];
        this.totaltotalNetPayable = 0;
        this.totalDeduct = 0;
        this.totalEarning = 0;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.toWords = new to_words__WEBPACK_IMPORTED_MODULE_0__.ToWords({
            localeCode: 'en-IN',
            converterOptions: {
                currency: true,
                ignoreDecimal: false,
                ignoreZeroCurrency: true,
            }
        });
        this.addErningFlag = false;
        this.adddeductFlag = false;
        this.adjustEarnAmount = 0;
        this.adjustDeductAmount = 0;
    }
    ngOnInit() {
        this.employeeId = this.employeeData.employeeId;
        this.GetsalryDataByEmployeeId();
        this.getProfileData();
    }
    GetsalryDataByEmployeeId() {
        this.saalryReleaseServiceService.getAllSalaryDataByEmployeeId({}, this.employeeId).then((res) => {
            this.salaryData = res.data.employee;
            this.totaltotalNetPayable = res.data.totalNetPayable;
            this.finalAmount = res.data.totalNetPayable;
            this.convertToWord(this.finalAmount);
            console.log("res", this.salaryData);
            this.totalDeduct = res.data.deduction;
            this.totalEarning = res.data.grossEarning;
        }, (err) => {
            if (err.error.expose) {
                // this.toastService.openErrorSnackBar(
                //   this.titleCasePipe.transform(err.error.error_message)
                // );
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    getProfileData() {
        this.roleService.getEmployeeById({}, this.employeeId).then((res) => {
            console.log("Payroll employee by id", res);
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    convertToWord(num) {
        this.finalAmount = this.toWords.convert(num);
    }
    onclear() {
        this.dialogRef.close();
    }
    getAllOffersType() {
    }
    AddEarning() {
        this.addErningFlag = !this.addErningFlag;
    }
    AddDeduct() {
        this.adddeductFlag = !this.adddeductFlag;
    }
    AdjustAmount(e) {
        this.adjustEarnAmount = parseInt(e.target.value);
        console.log('Entered value:', this.adjustEarnAmount);
        let body = {
            "grossType": "EARNING",
            "name": "Adjust Amount",
            "total": this.adjustEarnAmount,
            "employeeId": this.employeeId
        };
        this.saalryReleaseServiceService.PostEarningDeduct(body, this.currentUser.id).then((res) => {
            // this.toastService.openSnackBar("Earning Details Added Successfully!!!");
            this.toastService.toastMsg({
                title: "Success",
                content: "Earning Details Added Successfully!!!",
            });
            this.saalryReleaseServiceService.notifyPartyAdded();
            this.addErningFlag = false;
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    deductAmount(e) {
        this.adjustDeductAmount = parseInt(e.target.value);
        console.log('Entered value:', this.adjustDeductAmount);
        let body = {
            "grossType": "DEDUCTION",
            "name": "Adjust Amount",
            "total": this.adjustDeductAmount,
            "employeeId": this.employeeId
        };
        this.saalryReleaseServiceService.PostEarningDeduct(body, this.currentUser.id).then((res) => {
            this.toastService.toastMsg({
                title: "Success",
                content: "Deduction Details Added Successfully!!!",
            });
            // this.toastService.openSnackBar("Deduction  Details Added Successfully!!!");
            this.saalryReleaseServiceService.notifyPartyAdded();
            this.adddeductFlag = false;
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
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
}
SaalryReleaseViewComponent.ɵfac = function SaalryReleaseViewComponent_Factory(t) { return new (t || SaalryReleaseViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_saalry_release_service_service__WEBPACK_IMPORTED_MODULE_1__.SaalryReleaseServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__.RolesPermissionsService)); };
SaalryReleaseViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SaalryReleaseViewComponent, selectors: [["app-saalry-release-view"]], decls: 102, vars: 40, consts: [[1, "modal-header", "flex", "d-flex", "flex-row", "pt-0", 2, "justify-content", "center", "align-items", "center"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "flex", "d-flex", 2, "margin-left", "auto"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-sm-12", 2, "margin-left", "20px !important"], [1, "text-black", "fw-bold"], [1, "col-lg-6", "col-xl-6", "col-md-6", "col-sm-12"], [1, "container"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-2"], [1, "text-success", "fw-bold", 2, "vertical-align", "middle"], [1, "text-black", "fw-bold", 2, "text-align", "right !important"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "text-align", "right !important"], [4, "ngIf"], [1, "text-nowrap", "fw-bold", 2, "vertical-align", "middle", "color", "#6090EE !important", 3, "click"], [1, "text-black", "fw-bold", 2, "vertical-align", "middle"], [1, "text-danger", "fw-bold", 2, "vertical-align", "middle"], [1, "bg-light"], [1, "row"], [1, "col-lg-12", "col-xl-12", "col-md-12", "col-sm-12"], [1, "text-black", "fw-bold", "text-center"], [3, "keydown.enter"]], template: function SaalryReleaseViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaalryReleaseViewComponent_Template_button_click_4_listener() { return ctx.onclear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaalryReleaseViewComponent_Template_button_click_6_listener() { return ctx.getAllOffersType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Date of Joining : 21-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Paid Days: 28");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "LOP:3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "(+) Earning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "HRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Special Allowance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, SaalryReleaseViewComponent_tr_46_Template, 5, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaalryReleaseViewComponent_Template_td_click_48_listener() { return ctx.AddEarning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "+ Add Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Gross Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "(-) Deduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "PF");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Profession Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "\u20B9\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Paid leave Taken(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, SaalryReleaseViewComponent_tr_77_Template, 5, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaalryReleaseViewComponent_Template_td_click_79_listener() { return ctx.AddDeduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " + Add Deduction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Total Deduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " Total Net Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](98, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Total Net Payable =(Gross Earning - Total Deductions)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.salaryData.employee ? ctx.salaryData.employee.firstName : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Designation : ", ctx.salaryData.employee ? ctx.salaryData.employee.department : "-", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](33, 13, ctx.salaryData.employeePayroll ? ctx.salaryData.employeePayroll.basic : 0, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 16, ctx.salaryData.employeePayroll ? ctx.salaryData.employeePayroll.hra : 0, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](45, 19, ctx.salaryData.employeePayroll ? ctx.salaryData.employeePayroll.specialAllowance : 0, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addErningFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](56, 22, ctx.totalEarning, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](67, 25, ctx.salaryData.employeePayroll ? ctx.salaryData.employeePayroll.pf : 0, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.adddeductFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](87, 28, ctx.totalDeduct, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](93, 31, ctx.totaltotalNetPayable, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Total Net Payable \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](98, 34, ctx.totaltotalNetPayable, "1.2-2"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](99, 37, ctx.finalAmount, "1.2-2"), ") ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWFscnktcmVsZWFzZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 14059:
/*!************************************************************************!*\
  !*** ./src/app/pages/payroll/setup-payroll/setup-payroll.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPayrollComponent": function() { return /* binding */ SetupPayrollComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 64742);




class SetupPayrollComponent {
    constructor() { }
    ngOnInit() {
    }
}
SetupPayrollComponent.ɵfac = function SetupPayrollComponent_Factory(t) { return new (t || SetupPayrollComponent)(); };
SetupPayrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupPayrollComponent, selectors: [["app-setup-payroll"]], decls: 73, vars: 0, consts: [[1, "container-fluid", "bg-white", "p-0"], [1, "row", "mt-5"], [1, "col-sm-12", "col-md-11", "col-lg-10", "col-xl-9", "col-xxl-8"], [1, "card"], [1, "my-0", "py-0"], [1, "row", "my-3", "px-3"], [1, "col-12", 2, "font-size", "18px", "font-weight", "600"], [1, "col-12"], [1, "row", "my-1"], [1, "col-sm-12", "col-md-6", 2, "display", "flex", "align-items", "center"], [2, "color", "black"], [1, "col-sm-6", "col-md-3"], [2, "padding-left", "5px"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "", "autocomplete", "off"], [1, "col-sm-12", "col-md-6"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "50% CTC", "autocomplete", "off"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Basic * 12%", "autocomplete", "off"], [1, "col-sm-6", "col-md-6", 2, "display", "flex", "align-items", "center"], [1, "col-sm-6", "col-md-6", 2, "padding-left", "14px"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input"], [1, "row", "mt-3", "px-3", 2, "float", "right"], ["type", "button", 1, "btn", "btn-save", 2, "width", "100px"], [1, "my-4"], ["type", "button", 1, "btn", "text-nowrap", 2, "color", "#EB8B3F"], [1, "fas", "fa-plus", "me-2"]], template: function SetupPayrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Payroll Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pay Cycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "HRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Does company have PF ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Employee Contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Do you deduct professional tax ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Add Another Salary Component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput], styles: [".form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n}\n\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwLXBheXJvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUFBRjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGIiwiZmlsZSI6InNldHVwLXBheXJvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWFyY2ggYmFyXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgaG92ZXJpbmcgY29sb3IgdG8gZm9ybSBpbnB1dHMuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNTtcclxufVxyXG5cclxuLy8gVG8gZ2l2ZSBjb2xvciB0byBib3JkZXJzIG9uIGNsaWNraW5nIHRoZSBmb3JtIGlucHV0cy5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjMmM3YmU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgc29tZSBzcGFjZSBmcm9tIGxlZnQgdG8gdGhlIGxhYmVscy5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_payroll_payroll_module_ts-es2015.js.map