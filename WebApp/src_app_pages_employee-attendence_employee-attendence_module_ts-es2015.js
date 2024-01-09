"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_employee-attendence_employee-attendence_module_ts"],{

/***/ 60783:
/*!**************************************************************!*\
  !*** ./src/app/core/services/employee-attendence.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAttendenceService": function() { return /* binding */ EmployeeAttendenceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);



class EmployeeAttendenceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addAttendenceDetails(data) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.postAttendence, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAttendenceDetails(data, employeeId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAttendence + employeeId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
EmployeeAttendenceService.ɵfac = function EmployeeAttendenceService_Factory(t) { return new (t || EmployeeAttendenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
EmployeeAttendenceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeAttendenceService, factory: EmployeeAttendenceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18920:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/employee-attendence/employee-attendence-from/employee-attendence-from.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAttendenceFromComponent": function() { return /* binding */ EmployeeAttendenceFromComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 44437);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ 79474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/roles-permissions.service */ 30438);
/* harmony import */ var src_app_core_services_employee_attendence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/employee-attendence.service */ 60783);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 32220);


 //











const _c0 = ["calendar"];
function EmployeeAttendenceFromComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " You Already Filled Your Daily Attendence Sheet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EmployeeAttendenceFromComponent_div_9_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Start Time Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EmployeeAttendenceFromComponent_div_9_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " End Time Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EmployeeAttendenceFromComponent_div_9_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Status Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function EmployeeAttendenceFromComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "In Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EmployeeAttendenceFromComponent_div_9_mat_error_13_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Out Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, EmployeeAttendenceFromComponent_div_9_mat_error_21_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, EmployeeAttendenceFromComponent_div_9_mat_error_33_Template, 2, 0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeAttendenceFromComponent_div_9_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.postAttendence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.AttendanceForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c1, ctx_r1.f.start_time.invalid && ctx_r1.f.start_time.touched && ctx_r1.submitted))("value", ctx_r1.AttendanceForm.controls.start_time.value || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.submitted || ctx_r1.f.start_time.touched) && (ctx_r1.f.start_time.errors == null ? null : ctx_r1.f.start_time.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c1, ctx_r1.f.end_time.invalid && ctx_r1.f.end_time.touched && ctx_r1.submitted))("value", ctx_r1.AttendanceForm.controls.end_time.value || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.submitted || ctx_r1.f.end_time.touched) && (ctx_r1.f.end_time.errors == null ? null : ctx_r1.f.end_time.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.submitted || ctx_r1.f.Status.touched) && (ctx_r1.f.Status.errors == null ? null : ctx_r1.f.Status.errors.required));
} }
class EmployeeAttendenceFromComponent {
    constructor(formBuilder, toastService, commonService, titleCasePipe, rolesPermissionsService, EmployeeAttendenceService, datePipe, cd) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.commonService = commonService;
        this.titleCasePipe = titleCasePipe;
        this.rolesPermissionsService = rolesPermissionsService;
        this.EmployeeAttendenceService = EmployeeAttendenceService;
        this.datePipe = datePipe;
        this.cd = cd;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__.default, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__.default];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Event Now', start: new Date() }
        ];
        this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
        this.submitted = false;
    }
    ngOnInit() {
        this.today = new Date();
        console.log("this.today", this.today);
        this.getEmployeeByEmployeeId();
        this.getAttendeceForm();
        //this.caldataJSON;
        this.commonService.rowAdded$.subscribe(() => {
            this.getEmployeeAttendenceData();
        });
    }
    ngAfterViewInit() {
        this.getEmployeeAttendenceData();
        this.cd.detectChanges();
    }
    get f() {
        return this.AttendanceForm.controls;
    }
    getAttendeceForm() {
        this.AttendanceForm = this.formBuilder.group({
            start_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            end_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            Status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            //uploadDocument: [""],
        });
    }
    toggleVisible() {
        this.calendarVisible = !this.calendarVisible;
    }
    toggleWeekends() {
        this.calendarWeekends = !this.calendarWeekends;
    }
    gotoPast() {
        let calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
    }
    handleDateClick(arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            });
        }
    }
    postAttendence() {
        this.submitted = true;
        if (this.AttendanceForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            console.log(this.AttendanceForm.controls.start_time.value, this.AttendanceForm.controls.end_time.value);
            if (this.AttendanceForm.controls.start_time.value < this.AttendanceForm.controls.end_time.value) {
                let Body = {
                    "inTime": this.AttendanceForm.controls.start_time.value,
                    "outTime": this.AttendanceForm.controls.end_time.value,
                    "status": this.AttendanceForm.controls.Status.value,
                    "employeeId": this.currentEmployee.id,
                    "userId": this.userId
                };
                this.EmployeeAttendenceService.addAttendenceDetails(Body).then((res) => {
                    if (res.success) {
                        this.commonService.notifyDataAdded();
                        this.toastService.toastMsg({
                            title: "Success",
                            content: "Employee Attendence Added Successfully!!!",
                        });
                        // this.toastService.openSnackBar("Employee Attendence Added Successfully");
                        this.AttendanceForm.reset();
                        this.submitted = false;
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
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "In Time Must Be Less Than Out Time!!!",
                });
                // this.toastService.openErrorSnackBar("In time must be less than Out time!!!");
            }
        }
    }
    getEmployeeByEmployeeId() {
        this.rolesPermissionsService.getEmployeeById({}, this.currentEmployee.id).then((res) => {
            //console.log("In Leave --> employee BY UDER Id", res.data);
            this.userId = res.data.parentId;
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
    getEmployeeAttendenceData() {
        console.log("enter");
        this.EmployeeAttendenceService.getAttendenceDetails({}, this.currentEmployee.id).then((res) => {
            //console.log("Attendece data", res)
            this.AttendeceData = res.data;
            //console.log("Attendece data", this.AttendeceData)
            // this.calDataStatus=this.AttendeceData.map((p)=>{
            //   return p.status
            // })
            // this.calDataDate=this.AttendeceData.map((p)=>{
            //   return p.createdAt
            // })
            if (this.AttendeceData.length > 0) {
                this.backenddate = this.AttendeceData[this.AttendeceData.length - 1].createdAt;
            }
            console.log("this.backenddate", this.backenddate);
            this.caldata = this.AttendeceData.map((p) => {
                return {
                    title: p.status,
                    start: this.datePipe.transform(p.createdAt, 'yyyy-MM-dd'),
                };
            });
            console.log("calData", this.caldata);
            this.calenderdata = JSON.stringify({
                events: this.caldata,
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
EmployeeAttendenceFromComponent.ɵfac = function EmployeeAttendenceFromComponent_Factory(t) { return new (t || EmployeeAttendenceFromComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_4__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_employee_attendence_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeAttendenceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef)); };
EmployeeAttendenceFromComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EmployeeAttendenceFromComponent, selectors: [["app-employee-attendence-from"]], viewQuery: function EmployeeAttendenceFromComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
    } }, decls: 14, vars: 19, consts: [[1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], ["class", "card-body", 4, "ngIf"], [1, "card", "bg-white", "p-6"], [1, "card-body"], [1, "container-fluid", "px-2", "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-xs-10", "col-sm-10", "col-md-10", "col-lg-10"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-4"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["type", "time", "matInput", "", "placeholder", "Start Time", "formControlName", "start_time", 3, "ngClass", "value"], ["class", "text-danger mb-1", 4, "ngIf"], ["type", "time", "matInput", "", "placeholder", "End Time", "formControlName", "end_time", 3, "ngClass", "value"], ["matNativeControl", "", "disableOptionCentering", "", "placeholder", "Status", "formControlName", "Status"], ["value", "Absent"], ["value", "Present"], [1, "col-xs-2", "col-sm-2", "col-md-2", "col-lg-2"], [1, "btn", "btn-save", "mt-5", 2, "float", "right", 3, "click"], [1, "text-danger", "mb-1"]], template: function EmployeeAttendenceFromComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EmployeeAttendenceFromComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EmployeeAttendenceFromComponent_div_9_Template, 37, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Today Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 4, ctx.today, "dd MMM YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 7, ctx.today, "dd MMM yyyy") === _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 10, ctx.backenddate, "dd MMM yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 13, ctx.today, "dd MMM yyyy") !== _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 16, ctx.backenddate, "dd MMM yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-calendar", ctx.calenderdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1hdHRlbmRlbmNlLWZyb20uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 88212:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/employee-attendence/employee-attendence-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAttendenceRoutingModule": function() { return /* binding */ EmployeeAttendenceRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _employee_attendence_from_employee_attendence_from_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-attendence-from/employee-attendence-from.component */ 18920);
/* harmony import */ var _employee_attendence_employee_attendence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-attendence/employee-attendence.component */ 78920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: '',
        component: _employee_attendence_employee_attendence_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeAttendenceComponent,
        children: [
            {
                path: '',
                redirectTo: 'emp-attendence-form',
                pathMatch: 'full'
            },
            {
                path: 'emp-attendence-form',
                component: _employee_attendence_from_employee_attendence_from_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeAttendenceFromComponent,
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    },
];
class EmployeeAttendenceRoutingModule {
}
EmployeeAttendenceRoutingModule.ɵfac = function EmployeeAttendenceRoutingModule_Factory(t) { return new (t || EmployeeAttendenceRoutingModule)(); };
EmployeeAttendenceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmployeeAttendenceRoutingModule });
EmployeeAttendenceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeAttendenceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 25296:
/*!*************************************************************************!*\
  !*** ./src/app/pages/employee-attendence/employee-attendence.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAttendenceModule": function() { return /* binding */ EmployeeAttendenceModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _employee_attendence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-attendence-routing.module */ 88212);
/* harmony import */ var _employee_attendence_from_employee_attendence_from_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-attendence-from/employee-attendence-from.component */ 18920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _employee_attendence_employee_attendence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-attendence/employee-attendence.component */ 78920);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/angular */ 41573);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ 44437);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ 79474);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ 34616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__.default,
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__.default,
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__.default
]);
class EmployeeAttendenceModule {
}
EmployeeAttendenceModule.ɵfac = function EmployeeAttendenceModule_Factory(t) { return new (t || EmployeeAttendenceModule)(); };
EmployeeAttendenceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: EmployeeAttendenceModule });
EmployeeAttendenceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _employee_attendence_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeAttendenceRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__.FullCalendarModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EmployeeAttendenceModule, { declarations: [_employee_attendence_from_employee_attendence_from_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeAttendenceFromComponent,
        _employee_attendence_employee_attendence_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeAttendenceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _employee_attendence_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeAttendenceRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__.FullCalendarModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerModule] }); })();


/***/ }),

/***/ 78920:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/employee-attendence/employee-attendence/employee-attendence.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAttendenceComponent": function() { return /* binding */ EmployeeAttendenceComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class EmployeeAttendenceComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmployeeAttendenceComponent.ɵfac = function EmployeeAttendenceComponent_Factory(t) { return new (t || EmployeeAttendenceComponent)(); };
EmployeeAttendenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeAttendenceComponent, selectors: [["app-employee-attendence"]], decls: 11, vars: 0, consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./emp-attendence-form", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-3", "col-sm-0", "col-xs-0"], [1, "mt-1"]], template: function EmployeeAttendenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Daily Attendance");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1hdHRlbmRlbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee-attendence_employee-attendence_module_ts-es2015.js.map