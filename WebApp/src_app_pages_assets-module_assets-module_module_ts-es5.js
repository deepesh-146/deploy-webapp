(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_assets-module_assets-module_module_ts"], {
    /***/
    93306:
    /*!*********************************************************!*\
      !*** ./src/app/core/services/assets-service.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetsServiceService": function AssetsServiceService() {
          return (
            /* binding */
            _AssetsServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/url-constants */
      16393);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      72229);

      var _AssetsServiceService = /*#__PURE__*/function () {
        function _AssetsServiceService(httpClient) {
          _classCallCheck(this, _AssetsServiceService);

          this.httpClient = httpClient;
          this.expenseAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.assetsAdded$ = this.expenseAddedSource.asObservable();
        }

        _createClass(_AssetsServiceService, [{
          key: "notifyassetsAdded",
          value: function notifyassetsAdded() {
            this.expenseAddedSource.next();
          }
        }, {
          key: "getCurrentAssetsData",
          value: function getCurrentAssetsData(data, userId, size, page) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getCurrentAssetData + userId + "?size=" + size + "&page=" + page, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getNONCurrentAssetsData",
          value: function getNONCurrentAssetsData(data, userId, size, page) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.nonCurrentAsset + userId + "?size=" + size + "&page=" + page, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "addAssets",
          value: function addAssets(data) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.currentASSEtAdd, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "deleteAssets",
          value: function deleteAssets(data, assetId) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.DeleteCurrentAndNonCurrent + assetId, 'DELETE').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getAsseTListByledger",
          value: function getAsseTListByledger(data, userId) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.assetsName + userId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getNONCurrentAssetsDataBYId",
          value: function getNONCurrentAssetsDataBYId(data, nonassetId) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.nonCurrentAssetbYId + nonassetId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateNonCurrentAssets",
          value: function updateNonCurrentAssets(data, id) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.updateNonCurrentAsset + id, 'PUT').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "addRundeprec",
          value: function addRundeprec(data, id) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.rundeprecationPost + id, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "updateRundeprec",
          value: function updateRundeprec(data, id) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.updateRunDeprac + id, 'PUT').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getNONCurrentAssetsDataFilter",
          value: function getNONCurrentAssetsDataFilter(data, userId, size, page, search) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              _this10.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.nonCurrentAsset + userId + "?size=" + size + "&page=" + page + "&search=" + search, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getCurrentAssetsDataFilter",
          value: function getCurrentAssetsDataFilter(data, userId, search, size, page) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              _this11.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.getCurrentAssetData + userId + "?search=" + search + "&size=" + size + "&page=" + page, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }]);

        return _AssetsServiceService;
      }();

      _AssetsServiceService.ɵfac = function AssetsServiceService_Factory(t) {
        return new (t || _AssetsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
      };

      _AssetsServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AssetsServiceService,
        factory: _AssetsServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    74328:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/assets-module/asset-edit-formcompoennet/asset-edit-formcompoennet.component.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetEditFormcompoennetComponent": function AssetEditFormcompoennetComponent() {
          return (
            /* binding */
            _AssetEditFormcompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function AssetEditFormcompoennetComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetEditFormcompoennetComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Assets Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetEditFormcompoennetComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AssetEditFormcompoennetComponent = /*#__PURE__*/function () {
        function _AssetEditFormcompoennetComponent(dialogRef, formBuilder, router, toastService, titleCasePipe, assetsServiceService, assetData) {
          _classCallCheck(this, _AssetEditFormcompoennetComponent);

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

        _createClass(_AssetEditFormcompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.assetId = this.assetData.assetId;
            this.getASSETById();
            this.getASSETData();
            this.createAssetForm();
          }
        }, {
          key: "createAssetForm",
          value: function createAssetForm() {
            this.assetsEditForm = this.formBuilder.group({
              assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              toatalAmount: [""]
            });
          }
        }, {
          key: "getASSETData",
          value: function getASSETData() {
            var _this12 = this;

            this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then(function (res) {
              console.log("AssetsByLedegr", res);
              _this12.GLData = res.data.map(function (item) {
                return item.glNumber;
              });
            });
          }
        }, {
          key: "postAssetsDetails",
          value: function postAssetsDetails() {
            var _this13 = this;

            var Body = {
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
              "additionalDetails": []
            }; // let Body =
            // {
            //   "userId": this.currentUser.id,
            //   "assetsType": "CURRENT",
            //   "assetName":  this.assetsEditForm.controls.assetName.value,
            //   "date": this.assetsEditForm.controls.assetDate.value,
            //   "valueOfAsset": this.assetsEditForm.controls.toatalAmount.value,
            // }

            this.assetsServiceService.updateNonCurrentAssets(Body, this.assetId).then(function (res) {
              // this.toastService.openSnackBar("Current Assets Added Successfully!!!");
              _this13.toastService.toastMsg({
                title: "Success",
                content: 'Current Assets Updated Successfully!!!'
              });

              _this13.assetsServiceService.notifyassetsAdded();

              _this13.dialogRef.close();
            }, function (err) {
              if (err.error.expose) {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: _this13.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "f",
          get: function get() {
            return this.assetsEditForm.controls;
          }
        }, {
          key: "openDatepicker",
          value: function openDatepicker() {
            // Check if the current value of taskdate is a Date object
            var selectedDate = this.assetsEditForm.get('assetDate').value;

            if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {} else {
              // Set a default date or any valid date here
              this.assetsEditForm.get('assetDate').setValue(new Date());
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "getASSETById",
          value: function getASSETById() {
            var _this14 = this;

            this.assetsServiceService.getNONCurrentAssetsDataBYId({}, this.assetId).then(function (res) {
              _this14.assetsEditForm.patchValue({
                assetDate: res.data.date ? moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_0__(res.data.date).format("DD-MMM-YYYY"),
                assetName: res.data.assetName ? res.data.assetName : null,
                toatalAmount: res.data.valueOfAsset ? res.data.valueOfAsset : 0
              });
            });
          }
        }]);

        return _AssetEditFormcompoennetComponent;
      }();

      _AssetEditFormcompoennetComponent.ɵfac = function AssetEditFormcompoennetComponent_Factory(t) {
        return new (t || _AssetEditFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
      };

      _AssetEditFormcompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AssetEditFormcompoennetComponent,
        selectors: [["app-asset-edit-formcompoennet"]],
        decls: 35,
        vars: 9,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "9px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "assetDate", "autocomplete", "off", 1, "text-uppercase", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["matNativeControl", "", "type", "text", "placeholder", "Amount", "formControlName", "toatalAmount", 3, "keypress"], [1, "text-danger"]],
        template: function AssetEditFormcompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Current Assets");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_button_click_6_listener() {
              return ctx.postAssetsDetails();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetEditFormcompoennetComponent_Template_input_click_16_listener() {
              return ctx.openDatepicker();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetEditFormcompoennetComponent_Template_input_keypress_33_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AssetEditFormcompoennetComponent_mat_error_34_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWVkaXQtZm9ybWNvbXBvZW5uZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYXNzZXQtZWRpdC1mb3JtY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaWNvbmNhbGVuZGVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    99871:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/assets-module/asset-formcompoennet/asset-formcompoennet.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetFormcompoennetComponent": function AssetFormcompoennetComponent() {
          return (
            /* binding */
            _AssetFormcompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function AssetFormcompoennetComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Date is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AssetFormcompoennetComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Assets Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AssetFormcompoennetComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Amount is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AssetFormcompoennetComponent = /*#__PURE__*/function () {
        function _AssetFormcompoennetComponent(dialogRef, formBuilder, router, toastService, titleCasePipe, assetsServiceService) {
          _classCallCheck(this, _AssetFormcompoennetComponent);

          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.assetsServiceService = assetsServiceService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AssetFormcompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createAssetForm();
            this.getASSETData();
          }
        }, {
          key: "getASSETData",
          value: function getASSETData() {
            var _this15 = this;

            this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then(function (res) {
              console.log("AssetsByLedegr", res);
              _this15.GLData = res.data.map(function (item) {
                return item.glNumber;
              });
            });
          }
        }, {
          key: "createAssetForm",
          value: function createAssetForm() {
            this.assetsForm = this.formBuilder.group({
              assetDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              assetName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              toatalAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]] // glNumber:["",[Validators.required]]

            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.assetsForm.controls;
          }
        }, {
          key: "postAssetsDetails",
          value: function postAssetsDetails() {
            var _this16 = this;

            this.submitted = true;

            if (this.assetsForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              }); // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");

              return false;
            } else {
              var Body = {
                "userId": this.currentUser.id,
                // "glNumber": this.assetsForm.controls.glNumber.value,
                "assetsType": "CURRENT",
                "assetName": this.assetsForm.controls.assetName.value,
                "date": this.assetsForm.controls.assetDate.value,
                "valueOfAsset": this.assetsForm.controls.toatalAmount.value
              };
              this.assetsServiceService.addAssets(Body).then(function (res) {
                _this16.toastService.toastMsg({
                  title: "Success",
                  content: "Current Assets Added Successfully!!!"
                }); // this.toastService.openSnackBar("Current Assets Added Successfully!!!");


                _this16.assetsServiceService.notifyassetsAdded();

                _this16.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this16.toastService.toastMsg({
                    title: "Error",
                    content: _this16.titleCasePipe.transform(err.error.error_message)
                  }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

                } else {
                  _this16.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

                }
              });
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "openDatepicker",
          value: function openDatepicker() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.assetsForm.get('assetDate').value; // Check if selectedDate is not null or undefined and is a valid Date object

            if (selectedDate instanceof Date && !isNaN(selectedDate.getTime())) {} else {
              // Set a default date or any valid date here
              this.assetsForm.get('assetDate').setValue(new Date());
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }]);

        return _AssetFormcompoennetComponent;
      }();

      _AssetFormcompoennetComponent.ɵfac = function AssetFormcompoennetComponent_Factory(t) {
        return new (t || _AssetFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__.AssetsServiceService));
      };

      _AssetFormcompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AssetFormcompoennetComponent,
        selectors: [["app-asset-formcompoennet"]],
        decls: 41,
        vars: 9,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "500", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "assetDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", 3, "ngClass"], ["matNativeControl", "", "type", "text", "placeholder", "Amount", "formControlName", "toatalAmount", 3, "keypress"], [1, "text-danger"]],
        template: function AssetFormcompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Current Assets");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_button_click_6_listener() {
              return ctx.postAssetsDetails();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AssetFormcompoennetComponent_Template_input_click_18_listener() {
              return ctx.openDatepicker();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function AssetFormcompoennetComponent_Template_input_keypress_39_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AssetFormcompoennetComponent_mat_error_40_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUFGOztFQUdBO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6ImFzc2V0LWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uY2FsZW5kZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    24898:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/assets-module/asset-listcompoennet/asset-listcompoennet.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetListcompoennetComponent": function AssetListcompoennetComponent() {
          return (
            /* binding */
            _AssetListcompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../asset-formcompoennet/asset-formcompoennet.component */
      99871);
      /* harmony import */


      var _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../asset-edit-formcompoennet/asset-edit-formcompoennet.component */
      74328);
      /* harmony import */


      var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! exceljs/dist/exceljs.min.js */
      76453);
      /* harmony import */


      var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! file-saver */
      97797);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function AssetListcompoennetComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_tr_21_Template_button_click_12_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.openEditModel(item_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 5, item_r3.date, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.assetName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 8, item_r3.valueOfAsset, "1.2-2"), "");
        }
      }

      function AssetListcompoennetComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20, 30];
      };

      function AssetListcompoennetComponent_mat_paginator_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function AssetListcompoennetComponent_mat_paginator_23_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx_r2.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0))("length", ctx_r2.totalrow)("pageIndex", ctx_r2.currentPageNo);
        }
      }

      var _AssetListcompoennetComponent = /*#__PURE__*/function () {
        function _AssetListcompoennetComponent(dialog, assetsServiceService, toastService, titleCasePipe, datePipe) {
          _classCallCheck(this, _AssetListcompoennetComponent);

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

        _createClass(_AssetListcompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.assetsServiceService.assetsAdded$.subscribe(function () {
              _this17.getCurrentAssetsData();
            });
            this.getCurrentAssetsData();
          }
        }, {
          key: "getCurrentAssetsData",
          value: function getCurrentAssetsData() {
            var _this18 = this;

            this.assetsServiceService.getCurrentAssetsData({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              console.log("res");
              _this18.AseetData = res.data.pageData;
              _this18.p = res.data.currentPage;
              _this18.totalrow = res.data.totalrows;
              _this18.toatlPages = res.data.totalPages;
            }, function (err) {
              if (err.error.expose) {
                _this18.toastService.toastMsg({
                  title: "Error",
                  content: _this18.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this18.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "OpenAddAssets",
          value: function OpenAddAssets() {
            var dialogRef = this.dialog.open(_asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__.AssetFormcompoennetComponent, {
              width: '50%',
              height: '100vh',
              data: {},
              panelClass: 'custom-dialog-assets-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "openEditModel",
          value: function openEditModel(assetId) {
            var dialogRef = this.dialog.open(_asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_1__.AssetEditFormcompoennetComponent, {
              width: '50%',
              height: '100vh',
              data: {
                assetId: assetId
              },
              panelClass: 'custom-dialog-assets-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "getcurrentAssetsId",
          value: function getcurrentAssetsId(assetId) {
            this.assetId = assetId;
          }
        }, {
          key: "deleteAsset",
          value: function deleteAsset() {
            var _this19 = this;

            this.assetsServiceService.deleteAssets({}, this.assetId).then(function (res) {
              // this.toastService.openSnackBar("Current Assets Deleted Successfully!!!");
              _this19.toastService.toastMsg({
                title: "Success",
                content: "Current Assets Deleted Successfully!!!"
              });

              _this19.getCurrentAssetsData();
            }, function (err) {
              if (err.error.expose) {
                _this19.toastService.toastMsg({
                  title: "Error",
                  content: _this19.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this19.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.AseetData.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.getAssetListSearch(searchInput.value);
              } else {
                this.getCurrentAssetsData();
              }
            }
          }
        }, {
          key: "downlaodAllData",
          value: function downlaodAllData() {
            if (this.AseetData.length > 0) {
              this.exportToExcel();
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "No Data Available For Download"
              });
            }
          }
        }, {
          key: "exportToExcel",
          value: function exportToExcel() {
            var _this20 = this;

            console.log("EXPORT ___");
            var workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_2__.Workbook(); // const worksheet = workbook.addWorksheet('Sheet 1');

            var worksheet = workbook.addWorksheet('Sheet 1', {
              views: [{
                state: 'frozen',
                xSplit: 1,
                ySplit: 1 // Number of rows to freeze (e.g., 2 means freeze the first two rows)

              }]
            }); // Define a header style

            var headerStyle = {
              font: {
                color: {
                  argb: 'FF0000FF'
                },
                bold: true
              },
              fill: {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {
                  argb: 'FFFF00FF'
                }
              }
            }; // Define your headers

            var header1 = ['Date', 'Asset Name', 'Amount (In Rs.)']; // Apply the header style to the header row

            var headerRow1 = worksheet.addRow(header1);
            headerRow1.eachCell(function (cell) {
              cell.border = {
                top: {
                  style: 'thin'
                },
                bottom: {
                  style: 'thin'
                },
                left: {
                  style: 'thin'
                },
                right: {
                  style: 'thin'
                }
              };
              cell.fill = headerStyle.fill;
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true
              }; //  cell.width = 120
            }); // Set column widths for header cells

            worksheet.columns.forEach(function (column, index) {
              // Assuming you want a fixed width of 120 for all header columns
              column.width = 15;
            }); // Set background colors for multiple cells using a loop

            var cellBackgroundColors = [{
              cell: 'A1',
              color: 'FFB4C6E7',
              width: 5
            }, {
              cell: 'B1',
              color: 'FFB4C6E7'
            }, {
              cell: 'C1',
              color: 'FFB4C6E7'
            }];
            cellBackgroundColors.forEach(function (cellColor) {
              worksheet.getCell(cellColor.cell).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {
                  argb: cellColor.color
                }
              };
            });
            this.AseetData.forEach(function (item, index) {
              var row = [];

              var formattedInvoiceDate = _this20.datePipe.transform(item.date, 'dd MMM yyyy');

              row.push(formattedInvoiceDate ? formattedInvoiceDate : "NA");
              row.push(item.assetName ? item.assetName : "NA");
              row.push('₹ ' + (item.valueOfAsset ? parseFloat(item.valueOfAsset).toFixed(2) : '0.00'));
              worksheet.addRow(row);
              var vatCellC = worksheet.getCell('C' + worksheet.rowCount); // Set the alignment of the VAT cell to right

              vatCellC.alignment = {
                horizontal: 'right'
              };
            });
            workbook.xlsx.writeBuffer().then(function (buffer) {
              var blob = new Blob([buffer], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              });
              (0, file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, 'Current Asset.xlsx');
            });
          }
        }, {
          key: "getAssetListSearch",
          value: function getAssetListSearch(searchKey) {
            var _this21 = this;

            if (this.searchKey == "") {
              this.assetsServiceService.getCurrentAssetsDataFilter({}, this.currentUser.id, searchKey, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
                _this21.AseetData = res.data.pageData;
                _this21.p = res.data.currentPage;
                _this21.totalrow = res.data.totalrows;
                _this21.toatlPages = res.data.totalPages;
              });
            } else {
              this.assetsServiceService.getCurrentAssetsDataFilter({}, this.currentUser.id, searchKey, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
                _this21.AseetData = res.data.pageData;
                _this21.p = res.data.currentPage;
                _this21.totalrow = res.data.totalrows;
                _this21.toatlPages = res.data.totalPages;
              }, function (err) {
                if (err.error.expose) {
                  _this21.toastService.toastMsg({
                    title: "Error",
                    content: _this21.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this21.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }]);

        return _AssetListcompoennetComponent;
      }();

      _AssetListcompoennetComponent.ɵfac = function AssetListcompoennetComponent_Factory(t) {
        return new (t || _AssetListcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_4__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
      };

      _AssetListcompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _AssetListcompoennetComponent,
        selectors: [["app-asset-listcompoennet"]],
        decls: 40,
        vars: 4,
        consts: [[1, "row", "headerButtons"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Assets Name", 1, "form-control", "pe-5", "my-2", "mx-0", 3, "ngModel", "ngModelChange", "change"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-download"], [2, "width", "100%", "overflow-x", "auto", "margin-top", "8px"], [1, "table", "table-responsive", "table-striped", "fs--1", "mb-0"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right", "width", "150px"], ["class", "btn-reveal-trigger text-left ", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["sticky", "", "class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], [1, "text-nowrap", 2, "vertical-align", "middle", "white-space", "nowrap"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], [1, "text-nowrap", 2, "text-align", "center!important", "vertical-align", "middle"], [1, "flex"], [1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["sticky", "", "showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function AssetListcompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AssetListcompoennetComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.searchKey = $event;
            })("change", function AssetListcompoennetComponent_Template_input_change_2_listener() {
              return ctx.getAssetListSearch(ctx.searchKey);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_button_click_4_listener() {
              return ctx.OpenAddAssets();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Current Assets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_button_click_7_listener() {
              return ctx.downlaodAllData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Assets Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AssetListcompoennetComponent_tr_21_Template, 14, 11, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AssetListcompoennetComponent_tbody_22_Template, 4, 0, "tbody", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AssetListcompoennetComponent_mat_paginator_23_Template, 1, 5, "mat-paginator", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Delete Current Asset? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "h4", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Are you sure to delete current Asset?");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AssetListcompoennetComponent_Template_a_click_38_listener() {
              return ctx.deleteAsset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.AseetData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.AseetData.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.AseetData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
        styles: ["td[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n  custom-dialog-assets-class {\n  height: 100vh !important;\n  margin-left: 35% !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n  padding: 0;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 360px;\n}\n\n@media screen and (max-width: 768px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LWxpc3Rjb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDRyxtQkFBQTtFQUNELGVBQUE7QUFFTjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUQ1Qzs7QUFLRTtFQUNFLFdBQUE7QUFGSjs7QUFDRTtFQUNFLFdBQUE7QUFGSjs7QUFJRTtFQUNFLHdCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBUUE7RUFDRTtJQUNFLHVCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJhc3NldC1saXN0Y29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJTZWFyY2hCYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICB9XHJcbiAgLnRib2R5LCB0ZCwgdGZvb3QsIHRoLCB0aGVhZCwgdHIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLy8gYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgLy9jb2xvcjogaW5oZXJpdDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBjdXN0b20tZGlhbG9nLWFzc2V0cy1jbGFzc3tcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSUgIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbi5oZWFkZXJCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgZmxleC1iYXNpczogMjQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm1CdXR0b25zIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtYmFzaXM6IDM2MHB4O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    31046:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/assets-module/asset-non-formcompoennet/asset-non-formcompoennet.component.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetNonFormcompoennetComponent": function AssetNonFormcompoennetComponent() {
          return (
            /* binding */
            _AssetNonFormcompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function AssetNonFormcompoennetComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Assets Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Value of Assets is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Scrap Value is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Payment Mode is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_ng_container_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keypress_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.alphaOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keyup_enter_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.addAddtionalDetails();
          })("keypress", function AssetNonFormcompoennetComponent_ng_container_78_Template_input_keypress_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_ng_container_78_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var group_r10 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.deleteaddAddtionalDetails(group_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r11 + 1);
        }
      }

      function AssetNonFormcompoennetComponent_div_115_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Depreciation %");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_div_115_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Useful Life");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.nonAssetsForm.get("assetsMethod").value == "Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.nonAssetsForm.get("assetsMethod").value == "Simple");
        }
      }

      function AssetNonFormcompoennetComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_116_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_div_117_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enter Depreciation %");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_117_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AssetNonFormcompoennetComponent_div_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Enter Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_div_119_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r23.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _AssetNonFormcompoennetComponent = /*#__PURE__*/function () {
        function _AssetNonFormcompoennetComponent(formBuilder, router, toastService, titleCasePipe, dialogRef, cdr, assetsServiceService, productService) {
          _classCallCheck(this, _AssetNonFormcompoennetComponent);

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
          this.ranges = [{
            value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
            label: 'Last 7 Days'
          }, {
            value: [new Date(new Date().setDate(new Date().getMonth() - 1)), new Date()],
            label: 'Last Month'
          }];
          this.today = new Date();
          this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
          this.selectedYear = new Date().getFullYear();
        }

        _createClass(_AssetNonFormcompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createnonAseetsForm();
            this.getASSETData();
            this.todaysDate = new Date();
          }
        }, {
          key: "createnonAseetsForm",
          value: function createnonAseetsForm() {
            var _this22 = this;

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
              addtionalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([this.createaddtionalDetails()])
            });
            this.additionalDetailsControls.valueChanges.subscribe(function (data) {
              _this22.toatalAmount = data.reduce(function (a, b) {
                return a + +b.amount;
              }, 0);

              _this22.updateTotalCostOfAssets();
            }); // Subscribe to value changes of valueOfAssets control

            this.nonAssetsForm.get('valueOfAssets').valueChanges.subscribe(function () {
              _this22.updateTotalCostOfAssets();
            });
          }
        }, {
          key: "updateTotalCostOfAssets",
          value: function updateTotalCostOfAssets() {
            var valueOfAssets = parseFloat(this.nonAssetsForm.get('valueOfAssets').value);
            console.log('valueOfAssets value -->', valueOfAssets);
            var allTotal = 0; // Initialize to 0

            if (!isNaN(valueOfAssets)) {
              allTotal = valueOfAssets; // Set to valueOfAssets if it's a valid number
            }

            if (true) {
              var toatalAmount = parseFloat(this.toatalAmount); // Parse toatalAmount if needed

              console.log('toatalAmount value -->', toatalAmount);

              if (!isNaN(toatalAmount)) {
                allTotal += toatalAmount; // Add toatalAmount if it's a valid number
              }
            }

            console.log('allTotal value -->', allTotal);
            this.nonAssetsForm.patchValue({
              costOfAssets: allTotal
            });
          }
        }, {
          key: "alphaOnly",
          value: function alphaOnly(event) {
            var charCode = event.which ? event.which : event.keyCode; // Allow alphabets (a-z, A-Z) and space (charCode 32)

            if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 || charCode === 32) {
              return true;
            }

            return false;
          }
        }, {
          key: "getASSETData",
          value: function getASSETData() {
            var _this23 = this;

            this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then(function (res) {
              console.log("AssetsByLedegr", res);
              _this23.GLData = res.data.map(function (item) {
                return item.glNumber;
              });
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.nonAssetsForm.controls;
          }
        }, {
          key: "createaddtionalDetails",
          value: function createaddtionalDetails() {
            // this.cdr.detectChanges();
            try {
              return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(""),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("")
              });
            } catch (e) {}
          }
        }, {
          key: "additionalDetailsControls",
          get: function get() {
            try {
              return this.nonAssetsForm.get('addtionalDetails');
            } catch (e) {}
          }
        }, {
          key: "addAddtionalDetails",
          value: function addAddtionalDetails() {
            try {
              var data = this.nonAssetsForm.get('addtionalDetails');
              data.push(this.createaddtionalDetails());
              this.cdr.detectChanges();
            } catch (e) {
              console.log(e);
            }
          }
        }, {
          key: "deleteaddAddtionalDetails",
          value: function deleteaddAddtionalDetails(index) {
            var data = this.nonAssetsForm.get('addtionalDetails');

            if (data.length > 0) {
              data.removeAt(data.length - 1); // Remove the last element
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "postnonAsseTsForm",
          value: function postnonAsseTsForm() {
            var _this24 = this;

            this.submitted = true;
            this.formArrayData = this.additionalDetailsControls.value;

            if (this.nonAssetsForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              var Body = {
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
                "additionalDetails": this.formArrayData
              };
              this.assetsServiceService.addAssets(Body).then(function (res) {
                _this24.toastService.toastMsg({
                  title: "Success",
                  content: 'Non Current Assets Added Successfully!!!'
                });

                _this24.assetsServiceService.notifyassetsAdded();

                _this24.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this24.toastService.toastMsg({
                    title: "Error",
                    content: _this24.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this24.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "documentChange",
          value: function documentChange(e) {
            var _this25 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Select Image To Upload."
                });
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this25.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this25.productPicUrl);
                });
              }
            }
          }
        }, {
          key: "openDatepicker",
          value: function openDatepicker() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.nonAssetsForm.get('assetDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.nonAssetsForm.get('assetDate').setValue(new Date());
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }]);

        return _AssetNonFormcompoennetComponent;
      }();

      _AssetNonFormcompoennetComponent.ɵfac = function AssetNonFormcompoennetComponent_Factory(t) {
        return new (t || _AssetNonFormcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_1__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
      };

      _AssetNonFormcompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AssetNonFormcompoennetComponent,
        selectors: [["app-asset-non-formcompoennet"]],
        decls: 120,
        vars: 18,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "assetDate", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "ngModel", "maxDate", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["matNativeControl", "", "type", "text", "placeholder", "Value of Assets (in \u20B9)", "formControlName", "valueOfAssets", 3, "keypress"], ["matNativeControl", "", "type", "text", "placeholder", "Scrap Value (in \u20B9)", "formControlName", "scrapValue", 3, "keypress"], [1, "row", "mb-3"], ["required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Payment Mode", "formControlName", "paymentMode"], ["value", "Cash"], ["value", "Bank"], ["value", "Credit"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], [1, "form-label", "mb-5"], [1, "row", "mt-2"], [1, "table-responsive"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center", "inner-model-table-heading", "bg-white"], [1, "p-2", 2, "width", "10% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "width", "50% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "text-align", "center", "vertical-align", "middle"], ["formArrayName", "addtionalDetails", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-end", "mt-2"], [1, "col-sm-12", "col-md-6", "col-lg-6", "text-nowrap", "mb-1", "d-grid"], [1, "btn", "btn-outline-warning", "dash", "fs--1", 3, "click"], ["id", "boot-icon", 1, "bi", "bi-plus-lg", "newrow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add Row", 1, "me-2", "fs--1", "text-black", "newrow"], [1, "col-md-6", "col-sm-12", "col-lg-3", "col-xl-3"], [1, "form-label", 2, "margin-top", "20px"], [1, "col-md-6", "col-sm-12", "col-lg-4", "col-xl-4"], ["appearance", "outline", 1, "example-full-width", "bg-light"], ["matNativeControl", "", "type", "text", "readonly", "", "disabled", "", "placeholder", "Cost of Assets (in \u20B9)", "formControlName", "costOfAssets", 1, "disbaleFieldBg", 3, "keypress"], [1, "mb-3"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12", "px-0", "mx-0", 2, "width", "225px"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 1, "inputImageUpload", "px-0", 2, "margin-left", "16px", "margin-top", "6px", 3, "change"], [1, "col-md-6", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "form-check", "form-switch", "mb-0"], ["id", "customSwitch1", "type", "checkbox", "formControlName", "depreciation", 1, "form-check-input"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Method Name", "formControlName", "assetsMethod"], ["value", "Simple"], ["value", "WDM"], ["class", "col-md-6 col-sm-12 col-lg-6 col-xl-6", 4, "ngIf"], [1, "text-danger"], ["formArrayName", "addtionalDetails"], [3, "formGroupName"], [2, "vertical-align", "middle", "text-align", "center", "padding", "9px"], [2, "vertical-align", "middle", "text-align", "center"], ["matNativeControl", "", "required", "", "matInput", "", "type", "text", "autocomplete", "off", "required", "", "formControlName", "name", 3, "keypress"], ["matInput", "", "type", "text", "formControlName", "amount", 3, "keyup.enter", "keypress"], [1, "Icons", 2, "vertical-align", "middle", "text-align", "center"], ["type", "button", 1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Process Name", "formControlName", "assetProcess"], ["value", "Depreciation", 4, "ngIf"], ["value", "Useful Life", 4, "ngIf"], ["value", "Depreciation"], ["value", "Useful Life"], ["matNativeControl", "", "type", "text", "placeholder", "Enter Amount", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Depreciation %", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Enter Year", "formControlName", "assetsYear", 3, "keypress"]],
        template: function AssetNonFormcompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Non Current Assets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_button_click_6_listener() {
              return ctx.postnonAsseTsForm();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AssetNonFormcompoennetComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.todaysDate = $event;
            })("click", function AssetNonFormcompoennetComponent_Template_input_click_24_listener() {
              return ctx.openDatepicker();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_36_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_44_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AssetNonFormcompoennetComponent_Template_a_click_81_listener() {
              return ctx.addAddtionalDetails();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AssetNonFormcompoennetComponent_Template_input_keypress_91_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AssetNonFormcompoennetComponent_Template_input_change_97_listener($event) {
              return ctx.documentChange($event);
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.inputImageUpload[_ngcontent-%COMP%] {\n  border: 1px solid #d6d2d2;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LW5vbi1mb3JtY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBSEY7O0VBTUE7SUFDRSxnQkFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoiYXNzZXQtbm9uLWZvcm1jb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uY2FsZW5kZXJ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW5wdXRJbWFnZVVwbG9hZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIxMCwgMjEwKTtcclxuICB9XHJcbiAgLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQ6cmVhZC1vbmx5e1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    28309:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/assets-module/asset-non-listcompoennet/asset-non-listcompoennet.component.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetNonListcompoennetComponent": function AssetNonListcompoennetComponent() {
          return (
            /* binding */
            _AssetNonListcompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../asset-non-formcompoennet/asset-non-formcompoennet.component */
      31046);
      /* harmony import */


      var _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../non-asset-edit-form/non-asset-edit-form.component */
      72730);
      /* harmony import */


      var _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../run-depraciation-component/run-depraciation-component.component */
      93082);
      /* harmony import */


      var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! exceljs/dist/exceljs.min.js */
      76453);
      /* harmony import */


      var exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! file-saver */
      97797);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function AssetNonListcompoennetComponent_tr_26_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r4.roundDepreciationValue(item_r3.MonthlyDeprication), "1.2-2"), " ");
        }
      }

      function AssetNonListcompoennetComponent_tr_26_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r5.roundDepreciationValue(item_r3.quaterlyDeprication), "1.2-2"), " ");
        }
      }

      function AssetNonListcompoennetComponent_tr_26_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r6.roundDepreciationValue(item_r3.Yearlydepreciation), "1.2-2"), " ");
        }
      }

      function AssetNonListcompoennetComponent_tr_26_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, ctx_r7.roundDepreciationValue(item_r3.halfYearlyDeprication), "1.2-2"), " ");
        }
      }

      function AssetNonListcompoennetComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AssetNonListcompoennetComponent_tr_26_span_11_Template, 3, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AssetNonListcompoennetComponent_tr_26_span_12_Template, 3, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AssetNonListcompoennetComponent_tr_26_span_13_Template, 3, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AssetNonListcompoennetComponent_tr_26_span_14_Template, 3, 4, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_tr_26_Template_button_click_20_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.openEditModel(item_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 10, item_r3.date, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3.assetName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 13, item_r3.valueOfAsset, "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isMonthly);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isQuarterly);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isYearly);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isHalfYearly);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](17, 16, item_r3.costOfAsset, "1.2-2"), "");
        }
      }

      function AssetNonListcompoennetComponent_tbody_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20, 30];
      };

      function AssetNonListcompoennetComponent_mat_paginator_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-paginator", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function AssetNonListcompoennetComponent_mat_paginator_28_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r14.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx_r2.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0))("length", ctx_r2.totalrow)("pageIndex", ctx_r2.currentPageNo);
        }
      }

      var _AssetNonListcompoennetComponent = /*#__PURE__*/function () {
        function _AssetNonListcompoennetComponent(dialog, assetsServiceService, toastService, titleCasePipe, datePipe) {
          _classCallCheck(this, _AssetNonListcompoennetComponent);

          this.dialog = dialog;
          this.assetsServiceService = assetsServiceService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.datePipe = datePipe;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.NonAseetData = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.p = 1;
          this.pagesize = 1;
          this.isQuarterly = false;
          this.isYearly = false;
          this.isHalfYearly = false;
          this.isMonthly = false;
        }

        _createClass(_AssetNonListcompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.assetsServiceService.assetsAdded$.subscribe(function () {
              _this26.getNonAssetData();
            });
            this.getNonAssetData();
          }
        }, {
          key: "OpenRunDepreciation",
          value: function OpenRunDepreciation() {
            var dialogRef = this.dialog.open(_run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_2__.RunDepraciationComponentComponent, {
              width: '35%',
              height: 'auto',
              data: {},
              panelClass: 'custom-dialog-assets-class',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "nonAssetsAddForm",
          value: function nonAssetsAddForm() {
            var dialogRef = this.dialog.open(_asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_0__.AssetNonFormcompoennetComponent, {
              width: '55%',
              height: '100vh',
              data: {},
              panelClass: 'custom-dialog-assets-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "openEditModel",
          value: function openEditModel(NonassetId) {
            var dialogRef = this.dialog.open(_non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_1__.NonAssetEditFormComponent, {
              width: '55%',
              height: '100vh',
              data: {
                NonassetId: NonassetId
              },
              panelClass: 'custom-dialog-assets-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "getNonAssetData",
          value: function getNonAssetData() {
            var _this27 = this;

            this.assetsServiceService.getNONCurrentAssetsData({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              var _a;

              _this27.NonAseetData = res.data.totalDecriptionValue;
              _this27.p = res.data.currentPage;
              _this27.totalrow = res.data.totalrows;
              _this27.toatlPages = res.data.totalPages;

              if (res.success) {
                _this27.Depreciation = (_a = res.data) === null || _a === void 0 ? void 0 : _a.equipmentSetting;

                if (_this27.Depreciation) {
                  _this27.isMonthly = _this27.Depreciation.monthly, _this27.isQuarterly = _this27.Depreciation.quaterly, _this27.isYearly = _this27.Depreciation.yearly, _this27.isHalfYearly = _this27.Depreciation.halfyearly;
                }
              }
            }, function (err) {
              if (err.error.expose || err.status == 404) {
                _this27.NonAseetData = [];

                _this27.toastService.toastMsg({
                  title: "Error",
                  content: _this27.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this27.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "getAssetsId",
          value: function getAssetsId(aseetId) {
            this.aseetId = aseetId;
          }
        }, {
          key: "deleteAsset",
          value: function deleteAsset() {
            var _this28 = this;

            this.assetsServiceService.deleteAssets({}, this.aseetId).then(function (res) {
              _this28.toastService.toastMsg({
                title: "Success",
                content: "Non Current Assets Deleted Successfully!!!"
              }); // this.toastService.openSnackBar("Non Current Assets Deleted Successfully!!!");


              _this28.getNonAssetData();
            }, function (err) {
              if (err.error.expose) {
                _this28.toastService.toastMsg({
                  title: "Error",
                  content: _this28.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this28.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "roundDepreciationValue",
          value: function roundDepreciationValue(value) {
            return value - Math.floor(value) >= 0.5 ? Math.ceil(value) : Math.floor(value);
          }
        }, {
          key: "downlaodAllData",
          value: function downlaodAllData() {
            if (this.NonAseetData.length > 0) {
              this.exportToExcel();
            } else {
              this.toastService.toastMsg({
                title: "Error",
                content: "No Data Available For Download"
              });
            }
          }
        }, {
          key: "exportToExcel",
          value: function exportToExcel() {
            var _this29 = this;

            console.log("EXPORT ___");
            var workbook = new exceljs_dist_exceljs_min_js__WEBPACK_IMPORTED_MODULE_3__.Workbook(); // const worksheet = workbook.addWorksheet('Sheet 1');

            var worksheet = workbook.addWorksheet('Sheet 1', {
              views: [{
                state: 'frozen',
                xSplit: 2,
                ySplit: 2 // Number of rows to freeze (e.g., 2 means freeze the first two rows)

              }]
            }); // Define a header style

            var headerStyle = {
              font: {
                color: {
                  argb: 'FF0000FF'
                },
                bold: true
              },
              fill: {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {
                  argb: 'FFFF00FF'
                }
              }
            }; // Define your headers

            var header1 = ['Assets Details', '', '', '', '', 'Depreciation', '', ''];
            var headers2 = ['Assets Name', 'Purchase Date', 'Purchase Value', 'Scrap Value', 'Additional Cost', 'Method', 'Process', 'Value']; // Apply the header style to the header row

            var headerRow1 = worksheet.addRow(header1);
            var headerRow2 = worksheet.addRow(headers2);
            worksheet.mergeCells('A1:E1');
            worksheet.mergeCells('F1:H1');
            headerRow1.eachCell(function (cell) {
              cell.border = {
                top: {
                  style: 'thin'
                },
                bottom: {
                  style: 'thin'
                },
                left: {
                  style: 'thin'
                },
                right: {
                  style: 'thin'
                }
              };
              cell.fill = headerStyle.fill;
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true
              }; //  cell.width = 120
            });
            headerRow2.eachCell(function (cell) {
              cell.border = {
                top: {
                  style: 'thin'
                },
                bottom: {
                  style: 'thin'
                },
                left: {
                  style: 'thin'
                },
                right: {
                  style: 'thin'
                }
              };
              cell.fill = headerStyle.fill;
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true
              }; //  cell.width = 120
            }); // Set column widths for header cells

            worksheet.columns.forEach(function (column, index) {
              // Assuming you want a fixed width of 120 for all header columns
              column.width = 15;
            }); // Set background colors for multiple cells using a loop

            var cellBackgroundColors = [{
              cell: 'A1',
              color: 'FFC6E0B4',
              width: 5
            }, {
              cell: 'B1',
              color: 'FFB4C6E7'
            }, {
              cell: 'C1',
              color: 'FFB4C6E7'
            }, {
              cell: 'D1',
              color: 'FFB4C6E7'
            }, {
              cell: 'E1',
              color: 'FFB4C6E7'
            }, {
              cell: 'F1',
              color: 'FFC6E0B4'
            }, {
              cell: 'G1',
              color: 'FFC6E0B4'
            }, {
              cell: 'H1',
              color: 'FFC6E0B4'
            }, {
              cell: 'A2',
              color: 'FFB4C6E7',
              width: 5
            }, {
              cell: 'B2',
              color: 'FFB4C6E7'
            }, {
              cell: 'C2',
              color: 'FFB4C6E7'
            }, {
              cell: 'D2',
              color: 'FFB4C6E7'
            }, {
              cell: 'E2',
              color: 'FFB4C6E7'
            }, {
              cell: 'F2',
              color: 'FFC6E0B4'
            }, {
              cell: 'G2',
              color: 'FFC6E0B4'
            }, {
              cell: 'H2',
              color: 'FFC6E0B4'
            } // FF8DB4E2- blue color code  FFFFC4D5 Orange
            ];
            cellBackgroundColors.forEach(function (cellColor) {
              worksheet.getCell(cellColor.cell).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {
                  argb: cellColor.color
                }
              };
            });
            this.NonAseetData.forEach(function (item, index) {
              var row = [];
              row.push(item.assetName ? item.assetName : 'NA');

              var formattedInvoiceDate = _this29.datePipe.transform(item.date, 'dd MMM yyyy');

              row.push(formattedInvoiceDate ? formattedInvoiceDate : "NA");
              row.push(item.valueOfAsset ? parseFloat(item.valueOfAsset).toFixed(2) : 0.00);
              row.push(item.scrapValue ? parseFloat(item.scrapValue).toFixed(2) : 0.00);
              row.push(item.costOfAsset ? parseFloat(item.costOfAsset).toFixed(2) : 0.00);
              row.push(item.method ? item.method : 'NA');
              row.push(item.process ? item.process : 'NA');
              row.push(item.costOfAsset ? parseFloat(item.costOfAsset).toFixed(2) : 0.00);
              worksheet.addRow(row);
              var vatCellC = worksheet.getCell('C' + worksheet.rowCount); // Set the alignment of the VAT cell to right

              vatCellC.alignment = {
                horizontal: 'right'
              };
              var vatCellD = worksheet.getCell('D' + worksheet.rowCount); // Set the alignment of the VAT cell to right

              vatCellD.alignment = {
                horizontal: 'right'
              };
              var vatCellE = worksheet.getCell('E' + worksheet.rowCount); // Set the alignment of the VAT cell to right

              vatCellE.alignment = {
                horizontal: 'right'
              };
              var vatCellH = worksheet.getCell('H' + worksheet.rowCount); // Set the alignment of the VAT cell to right

              vatCellH.alignment = {
                horizontal: 'right'
              };
            });
            workbook.xlsx.writeBuffer().then(function (buffer) {
              var blob = new Blob([buffer], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              });
              (0, file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, 'Non Assets.xlsx');
            });
          }
        }, {
          key: "getAssetListSearch",
          value: function getAssetListSearch(searchKey) {
            var _this30 = this;

            if (this.searchKey == "") {
              this.assetsServiceService.getNONCurrentAssetsDataFilter({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1, searchKey).then(function (res) {
                _this30.NonAseetData = res.data.totalDecriptionValue;
                _this30.p = res.data.currentPage;
                _this30.totalrow = res.data.totalrows;
                _this30.toatlPages = res.data.totalPages;
              });
            } else {
              this.assetsServiceService.getNONCurrentAssetsDataFilter({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1, searchKey).then(function (res) {
                _this30.NonAseetData = res.data.totalDecriptionValue;
                _this30.p = res.data.currentPage;
                _this30.totalrow = res.data.totalrows;
                _this30.toatlPages = res.data.totalPages;
              }, function (err) {
                if (err.error.expose) {
                  _this30.toastService.toastMsg({
                    title: "Error",
                    content: _this30.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this30.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.NonAseetData.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.getAssetListSearch(searchInput.value);
              } else {
                this.getNonAssetData();
              }
            }
          }
        }]);

        return _AssetNonListcompoennetComponent;
      }();

      _AssetNonListcompoennetComponent.ɵfac = function AssetNonListcompoennetComponent_Factory(t) {
        return new (t || _AssetNonListcompoennetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_5__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_6__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe));
      };

      _AssetNonListcompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _AssetNonListcompoennetComponent,
        selectors: [["app-asset-non-listcompoennet"]],
        decls: 45,
        vars: 4,
        consts: [[1, "row", "headerButtons"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Assets Name", 1, "form-control", "pe-5", "my-2", "mx-0", 3, "ngModel", "ngModelChange", "change"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], ["type", "button", 1, "btn", "text-nowrap", "my-2", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "fas", "fa-download"], [2, "width", "100%", "overflow-x", "auto", "margin-top", "8px"], [1, "table", "table-responsive", "table-striped", "fs--1", "mb-0"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle", "text-align", "right"], ["class", "btn-reveal-trigger text-left ", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["sticky", "", "class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], [2, "vertical-align", "middle"], [2, "vertical-align", "middle", "text-align", "right"], [1, "text-nowrap", 2, "text-align", "right !important", "vertical-align", "middle"], [1, "flex"], [1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["sticky", "", "showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function AssetNonListcompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AssetNonListcompoennetComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.searchKey = $event;
            })("change", function AssetNonListcompoennetComponent_Template_input_change_2_listener() {
              return ctx.getAssetListSearch(ctx.searchKey);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_4_listener() {
              return ctx.nonAssetsAddForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Add Non Current Assets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_7_listener() {
              return ctx.OpenRunDepreciation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Run Depreciation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_button_click_9_listener() {
              return ctx.downlaodAllData();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, AssetNonListcompoennetComponent_mat_paginator_28_Template, 1, 5, "mat-paginator", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " Delete Non Current Asset? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "h4", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Are you sure to delete non current Asset?");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AssetNonListcompoennetComponent_Template_a_click_43_listener() {
              return ctx.deleteAsset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchKey);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.NonAseetData);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.NonAseetData.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.NonAseetData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
        styles: ["td[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.tbody[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n  custom-dialog-assets-class {\n  height: 100vh !important;\n  margin-left: 35% !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n  padding: 0;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 420px;\n}\n\n@media screen and (max-width: 800px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0LW5vbi1saXN0Y29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0csbUJBQUE7RUFDRCxlQUFBO0FBRU47O0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFFRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUtBLDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFENUM7O0FBS0U7RUFDRSxXQUFBO0FBRko7O0FBQ0U7RUFDRSxXQUFBO0FBRko7O0FBSUU7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVNBO0VBQ0U7SUFDRSx1QkFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoiYXNzZXQtbm9uLWxpc3Rjb21wb2VubmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xyXG4gIHBhZGRpbmc6IDlweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclNlYXJjaEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gIH1cclxuICAudGJvZHksIHRkLCB0Zm9vdCwgdGgsIHRoZWFkLCB0ciB7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICB9XHJcbiAgOjpuZy1kZWVwIGN1c3RvbS1kaWFsb2ctYXNzZXRzLWNsYXNze1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuXHJcbi5oZWFkZXJCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgZmxleC1iYXNpczogMjQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm1CdXR0b25zIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtYmFzaXM6IDQyMHB4O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    89951:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/assets-module/assets-module-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetsModuleRoutingModule": function AssetsModuleRoutingModule() {
          return (
            /* binding */
            _AssetsModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maincompoennet/maincompoennet.component */
      82849);
      /* harmony import */


      var _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./asset-listcompoennet/asset-listcompoennet.component */
      24898);
      /* harmony import */


      var _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./asset-non-listcompoennet/asset-non-listcompoennet.component */
      28309);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_0__.MaincompoennetComponent,
        children: [{
          path: '',
          redirectTo: 'aseets-list',
          pathMatch: 'full'
        }, {
          path: "aseets-list",
          component: _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_1__.AssetListcompoennetComponent
        }, {
          path: "non-aseets-list",
          component: _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__.AssetNonListcompoennetComponent
        }]
      }];

      var _AssetsModuleRoutingModule = /*#__PURE__*/_createClass(function _AssetsModuleRoutingModule() {
        _classCallCheck(this, _AssetsModuleRoutingModule);
      });

      _AssetsModuleRoutingModule.ɵfac = function AssetsModuleRoutingModule_Factory(t) {
        return new (t || _AssetsModuleRoutingModule)();
      };

      _AssetsModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AssetsModuleRoutingModule
      });
      _AssetsModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AssetsModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    29886:
    /*!*************************************************************!*\
      !*** ./src/app/pages/assets-module/assets-module.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AssetsModuleModule": function AssetsModuleModule() {
          return (
            /* binding */
            _AssetsModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assets-module-routing.module */
      89951);
      /* harmony import */


      var _maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maincompoennet/maincompoennet.component */
      82849);
      /* harmony import */


      var _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./asset-listcompoennet/asset-listcompoennet.component */
      24898);
      /* harmony import */


      var _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./asset-non-listcompoennet/asset-non-listcompoennet.component */
      28309);
      /* harmony import */


      var _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./asset-non-formcompoennet/asset-non-formcompoennet.component */
      31046);
      /* harmony import */


      var _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./asset-formcompoennet/asset-formcompoennet.component */
      99871);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./asset-edit-formcompoennet/asset-edit-formcompoennet.component */
      74328);
      /* harmony import */


      var _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./non-asset-edit-form/non-asset-edit-form.component */
      72730);
      /* harmony import */


      var _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./run-depraciation-component/run-depraciation-component.component */
      93082);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AssetsModuleModule = /*#__PURE__*/_createClass(function _AssetsModuleModule() {
        _classCallCheck(this, _AssetsModuleModule);
      });

      _AssetsModuleModule.ɵfac = function AssetsModuleModule_Factory(t) {
        return new (t || _AssetsModuleModule)();
      };

      _AssetsModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _AssetsModuleModule
      });
      _AssetsModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssetsModuleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_AssetsModuleModule, {
          declarations: [_maincompoennet_maincompoennet_component__WEBPACK_IMPORTED_MODULE_1__.MaincompoennetComponent, _asset_listcompoennet_asset_listcompoennet_component__WEBPACK_IMPORTED_MODULE_2__.AssetListcompoennetComponent, _asset_non_listcompoennet_asset_non_listcompoennet_component__WEBPACK_IMPORTED_MODULE_3__.AssetNonListcompoennetComponent, _asset_non_formcompoennet_asset_non_formcompoennet_component__WEBPACK_IMPORTED_MODULE_4__.AssetNonFormcompoennetComponent, _asset_formcompoennet_asset_formcompoennet_component__WEBPACK_IMPORTED_MODULE_5__.AssetFormcompoennetComponent, _asset_edit_formcompoennet_asset_edit_formcompoennet_component__WEBPACK_IMPORTED_MODULE_7__.AssetEditFormcompoennetComponent, _non_asset_edit_form_non_asset_edit_form_component__WEBPACK_IMPORTED_MODULE_8__.NonAssetEditFormComponent, _run_depraciation_component_run_depraciation_component_component__WEBPACK_IMPORTED_MODULE_9__.RunDepraciationComponentComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _assets_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssetsModuleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    82849:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/assets-module/maincompoennet/maincompoennet.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaincompoennetComponent": function MaincompoennetComponent() {
          return (
            /* binding */
            _MaincompoennetComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _MaincompoennetComponent = /*#__PURE__*/function () {
        function _MaincompoennetComponent() {
          _classCallCheck(this, _MaincompoennetComponent);
        }

        _createClass(_MaincompoennetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MaincompoennetComponent;
      }();

      _MaincompoennetComponent.ɵfac = function MaincompoennetComponent_Factory(t) {
        return new (t || _MaincompoennetComponent)();
      };

      _MaincompoennetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MaincompoennetComponent,
        selectors: [["app-maincompoennet"]],
        decls: 14,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "px-3", "pt-3", "bg-white"], ["id", "navPanel", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./aseets-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], ["routerLink", "./non-aseets-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function MaincompoennetComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluY29tcG9lbm5ldC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    72730:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/assets-module/non-asset-edit-form/non-asset-edit-form.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NonAssetEditFormComponent": function NonAssetEditFormComponent() {
          return (
            /* binding */
            _NonAssetEditFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function NonAssetEditFormComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Assets Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Value of Assets is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Scrap Value is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Payment Mode is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_ng_container_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_ng_container_78_Template_input_keypress_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.alphaOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function NonAssetEditFormComponent_ng_container_78_Template_input_keyup_enter_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.addAddtionalDetails();
          })("keypress", function NonAssetEditFormComponent_ng_container_78_Template_input_keypress_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_ng_container_78_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var group_r11 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.deleteaddAddtionalDetails(group_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r12 + 1);
        }
      }

      function NonAssetEditFormComponent_div_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_div_79_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.addAddtionalDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Add New Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_div_110_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Depreciation %");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_div_110_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Useful Life");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_div_110_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.nonAssetsForm.get("assetsMethod").value == "Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.nonAssetsForm.get("assetsMethod").value == "Simple");
        }
      }

      function NonAssetEditFormComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enter Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_111_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r22.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_div_112_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Enter Depreciation %");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_112_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r24.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function NonAssetEditFormComponent_div_114_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enter Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_div_114_Template_input_keypress_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r26.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _c1 = function _c1() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _NonAssetEditFormComponent = /*#__PURE__*/function () {
        function _NonAssetEditFormComponent(formBuilder, router, toastService, titleCasePipe, dialogRef, cdr, assetsServiceService, productService, NonassetData) {
          _classCallCheck(this, _NonAssetEditFormComponent);

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
          this.ranges = [{
            value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
            label: 'Last 7 Days'
          }, {
            value: [new Date(new Date().setDate(new Date().getMonth() - 1)), new Date()],
            label: 'Last Month'
          }];
          this.today = new Date();
          this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
          this.selectedYear = new Date().getFullYear();
        }

        _createClass(_NonAssetEditFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nonassetId = this.NonassetData.NonassetId;
            this.getASSETData();
            this.getASSETById();
            this.createnonAseetsForm();
            this.todaysDate = new Date();
          }
        }, {
          key: "createnonAseetsForm",
          value: function createnonAseetsForm() {
            var _this31 = this;

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
              addtionalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArray([])
            });
            this.additionalDetailsControls.valueChanges.subscribe(function (data) {
              _this31.toatalAmount = data.reduce(function (a, b) {
                return a + +b.amount;
              }, 0);

              _this31.updateTotalCostOfAssets();
            }); // Subscribe to value changes of valueOfAssets control

            this.nonAssetsForm.get('valueOfAssets').valueChanges.subscribe(function () {
              _this31.updateTotalCostOfAssets();
            });
          }
        }, {
          key: "alphaOnly",
          value: function alphaOnly(event) {
            var charCode = event.which ? event.which : event.keyCode; // Allow alphabets (a-z, A-Z) and space (charCode 32)

            if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 || charCode === 32) {
              return true;
            }

            return false;
          }
        }, {
          key: "updateTotalCostOfAssets",
          value: function updateTotalCostOfAssets() {
            var valueOfAssets = parseFloat(this.nonAssetsForm.get('valueOfAssets').value);
            console.log('valueOfAssets value -->', valueOfAssets);
            var allTotal = 0; // Initialize to 0

            if (!isNaN(valueOfAssets)) {
              allTotal = valueOfAssets; // Set to valueOfAssets if it's a valid number
            }

            if (true) {
              var toatalAmount = parseFloat(this.toatalAmount); // Parse toatalAmount if needed

              console.log('toatalAmount value -->', toatalAmount);

              if (!isNaN(toatalAmount)) {
                allTotal += toatalAmount; // Add toatalAmount if it's a valid number
              }
            }

            console.log('allTotal value -->', allTotal);
            this.nonAssetsForm.patchValue({
              costOfAssets: allTotal
            });
          }
        }, {
          key: "getASSETData",
          value: function getASSETData() {
            var _this32 = this;

            this.assetsServiceService.getAsseTListByledger({}, this.currentUser.id).then(function (res) {
              console.log("AssetsByLedegr", res);
              _this32.GLData = res.data.map(function (item) {
                return item.glNumber;
              });
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.nonAssetsForm.controls;
          }
        }, {
          key: "createaddtionalDetails",
          value: function createaddtionalDetails() {
            // this.cdr.detectChanges();
            try {
              return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
              });
            } catch (e) {}
          }
        }, {
          key: "additionalDetailsControls",
          get: function get() {
            try {
              return this.nonAssetsForm.get('addtionalDetails');
            } catch (e) {}
          }
        }, {
          key: "addAddtionalDetails",
          value: function addAddtionalDetails() {
            try {
              var data = this.nonAssetsForm.get('addtionalDetails');
              data.push(this.createaddtionalDetails());
              this.cdr.detectChanges();
            } catch (e) {
              console.log(e);
            }
          }
        }, {
          key: "deleteaddAddtionalDetails",
          value: function deleteaddAddtionalDetails(index) {
            var data = this.nonAssetsForm.get('addtionalDetails');

            if (data.length > 0) {
              data.removeAt(data.length - 1); // Remove the last element
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "postnonAsseTsForm",
          value: function postnonAsseTsForm() {
            var _this33 = this;

            this.formArrayData = this.additionalDetailsControls.value;
            this.submitted = true;

            if (this.nonAssetsForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              if (this.formArrayData.length < 1) {
                // this.toastService.openErrorSnackBar(
                //   "Please Add At Least One Expense Item To Proceed!!!"
                // );
                this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Add At Least One Expense Item To Proceed!!!"
                });
                return false;
              }

              var Body = {
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
                "additionalDetails": this.formArrayData
              };
              this.assetsServiceService.updateNonCurrentAssets(Body, this.nonassetId).then(function (res) {
                _this33.toastService.toastMsg({
                  title: "Success",
                  content: 'Non Current Assets updated Successfully!!!'
                });

                _this33.assetsServiceService.notifyassetsAdded();

                _this33.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this33.toastService.toastMsg({
                    title: "Error",
                    content: _this33.titleCasePipe.transform(err.error.error_message)
                  }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

                } else {
                  _this33.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "documentChange",
          value: function documentChange(e) {
            var _this34 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Select Image To Upload."
                }); // this.toastService.openErrorSnackBar(
                //   "Please Select Image To Upload.",
                // );
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this34.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this34.productPicUrl);
                });
              }
            }
          }
        }, {
          key: "openDatepicker",
          value: function openDatepicker() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.nonAssetsForm.get('assetDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.nonAssetsForm.get('assetDate').setValue(new Date());
            }
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "getASSETById",
          value: function getASSETById() {
            var _this35 = this;

            this.assetsServiceService.getNONCurrentAssetsDataBYId({}, this.nonassetId).then(function (res) {
              _this35.nonAssetsForm.patchValue({
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
                paymentMode: res.data.paymentMode ? res.data.paymentMode : null
              });

              _this35.additionalCost = res.data.equipmentAdditionals, _this35.additionalCostlength = _this35.additionalCost.length;

              if (_this35.additionalCostlength > 0) {
                for (var i = 0; i < _this35.additionalCostlength; i++) {
                  if (_this35.additionalCost[i].id) {
                    _this35.additionalDetailsControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this35.additionalCost[i].id),
                      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this35.additionalCost[i].name),
                      amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this35.additionalCost[i].amount)
                    }));
                  } else {
                    _this35.additionalDetailsControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
                      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this35.additionalCost[i].name),
                      amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(_this35.additionalCost[i].amount)
                    }));
                  }
                }
              }
            });
          }
        }]);

        return _NonAssetEditFormComponent;
      }();

      _NonAssetEditFormComponent.ɵfac = function NonAssetEditFormComponent_Factory(t) {
        return new (t || _NonAssetEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_2__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
      };

      _NonAssetEditFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _NonAssetEditFormComponent,
        selectors: [["app-non-asset-edit-form"]],
        decls: 115,
        vars: 19,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "10px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-md-6", "col-sm-12", "col-lg-6", "col-xl-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Assets Name", "formControlName", "assetName", "maxlength", "50", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "assetDate", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "ngModel", "maxDate", "bsConfig", "ngModelChange", "click"], [1, "iconcalender"], ["matNativeControl", "", "type", "text", "placeholder", "Value of Assets (in \u20B9)", "formControlName", "valueOfAssets", "required", "", 3, "keypress"], ["matNativeControl", "", "type", "text", "placeholder", "Scrap Value (in \u20B9)", "formControlName", "scrapValue", "required", "", 3, "keypress"], [1, "row", "mb-3"], ["required", "", "matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Payment Mode", "formControlName", "paymentMode"], ["value", "Cash"], ["value", "Bank"], ["value", "Credit"], [1, "col-md-12", "col-sm-12", "col-xl-12", "col-lg-12"], [1, "form-label", "mb-5"], [1, "row", "mt-2"], [1, "table-responsive"], [1, "table", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center", "inner-model-table-heading", "bg-white"], [1, "p-2", 2, "width", "10% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "width", "50% !important", "text-align", "center", "vertical-align", "middle"], [1, "p-2", 2, "text-align", "center", "vertical-align", "middle"], ["formArrayName", "addtionalDetails", 4, "ngFor", "ngForOf"], ["class", "row d-flex justify-content-end mt-2", 4, "ngIf"], [1, "col-md-6", "col-sm-12", "col-lg-3", "col-xl-3"], [1, "form-label", 2, "margin-top", "20px"], [1, "col-md-6", "col-sm-12", "col-lg-4", "col-xl-4"], ["appearance", "outline", 1, "example-full-width", "bg-light"], ["matNativeControl", "", "type", "text", "readonly", "", "disabled", "", "placeholder", "Cost of Assets (in \u20B9)", "formControlName", "costOfAssets", 1, "disbaleFieldBg", 3, "keypress"], [1, "mb-3"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], [1, "row", "mb-3", "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12", "px-0", "mx-0", 2, "width", "225px"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 1, "inputImageUpload", "px-0", 2, "margin-left", "16px", "margin-top", "6px", 3, "change"], [1, "col-md-6", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "form-check", "form-switch", "mb-0"], ["id", "customSwitch1", "type", "checkbox", "formControlName", "depreciation", 1, "form-check-input"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Method Name", "formControlName", "assetsMethod"], ["value", "Simple"], ["value", "WDM"], ["class", "col-md-6 col-sm-12 col-lg-6 col-xl-6", 4, "ngIf"], [1, "text-danger"], ["formArrayName", "addtionalDetails"], [3, "formGroupName"], [2, "vertical-align", "middle", "text-align", "center", "padding", "9px"], [2, "vertical-align", "middle", "text-align", "center"], ["matNativeControl", "", "matInput", "", "type", "text", "autocomplete", "off", "formControlName", "name", 3, "keypress"], ["matInput", "", "type", "text", "formControlName", "amount", 3, "keyup.enter", "keypress"], [1, "Icons", 2, "vertical-align", "middle", "text-align", "center"], ["type", "button", 1, "btn", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red"], [1, "row", "d-flex", "justify-content-end", "mt-2"], [1, "col-sm-12", "col-md-6", "col-lg-6", "text-nowrap", "mb-1", "d-grid"], [1, "btn", "btn-outline-warning", "dash", "fs--1", 3, "click"], ["id", "boot-icon", 1, "bi", "bi-plus-lg", "newrow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Add Row", 1, "me-2", "fs--1", "text-black", "newrow"], ["matNativeControl", "", "matInput", "", "disableOptionCentering", "", "placeholder", "Process Name", "formControlName", "assetProcess"], ["value", "Depreciation", 4, "ngIf"], ["value", "Useful Life", 4, "ngIf"], ["value", "Depreciation"], ["value", "Useful Life"], ["matNativeControl", "", "type", "text", "placeholder", "Enter Amount", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Depreciation %", "formControlName", "assetDeprecianinPer", 3, "keypress"], ["matNativeControl", "", "type", "text", "disabled", "", "placeholder", "Enter Year", "formControlName", "assetsYear", 3, "keypress"]],
        template: function NonAssetEditFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Update Non Current Assets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NonAssetEditFormComponent_Template_button_click_6_listener() {
              return ctx.postnonAsseTsForm();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NonAssetEditFormComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.todaysDate = $event;
            })("click", function NonAssetEditFormComponent_Template_input_click_24_listener() {
              return ctx.openDatepicker();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_36_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_44_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function NonAssetEditFormComponent_Template_input_keypress_86_listener($event) {
              return ctx.numberOnly($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function NonAssetEditFormComponent_Template_input_change_92_listener($event) {
              return ctx.documentChange($event);
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 1px !important;\n}\n\n.inputImageUpload[_ngcontent-%COMP%] {\n  border: 1px solid #d6d2d2;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1hc3NldC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUhGOztFQU1BO0lBQ0UsZ0JBQUE7RUFIRjtBQUNGIiwiZmlsZSI6Im5vbi1hc3NldC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmljb25jYWxlbmRlcntcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0SW1hZ2VVcGxvYWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjEwLCAyMTApO1xyXG59XHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0OnJlYWQtb25seXtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    93082:
    /*!********************************************************************************************************!*\
      !*** ./src/app/pages/assets-module/run-depraciation-component/run-depraciation-component.component.ts ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RunDepraciationComponentComponent": function RunDepraciationComponentComponent() {
          return (
            /* binding */
            _RunDepraciationComponentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/assets-service.service */
      93306);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function RunDepraciationComponentComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.saveRunDepraciation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RunDepraciationComponentComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.updateRunDepraciation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _RunDepraciationComponentComponent = /*#__PURE__*/function () {
        function _RunDepraciationComponentComponent(dialogRef, formBuilder, assetsServiceService, toastService, titleCasePipe, cdr) {
          _classCallCheck(this, _RunDepraciationComponentComponent);

          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.assetsServiceService = assetsServiceService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.cdr = cdr;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.isShow = false;
          this.isQuarterly = false;
          this.isYearly = false;
          this.isHalfYearly = false;
          this.isMonthly = false;
        }

        _createClass(_RunDepraciationComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getrunsDepreaciteData();
          }
        }, {
          key: "getrunsDepreaciteData",
          value: function getrunsDepreaciteData() {
            var _this36 = this;

            this.assetsServiceService.getNONCurrentAssetsData({}, this.currentUser.id, 5, 1).then(function (res) {
              var _a;

              if (res.success) {
                _this36.NonAseetData = (_a = res.data) === null || _a === void 0 ? void 0 : _a.equipmentSetting;

                if (_this36.NonAseetData) {
                  _this36.isShow = true;
                  _this36.isMonthly = _this36.NonAseetData.monthly, _this36.isQuarterly = _this36.NonAseetData.quaterly, _this36.isYearly = _this36.NonAseetData.yearly, _this36.isHalfYearly = _this36.NonAseetData.halfyearly;

                  _this36.cdr.detectChanges();
                }
              }
            }, function (err) {
              if (err.error.expose || err.status == 404) {
                _this36.toastService.toastMsg({
                  title: "Error",
                  content: _this36.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this36.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "saveRunDepraciation",
          value: function saveRunDepraciation() {
            var _this37 = this;

            var requestBody = {
              userId: this.currentUser.id,
              monthly: this.isMonthly,
              yearly: this.isYearly,
              quaterly: this.isQuarterly,
              halfyearly: this.isHalfYearly
            };

            if (!(requestBody.monthly || requestBody.yearly || requestBody.quaterly || requestBody.halfyearly)) {
              this.toastService.toastMsg({
                title: "Error",
                content: this.titleCasePipe.transform("Please Select at List One!!!")
              });
              return false;
            }

            this.assetsServiceService.addRundeprec(requestBody, this.currentUser.id).then(function (res) {
              _this37.toastService.toastMsg({
                title: "Success",
                content: 'Run Depreciation Added Successfully!!!'
              });

              _this37.isShow = true;

              _this37.assetsServiceService.notifyassetsAdded();

              _this37.dialogRef.close();
            }, function (err) {
              if (err.error.expose) {
                _this37.toastService.toastMsg({
                  title: "Error",
                  content: _this37.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this37.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "updateRunDepraciation",
          value: function updateRunDepraciation() {
            var _this38 = this;

            var requestBody = {
              userId: this.currentUser.id,
              monthly: this.isMonthly,
              yearly: this.isYearly,
              quaterly: this.isQuarterly,
              halfyearly: this.isHalfYearly
            };

            if (!(requestBody.monthly || requestBody.yearly || requestBody.quaterly || requestBody.halfyearly)) {
              this.toastService.toastMsg({
                title: "Error",
                content: this.titleCasePipe.transform("Please Select at List One!!!")
              });
              return false;
            } else {
              this.assetsServiceService.updateRundeprec(requestBody, this.currentUser.id).then(function (res) {
                _this38.toastService.toastMsg({
                  title: "Success",
                  content: 'Run Depreciation Updated Successfully!!!'
                });

                _this38.assetsServiceService.notifyassetsAdded();

                _this38.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this38.toastService.toastMsg({
                    title: "Error",
                    content: _this38.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this38.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "updateRadio",
          value: function updateRadio(event, value) {
            if (value === 'monthly') {
              this.isMonthly = event;
              this.isYearly = !event;
              this.isQuarterly = !event;
              this.isHalfYearly = !event;
            } else if (value === 'yearly') {
              this.isYearly = event;
              this.isMonthly = !event;
              this.isQuarterly = !event;
              this.isHalfYearly = !event;
            } else if (value === 'quarterly') {
              this.isQuarterly = event;
              this.isMonthly = !event;
              this.isYearly = !event;
              this.isHalfYearly = !event;
            } else if (value === 'halfYearly') {
              this.isHalfYearly = event;
              this.isMonthly = !event;
              this.isYearly = !event;
              this.isQuarterly = !event;
            }
          }
        }]);

        return _RunDepraciationComponentComponent;
      }();

      _RunDepraciationComponentComponent.ɵfac = function RunDepraciationComponentComponent_Factory(t) {
        return new (t || _RunDepraciationComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_assets_service_service__WEBPACK_IMPORTED_MODULE_0__.AssetsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _RunDepraciationComponentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RunDepraciationComponentComponent,
        selectors: [["app-run-depraciation-component"]],
        decls: 28,
        vars: 6,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", "class", "btn btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-save", 3, "click", 4, "ngIf"], [1, "modal-body"], [1, "container-fluid", "px-0"], [1, "flex-container"], [1, "flex-item", "form-label", "text-nowrap"], ["type", "radio", 3, "checked", "change"], [1, "radio-label", "m-1"], ["type", "radio", 3, "checked", "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"]],
        template: function RunDepraciationComponentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Run Depreciation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RunDepraciationComponentComponent_Template_input_change_13_listener($event) {
              return ctx.updateRadio($event.target.checked, "monthly");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_17_listener($event) {
              return ctx.updateRadio($event.target.checked, "quarterly");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Quarterly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_21_listener($event) {
              return ctx.updateRadio($event.target.checked, "yearly");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RunDepraciationComponentComponent_Template_input_click_25_listener($event) {
              return ctx.updateRadio($event.target.checked, "halfYearly");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Half Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex-basis: 30px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 1200px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bi1kZXByYWNpYXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtFQURGO0FBQ0YiLCJmaWxlIjoicnVuLWRlcHJhY2lhdGlvbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtYmFzaXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_assets-module_assets-module_module_ts-es5.js.map