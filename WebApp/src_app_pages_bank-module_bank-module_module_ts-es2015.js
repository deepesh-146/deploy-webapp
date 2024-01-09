"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_bank-module_bank-module_module_ts"],{

/***/ 73106:
/*!******************************************************************!*\
  !*** ./src/app/pages/bank-module/add-cash/add-cash.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCashComponent": function() { return /* binding */ AddCashComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/bank-service.service */ 91068);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/cash-in-hand-service.service */ 70039);
/* harmony import */ var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/sale-invoice.service */ 26287);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 52529);
















function AddCashComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Enter Amount Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "btn-add-cash1": a0, "btn-add-cash": a1 }; };
const _c1 = function (a0, a1) { return { "btn-reduce-cash1": a0, "btn-reduce-cash": a1 }; };
const _c2 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c3 = function (a0) { return { "is-invalid": a0 }; };
class AddCashComponent {
    constructor(formBuilder, router, toastService, bankService, http, titleCasePipe, cashInHandService, saleInvoiceService, dialog, dialogRef) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.bankService = bankService;
        this.http = http;
        this.titleCasePipe = titleCasePipe;
        this.cashInHandService = cashInHandService;
        this.saleInvoiceService = saleInvoiceService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.isAddMoneyClicked = false;
        this.isReduceMoneyClicked = false;
    }
    ngOnInit() {
        this.todaysDate = new Date();
        this.getCurrentBal();
        this.CashInHandForm = this.formBuilder.group({
            currentBal: [],
            date: [],
            saleInvoiceNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            enterAmount: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            NewBalance: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            formRemark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    get f1() {
        return this.CashInHandForm.controls;
    }
    // calculateValues() {
    //   if (this.paymentType == "PAYMENT") {
    //     this.CashInHandForm.patchValue({
    //       NewBalance: +this.CashInHandForm.controls.currentBal.value + +this.CashInHandForm.controls.enterAmount.value
    //     });
    //   } else {
    //     this.CashInHandForm.patchValue({
    //       NewBalance: +this.CashInHandForm.controls.currentBal.value - +this.CashInHandForm.controls.enterAmount.value
    //     });
    //   }
    // }
    calculateValues() {
        if (this.paymentType === undefined) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Please Select Add Money Or Reduce Cash!!!",
            });
            // this.toastService.openErrorSnackBar("Please Select Add Money or Reduce Cash!");
            return false;
        }
        else {
            if (this.paymentType == "PAYMENT") {
                const currentBalance = parseFloat(this.CashInHandForm.get('currentBal').value) || 0;
                const newAmount = parseFloat(this.CashInHandForm.get('enterAmount').value) || 0;
                const newBalance = Math.abs(currentBalance + newAmount);
                this.CashInHandForm.patchValue({
                    NewBalance: newBalance
                });
            }
            else {
                const currentBalance = parseFloat(this.CashInHandForm.get('currentBal').value) || 0;
                const newAmount = parseFloat(this.CashInHandForm.get('enterAmount').value) || 0;
                const newBalance = Math.abs(currentBalance - newAmount);
                this.CashInHandForm.patchValue({
                    NewBalance: newBalance
                });
            }
        }
    }
    GetpartyId(e) {
        if (e) {
            this.saleInvoiceService.getsaleInvoiceByIncoice({}, this.currentUser.id, e).then((res) => {
                this.partyId = res.data.pageData[0].partyId;
                this.saleInvoiceId = res.data.pageData[0].id;
            });
        }
    }
    addMoney() {
        this.paymentType = "PAYMENT";
        this.isAddMoneyClicked = true;
        this.isReduceMoneyClicked = false;
        console.log("payment", this.paymentType);
        const currentBalance = parseFloat(this.CashInHandForm.get('currentBal').value) || 0;
        const newAmount = parseFloat(this.CashInHandForm.get('enterAmount').value) || 0;
        const newBalance = Math.abs(currentBalance + newAmount);
        this.CashInHandForm.patchValue({
            NewBalance: newBalance
        });
    }
    // reduceMoney() {
    //   this.paymentType = "RECEIPT";
    //   console.log("receipt", this.paymentType);
    // }
    reduceMoney() {
        this.paymentType = "RECEIPT"; // Set the paymentType to "WITHDRAWAL" to indicate reducing cash
        this.isAddMoneyClicked = false;
        this.isReduceMoneyClicked = true;
        const currentBalance = parseFloat(this.CashInHandForm.get('currentBal').value) || 0;
        const newAmount = parseFloat(this.CashInHandForm.get('enterAmount').value) || 0;
        const newBalance = Math.abs(currentBalance - newAmount);
        this.CashInHandForm.patchValue({
            NewBalance: newBalance
        });
        // const enteredAmount = parseFloat(this.CashInHandForm.get('enterAmount').value) || 0;
        // if (enteredAmount <= 0) {
        //   console.log("Invalid amount. Please enter a positive value.");
        //   return;
        // }
        // const currentBalance = parseFloat(this.CashInHandForm.get('currentBal').value) || 0;
        // if (enteredAmount > currentBalance) {
        //   console.log("Amount to be reduced exceeds the current balance.");
        //   return;
        // }
        // // Perform the reduction
        // const newBalance = currentBalance - enteredAmount;
        // this.CashInHandForm.patchValue({
        //   NewBalance: newBalance
        // });
        // console.log("Reduced cash by", enteredAmount);
    }
    cancel() {
        this.dialogRef.close();
    }
    cashSave() {
        this.submitted = true;
        console.log("paymentType", this.paymentType);
        if (this.CashInHandForm.invalid) {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            let body = {
                "cashadjustments": {
                    "paymentType": this.paymentType,
                    "saleInvoiceId": this.saleInvoiceId,
                    "date": moment__WEBPACK_IMPORTED_MODULE_0__(this.CashInHandForm.controls.date.value, "DD MMM YYYY").format("YYYY-MM-DD"),
                    "enterAmount": this.CashInHandForm.controls.enterAmount.value,
                    "remark": this.CashInHandForm.controls.formRemark.value,
                    "userId": this.currentUser.id
                },
            };
            this.cashInHandService.cashInHandpost(body).then((res) => {
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Cash In Hand Updated!!!"
                });
                // this.toastService.openSnackBar("Cash In Hand Updated");
                this.CashInHandForm.reset();
                this.submitted = false;
                this.dialogRef.close();
                this.getCurrentBal();
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
    getCurrentBal() {
        this.cashInHandService.getCurrentBalance({}, this.currentUser.id).then((res) => {
            this.CashInHandForm.patchValue({
                currentBal: res.data[0].currentBalance,
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
    openDatepicker() {
        // Check if the current value of taskdate is an "Invalid Date"
        const selectedDate = this.CashInHandForm.get('date').value;
        if (isNaN(selectedDate.getTime())) {
            // Set a default date or any valid date here
            this.CashInHandForm.get('date').setValue(new Date());
        }
    }
}
AddCashComponent.ɵfac = function AddCashComponent_Factory(t) { return new (t || AddCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__.CashInHandServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef)); };
AddCashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddCashComponent, selectors: [["app-add-cash"]], decls: 59, vars: 16, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "cashInHandButtons", "mb-5"], [1, "btn", 3, "ngClass", "click"], [1, "fas", "fa-plus", "me-2"], [1, "fas", "fa-minus", "me-2"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-6", "mb-3"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Current Balance", "formControlName", "currentBal", 3, "change"], [1, "error-asterisk"], ["type", "text", "matInput", "", "placeholder", "Sale Invoice No", "formControlName", "saleInvoiceNo", 3, "change"], ["for", "Date", 1, "form-label"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "formControlName", "date", "placeholder", "Date", "id", "datePicker", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase !important", 3, "ngModel", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["type", "number", "matInput", "", "placeholder", "Enter Amount", "formControlName", "enterAmount", "min", "0", "oninput", "this.value = Math.abs(this.value)", 3, "ngClass", "change"], ["class", "text-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-12", "col-lg-12", "mb-3"], ["type", "number", "matInput", "", "placeholder", "New Balance", "formControlName", "NewBalance", "readonly", ""], ["matInput", "", "required", "", "rows", "3", "placeholder", "Enter Item Description", "formControlName", "formRemark"], [1, "text-danger"]], template: function AddCashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Cash in hand");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_6_listener() { return ctx.cashSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_12_listener() { return ctx.addMoney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Add Money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_15_listener() { return ctx.reduceMoney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Reduce Cash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Current Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_23_listener() { return ctx.calculateValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Sale Invoice No");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_30_listener($event) { return ctx.GetpartyId($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddCashComponent_Template_input_ngModelChange_35_listener($event) { return ctx.todaysDate = $event; })("click", function AddCashComponent_Template_input_click_35_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "New Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_45_listener() { return ctx.calculateValues(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AddCashComponent_mat_error_46_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "New Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.CashInHandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c0, ctx.isAddMoneyClicked, !ctx.isAddMoneyClicked));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c1, ctx.isReduceMoneyClicked, !ctx.isReduceMoneyClicked));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c3, ctx.f1.enterAmount.invalid && ctx.f1.enterAmount.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f1.enterAmount.touched) && (ctx.f1.enterAmount.errors == null ? null : ctx.f1.enterAmount.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError], styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.cashInHandButtons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 4px;\n}\n\n.btn-reduce-cash[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #979797;\n  color: #000;\n  border-radius: 10px;\n  margin-left: 10px;\n  height: 35px !important;\n  white-space: nowrap;\n}\n\n.btn-reduce-cash1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #979797;\n  color: white;\n  border-radius: 10px;\n  margin-left: 10px;\n  height: 35px !important;\n  white-space: nowrap;\n  background-color: #979797;\n}\n\n.btn-add-cash[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #fc7643;\n  color: #fc7643;\n  border-radius: 10px;\n  height: 35px !important;\n  white-space: nowrap;\n}\n\n.btn-add-cash1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #fc7643;\n  color: white;\n  border-radius: 10px;\n  height: 35px !important;\n  white-space: nowrap;\n  background-color: #fc7643;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -22px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 992px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .cashInHandButtons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QUFWSjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVZGOztBQWFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBVkY7O0VBYUE7SUFDRSxnQkFBQTtFQVZGO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQVpGO0FBQ0YiLCJmaWxlIjoiYWRkLWNhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNhc2hJbkhhbmRCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi5idG4tcmVkdWNlLWNhc2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgfVxyXG5cclxuICAuYnRuLXJlZHVjZS1jYXNoMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XHJcbiAgfVxyXG5cclxuICAvLyAuYnRuLXJlZHVjZS1jYXNoOmhvdmVyIHtcclxuICAvLyAgIGNvbG9yOndoaXRlO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcclxuICAvLyB9XHJcblxyXG4gIC5idG4tYWRkLWNhc2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmM3NjQzO1xyXG4gICAgY29sb3I6I2ZjNzY0MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5idG4tYWRkLWNhc2gxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjNzY0MztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzc2NDM7XHJcbiAgfVxyXG5cclxuICAvLyAuYnRuLWFkZC1jYXNoOmhvdmVyIHtcclxuICAvLyAgIGNvbG9yOndoaXRlO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNzY0MztcclxuICAvLyB9XHJcblxyXG4gXHJcbiAgLmljb25jYWxlbmRlcntcclxuICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhc2hJbkhhbmRCdXR0b25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 68811:
/*!**************************************************************************!*\
  !*** ./src/app/pages/bank-module/ban-kdetails/ban-kdetails.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BanKDetailsComponent": function() { return /* binding */ BanKDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-bank/add-bank.component */ 43701);
/* harmony import */ var _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-cash/add-cash.component */ 73106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/bank-service.service */ 91068);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/cash-in-hand-service.service */ 70039);
/* harmony import */ var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/sale-invoice.service */ 26287);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 22213);














function BanKDetailsComponent_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_tbody_22_tr_1_Template_td_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const bankData_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r4.getbankdetailsById(bankData_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "20000");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_tbody_22_tr_1_Template_span_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const bankData_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.GetbankById(bankData_r2.accountNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bankData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](bankData_r2.bankName);
} }
function BanKDetailsComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BanKDetailsComponent_tbody_22_tr_1_Template, 11, 1, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.bankApiResponse);
} }
class BanKDetailsComponent {
    constructor(formBuilder, router, toastService, bankService, http, modal, titleCasePipe, cashInHandService, saleInvoiceService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastService = toastService;
        this.bankService = bankService;
        this.http = http;
        this.modal = modal;
        this.titleCasePipe = titleCasePipe;
        this.cashInHandService = cashInHandService;
        this.saleInvoiceService = saleInvoiceService;
        this.dialog = dialog;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
        this.color = 'black';
        this.isEdit = false;
        this.isDisabled = false;
        this.isShowButton = false;
        this.isShown = false;
        this.isShownm = false;
        this.bname = "";
        this.formData = [];
        this.hide = true;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.paymentType = "";
    }
    ngOnInit() {
        this.getbankdetails();
        this.bankService.partyAdded$.subscribe(() => {
            this.getbankdetails();
        });
    }
    /**
     * Filter customer name search
     * @param name
     * @returns
     */
    filterBankNames(name) {
        return this.bankdetails.filter(x => x.bankName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    getbankdetails() {
        this.bankService.getBankDetails({}, this.currentUser.id).then((res) => {
            this.bankApiResponse = res.data;
            this.bankApiResponse.forEach((ele) => {
                ele.isEnable = false;
            });
        }, (err) => {
            if (err.error.expose) {
                //   this.bankApiResponse = [];
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
    getbankdetailsById(id) {
        // <p class="mb-1 mt-2"><span class="me-3">Bank Name :</span>ICICI Bank</p>
        // <p class="mb-2 mt-1">Account Number: 30002000668888</p>
        // <p class="mb-1 mt-1">IFSC Code: ICI2004300</p>
        // <p class="mb-1 mt-1 d-flex flex-row" style="justify-content: end">
        //   Balance: 200000.00
        // </p>
        this.bankService.getBankDetailsById({}, this.currentUser.id, id).then((res) => {
            this.singleBankRecord = res.data;
            this.singleBankName = this.singleBankRecord.bankName;
            this.singleBankAcc = this.singleBankRecord.accountNumber;
            this.singleIfscCode = this.singleBankRecord.ifscCode;
        });
    }
    deleteOfferById() {
        this.bankService.deleteBankAccNo({}, this.accoutNumber).then((res) => {
            // this.toastService.openSnackBar("Bank Record Deleted Successfully!!!");
            this.toastService.toastMsg({
                title: "Success",
                content: "Bank Record Deleted Successfully!!!"
            });
            this.getbankdetails();
        });
    }
    myClickHandler(bankDetails) {
        this.bankApiResponse.forEach(element => {
            if (element.id == bankDetails.id) {
                element.isEnable = true;
            }
            else {
                element.isEnable = false;
            }
        });
    }
    modalDismiss() {
        this.bankForm.reset();
        this.modal.dismissAll();
        this.isEdit = false;
    }
    GetbankById(offerId) {
        this.accoutNumber = offerId;
    }
    openDialogBank() {
        const dialogRef = this.dialog.open(_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_0__.AddBankComponent, {
            width: 'auto',
            height: '700px',
            data: {},
            panelClass: 'custom-dialog-expense-class',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openDialogCash() {
        const dialogRef = this.dialog.open(_add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_1__.AddCashComponent, {
            width: 'auto',
            height: '700px',
            data: {},
            panelClass: 'custom-dialog-expense-class',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    cancel() {
        this.dialogRef.close();
    }
}
BanKDetailsComponent.ɵfac = function BanKDetailsComponent_Factory(t) { return new (t || BanKDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_3__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_4__.CashInHandServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_5__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog)); };
BanKDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BanKDetailsComponent, selectors: [["app-ban-kdetails"]], decls: 137, vars: 1, consts: [[1, "container-fluid", "p-2", 2, "height", "auto !important"], [1, "row", "card-header", "bg-white", 2, "margin-left", "-6px", "margin-right", "-6px"], [1, "col-lg-12", "navOption-btns"], ["type", "button", 1, "btn", "m-1", "mx-2", 2, "float", "right !important", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "row", "mt-1", 2, "margin-left", "-6px"], [1, "col-lg-4", "bg-white", "mt-2", "mb-2"], [1, "m-3", 2, "font-weight", "bolder"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap"], [4, "ngIf"], [1, "mb-3", "mx-3", 2, "margin-top", "100px"], [2, "font-weight", "bolder"], [1, "leftSection", "col-lg-8", "pe-0", 2, "padding-left", "8px"], [1, "row", "bg-white", "m-2"], [1, "mb-1", "mt-2"], [1, "mb-2", "mt-1"], [1, "mb-1", "mt-1"], [1, "mb-1", "mt-1", "d-flex", "flex-row", 2, "justify-content", "end"], [1, "m-3"], [2, "vertical-align", "middle"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-white"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [4, "ngFor", "ngForOf"], [2, "vertical-align", "middle", 3, "click"], [2, "float", "left"], ["src", "../../../../assets/images/bank_logo.png"], [1, "text-nowrap", 2, "float", "left", "padding-left", "10px", "padding-top", "7px", "color", "#000"], [2, "vertical-align", "middle", "color", "#000"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", "btnp", "mt-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", 2, "color", "red", 3, "click"]], template: function BanKDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_button_click_3_listener() { return ctx.openDialogCash(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Add Cash in hand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_button_click_6_listener() { return ctx.openDialogBank(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add Bank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Bank Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, BanKDetailsComponent_tbody_22_Template, 2, 1, "tbody", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Cash In Hand");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Bank Name : Bank Of Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Account Number : 23145678945");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "IFSC Code : MAHB0000048");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Balance: 200000.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Date of Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "9-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Vishal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "2000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "10-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Vishwas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "20007.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "10-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Vishwas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "20007.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "10-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Vishwas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "20007.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "10-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Vishwas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "20007.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "10-June-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Vishwas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Payment-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "20007.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Excellent");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, " Delete Bank Account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "h4", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Are You Sure To Delete Bank Account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_a_click_135_listener() { return ctx.deleteOfferById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bankApiResponse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], styles: [".custom-dialog-expense-class {\n  margin-left: 50%;\n  overflow: hidden !important;\n  height: 100vh !important;\n}\n\n@media screen and (max-width: 992px) {\n  .leftSection[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbi1rZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0U7SUFDRSxpQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYmFuLWtkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nLWV4cGVuc2UtY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgLmxlZnRTZWN0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 50041:
/*!*****************************************************************!*\
  !*** ./src/app/pages/bank-module/bank-module-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankModuleRoutingModule": function() { return /* binding */ BankModuleRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ban-kdetails/ban-kdetails.component */ 68811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: '',
        component: _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_0__.BanKDetailsComponent, }
];
class BankModuleRoutingModule {
}
BankModuleRoutingModule.ɵfac = function BankModuleRoutingModule_Factory(t) { return new (t || BankModuleRoutingModule)(); };
BankModuleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BankModuleRoutingModule });
BankModuleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BankModuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 68991:
/*!*********************************************************!*\
  !*** ./src/app/pages/bank-module/bank-module.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankModuleModule": function() { return /* binding */ BankModuleModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-module-routing.module */ 50041);
/* harmony import */ var _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ban-kdetails/ban-kdetails.component */ 68811);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-bank/add-bank.component */ 43701);
/* harmony import */ var _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cash/add-cash.component */ 73106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);











class BankModuleModule {
}
BankModuleModule.ɵfac = function BankModuleModule_Factory(t) { return new (t || BankModuleModule)(); };
BankModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BankModuleModule });
BankModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankModuleRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BankModuleModule, { declarations: [_ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_1__.BanKDetailsComponent,
        _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_3__.AddBankComponent,
        _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_4__.AddCashComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankModuleRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_bank-module_bank-module_module_ts-es2015.js.map