"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_Employee_employee_module_ts"],{

/***/ 39106:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/Employee/employee-approvals/employee-approvals.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeApprovalsComponent": function() { return /* binding */ EmployeeApprovalsComponent; }
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_empexpenseservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/empexpenseservice.service */ 70323);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);








function EmployeeApprovalsComponent_tr_28_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function EmployeeApprovalsComponent_tr_28_td_17_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.onSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeApprovalsComponent_tr_28_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r2.approvedAmount, "1.2-2"), " ");
} }
function EmployeeApprovalsComponent_tr_28_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeApprovalsComponent_tr_28_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeApprovalsComponent_tr_28_mat_icon_23_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.ontrueclick(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeApprovalsComponent_tr_28_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeApprovalsComponent_tr_28_mat_icon_25_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.onclose(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeApprovalsComponent_tr_28_span_26_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeApprovalsComponent_tr_28_span_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.onfalseclick(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "DENIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EmployeeApprovalsComponent_tr_28_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmployeeApprovalsComponent_tr_28_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.GotoImageOrPDF(item_r2.receiptImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function EmployeeApprovalsComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, EmployeeApprovalsComponent_tr_28_td_17_Template, 3, 0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, EmployeeApprovalsComponent_tr_28_td_18_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, EmployeeApprovalsComponent_tr_28_span_21_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, EmployeeApprovalsComponent_tr_28_mat_icon_23_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, EmployeeApprovalsComponent_tr_28_mat_icon_25_Template, 2, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, EmployeeApprovalsComponent_tr_28_span_26_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, EmployeeApprovalsComponent_tr_28_button_28_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c0, i_r3 % 2 === 0 ? "#f2f2f2" : "#fff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.user.employee.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.user.employee.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 14, item_r2.date, "EEEE, MMM d yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 17, item_r2.enterAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status !== "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status === "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.id == ctx_r0.leavid && ctx_r0.approved === true || item_r2.status === "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status !== "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status == "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.id == ctx_r0.leavid1 && ctx_r0.approved == false || item_r2.status !== "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.receiptImage !== null);
} }
function EmployeeApprovalsComponent_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class EmployeeApprovalsComponent {
    constructor(rolesPermissionsService, toastService, titleCasePipe, expenseservice) {
        this.rolesPermissionsService = rolesPermissionsService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.expenseservice = expenseservice;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.approved = false;
        this.denied = false;
        this.searchValueAmount = '';
    }
    ngOnInit() {
        this.getUsersList();
    }
    getUsersList() {
        this.rolesPermissionsService.getemployeeApproval({}, this.currentUser.id).then((res) => {
            this.approvalslist = res.data;
            console.log("res amount approvals", this.approvalslist);
        });
    }
    getexpenseSearch(searchKey) {
        if (this.searchKey == "") {
            this.toastService.openErrorSnackBar("Please Enter Valid Employee Name!!!");
            this.rolesPermissionsService.getExpenseApprovalsearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res) {
                    this.approvalslist = res.data;
                }
            });
        }
        else {
            this.rolesPermissionsService.getExpenseApprovalsearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res) {
                    this.approvalslist = res.data;
                }
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    onSearch(event) {
        if (event.target.value !== '') {
            this.searchValueAmount = event.target.value;
            console.log("search value", this.searchValueAmount);
        }
        else {
            this.searchValueAmount = event.target.value;
            console.log("empty search value", this.searchValueAmount);
            this.toastService.openErrorSnackBar("Add Employee Expense Approval Amount !!!");
        }
    }
    getexpenseId(expenseId) {
        this.expenseId = expenseId;
    }
    ontrueclick(leavid) {
        console.log(" this.leavid", this.leavid);
        //  this.approved = true;
        // this.denied = false;
        if (this.searchValueAmount == '') {
            this.toastService.openErrorSnackBar("Add Employee Expense Approval Amount !!!");
        }
        else {
            this.leavid = leavid;
            let body = {
                "status": "ACCEPTED",
                "approvedAmount": this.searchValueAmount
            };
            this.rolesPermissionsService.approvalstatusById(body, this.currentUser.id, this.leavid).then((res) => {
                if (res.success === true) {
                    this.toastService.openSnackBar("Employee Expense Approval Successfully!!!");
                    this.getUsersList();
                    this.searchValueAmount = '';
                    this.approved = true;
                    this.denied = false;
                }
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                }
                else {
                    this.toastService.openErrorSnackBar("Something Went Wrong.");
                }
            });
        }
    }
    onclose(id) {
        for (var i = 0; i < this.approvalslist.length; i++) {
            if (this.approvalslist[i].id == id) {
                {
                    this.approvalslist[i].status = "PENDING";
                    this.approved = false;
                }
            }
        }
        console.log("this.approvalslist", this.approvalslist);
    }
    onfalseclick(leavid) {
        console.log(" this.leavid", this.leavid1);
        this.leavid1 = leavid;
        let body1 = {
            "status": "REJECTED"
        };
        this.rolesPermissionsService.approvalstatusById(body1, this.currentUser.id, this.leavid1).then((res) => {
            if (res) {
                this.toastService.openSnackBar("Employee Expense Approval Denied Successfully!!!");
                this.getUsersList();
                this.searchValueAmount = '';
                this.approved = false;
                this.denied = true;
            }
        }, (err) => {
            if (err.error.expose) {
                this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
        // }
    }
    deletExpenseById() {
        this.expenseservice.deleteExpense({}, this.expenseId).then(res => {
            this.toastService.openSnackBar("Employee Expense Approval Deleted Successfully");
            this.getUsersList();
        }, (err) => {
            if (err.error.expose) {
                this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    GotoImageOrPDF(imagelink) {
        this.DataLink = imagelink;
        const pdfName = "document.pdf";
        file_saver__WEBPACK_IMPORTED_MODULE_0___default().saveAs(this.DataLink, pdfName);
    }
}
EmployeeApprovalsComponent.ɵfac = function EmployeeApprovalsComponent_Factory(t) { return new (t || EmployeeApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_1__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_empexpenseservice_service__WEBPACK_IMPORTED_MODULE_3__.EmpexpenseserviceService)); };
EmployeeApprovalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmployeeApprovalsComponent, selectors: [["app-employee-approvals"]], decls: 30, vars: 3, consts: [[1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar", "me-4"], ["type", "search", "id", "searchInput", "placeholder", "Employee Name", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange", "change"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "40px"], ["type", "checkbox", 1, "form-check-input"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], [1, "text-nowrap", "ps-5", 2, "vertical-align", "middle", "text-align", "center"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "15%"], ["style", "color: #676398", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "#676398", 3, "ngStyle"], ["class", "text-nowrap", "style", "vertical-align:middle;", 4, "ngIf"], ["class", "text-nowrap", "style", "vertical-align:middle;text-align: right;", 4, "ngIf"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["class", "pe-4", 4, "ngIf"], [1, ""], ["style", "color: green;font-weight: 600;", 3, "click", 4, "ngIf"], ["style", "color: red;font-weight: 600;", 3, "click", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center"], ["class", "btn btnp", 3, "click", 4, "ngIf"], ["id", "saleSearchPrint"], ["type", "search", "id", "searchInput", 1, "form-control", "pe-1", 3, "blur"], [1, "pe-4"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], [2, "color", "green", "font-weight", "600", 3, "click"], [2, "color", "red", "font-weight", "600", 3, "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btnp", 3, "click"], [1, "fas", "fa-receipt", "icon-color", "iconFontSize"], [1, "text-center"], ["colspan", "12"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function EmployeeApprovalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmployeeApprovalsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("change", function EmployeeApprovalsComponent_Template_input_change_3_listener() { return ctx.getexpenseSearch(ctx.searchKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Submitted Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Approved Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, EmployeeApprovalsComponent_tr_28_Template, 29, 22, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, EmployeeApprovalsComponent_tbody_29_Template, 4, 0, "tbody", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.approvalslist);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.approvalslist == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: [".headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 184px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  background-color: #00d27a !important;\n  color: #ffff !important;\n  border-color: #00d27a !important;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: #e63757 !important;\n  color: #ffff !important;\n  border-color: #e63757 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWFwcHJvdmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFFRSxVQUFBO0FBRkY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFNQTtFQUNFO0lBQ0UsdUJBQUE7RUFIRjtBQUNGOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVFFO0VBQ0UscUJBQUE7RUFDRyxtQkFBQTtFQUNELGVBQUE7QUFMTjs7QUFRRTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUo5Qzs7QUFTRTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQU5KOztBQVNFO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBTkoiLCJmaWxlIjoiZW1wbG95ZWUtYXBwcm92YWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVzcG9uc2l2ZSBCdXR0b25zXHJcblxyXG4uaGVhZGVyQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gIC8vZmxleC1iYXNpczogMjQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2VhcmNoQmFye1xyXG4gIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG5cclxufVxyXG5cclxuLmZvcm1CdXR0b25zIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtYmFzaXM6IDE4NHB4O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBTZWFyY2ggYmFyXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0ciB7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7IFxyXG4gICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSArIDIwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMjdhICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwZDI3YSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuLW91dGxpbmUtZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjM3NTcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTYzNzU3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 84891:
/*!***********************************************************!*\
  !*** ./src/app/pages/Employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeRoutingModule": function() { return /* binding */ EmployeeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.component */ 22133);
/* harmony import */ var _Employees_employee_roles_employee_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Employees/employee-roles/employee-roles.component */ 66181);
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-details/employee-details.component */ 6290);
/* harmony import */ var _add_role_based_users_add_role_based_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-role-based-users/add-role-based-users.component */ 26480);
/* harmony import */ var _employee_approvals_employee_approvals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-approvals/employee-approvals.component */ 39106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeComponent,
        children: [
            {
                path: '',
                redirectTo: 'allEmployees',
                pathMatch: 'full'
            },
            {
                path: "allEmployees",
                component: _Employees_employee_roles_employee_roles_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeRolesComponent
            },
            {
                path: "employee-approvals",
                component: _employee_approvals_employee_approvals_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeApprovalsComponent
            },
            {
                path: "viewEmployee/:id",
                component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailsComponent
            },
            {
                path: "add-roleUsers",
                component: _add_role_based_users_add_role_based_users_component__WEBPACK_IMPORTED_MODULE_3__.AddRoleBasedUsersComponent
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    },
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 13093:
/*!***************************************************!*\
  !*** ./src/app/pages/Employee/employee.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": function() { return /* binding */ EmployeeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 84891);
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-employee/view-employee.component */ 33490);
/* harmony import */ var _employee_approvals_employee_approvals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-approvals/employee-approvals.component */ 39106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_1__.ViewEmployeeComponent,
        _employee_approvals_employee_approvals_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeApprovalsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_Employee_employee_module_ts-es2015.js.map