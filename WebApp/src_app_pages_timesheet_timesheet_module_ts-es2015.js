"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_timesheet_timesheet_module_ts"],{

/***/ 38566:
/*!******************************************************************!*\
  !*** ./src/app/pages/timesheet/approvals/approvals.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsComponent": function() { return /* binding */ ApprovalsComponent; }
/* harmony export */ });
/* harmony import */ var _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-time/add-time.component */ 60975);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/timesheet.service */ 6465);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);









function ApprovalsComponent_tr_24_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ApprovalsComponent_tr_24_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApprovalsComponent_tr_24_mat_icon_20_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.ontrueclick(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ApprovalsComponent_tr_24_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApprovalsComponent_tr_24_mat_icon_22_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.onfalseclick(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ApprovalsComponent_tr_24_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "DENIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ApprovalsComponent_tr_24_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApprovalsComponent_tr_24_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.GotoImageOrPDF(item_r2.leaveApplication); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ApprovalsComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 25);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ApprovalsComponent_tr_24_span_18_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ApprovalsComponent_tr_24_mat_icon_20_Template, 2, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ApprovalsComponent_tr_24_mat_icon_22_Template, 2, 0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ApprovalsComponent_tr_24_span_23_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ApprovalsComponent_tr_24_button_25_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c0, i_r3 % 2 === 0 ? "#f2f2f2" : "#fff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.l3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 11, item_r2.startDate, "EEEE, MMM d yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 14, item_r2.endDate, "EEEE, MMM d yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 17, item_r2.createdAt, "EEEE, MMM d yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.id == ctx_r0.leavid && ctx_r0.approved == true || item_r2.status == "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status !== "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.status == "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.id == ctx_r0.leavid1 && ctx_r0.approved == false || item_r2.status !== "ACCEPTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.leaveApplication !== null);
} }
function ApprovalsComponent_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class ApprovalsComponent {
    constructor(dialog, timesheetService, toastService, titleCasePipe) {
        this.dialog = dialog;
        this.timesheetService = timesheetService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        // Array of approvals
        // approvalTimeSheet = [
        //   {
        //     id: 1,
        //     employee: 'Employee1',
        //     description: 'Description',
        //     startDate: 'Friday, June 9 2023',
        //     endDate: 'Friday, June 9 2023',
        //     requestDate: 'Friday, June 9 2023',
        //   },
        //   {
        //     id: 2,
        //     employee: 'Employee2',
        //     description: 'Description',
        //     startDate: 'Friday, June 9 2023',
        //     endDate: 'Friday, June 9 2023',
        //     requestDate: 'Friday, June 9 2023',
        //   },
        //   {
        //     id: 3,
        //     employee: 'Employee3',
        //     description: 'Description',
        //     startDate: 'Friday, June 9 2023',
        //     endDate: 'Friday, June 9 2023',
        //     requestDate: 'Friday, June 9 2023',
        //   },
        //   {
        //     id: 4,
        //     employee: 'Employee4',
        //     description: 'Description',
        //     startDate: 'Friday, June 9 2023',
        //     endDate: 'Friday, June 9 2023',
        //     requestDate: 'Friday, June 9 2023',
        //   },
        // ]
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.approved = false;
        this.denied = false;
    }
    ngOnInit() {
        this.getleaveApprovalList();
    }
    getleaveApprovalList() {
        this.timesheetService.getleaveapprovalList({}, this.currentUser.id).then((res) => {
            if (res) {
                this.leaveApprovallist = res.data;
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
    getexpenseSearch(searchKey) {
        if (this.searchKey == "") {
            this.toastService.openErrorSnackBar("Please Enter Valid Employee Name!!!");
            this.timesheetService.getleaveapprovalSearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.leaveApprovallist = res.data;
                }
            });
        }
        else {
            this.timesheetService.getleaveapprovalSearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.leaveApprovallist = res.data;
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
    // To open dialig box of Add TIme form.
    onAddTime() {
        const dialogRef = this.dialog.open(_add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__.AddTimeComponent, {
            width: '40%',
            height: '730px',
            data: {},
            panelClass: 'custom-dialog-add-time',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    ontrueclick(leavid) {
        this.leavid = leavid;
        console.log(" this.leavid", this.leavid);
        //  this.approved = true;
        // this.denied = false;
        let body = {
            "status": "ACCEPTED"
        };
        this.timesheetService.approvalstatusById(body, this.currentUser.id, this.leavid).then((res) => {
            if (res) {
                this.approved = true;
                this.denied = false;
                this.toastService.openSnackBar("Leave Approval Successfully!!!");
                this.getleaveApprovalList();
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
    onfalseclick(leavid) {
        this.leavid1 = leavid;
        console.log(" this.leavid", this.leavid1);
        // this.approved = false;
        // this.denied = true;
        let body1 = {
            "status": "REJECTED"
        };
        this.timesheetService.approvalstatusById(body1, this.currentUser.id, this.leavid1).then((res) => {
            if (res) {
                this.approved = false;
                this.denied = true;
                this.toastService.openSnackBar("Leave Denied Successfully!!!");
                this.getleaveApprovalList();
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
    getApprovaldeleteId(approvalId) {
        this.approvalId = approvalId;
    }
    deleteapprovalById() {
        this.timesheetService.deleteapprovalDeleteById({}, this.approvalId).then((res) => {
            if (res) {
                this.toastService.openSnackBar("Leave Approval Deleted Successfully!!!");
                this.getleaveApprovalList();
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
    GotoImageOrPDF(imagelink) {
        this.DataLink = imagelink;
        const pdfName = "document.pdf";
        file_saver__WEBPACK_IMPORTED_MODULE_1___default().saveAs(this.DataLink, pdfName);
    }
}
ApprovalsComponent.ɵfac = function ApprovalsComponent_Factory(t) { return new (t || ApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__.TimesheetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe)); };
ApprovalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ApprovalsComponent, selectors: [["app-approvals"]], decls: 42, vars: 3, consts: [[1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3", "me-4"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Employee Name", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange", "change"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "40px"], ["type", "checkbox", 1, "form-check-input"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "15%"], ["style", "color: #676398", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [2, "color", "#676398", 3, "ngStyle"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["style", "color: green;font-weight: 600;", 3, "click", 4, "ngIf"], ["style", "color: red;font-weight: 600;", 3, "click", 4, "ngIf"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center"], ["class", "btn btnp", 3, "click", 4, "ngIf"], [2, "color", "green", "font-weight", "600", 3, "click"], [2, "color", "red", "font-weight", "600", 3, "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger"], [1, "btn", "btnp", 3, "click"], [1, "fas", "fa-receipt", "icon-color", "iconFontSize"], ["colspan", "12"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function ApprovalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ApprovalsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("change", function ApprovalsComponent_Template_input_change_3_listener() { return ctx.getexpenseSearch(ctx.searchKey); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "End");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Request Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ApprovalsComponent_tr_24_Template, 26, 22, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ApprovalsComponent_tbody_25_Template, 4, 0, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Delete Approvals? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Are You Sure To Delete Approvals?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_40_listener() { return ctx.deleteapprovalById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.leaveApprovallist);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.leaveApprovallist == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 188px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n  .custom-dialog-add-time {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  background-color: #00d27a !important;\n  color: #ffff !important;\n  border-color: #00d27a !important;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: #e63757 !important;\n  color: #ffff !important;\n  border-color: #e63757 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFFRSxVQUFBO0FBRko7O0FBSUU7RUFDRSxpQkFBQTtBQURKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFNRTtFQUNFO0lBQ0UsdUJBQUE7RUFISjtBQUNGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQU9BO0VBQ0UscUJBQUE7RUFDRyxtQkFBQTtFQUNELGVBQUE7QUFKSjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUY1Qzs7QUFRQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFMRjs7QUFRQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUxGOztBQVFBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBTEYiLCJmaWxlIjoiYXBwcm92YWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICAvL2ZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnNlYXJjaEJhcntcclxuICAgIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9ybUJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IDE4OHB4O1xyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4vLyBTZWFyY2ggYmFyXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyBcclxuICAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxufVxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogN3B4IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbn1cclxuXHJcbi8vIFRvIHBsYWNlIGRpYWxvZyBib3ggYXQgcmlnaHQgcG9zaXRpb24uXHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctYWRkLXRpbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDI3YSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwZDI3YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzNzU3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTYzNzU3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 21577:
/*!**********************************************************!*\
  !*** ./src/app/pages/timesheet/daily/daily.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyComponent": function() { return /* binding */ DailyComponent; }
/* harmony export */ });
/* harmony import */ var _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-time/add-time.component */ 60975);
/* harmony import */ var _edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-time/edit-time.component */ 12021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/timesheet.service */ 6465);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);








function DailyComponent_span_14_button_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_span_14_button_1_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r9.upiCheckedId.length > 0 ? ctx_r9.getUPIcheckId($event, ctx_r9.upiCheckedId) : ctx_r9.getSingleCheckedId($event, ctx_r9.checkSingleArray); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DailyComponent_span_14_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DailyComponent_span_14_button_1_span_1_Template, 1, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.checkSingleArray.length > 0 || ctx_r7.upiCheckedId.length > 0);
} }
function DailyComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DailyComponent_span_14_button_1_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.upiCheckedId.length > 0);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function DailyComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DailyComponent_tr_25_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r11 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.onChekedsingleCheckfalse($event, item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_tr_25_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r11 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.onEditTime(item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_tr_25_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r11 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.getTimeDeleteId(item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, i_r12 % 2 === 0 ? "#f2f2f2" : "#fff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.checkSelectsinglefalse)("value", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r11.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.selectProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.selectEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", item_r11.startTime, " - ", item_r11.endTime, "");
} }
function DailyComponent_tbody_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DailyComponent_h4_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Are you sure to Delete All Daily?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DailyComponent_h4_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Are you sure to Delete selected Daily?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DailyComponent_a_57_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_a_57_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.deleteProductById(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DailyComponent_a_58_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_a_58_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.deleteProductById(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class DailyComponent {
    constructor(dialog, titleCasePipe, timesheetService, toastService) {
        this.dialog = dialog;
        this.titleCasePipe = titleCasePipe;
        this.timesheetService = timesheetService;
        this.toastService = toastService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.checkSelect = false;
        this.allSelect = false;
        this.archiveIconfalse = false;
        this.checkSingleArray = [];
        this.upiCheckedId = [];
        this.upiCheckedId1 = [];
        this.isChecked = false;
        this.checkSelectsinglefalse = false;
    }
    ngOnInit() {
        this.getDailyTimeSheet();
        this.timesheetService.timeAdded$.subscribe(() => {
            // Fetch the updated list of users
            this.getDailyTimeSheet();
        });
    }
    getDailyTimeSheet() {
        this.timesheetService.getDailyTime({}, this.currentUser.id).then((res) => {
            console.log(res);
            this.dailyTimeSheet = res.data;
        });
    }
    getdailyPESearch(searchKey) {
        if (this.searchKey == "") {
            this.toastService.openErrorSnackBar("Please Enter Valid Employee Name or Project Name!!!");
            this.timesheetService.getDailyTimesearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.dailyTimeSheet = res.data;
                }
            });
        }
        else {
            this.timesheetService.getDailyTimesearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.dailyTimeSheet = res.data;
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
    // To open dialig box of Add Time form.
    onAddTime() {
        const dialogRef = this.dialog.open(_add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__.AddTimeComponent, {
            width: '40%',
            height: '730px',
            data: {},
            panelClass: 'custom-dialog-add-time',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    // To open dialig box of Edit Time form.
    onEditTime(edittimeId) {
        const dialogRef = this.dialog.open(_edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_1__.EditTimeComponent, {
            width: '40%',
            height: '730px',
            data: { edittimeId: edittimeId },
            panelClass: 'custom-dialog-edit-time',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getTimeDeleteId(timeId) {
        this.timeId = timeId;
    }
    getUPIcheckId(e, productId) {
        this.productId = productId;
        console.log("this.productId", this.productId);
    }
    getSingleCheckedId(e, productId) {
        this.productId = productId;
    }
    onChekMultiple($event) {
        let id = $event.target.value;
        this.isChecked = $event.target.checked;
        console.log("this.isChecked", this.isChecked);
        this.upiCheckedId1 = this.dailyTimeSheet.map((item) => {
            if (id == -1) {
                if (this.isChecked == true) {
                    this.checkSingleArray = [];
                    this.archiveIconfalse = true;
                    this.checkSelectsinglefalse = true;
                    return item;
                }
                else {
                    this.archiveIconfalse = false;
                    this.checkSelectsinglefalse = false;
                    this.upiCheckedId = [];
                    this.upiCheckedId1 = [];
                    this.checkSingleArray = [];
                }
            }
        });
        console.log("multiple click", this.upiCheckedId1);
        for (var i = 0; i < this.upiCheckedId1.length; i++) {
            this.upiCheckedId.push(this.upiCheckedId1[i].id);
        }
        console.log("multiple click", this.upiCheckedId);
    }
    onChekedsingleCheckfalse(e, id) {
        console.log("checked", e.target.checked);
        if (e.target.checked == true) {
            for (var i = 0; i < this.upiCheckedId.length; i++) {
                this.checkSingleArray.push(this.upiCheckedId[i]);
            }
            this.upiCheckedId = [];
            this.archiveIconfalse = true;
            this.checkSingleArray.push(e.target.value);
            console.log("after single click checkSingleArray", this.checkSingleArray);
        }
        else {
            if (this.upiCheckedId.length > this.checkSingleArray.length) {
                var index1 = this.upiCheckedId.indexOf(id);
                console.log(index1);
                this.upiCheckedId.splice(index1, 1);
                console.log("after single click upiCheckedId", this.upiCheckedId);
                if (this.upiCheckedId.length > 0) {
                    this.archiveIconfalse = true;
                    this.checkSelect = false;
                    this.isChecked = false;
                }
                else {
                    this.archiveIconfalse = false;
                    this.upiCheckedId = [];
                }
            }
            else {
                var index = this.checkSingleArray.indexOf(id);
                console.log(index);
                this.checkSingleArray.splice(index, 1);
                console.log("this.checkSingleArray", this.checkSingleArray);
                if (this.checkSingleArray.length > 0) {
                    this.archiveIconfalse = true;
                }
                else {
                    this.archiveIconfalse = false;
                    this.checkSingleArray = [];
                }
            }
        }
    }
    onDeleteDailyTime() {
        this.timesheetService.deleteTimeDeleteById({}, this.timeId).then((res) => {
            console.log(res);
            this.toastService.openSnackBar("TimeSheet Deleted Successfully!!!");
            this.getDailyTimeSheet();
        });
    }
    deleteProductById() {
        console.log("this.productId-->", this.productId);
        let request = {
            "taskIds": this.productId
        };
        this.timesheetService.multideleteTimeDeleteById(request, this.currentUser.id).then((res) => {
            console.log(res);
            this.toastService.openSnackBar("TimeSheet Deleted Successfully!!!");
            this.getDailyTimeSheet();
            this.archiveIconfalse = false;
            this.allSelect = false;
            this.checkSelectsinglefalse = false;
            this.isChecked = false;
            this.upiCheckedId = [];
            this.checkSingleArray = [];
        });
    }
}
DailyComponent.ɵfac = function DailyComponent_Factory(t) { return new (t || DailyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__.TimesheetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService)); };
DailyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DailyComponent, selectors: [["app-daily"]], decls: 59, vars: 11, consts: [[1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Employee Name / Project Name", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange", "change"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["id", "saleButtonPrint1", "type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", "col-1", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "mt-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "width", "15%"], ["style", "color: #676398", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["class", "text-center ", 4, "ngIf"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["style", "padding: 0px!important;", "class", "btn ms-3", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn", "ms-3", 2, "padding", "0px!important"], ["class", "bi-trash icon-color fs-1", "style", "color: red;", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red", 3, "click"], [2, "color", "#676398", 3, "ngStyle"], ["scope", "row", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "change"], [1, "text-nowraap"], [1, "row", 2, "display", "flex", "flex-direction", "row", "justify-content", "flex-start", "align-items", "center", "flex-wrap", "nowrap", "padding-left", "8px", "padding-right", "8px"], [1, "flex-item", 2, "flex-basis", "55px"], ["alt", "Profile", "onerror", "this.src='assets/img/dashboard-party-profiles/party-profile-1.png'", "alt", "Profile", "width", "50", "height", "50", 1, "rounded-circle", 3, "src"], [1, "flex-item", "party-name", 2, "display", "flex", "flex-direction", "column", "align-items", "flex-start", "flex-basis", "70px"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center"], [1, "btn", "btnp", "me-2", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", 2, "color", "red"], ["colspan", "12"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function DailyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DailyComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("change", function DailyComponent_Template_input_change_3_listener() { return ctx.getdailyPESearch(ctx.searchKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_Template_button_click_5_listener() { return ctx.onAddTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DailyComponent_Template_input_change_13_listener($event) { return ctx.onChekMultiple($event); })("ngModelChange", function DailyComponent_Template_input_ngModelChange_13_listener($event) { return ctx.allSelect = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DailyComponent_span_14_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Project/To-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Time Span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DailyComponent_tr_25_Template, 21, 11, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DailyComponent_tbody_26_Template, 4, 0, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Delete Daily ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Are You Sure To Delete ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DailyComponent_Template_a_click_41_listener() { return ctx.onDeleteDailyTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Delete Daily? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, DailyComponent_h4_52_Template, 2, 0, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, DailyComponent_h4_53_Template, 2, 0, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, DailyComponent_a_57_Template, 2, 0, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, DailyComponent_a_58_Template, 2, 0, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", -1)("checked", ctx.checkSelect)("ngModel", ctx.allSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.archiveIconfalse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dailyTimeSheet);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dailyTimeSheet == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], styles: [".headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 170px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n  .custom-dialog-add-time {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n  .custom-dialog-edit-time {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUVFLFVBQUE7QUFGSjs7QUFJRTtFQUNFLGlCQUFBO0FBREo7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1FO0VBQ0U7SUFDRSx1QkFBQTtFQUhKO0FBQ0Y7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNHLG1CQUFBO0VBQ0QsZUFBQTtBQUxKOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EscVhBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQTBDLCtCQUFBO0FBSDVDOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQU5GOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQU5GIiwiZmlsZSI6ImRhaWx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICAvL2ZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnNlYXJjaEJhcntcclxuICAgIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9ybUJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IDE3MHB4O1xyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4vLyBTZWFyY2ggYmFyXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0ciB7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyBcclxuICAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxufVxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogN3B4IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbn1cclxuXHJcbi8vIFRvIHBsYWNlIGRpYWxvZyBib3ggYXQgcmlnaHQgcG9zaXRpb24uXHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctYWRkLXRpbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctZWRpdC10aW1lIHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 12021:
/*!******************************************************************!*\
  !*** ./src/app/pages/timesheet/edit-time/edit-time.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTimeComponent": function() { return /* binding */ EditTimeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/timesheet.service */ 6465);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 32220);
















function EditTimeComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r11, " ");
} }
function EditTimeComponent_mat_error_19_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Employee Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTimeComponent_mat_error_19_mat_error_1_Template, 2, 0, "mat-error", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.employeeName.errors == null ? null : ctx_r1.f.employeeName.errors.required);
} }
function EditTimeComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Start Time Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " End Time Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Period is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select Client is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Select Project is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Task is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_107_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTimeComponent_mat_error_107_mat_error_1_Template, 2, 0, "mat-error", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.f.description.errors == null ? null : ctx_r9.f.description.errors.required);
} }
function EditTimeComponent_mat_error_116_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Reason is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTimeComponent_mat_error_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTimeComponent_mat_error_116_mat_error_1_Template, 2, 0, "mat-error", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.f.reason.errors == null ? null : ctx_r10.f.reason.errors.required);
} }
const _c0 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class EditTimeComponent {
    constructor(dialogRef, editDatatime, formBuilder, toastService, timesheetService, rolesPermissionsService, titleCasePipe) {
        this.dialogRef = dialogRef;
        this.editDatatime = editDatatime;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.timesheetService = timesheetService;
        this.rolesPermissionsService = rolesPermissionsService;
        this.titleCasePipe = titleCasePipe;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.isSwitchOn = false;
        this.submitted = false;
        this.timeDifferenceFormatted = '';
        this.today = new Date();
        this.todaysDate = new Date();
    }
    ngOnInit() {
        this.timeId = this.editDatatime.edittimeId;
        console.log("this.timeId", this.timeId);
        this.gettimeById();
        this.getUsersList();
        this.EditTimeForm = this.formBuilder.group({
            employeeName: [''],
            startDate: [''],
            start_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            end_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            period: ['00:00:00', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            isBillable: [false],
            clientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            projectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            task: [''],
            description: [''],
            reason: [''],
        });
    }
    getUsersList() {
        this.rolesPermissionsService.getUsers({}, this.currentUser.id).then((res) => {
            this.employeeList = res.data.map((item) => { return item.firstName; });
            console.log("employee", this.employeeList);
        });
    }
    gettimeById() {
        this.timesheetService.getcollectimeById({}, this.timeId).then((res) => {
            console.log("res edit click data", res);
            this.EditTimeForm.patchValue({
                employeeName: res.data.selectEmployee,
                startDate: moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY"),
                start_time: res.data.startTime,
                end_time: res.data.endTime,
                period: res.data.period,
                isBillable: res.data.isBillable === true ? 'true' : 'false',
                clientName: res.data.selectClient,
                projectName: res.data.selectProject,
                task: res.data.enterTask,
                description: res.data.description,
                reason: res.data.reason,
            });
        });
    }
    // Short-cut used in mat errors.
    get f() {
        return this.EditTimeForm.controls;
    }
    // To save the add time form
    postAddTimeForm() {
        this.submitted = true;
        if (this.EditTimeForm.invalid) {
            this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            if (this.EditTimeForm.controls.start_time.value < this.EditTimeForm.controls.end_time.value) {
                let body = {
                    "timeDetails": {
                        "date": moment__WEBPACK_IMPORTED_MODULE_0__(this.EditTimeForm.controls.startDate.value, 'DD-MMM-YYYY').format('YYYY-MM-DD'),
                        "startTime": this.EditTimeForm.controls.start_time.value,
                        "endTime": this.EditTimeForm.controls.end_time.value,
                        "period": this.EditTimeForm.controls.period.value,
                        "isBillable": this.EditTimeForm.controls.isBillable.value,
                        "selectProject": this.EditTimeForm.controls.projectName.value,
                        "enterTask": this.EditTimeForm.controls.task.value,
                        "description": this.EditTimeForm.controls.description.value,
                        "reason": this.EditTimeForm.controls.reason.value,
                        "selectClient": this.EditTimeForm.controls.clientName.value,
                        "selectEmployee": this.EditTimeForm.controls.employeeName.value,
                        //"employeeId": this.timeId
                    }
                };
                this.timesheetService.editTime(body, this.timeId).then((res) => {
                    console.log("time", res);
                    this.toastService.openSnackBar("Time Updated Successfully!!!");
                    this.timesheetService.notifytimeAdded();
                    this.dialogRef.close();
                }, (err) => {
                    if (err.error.expose) {
                        this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
                    }
                    else {
                        this.toastService.openErrorSnackBar("Something Went Wrong.");
                    }
                });
            }
            else {
                this.toastService.openErrorSnackBar("Start time must be less than end time!!!");
            }
        }
    }
    calculateTimeDifference() {
        const startTimeValue = this.EditTimeForm.controls['start_time'].value;
        const endTimeValue = this.EditTimeForm.controls['end_time'].value;
        // console.log("startTimeValue",startTimeValue);
        // console.log("endTimeValue",endTimeValue);
        if (startTimeValue && endTimeValue) {
            const [startHour, startMinute] = startTimeValue.split(':');
            const [endHour, endMinute] = endTimeValue.split(':');
            const startDate = new Date();
            startDate.setHours(parseInt(startHour, 10));
            startDate.setMinutes(parseInt(startMinute, 10));
            const endDate = new Date();
            endDate.setHours(parseInt(endHour, 10));
            endDate.setMinutes(parseInt(endMinute, 10));
            if (startDate < endDate) {
                const timeDifferenceInMilliseconds = endDate.getTime() - startDate.getTime();
                const hoursDifference = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
                const minutesDifference = Math.floor((timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
                const secondsDifference = Math.floor((timeDifferenceInMilliseconds % (1000 * 60)) / 1000);
                this.timeDifferenceFormatted = `${this.formatTimeUnit(hoursDifference)}:${this.formatTimeUnit(minutesDifference)}:${this.formatTimeUnit(secondsDifference)}`;
                console.log("  this.timeDifferenceFormatted", this.timeDifferenceFormatted);
                this.EditTimeForm.patchValue({
                    period: this.timeDifferenceFormatted
                });
            }
            else {
                this.toastService.openErrorSnackBar("Start time must be less than end time!!!");
                //this.timeDifferenceFormatted = '';
                this.EditTimeForm.patchValue({
                    // period: this.timeDifferenceFormatted,
                    start_time: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                    end_time: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                });
            }
        }
        else {
            this.timeDifferenceFormatted = '';
            this.EditTimeForm.patchValue({
                period: this.timeDifferenceFormatted,
            });
        }
    }
    formatTimeUnit(unit) {
        return unit < 10 ? `0${unit}` : `${unit}`;
    }
    // For isBillable input.
    toggleSwitch() {
        this.isSwitchOn = !this.isSwitchOn;
    }
    // To close the dialog.
    clearAddTimeForm() {
        this.dialogRef.close();
    }
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.EditTimeForm.get('startDate').value;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.EditTimeForm.get('startDate').setValue(new Date());
        }
    }
}
EditTimeComponent.ɵfac = function EditTimeComponent_Factory(t) { return new (t || EditTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_2__.TimesheetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe)); };
EditTimeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditTimeComponent, selectors: [["app-edit-time"]], decls: 117, vars: 23, consts: [[1, "modal-header", "flex", "d-flex", "flex-row", "pt-0", 2, "justify-content", "center", "align-items", "center"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "4px"], [1, "payrollButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "disableOptionCentering", "", "formControlName", "employeeName", "placeholder", "Employees"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "startDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "minDate", "bsConfig", "click"], [1, "iconcalender", "p-0"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-4"], ["type", "time", "matInput", "", "placeholder", "Start Time", "formControlName", "start_time", 3, "ngClass", "value", "blur"], ["class", "text-danger mb-1", 4, "ngIf"], ["type", "time", "matInput", "", "placeholder", "End Time", "formControlName", "end_time", 3, "ngClass", "value", "blur"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Period", "autocomplete", "off", "formControlName", "period", "readonly", ""], [1, "col-12", "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", "formControlName", "isBillable", 1, "form-check-input", "mr-1", 2, "float", "inherit", "margin-right", "10px", "margin-left", "-20px", "cursor", "pointer"], [1, "text-nowrap", "form-label", 2, "font-size", "14px"], ["formControlName", "clientName", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Client", "autocomplete", "off"], ["value", "client1"], ["value", "client2"], ["value", "client3"], ["formControlName", "projectName", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Project", "autocomplete", "off"], ["value", "Iceipts"], ["value", "FIFM"], ["value", "FIGO"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Enter Your Task", "autocomplete", "off", "formControlName", "task"], [1, "col-sm-12", "col-md-12", "col-lg-12"], ["matInput", "", "rows", "3", "placeholder", "Enter The Description", "required", "", "autocomplete", "off", "formControlName", "description"], [1, "row"], ["matInput", "", "rows", "3", "placeholder", "Enter Your Reason", "required", "", "autocomplete", "off", "formControlName", "reason"], [3, "value"], [1, "text-danger"], [4, "ngIf"], [1, "text-danger", "mb-1"]], template: function EditTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTimeComponent_Template_button_click_4_listener() { return ctx.clearAddTimeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTimeComponent_Template_button_click_6_listener() { return ctx.postAddTimeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Select Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, EditTimeComponent_mat_option_18_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EditTimeComponent_mat_error_19_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditTimeComponent_Template_input_click_26_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, EditTimeComponent_mat_error_30_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Start Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function EditTimeComponent_Template_input_blur_38_listener() { return ctx.calculateTimeDifference(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, EditTimeComponent_mat_error_39_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "End Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function EditTimeComponent_Template_input_blur_46_listener() { return ctx.calculateTimeDifference(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, EditTimeComponent_mat_error_47_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Period ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, EditTimeComponent_mat_error_55_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Is Billable");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Select Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "client1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "client2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "client3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, EditTimeComponent_mat_error_75_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Select Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Iceipts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "FIFM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "FIGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, EditTimeComponent_mat_error_89_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Enter Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, EditTimeComponent_mat_error_98_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, EditTimeComponent_mat_error_107_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Reasons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](116, EditTimeComponent_mat_error_116_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.EditTimeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.employeeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.employeeName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("minDate", ctx.today)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.startDate.touched) && (ctx.f.startDate.errors == null ? null : ctx.f.startDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.f.start_time.invalid && ctx.f.start_time.touched && ctx.submitted))("value", ctx.EditTimeForm.controls.start_time.value || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.start_time.touched) && (ctx.f.start_time.errors == null ? null : ctx.f.start_time.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.f.end_time.invalid && ctx.f.end_time.touched && ctx.submitted))("value", ctx.EditTimeForm.controls.end_time.value || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.end_time.touched) && (ctx.f.end_time.errors == null ? null : ctx.f.end_time.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.period.touched) && (ctx.f.period.errors == null ? null : ctx.f.period.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.clientName.touched) && (ctx.f.clientName.errors == null ? null : ctx.f.clientName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.projectName.touched) && (ctx.f.projectName.errors == null ? null : ctx.f.projectName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.task.touched) && (ctx.f.task.errors == null ? null : ctx.f.task.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.description.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.reason.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.payrollButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -20px !important;\n}\n\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .payrollButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBSkY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBU0E7RUFDRSx5QkFBQTtBQU5GOztBQVdBO0VBR0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBVkY7O0VBY0E7SUFDRSxnQkFBQTtFQVhGO0FBQ0YiLCJmaWxlIjoiZWRpdC10aW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWxpZ2luZyBldmVyeXRoaW5nIGF0IGNlbnRlci5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIFRvIGFsaWduIGJ1dHRvbnMgYXQgZW5kLlxyXG4ucGF5cm9sbEJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLy8gVG8gZ2l2ZSBlbm91Z2ggc3BhY2UgZm9yIG1vZGFsIGJvZHkgYXQgYW55IHNjcmVlbiBzaXplLlxyXG4ubW9kYWwtYm9keSB7XHJcbiAgaGVpZ2h0OiA4OCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLy8gVG8gYXJyYW5nZSBsYWJlbCBhbmQgaW5wdXQgZm9ybVxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8vIERhdGUgSWNvblxyXG4uaWNvbmNhbGVuZGVyIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBUbyBnaXZlIGhvdmVyaW5nIGNvbG9yIHRvIGZvcm0gaW5wdXRzLlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XHJcbiAgY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuXHJcbi8vIFRvIGdpdmUgY29sb3IgdG8gYm9yZGVycyBvbiBjbGlja2luZyB0aGUgZm9ybSBpbnB1dHMuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyaWVzXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAvLyBBbGlnaW5nIGV2ZXJ5dGhpbmcgYXQgY2VudGVyIGNvbHVtbi13aXNlIGZvciBzbWFsbGVyIHNjcmVlbiBzaXplLlxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8vIEdhcCBiZXR3ZWVuIHRoZSBoZWFkZXIgYW5kIGJ1dHRvbnMuXHJcbiAgLnBheXJvbGxCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 51972:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/timesheet/setting-timesheet/setting-timesheet.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingTimesheetComponent": function() { return /* binding */ SettingTimesheetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/timesheet.service */ 6465);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64742);








function SettingTimesheetComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingTimesheetComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58); return ctx_r3.onsubmit(_r0.textContent); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingTimesheetComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingTimesheetComponent_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58); return ctx_r5.onupdate(_r0.textContent); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SettingTimesheetComponent {
    constructor(formBuilder, timesheetService, toastService, titleCasePipe) {
        this.formBuilder = formBuilder;
        this.timesheetService = timesheetService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.total = 0;
        this.shouldCallBlur = true;
        this.isShowButtonsetting = false;
    }
    ngOnInit() {
        this.getleaveDaysDetails();
        this.settingLeaveForm = this.formBuilder.group({
            slday: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
            plday: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
            clday: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
            complday: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]],
        });
    }
    getleaveDaysDetails() {
        this.timesheetService.getAllLeaveDaysDetails({}, this.currentUser.id).then((res) => {
            console.log("res LEAVE Days", res);
            if (res) {
                this.listdata = res.data.leave;
                if (this.listdata.length > 0) {
                    this.isShowButtonsetting = true;
                    console.log("res LEAVE", this.listdata);
                    for (var i = 0; i < this.listdata.length; i++) {
                        if (this.listdata[i].type == "Casual Leave") {
                            this.clid = res.data.leave[i].id;
                            this.settingLeaveForm.patchValue({
                                clday: res.data.leave[i].leaveAllocated,
                            });
                        }
                        if (this.listdata[i].type == "Sick Leave") {
                            this.sid = res.data.leave[i].id;
                            this.settingLeaveForm.patchValue({
                                slday: res.data.leave[i].leaveAllocated,
                            });
                        }
                        if (this.listdata[i].type == "Compensatory Leave") {
                            this.comid = res.data.leave[i].id;
                            this.settingLeaveForm.patchValue({
                                complday: res.data.leave[i].leaveAllocated,
                            });
                        }
                        if (this.listdata[i].type == "Privilage Leave") {
                            this.pid = res.data.leave[i].id;
                            this.settingLeaveForm.patchValue({
                                plday: res.data.leave[i].leaveAllocated,
                            });
                        }
                    }
                }
                else {
                    this.isShowButtonsetting = false;
                }
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
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    get f() {
        return this.settingLeaveForm.controls;
    }
    onsubmit(content) {
        this.total = content;
        // console.log('null:', this.settingLeaveForm.controls.slday.value);
        if (this.settingLeaveForm.controls.slday.value == null) {
            this.body = 0;
            // console.log('SN:', this.body );
        }
        else {
            this.body = this.settingLeaveForm.controls.slday.value;
            // console.log('SA:', this.body );
        }
        if (this.settingLeaveForm.controls.clday.value == null) {
            this.body1 = 0;
            // console.log('CN', this.body1 );
        }
        else {
            this.body1 = this.settingLeaveForm.controls.clday.value;
            // console.log('CA:', this.body1 );
        }
        if (this.settingLeaveForm.controls.plday.value == null) {
            this.body2 = 0;
            // console.log('PN', this.body2 );
        }
        else {
            this.body2 = this.settingLeaveForm.controls.plday.value;
            // console.log('PA', this.body2 );
        }
        if (this.settingLeaveForm.controls.complday.value == null) {
            this.body3 = 0;
            // console.log('CON', this.body3 );
        }
        else {
            this.body3 = this.settingLeaveForm.controls.complday.value;
            // console.log('COA', this.body3 );
        }
        let Body = {
            "assignLeave": [
                {
                    "type": "Sick Leave",
                    "leaveAllocated": this.body
                },
                {
                    "type": "Casual Leave",
                    "leaveAllocated": this.body1
                },
                {
                    "type": "Privilage Leave",
                    "leaveAllocated": this.body2
                },
                {
                    "type": "Compensatory Leave",
                    "leaveAllocated": this.body3
                }
            ]
        };
        this.timesheetService.getleavesetting(Body, this.currentUser.id).then((res) => {
            if (res) {
                this.getleaveDaysDetails();
                this.toastService.openSnackBar("All Leave Added Successfully!!!");
                this.body = 0;
                this.body1 = 0;
                this.body2 = 0;
                this.body3 = 0;
            }
        });
    }
    onupdate(content) {
        this.total = content;
        // console.log('null:', this.settingLeaveForm.controls.slday.value);
        if (this.settingLeaveForm.controls.slday.value == null) {
            this.body = 0;
            // console.log('SN:', this.body );
        }
        else {
            this.body = this.settingLeaveForm.controls.slday.value;
            // console.log('SA:', this.body );
        }
        if (this.settingLeaveForm.controls.clday.value == null) {
            this.body1 = 0;
            // console.log('CN', this.body1 );
        }
        else {
            this.body1 = this.settingLeaveForm.controls.clday.value;
            // console.log('CA:', this.body1 );
        }
        if (this.settingLeaveForm.controls.plday.value == null) {
            this.body2 = 0;
            // console.log('PN', this.body2 );
        }
        else {
            this.body2 = this.settingLeaveForm.controls.plday.value;
            // console.log('PA', this.body2 );
        }
        if (this.settingLeaveForm.controls.complday.value == null) {
            this.body3 = 0;
            // console.log('CON', this.body3 );
        }
        else {
            this.body3 = this.settingLeaveForm.controls.complday.value;
            // console.log('COA', this.body3 );
        }
        let body = [
            {
                "id": this.sid,
                "leaveAllocated": this.body
            },
            {
                "id": this.clid,
                "leaveAllocated": this.body1
            },
            {
                "id": this.pid,
                "leaveAllocated": this.body2
            },
            {
                "id": this.comid,
                "leaveAllocated": this.body3
            }
        ];
        this.timesheetService.getleavesettingupdate(body, this.currentUser.id).then((res) => {
            if (res) {
                this.getleaveDaysDetails();
                this.toastService.openSnackBar("All Leave Update Successfully!!!");
                this.body = 0;
                this.body1 = 0;
                this.body2 = 0;
                this.body3 = 0;
            }
        });
    }
}
SettingTimesheetComponent.ɵfac = function SettingTimesheetComponent_Factory(t) { return new (t || SettingTimesheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_0__.TimesheetService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe)); };
SettingTimesheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingTimesheetComponent, selectors: [["app-setting-timesheet"]], decls: 68, vars: 4, consts: [[1, "container-fluid", "bg-white", "p-0"], [1, "row"], [1, "col-sm-12", "col-md-11", "col-lg-10", "col-xl-9", "col-xxl-8", "ps-5", "mt-3"], [1, "card"], [3, "formGroup"], [1, "row", "my-3", "px-3", "py-2"], [1, "col-12", "ps-5", 2, "font-size", "20px", "font-weight", "500", "color", "black", "font-family", "Poppins"], [1, "tableSize"], [1, "table", "table-responsive", "mb-0", "pb-0"], [2, "border-bottom", "1px solid #D9D9D9", "border-top", "1px solid #D9D9D9"], [2, "width", "15%", "border-right", "none !important"], [2, "font-size", "18px", "font-weight", "500", "width", "35%", "padding-left", "30px", "border-right", "1px solid #D9D9D9"], [2, "color", "black", "font-family", "Poppins"], [2, "font-size", "18px", "font-weight", "500", "text-align", "center"], [2, "border-right", "none !important"], [1, "leave", 2, "border-right", "1px solid #D9D9D9"], [1, "textColor"], [2, "text-align", "center"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "placeholder", "Sick Leave", "formControlName", "slday", "autocomplete", "off", 2, "text-align", "center", 3, "keypress"], ["matNativeControl", "", "matInput", "", "placeholder", "Casual Leave", "formControlName", "clday", "autocomplete", "off", 2, "text-align", "center", 3, "keypress"], ["matNativeControl", "", "matInput", "", "placeholder", "Privilege Leave", "formControlName", "plday", "autocomplete", "off", 2, "text-align", "center", 3, "keypress"], ["matNativeControl", "", "matInput", "", "placeholder", "Compensatory Leave", "formControlName", "complday", "autocomplete", "off", 2, "text-align", "center", 3, "keypress"], [2, "border-top", "1px solid #D9D9D9 !important"], [2, "font-size", "18px", "font-weight", "500", "padding-left", "25px", "font-family", "Poppins"], ["myParagraph", ""], [2, "border-top", "1px solid #D9D9D9"], [1, "row", "px-3", 2, "float", "right"], ["type", "button", "class", "btn btn-save", "style", "width:100px;padding-left: 32px;", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-save", "style", "width:100px;padding-left: 24px;", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-save", 2, "width", "100px", "padding-left", "32px", 3, "click"], ["type", "button", 1, "btn", "btn-save", 2, "width", "100px", "padding-left", "24px", 3, "click"]], template: function SettingTimesheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Leave Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Leave Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Leave Allocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Sick Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SettingTimesheetComponent_Template_input_keypress_27_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Casual Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SettingTimesheetComponent_Template_input_keypress_35_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Privilege Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SettingTimesheetComponent_Template_input_keypress_43_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Compensatory Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function SettingTimesheetComponent_Template_input_keypress_51_listener($event) { return ctx.numberOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Total Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td", 17, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, SettingTimesheetComponent_button_66_Template, 2, 0, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, SettingTimesheetComponent_button_67_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.settingLeaveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (+ctx.settingLeaveForm.get("slday").value || 0) + (+ctx.settingLeaveForm.get("clday").value || 0) + (+ctx.settingLeaveForm.get("plday").value || 0) + (+ctx.settingLeaveForm.get("complday").value || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowButtonsetting == true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n\n.tableSize[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 40% !important;\n}\n\n.textColor[_ngcontent-%COMP%] {\n  color: black;\n  white-space: nowrap;\n}\n\ntd[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 14px;\n}\n\n@media screen and (max-width: 450px) {\n  .tableSize[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmctdGltZXNoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQUFGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFXQTtFQUNFLHFCQUFBO0FBUkY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFhQTtFQUNFLG1CQUFBO0FBVkY7O0FBY0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFpQkE7RUFDRTtJQUNFLGtCQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJzZXR0aW5nLXRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvIGdpdmUgaG92ZXJpbmcgY29sb3IgdG8gZm9ybSBpbnB1dHMuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNTtcclxufVxyXG5cclxuLy8gVG8gZ2l2ZSBjb2xvciB0byBib3JkZXJzIG9uIGNsaWNraW5nIHRoZSBmb3JtIGlucHV0cy5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjMmM3YmU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udGFibGVTaXplIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gVG8gZ2l2ZSBib3JkZXIgdG8gd2hvbGUgdGFibGUuXHJcbi8vIHRhYmxlIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xyXG4vLyB9XHJcblxyXG4vLyBUbyBhZGp1c3Qgd2lkdGggb2YgaW5wdXQgZmllbGRzLlxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIFRvIGFsbCBsZWF2ZSB0eXBlcy5cclxuLnRleHRDb2xvciB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8gVG8gcmVtb3ZlIHVubmVjZXNzYXJ5IGJvcmRlcnMuXHJcbnRkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vLyBUbyBnaXZlIGJvcmRlcnMgb25seSB0byB0aGUgcmlnaHQgc2lkZS5cclxudGgsIHRkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NTBweCkge1xyXG4gIC50YWJsZVNpemUge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 6235:
/*!*************************************************************!*\
  !*** ./src/app/pages/timesheet/timesheet-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetRoutingModule": function() { return /* binding */ TimesheetRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _timesheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timesheet.component */ 67110);
/* harmony import */ var _daily_daily_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily/daily.component */ 21577);
/* harmony import */ var _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly/weekly.component */ 80898);
/* harmony import */ var _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approvals/approvals.component */ 38566);
/* harmony import */ var _setting_timesheet_setting_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-timesheet/setting-timesheet.component */ 51972);
/* harmony import */ var _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-time/add-time.component */ 60975);
/* harmony import */ var _edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-time/edit-time.component */ 12021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);

// Main component

// Sub-components




// Child components of daily




const routes = [
    {
        path: '',
        component: _timesheet_component__WEBPACK_IMPORTED_MODULE_0__.TimesheetComponent,
        children: [
            {
                path: '',
                redirectTo: 'daily',
                pathMatch: 'full'
            },
            {
                path: 'daily',
                component: _daily_daily_component__WEBPACK_IMPORTED_MODULE_1__.DailyComponent,
            },
            {
                path: 'add-time',
                component: _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_5__.AddTimeComponent,
            },
            {
                path: 'edit-time',
                component: _edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_6__.EditTimeComponent,
            },
            {
                path: 'weekly',
                component: _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_2__.WeeklyComponent,
            },
            {
                path: 'approvals',
                component: _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_3__.ApprovalsComponent,
            },
            {
                path: 'setting',
                component: _setting_timesheet_setting_timesheet_component__WEBPACK_IMPORTED_MODULE_4__.SettingTimesheetComponent,
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    }
];
class TimesheetRoutingModule {
}
TimesheetRoutingModule.ɵfac = function TimesheetRoutingModule_Factory(t) { return new (t || TimesheetRoutingModule)(); };
TimesheetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TimesheetRoutingModule });
TimesheetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TimesheetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 67110:
/*!********************************************************!*\
  !*** ./src/app/pages/timesheet/timesheet.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetComponent": function() { return /* binding */ TimesheetComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class TimesheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimesheetComponent.ɵfac = function TimesheetComponent_Factory(t) { return new (t || TimesheetComponent)(); };
TimesheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimesheetComponent, selectors: [["app-timesheet"]], decls: 20, vars: 0, consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-3", "col-xs-3"], ["routerLink", "./daily", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-3", "col-xs-3"], ["routerLink", "./weekly", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["routerLink", "./approvals", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["routerLink", "./setting", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-8", "col-xl-8", "col-lg-4", "col-md-3", "col-sm-0", "col-xs-0"], [1, "mt-1"]], template: function TimesheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Approvals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@media screen and (max-width: 575px) {\n  .links[_ngcontent-%COMP%] {\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFO0lBQ0Usa0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InRpbWVzaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1lZGlhIHF1ZXJpZXNcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuXHJcbiAgLy8gVG8gcGxhY2Ugc29tZSBnYXAgYmV0d2VlbiBsaW5rcyBpbiBzbWFsbGVyIHNjcmVlbiBzaXplcy5cclxuICAubGlua3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMC43cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 81601:
/*!*****************************************************!*\
  !*** ./src/app/pages/timesheet/timesheet.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetModule": function() { return /* binding */ TimesheetModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timesheet-routing.module */ 6235);
/* harmony import */ var _timesheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timesheet.component */ 67110);
/* harmony import */ var _daily_daily_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily/daily.component */ 21577);
/* harmony import */ var _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weekly/weekly.component */ 80898);
/* harmony import */ var _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approvals/approvals.component */ 38566);
/* harmony import */ var _setting_timesheet_setting_timesheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-timesheet/setting-timesheet.component */ 51972);
/* harmony import */ var _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-time/add-time.component */ 60975);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-time/edit-time.component */ 12021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);















class TimesheetModule {
}
TimesheetModule.ɵfac = function TimesheetModule_Factory(t) { return new (t || TimesheetModule)(); };
TimesheetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TimesheetModule });
TimesheetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_1__.TimesheetRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialExampleModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TimesheetModule, { declarations: [_timesheet_component__WEBPACK_IMPORTED_MODULE_2__.TimesheetComponent,
        _daily_daily_component__WEBPACK_IMPORTED_MODULE_3__.DailyComponent,
        _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_4__.WeeklyComponent,
        _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_5__.ApprovalsComponent,
        _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_7__.AddTimeComponent,
        _setting_timesheet_setting_timesheet_component__WEBPACK_IMPORTED_MODULE_6__.SettingTimesheetComponent,
        _edit_time_edit_time_component__WEBPACK_IMPORTED_MODULE_8__.EditTimeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_1__.TimesheetRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialExampleModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerModule] }); })();


/***/ }),

/***/ 80898:
/*!************************************************************!*\
  !*** ./src/app/pages/timesheet/weekly/weekly.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyComponent": function() { return /* binding */ WeeklyComponent; }
/* harmony export */ });
/* harmony import */ var _add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-time/add-time.component */ 60975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/timesheet.service */ 6465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);








function WeeklyComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, day_r2, "fullDate"));
} }
function WeeklyComponent_tr_12_td_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeeklyComponent_tr_12_td_3_ng_container_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r9.onAddTime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function WeeklyComponent_tr_12_td_3_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.getFormattedPeriod(ctx_r11.getEntryForDate(project_r3.value, day_r5).period));
} }
function WeeklyComponent_tr_12_td_3_ng_template_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.getFormattedPeriod(ctx_r12.getEntryForDate(project_r3.value, day_r5).period));
} }
function WeeklyComponent_tr_12_td_3_ng_template_2_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.getFormattedPeriod(ctx_r13.getEntryForDate(project_r3.value, day_r5).period));
} }
function WeeklyComponent_tr_12_td_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WeeklyComponent_tr_12_td_3_ng_template_2_a_0_Template, 2, 1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeeklyComponent_tr_12_td_3_ng_template_2_a_3_Template, 2, 1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WeeklyComponent_tr_12_td_3_ng_template_2_a_6_Template, 2, 1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
} if (rf & 2) {
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 3, ctx_r8.getFormattedPeriod(ctx_r8.getEntryForDate(project_r3.value, day_r5).date), "dd MMM yyyy") === _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 6, ctx_r8.date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 9, ctx_r8.getFormattedPeriod(ctx_r8.getEntryForDate(project_r3.value, day_r5).date), "dd MMM yyyy") > _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 12, ctx_r8.date, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 15, ctx_r8.getFormattedPeriod(ctx_r8.getEntryForDate(project_r3.value, day_r5).date), "dd MMM yyyy") < _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 18, ctx_r8.date, "dd MMM yyyy"));
} }
function WeeklyComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeeklyComponent_tr_12_td_3_ng_container_1_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WeeklyComponent_tr_12_td_3_ng_template_2_Template, 9, 21, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const project_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.getFormattedPeriod(ctx_r4.getEntryForDate(project_r3.value, day_r5).period) === "0:00:00")("ngIfElse", _r7);
} }
function WeeklyComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WeeklyComponent_tr_12_td_3_Template, 4, 2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.weekDates);
} }
class WeeklyComponent {
    constructor(dialog, timesheetService, titleCasePipe, toastService) {
        this.dialog = dialog;
        this.timesheetService = timesheetService;
        this.titleCasePipe = titleCasePipe;
        this.toastService = toastService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const today = new Date();
        this.weekDates = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() - today.getDay() + index);
            return date.toISOString().split('T')[0];
        });
    }
    ngOnInit() {
        this.date = new Date(new Date().setDate(new Date().getDate()));
        console.log("this.date1", this.date);
        this.date2 = new Date(new Date().setDate(new Date().getDate() + 1));
        this.date3 = new Date(new Date().setDate(new Date().getDate() + 2));
        this.date4 = new Date(new Date().setDate(new Date().getDate() + 3));
        this.date5 = new Date(new Date().setDate(new Date().getDate() + 4));
        this.date6 = new Date(new Date().setDate(new Date().getDate() + 5));
        this.date7 = new Date(new Date().setDate(new Date().getDate() + 6));
        this.getweeklyTimeSheet();
        this.timesheetService.timeAdded$.subscribe(() => {
            // Fetch the updated list of users
            this.getweeklyTimeSheet();
        });
    }
    getweeklyProjectSearch(searchKey) {
        if (this.searchKey == "") {
            this.toastService.openErrorSnackBar("Please Enter Valid Project Name!!!");
            this.timesheetService.getDailyweeksearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.weeklydatalist = res.data;
                }
            });
        }
        else {
            this.timesheetService.getDailyweeksearch({}, this.currentUser.id, searchKey).then((res) => {
                if (res.success == true) {
                    this.weeklydatalist = res.data;
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
    compareDates(date1, date2) {
        console.log("timecompare");
        return date1.getTime() === date2.getTime();
    }
    getEntryForDate(entries, date) {
        const entry = entries.find(item => item.date.includes(date));
        return entry || { dayName: this.getDayName(date), date: date, period: '0:00:00' };
    }
    getDayName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = new Date(date).getDay();
        return days[dayIndex];
    }
    getFormattedPeriod(period) {
        return period ? period : '0:00:00';
    }
    getweeklyTimeSheet() {
        this.timesheetService.getWeeklyTime({}, this.currentUser.id).then((res) => {
            console.log("Weekly time", res);
            this.datakeys = Object.keys(res.data);
            this.weeklydatalist = res.data;
            console.log("Weekly time", this.weeklydatalist);
            // const uniqueDateSet = new Set<Date>();
            // for (let i = 0; i < this.weeklydatalist.length; i++) {
            //   uniqueDateSet.add(this.weeklydatalist[i].date);
            // }
            // this.uniqueDatesArray = Array.from(uniqueDateSet);
            // console.log("this.uniqueDatesArray",this.uniqueDatesArray[0])
            // // this.day1 = this.weeklydatalist[0].dayName;
            // this.date1 = this.uniqueDatesArray[0]
            // // this.day2 = this.weeklydatalist[1].dayName;
            //  this.date2 = this.uniqueDatesArray[1];
            // // this.day3 = this.weeklydatalist[2].dayName;
            //  this.date3 = this.uniqueDatesArray[2];
            // // this.day4 = this.weeklydatalist[3].dayName;
            //  this.date4 = this.uniqueDatesArray[3];
            // // this.day5 = this.weeklydatalist[4].dayName;
            //  this.date5 = this.uniqueDatesArray[4];
            // // this.day6 = this.weeklydatalist[5].dayName;
            //  this.date6 = this.uniqueDatesArray[5];
            // // this.day7 = this.weeklydatalist[6].dayName;
            //  this.date7 = this.uniqueDatesArray[6];
        });
    }
    // To open dialig box of Add TIme form.
    onAddTime() {
        const dialogRef = this.dialog.open(_add_time_add_time_component__WEBPACK_IMPORTED_MODULE_0__.AddTimeComponent, {
            width: '40%',
            height: '730px',
            data: {},
            panelClass: 'custom-dialog-add-time',
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
WeeklyComponent.ɵfac = function WeeklyComponent_Factory(t) { return new (t || WeeklyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_1__.TimesheetService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService)); };
WeeklyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WeeklyComponent, selectors: [["app-weekly"]], decls: 30, vars: 5, consts: [[1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3", "me-4"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Project Name", 1, "form-control", "pe-5", "my-2", 3, "ngModel", "ngModelChange", "change"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "font-weight", "600", "font-size", "13px"], ["class", "text-nowrap", "style", "vertical-align:middle;font-weight: 600;font-size: 13px;", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center", "font-weight", "500", "font-size", "13px"], ["class", "text-nowrap", "style", "vertical-align:middle;text-align: center;", 4, "ngFor", "ngForOf"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "center"], [4, "ngIf", "ngIfElse"], ["notZero", ""], [1, "fas", "fa-plus", "p-1", "addSign", 2, "text-decoration", "none", 3, "click"], ["routerLink", "/pages/time-sheet", "class", "btn btn-light", 4, "ngIf"], ["class", "btn btn-light", 4, "ngIf"], ["routerLink", "/pages/time-sheet", 1, "btn", "btn-light"], [1, "btn", "btn-light"]], template: function WeeklyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WeeklyComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchKey = $event; })("change", function WeeklyComponent_Template_input_change_3_listener() { return ctx.getweeklyProjectSearch(ctx.searchKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Project/To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, WeeklyComponent_th_10_Template, 3, 4, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WeeklyComponent_tr_12_Template, 4, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Delete Daily ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Are You Sure To Delete ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.weekDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 3, ctx.weeklydatalist));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 188px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.addSign[_ngcontent-%COMP%] {\n  color: red;\n  border: 2px solid red;\n  border-radius: 50%;\n  margin-right: 32px;\n  cursor: pointer;\n}\n\n.addSignlastdate[_ngcontent-%COMP%] {\n  color: #C1C2B8;\n  border: 2px solid #C1C2B8;\n  border-radius: 50%;\n  margin-right: 32px;\n  cursor: pointer;\n}\n\n.addTime[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\n  .custom-dialog-add-time {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFFRSxVQUFBO0FBRko7O0FBSUU7RUFDRSxpQkFBQTtBQURKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFNRTtFQUNFO0lBQ0UsdUJBQUE7RUFISjtBQUNGOztBQVFBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTkY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUkY7O0FBV0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFQNUM7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBVkYiLCJmaWxlIjoid2Vla2x5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbiAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICAvL2ZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnNlYXJjaEJhcntcclxuICAgIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9ybUJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IDE4OHB4O1xyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLy8gQWRkIHNpZ24gZGVzaWduXHJcbi5hZGRTaWduIHtcclxuICBjb2xvcjpyZWQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkU2lnbmxhc3RkYXRlIHtcclxuICBjb2xvcjojQzFDMkI4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDMUMyQjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIEZvciBjdXJzb3IgcG9pbnRlci5cclxuLmFkZFRpbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gU2VhcmNoIGJhclxyXG4uZm9ybS1jb250cm9sIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA3cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNzUlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSArIDIwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG5cclxufVxyXG5cclxuLy8gVG8gcGxhY2UgZGlhbG9nIGJveCBhdCByaWdodCBwb3NpdGlvbi5cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1hZGQtdGltZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_timesheet_timesheet_module_ts-es2015.js.map