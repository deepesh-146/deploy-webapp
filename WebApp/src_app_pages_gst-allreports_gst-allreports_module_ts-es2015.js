"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_gst-allreports_gst-allreports_module_ts"],{

/***/ 38895:
/*!***********************************************************************!*\
  !*** ./src/app/pages/gst-allreports/gst-allreport--routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GstAllreportRoutingModule": function() { return /* binding */ GstAllreportRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _gstreportall_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gstreportall.component */ 46221);
/* harmony import */ var _gst_report_gst_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gst-report/gst-report.component */ 35226);
/* harmony import */ var _gst_report2_gst_report2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gst-report2/gst-report2.component */ 13756);
/* harmony import */ var _gst_report3_b_gst_report3_b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gst-report3-b/gst-report3-b.component */ 14281);
/* harmony import */ var _gst_report4_gst_report4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gst-report4/gst-report4.component */ 59540);
/* harmony import */ var _gst_report5_gst_report5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gst-report5/gst-report5.component */ 8037);
/* harmony import */ var _gst_report8_gst_report8_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gst-report8/gst-report8.component */ 9927);
/* harmony import */ var _gst_report2_a_gst_report2_a_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gst-report2-a/gst-report2-a.component */ 50715);
/* harmony import */ var _gst_report9_gst_report9_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gst-report9/gst-report9.component */ 96206);
/* harmony import */ var _sale_summary_sale_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sale-summary/sale-summary.component */ 26649);
/* harmony import */ var _gst_tax_report_gst_tax_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gst-tax-report/gst-tax-report.component */ 8367);
/* harmony import */ var _gst_tax_rate_report_gst_tax_rate_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gst-tax-rate-report/gst-tax-rate-report.component */ 58603);
/* harmony import */ var _gst_form_no_gst_form_no_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gst-form-no/gst-form-no.component */ 62640);
/* harmony import */ var _tcs_receivable_tcs_receivable_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tcs-receivable/tcs-receivable.component */ 96918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);


















const routes = [
    {
        path: '',
        component: _gstreportall_component__WEBPACK_IMPORTED_MODULE_0__.GstreportallComponent,
        children: [
            {
                path: '',
                redirectTo: 'gst-report',
                pathMatch: 'full'
            },
            {
                path: "gst-report",
                component: _gst_report_gst_report_component__WEBPACK_IMPORTED_MODULE_1__.GstReportComponent
            },
            {
                path: "gst-report2",
                component: _gst_report2_gst_report2_component__WEBPACK_IMPORTED_MODULE_2__.GstReport2Component
            },
            {
                path: "gst-report3-b",
                component: _gst_report3_b_gst_report3_b_component__WEBPACK_IMPORTED_MODULE_3__.GstReport3BComponent
            },
            {
                path: "gst-report4",
                component: _gst_report4_gst_report4_component__WEBPACK_IMPORTED_MODULE_4__.GstReport4Component
            },
            {
                path: "gst-report5",
                component: _gst_report5_gst_report5_component__WEBPACK_IMPORTED_MODULE_5__.GstReport5Component
            },
            {
                path: "gst-report8",
                component: _gst_report8_gst_report8_component__WEBPACK_IMPORTED_MODULE_6__.GstReport8Component
            },
            {
                path: "gst-report2-a",
                component: _gst_report2_a_gst_report2_a_component__WEBPACK_IMPORTED_MODULE_7__.GstReport2AComponent
            },
            {
                path: "gst-report9",
                component: _gst_report9_gst_report9_component__WEBPACK_IMPORTED_MODULE_8__.GstReport9Component
            },
            {
                path: "sale-summary",
                component: _sale_summary_sale_summary_component__WEBPACK_IMPORTED_MODULE_9__.SaleSummaryComponent
            },
            {
                path: "gst-tax-report",
                component: _gst_tax_report_gst_tax_report_component__WEBPACK_IMPORTED_MODULE_10__.GstTaxReportComponent
            },
            {
                path: "gst-tax-rate-report",
                component: _gst_tax_rate_report_gst_tax_rate_report_component__WEBPACK_IMPORTED_MODULE_11__.GstTaxRateReportComponent
            },
            {
                path: "gst-form-no",
                component: _gst_form_no_gst_form_no_component__WEBPACK_IMPORTED_MODULE_12__.GstFormNoComponent
            },
            {
                path: "tcs-receivable",
                component: _tcs_receivable_tcs_receivable_component__WEBPACK_IMPORTED_MODULE_13__.TcsReceivableComponent
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    },
];
class GstAllreportRoutingModule {
}
GstAllreportRoutingModule.ɵfac = function GstAllreportRoutingModule_Factory(t) { return new (t || GstAllreportRoutingModule)(); };
GstAllreportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: GstAllreportRoutingModule });
GstAllreportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](GstAllreportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 77623:
/*!***************************************************************!*\
  !*** ./src/app/pages/gst-allreports/gst-allreports.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GstAllreportsModule": function() { return /* binding */ GstAllreportsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _gstreportall_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gstreportall.component */ 46221);
/* harmony import */ var _gst_allreport_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gst-allreport--routing.module */ 38895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 63806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class GstAllreportsModule {
}
GstAllreportsModule.ɵfac = function GstAllreportsModule_Factory(t) { return new (t || GstAllreportsModule)(); };
GstAllreportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GstAllreportsModule });
GstAllreportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _gst_allreport_routing_module__WEBPACK_IMPORTED_MODULE_1__.GstAllreportRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GstAllreportsModule, { declarations: [_gstreportall_component__WEBPACK_IMPORTED_MODULE_0__.GstreportallComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _gst_allreport_routing_module__WEBPACK_IMPORTED_MODULE_1__.GstAllreportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule] }); })();


/***/ }),

/***/ 46221:
/*!****************************************************************!*\
  !*** ./src/app/pages/gst-allreports/gstreportall.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GstreportallComponent": function() { return /* binding */ GstreportallComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 32220);






class GstreportallComponent {
    //dataList: Array<any> = [];
    constructor(route, authService, localStorage) {
        this.route = route;
        this.authService = authService;
        this.localStorage = localStorage;
        // this.dataList = [
        //   {
        //     id: 1, name: 'GST Report'
        //   },
        //   {
        //     id: 2, name: 'GST Report-2'
        //   },
        //   {
        //     id: 3, name: 'GST Report3-b',
        //   },
        //   {
        //     id: 4, name: 'GST Report'
        //   },
        //   {
        //     id: 5, name: 'GST Report-2'
        //   },
        //   {
        //     id: 6, name: 'GST Report3-b',
        //   },
        //   {
        //     id: 7, name: 'GST Report-4'
        //   },
        //   {
        //     id: 8, name: 'GST Report-5'
        //   },
        //   {
        //     id: 9, name: 'GST Report-8',
        //   },
        //   {
        //     id: 10, name: 'GST Report2-a'
        //   },
        //   {
        //     id: 11, name: 'GST Report-9'
        //   },
        //   {
        //     id: 12, name: 'Sale-Summary',
        //   },
        //   {
        //     id: 13, name: 'GST Tax Report',
        //   },
        //   {
        //     id: 14, name: 'GST Tax Rate Report'
        //   },
        //   {
        //     id: 15, name: 'GST-Form_No',
        //   },
        //   {
        //     id: 16, name: 'Tcs-Receivable',
        //   }
        // ];
    }
    ngOnInit() {
        var queryParams = this.route.snapshot.queryParams;
        console.log("queryParams", queryParams);
        localStorage.setItem("ACCESS_TOKEN", queryParams.auth);
        localStorage.setItem("currentUser", JSON.stringify({
            id: queryParams.userId
        }));
    }
}
GstreportallComponent.ɵfac = function GstreportallComponent_Factory(t) { return new (t || GstreportallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]("LOCALSTORAGE")); };
GstreportallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GstreportallComponent, selectors: [["app-gstreportall"]], decls: 33, vars: 0, consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", 2, "display", "flex", "justify-content", "flex-start", "align-items", "center"], ["appearance", "outline", "id", "selectionTypePrint", 1, "example-full-width"], ["placeholder", "GST Reports", "matNativeControl", "", "matInput", "", "disableOptionCentering", ""], ["value", "", "routerLink", "./gst-report", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report2", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report3-b", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report4", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report5", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report8", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report2-a", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-report9", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./sale-summary", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-tax-report", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-tax-rate-report", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./gst-form-no", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], ["value", "", "routerLink", "./tcs-receivable", "routerLinkActive", "active", 2, "font-family", "Poppins", "font-size", "14px"], [1, "mt-1"]], template: function GstreportallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GST Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "GST Report-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "GST Report 3-b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "GST Report-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "GST Report-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "GST Report-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "GST Report 2-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "GST Report-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sale-Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "GST Tax Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "GST Tax Rate Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "GST-Form_No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tcs-Receivable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".example-full-width[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdzdHJlcG9ydGFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZ3N0cmVwb3J0YWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_gst-allreports_gst-allreports_module_ts-es2015.js.map