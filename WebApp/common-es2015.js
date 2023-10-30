"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["common"],{

/***/ 70323:
/*!************************************************************!*\
  !*** ./src/app/core/services/empexpenseservice.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpexpenseserviceService": function() { return /* binding */ EmpexpenseserviceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);




class EmpexpenseserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.expenseAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.productAdded$ = this.expenseAddedSource.asObservable();
    }
    notifyExpenseAdded() {
        this.expenseAddedSource.next();
    }
    getAllExpenseDetails(data, empId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empgetAllexpense + empId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    addExpenseDetails(data, empId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empaddexpense + empId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    deleteExpense(data, expenseId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empdeleteexpense + expenseId, 'DELETE').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    GetExpenseByExpenseId(data, expenseId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empgetByIdexpense + expenseId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    ExpenseUpdateByEmployeeId(data, empId) {
        return new Promise((resolve, reject) => {
            this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.updateexpenseById + empId, 'PUT').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
EmpexpenseserviceService.ɵfac = function EmpexpenseserviceService_Factory(t) { return new (t || EmpexpenseserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
EmpexpenseserviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EmpexpenseserviceService, factory: EmpexpenseserviceService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map