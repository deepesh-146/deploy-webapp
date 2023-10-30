(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_employeeprofile_employeeprofile_module_ts"], {
    /***/
    46183:
    /*!*************************************************************!*\
      !*** ./src/app/core/services/emp-profileservice.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmpProfileserviceService": function EmpProfileserviceService() {
          return (
            /* binding */
            _EmpProfileserviceService
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

      var _EmpProfileserviceService = /*#__PURE__*/function () {
        function _EmpProfileserviceService(httpClient) {
          _classCallCheck(this, _EmpProfileserviceService);

          this.httpClient = httpClient;
          this.MyProfileSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.leadAdded$ = this.MyProfileSource.asObservable();
        }

        _createClass(_EmpProfileserviceService, [{
          key: "notifyprofileAdded",
          value: function notifyprofileAdded() {
            this.MyProfileSource.next();
          }
        }, {
          key: "getAllEducationDetails",
          value: function getAllEducationDetails(data, empId) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empeductionlist + empId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "addEducationDetails",
          value: function addEducationDetails(data, empId) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empaddeduction + empId, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "deleteEducation",
          value: function deleteEducation(data, educationId) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empdeleteduction + educationId, 'DELETE').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "GetEducationByEducationId",
          value: function GetEducationByEducationId(data, educationId) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empgeteduction + educationId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "EducationUpdateByEmployeeId",
          value: function EducationUpdateByEmployeeId(data, empId) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empupdateeduction + empId, 'PUT').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "PostIDCORCert",
          value: function PostIDCORCert(data, userId) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empaddidcertificate + userId, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "UpdateIDCORCert",
          value: function UpdateIDCORCert(data, docId) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empupdatedocument + docId, 'PUT').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getIDOrCERT",
          value: function getIDOrCERT(data, empId) {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empgetidcertificate + empId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "GetIdDataBYId",
          value: function GetIdDataBYId(data, IdsId) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empgetdocument + IdsId, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "DeleteIdDocuments",
          value: function DeleteIdDocuments(data, IdsId) {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              _this10.httpClient.call(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.empdeletedocument + IdsId, 'DELETE').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }]);

        return _EmpProfileserviceService;
      }();

      _EmpProfileserviceService.ɵfac = function EmpProfileserviceService_Factory(t) {
        return new (t || _EmpProfileserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
      };

      _EmpProfileserviceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _EmpProfileserviceService,
        factory: _EmpProfileserviceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    76576:
    /*!******************************************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-document/document-idc-add-form/document-idc-add-form.component.ts ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DocumentIdcAddFormComponent": function DocumentIdcAddFormComponent() {
          return (
            /* binding */
            _DocumentIdcAddFormComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function DocumentIdcAddFormComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Select ID Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter ID is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Aadhar ID must contain only numbers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passport ID must be alphanumeric. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Driving License format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Election Commission ID Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Income Tax PAN Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DocumentIdcAddFormComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Ration Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _DocumentIdcAddFormComponent = /*#__PURE__*/function () {
        function _DocumentIdcAddFormComponent(dialog, dialogRef, formBuilder, toastService, titleCasePipe, educationService, UserData, productService) {
          _classCallCheck(this, _DocumentIdcAddFormComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.educationService = educationService;
          this.UserData = UserData;
          this.productService = productService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_DocumentIdcAddFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = this.UserData.userId;
            this.createIdcForm();
          }
        }, {
          key: "createIdcForm",
          value: function createIdcForm() {
            this.idcForm = this.formBuilder.group({
              selectIdtype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              enterId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.alphabeticOnlyValidator()]] //uploadDocument: [""],

            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.idcForm.controls;
          }
        }, {
          key: "alphabeticOnlyValidator",
          value: function alphabeticOnlyValidator() {
            var _this11 = this;

            return function (control) {
              var value = control.value;

              if (_this11.selectType === 'Aadhaar' && !/^[0-9]{12}$/.test(value)) {
                return {
                  invalidAadhar: true
                };
              } else if (_this11.selectType === 'Passport' && !/^[a-zA-Z0-9]{8}$/.test(value)) {
                return {
                  invalidPassport: true
                };
              } else if (_this11.selectType === 'Driving License' && !/^[A-Z0-9]{15}$/.test(value)) {
                return {
                  invalidDrivingLicense: true
                };
              } else if (_this11.selectType === 'Election Commission ID Card' && !/^[A-Z0-9]{10}$/.test(value)) {
                return {
                  invalidElection: true
                };
              } else if (_this11.selectType === 'Income Tax PAN Card' && !/^[A-Z0-9]{10}$/.test(value)) {
                return {
                  invalidPAN: true
                };
              } else if (_this11.selectType === 'Ration Card with Photo, for the person whose photo is affixed' && !/^[0-9]{6}$/.test(value)) {
                return {
                  invalidRation: true
                };
              }

              return null;
            };
          } // else if (this.selectType === 'Driving License' && !this.isValidDrivingLicense(value)) {
          //   return { invalidDrivingLicense: true };
          // }
          // isValidDrivingLicense(value: string): boolean {
          //   const drivingLicensePattern = /^[A-Z0-9]{8}$/;
          //   return drivingLicensePattern.test(value);
          // }

        }, {
          key: "getoptionType",
          value: function getoptionType(event) {
            this.selectType = event.source.value;
          }
        }, {
          key: "postIdc",
          value: function postIdc() {
            var _this12 = this;

            this.submitted = true;

            if (this.idcForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var Body = {
                "addId": [{
                  "type": "ID",
                  "idType": this.idcForm.controls.selectIdtype.value,
                  "enterId": this.idcForm.controls.enterId.value,
                  "uploadDocument": this.productPicUrl,
                  "useItAs": "",
                  "employeeId": this.currentEmployee.id
                }]
              };
              this.educationService.PostIDCORCert(Body, this.userId).then(function (res) {
                _this12.educationService.notifyprofileAdded();

                _this12.toastService.openSnackBar(" Document Id Added Successfully");

                _this12.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this12.toastService.openErrorSnackBar(_this12.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this12.toastService.openErrorSnackBar("Something Went Wrong.");
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
          key: "documentChange",
          value: function documentChange(e) {
            var _this13 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.openErrorSnackBar("Please Select Image To Upload.");
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this13.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this13.productPicUrl);
                });
              }
            }
          }
        }]);

        return _DocumentIdcAddFormComponent;
      }();

      _DocumentIdcAddFormComponent.ɵfac = function DocumentIdcAddFormComponent_Factory(t) {
        return new (t || _DocumentIdcAddFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__.EmpProfileserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
      };

      _DocumentIdcAddFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DocumentIdcAddFormComponent,
        selectors: [["app-document-idc-add-form"]],
        decls: 53,
        vars: 9,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Select ID Type", "formControlName", "selectIdtype", 3, "selectionChange"], ["value", "Aadhaar"], ["value", "Passport"], ["value", "Driving License"], ["value", "Election Commission ID Card"], ["value", "Income Tax PAN Card"], ["value", "Ration Card with Photo, for the person whose photo is affixed"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "enterId", "placeholder", "Enter ID"], [4, "ngIf"], [1, "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 3, "change"], [1, "text-danger"]],
        template: function DocumentIdcAddFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Ids");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentIdcAddFormComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentIdcAddFormComponent_Template_button_click_6_listener() {
              return ctx.postIdc();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select ID Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function DocumentIdcAddFormComponent_Template_mat_select_selectionChange_18_listener($event) {
              return ctx.getoptionType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Aadhaar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Passport");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Driving License");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Election Commission ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Income Tax PAN Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Ration Card with Photo, for the person whose photo is affixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DocumentIdcAddFormComponent_mat_error_31_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Enter ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, DocumentIdcAddFormComponent_mat_error_40_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, DocumentIdcAddFormComponent_mat_error_41_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, DocumentIdcAddFormComponent_mat_error_42_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, DocumentIdcAddFormComponent_mat_error_43_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, DocumentIdcAddFormComponent_mat_error_44_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, DocumentIdcAddFormComponent_mat_error_45_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, DocumentIdcAddFormComponent_mat_error_46_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Upload Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DocumentIdcAddFormComponent_Template_input_change_52_listener($event) {
              return ctx.documentChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.idcForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.selectIdtype.touched) && (ctx.f.selectIdtype.errors == null ? null : ctx.f.selectIdtype.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.enterId.touched) && (ctx.f.enterId.errors == null ? null : ctx.f.enterId.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidAadhar"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidPassport"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidDrivingLicense"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidElection"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidPAN"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidRation"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWlkYy1hZGQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLGdCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJkb2N1bWVudC1pZGMtYWRkLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    99013:
    /*!********************************************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-document/document-idc-add-form/edit-idform/edit-idform.component.ts ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditIDFormComponent": function EditIDFormComponent() {
          return (
            /* binding */
            _EditIDFormComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function EditIDFormComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Select ID Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter ID is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Aadhar ID must contain only numbers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Passport ID must be alphanumeric. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Driving License format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Election Commission ID Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Income Tax PAN Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditIDFormComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Ration Card format. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _EditIDFormComponent = /*#__PURE__*/function () {
        function _EditIDFormComponent(dialog, dialogRef, formBuilder, toastService, titleCasePipe, educationService, UserData, productService) {
          _classCallCheck(this, _EditIDFormComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.educationService = educationService;
          this.UserData = UserData;
          this.productService = productService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_EditIDFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = this.UserData.userId;
            this.IdsId = this.UserData.IDsId;
            this.createIdcForm();
            this.getSingleIdDataById();
          }
        }, {
          key: "getSingleIdDataById",
          value: function getSingleIdDataById() {
            var _this14 = this;

            this.educationService.GetIdDataBYId({}, this.IdsId).then(function (res) {
              _this14.selectType = res.data.idType, console.log("this.selectType", _this14.selectType);

              _this14.idcForm.patchValue({
                selectIdtype: res.data.idType,
                enterId: res.data.enterId,
                uploadDocument: res.data.uploadDocument
              });
            });
          }
        }, {
          key: "createIdcForm",
          value: function createIdcForm() {
            this.idcForm = this.formBuilder.group({
              selectIdtype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              enterId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.alphabeticOnlyValidator()]] //uploadDocument: [""],

            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.idcForm.controls;
          }
        }, {
          key: "alphabeticOnlyValidator",
          value: function alphabeticOnlyValidator() {
            var _this15 = this;

            return function (control) {
              var value = control.value;

              if (_this15.selectType === 'Aadhaar' && !/^[0-9]{12}$/.test(value)) {
                return {
                  invalidAadhar: true
                };
              } else if (_this15.selectType === 'Passport' && !/^[a-zA-Z0-9]{8}$/.test(value)) {
                return {
                  invalidPassport: true
                };
              } else if (_this15.selectType === 'Driving License' && !/^[A-Z0-9]{15}$/.test(value)) {
                return {
                  invalidDrivingLicense: true
                };
              } else if (_this15.selectType === 'Election Commission ID Card' && !/^[A-Z0-9]{10}$/.test(value)) {
                return {
                  invalidElection: true
                };
              } else if (_this15.selectType === 'Income Tax PAN Card' && !/^[A-Z0-9]{10}$/.test(value)) {
                return {
                  invalidPAN: true
                };
              } else if (_this15.selectType === 'Ration Card with Photo, for the person whose photo is affixed' && !/^[0-9]{6}$/.test(value)) {
                return {
                  invalidRation: true
                };
              }

              return null;
            };
          }
        }, {
          key: "getoptionType",
          value: function getoptionType(event) {
            this.selectType = event.source.value;
          }
        }, {
          key: "postIdc",
          value: function postIdc() {
            var _this16 = this;

            this.submitted = true;

            if (this.idcForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var Body = {
                "type": "ID",
                "idType": this.idcForm.controls.selectIdtype.value,
                "enterId": this.idcForm.controls.enterId.value,
                "uploadDocument": this.productPicUrl,
                //"useItAs": "",
                "employeeId": this.currentEmployee.id
              };
              this.educationService.UpdateIDCORCert(Body, this.IdsId).then(function (res) {
                _this16.educationService.notifyprofileAdded();

                _this16.toastService.openSnackBar("Document Id Updated Successfully");

                _this16.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this16.toastService.openErrorSnackBar(_this16.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this16.toastService.openErrorSnackBar("Something Went Wrong.");
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
          key: "documentChange",
          value: function documentChange(e) {
            var _this17 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.openErrorSnackBar("Please Select Image To Upload.");
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this17.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this17.productPicUrl);
                });
              }
            }
          }
        }]);

        return _EditIDFormComponent;
      }();

      _EditIDFormComponent.ɵfac = function EditIDFormComponent_Factory(t) {
        return new (t || _EditIDFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__.EmpProfileserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
      };

      _EditIDFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EditIDFormComponent,
        selectors: [["app-edit-idform"]],
        decls: 53,
        vars: 9,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Select ID Type", "formControlName", "selectIdtype", 3, "selectionChange"], ["value", "Aadhaar"], ["value", "Passport"], ["value", "Driving License"], ["value", "Election Commission ID Card"], ["value", "Income Tax PAN Card"], ["value", "Ration Card with Photo, for the person whose photo is affixed"], ["class", "text-danger", 4, "ngIf"], ["matInput", "", "formControlName", "enterId", "placeholder", "Enter ID"], [4, "ngIf"], [1, "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 3, "change"], [1, "text-danger"]],
        template: function EditIDFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Ids");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditIDFormComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditIDFormComponent_Template_button_click_6_listener() {
              return ctx.postIdc();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Select ID Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function EditIDFormComponent_Template_mat_select_selectionChange_18_listener($event) {
              return ctx.getoptionType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Aadhaar");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Passport");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Driving License");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Election Commission ID Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Income Tax PAN Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Ration Card with Photo, for the person whose photo is affixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EditIDFormComponent_mat_error_31_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Enter ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, EditIDFormComponent_mat_error_40_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, EditIDFormComponent_mat_error_41_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, EditIDFormComponent_mat_error_42_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EditIDFormComponent_mat_error_43_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, EditIDFormComponent_mat_error_44_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, EditIDFormComponent_mat_error_45_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, EditIDFormComponent_mat_error_46_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Upload Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EditIDFormComponent_Template_input_change_52_listener($event) {
              return ctx.documentChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.idcForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.selectIdtype.touched) && (ctx.f.selectIdtype.errors == null ? null : ctx.f.selectIdtype.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.enterId.touched) && (ctx.f.enterId.errors == null ? null : ctx.f.enterId.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidAadhar"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidPassport"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidDrivingLicense"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidElection"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidPAN"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.enterId.hasError("invalidRation"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaWRmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUFKOztFQUdFO0lBQ0UsZ0JBQUE7RUFBSjtBQUNGIiwiZmlsZSI6ImVkaXQtaWRmb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    66397:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-document/employee-document.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeDocumentComponent": function EmployeeDocumentComponent() {
          return (
            /* binding */
            _EmployeeDocumentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _document_idc_add_form_document_idc_add_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./document-idc-add-form/document-idc-add-form.component */
      76576);
      /* harmony import */


      var _document_idc_add_form_edit_idform_edit_idform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./document-idc-add-form/edit-idform/edit-idform.component */
      99013);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function EmployeeDocumentComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function EmployeeDocumentComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Identification Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Id Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Document Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Document Upload Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeDocumentComponent_div_20_Template_button_click_24_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r3.getIDId(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeDocumentComponent_div_20_Template_button_click_26_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.openEditEducation(item_r2.id, ctx_r5.userId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.idType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.enterId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 5, item_r2.createdAt, "dd MMM YYYY")), " ");
        }
      }

      var _EmployeeDocumentComponent = /*#__PURE__*/function () {
        function _EmployeeDocumentComponent(dialog, rolesPermissionsService, toastService, educationService, titleCasePipe) {
          _classCallCheck(this, _EmployeeDocumentComponent);

          this.dialog = dialog;
          this.rolesPermissionsService = rolesPermissionsService;
          this.toastService = toastService;
          this.educationService = educationService;
          this.titleCasePipe = titleCasePipe;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_EmployeeDocumentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.getEmployeeByEmployeeId();
            this.educationService.leadAdded$.subscribe(function () {
              _this18.getIDCData();
            });
            this.getIDCData();
          }
        }, {
          key: "getIDCData",
          value: function getIDCData() {
            var _this19 = this;

            this.educationService.getIDOrCERT({}, this.currentEmployee.id).then(function (res) {
              _this19.idsData = res.data;
            }, function (err) {
              if (err.error.expose) {
                _this19.toastService.openErrorSnackBar(_this19.titleCasePipe.transform(err.error.error_message));
              } else {
                _this19.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "getEmployeeByEmployeeId",
          value: function getEmployeeByEmployeeId() {
            var _this20 = this;

            this.rolesPermissionsService.getEmployeeById({}, this.currentEmployee.id).then(function (res) {
              _this20.userId = res.data.parentId;
            }, function (err) {
              if (err.error.expose) {
                _this20.toastService.openErrorSnackBar(_this20.titleCasePipe.transform(err.error.error_message));
              } else {
                _this20.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "userId",
          value: function userId(arg0, _userId) {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "openIdcForm",
          value: function openIdcForm(userId) {
            var dialogRef = this.dialog.open(_document_idc_add_form_document_idc_add_form_component__WEBPACK_IMPORTED_MODULE_0__.DocumentIdcAddFormComponent, {
              width: '700px',
              height: 'auto',
              data: {
                userId: userId
              },
              panelClass: 'custom-dialog-IDC-FORM-class',
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
          key: "openEditEducation",
          value: function openEditEducation(IDsId, userId) {
            var dialogRef = this.dialog.open(_document_idc_add_form_edit_idform_edit_idform_component__WEBPACK_IMPORTED_MODULE_1__.EditIDFormComponent, {
              width: '700px',
              height: 'auto',
              data: {
                IDsId: IDsId,
                userId: userId
              },
              panelClass: 'custom-dialog-IDC-FORM-class',
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
          key: "getIDId",
          value: function getIDId(IdsId) {
            this.IdsId = IdsId;
          }
        }, {
          key: "deletDocumentById",
          value: function deletDocumentById() {
            var _this21 = this;

            this.educationService.DeleteIdDocuments({}, this.IdsId).then(function (res) {
              _this21.toastService.openSnackBar("Document Id Deleted Successfully");

              _this21.getIDCData();
            }, function (err) {
              if (err.error.expose) {
                _this21.toastService.openErrorSnackBar(_this21.titleCasePipe.transform(err.error.error_message));
              } else {
                _this21.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }]);

        return _EmployeeDocumentComponent;
      }();

      _EmployeeDocumentComponent.ɵfac = function EmployeeDocumentComponent_Factory(t) {
        return new (t || _EmployeeDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_4__.EmpProfileserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe));
      };

      _EmployeeDocumentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _EmployeeDocumentComponent,
        selectors: [["app-employee-document"]],
        decls: 37,
        vars: 2,
        consts: [[1, "modal-body"], [1, "row"], [1, "mb-3", "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12"], [1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "card-body"], [1, "col-md-3", "col-lg-3", "col-xl-3", "col-sm-12"], [1, "delete-button", "p-3", 3, "click"], [1, "fas", "fa-plus", 2, "color", "rgba(252, 118, 67, 1)"], [1, "text-black", "pHeading", 2, "margin-left", "10px", "margin-top", "6px"], [1, "col-md-6", "col-lg-6", "col-xl-6", "col-sm-12"], ["class", "card bg-white mb-3", 4, "ngIf"], ["class", "card bg-white mb-3", 4, "ngFor", "ngForOf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "flex", "d-flex", "flex-row", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], ["src", "assets/img/icons/spot-illustrations/notfound1.png", "width", "250", "height", "180", "alt", "", 1, "image-responsive"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "col-md-4", "col-xl-4", "col-lg-4", "col-sm-12"], [1, "text-black", "pHeading"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 2, "color", "rgba(252, 118, 67, 1) !important", "float", "right !important", "text-align", "end !important", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "delete", 1, "bi-trash", "icon-color", "icon-color", "iconFontSize", "ps-2"], [1, "btn", 2, "color", "rgba(252, 118, 67, 1) !important", "float", "right !important", "text-align", "end !important", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"]],
        template: function EmployeeDocumentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "ID\u2019S");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeDocumentComponent_Template_button_click_13_listener() {
              return ctx.openIdcForm(ctx.userId);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ADD ID'S");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, EmployeeDocumentComponent_div_19_Template, 3, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EmployeeDocumentComponent_div_20_Template, 28, 8, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "h2", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Delete Document? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h4", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Are You Sure To Delete Document?");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeDocumentComponent_Template_a_click_35_listener() {
              return ctx.deletDocumentById();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.idsData == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.idsData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".custom-dialog-IDC-FORM-class {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n\n.pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  border: 2px solid #fc7643;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  float: left !important;\n  padding: 3px;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fc7643;\n}\n\n.inputhide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNELFlBQUE7QUFDSDs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREU7RUFFRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUtBLDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxxWEFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFBMEMsK0JBQUE7QUFBNUM7O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBQUU7RUFDRSxXQUFBO0FBREoiLCJmaWxlIjoiZW1wbG95ZWUtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctSURDLUZPUk0tY2xhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcbi5wSGVhZGluZ3tcclxuICBGb250OlBvcHBpbnM7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6MC41IHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTIsIDExOCwgNjcsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gICBwYWRkaW5nOjNweFxyXG4gIH1cclxuICBcclxuICAuZGVsZXRlLWJ1dHRvbiBpIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1MiwgMTE4LCA2NywgMSk7O1xyXG4gIH1cclxuICAuaW5wdXRoaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgLy8gYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgLy9jb2xvcjogaW5oZXJpdDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    36609:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-education/add-education-employee/add-education-employee.component.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEducationEmployeeComponent": function AddEducationEmployeeComponent() {
          return (
            /* binding */
            _AddEducationEmployeeComponent
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function AddEducationEmployeeComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " University Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Qualification Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_div_33_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "BCA");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "BSc");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddEducationEmployeeComponent_div_33_mat_error_11_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.submitted || ctx_r2.f.courseName.touched) && (ctx_r2.f.courseName.errors == null ? null : ctx_r2.f.courseName.errors.required));
        }
      }

      function AddEducationEmployeeComponent_div_34_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "MCA");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "MSc");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddEducationEmployeeComponent_div_34_mat_error_11_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r3.submitted || ctx_r3.f.courseName.touched) && (ctx_r3.f.courseName.errors == null ? null : ctx_r3.f.courseName.errors.required));
        }
      }

      function AddEducationEmployeeComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course Start Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddEducationEmployeeComponent_mat_error_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Course End Date is required! ");

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

      var _AddEducationEmployeeComponent = /*#__PURE__*/function () {
        function _AddEducationEmployeeComponent(dialogRef, cdr, formBuilder, router, toastService, titleCasePipe, educationService, UserData, productService) {
          _classCallCheck(this, _AddEducationEmployeeComponent);

          this.dialogRef = dialogRef;
          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.educationService = educationService;
          this.UserData = UserData;
          this.productService = productService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AddEducationEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = this.UserData.userId;
            this.createEductionForm();
          }
        }, {
          key: "createEductionForm",
          value: function createEductionForm() {
            this.educationForm = this.formBuilder.group({
              university: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              qualificationType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              courseName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              courseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              courseStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              courseEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]] //uploadDocument: [""],

            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.educationForm.controls;
          }
        }, {
          key: "postEducation",
          value: function postEducation() {
            var _this22 = this;

            this.submitted = true;

            if (this.educationForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var Body = {
                "addEducation": [{
                  "university": this.educationForm.controls.university.value,
                  "qualificationType": this.educationForm.controls.qualificationType.value,
                  "courseName": this.educationForm.controls.courseName.value,
                  "courseType": this.educationForm.controls.courseType.value,
                  "startDate": this.educationForm.controls.courseStartDate.value,
                  "endDate": this.educationForm.controls.courseEndDate.value,
                  "uploadDocument": this.productPicUrl,
                  "userId": this.userId
                }]
              };
              this.educationService.addEducationDetails(Body, this.currentEmployee.id).then(function (res) {
                _this22.educationService.notifyprofileAdded();

                _this22.toastService.openSnackBar(" Education Added Successfully");

                _this22.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this22.toastService.openErrorSnackBar(_this22.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this22.toastService.openErrorSnackBar("Something Went Wrong.");
                }
              });
            }
          }
        }, {
          key: "openDatepickerstart",
          value: function openDatepickerstart() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.educationForm.get('courseStartDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.educationForm.get('courseStartDate').setValue(new Date());
            }
          }
        }, {
          key: "openDatepickerend",
          value: function openDatepickerend() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.educationForm.get('courseEndDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.educationForm.get('courseEndDate').setValue(new Date());
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "documentChange",
          value: function documentChange(e) {
            var _this23 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.openErrorSnackBar("Please Select Image To Upload.");
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this23.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this23.productPicUrl);
                });
              }
            }
          }
        }]);

        return _AddEducationEmployeeComponent;
      }();

      _AddEducationEmployeeComponent.ɵfac = function AddEducationEmployeeComponent_Factory(t) {
        return new (t || _AddEducationEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_1__.EmpProfileserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
      };

      _AddEducationEmployeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddEducationEmployeeComponent,
        selectors: [["app-add-education-employee"]],
        decls: 78,
        vars: 12,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "university", "placeholder", "University Name"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Qualification Type", "formControlName", "qualificationType"], ["value", "Graduation"], ["value", "Post Graduation"], ["class", "col-lg-6 col-md-6 col-xl-6 col-sm-6", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Course Type", "formControlName", "courseType"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Correspondence"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "courseStartDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender", "p-1"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "courseEndDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 3, "change"], [1, "text-danger"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Course Name", "formControlName", "courseName"], ["value", "BCA"], ["value", "BSc"], ["value", "MCA"], ["value", "MSc"]],
        template: function AddEducationEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Educational Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEducationEmployeeComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEducationEmployeeComponent_Template_button_click_6_listener() {
              return ctx.postEducation();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "University Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddEducationEmployeeComponent_mat_error_19_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Qualification Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Post Graduation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddEducationEmployeeComponent_mat_error_31_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddEducationEmployeeComponent_div_33_Template, 12, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddEducationEmployeeComponent_div_34_Template, 12, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Course Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Part Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Correspondence ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, AddEducationEmployeeComponent_mat_error_48_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Course Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEducationEmployeeComponent_Template_input_click_56_listener() {
              return ctx.openDatepickerstart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, AddEducationEmployeeComponent_mat_error_60_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Course End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddEducationEmployeeComponent_Template_input_click_67_listener() {
              return ctx.openDatepickerend();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, AddEducationEmployeeComponent_mat_error_71_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Upload Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddEducationEmployeeComponent_Template_input_change_77_listener($event) {
              return ctx.documentChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.educationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.university.touched) && (ctx.f.university.errors == null ? null : ctx.f.university.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.qualificationType.touched) && (ctx.f.qualificationType.errors == null ? null : ctx.f.qualificationType.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.educationForm.get("qualificationType").value === "Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.educationForm.get("qualificationType").value === "Post Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseType.touched) && (ctx.f.courseType.errors == null ? null : ctx.f.courseType.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseStartDate.touched) && (ctx.f.courseStartDate.errors == null ? null : ctx.f.courseStartDate.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseEndDate.touched) && (ctx.f.courseEndDate.errors == null ? null : ctx.f.courseEndDate.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError],
        styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZHVjYXRpb24tZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFBSjs7RUFHRTtJQUNFLGdCQUFBO0VBQUo7QUFDRiIsImZpbGUiOiJhZGQtZWR1Y2F0aW9uLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25jYWxlbmRlcntcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    16937:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-education/edd-education-employee/edd-education-employee.component.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EddEducationEmployeeComponent": function EddEducationEmployeeComponent() {
          return (
            /* binding */
            _EddEducationEmployeeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function EddEducationEmployeeComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " University Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Qualification Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_div_33_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Course Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "BCA");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "BSc");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EddEducationEmployeeComponent_div_33_mat_error_11_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.submitted || ctx_r2.f.courseName.touched) && (ctx_r2.f.courseName.errors == null ? null : ctx_r2.f.courseName.errors.required));
        }
      }

      function EddEducationEmployeeComponent_div_34_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Course Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "MCA");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "MSc");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EddEducationEmployeeComponent_div_34_mat_error_11_Template, 2, 0, "mat-error", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r3.submitted || ctx_r3.f.courseName.touched) && (ctx_r3.f.courseName.errors == null ? null : ctx_r3.f.courseName.errors.required));
        }
      }

      function EddEducationEmployeeComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Course Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Course Start Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EddEducationEmployeeComponent_mat_error_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Course End Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _EddEducationEmployeeComponent = /*#__PURE__*/function () {
        function _EddEducationEmployeeComponent(dialogRef, cdr, formBuilder, router, toastService, titleCasePipe, UserData, educationService, productService) {
          _classCallCheck(this, _EddEducationEmployeeComponent);

          this.dialogRef = dialogRef;
          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.UserData = UserData;
          this.educationService = educationService;
          this.productService = productService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_EddEducationEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.userId = this.UserData.userId;
            this.educationId = this.UserData.educationId;
            this.createEductionForm();
            this.getEducationById();
            this.educationForm.get('qualificationType').valueChanges.subscribe(function (newValue) {
              // Check if the qualification type has changed to something other than 'Graduation'
              if (newValue !== 'Graduation') {
                // Reset the courseName control to an empty value
                _this24.educationForm.get('courseName').setValue('');
              }

              if (newValue !== 'Post Graduation') {
                // Reset the courseName control to an empty value
                _this24.educationForm.get('courseName').setValue('');
              }
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.educationForm.controls;
          }
        }, {
          key: "UpdateEducation",
          value: function UpdateEducation() {
            var _this25 = this;

            this.submitted = true;

            if (this.educationForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var Body = {
                "updateEducations": [{
                  "id": this.educationId,
                  "university": this.educationForm.controls.university.value,
                  "qualificationType": this.educationForm.controls.qualificationType.value,
                  "courseName": this.educationForm.controls.courseName.value,
                  "courseType": this.educationForm.controls.courseType.value,
                  "startDate": moment__WEBPACK_IMPORTED_MODULE_0__(this.educationForm.controls.courseStartDate.value, 'DD-MMM-YYYY').format('YYYY-MM-DD'),
                  "endDate": moment__WEBPACK_IMPORTED_MODULE_0__(this.educationForm.controls.courseEndDate.value, 'DD-MMM-YYYY').format('YYYY-MM-DD'),
                  "uploadDocument": this.productPicUrl,
                  "userId": this.userId
                }]
              };
              this.educationService.EducationUpdateByEmployeeId(Body, this.currentEmployee.id).then(function (res) {
                _this25.educationService.notifyprofileAdded();

                _this25.toastService.openSnackBar(" Education Updated Successfully");

                _this25.dialogRef.close();
              }, function (err) {
                if (err.error.expose) {
                  _this25.toastService.openErrorSnackBar(_this25.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this25.toastService.openErrorSnackBar("Something Went Wrong.");
                }
              });
            }
          }
        }, {
          key: "openDatepickerstart",
          value: function openDatepickerstart() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.educationForm.get('courseStartDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.educationForm.get('courseStartDate').setValue(new Date());
            }
          }
        }, {
          key: "openDatepickerend",
          value: function openDatepickerend() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.educationForm.get('courseEndDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.educationForm.get('courseEndDate').setValue(new Date());
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "createEductionForm",
          value: function createEductionForm() {
            this.educationForm = this.formBuilder.group({
              university: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              qualificationType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              courseName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              courseType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              courseStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              courseEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]] //uploadDocument: [""],

            });
          }
        }, {
          key: "getEducationById",
          value: function getEducationById() {
            var _this26 = this;

            this.educationService.GetEducationByEducationId({}, this.educationId).then(function (res) {
              _this26.educationForm.patchValue({
                university: res.data.university,
                qualificationType: res.data.qualificationType,
                courseName: res.data.courseName,
                courseType: res.data.courseType,
                courseStartDate: res.data.startDate ? moment__WEBPACK_IMPORTED_MODULE_0__(res.data.startDate).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_0__(res.data.startDate).format("DD-MMM-YYYY"),
                courseEndDate: res.data.endDate ? moment__WEBPACK_IMPORTED_MODULE_0__(res.data.endDate).format("DD-MMM-YYYY") : moment__WEBPACK_IMPORTED_MODULE_0__(res.data.endDate).format("DD-MMM-YYYY"),
                uploadDocument: res.data.uploadDocument
              });
            });
          }
        }, {
          key: "documentChange",
          value: function documentChange(e) {
            var _this27 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              if (file == null) {
                this.toastService.openErrorSnackBar("Please Select Image To Upload.");
              } else {
                formdata.set("upload", file);
                this.productService.PostImagePdf(formdata).then(function (res) {
                  _this27.productPicUrl = res.data.location;
                  console.log("this.productPicUrl", _this27.productPicUrl);
                });
              }
            }
          }
        }]);

        return _EddEducationEmployeeComponent;
      }();

      _EddEducationEmployeeComponent.ɵfac = function EddEducationEmployeeComponent_Factory(t) {
        return new (t || _EddEducationEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_2__.EmpProfileserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService));
      };

      _EddEducationEmployeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EddEducationEmployeeComponent,
        selectors: [["app-edd-education-employee"]],
        decls: 78,
        vars: 12,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "submit", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "university", "placeholder", "University Name"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Qualification Type", "formControlName", "qualificationType"], ["value", "Graduation"], ["value", "Post Graduation"], ["class", "col-lg-6 col-md-6 col-xl-6 col-sm-6", 4, "ngIf"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Course Type", "formControlName", "courseType"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Correspondence"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "courseStartDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "iconcalender", "p-1"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "DD MMM YYYY", "id", "datePicker", "bsDatepicker", "", "formControlName", "courseEndDate", "autocomplete", "off", 2, "text-transform", "uppercase!important", 3, "bsConfig", "click"], [1, "col-md-12", "col-xl-12", "col-lg-12", "col-sm-12"], ["type", "file", "accept", ".jpeg, .jpg, .png, .pdf", 3, "change"], [1, "text-danger"], ["matNativeControl", "", "disableOptionCentering", "", "required", "", "placeholder", "Course Name", "formControlName", "courseName"], ["value", "BCA"], ["value", "BSc"], ["value", "MCA"], ["value", "MSc"]],
        template: function EddEducationEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Update Educational Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EddEducationEmployeeComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EddEducationEmployeeComponent_Template_button_click_6_listener() {
              return ctx.UpdateEducation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "University Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, EddEducationEmployeeComponent_mat_error_19_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Qualification Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Post Graduation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, EddEducationEmployeeComponent_mat_error_31_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, EddEducationEmployeeComponent_div_33_Template, 12, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, EddEducationEmployeeComponent_div_34_Template, 12, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Course Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Full Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Part Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Correspondence ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, EddEducationEmployeeComponent_mat_error_48_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Course Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EddEducationEmployeeComponent_Template_input_click_56_listener() {
              return ctx.openDatepickerstart();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, EddEducationEmployeeComponent_mat_error_60_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Course End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EddEducationEmployeeComponent_Template_input_click_67_listener() {
              return ctx.openDatepickerend();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, EddEducationEmployeeComponent_mat_error_71_Template, 2, 0, "mat-error", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Upload Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EddEducationEmployeeComponent_Template_input_change_77_listener($event) {
              return ctx.documentChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.educationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.university.touched) && (ctx.f.university.errors == null ? null : ctx.f.university.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.qualificationType.touched) && (ctx.f.qualificationType.errors == null ? null : ctx.f.qualificationType.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.educationForm.get("qualificationType").value === "Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.educationForm.get("qualificationType").value === "Post Graduation");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseType.touched) && (ctx.f.courseType.errors == null ? null : ctx.f.courseType.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseStartDate.touched) && (ctx.f.courseStartDate.errors == null ? null : ctx.f.courseStartDate.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.courseEndDate.touched) && (ctx.f.courseEndDate.errors == null ? null : ctx.f.courseEndDate.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError],
        styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZC1lZHVjYXRpb24tZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLGdCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJlZGQtZWR1Y2F0aW9uLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25jYWxlbmRlcntcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    84742:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-education/employee-education.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeEducationComponent": function EmployeeEducationComponent() {
          return (
            /* binding */
            _EmployeeEducationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _edd_education_employee_edd_education_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edd-education-employee/edd-education-employee.component */
      16937);
      /* harmony import */


      var _add_education_employee_add_education_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-education-employee/add-education-employee.component */
      36609);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! file-saver */
      97797);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/emp-profileservice.service */
      46183);

      function EmployeeEducationComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function EmployeeEducationComponent_div_16_p_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeEducationComponent_div_16_p_27_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.GotoImageOrPDF(item_r2.uploadDocument);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r2.uploadDocument, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        }
      }

      function EmployeeEducationComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Course Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, EmployeeEducationComponent_div_16_p_27_Template, 3, 1, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeEducationComponent_div_16_Template_button_click_28_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.getEducationId(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeEducationComponent_div_16_Template_button_click_30_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.openEditEducation(item_r2.id, ctx_r10.userId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r2.qualificationType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.courseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 7, item_r2.startDate, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 12, item_r2.endDate, "dd MMM YYYY")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r2.uploadDocument !== null);
        }
      }

      var _EmployeeEducationComponent = /*#__PURE__*/function () {
        function _EmployeeEducationComponent(dialog, rolesPermissionsService, toastService, titleCasePipe, educationService) {
          _classCallCheck(this, _EmployeeEducationComponent);

          this.dialog = dialog;
          this.rolesPermissionsService = rolesPermissionsService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.educationService = educationService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.profilePic = "";
          this.course = {
            "courseName": "BE",
            "startDate": "11/08/2023",
            "endDate": "15/08/2023"
          };
        }

        _createClass(_EmployeeEducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.getEmployeeByEmployeeId();
            this.educationService.leadAdded$.subscribe(function () {
              _this28.getEducationDetails();
            });
            this.getEducationDetails();
          }
        }, {
          key: "getEducationDetails",
          value: function getEducationDetails() {
            var _this29 = this;

            this.educationService.getAllEducationDetails({}, this.currentEmployee.id).then(function (res) {
              _this29.educationData = res.data;
              console.log("data length", _this29.educationData.length);
            }, function (err) {
              if (err.error.expose) {
                _this29.toastService.openErrorSnackBar(_this29.titleCasePipe.transform(err.error.error_message));
              } else {
                _this29.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "getEmployeeByEmployeeId",
          value: function getEmployeeByEmployeeId() {
            var _this30 = this;

            this.rolesPermissionsService.getEmployeeById({}, this.currentEmployee.id).then(function (res) {
              _this30.userId = res.data.parentId;
            }, function (err) {
              if (err.error.expose) {
                _this30.toastService.openErrorSnackBar(_this30.titleCasePipe.transform(err.error.error_message));
              } else {
                _this30.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "openADDEducation",
          value: function openADDEducation(userId) {
            var dialogRef = this.dialog.open(_add_education_employee_add_education_employee_component__WEBPACK_IMPORTED_MODULE_1__.AddEducationEmployeeComponent, {
              width: '700px',
              height: 'auto',
              data: {
                userId: userId
              },
              panelClass: 'custom-dialog-educationAdd-class',
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
          key: "openEditEducation",
          value: function openEditEducation(educationId, userId) {
            var dialogRef = this.dialog.open(_edd_education_employee_edd_education_employee_component__WEBPACK_IMPORTED_MODULE_0__.EddEducationEmployeeComponent, {
              width: '700px',
              height: 'auto',
              data: {
                educationId: educationId,
                userId: userId
              },
              panelClass: 'custom-dialog-educationUpdate-class',
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
          key: "getEducationId",
          value: function getEducationId(educationId) {
            this.educationId = educationId;
          }
        }, {
          key: "deletEductionById",
          value: function deletEductionById() {
            var _this31 = this;

            this.educationService.deleteEducation({}, this.educationId).then(function (res) {
              _this31.toastService.openSnackBar(" Education Deleted Successfully");

              _this31.getEducationDetails();
            }, function (err) {
              if (err.error.expose) {
                _this31.toastService.openErrorSnackBar(_this31.titleCasePipe.transform(err.error.error_message));
              } else {
                _this31.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "GotoImageOrPDF",
          value: function GotoImageOrPDF(imagelink) {
            this.DataLink = imagelink;
            var pdfName = "invoice.pdf";
            file_saver__WEBPACK_IMPORTED_MODULE_2___default().saveAs(this.DataLink, pdfName);
          }
        }]);

        return _EmployeeEducationComponent;
      }();

      _EmployeeEducationComponent.ɵfac = function EmployeeEducationComponent_Factory(t) {
        return new (t || _EmployeeEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_3__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_emp_profileservice_service__WEBPACK_IMPORTED_MODULE_5__.EmpProfileserviceService));
      };

      _EmployeeEducationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _EmployeeEducationComponent,
        selectors: [["app-employee-education"]],
        decls: 33,
        vars: 2,
        consts: [[1, "modal-body"], [1, "row"], [1, "mb-3", "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12"], [1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "card-body"], [1, "delete-button", "p-3", 3, "click"], [1, "fas", "fa-plus", 2, "color", "rgba(252, 118, 67, 1)"], [1, "text-black", "pHeading", 2, "margin-left", "10px", "margin-top", "6px"], ["class", "card bg-white mb-3", 4, "ngIf"], ["class", "card bg-white mb-3", 4, "ngFor", "ngForOf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "flex", "d-flex", "flex-row", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], ["src", "assets/img/icons/spot-illustrations/notfound1.png", "width", "250", "height", "180", "alt", "", 1, "image-responsive"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "col-md-3", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "text-black", "pHeading"], [4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 2, "color", "rgba(252, 118, 67, 1) !important", "float", "right !important", "text-align", "end !important", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "delete", 1, "bi-trash", "icon-color", "icon-color", "iconFontSize", "ps-2"], [1, "btn", 2, "color", "rgba(252, 118, 67, 1) !important", "float", "right !important", "text-align", "end !important", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2"], ["onerror", "this.src='assets/img/icons/spot-illustrations/pdfLogo.jpg'", "alt", "Profile", "width", "50", "height", "50", 1, "rounded-circle", 2, "cursor", "pointer", 3, "src", "click"]],
        template: function EmployeeEducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Educational Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeEducationComponent_Template_button_click_10_listener() {
              return ctx.openADDEducation(ctx.userId);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "ADD");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, EmployeeEducationComponent_div_15_Template, 3, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, EmployeeEducationComponent_div_16_Template, 32, 15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Delete Education? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Are You Sure To Delete Education?");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmployeeEducationComponent_Template_a_click_31_listener() {
              return ctx.deletEductionById();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.educationData == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.educationData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: ["input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  border: 2px solid #fc7643;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  float: left !important;\n  padding: 3px;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fc7643;\n}\n\n  .custom-dialog-educationAdd-class {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n\n  .custom-dialog-educationUpdate-class {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjs7QUFFQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0E7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDRCxZQUFBO0FBQUg7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0oiLCJmaWxlIjoiZW1wbG95ZWUtZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucEhlYWRpbmd7XHJcbkZvbnQ6UG9wcGlucztcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5mb250LXNpemU6MTRweDtcclxubGluZS1oZWlnaHQ6MTZweDtcclxubGV0dGVyLXNwYWNpbmc6MC41IHB4O1xyXG59XHJcblxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1MiwgMTE4LCA2NywgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmc6M3B4XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxldGUtYnV0dG9uIGkge1xyXG4gICAgY29sb3I6IHJnYmEoMjUyLCAxMTgsIDY3LCAxKTs7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1lZHVjYXRpb25BZGQtY2xhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7ICBcclxuXHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1lZHVjYXRpb25VcGRhdGUtY2xhc3N7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbiAiXX0= */"]
      });
      /***/
    },

    /***/
    39801:
    /*!********************************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-personal-details/employee-personal-details.component.ts ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeePersonalDetailsComponent": function EmployeePersonalDetailsComponent() {
          return (
            /* binding */
            _EmployeePersonalDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/profile.service */
      44687);
      /* harmony import */


      var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/party.service */
      42109);

      var _EmployeePersonalDetailsComponent = /*#__PURE__*/function () {
        function _EmployeePersonalDetailsComponent(roleService, toastService, titleCasePipe, profileService, partyService) {
          _classCallCheck(this, _EmployeePersonalDetailsComponent);

          this.roleService = roleService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.profileService = profileService;
          this.partyService = partyService;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_EmployeePersonalDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfileData();
          }
        }, {
          key: "getProfileData",
          value: function getProfileData() {
            var _this32 = this;

            this.roleService.getEmployeeById({}, this.currentEmployee.id).then(function (res) {
              _this32.ProfileData = res.data;
              _this32.employeeId = _this32.ProfileData.employee.id;
              _this32.firstName = _this32.ProfileData.firstName;
              _this32.email = _this32.ProfileData.email;
              _this32.mobileNumber = _this32.ProfileData.mobile;
              _this32.profileImagepath = _this32.ProfileData.profileImage;
              _this32.address = _this32.ProfileData.useraddresses[0].address;
              _this32.country = _this32.ProfileData.useraddresses[0].country;
              _this32.state = _this32.ProfileData.useraddresses[0].state;
              _this32.city = _this32.ProfileData.useraddresses[0].city;
              _this32.pincode = _this32.ProfileData.useraddresses[0].pincode;
              _this32.gender = _this32.ProfileData.employee.gender ? _this32.ProfileData.employee.gender : "-";
            }, function (err) {
              if (err.error.expose) {
                _this32.toastService.openErrorSnackBar(_this32.titleCasePipe.transform(err.error.error_message));
              } else {
                _this32.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "documentChange",
          value: function documentChange(e) {
            var _this33 = this;

            var formdata = new FormData();
            var reader = new FileReader();
            var file = e.target.files[0];

            if (e.target.files && e.target.files[0]) {
              reader.readAsDataURL(file);

              reader.onload = function () {
                _this33.profileImagepath = reader.result;
              };

              if (file == null) {
                this.toastService.openErrorSnackBar("Please Select Image To Upload.");
              } else {
                formdata.set("upload", file);
                this.profileService.postProfileImage(formdata, this.currentEmployee.id).then(function (res) {
                  _this33.toastService.openSnackBar("Image Uploaded Successfully");

                  _this33.getProfileData();

                  _this33.partyService.notifyPartyAdded();
                });
              }
            }
          }
        }]);

        return _EmployeePersonalDetailsComponent;
      }();

      _EmployeePersonalDetailsComponent.ɵfac = function EmployeePersonalDetailsComponent_Factory(t) {
        return new (t || _EmployeePersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__.PartyService));
      };

      _EmployeePersonalDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EmployeePersonalDetailsComponent,
        selectors: [["app-employee-personal-details"]],
        decls: 77,
        vars: 11,
        consts: [[1, "modal-body"], [1, "row"], [1, "mb-3", "col-lg-2", "col-md-2", "col-xl-2", "col-sm-12"], [1, "image-wrapper", "flex", "d-flex", "flex-row"], [1, "profile-pic"], [1, "bi", "bi-camera", "profile-icon", "bottom-right2", "fw-bold", 2, "font-size", "2rem", "text-align", "center", "opacity", "0.5", "cursor", "pointer"], ["height", "150", "width", "150", 1, "shadow-sm", 3, "src"], ["type", "file", "name", "file", "accept", "image/*", 3, "change"], [1, "mb-3", "col-lg-10", "col-md-10", "col-xl-10", "col-sm-12"], [1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important", "float", "right !important"], [1, "card-body"], [1, "col-md-3", "col-xl-3", "col-lg-3", "col-sm-12"], [1, "text-black", "pHeading"], [1, "card", "bg-white"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"], [1, "row", "mb-3"], [1, "col-md-4", "col-xl-4", "col-lg-4", "col-sm-12"]],
        template: function EmployeePersonalDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EmployeePersonalDetailsComponent_Template_input_change_7_listener($event) {
              return ctx.documentChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Personal Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Address Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Pin Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.profileImagepath ? ctx.profileImagepath : "/assets/images/default-profile-pic.JPG", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Emp Id : ", ctx.employeeId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.mobileNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.country);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pincode);
          }
        },
        styles: ["input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n\n.bottom-right2[_ngcontent-%COMP%] {\n  position: absolute !important;\n  margin-left: 5px !important;\n  margin-top: 5px !important;\n  background-color: black !important;\n  color: white !important;\n  border: 5px solid black !important;\n  border-radius: 50% !important;\n  font-weight: 900px !important;\n  font-size: 2rem !important;\n  text-align: center !important;\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXBlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUVBOztBQUFBO0VBQ0ksNkJBQUE7RUFFQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6ImVtcGxveWVlLXBlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wSGVhZGluZ3tcclxuRm9udDpQb3BwaW5zO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5saW5lLWhlaWdodDoxNnB4O1xyXG5sZXR0ZXItc3BhY2luZzowLjUgcHg7XHJcbn1cclxuLmJvdHRvbS1yaWdodDIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgIC8vYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    60131:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employee-work/employee-work.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeWorkComponent": function EmployeeWorkComponent() {
          return (
            /* binding */
            _EmployeeWorkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _EmployeeWorkComponent = /*#__PURE__*/function () {
        function _EmployeeWorkComponent(roleService, toastService, titleCasePipe) {
          _classCallCheck(this, _EmployeeWorkComponent);

          this.roleService = roleService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.currentEmployee = JSON.parse(localStorage.getItem("currentUser"));
          this.profilePic = "";
        }

        _createClass(_EmployeeWorkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProfileData();
          }
        }, {
          key: "getProfileData",
          value: function getProfileData() {
            var _this34 = this;

            this.roleService.getEmployeeById({}, this.currentEmployee.id).then(function (res) {
              _this34.ProfileData = res.data;
              _this34.employeeId = _this34.ProfileData.employee.id;
              _this34.DateOfJoining = _this34.ProfileData.employee.joiningDate;
              _this34.assets = _this34.ProfileData.employee.assets;
              _this34.designation = _this34.ProfileData.employee.designation;
              _this34.jobrole = _this34.ProfileData.employee.roleAssign;
              _this34.department = _this34.ProfileData.employee.department;
              _this34.profileImagepath = _this34.ProfileData.profileImage;
              var empstatus = _this34.ProfileData.isActive;

              if (empstatus == true) {
                _this34.status = "Active";
              } else {
                _this34.status = "Inactive";
              }
            }, function (err) {
              if (err.error.expose) {
                _this34.toastService.openErrorSnackBar(_this34.titleCasePipe.transform(err.error.error_message));
              } else {
                _this34.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }]);

        return _EmployeeWorkComponent;
      }();

      _EmployeeWorkComponent.ɵfac = function EmployeeWorkComponent_Factory(t) {
        return new (t || _EmployeeWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe));
      };

      _EmployeeWorkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _EmployeeWorkComponent,
        selectors: [["app-employee-work"]],
        decls: 56,
        vars: 12,
        consts: [[1, "modal-body"], [1, "row"], [1, "mb-3", "col-lg-12", "col-md-12", "col-xl-12", "col-sm-12"], [1, "card", "bg-white", "mb-3"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "center"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-6"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important"], [1, "text-black", 2, "font-weight", "600", "font-size", "14px!important", "float", "right !important"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-4", "col-xl-4", "col-lg-4", "col-sm-12"], [1, "text-black", "pHeading"], [1, "card", "bg-white"], [1, "card-header", 2, "justify-content", "center", "align-items", "center", "vertical-align", "middle"]],
        template: function EmployeeWorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Basic Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Date of Joining");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Employee Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Assets");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Work Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Designation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Job Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Emp Id : ", ctx.employeeId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 9, ctx.DateOfJoining, "dd MMM YYYY")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.assets);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.designation);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.jobrole);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.department);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
        styles: ["input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.pHeading[_ngcontent-%COMP%] {\n  Font: Poppins;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5 px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUVBIiwiZmlsZSI6ImVtcGxveWVlLXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wSGVhZGluZ3tcclxuRm9udDpQb3BwaW5zO1xyXG5mb250LXdlaWdodDo2MDA7XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5saW5lLWhlaWdodDoxNnB4O1xyXG5sZXR0ZXItc3BhY2luZzowLjUgcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    88138:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employeeprofile-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeprofileRoutingModule": function EmployeeprofileRoutingModule() {
          return (
            /* binding */
            _EmployeeprofileRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _employee_personal_details_employee_personal_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./employee-personal-details/employee-personal-details.component */
      39801);
      /* harmony import */


      var _employee_work_employee_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./employee-work/employee-work.component */
      60131);
      /* harmony import */


      var _employee_education_employee_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-education/employee-education.component */
      84742);
      /* harmony import */


      var _employee_document_employee_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee-document/employee-document.component */
      66397);
      /* harmony import */


      var _my_profile_employee_my_profile_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./my-profile-employee/my-profile-employee.component */
      53691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _my_profile_employee_my_profile_employee_component__WEBPACK_IMPORTED_MODULE_4__.MyProfileEmployeeComponent,
        children: [{
          path: '',
          redirectTo: 'emp-profile',
          pathMatch: 'full'
        }, {
          path: 'emp-profile',
          component: _employee_personal_details_employee_personal_details_component__WEBPACK_IMPORTED_MODULE_0__.EmployeePersonalDetailsComponent
        }, {
          path: 'emp-work',
          component: _employee_work_employee_work_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeWorkComponent
        }, {
          path: 'emp-education',
          component: _employee_education_employee_education_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeEducationComponent
        }, {
          path: 'emp-document',
          component: _employee_document_employee_document_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeDocumentComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _EmployeeprofileRoutingModule = /*#__PURE__*/_createClass(function _EmployeeprofileRoutingModule() {
        _classCallCheck(this, _EmployeeprofileRoutingModule);
      });

      _EmployeeprofileRoutingModule.ɵfac = function EmployeeprofileRoutingModule_Factory(t) {
        return new (t || _EmployeeprofileRoutingModule)();
      };

      _EmployeeprofileRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _EmployeeprofileRoutingModule
      });
      _EmployeeprofileRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_EmployeeprofileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    1621:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/employeeprofile/employeeprofile.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeprofileModule": function EmployeeprofileModule() {
          return (
            /* binding */
            _EmployeeprofileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _employeeprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./employeeprofile-routing.module */
      88138);
      /* harmony import */


      var _employee_personal_details_employee_personal_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./employee-personal-details/employee-personal-details.component */
      39801);
      /* harmony import */


      var _employee_work_employee_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-work/employee-work.component */
      60131);
      /* harmony import */


      var _employee_education_employee_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee-education/employee-education.component */
      84742);
      /* harmony import */


      var _employee_document_employee_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./employee-document/employee-document.component */
      66397);
      /* harmony import */


      var _my_profile_employee_my_profile_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-employee/my-profile-employee.component */
      53691);
      /* harmony import */


      var _employee_education_add_education_employee_add_education_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-education/add-education-employee/add-education-employee.component */
      36609);
      /* harmony import */


      var _employee_education_edd_education_employee_edd_education_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./employee-education/edd-education-employee/edd-education-employee.component */
      16937);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _employee_document_document_idc_add_form_document_idc_add_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./employee-document/document-idc-add-form/document-idc-add-form.component */
      76576);
      /* harmony import */


      var _employee_document_document_idc_add_form_edit_idform_edit_idform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./employee-document/document-idc-add-form/edit-idform/edit-idform.component */
      99013);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EmployeeprofileModule = /*#__PURE__*/_createClass(function _EmployeeprofileModule() {
        _classCallCheck(this, _EmployeeprofileModule);
      });

      _EmployeeprofileModule.ɵfac = function EmployeeprofileModule_Factory(t) {
        return new (t || _EmployeeprofileModule)();
      };

      _EmployeeprofileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _EmployeeprofileModule
      });
      _EmployeeprofileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _employeeprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeprofileRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_EmployeeprofileModule, {
          declarations: [_employee_personal_details_employee_personal_details_component__WEBPACK_IMPORTED_MODULE_1__.EmployeePersonalDetailsComponent, _employee_work_employee_work_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeWorkComponent, _employee_education_employee_education_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeEducationComponent, _employee_document_employee_document_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeDocumentComponent, _my_profile_employee_my_profile_employee_component__WEBPACK_IMPORTED_MODULE_5__.MyProfileEmployeeComponent, _employee_education_add_education_employee_add_education_employee_component__WEBPACK_IMPORTED_MODULE_6__.AddEducationEmployeeComponent, _employee_education_edd_education_employee_edd_education_employee_component__WEBPACK_IMPORTED_MODULE_7__.EddEducationEmployeeComponent, _employee_document_document_idc_add_form_document_idc_add_form_component__WEBPACK_IMPORTED_MODULE_9__.DocumentIdcAddFormComponent, _employee_document_document_idc_add_form_edit_idform_edit_idform_component__WEBPACK_IMPORTED_MODULE_10__.EditIDFormComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _employeeprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeprofileRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    53691:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/employeeprofile/my-profile-employee/my-profile-employee.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyProfileEmployeeComponent": function MyProfileEmployeeComponent() {
          return (
            /* binding */
            _MyProfileEmployeeComponent
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

      var _MyProfileEmployeeComponent = /*#__PURE__*/function () {
        function _MyProfileEmployeeComponent() {
          _classCallCheck(this, _MyProfileEmployeeComponent);
        }

        _createClass(_MyProfileEmployeeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MyProfileEmployeeComponent;
      }();

      _MyProfileEmployeeComponent.ɵfac = function MyProfileEmployeeComponent_Factory(t) {
        return new (t || _MyProfileEmployeeComponent)();
      };

      _MyProfileEmployeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MyProfileEmployeeComponent,
        selectors: [["app-my-profile-employee"]],
        decls: 20,
        vars: 0,
        consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./emp-profile", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./emp-work", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["routerLink", "./emp-education", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["routerLink", "./emp-document", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-3", "col-sm-0", "col-xs-0"], [1, "mt-1"]],
        template: function MyProfileEmployeeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Document");

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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_employeeprofile_employeeprofile_module_ts-es5.js.map