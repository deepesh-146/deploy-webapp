"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["default-src_app_pages_ledger_preview_preview_component_ts"],{

/***/ 75301:
/*!*********************************************************!*\
  !*** ./src/app/core/services/ledger-service.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgerServiceService": function() { return /* binding */ LedgerServiceService; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/url-constants */ 16393);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 72229);




class LedgerServiceService {
    // allLedgerData$ = this.ledgerDataSubject.asObservable();
    constructor(httpClient) {
        this.httpClient = httpClient;
        // public sharedArray: any[] = [];
        this.ledgerDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.MasterLedgerData$ = this.ledgerDataSubject.asObservable();
    }
    setLedgerData(data) {
        console.log("setLedger in service", data);
        this.ledgerDataSubject.next(data);
    }
    addLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.addLedger + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserLedger2(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserLedger2 + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getAllGlnames(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getAllGlnames + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserUsecaseData(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserUsecaseData + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    addCustomLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.addCustomLedger + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    assignLedgersv2(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.assignLedgersv2 + userId, 'POST').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    getUserChildLedger(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getUserChildLedger + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
    masterLedgerTrueFalse(data, userId) {
        return new Promise((resolve, reject) => {
            this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.masterLedgerTrueFalse + userId, 'GET').subscribe((res) => resolve(res), (err) => reject(err));
        });
    }
}
LedgerServiceService.ɵfac = function LedgerServiceService_Factory(t) { return new (t || LedgerServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
LedgerServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LedgerServiceService, factory: LedgerServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72449:
/*!***********************************************************!*\
  !*** ./src/app/pages/ledger/preview/preview.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewComponent": function() { return /* binding */ PreviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/ledger-service.service */ 75301);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);








function PreviewComponent_div_8_table_1_tr_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PreviewComponent_div_8_table_1_tr_8_ng_container_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return item_r4.editedName = $event; })("keyup.enter", function PreviewComponent_div_8_table_1_tr_8_ng_container_4_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r12.saveEditedName(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r4.editedName);
} }
function PreviewComponent_div_8_table_1_tr_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.glName, " ");
} }
function PreviewComponent_div_8_table_1_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PreviewComponent_div_8_table_1_tr_8_ng_container_4_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PreviewComponent_div_8_table_1_tr_8_ng_template_5_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviewComponent_div_8_table_1_tr_8_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const item_r4 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r16.toggleEdit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviewComponent_div_8_table_1_tr_8_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const item_r4 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r18.deleteItem(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.glNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r4.editing)("ngIfElse", _r7);
} }
function PreviewComponent_div_8_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PreviewComponent_div_8_table_1_tr_8_Template, 12, 3, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupKey_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getGlNameByGlNumber(groupKey_r1.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", groupKey_r1.value);
} }
function PreviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PreviewComponent_div_8_table_1_Template, 9, 2, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupKey_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", groupKey_r1.key.length > 0);
} }
class PreviewComponent {
    constructor(data, dialogRef, dialog, router, ledgerService, commonService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.router = router;
        this.ledgerService = ledgerService;
        this.commonService = commonService;
        this.ledgerList = [];
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        // Create separate arrays for each category
        this.currentAssets = [];
        this.nonCurrentAssets = [];
        this.currentLiabilities = [];
        this.nonCurrentLiabilities = [];
        this.equity = [];
        this.revenue = [];
        this.cogs = [];
        this.operatingExpenses = [];
        this.masterLedger = [];
        this.ledgerItems = {};
        this.allGlData = [];
        this.ledgerList = data.selectedItems;
        this.allGlData = data.allGlData;
    }
    ngOnInit() {
        this.ledgerItems = this.groupLedgerItems(this.ledgerList);
        const keysArray = Object.keys(this.ledgerItems);
        const keysString = keysArray.join(', ');
        console.log(this.allGlData.filter(item => keysString.includes(item.glNumber)));
        this.filteredData = this.allGlData.filter(item => keysString.includes(item.glNumber));
        console.log(this.filteredData);
        this.commonService.rowAdded$.subscribe(() => {
            this.ledgerItems = this.groupLedgerItems(this.ledgerList);
            const keysArray = Object.keys(this.ledgerItems);
            const keysString = keysArray.join(', ');
            console.log(this.allGlData.filter(item => keysString.includes(item.glNumber)));
            this.filteredData = this.allGlData.filter(item => keysString.includes(item.glNumber));
        });
    }
    groupLedgerItems(ledgerItems) {
        const groupedItems = {};
        console.log(ledgerItems);
        ledgerItems.forEach(item => {
            if (!groupedItems[item.parentAccount]) {
                groupedItems[item.parentAccount] = [];
            }
            groupedItems[item.parentAccount].push(item);
        });
        return groupedItems;
    }
    getGlNameByGlNumber(glNumber) {
        const matchedItem = this.filteredData.find(item => item.glNumber === glNumber);
        return matchedItem ? matchedItem.glName : ''; // Return the glName or an empty string if not found
    }
    toggleEdit(item) {
        if (!item.editing) {
            item.editing = true;
            item.editedName = item.glName;
        }
        else {
            item.editing = false;
        }
    }
    saveEditedName(item) {
        if (item.editing) {
            item.glName = item.editedName;
            item.editing = false;
        }
    }
    saveData() {
        const glNumbersAndNames = this.filteredData.reduce((acc, item) => {
            acc[item.glNumber] = item.glName;
            return acc;
        }, {});
        console.log(this.ledgerItems);
        const ledgerGlNumbersAndNames = {};
        Object.values(this.ledgerItems).forEach((group) => {
            group.forEach(item => {
                ledgerGlNumbersAndNames[item.glNumber] = item.glName;
            });
        });
        console.log(glNumbersAndNames);
        console.log(ledgerGlNumbersAndNames);
        // Create the requestBody object
        const requestBody = {
            new: Object.assign(Object.assign({}, glNumbersAndNames), ledgerGlNumbersAndNames)
        };
        this.ledgerService.addLedger(requestBody, this.currentUser.id).then((res) => {
            if (res.success) {
                console.log(res);
                window.location.reload(); // reload the page after ledger has been added to master ledger for redirecting user to master ledger page
                this.dialogRef.close();
            }
        });
    }
    deleteItem(ledgerToDelete) {
        // Get the glNumber to delete from the ledger object
        const glNumberToDelete = ledgerToDelete.glNumber;
        const parentAccount = ledgerToDelete.parentAccount;
        const updatedLedgerArray = this.ledgerItems[parentAccount].filter((entry) => entry.glNumber !== glNumberToDelete); // Explicitly assert the type
        console.log(updatedLedgerArray);
        // Update the ledgerItems object with the modified array
        this.ledgerItems[parentAccount] = updatedLedgerArray;
        // Get an array of ledger entry arrays from the ledgerList object
        // const ledgerArrays = Object.values(this.ledgerList);
        // // Iterate through each array of ledger entries
        // const indexToDelete = ledgerArrays.findIndex(
        //   (entry: any) => entry.glNumber === glNumberToDelete
        // );
        // // Delete the ledger entry if found
        // if (indexToDelete !== -1) {
        //   ledgerArrays.splice(indexToDelete, 1);
        // }
        // // Reconstruct the ledgerList object from the modified ledgerArrays
        // const updatedLedgerList: any = {}; // Using type assertion
        // Object.keys(this.ledgerList).forEach((key, index) => {
        //   updatedLedgerList[key] = ledgerArrays[index];
        // });
        // console.log(this.ledgerItems);
        // this.ledgerItems[parentAccount] = updatedLedgerList 
        // console.log(Object.values(this.ledgerItems));
        // this.commonService.notifyDataAdded()
    }
    cancel() {
        // Reset the form and submitted flag
        this.dialogRef.close();
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_ledger_service_service__WEBPACK_IMPORTED_MODULE_0__.LedgerServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
PreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], decls: 10, vars: 3, consts: [["id", "Add-Party-modal", 1, "modal-header", "pt-0"], ["type", "button", 1, "btn", "btn-cancel", "my-1", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", "my-1", 3, "click"], [1, "modal-body", 2, "overflow-y", "auto", "height", "92%"], [1, "mb-3"], [1, ""], ["class", "table-responsive", 4, "ngFor", "ngForOf"], [1, "table-responsive"], ["class", "table table-striped table-bordered bg-white", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "bg-white"], [2, "background-color", "#EBEBEB"], [1, "btn-reveal-trigger"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap"], [4, "ngFor", "ngForOf"], [2, "vertical-align", "middle", "white-space", "nowrap"], [4, "ngIf", "ngIfElse"], ["viewMode", ""], [2, "display", "flex", "justify-content", "center"], [1, "btn", "btnp", "pt-0", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "fs-1"], ["data-bs-toggle", "modal", 1, "btn", "btnp", "pt-0", 2, "color", "red", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "fs-1"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_1_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreviewComponent_Template_button_click_3_listener() { return ctx.saveData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PreviewComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 1, ctx.ledgerItems));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe], styles: [".table-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 300px) {\n  .modal-header[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxtQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1sYWJlbCBoM3tcclxuICAgIGNvbG9yOiAjRUI4QjNGO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_ledger_preview_preview_component_ts-es2015.js.map