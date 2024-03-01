(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_product-setting_product-setting_module_ts"], {
    /***/
    40323:
    /*!************************************************************************!*\
      !*** ./src/app/pages/product-setting/add-brand/add-brand.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBrandComponent": function AddBrandComponent() {
          return (
            /* binding */
            _AddBrandComponent
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


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function AddBrandComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Brand Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddBrandComponent = /*#__PURE__*/function () {
        function _AddBrandComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, router) {
          _classCallCheck(this, _AddBrandComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.router = router;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AddBrandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.brandForm = this.formBuilder.group({
              brandName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.brandForm.controls;
          }
        }, {
          key: "addBrand",
          value: function addBrand() {
            var _this = this;

            this.submitted = true;

            if (this.brandForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var body = {
                "id": "",
                "name": this.brandForm.controls.brandName.value,
                // "isDefault": true,
                "userId": this.currentUser.id,
                "isActive": true
              };
              this.productService.postBrand(body).then(function (res) {
                if (res) {
                  _this.toastService.toastMsg({
                    title: "Success",
                    content: "Brand Added Successfully!!!"
                  });

                  _this.productService.notifyProductAdded();

                  _this.dialogRef.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this.toastService.toastMsg({
                    title: "Error",
                    content: _this.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went To Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "clearInput",
          value: function clearInput() {
            this.dialogRef.close();
          }
        }]);

        return _AddBrandComponent;
      }();

      _AddBrandComponent.ɵfac = function AddBrandComponent_Factory(t) {
        return new (t || _AddBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _AddBrandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AddBrandComponent,
        selectors: [["app-add-brand"]],
        decls: 20,
        vars: 5,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-6", "col-md-12", "col-xl-6", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Brand", "formControlName", "brandName", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"]],
        template: function AddBrandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBrandComponent_Template_button_click_4_listener() {
              return ctx.clearInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddBrandComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBrandComponent_Template_button_click_18_listener() {
              return ctx.addBrand();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.brandForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.f.brandName.invalid && ctx.f.brandName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.brandName.touched) && (ctx.f.brandName.errors == null ? null : ctx.f.brandName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1icmFuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtYnJhbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bk1hcmdpblJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1vZGFsSGVhZGVyRm9ybWF0IHtcclxuICAgIGNvbG9yOiAjRUI4QjNGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    28528:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/product-setting/add-category/add-category.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCategoryComponent": function AddCategoryComponent() {
          return (
            /* binding */
            _AddCategoryComponent
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


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function AddCategoryComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Category Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddCategoryComponent = /*#__PURE__*/function () {
        function _AddCategoryComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, commonService) {
          _classCallCheck(this, _AddCategoryComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AddCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryForm = this.formBuilder.group({
              categoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.categoryForm.controls;
          }
        }, {
          key: "addCategory",
          value: function addCategory() {
            var _this2 = this;

            this.submitted = true;

            if (this.categoryForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var newCategory = {
                id: '',
                categoryName: this.categoryForm.value.categoryName,
                // isDefault: true, // Adjust these values as needed
                userId: this.currentUser.id,
                isActive: true
              };
              this.productService.postCategory(newCategory).then(function (res) {
                if (res.success) {
                  _this2.commonService.notifyDataAdded();

                  _this2.toastService.toastMsg({
                    title: "Success",
                    content: "Category Added Successfully"
                  });

                  _this2.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this2.toastService.toastMsg({
                    title: "Error",
                    content: _this2.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this2.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went To Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _AddCategoryComponent;
      }();

      _AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) {
        return new (t || _AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _AddCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddCategoryComponent,
        selectors: [["app-add-category"]],
        decls: 20,
        vars: 5,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-6", "col-md-12", "col-xl-6", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Category", "formControlName", "categoryName", 3, "ngClass"], ["class", "text-danger ", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"]],
        template: function AddCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddCategoryComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCategoryComponent_Template_button_click_18_listener() {
              return ctx.addCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.categoryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.f.categoryName.invalid && ctx.f.categoryName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.categoryName.touched) && (ctx.f.categoryName.errors == null ? null : ctx.f.categoryName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bk1hcmdpblJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm1vZGFsSGVhZGVyRm9ybWF0IHtcclxuICAgIGNvbG9yOiAjRUI4QjNGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    76425:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/product-setting/add-sub-category/add-sub-category.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSubCategoryComponent": function AddSubCategoryComponent() {
          return (
            /* binding */
            _AddSubCategoryComponent
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


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function AddSubCategoryComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r3.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r0.f.category.invalid && ctx_r0.f.category.touched && ctx_r0.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r3.categoryName, " ");
        }
      }

      function AddSubCategoryComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSubCategoryComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sub Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _AddSubCategoryComponent = /*#__PURE__*/function () {
        function _AddSubCategoryComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, commonService) {
          _classCallCheck(this, _AddSubCategoryComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AddSubCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subCategoryFrom = this.formBuilder.group({
              subCategoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              category: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
            this.getAllCategory();
          }
        }, {
          key: "getAllCategory",
          value: function getAllCategory() {
            var _this3 = this;

            this.productService.getCategory({
              data: {},
              userId: this.currentUser.id,
              size: 1000,
              page: 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                _this3.categoryList = res.data.pageData;
              }
            }, function (err) {
              if (err.error.expose) {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: _this3.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.subCategoryFrom.controls;
          }
        }, {
          key: "addCategory",
          value: function addCategory() {
            var _this4 = this;

            this.submitted = true;

            if (this.subCategoryFrom.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var newCategory = {
                id: '',
                name: this.subCategoryFrom.value.subCategoryName,
                userId: this.currentUser.id,
                categoryId: "".concat(this.subCategoryFrom.value.category),
                isActive: true
              };
              this.productService.postSubCategory(newCategory).then(function (res) {
                if (res.success) {
                  _this4.commonService.notifyDataAdded();

                  _this4.toastService.toastMsg({
                    title: "Success",
                    content: "Sub Category Added Successfully"
                  });

                  _this4.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this4.toastService.toastMsg({
                    title: "Error",
                    content: _this4.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this4.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _AddSubCategoryComponent;
      }();

      _AddSubCategoryComponent.ɵfac = function AddSubCategoryComponent_Factory(t) {
        return new (t || _AddSubCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _AddSubCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddSubCategoryComponent,
        selectors: [["app-add-sub-category"]],
        decls: 29,
        vars: 7,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-xl-12", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Category", "formControlName", "category"], [3, "value", "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Sub category", "formControlName", "subCategoryName", 3, "ngClass"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [3, "value", "ngClass"], [1, "text-danger"]],
        template: function AddSubCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSubCategoryComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddSubCategoryComponent_mat_option_16_Template, 2, 5, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSubCategoryComponent_mat_error_17_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AddSubCategoryComponent_mat_error_25_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSubCategoryComponent_Template_button_click_27_listener() {
              return ctx.addCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.subCategoryFrom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.category.touched) && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.f.subCategoryName.invalid && ctx.f.subCategoryName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.subCategoryName.touched) && (ctx.f.subCategoryName.errors == null ? null : ctx.f.subCategoryName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdWItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXN1Yi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuTWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWxIZWFkZXJGb3JtYXQge1xyXG4gICAgY29sb3I6ICNFQjhCM0Y7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    10240:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/product-setting/brand-product/brand-product.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BrandProductComponent": function BrandProductComponent() {
          return (
            /* binding */
            _BrandProductComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-brand/add-brand.component */
      40323);
      /* harmony import */


      var _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../edit-brand/edit-brand.component */
      70400);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function BrandProductComponent_span_12_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_span_12_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r10.upiCheckedId.length > 0 ? ctx_r10.getUPIcheckId(ctx_r10.upiCheckedId) : ctx_r10.getSingleCheckedId(ctx_r10.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function BrandProductComponent_span_12_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BrandProductComponent_span_12_button_1_span_1_Template, 1, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.checkSingleArray.length > 0 || ctx_r8.isChecked);
        }
      }

      function BrandProductComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BrandProductComponent_span_12_button_1_Template, 2, 1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.isChecked);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "active": a0,
          "inactive": a1
        };
      };

      function BrandProductComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function BrandProductComponent_tr_21_Template_input_change_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.onChekedsingleCheck($event, item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_tr_21_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.isActive(item_r12.id, item_r12.isActive);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_tr_21_Template_span_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.editBrand(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_tr_21_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.getBrandId(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.upiCheckedId.includes(item_r12.id))("value", item_r12.id)("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r12.name ? item_r12.name : "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, item_r12.isActive, !item_r12.isActive))("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", item_r12.isDefault);
        }
      }

      function BrandProductComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20, 30];
      };

      function BrandProductComponent_mat_paginator_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-paginator", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function BrandProductComponent_mat_paginator_24_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", ctx_r3.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1))("length", ctx_r3.totalrow)("pageIndex", ctx_r3.currentPageNo);
        }
      }

      function BrandProductComponent_h4_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Are You Sure To Delete All Brand?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function BrandProductComponent_h4_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Are You Sure To Delete Selected Brand?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function BrandProductComponent_a_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_a_58_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.deleteBrand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function BrandProductComponent_a_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_a_59_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.deleteBrand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Delete Selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _BrandProductComponent = /*#__PURE__*/function () {
        function _BrandProductComponent(formBuilder, toastService, titleCasePipe, productService, dialog) {
          _classCallCheck(this, _BrandProductComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialog = dialog;
          this.productBrand = [];
          this.iseditBrand = false;
          this.brandId = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.p = 1;
          this.pagesize = 1;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingle = false;
          this.upiCheckedId = [];
          this.checkSingleArray = [];
          this.isChecked = false;
          this.archiveIconfalse = false;
          this.allSelect = false;
          this.checkSelect = false;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_BrandProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.getAllBrand();
            this.productService.productAdded$.subscribe(function () {
              _this5.getAllBrand();
            }); // Search

            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(function () {
              _this5.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this5.getBrandSearch(searchKey.trim());
              } else if (searchKey.trim() === '') {
                // this.isLoading = true; // Hide the loader if the search key is less than the threshold
                _this5.getAllBrand();
              } else {
                _this5.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getAllBrand",
          value: function getAllBrand() {
            var _this6 = this;

            this.productService.getBrandList({
              data: {},
              userId: this.currentUser.id,
              size: this.partyPageSize,
              page: this.currentPageNo + 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              _this6.productBrand = res.data.pageData;
              _this6.p = res.data.currentPage;
              _this6.totalrow = res.data.totalrows;
              _this6.toatlPages = res.data.totalPages;
            });
          }
        }, {
          key: "openBrandForm",
          value: function openBrandForm() {
            var dialogRef = this.dialog.open(_add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_0__.AddBrandComponent, {
              width: '500px',
              height: 'auto',
              data: {},
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "editBrand",
          value: function editBrand(brandId) {
            var dialogRef = this.dialog.open(_edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_1__.EditBrandComponent, {
              width: '500px',
              height: 'auto',
              data: {
                brandId: brandId
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "getBrandId",
          value: function getBrandId(brandId) {
            this.brandId.push(brandId);
          }
        }, {
          key: "deleteBrand",
          value: function deleteBrand() {
            var _this7 = this;

            var body = {
              "brandId": this.brandId
            };
            this.productService.deleteBrand(body, this.currentUser.id).then(function (res) {
              _this7.toastService.toastMsg({
                title: "Success",
                content: "Brand Deleted Successfully!!!"
              });

              _this7.getAllBrand();

              _this7.checkSelectsingle = false;
              _this7.upiCheckedId = [];
              _this7.checkSelect = false;
              _this7.allSelect = false;
              _this7.checkSingleArray = [];
              _this7.archiveIconfalse = false;
              _this7.allSelect = false;
              _this7.checkSelectsinglefalse = false;
              _this7.isChecked = false;
              _this7.checkSingleArray = [];
            }, function (err) {
              if (err.error.expose) {
                _this7.toastService.toastMsg({
                  title: "Error",
                  content: _this7.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this7.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went To Wrong."
                });
              }
            });
          }
        }, {
          key: "isActive",
          value: function isActive(id, _isActive) {
            var _this8 = this;

            var newStatus = !_isActive; // Toggle between '1' and '0'

            var body = {
              "isActive": newStatus
            };
            this.productService.chnageBrandStatus(body, id).then(function (res) {
              if (res.success) {
                if (newStatus) {
                  _this8.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Active"
                  });

                  _this8.getAllBrand();
                } else {
                  _this8.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Inactive"
                  });

                  _this8.getAllBrand();
                }
              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.productBrand.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.onSearchInputChange(searchInput.value);
              } else {
                this.getAllBrand();
              }
            }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, expenseId) {
            if (e.target.checked) {
              this.upiCheckedId.push(expenseId);
            } else {
              var index = this.upiCheckedId.indexOf(expenseId);

              if (index !== -1) {
                this.upiCheckedId.splice(index, 1);
              }
            } // const checkArray: FormArray = this.form.get('checkArray') as FormArray;


            if (e.target.checked) {
              this.checkSingleArray.push(e.target.value);
            } else {
              this.checkSingleArray = [];
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(brandId) {
            this.brandId = brandId;
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(brandId) {
            this.brandId = brandId;
          }
        }, {
          key: "showDeleteButton",
          value: function showDeleteButton() {
            return this.upiCheckedId.length > 0;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this9 = this;

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.productBrand.map(function (item) {
              if (id == -1) {
                if (_this9.isChecked == true) {
                  _this9.archiveIconfalse = true;
                  _this9.checkSelectsinglefalse = true;
                  _this9.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this9.archiveIconfalse = false;
                  _this9.checkSelectsinglefalse = false;
                  _this9.checkSelectsingle = false;
                  _this9.upiCheckedId = [];
                }
              }
            });
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            // Emit the search key to the searchSubject
            this.searchSubject.next(searchKey);
          }
        }, {
          key: "getBrandSearch",
          value: function getBrandSearch(searchKey) {
            var _this10 = this;

            setTimeout(function () {
              _this10.productService.getBrandList({
                data: {},
                userId: _this10.currentUser.id,
                size: _this10.partyPageSize,
                page: _this10.currentPageNo + 1,
                search: searchKey.toLowerCase(),
                isActive: ''
              }).then(function (res) {
                if (res.success) {
                  _this10.productBrand = res.data.pageData;
                  _this10.p = res.data.currentPage;
                  _this10.totalrow = res.data.totalrows;
                  _this10.toatlPages = res.data.totalPages;
                } // If row's and search key is not specified


                if (_this10.totalrow === 0 && !(searchKey === "")) {
                  _this10.toastService.toastMsg({
                    title: "Error",
                    content: "Not Found!!!"
                  });
                }
              }, function (err) {
                if (err.error.expose) {
                  _this10.toastService.toastMsg({
                    title: "Error",
                    content: _this10.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this10.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });

              _this10.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }]);

        return _BrandProductComponent;
      }();

      _BrandProductComponent.ɵfac = function BrandProductComponent_Factory(t) {
        return new (t || _BrandProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
      };

      _BrandProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _BrandProductComponent,
        selectors: [["app-brand-product"]],
        decls: 60,
        vars: 11,
        consts: [["id", "showoptionHide", 1, "row", "mb-3"], [1, "col-3", "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Brand", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "col-5"], [1, "col-4"], [1, "table-container", "tableContainerHeight", "mb-2"], [1, "table-div", "TableHeight"], [1, "table", "table-responsive", "TableHeight"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "display", "flex", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", "mb-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", "varticalAlign"], [1, "text-nowrap", "flex", "justify-content-end", "varticalAlign"], [4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", "ms-auto", "mt-3", 3, "click"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modalWidth", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "modalHeading"], [1, "text-center", "modalfontFamily"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["class", "text-center ", 4, "ngIf"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn"], ["class", "bi-trash icon-color fs-1 iconFontSize", "data-bs-toggle", "tooltip", "style", "color : red", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", "iconFontSize", 2, "color", "red", 3, "click"], [1, "checkbox", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "disabled", "change"], [1, "text-nowrap", "thAlign"], [1, ""], [1, "toggle-button", 3, "ngClass", "disabled", "click"], [1, "toggle-slider"], [1, "flex", "justify-content-end"], ["type", "button", 1, "btn", 3, "disabled"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 3, "disabled", "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", "deleteIconColor"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function BrandProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BrandProductComponent_Template_input_input_2_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function BrandProductComponent_Template_input_change_11_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function BrandProductComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BrandProductComponent_span_12_Template, 2, 1, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, BrandProductComponent_tr_21_Template, 17, 12, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, BrandProductComponent_tbody_22_Template, 4, 0, "tbody", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, BrandProductComponent_mat_paginator_24_Template, 1, 5, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_Template_button_click_26_listener() {
              return ctx.openBrandForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Create New");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Delete Brand? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h4", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Are You Sure To Delete Brand? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandProductComponent_Template_a_click_42_listener() {
              return ctx.deleteBrand();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Delete Brand? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, BrandProductComponent_h4_53_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, BrandProductComponent_h4_54_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, BrandProductComponent_a_58_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, BrandProductComponent_a_59_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", -1)("checked", ctx.upiCheckedId.length === ctx.productBrand.length)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.productBrand);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.productBrand.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.productBrand.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator],
        styles: [".searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-top: 0px solid transparent;\n}\n\n.tableContainerHeight[_ngcontent-%COMP%] {\n  max-height: 350px;\n  min-height: 350px;\n  overflow-y: auto;\n}\n\n.TableHeight[_ngcontent-%COMP%] {\n  max-height: 520px;\n  min-height: 100px;\n}\n\n.varticalAlign[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.deleteIconColor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\nth[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBLGtEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJicmFuZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEJhciB7XHJcbiAgZmxleC1iYXNpczogMjQwcHg7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50YWJsZUNvbnRhaW5lckhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLlRhYmxlSGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiA1MjBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnZhcnRpY2FsQWxpZ24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kZWxldGVJY29uQ29sb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8vIFRvZ2dsZSBidXR0b24gQ3NzXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRvZ2dsZS1zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG59XHJcblxyXG4uYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSAudG9nZ2xlLXNsaWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2JlNTtcclxuICBib3JkZXItY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMTA4MGU7XHJcbn1cclxuXHJcbi8qIE9wdGlvbmFsOiBDZW50ZXIgdGhlIHRvZ2dsZSBzbGlkZXIgdmVydGljYWxseSAqL1xyXG4udG9nZ2xlLWJ1dHRvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUtYm9keS10ciB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGh7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    64058:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/product-setting/category-product/category-product.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryProductComponent": function CategoryProductComponent() {
          return (
            /* binding */
            _CategoryProductComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-category/add-category.component */
      28528);
      /* harmony import */


      var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../edit-category/edit-category.component */
      97645);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function CategoryProductComponent_span_12_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_span_12_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r10.upiCheckedId.length > 0 ? ctx_r10.getUPIcheckId(ctx_r10.upiCheckedId) : ctx_r10.getSingleCheckedId(ctx_r10.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CategoryProductComponent_span_12_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryProductComponent_span_12_button_1_span_1_Template, 1, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.checkSingleArray.length > 0 || ctx_r8.isChecked);
        }
      }

      function CategoryProductComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryProductComponent_span_12_button_1_Template, 2, 1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.isChecked);
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "active": a0,
          "inactive": a1,
          "disabled": a2
        };
      };

      function CategoryProductComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CategoryProductComponent_tr_21_Template_input_change_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r14.onChekedsingleCheck($event, item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_tr_21_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r16.isActive(item_r12.id, item_r12.isActive);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_tr_21_Template_span_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.editCategory(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_tr_21_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18.OpenDeleteModal(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.upiCheckedId.includes(item_r12.id))("value", item_r12.id)("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.categoryName ? item_r12.categoryName : "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](8, _c0, item_r12.isActive, !item_r12.isActive, item_r12.isDefault));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);
        }
      }

      function CategoryProductComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20, 30];
      };

      function CategoryProductComponent_mat_paginator_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function CategoryProductComponent_mat_paginator_24_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r3.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1))("length", ctx_r3.totalrow)("pageIndex", ctx_r3.currentPageNo);
        }
      }

      function CategoryProductComponent_h4_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete All Category?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CategoryProductComponent_h4_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete Selected Category?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CategoryProductComponent_a_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_a_58_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CategoryProductComponent_a_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_a_59_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete Selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _CategoryProductComponent = /*#__PURE__*/function () {
        function _CategoryProductComponent(formBuilder, toastService, titleCasePipe, productService, dialog, commonService) {
          _classCallCheck(this, _CategoryProductComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialog = dialog;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.categoryList = [];
          this.categoryId = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.p = 1;
          this.pagesize = 1;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingle = false;
          this.upiCheckedId = [];
          this.checkSingleArray = [];
          this.isChecked = false;
          this.archiveIconfalse = false;
          this.allSelect = false;
          this.checkSelect = false;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        }

        _createClass(_CategoryProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.commonService.rowAdded$.subscribe(function () {
              // Fetch the updated list
              _this11.getAllCategory();
            });
            this.getAllCategory();
            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(function () {
              _this11.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this11.getSubCategorySearch(searchKey.trim());
              } else if (searchKey === '') {
                // this.isLoading = true; // Hide the loader if the search key is less than the threshold
                _this11.getAllCategory();
              } else {
                _this11.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getAllCategory",
          value: function getAllCategory() {
            var _this12 = this;

            this.productService.getCategory({
              data: {},
              userId: this.currentUser.id,
              size: this.partyPageSize,
              page: this.currentPageNo + 1,
              search: "",
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                _this12.categoryList = res.data.pageData;
                _this12.p = res.data.currentPage;
                _this12.totalrow = res.data.totalrows;
                _this12.toatlPages = res.data.totalPages;
              }
            }, function (err) {
              if (err.error.expose) {
                _this12.toastService.toastMsg({
                  title: "Error",
                  content: _this12.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this12.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "openCategoryForm",
          value: function openCategoryForm() {
            var dialogRef = this.dialog.open(_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_0__.AddCategoryComponent, {
              width: '500px',
              height: 'auto',
              data: {},
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "editCategory",
          value: function editCategory(categoryId) {
            var dialogRef = this.dialog.open(_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__.EditCategoryComponent, {
              width: '500px',
              height: 'auto',
              data: {
                categoryId: categoryId
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory() {
            var _this13 = this;

            var body = {
              categoryId: this.categoryId
            };
            this.productService.deleteCategory(body, this.currentUser.id).then(function (res) {
              if (res.success) {
                _this13.commonService.notifyDataAdded();

                _this13.toastService.toastMsg({
                  title: "Success",
                  content: "Category deleted successfully"
                });

                _this13.checkSelectsingle = false;
                _this13.upiCheckedId = [];
                _this13.checkSelect = false;
                _this13.allSelect = false;
                _this13.checkSingleArray = [];
                _this13.archiveIconfalse = false;
                _this13.allSelect = false;
                _this13.checkSelectsinglefalse = false;
                _this13.isChecked = false;
                _this13.checkSingleArray = [];

                _this13.getAllCategory();
              }
            }, function (err) {
              if (err.error.expose) {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: _this13.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this13.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "OpenDeleteModal",
          value: function OpenDeleteModal(id) {
            this.categoryId.push(id);
          }
        }, {
          key: "isActive",
          value: function isActive(id, _isActive2) {
            var _this14 = this;

            var newStatus = !_isActive2; // Toggle between '1' and '0'

            var body = {
              "isActive": newStatus
            };
            this.productService.categoryChangeStatus(body, id).then(function (res) {
              if (res.success) {
                if (newStatus) {
                  _this14.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Active"
                  });

                  _this14.getAllCategory();
                } else {
                  _this14.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Inactive"
                  });

                  _this14.getAllCategory();
                }
              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.categoryList.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.onSearchInputChange(searchInput.value);
              } else {
                this.getAllCategory();
              }
            }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, expenseId) {
            if (e.target.checked) {
              this.upiCheckedId.push(expenseId);
            } else {
              var index = this.upiCheckedId.indexOf(expenseId);

              if (index !== -1) {
                this.upiCheckedId.splice(index, 1);
              }
            } // const checkArray: FormArray = this.form.get('checkArray') as FormArray;


            if (e.target.checked) {
              this.checkSingleArray.push(e.target.value);
            } else {
              this.checkSingleArray = [];
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(categoryId) {
            this.categoryId = categoryId;
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(categoryId) {
            this.categoryId = categoryId;
          }
        }, {
          key: "showDeleteButton",
          value: function showDeleteButton() {
            return this.upiCheckedId.length > 0;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this15 = this;

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.categoryList.filter(function (item) {
              return !item.isDefault;
            }).map(function (item) {
              if (id == -1) {
                if (_this15.isChecked == true) {
                  _this15.archiveIconfalse = true;
                  _this15.checkSelectsinglefalse = true;
                  _this15.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this15.archiveIconfalse = false;
                  _this15.checkSelectsinglefalse = false;
                  _this15.checkSelectsingle = false;
                  _this15.upiCheckedId = [];
                }
              }
            });
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            // Emit the search key to the searchSubject
            this.searchSubject.next(searchKey);
          }
        }, {
          key: "getSubCategorySearch",
          value: function getSubCategorySearch(searchKey) {
            var _this16 = this;

            setTimeout(function () {
              _this16.productService.getCategory({
                data: {},
                userId: _this16.currentUser.id,
                size: _this16.partyPageSize,
                page: _this16.currentPageNo + 1,
                search: searchKey.toLowerCase(),
                isActive: ''
              }).then(function (res) {
                if (res.success) {
                  _this16.categoryList = res.data.pageData;
                  _this16.p = res.data.currentPage;
                  _this16.totalrow = res.data.totalrows;
                  _this16.toatlPages = res.data.totalPages;
                }

                if (_this16.totalrow === 0 && !(searchKey === "")) {
                  _this16.toastService.toastMsg({
                    title: "Error",
                    content: "Not Found!!!"
                  });
                }
              }, function (err) {
                if (err.error.expose) {
                  _this16.toastService.toastMsg({
                    title: "Error",
                    content: _this16.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this16.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });

              _this16.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }]);

        return _CategoryProductComponent;
      }();

      _CategoryProductComponent.ɵfac = function CategoryProductComponent_Factory(t) {
        return new (t || _CategoryProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService));
      };

      _CategoryProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CategoryProductComponent,
        selectors: [["app-category-product"]],
        decls: 60,
        vars: 11,
        consts: [["id", "showoptionHide", 1, "row", "mb-3"], [1, "col-3", "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Category", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "col-5"], [1, "col-4"], [1, "table-container", "tableContainerHeight", "mb-2"], [1, "table-div", "TableHeight"], [1, "table", "table-responsive", "TableHeight"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "display", "flex", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", "mb-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", "varticalAlign"], [1, "text-nowrap", "flex", "justify-content-end", "varticalAlign"], [4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", "ms-auto", "mt-3", 3, "click"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modalWidth", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "modalHeading"], [1, "text-center", "modalfontFamily"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["class", "text-center ", 4, "ngIf"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn"], ["class", "bi-trash icon-color fs-1 iconFontSize", "data-bs-toggle", "tooltip", "style", "color : red", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", "iconFontSize", 2, "color", "red", 3, "click"], [1, "checkbox", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "disabled", "change"], [1, "text-nowrap", "thAlign"], [1, ""], [1, "toggle-button", 3, "ngClass", "click"], [1, "toggle-slider"], [1, "flex", "justify-content-end"], ["type", "button", 1, "btn", 3, "disabled"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 3, "disabled", "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", "deleteIconColor"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function CategoryProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function CategoryProductComponent_Template_input_input_2_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CategoryProductComponent_Template_input_change_11_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function CategoryProductComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CategoryProductComponent_span_12_Template, 2, 1, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CategoryProductComponent_tr_21_Template, 17, 12, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CategoryProductComponent_tbody_22_Template, 4, 0, "tbody", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CategoryProductComponent_mat_paginator_24_Template, 1, 5, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_Template_button_click_26_listener() {
              return ctx.openCategoryForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Create New");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Delete Category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h4", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Are you sure to delete category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CategoryProductComponent_Template_a_click_42_listener() {
              return ctx.deleteCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Delete Category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CategoryProductComponent_h4_53_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, CategoryProductComponent_h4_54_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, CategoryProductComponent_a_58_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CategoryProductComponent_a_59_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1)("checked", ctx.upiCheckedId.length === ctx.categoryList.length)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeleteButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.categoryList.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.categoryList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator],
        styles: [".searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-top: 0px solid transparent;\n}\n\n.tableContainerHeight[_ngcontent-%COMP%] {\n  max-height: 350px;\n  min-height: 350px;\n  overflow-y: auto;\n}\n\n.TableHeight[_ngcontent-%COMP%] {\n  max-height: 520px;\n  min-height: 100px;\n}\n\n.varticalAlign[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.deleteIconColor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n\n\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  \n  pointer-events: none;\n  \n}\n\n\n\n.disabled[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n  cursor: not-allowed;\n  \n}\n\n\n\n.disabled[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: none;\n  transition: none;\n  \n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\nth[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBLGtEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0Esc0NBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQWMsMkNBQUE7RUFDZCxvQkFBQTtFQUFzQiwyQkFBQTtBQUV4Qjs7QUFDQSwwREFBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUFxQiwwQ0FBQTtBQUd2Qjs7QUFBQSwwREFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUFrQixxQ0FBQTtBQUlwQjs7QUFEQTtFQUNFLHVCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7O0FBTkE7RUFDRSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtBQU1GIiwiZmlsZSI6ImNhdGVnb3J5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQmFyIHtcclxuICBmbGV4LWJhc2lzOiAyNDBweDtcclxufVxyXG5cclxudGhlYWQge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRhYmxlQ29udGFpbmVySGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uVGFibGVIZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IDUyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udmFydGljYWxBbGlnbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRlbGV0ZUljb25Db2xvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gVG9nZ2xlIGJ1dHRvbiBDc3NcclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udG9nZ2xlLXNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5hY3RpdmUgLnRvZ2dsZS1zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxufVxyXG5cclxuLmluYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3YmU1O1xyXG4gIGJvcmRlci1jb2xvcjogIzJjN2JlNTtcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b246Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAxMDgwZTtcclxufVxyXG5cclxuLyogT3B0aW9uYWw6IENlbnRlciB0aGUgdG9nZ2xlIHNsaWRlciB2ZXJ0aWNhbGx5ICovXHJcbi50b2dnbGUtYnV0dG9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZGl0aW9uYWwgQ1NTIGZvciBkaXNhYmxlZCBzdGF0ZSAqL1xyXG4uZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTsgLyogUmVkdWNlIG9wYWNpdHkgZm9yIGRpc2FibGVkIGFwcGVhcmFuY2UgKi9cclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogRGlzYWJsZSBwb2ludGVyIGV2ZW50cyAqL1xyXG59XHJcblxyXG4vKiBNb2RpZnkgdGhlIHRvZ2dsZSBidXR0b24gc3R5bGUgZm9yIHRoZSBkaXNhYmxlZCBzdGF0ZSAqL1xyXG4uZGlzYWJsZWQgLnRvZ2dsZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IC8qIENoYW5nZSBjdXJzb3IgdG8gaW5kaWNhdGUgbm90IGFsbG93ZWQgKi9cclxufVxyXG5cclxuLyogTW9kaWZ5IHRoZSB0b2dnbGUgc2xpZGVyIHN0eWxlIGZvciB0aGUgZGlzYWJsZWQgc3RhdGUgKi9cclxuLmRpc2FibGVkIC50b2dnbGUtc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRyYW5zaXRpb246IG5vbmU7IC8qIFJlbW92ZSB0cmFuc2l0aW9uIGZvciB0aGUgc2xpZGVyICovXHJcbn1cclxuXHJcbi50YWJsZS1ib2R5LXRyIHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JiYjtcclxufVxyXG50aHtcclxuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    44507:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/product-setting/custom-fields/components/add-custom-fields/add-custom-fields.component.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCustomFieldsComponent": function AddCustomFieldsComponent() {
          return (
            /* binding */
            _AddCustomFieldsComponent
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


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function AddCustomFieldsComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddCustomFieldsComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, item_r4), " ");
        }
      }

      function AddCustomFieldsComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddCustomFieldsComponent_div_27_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomFieldsComponent_div_27_div_4_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var i_r7 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.removeDropdownOption(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "Option ", i_r7 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", option_r6);
        }
      }

      function AddCustomFieldsComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddCustomFieldsComponent_div_27_div_4_Template, 6, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomFieldsComponent_div_27_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.addDropdownOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Add Dropdown Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.dropdownOptions.controls);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddCustomFieldsComponent = /*#__PURE__*/function () {
        function _AddCustomFieldsComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, commonService) {
          _classCallCheck(this, _AddCustomFieldsComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.types = ['text', 'dropdown'];
        }

        _createClass(_AddCustomFieldsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customForm = this.formBuilder.group({
              customFieldName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              type: ['text', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              dropdownOptions: this.formBuilder.array([]) // Initialize as an empty array

            }); // Add one dropdown option initially

            this.dropdownOptions.push(this.formBuilder.control(''));
          } // Getters for easier access to form controls

        }, {
          key: "dropdownOptions",
          get: function get() {
            return this.customForm.get('dropdownOptions');
          }
        }, {
          key: "f",
          get: function get() {
            return this.customForm.controls;
          }
        }, {
          key: "postCustomFields",
          value: function postCustomFields() {
            var _this17 = this;

            this.submitted = true;
            var optionsArray = this.customForm.value.dropdownOptions.map(function (option) {
              return {
                id: "",
                optionName: option ? option : ''
              };
            });
            console.log(this.customForm);

            if (this.customForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var body = {
                id: '',
                fieldName: this.customForm.value.customFieldName,
                type: this.customForm.value.type,
                userId: this.currentUser.id,
                isActive: true,
                options: optionsArray ? optionsArray : []
              };
              this.productService.postCustomFields(body).then(function (res) {
                if (res.success) {
                  _this17.commonService.notifyDataAdded();

                  _this17.toastService.toastMsg({
                    title: "Success",
                    content: "Customize field added successfully"
                  });

                  _this17.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this17.toastService.toastMsg({
                    title: "Error",
                    content: _this17.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this17.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          } // Add a new option to the dropdownOptions array

        }, {
          key: "addDropdownOption",
          value: function addDropdownOption() {
            this.dropdownOptions.push(this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required));
          } // Remove an option from the dropdownOptions array

        }, {
          key: "removeDropdownOption",
          value: function removeDropdownOption(index) {
            this.dropdownOptions.removeAt(index);
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _AddCustomFieldsComponent;
      }();

      _AddCustomFieldsComponent.ɵfac = function AddCustomFieldsComponent_Factory(t) {
        return new (t || _AddCustomFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _AddCustomFieldsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddCustomFieldsComponent,
        selectors: [["app-add-custom-fields"]],
        decls: 31,
        vars: 8,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-xl-12", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Field Name", "formControlName", "customFieldName", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-12"], ["formControlName", "type", "placeholder", "Type", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-6 col-md-6 col-xl-6 col-sm-12", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"], [3, "value"], ["formArrayName", "dropdownOptions"], ["class", "row-container", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 1, "ms-2", "mt-2", 3, "click"], [1, "row-container"], ["matInput", "", "matNativeControl", "", 3, "formControl", "placeholder"], ["mat-icon-button", "", 3, "click"]],
        template: function AddCustomFieldsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Custom Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomFieldsComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Field Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddCustomFieldsComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AddCustomFieldsComponent_mat_option_25_Template, 3, 4, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddCustomFieldsComponent_mat_error_26_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddCustomFieldsComponent_div_27_Template, 7, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomFieldsComponent_Template_button_click_29_listener() {
              return ctx.postCustomFields();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.customForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.f.customFieldName.invalid && ctx.f.customFieldName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.customFieldName.touched) && (ctx.f.customFieldName.errors == null ? null : ctx.f.customFieldName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.type.touched) && (ctx.f.type.errors == null ? null : ctx.f.type.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.type.value === "dropdown");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
        styles: [".row-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b20tZmllbGRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWN1c3RvbS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    14393:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/pages/product-setting/custom-fields/components/edit-custom-fields/edit-custom-fields.component.ts ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditCustomFieldsComponent": function EditCustomFieldsComponent() {
          return (
            /* binding */
            _EditCustomFieldsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function EditCustomFieldsComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditCustomFieldsComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, item_r4), " ");
        }
      }

      function EditCustomFieldsComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Field Type is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditCustomFieldsComponent_div_27_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCustomFieldsComponent_div_27_div_4_Template_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var i_r7 = restoredCtx.index;
            var option_r6 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.removeDropdownOption(i_r7, option_r6.value.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "Option ", i_r7 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", option_r6.get("optionName"));
        }
      }

      function EditCustomFieldsComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Options");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditCustomFieldsComponent_div_27_div_4_Template, 6, 2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCustomFieldsComponent_div_27_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.addDropdownOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Add Dropdown Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.dropdownOptions.controls);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _EditCustomFieldsComponent = /*#__PURE__*/function () {
        // removedOptions: { id: number }[] = [];
        function _EditCustomFieldsComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, data, commonService) {
          _classCallCheck(this, _EditCustomFieldsComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.types = ['text', 'dropdown']; // Define an array to store removed options

          this.removedOptions = [];
          this.fieldId = this.data.fieldId;
        }

        _createClass(_EditCustomFieldsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customForm = this.formBuilder.group({
              customFieldName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              type: ['text', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              dropdownOptions: this.formBuilder.array([]) // Initialize as an empty array

            });
            this.getCustomFields();
          } // Getters for easier access to form controls

        }, {
          key: "dropdownOptions",
          get: function get() {
            return this.customForm.get('dropdownOptions');
          }
        }, {
          key: "f",
          get: function get() {
            return this.customForm.controls;
          }
        }, {
          key: "getCustomFields",
          value: function getCustomFields() {
            var _this18 = this;

            this.productService.getCustomFields({
              data: {},
              userId: this.currentUser.id,
              size: 1000,
              page: 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                var customList = res.data.pageData;
                var foundField = customList.find(function (item) {
                  return item.id === _this18.fieldId;
                });

                if (foundField && foundField.fieldName) {
                  // Check if the field is a dropdown type
                  var isDropdown = foundField.type === 'dropdown'; // Create an object with the initial form values

                  var formValues = {
                    customFieldName: foundField.fieldName,
                    type: foundField.type
                  }; // If it's a dropdown, also set the dropdownOptions field

                  if (isDropdown) {
                    if (Array.isArray(foundField.productCustomFieldOptions)) {
                      // Clear existing controls in dropdownOptions FormArray
                      _this18.customForm.get('dropdownOptions').clear(); // Assuming dropdownOptions is the FormArray in your form


                      var optionsArray = _this18.formBuilder.array(foundField.productCustomFieldOptions.map(function (option) {
                        return _this18.formBuilder.group({
                          id: option.id,
                          optionName: option.optionName,
                          isActive: option.isActive,
                          productCustomFieldId: option.productCustomFieldId
                        });
                      })); // Set the dropdownOptions field


                      _this18.customForm.setControl('dropdownOptions', optionsArray);
                    } else {
                      // If there are no options, set an empty FormArray
                      _this18.customForm.setControl('dropdownOptions', _this18.formBuilder.array([]));
                    }
                  } // Patch the values to the customForm


                  _this18.customForm.patchValue(formValues);
                }
              }
            }, function (err) {
              if (err.error.expose) {
                _this18.toastService.toastMsg({
                  title: "Error",
                  content: _this18.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this18.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              } // Handle error.

            });
          }
        }, {
          key: "editField",
          value: function editField() {
            var _this19 = this;

            this.submitted = true;
            var optionsArray = this.customForm.value.dropdownOptions.map(function (option) {
              return {
                id: option.id,
                optionName: option.optionName
              };
            });

            if (this.customForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var requestBody = {
                id: "".concat(this.fieldId),
                userId: this.currentUser.id,
                fieldName: this.customForm.value.customFieldName,
                type: this.customForm.value.type,
                options: optionsArray ? optionsArray : [],
                removedOptions: this.removedOptions ? this.removedOptions : []
              };
              this.productService.postCustomFields(requestBody).then(function (res) {
                if (res.success) {
                  _this19.commonService.notifyDataAdded();

                  _this19.toastService.toastMsg({
                    title: "Success",
                    content: "Field Updated Successfully"
                  });

                  _this19.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this19.toastService.toastMsg({
                    title: "Error",
                    content: _this19.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this19.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          } // Add a new option to the dropdownOptions array

        }, {
          key: "addDropdownOption",
          value: function addDropdownOption() {
            var newOption = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
            var dropdownOptionsArray = this.customForm.get('dropdownOptions');
            dropdownOptionsArray.push(this.formBuilder.group({
              optionName: newOption
            }));
          } // Remove an option from the dropdownOptions array

        }, {
          key: "removeDropdownOption",
          value: function removeDropdownOption(index, id) {
            // Get the removed option details
            // const removedOption = this.dropdownOptions.at(index).value;
            // Add the removed option to the removedOptions array
            this.removedOptions.push(id); // Remove the option from the FormArray

            this.dropdownOptions.removeAt(index);
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _EditCustomFieldsComponent;
      }();

      _EditCustomFieldsComponent.ɵfac = function EditCustomFieldsComponent_Factory(t) {
        return new (t || _EditCustomFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _EditCustomFieldsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EditCustomFieldsComponent,
        selectors: [["app-edit-custom-fields"]],
        decls: 31,
        vars: 8,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-xl-12", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Field Name", "formControlName", "customFieldName", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-lg-6", "col-md-6", "col-xl-6", "col-sm-12"], ["formControlName", "type", "placeholder", "Type", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-6 col-md-6 col-xl-6 col-sm-12", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"], [3, "value"], ["formArrayName", "dropdownOptions"], ["class", "row-container", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", 1, "ms-2", "mt-2", 3, "click"], [1, "row-container"], ["matInput", "", "matNativeControl", "", 3, "formControl", "placeholder"], ["mat-icon-button", "", 3, "click"]],
        template: function EditCustomFieldsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Custom Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCustomFieldsComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Field");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditCustomFieldsComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, EditCustomFieldsComponent_mat_option_25_Template, 3, 4, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EditCustomFieldsComponent_mat_error_26_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, EditCustomFieldsComponent_div_27_Template, 7, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCustomFieldsComponent_Template_button_click_29_listener() {
              return ctx.editField();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.customForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.f.customFieldName.invalid && ctx.f.customFieldName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.customFieldName.touched) && (ctx.f.customFieldName.errors == null ? null : ctx.f.customFieldName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.type.touched) && (ctx.f.type.errors == null ? null : ctx.f.type.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.f.type.value === "dropdown");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
        styles: [".row-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY3VzdG9tLWZpZWxkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImVkaXQtY3VzdG9tLWZpZWxkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    26446:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/product-setting/custom-fields/custom-fields.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomFieldsComponent": function CustomFieldsComponent() {
          return (
            /* binding */
            _CustomFieldsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _components_add_custom_fields_add_custom_fields_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/add-custom-fields/add-custom-fields.component */
      44507);
      /* harmony import */


      var _components_edit_custom_fields_edit_custom_fields_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/edit-custom-fields/edit-custom-fields.component */
      14393);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function CustomFieldsComponent_span_10_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_span_10_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r10.upiCheckedId.length > 0 ? ctx_r10.getUPIcheckId(ctx_r10.upiCheckedId) : ctx_r10.getSingleCheckedId(ctx_r10.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomFieldsComponent_span_10_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomFieldsComponent_span_10_button_1_span_1_Template, 1, 0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.checkSingleArray.length > 0 || ctx_r8.isChecked);
        }
      }

      function CustomFieldsComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CustomFieldsComponent_span_10_button_1_Template, 2, 1, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.isChecked);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "active": a0,
          "inactive": a1
        };
      };

      function CustomFieldsComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CustomFieldsComponent_tr_19_Template_input_change_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r14.onChekedsingleCheck($event, item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_tr_19_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r16.isActive(item_r12.id, item_r12.isActive);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_tr_19_Template_span_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.editCustomField(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_tr_19_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18.OpenDeleteModal(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.upiCheckedId.includes(item_r12.id))("value", item_r12.id)("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.fieldName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, item_r12.isActive, !item_r12.isActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);
        }
      }

      function CustomFieldsComponent_tbody_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20, 30];
      };

      function CustomFieldsComponent_mat_paginator_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function CustomFieldsComponent_mat_paginator_21_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r3.customFieldList)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1))("length", ctx_r3.totalrow)("pageIndex", ctx_r3.currentPageNo);
        }
      }

      function CustomFieldsComponent_h4_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete All Field?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomFieldsComponent_h4_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete Selected Field?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomFieldsComponent_a_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_a_56_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CustomFieldsComponent_a_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_a_57_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete Selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _CustomFieldsComponent = /*#__PURE__*/function () {
        function _CustomFieldsComponent(formBuilder, toastService, titleCasePipe, productService, dialog, commonService) {
          _classCallCheck(this, _CustomFieldsComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialog = dialog;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.customFieldList = [];
          this.FieldId = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.p = 1;
          this.pagesize = 1;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingle = false;
          this.upiCheckedId = [];
          this.checkSingleArray = [];
          this.isChecked = false;
          this.archiveIconfalse = false;
          this.allSelect = false;
          this.checkSelect = false;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        }

        _createClass(_CustomFieldsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.commonService.rowAdded$.subscribe(function () {
              // Fetch the updated list
              _this20.getCustomFields();
            });
            this.getCustomFields();
            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(function () {
              _this20.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this20.getSubCategorySearch(searchKey.trim());
              } else if (searchKey === '') {
                // this.isLoading = true; // Hide the loader if the search key is less than the threshold
                _this20.getCustomFields();
              } else {
                _this20.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getCustomFields",
          value: function getCustomFields() {
            var _this21 = this;

            this.productService.getCustomFields({
              data: {},
              userId: this.currentUser.id,
              size: this.partyPageSize,
              page: this.currentPageNo + 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                _this21.customFieldList = res.data.pageData;
                _this21.p = res.data.currentPage;
                _this21.totalrow = res.data.totalrows;
                _this21.toatlPages = res.data.totalPages;
              }
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
        }, {
          key: "deleteCategory",
          value: function deleteCategory() {
            var _this22 = this;

            console.log(this.FieldId);
            this.productService.deleteCustomFields({
              fieldId: this.FieldId
            }, this.currentUser.id).then(function (res) {
              if (res.success) {
                _this22.commonService.notifyDataAdded();

                _this22.toastService.toastMsg({
                  title: "Success",
                  content: "Field deleted successfully"
                });

                _this22.checkSelectsingle = false;
                _this22.upiCheckedId = [];
                _this22.checkSelect = false;
                _this22.allSelect = false;
                _this22.checkSingleArray = [];
                _this22.archiveIconfalse = false;
                _this22.allSelect = false;
                _this22.checkSelectsinglefalse = false;
                _this22.isChecked = false;
                _this22.checkSingleArray = [];

                _this22.getCustomFields();
              }
            }, function (err) {
              if (err.error.expose) {
                _this22.toastService.toastMsg({
                  title: "Error",
                  content: _this22.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this22.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "openCategoryForm",
          value: function openCategoryForm() {
            var dialogRef = this.dialog.open(_components_add_custom_fields_add_custom_fields_component__WEBPACK_IMPORTED_MODULE_0__.AddCustomFieldsComponent, {
              width: '600px',
              height: 'auto',
              data: {},
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "editCustomField",
          value: function editCustomField(fieldId) {
            console.log(fieldId);
            var dialogRef = this.dialog.open(_components_edit_custom_fields_edit_custom_fields_component__WEBPACK_IMPORTED_MODULE_1__.EditCustomFieldsComponent, {
              width: '600px',
              height: 'auto',
              data: {
                fieldId: fieldId
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "OpenDeleteModal",
          value: function OpenDeleteModal(id) {
            console.log(this.FieldId);
            this.FieldId.push(id);
          }
        }, {
          key: "isActive",
          value: function isActive(id, _isActive3) {
            var _this23 = this;

            var newStatus = !_isActive3; // Toggle between '1' and '0'

            var body = {
              "isActive": newStatus
            };
            this.productService.putCustomFields(body, id).then(function (res) {
              if (res.success) {
                if (newStatus) {
                  _this23.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Active"
                  });

                  _this23.getCustomFields();
                } else {
                  _this23.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Inactive"
                  });

                  _this23.getCustomFields();
                }
              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.customFieldList.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.onSearchInputChange(searchInput.value);
              } else {
                this.getCustomFields();
              }
            }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, expenseId) {
            if (e.target.checked) {
              this.upiCheckedId.push(expenseId);
            } else {
              var index = this.upiCheckedId.indexOf(expenseId);

              if (index !== -1) {
                this.upiCheckedId.splice(index, 1);
              }
            } // const checkArray: FormArray = this.form.get('checkArray') as FormArray;


            if (e.target.checked) {
              this.checkSingleArray.push(e.target.value);
            } else {
              this.checkSingleArray = [];
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(FieldId) {
            this.FieldId = FieldId;
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(FieldId) {
            this.FieldId = FieldId;
          }
        }, {
          key: "showDeleteButton",
          value: function showDeleteButton() {
            return this.upiCheckedId.length > 0;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this24 = this;

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.customFieldList.map(function (item) {
              if (id == -1) {
                if (_this24.isChecked == true) {
                  _this24.archiveIconfalse = true;
                  _this24.checkSelectsinglefalse = true;
                  _this24.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this24.archiveIconfalse = false;
                  _this24.checkSelectsinglefalse = false;
                  _this24.checkSelectsingle = false;
                  _this24.upiCheckedId = [];
                }
              }
            });
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            // Emit the search key to the searchSubject
            this.searchSubject.next(searchKey);
          }
        }, {
          key: "getSubCategorySearch",
          value: function getSubCategorySearch(searchKey) {
            var _this25 = this;

            setTimeout(function () {
              _this25.productService.getCustomFields({
                data: {},
                userId: _this25.currentUser.id,
                size: _this25.partyPageSize,
                page: _this25.currentPageNo + 1,
                search: searchKey.toLowerCase(),
                isActive: ''
              }).then(function (res) {
                if (res.success) {
                  _this25.customFieldList = res.data.pageData;
                  _this25.p = res.data.currentPage;
                  _this25.totalrow = res.data.totalrows;
                  _this25.toatlPages = res.data.totalPages;
                }

                if (_this25.totalrow === 0 && !(searchKey === "")) {
                  _this25.toastService.toastMsg({
                    title: "Error",
                    content: "Not Found!!!"
                  });
                }
              }, function (err) {
                if (err.error.expose) {
                  _this25.toastService.toastMsg({
                    title: "Error",
                    content: _this25.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this25.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });

              _this25.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }]);

        return _CustomFieldsComponent;
      }();

      _CustomFieldsComponent.ɵfac = function CustomFieldsComponent_Factory(t) {
        return new (t || _CustomFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService));
      };

      _CustomFieldsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CustomFieldsComponent,
        selectors: [["app-custom-fields"]],
        decls: 58,
        vars: 11,
        consts: [["id", "showoptionHide", 1, "row", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Search", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "table-container", "tableContainerHeight", "mb-2"], [1, "table-div", "TableHeight"], [1, "table", "table-responsive", "TableHeight"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "display", "flex", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", "mb-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", "varticalAlign"], [1, "text-nowrap", "flex", "justify-content-end", "varticalAlign"], [4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", "ms-auto", "mt-3", 3, "click"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modalWidth", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "modalHeading"], [1, "text-center", "modalfontFamily"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["class", "text-center ", 4, "ngIf"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn"], ["class", "bi-trash icon-color fs-1 iconFontSize", "data-bs-toggle", "tooltip", "style", "color : red", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", "iconFontSize", 2, "color", "red", 3, "click"], [1, "checkbox", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "disabled", "change"], [1, ""], [1, "toggle-button", 3, "ngClass", "click"], [1, "toggle-slider"], [1, "flex", "justify-content-end"], ["type", "button", 1, "btn", 3, "disabled"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 3, "disabled", "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", "deleteIconColor"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"]],
        template: function CustomFieldsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function CustomFieldsComponent_Template_input_input_2_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "thead", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CustomFieldsComponent_Template_input_change_9_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function CustomFieldsComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CustomFieldsComponent_span_10_Template, 2, 1, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CustomFieldsComponent_tr_19_Template, 17, 11, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CustomFieldsComponent_tbody_20_Template, 4, 0, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CustomFieldsComponent_mat_paginator_21_Template, 1, 5, "mat-paginator", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_Template_button_click_24_listener() {
              return ctx.openCategoryForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Create New");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "h2", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Delete Field? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Are you sure to delete field? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomFieldsComponent_Template_a_click_40_listener() {
              return ctx.deleteCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Delete Field? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, CustomFieldsComponent_h4_51_Template, 2, 0, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, CustomFieldsComponent_h4_52_Template, 2, 0, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, CustomFieldsComponent_a_56_Template, 2, 0, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, CustomFieldsComponent_a_57_Template, 2, 0, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1)("checked", ctx.upiCheckedId.length === ctx.customFieldList.length)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeleteButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.customFieldList);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.customFieldList.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.customFieldList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator],
        styles: [".searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-top: 0px solid transparent;\n}\n\n.tableContainerHeight[_ngcontent-%COMP%] {\n  max-height: 350px;\n  min-height: 350px;\n  overflow-y: auto;\n}\n\n.TableHeight[_ngcontent-%COMP%] {\n  max-height: 520px;\n  min-height: 100px;\n}\n\n.varticalAlign[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.deleteIconColor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\nth[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1maWVsZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUdBLGtEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJjdXN0b20tZmllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEJhciB7XHJcbiAgZmxleC1iYXNpczogMjQwcHg7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50YWJsZUNvbnRhaW5lckhlaWdodCB7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLlRhYmxlSGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiA1MjBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnZhcnRpY2FsQWxpZ24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kZWxldGVJY29uQ29sb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8vIFRvZ2dsZSBidXR0b24gQ3NzXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRvZ2dsZS1zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG59XHJcblxyXG4uYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSAudG9nZ2xlLXNsaWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2JlNTtcclxuICBib3JkZXItY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuXHJcbi5pbmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4ICMwMTA4MGU7XHJcbn1cclxuXHJcbi8qIE9wdGlvbmFsOiBDZW50ZXIgdGhlIHRvZ2dsZSBzbGlkZXIgdmVydGljYWxseSAqL1xyXG4udG9nZ2xlLWJ1dHRvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUtYm9keS10ciB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGh7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    70400:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/product-setting/edit-brand/edit-brand.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditBrandComponent": function EditBrandComponent() {
          return (
            /* binding */
            _EditBrandComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function EditBrandComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Brand Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _EditBrandComponent = /*#__PURE__*/function () {
        function _EditBrandComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, router, brandData) {
          _classCallCheck(this, _EditBrandComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.router = router;
          this.brandData = brandData;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_EditBrandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.brandId = this.brandData.brandId;
            this.getBrandById();
            this.brandForm = this.formBuilder.group({
              brandName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
            });
          }
        }, {
          key: "getBrandById",
          value: function getBrandById() {
            var _this26 = this;

            this.productService.getBrandListById({}, this.currentUser.id, this.brandId).then(function (res) {
              if (res) {
                _this26.brandForm.patchValue({
                  brandName: res.data.data.name
                });
              }
            });
          }
        }, {
          key: "clearInput",
          value: function clearInput() {
            this.dialogRef.close();
          }
        }, {
          key: "f",
          get: function get() {
            return this.brandForm.controls;
          }
        }, {
          key: "addBrand",
          value: function addBrand() {
            var _this27 = this;

            this.submitted = true;

            if (this.brandForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var body = {
                "id": this.brandId.toString(),
                "name": this.brandForm.controls.brandName.value,
                "userId": this.currentUser.id
              };
              this.productService.postBrand(body).then(function (res) {
                if (res) {
                  _this27.toastService.toastMsg({
                    title: "Success",
                    content: "Brand Updated Successfully!!!"
                  });

                  _this27.productService.notifyProductAdded();

                  _this27.dialogRef.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this27.toastService.toastMsg({
                    title: "Error",
                    content: _this27.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this27.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went To Wrong."
                  });
                }
              });
            }
          }
        }]);

        return _EditBrandComponent;
      }();

      _EditBrandComponent.ɵfac = function EditBrandComponent_Factory(t) {
        return new (t || _EditBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
      };

      _EditBrandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _EditBrandComponent,
        selectors: [["app-edit-brand"]],
        decls: 20,
        vars: 5,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-6", "col-md-12", "col-xl-6", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Brand", "formControlName", "brandName", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"]],
        template: function EditBrandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Update Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_4_listener() {
              return ctx.clearInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EditBrandComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_18_listener() {
              return ctx.addBrand();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.brandForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.f.brandName.invalid && ctx.f.brandName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.brandName.touched) && (ctx.f.brandName.errors == null ? null : ctx.f.brandName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYnJhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1icmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuTWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWxIZWFkZXJGb3JtYXQge1xyXG4gICAgY29sb3I6ICNFQjhCM0Y7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    97645:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/product-setting/edit-category/edit-category.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditCategoryComponent": function EditCategoryComponent() {
          return (
            /* binding */
            _EditCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function EditCategoryComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Category Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _EditCategoryComponent = /*#__PURE__*/function () {
        function _EditCategoryComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, data, commonService) {
          _classCallCheck(this, _EditCategoryComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.categoryId = this.data.categoryId;
        }

        _createClass(_EditCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryForm = this.formBuilder.group({
              categoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
            this.getCategory();
          }
        }, {
          key: "f",
          get: function get() {
            return this.categoryForm.controls;
          }
        }, {
          key: "getCategory",
          value: function getCategory() {
            var _this28 = this;

            this.productService.getCategory({
              data: {},
              userId: this.currentUser.id,
              size: 1000,
              page: 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                var categoryList = res.data.pageData; // Find the category by ID

                var foundCategory = categoryList.find(function (category) {
                  return category.id === _this28.categoryId;
                });

                if (foundCategory.categoryName) {
                  _this28.categoryForm.patchValue({
                    categoryName: foundCategory.categoryName
                  });
                }
              }
            }, function (err) {
              if (err.error.expose) {
                _this28.toastService.toastMsg({
                  title: "Error",
                  content: _this28.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this28.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              } // Handle error.

            });
          }
        }, {
          key: "editCategory",
          value: function editCategory() {
            var _this29 = this;

            this.submitted = true;

            if (this.categoryForm.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var newCategory = {
                id: "".concat(this.categoryId),
                categoryName: this.categoryForm.value.categoryName,
                // isDefault: true, // Adjust these values as needed
                userId: this.currentUser.id,
                isActive: true
              };
              this.productService.postCategory(newCategory).then(function (res) {
                if (res.success) {
                  _this29.commonService.notifyDataAdded();

                  _this29.toastService.toastMsg({
                    title: "Success",
                    content: "Category Updated Successfully"
                  });

                  _this29.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this29.toastService.toastMsg({
                    title: "Error",
                    content: _this29.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this29.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went To Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _EditCategoryComponent;
      }();

      _EditCategoryComponent.ɵfac = function EditCategoryComponent_Factory(t) {
        return new (t || _EditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _EditCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EditCategoryComponent,
        selectors: [["app-edit-category"]],
        decls: 20,
        vars: 5,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-6", "col-md-12", "col-xl-6", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Category", "formControlName", "categoryName", 3, "ngClass"], ["class", "text-danger ", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [1, "text-danger"]],
        template: function EditCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCategoryComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditCategoryComponent_mat_error_16_Template, 2, 0, "mat-error", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditCategoryComponent_Template_button_click_18_listener() {
              return ctx.editCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.categoryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.f.categoryName.invalid && ctx.f.categoryName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.categoryName.touched) && (ctx.f.categoryName.errors == null ? null : ctx.f.categoryName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRQcm9kdWN0QnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuTWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWxIZWFkZXJGb3JtYXQge1xyXG4gICAgY29sb3I6ICNFQjhCM0Y7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    51016:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/product-setting/edit-sub-category/edit-sub-category.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditSubCategoryComponent": function EditSubCategoryComponent() {
          return (
            /* binding */
            _EditSubCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function EditSubCategoryComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r3.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r0.f.category.invalid && ctx_r0.f.category.touched && ctx_r0.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", category_r3.categoryName, " ");
        }
      }

      function EditSubCategoryComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function EditSubCategoryComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sub Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _EditSubCategoryComponent = /*#__PURE__*/function () {
        function _EditSubCategoryComponent(formBuilder, toastService, titleCasePipe, productService, dialogRef, data, commonService) {
          _classCallCheck(this, _EditSubCategoryComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.subCategoryId = this.data.subCategoryId;
        }

        _createClass(_EditSubCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subCategoryFrom = this.formBuilder.group({
              subCategoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              category: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
            this.getSubCategoryById();
            this.getAllCategory();
          }
        }, {
          key: "getAllCategory",
          value: function getAllCategory() {
            var _this30 = this;

            this.productService.getCategory({
              data: {},
              userId: this.currentUser.id,
              size: 1000,
              page: 1,
              search: '',
              isActive: ''
            }).then(function (res) {
              if (res.success) {
                _this30.categoryList = res.data.pageData;
              }
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
        }, {
          key: "getSubCategoryById",
          value: function getSubCategoryById() {
            var _this31 = this;

            this.productService.getSubCategoryById({}, this.currentUser.id, this.subCategoryId).then(function (res) {
              if (res.success) {
                var subCategoryList = res.data.data;

                _this31.subCategoryFrom.patchValue({
                  subCategoryName: subCategoryList.name,
                  category: subCategoryList.categoryId
                });
              }
            }, function (err) {
              if (err.error.expose) {
                _this31.toastService.toastMsg({
                  title: "Error",
                  content: _this31.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this31.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              } // Handle error.

            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.subCategoryFrom.controls;
          }
        }, {
          key: "editCategory",
          value: function editCategory() {
            var _this32 = this;

            this.submitted = true;

            if (this.subCategoryFrom.invalid) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              this.submitted = true;
              var newCategory = {
                id: "".concat(this.subCategoryId),
                name: this.subCategoryFrom.value.subCategoryName,
                userId: this.currentUser.id,
                categoryId: "".concat(this.subCategoryFrom.value.category)
              };
              this.productService.postSubCategory(newCategory).then(function (res) {
                if (res.success) {
                  _this32.commonService.notifyDataAdded();

                  _this32.toastService.toastMsg({
                    title: "Success",
                    content: "Sub Category Updated Successfully"
                  });

                  _this32.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this32.toastService.toastMsg({
                    title: "Error",
                    content: _this32.titleCasePipe.transform(err.error.error_message)
                  });
                } else {
                  _this32.toastService.toastMsg({
                    title: "Error",
                    content: "Something Went Wrong."
                  });
                }
              });
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return _EditSubCategoryComponent;
      }();

      _EditSubCategoryComponent.ɵfac = function EditSubCategoryComponent_Factory(t) {
        return new (t || _EditSubCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
      };

      _EditSubCategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EditSubCategoryComponent,
        selectors: [["app-edit-sub-category"]],
        decls: 29,
        vars: 7,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", "modalHeaderFormat"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-xl-12", "mt-2"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Category", "formControlName", "category"], [3, "value", "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["matNativeControl", "", "required", "", "type", "text", "placeholder", "Sub category", "formControlName", "subCategoryName", 3, "ngClass"], [1, "modal-footer", "d-flex", "justify-content-end"], ["type", "button btnMarginRight", 1, "btn", "btn-save", 3, "click"], [3, "value", "ngClass"], [1, "text-danger"]],
        template: function EditSubCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditSubCategoryComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditSubCategoryComponent_mat_option_16_Template, 2, 5, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditSubCategoryComponent_mat_error_17_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, EditSubCategoryComponent_mat_error_25_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditSubCategoryComponent_Template_button_click_27_listener() {
              return ctx.editCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.subCategoryFrom);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.category.touched) && (ctx.f.category.errors == null ? null : ctx.f.category.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.f.subCategoryName.invalid && ctx.f.subCategoryName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.subCategoryName.touched) && (ctx.f.subCategoryName.errors == null ? null : ctx.f.subCategoryName.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.btnMarginRight[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.modalHeaderFormat[_ngcontent-%COMP%] {\n  color: #EB8B3F;\n  font-weight: bolder;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImVkaXQtc3ViLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG5NYXJnaW5SaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbEhlYWRlckZvcm1hdCB7XHJcbiAgICBjb2xvcjogI0VCOEIzRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    6609:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/product-setting/product-main/product-main.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductMainComponent": function ProductMainComponent() {
          return (
            /* binding */
            _ProductMainComponent
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

      var _ProductMainComponent = /*#__PURE__*/function () {
        function _ProductMainComponent() {
          _classCallCheck(this, _ProductMainComponent);
        }

        _createClass(_ProductMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProductMainComponent;
      }();

      _ProductMainComponent.ɵfac = function ProductMainComponent_Factory(t) {
        return new (t || _ProductMainComponent)();
      };

      _ProductMainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProductMainComponent,
        selectors: [["app-product-main"]],
        decls: 14,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "bg-white", "p-4"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "page-nav-link", "mt-3"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./product-settings", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], ["routerLink", "./invoice_generate", "routerLinkActive", "active", 1, "mt-3", "pb-1", "ps-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function ProductMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Invoice Setting");

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
        styles: ["@media screen and (max-width: 575px) {\n  .links[_ngcontent-%COMP%] {\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJO0lBQ0Usa0JBQUE7RUFESjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KSB7XHJcblxyXG4gICAgLmxpbmtzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xyXG4gICAgfVxyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    99257:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/product-setting/product-setting-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductSettingRoutingModule": function ProductSettingRoutingModule() {
          return (
            /* binding */
            _ProductSettingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _category_product_category_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category-product/category-product.component */
      64058);
      /* harmony import */


      var _sub_category_product_sub_category_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sub-category-product/sub-category-product.component */
      99926);
      /* harmony import */


      var _brand_product_brand_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-product/brand-product.component */
      10240);
      /* harmony import */


      var _product_main_product_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-main/product-main.component */
      6609);
      /* harmony import */


      var _product_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-setting.component */
      72666);
      /* harmony import */


      var _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./custom-fields/custom-fields.component */
      26446);
      /* harmony import */


      var _setting_module_invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../setting-module/invoice-receipt-ui/invoice-receipt-ui.component */
      87358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _product_main_product_main_component__WEBPACK_IMPORTED_MODULE_3__.ProductMainComponent,
        children: [{
          path: '',
          redirectTo: 'product-settings',
          pathMatch: 'full'
        }, {
          path: "invoice_generate",
          component: _setting_module_invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_6__.InvoiceReceiptUIComponent
        }, {
          path: 'product-settings',
          component: _product_setting_component__WEBPACK_IMPORTED_MODULE_4__.ProductSettingComponent,
          children: [{
            path: '',
            redirectTo: 'category_list',
            pathMatch: 'full'
          }, {
            path: 'category_list',
            component: _category_product_category_product_component__WEBPACK_IMPORTED_MODULE_0__.CategoryProductComponent
          }, {
            path: 'sub_category_list',
            component: _sub_category_product_sub_category_product_component__WEBPACK_IMPORTED_MODULE_1__.SubCategoryProductComponent
          }, {
            path: 'brand_list',
            component: _brand_product_brand_product_component__WEBPACK_IMPORTED_MODULE_2__.BrandProductComponent
          }, {
            path: 'custom-fields',
            component: _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_5__.CustomFieldsComponent
          }]
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _ProductSettingRoutingModule = /*#__PURE__*/_createClass(function _ProductSettingRoutingModule() {
        _classCallCheck(this, _ProductSettingRoutingModule);
      });

      _ProductSettingRoutingModule.ɵfac = function ProductSettingRoutingModule_Factory(t) {
        return new (t || _ProductSettingRoutingModule)();
      };

      _ProductSettingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _ProductSettingRoutingModule
      });
      _ProductSettingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_ProductSettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    72666:
    /*!********************************************************************!*\
      !*** ./src/app/pages/product-setting/product-setting.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductSettingComponent": function ProductSettingComponent() {
          return (
            /* binding */
            _ProductSettingComponent
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

      var _ProductSettingComponent = /*#__PURE__*/function () {
        function _ProductSettingComponent() {
          _classCallCheck(this, _ProductSettingComponent);
        }

        _createClass(_ProductSettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProductSettingComponent;
      }();

      _ProductSettingComponent.ɵfac = function ProductSettingComponent_Factory(t) {
        return new (t || _ProductSettingComponent)();
      };

      _ProductSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProductSettingComponent,
        selectors: [["app-product-setting"]],
        decls: 18,
        vars: 0,
        consts: [[1, "row", "mt-2"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-12"], [1, "side-panel"], [1, "side-panel-item"], ["routerLink", "./category_list", "routerLinkActive", "active", 1, "side-panel-link"], ["routerLink", "./sub_category_list", "routerLinkActive", "active", 1, "side-panel-link"], ["routerLink", "./brand_list", "routerLinkActive", "active", 1, "side-panel-link"], ["routerLink", "./custom-fields", "routerLinkActive", "active", 1, "side-panel-link"], [1, "col-xxl-10", "col-xl-10", "col-lg-10", "col-md-8", "col-sm-12", "mt-2", "main-content"]],
        template: function ProductSettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Custom Fields");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [".side-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-radius: 5px;\n  border-bottom: 1px solid #ccc;\n}\n\n.side-panel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n  \n}\n\n.side-panel-item[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  \n}\n\n.side-panel-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex: 1;\n  text-decoration: none;\n  color: #333;\n  padding: 8px 10px;\n  border-radius: 3px;\n}\n\n.side-panel-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  \n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  border-left: 1px solid #ccc;\n  \n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFBd0MsMkNBQUE7QUFFNUM7O0FBQ0E7RUFDSSx5QkFBQTtFQUEyQiw4QkFBQTtBQUcvQjs7QUFBQTtFQUNJLE9BQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxzQkFBQTtFQUF3Qix5Q0FBQTtBQUk1Qjs7QUFEQSxzQ0FBQTs7QUFDQTtFQUNJLDJCQUFBO0VBQTZCLDhEQUFBO0VBQzdCLGtCQUFBO0FBS0oiLCJmaWxlIjoicHJvZHVjdC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtcGFuZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgLyogQmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG59XHJcblxyXG4uc2lkZS1wYW5lbC1pdGVtIGEge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5zaWRlLXBhbmVsLWl0ZW0gYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgLyogQmFja2dyb3VuZCBjb2xvciBmb3IgYWN0aXZlIGxpbmsgcm93ICovXHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgZm9yIHRoZSBtYWluIGNvbnRlbnQgYXJlYSAqL1xyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYzsgLyogQWRkaW5nIGEgYm9yZGVyIG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIG1haW4gY29udGVudCBhcmVhICovXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    8587:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/product-setting/product-setting.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductSettingModule": function ProductSettingModule() {
          return (
            /* binding */
            _ProductSettingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _product_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-setting-routing.module */
      99257);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _product_main_product_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-main/product-main.component */
      6609);
      /* harmony import */


      var _brand_product_brand_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-product/brand-product.component */
      10240);
      /* harmony import */


      var _category_product_category_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category-product/category-product.component */
      64058);
      /* harmony import */


      var _sub_category_product_sub_category_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sub-category-product/sub-category-product.component */
      99926);
      /* harmony import */


      var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-category/add-category.component */
      28528);
      /* harmony import */


      var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-category/edit-category.component */
      97645);
      /* harmony import */


      var _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-sub-category/add-sub-category.component */
      76425);
      /* harmony import */


      var _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./edit-sub-category/edit-sub-category.component */
      51016);
      /* harmony import */


      var _add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./add-brand/add-brand.component */
      40323);
      /* harmony import */


      var _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./edit-brand/edit-brand.component */
      70400);
      /* harmony import */


      var _product_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./product-setting.component */
      72666);
      /* harmony import */


      var _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./custom-fields/custom-fields.component */
      26446);
      /* harmony import */


      var _custom_fields_components_add_custom_fields_add_custom_fields_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./custom-fields/components/add-custom-fields/add-custom-fields.component */
      44507);
      /* harmony import */


      var _custom_fields_components_edit_custom_fields_edit_custom_fields_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./custom-fields/components/edit-custom-fields/edit-custom-fields.component */
      14393);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProductSettingModule = /*#__PURE__*/_createClass(function _ProductSettingModule() {
        _classCallCheck(this, _ProductSettingModule);
      });

      _ProductSettingModule.ɵfac = function ProductSettingModule_Factory(t) {
        return new (t || _ProductSettingModule)();
      };

      _ProductSettingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: _ProductSettingModule
      });
      _ProductSettingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _product_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductSettingRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](_ProductSettingModule, {
          declarations: [_product_main_product_main_component__WEBPACK_IMPORTED_MODULE_1__.ProductMainComponent, _brand_product_brand_product_component__WEBPACK_IMPORTED_MODULE_2__.BrandProductComponent, _category_product_category_product_component__WEBPACK_IMPORTED_MODULE_3__.CategoryProductComponent, _sub_category_product_sub_category_product_component__WEBPACK_IMPORTED_MODULE_4__.SubCategoryProductComponent, _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_5__.AddCategoryComponent, _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__.EditCategoryComponent, _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_7__.AddSubCategoryComponent, _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_8__.EditSubCategoryComponent, _add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_9__.AddBrandComponent, _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_10__.EditBrandComponent, _product_setting_component__WEBPACK_IMPORTED_MODULE_11__.ProductSettingComponent, _custom_fields_custom_fields_component__WEBPACK_IMPORTED_MODULE_12__.CustomFieldsComponent, _custom_fields_components_add_custom_fields_add_custom_fields_component__WEBPACK_IMPORTED_MODULE_13__.AddCustomFieldsComponent, _custom_fields_components_edit_custom_fields_edit_custom_fields_component__WEBPACK_IMPORTED_MODULE_14__.EditCustomFieldsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _product_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductSettingRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_27__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    99926:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/product-setting/sub-category-product/sub-category-product.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubCategoryProductComponent": function SubCategoryProductComponent() {
          return (
            /* binding */
            _SubCategoryProductComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-sub-category/add-sub-category.component */
      76425);
      /* harmony import */


      var _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../edit-sub-category/edit-sub-category.component */
      51016);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function SubCategoryProductComponent_span_12_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_span_12_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r10.upiCheckedId.length > 0 ? ctx_r10.getUPIcheckId(ctx_r10.upiCheckedId) : ctx_r10.getSingleCheckedId(ctx_r10.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubCategoryProductComponent_span_12_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubCategoryProductComponent_span_12_button_1_span_1_Template, 1, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.checkSingleArray.length > 0 || ctx_r8.isChecked);
        }
      }

      function SubCategoryProductComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubCategoryProductComponent_span_12_button_1_Template, 2, 1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.isChecked);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "active": a0,
          "inactive": a1
        };
      };

      function SubCategoryProductComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SubCategoryProductComponent_tr_23_Template_input_change_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r14.onChekedsingleCheck($event, item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_tr_23_Template_button_click_11_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r16.isActive(item_r12.id, item_r12.isActive);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_tr_23_Template_span_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.editCategory(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_tr_23_Template_button_click_17_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);

            var item_r12 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18.OpenDeleteModal(item_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.upiCheckedId.includes(item_r12.id))("value", item_r12.id)("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r13 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r12.name ? item_r12.name : "NA");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r12 && item_r12.category ? item_r12.category.categoryName : "NA", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, item_r12.isActive, !item_r12.isActive))("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", item_r12.isDefault);
        }
      }

      function SubCategoryProductComponent_tbody_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20, 30];
      };

      function SubCategoryProductComponent_mat_paginator_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function SubCategoryProductComponent_mat_paginator_26_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r3.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1))("length", ctx_r3.totalrow)("pageIndex", ctx_r3.currentPageNo);
        }
      }

      function SubCategoryProductComponent_h4_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete All Sub Category?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubCategoryProductComponent_h4_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete Selected Sub Category?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubCategoryProductComponent_a_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_a_60_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function SubCategoryProductComponent_a_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_a_61_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.deleteCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete Selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _SubCategoryProductComponent = /*#__PURE__*/function () {
        function _SubCategoryProductComponent(formBuilder, toastService, titleCasePipe, productService, dialog, commonService) {
          _classCallCheck(this, _SubCategoryProductComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.productService = productService;
          this.dialog = dialog;
          this.commonService = commonService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.subCategoryList = [];
          this.subCategoryId = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.p = 1;
          this.pagesize = 1;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingle = false;
          this.upiCheckedId = [];
          this.checkSingleArray = [];
          this.isChecked = false;
          this.archiveIconfalse = false;
          this.allSelect = false;
          this.checkSelect = false;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        }

        _createClass(_SubCategoryProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.commonService.rowAdded$.subscribe(function () {
              // Fetch the updated list
              _this33.getAllCategory();
            });
            this.getAllCategory();
            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(function () {
              _this33.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this33.getSubCategorySearch(searchKey.trim());
              } else if (searchKey === '') {
                // this.isLoading = true; // Hide the loader if the search key is less than the threshold
                _this33.getAllCategory();
              } else {
                _this33.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getAllCategory",
          value: function getAllCategory() {
            var _this34 = this;

            this.productService.getSubCategory({
              data: {},
              userId: this.currentUser.id,
              size: this.partyPageSize,
              page: this.currentPageNo + 1,
              categoryId: '',
              isActive: '',
              search: ''
            }).then(function (res) {
              if (res.success) {
                _this34.subCategoryList = res.data.pageData;
                _this34.p = res.data.currentPage;
                _this34.totalrow = res.data.totalrows;
                _this34.toatlPages = res.data.totalPages;
              }
            }, function (err) {
              if (err.error.expose) {
                _this34.toastService.toastMsg({
                  title: "Error",
                  content: _this34.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this34.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory() {
            var _this35 = this;

            this.productService.deleteSubCategory({
              subCategoryId: this.subCategoryId
            }, this.currentUser.id).then(function (res) {
              if (res.success) {
                _this35.commonService.notifyDataAdded();

                _this35.toastService.toastMsg({
                  title: "Success",
                  content: "Category deleted successfully"
                });

                _this35.getAllCategory();

                _this35.checkSelectsingle = false;
                _this35.upiCheckedId = [];
                _this35.checkSelect = false;
                _this35.allSelect = false;
                _this35.checkSingleArray = [];
                _this35.archiveIconfalse = false;
                _this35.allSelect = false;
                _this35.checkSelectsinglefalse = false;
                _this35.isChecked = false;
                _this35.checkSingleArray = [];
              }
            }, function (err) {
              if (err.error.expose) {
                _this35.toastService.toastMsg({
                  title: "Error",
                  content: _this35.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this35.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "openCategoryForm",
          value: function openCategoryForm() {
            var dialogRef = this.dialog.open(_add_sub_category_add_sub_category_component__WEBPACK_IMPORTED_MODULE_0__.AddSubCategoryComponent, {
              width: '500px',
              height: 'auto',
              data: {},
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "editCategory",
          value: function editCategory(subCategoryId) {
            var dialogRef = this.dialog.open(_edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_1__.EditSubCategoryComponent, {
              width: '500px',
              height: 'auto',
              data: {
                subCategoryId: subCategoryId
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "OpenDeleteModal",
          value: function OpenDeleteModal(id) {
            this.subCategoryId.push(id);
          }
        }, {
          key: "isActive",
          value: function isActive(id, _isActive4) {
            var _this36 = this;

            var newStatus = !_isActive4; // Toggle between '1' and '0'

            var body = {
              "isActive": newStatus
            };
            this.productService.subCategoryChangeStatus(body, id).then(function (res) {
              if (res.success) {
                if (newStatus) {
                  _this36.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Active"
                  });

                  _this36.getAllCategory();
                } else {
                  _this36.toastService.toastMsg({
                    title: "Success",
                    content: "Status Has Changed To Inactive"
                  });

                  _this36.getAllCategory();
                }
              }
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.subCategoryList.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.onSearchInputChange(searchInput.value);
              } else {
                this.getAllCategory();
              }
            }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, expenseId) {
            if (e.target.checked) {
              this.upiCheckedId.push(expenseId);
            } else {
              var index = this.upiCheckedId.indexOf(expenseId);

              if (index !== -1) {
                this.upiCheckedId.splice(index, 1);
              }
            } // const checkArray: FormArray = this.form.get('checkArray') as FormArray;


            if (e.target.checked) {
              this.checkSingleArray.push(e.target.value);
            } else {
              this.checkSingleArray = [];
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(subCategoryId) {
            this.subCategoryId = subCategoryId;
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(subCategoryId) {
            this.subCategoryId = subCategoryId;
          }
        }, {
          key: "showDeleteButton",
          value: function showDeleteButton() {
            return this.upiCheckedId.length > 0;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this37 = this;

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.subCategoryList.map(function (item) {
              if (id == -1) {
                if (_this37.isChecked == true) {
                  _this37.archiveIconfalse = true;
                  _this37.checkSelectsinglefalse = true;
                  _this37.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this37.archiveIconfalse = false;
                  _this37.checkSelectsinglefalse = false;
                  _this37.checkSelectsingle = false;
                  _this37.upiCheckedId = [];
                }
              }
            });
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            // Emit the search key to the searchSubject
            this.searchSubject.next(searchKey);
          }
        }, {
          key: "getSubCategorySearch",
          value: function getSubCategorySearch(searchKey) {
            var _this38 = this;

            setTimeout(function () {
              _this38.productService.getSubCategory({
                data: {},
                userId: _this38.currentUser.id,
                size: _this38.partyPageSize,
                page: _this38.currentPageNo + 1,
                search: searchKey.toLowerCase(),
                categoryId: '',
                isActive: ''
              }).then(function (res) {
                if (res.success) {
                  _this38.subCategoryList = res.data.pageData;
                  _this38.p = res.data.currentPage;
                  _this38.totalrow = res.data.totalrows;
                  _this38.toatlPages = res.data.totalPages;
                }

                if (_this38.totalrow === 0 && !(searchKey === "")) {
                  _this38.toastService.toastMsg({
                    title: "Error",
                    content: "Not Found!!!"
                  });
                }
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

              _this38.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }]);

        return _SubCategoryProductComponent;
      }();

      _SubCategoryProductComponent.ɵfac = function SubCategoryProductComponent_Factory(t) {
        return new (t || _SubCategoryProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService));
      };

      _SubCategoryProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _SubCategoryProductComponent,
        selectors: [["app-sub-category-product"]],
        decls: 62,
        vars: 11,
        consts: [["id", "showoptionHide", 1, "row", "mb-3"], [1, "col-3", "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Sub Category", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "col-5"], [1, "col-4"], [1, "table-container", "tableContainerHeight", "mb-2"], [1, "table-div", "TableHeight"], [1, "table", "table-responsive", "TableHeight"], [1, "text-600"], [1, "text-nowrap", 2, "vertical-align", "middle", "display", "flex", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", "mb-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", "varticalAlign"], [1, "text-nowrap", "flex", "justify-content-end", "varticalAlign"], [4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-save", "ms-auto", "mt-3", 3, "click"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modalWidth", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "modalHeading"], [1, "text-center", "modalfontFamily"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["class", "text-center ", 4, "ngIf"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn"], ["class", "bi-trash icon-color fs-1 iconFontSize", "data-bs-toggle", "tooltip", "style", "color : red", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", "iconFontSize", 2, "color", "red", 3, "click"], [1, "checkbox", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "disabled", "change"], [1, ""], [1, "toggle-button", 3, "ngClass", "disabled", "click"], [1, "toggle-slider"], [1, "flex", "justify-content-end"], ["type", "button", 1, "btn", 3, "disabled"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize", "ps-2", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", 3, "disabled", "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", "ps-2", "deleteIconColor"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function SubCategoryProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SubCategoryProductComponent_Template_input_input_2_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SubCategoryProductComponent_Template_input_change_11_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function SubCategoryProductComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SubCategoryProductComponent_span_12_Template, 2, 1, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Sub Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, SubCategoryProductComponent_tr_23_Template, 19, 13, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, SubCategoryProductComponent_tbody_24_Template, 4, 0, "tbody", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SubCategoryProductComponent_mat_paginator_26_Template, 1, 5, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_Template_button_click_28_listener() {
              return ctx.openCategoryForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Create New");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h2", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Delete Sub Category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h4", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Are you sure to delete sub category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SubCategoryProductComponent_Template_a_click_44_listener() {
              return ctx.deleteCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "h2", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Delete Sub Category? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, SubCategoryProductComponent_h4_55_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, SubCategoryProductComponent_h4_56_Template, 2, 0, "h4", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, SubCategoryProductComponent_a_60_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, SubCategoryProductComponent_a_61_Template, 2, 0, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1)("checked", ctx.upiCheckedId.length === ctx.subCategoryList.length)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeleteButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.subCategoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.subCategoryList.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.subCategoryList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator],
        styles: [".searchBar[_ngcontent-%COMP%] {\n  flex-basis: 240px;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-top: 0px solid transparent;\n}\n\n.tableContainerHeight[_ngcontent-%COMP%] {\n  max-height: 350px;\n  min-height: 350px;\n  overflow-y: auto;\n}\n\n.TableHeight[_ngcontent-%COMP%] {\n  max-height: 520px;\n  min-height: 100px;\n}\n\n.varticalAlign[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.deleteIconColor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\nth[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jYXRlZ29yeS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFHQSxrREFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFGQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUYiLCJmaWxlIjoic3ViLWNhdGVnb3J5LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoQmFyIHtcclxuICBmbGV4LWJhc2lzOiAyNDBweDtcclxufVxyXG5cclxudGhlYWQge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRhYmxlQ29udGFpbmVySGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uVGFibGVIZWlnaHQge1xyXG4gIG1heC1oZWlnaHQ6IDUyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udmFydGljYWxBbGlnbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRlbGV0ZUljb25Db2xvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gVG9nZ2xlIGJ1dHRvbiBDc3NcclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udG9nZ2xlLXNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5hY3RpdmUgLnRvZ2dsZS1zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxufVxyXG5cclxuLmluYWN0aXZlIC50b2dnbGUtc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3YmU1O1xyXG4gIGJvcmRlci1jb2xvcjogIzJjN2JlNTtcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b246Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggIzAxMDgwZTtcclxufVxyXG5cclxuLyogT3B0aW9uYWw6IENlbnRlciB0aGUgdG9nZ2xlIHNsaWRlciB2ZXJ0aWNhbGx5ICovXHJcbi50b2dnbGUtYnV0dG9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5LXRyIHtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JiYjtcclxufVxyXG50aHtcclxuICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product-setting_product-setting_module_ts-es5.js.map