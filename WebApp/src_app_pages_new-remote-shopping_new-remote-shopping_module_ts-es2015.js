"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_new-remote-shopping_new-remote-shopping_module_ts"],{

/***/ 77706:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/generate-receipt/generate-receipt.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateReceiptComponent": function() { return /* binding */ GenerateReceiptComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/remote-shop.service */ 9579);
/* harmony import */ var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/sale-invoice.service */ 26287);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);






function GenerateReceiptComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GenerateReceiptComponent_tr_23_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const item_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.getOrderDetails(item_r5.sales_products, item_r5.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, item_r5.customerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, item_r5.billingAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 11, item_r5.totalBillAmount - item_r5.billGstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 14, item_r5.billGstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 17, item_r5.totalBillAmount, "1.2-2"), "");
} }
function GenerateReceiptComponent_tbody_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Data Found. Please Create an Order To Be Displayed Here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Start Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GenerateReceiptComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, item_r9.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 9, item_r9.totalPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9.gst);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 12, item_r9.gstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 15, item_r9.finalAmount, "1.2-2"), "");
} }
function GenerateReceiptComponent_tbody_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "404 Not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class GenerateReceiptComponent {
    constructor(remotShopService, saleInvoiceService, remoteShopService, toastService, titleCasePipe) {
        this.remotShopService = remotShopService;
        this.saleInvoiceService = saleInvoiceService;
        this.remoteShopService = remoteShopService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.saleProductData = [];
        //public currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.myOrderData = [];
        this.orderDetails = [];
        this.p = 1;
        this.currentPageNo = 0;
        this.partyPageSize = 5;
        this.pagesize = 1;
        this.count = 0;
    }
    ngOnInit() {
        this.getGeneratedOrder();
    }
    getGeneratedOrder() {
        this.remotShopService.getGeneratedOrder({}, this.currentUser.id, 1).then((res) => {
            console.log(res);
            this.generatedReceiptsData = res.data;
        });
    }
    getReceiptById(receiptId) {
        this.saleInvoiceService.getSaleInvoiceById({}, receiptId).then((res) => {
            this.saleProductData = res.data.sales_products;
            this.invoiceNo = res.data.invoiceNo;
            this.billGstAmount = res.data.billGstAmount;
            this.totalBillAmount = res.data.totalBillAmount;
        });
    }
    getOrderData() {
        this.remoteShopService.getCustomerProductByOrderId({}, this.orderId).then((res) => {
            this.orderDataItemsDetails = res.data.sales_products;
        }, (err) => {
            if (err.error.expose) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: this.titleCasePipe.transform(err.error.error_message),
                });
                //  this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong",
                });
                // this.toastService.openErrorSnackBar("Something Went Wrong.");
            }
        });
    }
    getOrderDetails(item, id) {
        this.orderDetails = item;
        this.orderId = id;
        this.getOrderData();
    }
}
GenerateReceiptComponent.ɵfac = function GenerateReceiptComponent_Factory(t) { return new (t || GenerateReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_0__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_0__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe)); };
GenerateReceiptComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GenerateReceiptComponent, selectors: [["app-generate-receipt"]], decls: 59, vars: 5, consts: [[1, "container-fluid"], [1, "row", 2, "width", "100%", "overflow-x", "auto"], [1, "table-responsive"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "bg-200", "text-900"], ["scope", "col"], [1, "text-nowrap"], ["class", "btn-reveal-trigger text-left", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "orderDetails-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], ["closebutton", ""], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", 2, "font-family", "Poppins", "font-weight", "500"], [1, "table", "table-bordered", "fs--1", "mb-0", "m-2"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-cancel"], [1, "btn-reveal-trigger", "text-left"], ["data-bs-toggle", "modal", "data-bs-target", "#orderDetails-modal", 1, "btn", "btn-outline-primary", "btnp", 3, "click"], [1, "text-center"], ["colspan", "10"], ["routerLink", "/pages/customer/remote-customer", 1, "nav-link"]], template: function GenerateReceiptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Order Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "GST Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, GenerateReceiptComponent_tr_23_Template, 23, 20, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, GenerateReceiptComponent_tbody_24_Template, 8, 0, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "a", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "GST(in %)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "GST(in Rs.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, GenerateReceiptComponent_tr_54_Template, 19, 18, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, GenerateReceiptComponent_tbody_55_Template, 6, 0, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.generatedReceiptsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.generatedReceiptsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Order #", ctx.orderId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.orderDataItemsDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.orderDataItemsDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: [".btnp[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  line-height: 20px !important;\n}\n\n.icon-color[_ngcontent-%COMP%] {\n  color: #b8babd;\n}\n\n.icon-color[_ngcontent-%COMP%]:hover {\n  color: #2c7be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGUtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5wIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1jb2xvciB7XHJcbiAgY29sb3I6ICNiOGJhYmQ7XHJcbn1cclxuXHJcbi5pY29uLWNvbG9yOmhvdmVyIHtcclxuICBjb2xvcjogIzJjN2JlNTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 22503:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/new-remote-shopping-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRemoteShoppingRoutingModule": function() { return /* binding */ NewRemoteShoppingRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote-order/remote-order.component */ 79735);
/* harmony import */ var _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-receipt/generate-receipt.component */ 77706);
/* harmony import */ var _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote-shopping/remote-shopping.component */ 46069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_2__.RemoteShoppingComponent,
        children: [
            {
                path: '',
                redirectTo: 'remote-order',
                pathMatch: 'full'
            },
            {
                path: 'remote-order',
                component: _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_0__.RemoteOrderComponent,
            },
            {
                path: 'generate-receipt',
                component: _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_1__.GenerateReceiptComponent,
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    }
];
class NewRemoteShoppingRoutingModule {
}
NewRemoteShoppingRoutingModule.ɵfac = function NewRemoteShoppingRoutingModule_Factory(t) { return new (t || NewRemoteShoppingRoutingModule)(); };
NewRemoteShoppingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewRemoteShoppingRoutingModule });
NewRemoteShoppingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewRemoteShoppingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 37872:
/*!*************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/new-remote-shopping.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRemoteShoppingModule": function() { return /* binding */ NewRemoteShoppingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-remote-shopping-routing.module */ 22503);
/* harmony import */ var _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-order/remote-order.component */ 79735);
/* harmony import */ var _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-receipt/generate-receipt.component */ 77706);
/* harmony import */ var _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remote-shopping/remote-shopping.component */ 46069);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-new-invoice/sales-new-invoice.component */ 5743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











class NewRemoteShoppingModule {
}
NewRemoteShoppingModule.ɵfac = function NewRemoteShoppingModule_Factory(t) { return new (t || NewRemoteShoppingModule)(); };
NewRemoteShoppingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NewRemoteShoppingModule });
NewRemoteShoppingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRemoteShoppingRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NewRemoteShoppingModule, { declarations: [_remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_1__.RemoteOrderComponent,
        _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_2__.GenerateReceiptComponent,
        _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_3__.RemoteShoppingComponent,
        _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__.SalesNewInvoiceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRemoteShoppingRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule] }); })();


/***/ }),

/***/ 79735:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/remote-order/remote-order.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoteOrderComponent": function() { return /* binding */ RemoteOrderComponent; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/constant */ 22336);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales-new-invoice/sales-new-invoice.component */ 5743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/sale-invoice.service */ 26287);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/remote-shop.service */ 9579);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);














const _c0 = function (a0) { return { "background-color": a0 }; };
function RemoteOrderComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RemoteOrderComponent_tr_36_Template_span_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.openDialog(item_r2.orderId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c0, item_r2.isDeleted ? "#c7c2de" : i_r3 % 2 === 0 ? "#f2f2f2" : "#ffffff"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 11, item_r2.createdAt, "dd MMM YYYY")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 14, item_r2.customerName));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.billingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 16, item_r2.totalBillAmount - item_r2.billGstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 19, item_r2.billGstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 22, item_r2.totalBillAmount, "1.2-2"), "");
} }
function RemoteOrderComponent_tbody_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c2 = function () { return { standalone: true }; };
class RemoteOrderComponent {
    constructor(saleInvoiceService, dialog, remoteShopService, toastService, titleCasePipe) {
        this.saleInvoiceService = saleInvoiceService;
        this.dialog = dialog;
        this.remoteShopService = remoteShopService;
        this.toastService = toastService;
        this.titleCasePipe = titleCasePipe;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.getClientPendingOrder();
    }
    ngOnInit() {
        this.todaysDate = new Date(new Date().setDate(new Date().getDate()));
        this.getClientPendingOrder();
    }
    getClientPendingOrder() {
        this.remoteShopService
            .getGeneratedOrder({}, src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.currentUser.id, 0)
            .then((res) => {
            console.log(res);
            this.orderData = res.data;
        });
    }
    getAllclientPendingOrderSearch1() {
        this.remoteShopService
            .getRemoteOrder1({}, src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.currentUser.id, 0, moment__WEBPACK_IMPORTED_MODULE_1__(this.todaysDate, "DD-MMM-YYYY").format("YYYY-MM-DD"))
            .then((res) => {
            console.log(res);
            this.orderData1 = res.data;
            if (this.orderData1.length > 0) {
                this.orderData = res.data;
            }
            else {
                this.getClientPendingOrder();
            }
        });
    }
    getAllRemoteOrderSearch(searchkey) {
        console.log(this.searchKey);
        if (this.searchKey == "") {
            // this.toastService.openErrorSnackBar("Please enter Party name!!!");
            this.toastService.toastMsg({
                title: "Error",
                content: "Please Enter Party Name!!!",
            });
            this.remoteShopService
                .getRemoteOrdersearch({}, this.currentUser.id, 0, searchkey)
                .then((res) => {
                console.log(res);
                this.orderData = res.data;
            });
        }
        else {
            this.remoteShopService
                .getRemoteOrdersearch({}, this.currentUser.id, 0, searchkey)
                .then((res) => {
                console.log(res);
                this.orderData1 = res.data;
                if (this.orderData1.length > 0) {
                    this.orderData = res.data;
                    // this.toastService.openSnackBar("Record Found Successfully!!!");
                }
                else {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: "Record Not Found!!!",
                    });
                    // this.toastService.openErrorSnackBar("Record Not Found!!!");
                }
            }, (err) => {
                if (err.error.expose) {
                    this.toastService.toastMsg({
                        title: "Error",
                        content: err.error.error_message,
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
    }
    changeDate(e) {
        this.getAllclientPendingOrderSearch1();
    }
    openDialog(orderId) {
        const dialogRef = this.dialog.open(_sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_2__.SalesNewInvoiceComponent, {
            width: 'auto',
            height: 'auto',
            data: { orderId: orderId },
            panelClass: 'custom-dialog-addRoles-class',
            disableClose: true,
            position: {
                right: '0',
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
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
RemoteOrderComponent.ɵfac = function RemoteOrderComponent_Factory(t) { return new (t || RemoteOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_3__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_4__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe)); };
RemoteOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RemoteOrderComponent, selectors: [["app-remote-order"]], decls: 38, vars: 9, consts: [[1, "container-fluid"], ["id", "showoptionHide", 1, "row", "headerButtons"], [1, "flex-item", "searchBar", "mb-3"], ["appearance", "outline", 1, "example-full-width", 2, "height", "35px"], ["type", "text", "matInput", "", "placeholder", "Vendor Name", 3, "ngModel", "ngModelChange", "change"], [1, "iconcalender", "p-1"], [1, "flex-item", "dateRange", "mb-3"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "14px", "height", "35px"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "Receipt Date.", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "maxDate", "ngModel", "bsConfig", "ngModelOptions", "ngModelChange", "click"], [1, "row", 2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center"], [1, "btn-reveal-trigger"], [1, "text-nowrap"], [1, "text-center"], ["style", "color: #676398 !important", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "#676398 !important", 3, "ngStyle"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-center", 2, "vertical-align", "middle"], [2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-receipt"], ["colspan", "12"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]], template: function RemoteOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchKey = $event; })("change", function RemoteOrderComponent_Template_input_change_4_listener() { return ctx.getAllRemoteOrderSearch(ctx.searchKey); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_10_listener($event) { return ctx.todaysDate = $event; })("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_10_listener($event) { return ctx.changeDate($event); })("click", function RemoteOrderComponent_Template_input_click_10_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Created On");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Party Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Base Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "GST");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Invoice Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "tbody", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, RemoteOrderComponent_tr_36_Template, 26, 27, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, RemoteOrderComponent_tbody_37_Template, 4, 0, "tbody", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxDate", ctx.today)("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.orderData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderData == 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n\n.inputsearch[_ngcontent-%COMP%] {\n  padding-left: -10px !important;\n}\n\n  .custom-Modal-sale-invoice {\n  margin-left: 66%;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 300px;\n  padding: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n  .custom-dialog-addRoles-class {\n  margin-left: 40% !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBWUE7RUFDRTtJQUNFLHVCQUFBO0VBVEY7QUFDRjs7QUFXQTtFQUNFLDJCQUFBO0VBRUEsd0JBQUE7QUFWRiIsImZpbGUiOiJyZW1vdGUtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmNhbGVuZGVye1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0c2VhcmNoe1xyXG4gIHBhZGRpbmctbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tTW9kYWwtc2FsZS1pbnZvaWNle1xyXG4gIG1hcmdpbi1sZWZ0OiA2NiU7XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgQnV0dG9uc1xyXG5cclxuLmhlYWRlckJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1pdGVtIHtcclxuICBmbGV4LWJhc2lzOiAzMDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi8vIC5zZWFyY2hCYXJ7XHJcbi8vICAgZmxleC1iYXNpczogMjQwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kYXRlUmFuZ2Uge1xyXG4vLyAgIGZsZXgtYmFzaXM6IDI0MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuOjpuZy1kZWVwICAuY3VzdG9tLWRpYWxvZy1hZGRSb2xlcy1jbGFzc3tcclxuICBtYXJnaW4tbGVmdDogNDAlICFpbXBvcnRhbnQ7XHJcbiAvLyBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIC8vbWFyZ2luLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 46069:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/remote-shopping/remote-shopping.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoteShoppingComponent": function() { return /* binding */ RemoteShoppingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class RemoteShoppingComponent {
    constructor() { }
    ngOnInit() {
    }
}
RemoteShoppingComponent.ɵfac = function RemoteShoppingComponent_Factory(t) { return new (t || RemoteShoppingComponent)(); };
RemoteShoppingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteShoppingComponent, selectors: [["app-remote-shopping"]], decls: 14, vars: 0, consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./remote-order", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./generate-receipt", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-10", "col-xl-10", "col-lg-11", "col-md-6", "col-sm-4", "col-xs-4"], [1, "mt-1"]], template: function RemoteShoppingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remote Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Generated Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@media screen and (max-width: 575px) {\n  .links[_ngcontent-%COMP%] {\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1zaG9wcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFO0lBQ0Usa0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InJlbW90ZS1zaG9wcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuXHJcbiAgLmxpbmtzIHtcclxuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5743:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/new-remote-shopping/sales-new-invoice/sales-new-invoice.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesNewInvoiceComponent": function() { return /* binding */ SalesNewInvoiceComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/constant */ 22336);
/* harmony import */ var src_app_helpers_state_constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/state-constans */ 25968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/sale-invoice.service */ 26287);
/* harmony import */ var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/party.service */ 42109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast-notification.service */ 96636);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/profile.service */ 44687);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/remote-shop.service */ 9579);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 84461);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 32220);

























const _c0 = ["closebutton"];
function SalesNewInvoiceComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.onCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r24.onCancelModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26.patchGenerateRemoteInovice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Generate Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r28.getInvoiceByOrderId(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_div_21_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelectionChange", function SalesNewInvoiceComponent_div_21_mat_option_10_Template_mat_option_onSelectionChange_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); const option_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r34.setSelectedPartyDeatails(option_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r33.partyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, option_r33.partyName), " ");
} }
function SalesNewInvoiceComponent_div_21_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Party Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function SalesNewInvoiceComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Party Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function SalesNewInvoiceComponent_div_21_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r36.searchPartyByName($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-autocomplete", null, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_div_21_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70); return ctx_r38.openAddPartyModal(_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Add new party ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SalesNewInvoiceComponent_div_21_mat_option_10_Template, 3, 4, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SalesNewInvoiceComponent_div_21_mat_error_12_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r4.myControl)("matAutocomplete", _r30)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c1, ctx_r4.myControl.invalid && ctx_r4.myControl.touched && ctx_r4.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 5, ctx_r4.filteredOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.submitted || ctx_r4.myControl.touched) && (ctx_r4.myControl.errors == null ? null : ctx_r4.myControl.errors.required));
} }
function SalesNewInvoiceComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Tax Invoice Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Invoice Date Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", state_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](state_r39);
} }
function SalesNewInvoiceComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Billing Address Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "textarea", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r12.showInvoiceGenerateData);
} }
function SalesNewInvoiceComponent_div_65_tbody_32_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r43 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r42.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r42.itemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r42.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r42.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 11, ctx_r41.subTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r42.gst, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](22, 14, item_r42.gstAmount, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r42.additionalCess, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](29, 17, item_r42.additionalCess, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](33, 20, item_r42.finalAmount, "1.2-2"), "");
} }
function SalesNewInvoiceComponent_div_65_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SalesNewInvoiceComponent_div_65_tbody_32_tr_1_Template, 34, 23, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r40.orderData);
} }
function SalesNewInvoiceComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " SKU Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Base Price(In Rs.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Additional CESS(In Rs.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " Total(In Rs.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SalesNewInvoiceComponent_div_65_tbody_32_Template, 2, 1, "tbody", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.orderData.length > 0);
} }
function SalesNewInvoiceComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "table", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "CGST");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "SGST");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 4, ctx_r14.subTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 7, ctx_r14.totalGST / 2, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](21, 10, ctx_r14.totalGST / 2, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](27, 13, ctx_r14.total, "1.2-2"), "");
} }
function SalesNewInvoiceComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 13);
} }
function SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid GSTIN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " GST Type Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "GST Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SalesNewInvoiceComponent_ng_template_69_div_13_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r59.getGstNumber($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_6_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_7_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_8_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "GST Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-select", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Regular");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Composite");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-option", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Exempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SalesNewInvoiceComponent_ng_template_69_div_13_mat_error_20_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r45.submittedParty || ctx_r45.fp.gstIn.touched) && (ctx_r45.fp.gstIn.errors == null ? null : ctx_r45.fp.gstIn.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r45.submittedParty || ctx_r45.fp.gstIn.touched) && (ctx_r45.fp.gstIn.errors == null ? null : ctx_r45.fp.gstIn.errors.pattern) || (ctx_r45.fp.gstIn.errors == null ? null : ctx_r45.fp.gstIn.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r45.submittedParty || ctx_r45.fp.gstIn.touched) && (ctx_r45.fp.gstIn.errors == null ? null : ctx_r45.fp.gstIn.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r45.isDisabledGST);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r45.submittedParty || ctx_r45.fp.gstType.touched) && (ctx_r45.fp.gstType.errors == null ? null : ctx_r45.fp.gstType.errors.required));
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_20_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Party Name Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SalesNewInvoiceComponent_ng_template_69_mat_error_20_mat_error_1_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r46.submittedParty || ctx_r46.fp.partyName.touched) && (ctx_r46.fp.partyName.errors == null ? null : ctx_r46.fp.partyName.errors.required));
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid mobile number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Mobile Number must be of 10-digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Mobile Number must be of 10-digits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter a valid email id. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Email id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_43_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Billing Address Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SalesNewInvoiceComponent_ng_template_69_mat_error_43_mat_error_1_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r53.submittedParty || ctx_r53.fp.billingAddress.touched) && (ctx_r53.fp.billingAddress.errors == null ? null : ctx_r53.fp.billingAddress.errors.required));
} }
function SalesNewInvoiceComponent_ng_template_69_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "textarea", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function SalesNewInvoiceComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_ng_template_69_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r63.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h4", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Add New Party");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_ng_template_69_Template_input_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r65.customertoggleShow($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " As Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SalesNewInvoiceComponent_ng_template_69_div_13_Template, 21, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Party Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SalesNewInvoiceComponent_ng_template_69_mat_error_20_Template, 2, 1, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, SalesNewInvoiceComponent_ng_template_69_mat_error_26_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, SalesNewInvoiceComponent_ng_template_69_mat_error_27_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SalesNewInvoiceComponent_ng_template_69_mat_error_28_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SalesNewInvoiceComponent_ng_template_69_mat_error_29_Template, 2, 0, "mat-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SalesNewInvoiceComponent_ng_template_69_mat_error_35_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, SalesNewInvoiceComponent_ng_template_69_mat_error_36_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "textarea", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, SalesNewInvoiceComponent_ng_template_69_mat_error_43_Template, 2, 1, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, SalesNewInvoiceComponent_ng_template_69_div_44_Template, 5, 0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Add Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SalesNewInvoiceComponent_ng_template_69_Template_input_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r66.showShippingAddressinModal($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_ng_template_69_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r67.modalDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_ng_template_69_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r68.addNewParty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r17.PartyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r17.isShowGstFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r17.isShowGstFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, ctx_r17.fp.partyName.invalid && ctx_r17.fp.partyName.touched && ctx_r17.submittedParty));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.submittedParty || ctx_r17.fp.partyName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c1, ctx_r17.fp.mobile.invalid && ctx_r17.fp.mobile.touched && ctx_r17.submittedParty));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.mobile.touched) && (ctx_r17.fp.mobile.errors == null ? null : ctx_r17.fp.mobile.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.mobile.touched) && (ctx_r17.fp.mobile.errors == null ? null : ctx_r17.fp.mobile.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.mobile.touched) && (ctx_r17.fp.mobile.errors == null ? null : ctx_r17.fp.mobile.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.mobile.touched) && (ctx_r17.fp.mobile.errors == null ? null : ctx_r17.fp.mobile.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, ctx_r17.fp.email.invalid && ctx_r17.fp.email.touched && ctx_r17.submittedParty));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.email.touched) && (ctx_r17.fp.email.errors == null ? null : ctx_r17.fp.email.errors.pattern) && (ctx_r17.fp.email.errors == null ? null : ctx_r17.fp.email.errors.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r17.submittedParty || ctx_r17.fp.email.touched) && (ctx_r17.fp.email.errors == null ? null : ctx_r17.fp.email.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c1, ctx_r17.fp.billingAddress.invalid && ctx_r17.fp.billingAddress.touched && ctx_r17.submittedParty));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.submittedParty || ctx_r17.fp.billingAddress.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.isShippingAddressinModal);
} }
function SalesNewInvoiceComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, i_r69.itemName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r69.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 7, i_r69.totalPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 10, i_r69.gstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](14, 13, i_r69.finalAmount, "1.2-2"), "");
} }
function SalesNewInvoiceComponent_tr_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, i_r70.itemName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r70.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 7, i_r70.totalPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 10, i_r70.gstAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](14, 13, i_r70.finalAmount, "1.2-2"), "");
} }
const _c2 = function () { return { containerClass: "theme-dark-blue", dateInputFormat: "DD MMM YYYY", showWeekNumbers: false }; };
const _c3 = function () { return { standalone: true }; };
//import { MatDialogRef } from "@angular/material/dialog";
class SalesNewInvoiceComponent {
    constructor(saleInvoiceService, formBuilder, partyService, router, toastService, commonService, profileService, modal, route, remoteShopService, titleCasePipe, ORDERData, dialogRef) {
        this.saleInvoiceService = saleInvoiceService;
        this.formBuilder = formBuilder;
        this.partyService = partyService;
        this.router = router;
        this.toastService = toastService;
        this.commonService = commonService;
        this.profileService = profileService;
        this.modal = modal;
        this.route = route;
        this.remoteShopService = remoteShopService;
        this.titleCasePipe = titleCasePipe;
        this.ORDERData = ORDERData;
        this.dialogRef = dialogRef;
        this.gstRate = 0;
        this.gstAmount = 0;
        this.Units = src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.Units;
        this.allStates = src_app_helpers_state_constans__WEBPACK_IMPORTED_MODULE_1__.StateConstants.states;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date());
        this.ngModelDate = new Date();
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.allPartyList = [];
        this.productData = [];
        this.sendArray = [];
        this.fieldArray = [];
        this.newAttribute = {};
        this.subTotal = 0;
        this.totalGST = 0;
        this.total = 0;
        this.additionalCess = 0;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl();
        this.isShown = false;
        this.mask = [
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
        this.isShowGstFields = false;
        this.isShippingAddressinModal = false;
        this.showInvoiceGenerateData = false;
        this.showPrintBtn = false;
        this.remoteProductData = [];
        this.ismodelShow = false;
        this.isCashSale = false;
        this.selectedCheckBox = false;
        this.checkedAll = false;
        this.singleChecked = false;
        this.deleteProductData = [];
        this.isAllChecked = false;
        this.isDisabledGST = true;
        this.submitted = false;
        this.submittedParty = false;
        this.currentPageNo = 0;
        this.partyPagesize = 10;
        this.gstStateMatch = true;
        this.PartyForm = this.formBuilder.group({
            gstType: [null],
            gstIn: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz][0-9A-Za-z]{1}$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(15),
                ],
            ],
            partyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            mobile: [
                ,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[0-9]*$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                ],
            ],
            // email: [
            //   null,
            //   [
            //     Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
            //     Validators.email,
            //     Validators.required,
            //   ],
            // ],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]],
            billingAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            shippingAddress: [],
            balanceStatus: ["1"],
            isCustomer: [false],
        });
    }
    ngOnInit() {
        this.getAllParties();
        this.getSaleInvoiceNumber();
        this.getProfileData();
        this.todaysDate = new Date();
        this.today = new Date();
        this.newAttribute = {
            unit: "",
            ramount: "",
            wtax: "",
            wotax: "",
            index: "",
            product: "",
            gty: "",
            select: "",
        };
        this.fieldArray.push(this.newAttribute);
        // Sale invoice form
        this.SaleInvoiceForm = this.formBuilder.group({
            partyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            invoiceNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            reverseCharge: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            invoiceDate: ["", new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            gstNo: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz][0-9A-Za-z]{1}$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(15),
                ],
            ],
            barcode: [""],
            totalBillAmount: [""],
            billGstAmount: [""],
            credit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            gstRate: [""],
            billingAddress: [null],
            shippingAddress: [null],
            ewayBillNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(12)],
            cashSale: [""],
            subcheckbox: this.formBuilder.array([]),
            shippedFrom: [""],
        });
        this.orderId = this.ORDERData.orderId;
        if (this.orderId) {
            this.getCustomerProductByOrderId();
        }
    }
    get f() {
        return this.SaleInvoiceForm.controls;
    }
    get pf() {
        return this.PartyForm.controls;
    }
    get formArr() {
        return this.SaleInvoiceForm.get("subcheckbox");
    }
    addDetailsButtonClick(i) {
        const content = this.SaleInvoiceForm.get("subcheckbox");
        content.push(this.addRolesPermission(i));
    }
    /**
     * Method for creating foemcontrol for each row in role permission table
     * @param id
     * @returns
     */
    addRolesPermission(id) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            read: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false),
        });
    }
    getProfileData() {
        this.profileService.getUserProfile({}, this.currentUser.id).then((res) => {
            this.gstType = res.data.additional.gstType;
            this.compositeType = res.data.additional.compositeType;
            this.legalName = res.data.additional.legalName;
            this.homeNo = res.data.primaryAddress.homeno;
            this.city = res.data.primaryAddress.city;
            this.state = res.data.primaryAddress.state;
            this.district = res.data.primaryAddress.district;
            this.country = res.data.primaryAddress.country;
            this.pincode = res.data.primaryAddress.pincode;
            this.address = res.data.primaryAddress.address;
            this.userProfileGSTNo = res.data.additional.gstinNo
                ? res.data.additional.gstinNo.slice(0, 2)
                : "";
        });
    }
    /**
     * Filter customer name search
     * @param name s
     * @returns
     */
    filterNames(name) {
        return this.allPartyList.filter((partyList) => partyList.partyName.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    getUnit(value) {
        this.unitValue = "1 " + value;
    }
    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    showShippingAddress(checked) {
        this.isShippingAddress = checked;
    }
    showShippingAddressinModal(checked) {
        this.isShippingAddressinModal = checked;
    }
    /**
     * get all party name
     */
    getAllParties() {
        this.partyService
            .getAllPartiesDetails({}, this.currentUser.id, this.partyPagesize, this.currentPageNo + 1)
            .then((res) => {
            this.allPartyList = res.data.pageData;
            if (this.allPartyList) {
                this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((name) => name ? this.filterNames(name) : this.allPartyList.slice()));
            }
        });
    }
    /**
     * get party by name
     * @param item
     */
    searchPartyByName(item) {
        this.saleInvoiceService
            .getPartyByName({}, this.currentUser.id, item)
            .then((response) => {
            this.partyData = response.data.rows;
            this.allPartyList = response.data.rows;
            if (this.allPartyList) {
                this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((name) => name ? this.filterNames(name) : this.allPartyList.slice()));
            }
        });
    }
    setSelectedPartyDeatails(item) {
        this.partyId = item.id;
        if (this.partyData) {
            this.partyData.forEach((ele) => {
                this.SaleInvoiceForm.patchValue({
                    gstNo: ele.gstIn,
                    billingAddress: ele.billingAddress,
                });
                if (this.SaleInvoiceForm.controls.gstNo.value.slice(0, 2) ==
                    this.userProfileGSTNo) {
                    this.gstStateMatch = true;
                    this.supplytype = "INTRASTATE";
                }
                else {
                    this.gstStateMatch = false;
                    this.supplytype = "INTERSTATE";
                }
            });
        }
        else {
            this.saleInvoiceService
                .getPartyByName({}, this.currentUser.id, item.partyName)
                .then((response) => {
                this.partyData = response.data.rows;
                this.allPartyList = response.data.rows;
                this.allPartyList.forEach((ele) => {
                    this.SaleInvoiceForm.patchValue({
                        gstNo: ele.gstIn,
                        billingAddress: ele.billingAddress,
                    });
                    if (this.SaleInvoiceForm.controls.gstNo.value.slice(0, 2) ==
                        this.userProfileGSTNo) {
                        this.gstStateMatch = true;
                        this.supplytype = "INTRASTATE";
                    }
                    else {
                        this.gstStateMatch = false;
                        this.supplytype = "INTERSTATE";
                    }
                });
            });
            this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((name) => name ? this.filterNames(name) : this.allPartyList.slice()));
        }
    }
    /**
     * calculation total for product
     */
    calculationTotal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.barcode = "";
            let price = 0;
            let additionalCess = 0;
            let gstInPer = 0;
            this.totalPrice = 0;
            this.subTotal = 0;
            this.gstRate = 0;
            this.productData.forEach((element) => {
                let gstInPer = element.gstRate;
                price = price + element.salePrice * element.quantity;
                this.gstRate =
                    (element.salePrice - element.salePrice / (1 + gstInPer / 100)) *
                        element.quantity +
                        this.gstRate;
                this.gstAmount =
                    (element.salePrice - element.salePrice / (1 + gstInPer / 100)) *
                        element.quantity;
                additionalCess = (element.salePrice * element.additionalCess) / 100;
                this.subTotal = element.basePrice * element.quantity + this.subTotal;
                element.subTotal = element.basePrice * element.quantity;
                element.gstAmount =
                    (element.salePrice - element.salePrice / (1 + gstInPer / 100)) *
                        element.quantity;
                element.total = element.salePrice * element.quantity;
                gstInPer = element.gstRate;
                if (this.isShown) {
                    this.totalPrice = price;
                }
                else {
                    this.totalPrice = price;
                }
            });
            if (this.gstType === "Exempted") {
                this.totalGST = 0;
                this.gstInRs = 0;
                this.gstInPer = 0;
            }
            else if (this.gstType === "Composite") {
                if (this.compositeType == "Manufacturer" ||
                    this.compositeType == "Trader") {
                    this.totalGST = (this.subTotal * 1) / 100;
                    this.gstInRs = 0;
                    this.gstInPer = 0;
                }
                else if (this.compositeType == "Restaurant") {
                    this.totalGST = (this.subTotal * 5) / 100;
                    this.gstInRs = 0;
                    this.gstInPer = 0;
                }
                else {
                    this.totalGST = (this.subTotal * 6) / 100;
                    this.gstInRs = 0;
                    this.gstInPer = 0;
                }
            }
            else {
                this.totalGST = this.gstRate;
                this.gstInRs = this.gstRate;
                this.gstInPer = gstInPer;
            }
            this.additionalCess = additionalCess;
            if (this.isShown) {
                this.total = price;
            }
            else {
                this.total = price;
            }
        });
    }
    /**
     * get goods by barcode
     */
    getGoodsByBarcode() {
        this.saleInvoiceService
            .getGoodsByBarcode({}, this.barcode, this.currentUser.id)
            .then((response) => {
            response.data.quantity = 1;
            this.productData.push(response.data);
            for (let i = 0; i <= this.productData.length; i++) {
                this.addDetailsButtonClick(i);
            }
            this.calculationTotal();
        });
    }
    /**
     * calculation for quantity change
     * @param i
     */
    changeQtyCalculation(i) {
        this.productData[i].quantity;
        // this.totalGST = (this.productData[i].salePrice * this.productData[i].quantity) * (this.productData[i].gstRate / 100);
        // this.subTotal = (this.productData[i].salePrice * this.productData[i].quantity);
        // this.total = this.totalGST + this.subTotal;
        this.calculationTotal();
    }
    /**
     * create sale invoice method
     */
    postSaleInvoice() {
        this.submitted = true;
        if (this.todaysDate == "") {
            this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields.",
            });
            // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
            return false;
        }
        else {
            console.log("Sssssss", this.SaleInvoiceForm.controls.shippedFrom.value);
            if (this.productData.length < 1) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Please Add At Least One Product To Proceed!!!",
                });
                // this.toastService.openErrorSnackBar(
                //   "Please Add At Least One Product To Proceed!!!"
                // );
                return false;
            }
            this.productData.forEach((e) => {
                let data = {
                    quantity: e.quantity,
                    barcode: e.barcode,
                };
                this.sendArray.push(data);
            });
            let data = {
                invoiceDetails: {
                    cashSale: this.isCashSale,
                    partyName: this.isCashSale ? null : this.partyName,
                    invoiceNo: this.SaleInvoiceForm.controls.invoiceNo.value.toString(),
                    invoiceDate: this.todaysDate,
                    credit: this.SaleInvoiceForm.controls.credit.value,
                    roundOff: false,
                    userId: this.currentUser.id,
                    partyId: this.isCashSale ? null : this.partyId,
                    lastInvoiceNumber: this.lastInvoiceNumber,
                    billingAddress: this.isCashSale
                        ? null
                        : this.SaleInvoiceForm.controls.billingAddress.value,
                    shippingAddress: this.isCashSale
                        ? null
                        : this.SaleInvoiceForm.controls.shippingAddress.value,
                    ewayBillNo: this.isCashSale
                        ? null
                        : this.SaleInvoiceForm.controls.ewayBillNo.value
                            ? this.SaleInvoiceForm.controls.ewayBillNo.value
                            : null,
                    mobile: this.isCashSale ? null : this.partyData[0].mobile,
                    customerName: this.isCashSale ? null : this.partyData[0].partyName,
                    reverseCharge: this.SaleInvoiceForm.controls.reverseCharge.value,
                    rcm: this.SaleInvoiceForm.controls.reverseCharge.value,
                    supplyType: this.supplytype,
                    placeOfSupply: this.SaleInvoiceForm.controls.shippedFrom.value
                },
                products: this.sendArray,
            };
            this.saleInvoiceService.postSaleInvoice(data).then((res) => {
                if (res) {
                    this.sendArray = [];
                    this.toastService.toastMsg({
                        title: "Success",
                        content: "Invoice Number Updated Successfully!!!",
                    });
                    // this.toastService.openSnackBar("Sale Invoice Added Successfully");
                }
                this.router.navigate(["/pages/sale-invoice-list"]);
            }, (err) => {
                this.sendArray = [];
                if (err.error.expose) {
                    // this.toastService.openErrorSnackBar(
                    //   this.titleCasePipe.transform(err.error.error_message)
                    // );
                    this.toastService.toastMsg({
                        title: "Error",
                        content: err.error.error_message,
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
    getSaleInvoiceNumber() {
        this.saleInvoiceService
            .getSaleInvoiceNumber({}, this.currentUser.id)
            .then((res) => {
            this.SaleInvoiceForm.patchValue({
                invoiceNo: String(res.data.prefix).concat(String(res.data.suffix)),
            });
            this.lastInvoiceNumber = res.data.suffix;
        });
    }
    toggleShow() {
        this.isShown = !this.isShown;
        if (this.isShown) {
            this.total = this.subTotal + this.totalGST + this.additionalCess;
        }
        else {
            this.total = this.subTotal + this.totalGST;
        }
    }
    /**
     * get gstin
     * @param gstin
     */
    getGstNumber(gstin) {
        this.partyService.getGstNumber({}, gstin).then((res) => {
            this.gstDetails = res;
            if (res) {
                this.PartyForm.patchValue({
                    gstType: res.data.taxPayerType,
                    gstNo: res.data.gstIn,
                });
            }
            this.isDisabledGST = false;
        }, (err) => {
            this.isDisabledGST = true;
        });
    }
    get fp() {
        return this.PartyForm.controls;
    }
    /**
     * Post party details api call
     */
    addNewParty() {
        this.submittedParty = true;
        if (this.isShowGstFields) {
            if ((this.PartyForm.controls.billingAddress.value == "" || this.PartyForm.controls.partyName.value == ""
                || this.PartyForm.controls.mobile.value == "" || this.PartyForm.controls.email.value == "")) {
                // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Required Fields.",
                });
                return false;
            }
            else if ((this.PartyForm.controls.billingAddress.value == "" && this.PartyForm.controls.partyName.value == ""
                && this.PartyForm.controls.mobile.value == "" && this.PartyForm.controls.email.value == "")) {
                // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Required Fields.",
                });
            }
            else {
                this.addPartyObject();
            }
        }
        else {
            if ((this.PartyForm.controls.billingAddress.value == "" || this.PartyForm.controls.partyName.value == ""
                || this.PartyForm.controls.mobile.value == "" || this.PartyForm.controls.email.value == ""
                || this.PartyForm.controls.gstType.value == "" || this.PartyForm.controls.gstIn.value == "")) {
                // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Fill All Required Fields.",
                });
                return false;
            }
            else {
                this.addPartyObject();
            }
        }
    }
    addPartyObject() {
        this.finalObject = {
            "partyDetails": {
                "isCustomer": this.isShowGstFields,
                "gstType": this.PartyForm.controls.gstType.value ? this.PartyForm.controls.gstType.value : null,
                "gstIn": this.PartyForm.controls.gstIn.value ? this.PartyForm.controls.gstIn.value : null,
                "partyName": this.PartyForm.controls.partyName.value,
                "mobile": this.PartyForm.controls.mobile.value ? (this.PartyForm.controls.mobile.value).toString() : null,
                "email": this.PartyForm.controls.email.value,
                "billingAddress": this.PartyForm.controls.billingAddress.value,
                "shippingAddress": this.PartyForm.controls.shippingAddress.value,
                "openingBalance": null,
                "asOfDate": null,
                "balanceStatus": this.PartyForm.controls.balanceStatus.value,
                "payment": null,
                "creditPeriodDay": null,
                "creditLimit": null,
                "noOfCredits": null,
                "relationSince": null,
                "userId": this.currentUser.id,
                "distance": null,
                "transporation": null,
            },
            "groupAdd": null
        };
        this.partyService.postParty(this.finalObject).then((res) => {
            this.paramID = res.data.id;
            if (res) {
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Party Added Successfully!!!",
                });
                // this.toastService.openSnackBar("Party Added Successfully")
                this.PartyForm.reset();
                this.modal.dismissAll();
                this.getAllParties();
                this.submittedParty = false;
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
    customertoggleShow(value) {
        this.isShowGstFields = value;
    }
    /**
     * Get Customer product info for remote inovoice generation
     */
    getCustomerProductByOrderId() {
        this.subTotal = 0;
        this.totalGST = 0;
        this.total = 0;
        this.remoteShopService
            .getCustomerProductByOrderId({}, this.orderId)
            .then((res) => {
            if (res) {
                this.showInvoiceGenerateData = true;
            }
            this.SaleInvoiceForm.patchValue({
                partyName: res.data.customerName,
                billingAddress: res.data.billingAddress,
                gstNo: res.data.gstIn,
            });
            this.subTotal = res.data.totalBillAmount - res.data.billGstAmount;
            this.totalGST = res.data.billGstAmount;
            this.total = res.data.totalBillAmount;
            this.orderData = res.data.sales_products;
        });
    }
    /**
     * Generate Sale Invoice of Remote Order
     */
    patchGenerateRemoteInovice() {
        let data = {
            orderDetails: {
                orderId: this.orderId,
                invoiceDate: this.todaysDate,
                ewayBillNo: this.SaleInvoiceForm.controls.ewayBillNo.value,
                invoiceNo: this.SaleInvoiceForm.controls.invoiceNo.value,
                lastInvoiceNumber: this.lastInvoiceNumber,
            },
        };
        this.remoteShopService.patchGenerateRemoteInovice(data).then((res) => {
            if (res) {
                this.showPrintBtn = true;
                this.toastService.toastMsg({
                    title: "Success",
                    content: "Receipt Generated!!!",
                });
                // this.toastService.openSnackBar("Receipt Generated!!!");
            }
        }, (err) => {
            if (err.error.status == 406) {
                this.toastService.toastMsg({
                    title: "Error",
                    content: err.error.error_message,
                });
                // this.toastService.openErrorSnackBar(err.error.error_message);
            }
            else {
                this.toastService.toastMsg({
                    title: "Error",
                    content: "Internal Server Error",
                });
                // this.toastService.openErrorSnackBar("Internal Server Error");
            }
        });
    }
    /**
     * print receipt
     */
    onPrint() {
        const printContents = document.getElementById("panel").innerHTML;
        const originalContents = document.body.innerHTML;
        window.print();
        this.modal.dismissAll();
    }
    /**
     * Get Invoice details by orderId
     */
    getInvoiceByOrderId() {
        this.remoteShopService.getInvoiceByOrderId({}, this.orderId).then((res) => {
            this.remoteProductData = res.data.sales_products;
            this.remoteGSTAmount = res.data.billGstAmount;
            this.remoteTotalBillAmount = res.data.totalBillAmount;
            this.billingAddress = res.data.billingAddress;
            this.customerName = res.data.customerName;
        });
    }
    /**
     * toggle for cash/sale
     * @param event
     */
    isCashSaleToggle(event) {
        this.isCashSale = event;
    }
    toggleCheckboxAll(event) {
        this.deleteProductData = [];
        this.isAllChecked = event;
        if (event) {
            this.deleteProductData = this.productData;
            for (let i = 0; i < this.deleteProductData.length; i++) {
                this.formArr.controls[i].patchValue({
                    read: true,
                });
                this.checkedAll = true;
            }
        }
        else {
            this.deleteProductData = [];
            for (let i = 0; i < this.productData.length; i++) {
                this.formArr.controls[i].patchValue({
                    read: false,
                });
                this.checkedAll = false;
            }
        }
    }
    changeQuantity(sign, i, quantity = 0) {
        switch (sign) {
            case "-":
                if (this.productData[i].quantity > 1) {
                    this.productData[i].quantity = this.productData[i].quantity - 1;
                }
                // this.changeQtyCalculation(i);
                this.calculationTotal();
                break;
            case "+":
                this.productData[i].quantity = this.productData[i].quantity + 1;
                // this.changeQtyCalculation(i);
                this.calculationTotal();
                break;
            case "rm":
                this.productData.splice(i, 1);
                if (this.productData.length <= 0) {
                    this.totalGST = 0;
                    this.subTotal = 0;
                    this.total = 0;
                }
                this.calculationTotal();
                break;
            case "qty":
                console.log("qty calculation", i, this.productData[i]);
                this.productData[i].quantity = quantity;
                this.calculationTotal();
                break;
            default:
                this.productData[i];
                break;
        }
    }
    toggleCheckboxSingle(event, i) {
        if (event) {
            for (let j = 0; j < this.productData.length; j++) {
                if (j == i) {
                    this.formArr.controls[i].patchValue({
                        read: true,
                    });
                    this.singleChecked = event;
                    this.deleteProductData.push(this.productData[i]);
                }
            }
        }
        else {
            this.formArr.controls[i].patchValue({
                read: false,
            });
            this.singleChecked = this.selectedCheckBox;
            for (let n = 0; n <= this.deleteProductData.length; n++) {
                if (this.productData[i].barcode == this.deleteProductData[n].barcode)
                    this.deleteProductData.splice(n, 1);
            }
        }
    }
    getCredit(e) {
        if (e.value == "true") {
            e.value = true;
        }
        else {
            e.value = false;
        }
        this.SaleInvoiceForm.controls.credit.value = e.value;
    }
    StringOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return true;
        }
        return false;
    }
    numberOnly(event) {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    openAddPartyModal(name) {
        this.modal.open(name, {
            centered: true,
            backdrop: "static",
            size: "lg",
        });
    }
    modalDismiss() {
        this.modal.dismissAll();
    }
    onCancelModal() {
        this.dialogRef.close();
    }
    closeModal() {
        this.modal.dismissAll();
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
SalesNewInvoiceComponent.ɵfac = function SalesNewInvoiceComponent_Factory(t) { return new (t || SalesNewInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_2__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__.PartyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_6__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_7__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef)); };
SalesNewInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SalesNewInvoiceComponent, selectors: [["app-sales-new-invoice"]], viewQuery: function SalesNewInvoiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.closebutton = _t.first);
    } }, decls: 270, vars: 89, consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "500"], [1, "addProductButtons"], ["style", "margin-right: 10px !important;", "type", "button", "class", "btn btn-cancel", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-save text-nowrap", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-save", "data-bs-toggle", "modal", "data-bs-target", "#invoice-modal", 3, "click", 4, "ngIf"], [1, "modal-body"], [3, "formGroup"], [1, "card"], [1, "card-body", "fs--1"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "d-flex", "mb-2", 2, "justify-content", "flex-end", "align-items", "center"], [1, ""], [2, "font-size", "14px"], [1, "form-check", "form-switch"], ["formControlName", "reverseCharge", "id", "inlineCheckbox1", "type", "checkbox", 1, "form-check-input", 2, "font-size", "14px", "margin", "0px 4px 2px 0px", "padding-left", "0px", 3, "disabled"], [1, "row", "d-flex", "justify-content-start"], ["class", "col-md-4 ", 4, "ngIf"], [1, "col-md-4", "justify-content-between"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "11px"], ["type", "text", "matInput", "", "placeholder", "GST number", "formControlName", "gstNo", "required", "", "maxlength", "15", "minlength", "15", "pattern", "^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz][0-9A-Za-z]{1}$", 2, "text-transform", "uppercase", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], [1, "col-md-4", "justify-content-end"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["type", "text", "placeholder", "Enter Tax Invoice No.", "matInput", "", "formControlName", "invoiceNo", "required", "", 3, "disabled", "ngClass"], [1, "col-md-4"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "Receipt Date.", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "maxDate", "ngModel", "bsConfig", "ngModelOptions", "ngClass", "ngModelChange", "click"], [1, "iconcalender"], ["type", "text", "matInput", "", "placeholder", "Enter e-way Bill No.", "maxlength", "12", "formControlName", "ewayBillNo", 3, "disabled"], ["formControlName", "shippedFrom", "disableOptionCentering", "", "aria-label", "Default select example", "placeholder", "Select State", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mb-3", "d-flex", "justify-content-start"], [1, "col-sm-12", "col-md-4", "col-lg-4"], ["matInput", "", "rows", "5", "placeholder", "Enter Billing Address", "formControlName", "billingAddress", "required", "", "disabled", "", "readonly", "", 3, "ngClass"], ["class", "col-sm-12 col-md-4 col-lg-4", 4, "ngIf"], ["class", "table-responsive my-custom-scrollbar d-flex justify-content-start row", "style", "margin-right: 0.1rem;", 4, "ngIf"], ["class", "table-responsive my-custom-scrollbar d-flex justify-content-end", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end"], ["class", "", 4, "ngIf"], ["addParty", ""], ["id", "invoice-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["closebutton", ""], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["type", "button", "aria-label", "Close", "data-bs-dismiss", "modal", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base", 3, "click"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md"], [1, "mb-2", "mb-md-0"], ["data-bs-dismiss", "modal", 1, "col-auto"], ["type", "button", 1, "btn", "btn-falcon-default", "btn-sm", "me-1", "mb-2", "mb-sm-0", 3, "click"], [1, "fas", "fa-print", "me-1", 3, "click"], [1, "container"], ["id", "panel", 1, "card", "mb-3"], [1, "card-body"], [1, "mb-3", "text-center"], [1, "row", "justify-content-betweenxt-center", "mb-3"], [1, "col-sm-6", "text-sm-start"], [1, "fs--1", "mb-0"], [1, "col", "text-sm-end", "mt-3", "mt-sm-0"], [1, "col-12"], [1, "table-responsive", "scrollbar", "mt-4", "fs--1"], [1, "table", "table-striped", "table-bordered"], [1, "light"], [1, "bg-primary", "text-white", "dark__bg-1000"], [1, "border-0", "text-white"], [1, "border-0", "text-center", "text-white"], [1, "border-0", "text-end", "text-white"], [4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [1, "table-responsive", "scrollbar", "fs--1"], [1, "table", "table-striped"], [1, "border-0", "text-center"], [1, "align-middle"], [1, "align-middle", "text-center"], [1, "card-footer", "bg-light"], ["id", "invoice-modal2", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2"], ["type", "button", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], ["close", ""], [1, "modal-footer"], ["type", "button", "data-bs-target", "#invoice-modal", 1, "btn", "btn-outline-primary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", "text-nowrap", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#invoice-modal", 1, "btn", "btn-save", 3, "click"], ["type", "text", "placeholder", "Party Name", "aria-label", "Select Party Name", "matInput", "", "required", "", 3, "formControl", "matAutocomplete", "ngClass", "keyup"], ["auto", "matAutocomplete"], ["aria-hidden", "true", "title", "Party", 1, "mobVerify", 2, "display", "inline-block", "width", "100%", 3, "click"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"], [1, "text-danger"], [3, "value"], ["matInput", "", "rows", "5", "placeholder", "Enter Shipping Address", "formControlName", "shippingAddress", 3, "disabled"], [1, "table-responsive", "my-custom-scrollbar", "d-flex", "justify-content-start", "row", 2, "margin-right", "0.1rem"], [1, "table", "bg-white", "table-bordered", "table-stripped"], [1, "table-secondary"], [1, "font_size", "font-weight-bold"], ["scope", "col", 2, "width", "7% !important"], ["scope", "col", 2, "width", "8%"], ["scope", "col", 1, "text-nowrap"], ["scope", "col", "colspan", "1", 1, "text-nowrap"], ["scope", "col", "colspan", "2", 1, "text-center"], ["scope", "col", "colspan", "2", 1, "text-nowrap"], ["class", "mod", 4, "ngIf"], [1, "mod"], ["colspan", "1"], ["type", "text", "value", "1", "placeholder", "Unit", "readonly", "", 1, "unitInput", 2, "width", "5rem", 3, "value"], ["colspan", "1", 1, "text-center", "m-auto"], [1, "", 2, "width", "5rem"], [1, "table-responsive", "my-custom-scrollbar", "d-flex", "justify-content-end"], [1, "col-lg-8", "col-sm-6"], [1, "col-lg-4", "col-sm-4", "table-bordered", "my-custom-scrollbar", 2, "width", "30%"], [1, "table", "table-bordered", "my-custom-scrollbar"], [2, "text-align", "left!important"], [2, "text-align", "right!important"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base", 3, "click"], ["id", "modalExampleDemoLabel", 1, "mb-1"], [1, "p-4", "pb-0"], [1, "form-check", "form-switch", "mb-0", "lh-1", "mb-3"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "checked", "click"], [1, "lab", "text-nowrap", "p-1"], ["class", "row d-flex justify-content-start", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4", 2, "font-size", "12px"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "matInput", "", "placeholder", "Party Name", "formControlName", "partyName", 3, "ngClass"], ["type", "text", "placeholder", "Mobile Number", "matInput", "", "formControlName", "mobile", "minlength", "10", "maxLength", "10", "ngxOnlyNumbers", "", 3, "ngClass"], ["type", "email", "placeholder", "e-mail", "matInput", "", "formControlName", "email", 3, "ngClass"], [1, "col-lg-4", "col-sm-12", "col-md-6"], ["matInput", "", "required", "", "formControlName", "billingAddress", "placeholder", "Enter your address", 3, "ngClass"], ["class", "col-lg-4 col-sm-12 col-md-6", 4, "ngIf"], [1, "form-check", "form-check-inline", "mb-2"], ["for", "inlineCheckbox1", 1, "form-label", "form-check-label", "fs--1"], ["id", "inlineCheckbox1", "type", "checkbox", 1, "form-check-input", "fs--1", 3, "change"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], ["matInput", "", "required", "", "formControlName", "gstIn", "maxlength", "15", "minlength", "15", "placeholder", "GST Number", "pattern", "^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz][0-9A-Za-z]{1}$", "placeholder", "GST Number", 2, "text-transform", "uppercase", 3, "change"], ["matNativeControl", "", "required", "", "formControlName", "gstType", "disableOptionCentering", "", "placeholder", "GST Type", 3, "disabled"], ["value", "REGULAR"], ["value", "COMPOSITE"], ["value", "EXEMPTED"], ["matInput", "", "formControlName", "shippingAddress", "placeholder", "Enter your address"], [1, "align-middle", "text-end"]], template: function SalesNewInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Sale Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SalesNewInvoiceComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SalesNewInvoiceComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SalesNewInvoiceComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SalesNewInvoiceComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Select Purchase Invoice For RCM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SalesNewInvoiceComponent_div_21_Template, 13, 9, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "GST Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, SalesNewInvoiceComponent_mat_error_27_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SalesNewInvoiceComponent_mat_error_28_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SalesNewInvoiceComponent_mat_error_29_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Tax Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SalesNewInvoiceComponent_mat_error_35_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SalesNewInvoiceComponent_Template_input_ngModelChange_41_listener($event) { return ctx.todaysDate = $event; })("click", function SalesNewInvoiceComponent_Template_input_click_41_listener() { return ctx.openDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "date_range");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, SalesNewInvoiceComponent_mat_error_45_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "e-Way Bill No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Shipped From(State)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, SalesNewInvoiceComponent_mat_option_56_Template, 2, 2, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, SalesNewInvoiceComponent_mat_error_63_Template, 2, 0, "mat-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, SalesNewInvoiceComponent_div_64_Template, 5, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, SalesNewInvoiceComponent_div_65_Template, 33, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, SalesNewInvoiceComponent_div_66_Template, 28, 16, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, SalesNewInvoiceComponent_div_68_Template, 1, 0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, SalesNewInvoiceComponent_ng_template_69_Template, 54, 24, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_Template_button_click_76_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_Template_a_click_84_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_Template_span_click_85_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Tax Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](110, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](111, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "thead", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "tr", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "th", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "th", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "GST(in Rs.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](127, SalesNewInvoiceComponent_tr_127_Template, 15, 16, "tr", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](129, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "table", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "thead", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "tr", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "th", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "Tax Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](137, "th", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "th", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "Tax Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "SGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](147, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "CGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](155, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](162, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "Notes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "We really appreciate your business and if there\u2019s anything else we can do, please let us know!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](172, "a", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_Template_a_click_181_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SalesNewInvoiceComponent_Template_span_click_182_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](183, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "Tax Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](192, "To:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](200, "From:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](203, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](207, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](208, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "table", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "thead", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "tr", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "th", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](214, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](215, "th", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](216, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](218, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "GST(in Rs.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "th", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](224, SalesNewInvoiceComponent_tr_224_Template, 15, 16, "tr", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](226, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "table", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "thead", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "tr", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](232, "th", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](233, "Tax Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](234, "th", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "th", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "Tax Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](239, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](240, "SGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](244, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](245, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "CGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](252, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](253, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](257, "td", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](258);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](259, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](261, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](263, "Notes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](264, "We really appreciate your business and if there\u2019s anything else we can do, please let us know!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](265, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](267, "Close s");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPrintBtn == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPrintBtn == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showInvoiceGenerateData && !ctx.showPrintBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPrintBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.SaleInvoiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isCashSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](79, _c1, ctx.f.gstNo.invalid && ctx.f.gstNo.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.gstNo.touched) && (ctx.f.gstNo.errors == null ? null : ctx.f.gstNo.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.gstNo.touched) && (ctx.f.gstNo.errors == null ? null : ctx.f.gstNo.errors.pattern) || (ctx.f.gstNo.errors == null ? null : ctx.f.gstNo.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.gstNo.touched) && (ctx.f.gstNo.errors == null ? null : ctx.f.gstNo.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.showInvoiceGenerateData)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](81, _c1, ctx.f.invoiceNo.invalid && ctx.f.invoiceNo.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.invoiceNo.touched) && (ctx.f.invoiceNo.errors == null ? null : ctx.f.invoiceNo.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("maxDate", ctx.today)("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](83, _c2))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](84, _c3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](85, _c1, ctx.todaysDate.invalid && ctx.todaysDate.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.todaysDate.touched) && (ctx.todaysDate.errors == null ? null : ctx.todaysDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](87, _c1, ctx.f.billingAddress.invalid && ctx.f.billingAddress.touched && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.billingAddress.touched) && (ctx.f.billingAddress.errors == null ? null : ctx.f.billingAddress.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShippingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showInvoiceGenerateData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Order #", ctx.invoiceNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.billingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.legalName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx.homeNo, " ", ctx.address, ", ", ctx.district, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx.city, ",", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](110, 57, ctx.state), ", ", ctx.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.remoteProductData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](147, 59, ctx.remoteGSTAmount / 2, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](155, 62, ctx.remoteGSTAmount / 2, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](162, 65, ctx.remoteTotalBillAmount, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Order #", ctx.invoiceNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.billingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.legalName);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx.homeNo, " ", ctx.address, ", ", ctx.district, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx.city, ",", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](207, 68, ctx.state), ", ", ctx.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.remoteProductData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](244, 70, ctx.remoteGSTAmount / 2, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](252, 73, ctx.remoteGSTAmount / 2, "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](259, 76, ctx.remoteTotalBillAmount, "1.2-2"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -20px !important;\n}\n\n  .modal-backdrop {\n  \n  background-color: transparent !important;\n}\n\n  .modal-backdrop.show {\n  z-index: auto;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n\n  .modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLW5ldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUFDRjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFLQTtFQUNFLDBDQUFBO0VBQ0Esd0NBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBSEY7O0VBTUE7SUFDRSxnQkFBQTtFQUhGOztFQU1BO0lBQ0Usa0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNhbGVzLW5ldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmljb25jYWxlbmRlciB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4vLyAgIDo6bmctZGVlcCAgLm1vZGFsLWJhY2tkcm9wLnNob3cge1xyXG5cclxuLy8gICAgICBvcGFjaXR5OiAwcHghaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAgLm1vZGFsLWJhY2tkcm9wIHtcclxuICAvKiBTZXQgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIHRyYW5zcGFyZW50ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC1iYWNrZHJvcC5zaG93IHtcclxuICB6LWluZGV4OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWhlYWRlciwgLm1vZGFsLWJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-remote-shopping_new-remote-shopping_module_ts-es2015.js.map