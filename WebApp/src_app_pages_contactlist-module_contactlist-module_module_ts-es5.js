(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_contactlist-module_contactlist-module_module_ts"], {
    /***/
    53413:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/contactlist-module/add-contacform/add-contacform.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddContacformComponent": function AddContacformComponent() {
          return (
            /* binding */
            _AddContacformComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AddContacformComponent = /*#__PURE__*/function () {
        function _AddContacformComponent() {
          _classCallCheck(this, _AddContacformComponent);
        }

        _createClass(_AddContacformComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AddContacformComponent;
      }();

      _AddContacformComponent.ɵfac = function AddContacformComponent_Factory(t) {
        return new (t || _AddContacformComponent)();
      };

      _AddContacformComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AddContacformComponent,
        selectors: [["app-add-contacform"]],
        decls: 2,
        vars: 0,
        template: function AddContacformComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-contacform works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udGFjZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    65363:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/contactlist-module/add-ticket/add-ticket.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddTicketComponent": function AddTicketComponent() {
          return (
            /* binding */
            _AddTicketComponent
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


      var src_app_core_services_contact_us_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/contact-us-service.service */
      4405);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function AddTicketComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
        }
      }

      function AddTicketComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Message is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddTicketComponent = /*#__PURE__*/function () {
        function _AddTicketComponent(toastService, ContactUsServiceService, titleCasePipe, router, formBuilder, dialogRef) {
          _classCallCheck(this, _AddTicketComponent);

          this.toastService = toastService;
          this.ContactUsServiceService = ContactUsServiceService;
          this.titleCasePipe = titleCasePipe;
          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogRef = dialogRef;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
        }

        _createClass(_AddTicketComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createQuery();
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            this.conactForm = this.formBuilder.group({
              // ticketType:[],
              ticketType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              Message: [""]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.conactForm.controls;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "postQuery",
          value: function postQuery() {
            var _this = this;

            this.submitted = true;

            if (this.conactForm.invalid) {
              console.log(this.conactForm);
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              }); // this.toastService.openErrorSnackBar("Please fill mandatory fields!!!");

              return false;
            } else {
              var body = {
                "enquiry": {
                  "ticketType": this.conactForm.controls.ticketType.value,
                  "description": this.conactForm.controls.Message.value,
                  "image": ""
                },
                "enquiryImages": []
              };

              if (this.conactForm.valid) {
                this.ContactUsServiceService.contactUspost(body, this.currentUser.id).then(function (res) {
                  if (res) {
                    _this.ContactUsServiceService.notifyPartyAdded();

                    _this.toastService.toastMsg({
                      title: "Success",
                      content: "Ticket Raised Successfully!!!"
                    }); // this.toastService.openSnackBar("Ticket Raised Successfully !!!");


                    _this.router.navigate(["/pages/contactlist-page"]);

                    _this.dialogRef.close();
                  }
                }, function (err) {
                  if (err.error.expose) {
                    _this.toastService.toastMsg({
                      title: "Error",
                      content: _this.titleCasePipe.transform(err.error.error_message)
                    }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

                  } else {
                    _this.toastService.toastMsg({
                      title: "Error",
                      content: "Something Went Wrong."
                    }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

                  }
                });
              }
            }
          }
        }]);

        return _AddTicketComponent;
      }();

      _AddTicketComponent.ɵfac = function AddTicketComponent_Factory(t) {
        return new (t || _AddTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_contact_us_service_service__WEBPACK_IMPORTED_MODULE_1__.ContactUsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
      };

      _AddTicketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AddTicketComponent,
        selectors: [["app-add-ticket"]],
        decls: 31,
        vars: 6,
        consts: [[1, "modal-header"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "margin-left", "16px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [3, "formGroup"], [1, "row"], [1, "col-lg-12"], [1, "form-label"], ["type", "radio", "formControlName", "ticketType", "value", "ISSUE"], [1, "radio-label"], ["type", "radio", "formControlName", "ticketType", "value", "QUERY", 1, "radio-label"], [4, "ngIf"], [1, "form-label", 2, "margin-top", "15px"], [1, "error-asterisk"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "required", "", "formControlName", "Message", "rows", "3", "placeholder", "Write your message", 3, "ngClass"], ["class", "text-danger mb-1", 4, "ngIf"], [1, "", 2, "float", "right !important"], ["type", "button", 1, "btn", "text-right", 2, "float", "right !important", "border-radius", "5px!important", "background-color", "rgba(17, 1, 82, 1) !important", "color", "white!important", 3, "click"], [1, "text-danger", "mb-1"]],
        template: function AddTicketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddTicketComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Query");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddTicketComponent_div_20_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AddTicketComponent_mat_error_27_Template, 2, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddTicketComponent_Template_button_click_29_listener() {
              return ctx.postQuery();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.conactForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.conactForm.get("ticketType").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.f.Message.invalid && ctx.f.Message.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.Message.touched) && (ctx.f.Message.errors == null ? null : ctx.f.Message.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
        styles: [".radio-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  \n}\n\ntextarea[_ngcontent-%COMP%] {\n  \n  border: none;\n  outline: none;\n  \n  \n  padding: 22px;\n  font-size: 15px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUFtQixxRkFBQTtBQUV2Qjs7QUFBRTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUVBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQ0Y7O0VBRUE7SUFDRSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYWRkLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSB0byBhZGQgdGhlIGRlc2lyZWQgc3BhY2UgYmV0d2VlbiB0aGUgcmFkaW8gYnV0dG9uIGFuZCB0aGUgbGFiZWwgKi9cclxuICB9XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGJvcmRlciBhbmQgb3V0bGluZSAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIEFkZCBhIGJvdHRvbSBib3JkZXIgKi9cclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAvKiBZb3UgY2FuIGFkanVzdCB0aGUgY29sb3IgYW5kIHRoaWNrbmVzcyBhcyBuZWVkZWQgKi9cclxuICAgIC8qIE90aGVyIHN0eWxlcyBhcyBuZWVkZWQgKi9cclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    26113:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/contactlist-module/contactlist-module-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactlistModuleRoutingModule": function ContactlistModuleRoutingModule() {
          return (
            /* binding */
            _ContactlistModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _newticketpage_newticketpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newticketpage/newticketpage.component */
      20239);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _newticketpage_newticketpage_component__WEBPACK_IMPORTED_MODULE_0__.NewticketpageComponent
      }];

      var _ContactlistModuleRoutingModule = /*#__PURE__*/_createClass(function _ContactlistModuleRoutingModule() {
        _classCallCheck(this, _ContactlistModuleRoutingModule);
      });

      _ContactlistModuleRoutingModule.ɵfac = function ContactlistModuleRoutingModule_Factory(t) {
        return new (t || _ContactlistModuleRoutingModule)();
      };

      _ContactlistModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ContactlistModuleRoutingModule
      });
      _ContactlistModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ContactlistModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3974:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/contactlist-module/contactlist-module.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactlistModuleModule": function ContactlistModuleModule() {
          return (
            /* binding */
            _ContactlistModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _contactlist_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contactlist-module-routing.module */
      26113);
      /* harmony import */


      var _newticketpage_newticketpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newticketpage/newticketpage.component */
      20239);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _add_contacform_add_contacform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-contacform/add-contacform.component */
      53413);
      /* harmony import */


      var _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-ticket/add-ticket.component */
      65363);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ContactlistModuleModule = /*#__PURE__*/_createClass(function _ContactlistModuleModule() {
        _classCallCheck(this, _ContactlistModuleModule);
      });

      _ContactlistModuleModule.ɵfac = function ContactlistModuleModule_Factory(t) {
        return new (t || _ContactlistModuleModule)();
      };

      _ContactlistModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ContactlistModuleModule
      });
      _ContactlistModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _contactlist_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactlistModuleRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ContactlistModuleModule, {
          declarations: [_newticketpage_newticketpage_component__WEBPACK_IMPORTED_MODULE_1__.NewticketpageComponent, _add_contacform_add_contacform_component__WEBPACK_IMPORTED_MODULE_3__.AddContacformComponent, _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_4__.AddTicketComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _contactlist_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactlistModuleRoutingModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    20239:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/contactlist-module/newticketpage/newticketpage.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewticketpageComponent": function NewticketpageComponent() {
          return (
            /* binding */
            _NewticketpageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-ticket/add-ticket.component */
      65363);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_contact_us_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/contact-us-service.service */
      4405);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
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
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function NewticketpageComponent_span_35_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_span_35_button_1_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r20.upiCheckedId.length > 0 ? ctx_r20.getUPIcheckId($event, ctx_r20.upiCheckedId) : ctx_r20.getSingleCheckedId($event, ctx_r20.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_span_35_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewticketpageComponent_span_35_button_1_span_1_Template, 1, 0, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.checkSingleArray.length > 0 || ctx_r18.upiCheckedId.length > 0);
        }
      }

      function NewticketpageComponent_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewticketpageComponent_span_35_button_1_Template, 2, 1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.checkSingleArray.length > 0 || ctx_r0.upiCheckedId.length > 0);
        }
      }

      function NewticketpageComponent_tr_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function NewticketpageComponent_tr_46_Template_input_change_2_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);

            var item_r22 = restoredCtx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r24.onChekedsingleCheckfalse($event, item_r22.ticketId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_tr_46_Template_span_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);

            var item_r22 = restoredCtx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r26.getStatus(item_r22.ticketId, item_r22.status);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.checkSelectsinglefalse)("value", item_r22.ticketId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 8, item_r22.createdAt, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.ticketType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r22.description);
        }
      }

      function NewticketpageComponent_tbody_47_Template(rf, ctx) {
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

      var _c0 = function _c0() {
        return [5, 10, 20, 30];
      };

      function NewticketpageComponent_mat_paginator_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-paginator", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function NewticketpageComponent_mat_paginator_48_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r27.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r3.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0))("length", ctx_r3.totalrow)("pageIndex", ctx_r3.currentPageNo);
        }
      }

      function NewticketpageComponent_h2_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delete Ticket? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h2_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Status Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h4_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete this Ticket?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h4_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " If the user has not deleted the ticket, its status remains pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_a_62_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r29.removeTicket();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_a_63_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r31.closeStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Continue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h2_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delete Ticket? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h2_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Status Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h4_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Are You Sure To Delete this Ticket?");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_h4_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " If the user has not deleted the ticket, its status remains pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_a_77_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r33.multipleTicketDel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewticketpageComponent_a_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_a_78_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r35.closeTicketStatus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Continue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          ranges: a0,
          showWeekNumbers: false,
          showNextMonth: false,
          rangeInputFormat: "DD MMM YYYY",
          containerClass: "theme-dark-blue",
          displayOneMonthRange: true,
          placement: "bottom-right"
        };
      };

      var _NewticketpageComponent = /*#__PURE__*/function () {
        function _NewticketpageComponent(dialog, contactService, titleCasePipe, formBuilder, commonService, toastService) {
          _classCallCheck(this, _NewticketpageComponent);

          this.dialog = dialog;
          this.contactService = contactService;
          this.titleCasePipe = titleCasePipe;
          this.formBuilder = formBuilder;
          this.commonService = commonService;
          this.toastService = toastService;
          this.isChecked = false;
          this.archiveIconfalse = false; // public tickets = [];

          this.upiCheckedId = [];
          this.checkSelectsingle = false;
          this.checkSingleArray = [];
          this.allSelect = false;
          this.checkSelect = false;
          this.checkSelectsinglefalse = false;
          this.contactListResponse = [];
          this.searchNot = false;
          this.searchNot1 = true;
          this.start = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(29, 'days');
          this.end = moment__WEBPACK_IMPORTED_MODULE_0__();
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.pagesize = 1;
          this.p = 1;
          this.statusFlag = false;
          this.tickets = [];
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.today = new Date();
          this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
          var quarter = moment__WEBPACK_IMPORTED_MODULE_0__(this.today).utc().quarter(); //outputs 4
        }

        _createClass(_NewticketpageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dateRange = [new Date(new Date().setDate(new Date().getDate() - 30)), new Date(new Date().setDate(new Date().getDate()))];
            this.ranges = [{
              value: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date(new Date().setDate(new Date().getDate() - 1))],
              label: 'Last 7 Days'
            }, {
              value: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date(new Date().setDate(new Date().getDate() - 1))],
              label: 'Last 30 Days'
            }, {
              value: [new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()), new Date(new Date(new Date().setDate(0)).toDateString())],
              label: 'Last Month'
            }, // {
            //   value: [this.quarterStartDate._d, this.quarterEndDate._d],
            //   label: ' Last Quarter'
            // },
            {
              value: [new Date(new Date(new Date().getFullYear() - 1, 3, 1).toDateString()), new Date(new Date(new Date().getFullYear(), 2, 31).toDateString())],
              label: 'Last Financial Year'
            }, {
              value: [new Date(new Date(new Date().getFullYear(), 3, 1).toDateString()), new Date(new Date().setDate(new Date().getDate() - 1))],
              label: 'This Financial Year'
            }, {
              value: [],
              label: 'Custom Range'
            }];
            this.contactService.partyAdded$.subscribe(function () {
              _this2.getAllCotactEn();
            });
            this.commonService.rowAdded$.subscribe(function () {
              _this2.getAllCotactEn();
            });
            this.getAllCotactEn();
            this.form = this.formBuilder.group({
              checkArray: this.formBuilder.array([])
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus(id, status) {
            this.ticketId = id;

            if (status == "SOLVED") {
              this.statusFlag = true;
            } else {
              this.statusFlag = false;
            }
          }
        }, {
          key: "getAllCotactEn",
          value: function getAllCotactEn() {
            var _this3 = this;

            this.contactService.getAllContactEnDetails({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1, moment__WEBPACK_IMPORTED_MODULE_0__(this.dateRange[0], 'DD-MMM-YYYY').format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_0__(this.dateRange[1], 'DD-MMM-YYYY').format('YYYY-MM-DD')).then(function (res) {
              _this3.p = res.data.currentpage;
              _this3.totalrow = res.data.totalrows;
              _this3.contactListResponse = res.data.pageData;
            }, function (err) {
              if (err.error.expose) {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: _this3.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "getEnquirysearch",
          value: function getEnquirysearch(search) {
            var _this4 = this;

            this.search = search;
            this.searchNot = true;
            this.searchNot1 = false;

            if (this.searchKey == "") {
              this.contactService.getEnquiriesList({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1, this.search).then(function (res) {
                _this4.contactListResponse = res.data.pageData;
                _this4.totalrow = res.data.totalrows;
              });
            } else {
              this.contactService.getEnquiriesList({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1, this.search).then(function (res) {
                _this4.contactListResponse = res.data.pageData;
                _this4.totalrow = res.data.totalrows;
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
          key: "getcontact",
          value: function getcontact(ticketId) {}
        }, {
          key: "removeTicket",
          value: function removeTicket() {
            var _this5 = this;

            this.contactService.deleteticketById({}, this.ticketId).then(function (res) {
              console.log(res.ticketId);

              _this5.toastService.toastMsg({
                title: "Success",
                content: "Ticket Deleted Successfully!!!"
              }); // this.toastService.openSnackBar("Ticket Deleted Successfully!!!");


              _this5.getAllCotactEn();

              _this5.checkSelectsingle = false;
              _this5.upiCheckedId = [];
              _this5.checkSelect = false;
              _this5.allSelect = false;
            }, function (err) {
              if (err.error.expose) {
                _this5.toastService.toastMsg({
                  title: "Error",
                  content: _this5.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this5.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e) {
            var checkArray = this.form.get('checkArray');

            if (e.target.checked) {
              this.checkSingleArray.push(e.target.value);
            } else {
              this.checkSingleArray = [];
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(e, ticketId) {
            this.ticketId = ticketId;
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(e, ticketId) {
            this.ticketId = ticketId;
          }
        }, {
          key: "onChekedsingleCheckfalse",
          value: function onChekedsingleCheckfalse(e, id) {
            console.log("checked", e.target.checked);

            if (e.target.checked == true) {
              this.archiveIconfalse = true;
              this.checkSingleArray.push(e.target.value);
              console.log("checkSingleArray", this.checkSingleArray);
              this.upiCheckedId = this.checkSingleArray;
            } else {
              if (this.upiCheckedId.length > this.checkSingleArray.length) {
                var index1 = this.upiCheckedId.indexOf(id);
                console.log(index1);
                this.upiCheckedId.splice(index1, 1);
                console.log("after single click upiCheckedId", this.upiCheckedId);

                if (this.upiCheckedId.length > 0) {
                  this.archiveIconfalse = true;
                  this.checkSelect = false;
                  this.isChecked = false;
                } else {
                  this.archiveIconfalse = false;
                  this.upiCheckedId = [];
                }
              } else {
                var index = this.checkSingleArray.indexOf(id);
                console.log(index);
                this.checkSingleArray.splice(index, 1);
                console.log("this.checkSingleArray", this.checkSingleArray);

                if (this.checkSingleArray.length > 0) {
                  this.archiveIconfalse = true;
                } else {
                  this.archiveIconfalse = false;
                  this.checkSingleArray = [];
                }
              }
            }
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this6 = this;

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            console.log("this.isChecked", this.isChecked);
            this.tickets = this.contactListResponse.map(function (item) {
              if (id == -1) {
                if (_this6.isChecked == true) {
                  _this6.archiveIconfalse = true;
                  _this6.checkSelectsinglefalse = true;
                  return item;
                } else {
                  _this6.archiveIconfalse = false;
                  _this6.checkSelectsinglefalse = false;
                  _this6.upiCheckedId = [];
                  _this6.tickets = [];
                }
              }
            });
            console.log("multiple click", this.tickets);

            for (var i = 0; i < this.tickets.length; i++) {
              this.upiCheckedId.push(this.tickets[i].ticketId);
            }

            console.log("multiple click", this.upiCheckedId);
          }
        }, {
          key: "closeStatus",
          value: function closeStatus() {
            var _this7 = this;

            var body = {
              "ticketId": this.ticketId
            };
            this.contactService.closeticket(body, this.currentUser.id).then(function (res) {
              _this7.toastService.toastMsg({
                title: "Success",
                content: "Ticket Status Solved Successfully!!!"
              });

              _this7.removeTicket();
            }, function (err) {
              if (err.error.expose) {
                _this7.toastService.toastMsg({
                  title: "Error",
                  content: _this7.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this7.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "multipleTicketDel",
          value: function multipleTicketDel() {
            var _this8 = this;

            this.contactService.deleteMultipeticket({
              "ticketsId": this.upiCheckedId
            }, this.currentUser.id).then(function (res) {
              _this8.getAllCotactEn();

              console.log("res");

              _this8.toastService.toastMsg({
                title: "Success",
                content: "Ticket Deleted Successfully!!!"
              });

              _this8.checkSelect = false;
              _this8.archiveIconfalse = false;
              _this8.allSelect = false;
              _this8.checkSelectsinglefalse = false;
              _this8.isChecked = false;
              _this8.upiCheckedId = [];
              _this8.checkSingleArray = [];
              _this8.checkSelectsingle = false;
              _this8.upiCheckedId = [];
              _this8.checkSelect = false;
              _this8.allSelect = false;
            }, function (err) {
              if (err.error.expose) {
                _this8.toastService.toastMsg({
                  title: "Error",
                  content: _this8.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this8.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "closeTicketStatus",
          value: function closeTicketStatus() {
            var _this9 = this;

            var body = {
              "ticketId": this.ticketId
            };
            this.contactService.closeMulTicket(body, this.currentUser.id).then(function (res) {
              _this9.toastService.toastMsg({
                title: "Success",
                content: "Ticket Status Solved Successfully!!!"
              });

              _this9.multipleTicketDel();
            }, function (err) {
              console.log("API Error:", err);

              if (err.error.expose) {
                _this9.toastService.toastMsg({
                  title: "Error",
                  content: _this9.titleCasePipe.transform(err.error.error_message)
                });
              } else {
                _this9.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                });
              }
            });
          }
        }, {
          key: "changeDate",
          value: function changeDate(_e) {
            this.getAllCotactEn();
          }
        }, {
          key: "openAddTicketForm",
          value: function openAddTicketForm() {
            var dialogRef = this.dialog.open(_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_1__.AddTicketComponent, {
              width: '',
              height: '',
              data: {},
              panelClass: 'custom-dialog-AddQuery-class',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            console.log(e); // this.tableData = [];

            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.contactListResponse.length > 0) {
              this.partyPageSize = e.pageSize;
              var searchInput = document.getElementById('searchInput');

              if (searchInput.value !== '') {
                this.getEnquirysearch(searchInput.value);
              } else {
                this.getAllCotactEn();
              }
            }
          }
        }]);

        return _NewticketpageComponent;
      }();

      _NewticketpageComponent.ɵfac = function NewticketpageComponent_Factory(t) {
        return new (t || _NewticketpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_contact_us_service_service__WEBPACK_IMPORTED_MODULE_2__.ContactUsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService));
      };

      _NewticketpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewticketpageComponent,
        selectors: [["app-newticketpage"]],
        decls: 79,
        vars: 28,
        consts: [[1, "container-fluid", "mb-3", "px-0", "mx-0", "bg-white"], ["id", "headingPrintHide", 1, "ticketHeader", "pt-2"], [1, "raisedTicket", "my-2"], [1, "navOption-btns", "headerbutton"], ["id", "excelPrintHide", "type", "button", 1, "btn", "me-3", "my-2", 3, "click"], [1, "fas", "fa-plus"], [1, "m-0"], [1, "header"], [1, "flex-item", "selectYear"], ["for", "Date Range", 1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Date Range", "id", "Date Range", "type", "text", "ngModel", "", "bsDaterangepicker", "", 2, "text-transform", "uppercase!important", 3, "outsideClick", "maxDate", "ngModel", "bsConfig", "ngModelChange"], [1, "iconcalender", "p-1"], [1, "flex-item", "searchBar"], ["for", "Type", 1, "form-label"], ["placeholder", "Type", 3, "ngModel", "ngModelChange"], ["value", "Issue"], ["value", "Query"], [1, "container-fluid", "mt-3"], [1, "overflow-auto"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-nowrap", 2, "vertical-align", "middle", "display", "flex", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", "mb-2", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [4, "ngIf"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "wrap", 2, "vertical-align", "middle"], ["style", "color: #676398!important;", 4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["class", "mb-1 text-center font-weight-bold", "style", "font-weight: 500;font-family: Poppins;", "id", "modalExampleDemoLabel", 4, "ngIf"], ["class", "text-center ", "style", "font-size: 14px;font-family: Poppins;", 4, "ngIf"], [1, "modal-footer", "justify-content-center"], ["class", "btn btn-outline-primary", "data-bs-dismiss", "modal", 4, "ngIf"], ["class", "btn btn-outline-primary", "data-bs-dismiss", "modal", "style", "font-size:14px;height:35px;display:flex;align-items:center;", 3, "click", 4, "ngIf"], ["id", "errorDeleteSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["style", "padding: 0px!important;", "class", "btn ms-3", "data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDeleteSelect-modal", 1, "btn", "ms-3", 2, "padding", "0px!important"], ["class", "bi-trash icon-color fs-1", "style", "color: red;", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "fs-1", 2, "color", "red", 3, "click"], [2, "color", "#676398!important"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "change"], [1, "long-address", 2, "vertical-align", "middle"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", "btnp", "me-4"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", 2, "color", "red", 3, "click"], [1, "text-center"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "500", "font-family", "Poppins"], [1, "text-center", 2, "font-size", "14px", "font-family", "Poppins"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 2, "font-size", "14px", "height", "35px", "display", "flex", "align-items", "center", 3, "click"]],
        template: function NewticketpageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Raised Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewticketpageComponent_Template_button_click_6_listener() {
              return ctx.openAddTicketForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "hr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NewticketpageComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.dateRange = $event;
            })("ngModelChange", function NewticketpageComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.changeDate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NewticketpageComponent_Template_mat_select_ngModelChange_23_listener($event) {
              return ctx.searchKey = $event;
            })("ngModelChange", function NewticketpageComponent_Template_mat_select_ngModelChange_23_listener() {
              return ctx.getEnquirysearch(ctx.searchKey);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Query");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function NewticketpageComponent_Template_input_change_34_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function NewticketpageComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, NewticketpageComponent_span_35_Template, 2, 1, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Created On");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "th", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, NewticketpageComponent_tr_46_Template, 16, 11, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, NewticketpageComponent_tbody_47_Template, 4, 0, "tbody", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, NewticketpageComponent_mat_paginator_48_Template, 1, 5, "mat-paginator", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, NewticketpageComponent_h2_56_Template, 2, 0, "h2", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, NewticketpageComponent_h2_57_Template, 2, 0, "h2", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, NewticketpageComponent_h4_58_Template, 2, 0, "h4", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, NewticketpageComponent_h4_59_Template, 2, 0, "h4", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, NewticketpageComponent_a_61_Template, 2, 0, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, NewticketpageComponent_a_62_Template, 2, 0, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, NewticketpageComponent_a_63_Template, 2, 0, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, NewticketpageComponent_h2_71_Template, 2, 0, "h2", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, NewticketpageComponent_h2_72_Template, 2, 0, "h2", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, NewticketpageComponent_h4_73_Template, 2, 0, "h4", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, NewticketpageComponent_h4_74_Template, 2, 0, "h4", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, NewticketpageComponent_a_76_Template, 2, 0, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, NewticketpageComponent_a_77_Template, 2, 0, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, NewticketpageComponent_a_78_Template, 2, 0, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("outsideClick", true)("maxDate", ctx.today)("ngModel", ctx.dateRange)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c1, ctx.ranges));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchKey);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1)("checked", ctx.checkSelect)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.archiveIconfalse);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.contactListResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.contactListResponse.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.contactListResponse.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.statusFlag);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 8px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F8F8F8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.ticketHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 8px 0px;\n  padding-left: 17px;\n  flex-wrap: wrap;\n}\n\n.raisedTicket[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n@media (max-width: 320px) {\n  .ticketHeader[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 8px 11px 0px;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  flex-basis: 270px;\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-bottom: 10px;\n}\n\n@media screen and (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    overflow-x: scroll;\n  }\n\n  .flex-item[_ngcontent-%COMP%] {\n    flex-basis: 60px;\n  }\n\n  .selectYear[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n\n  .searchBar[_ngcontent-%COMP%] {\n    width: 270px;\n    align-self: center;\n  }\n}\n\n  .theme-dark-blue {\n  margin-left: 18% !important;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3RpY2tldHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBRUUsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFLQSwwQkFBQTtFQUNGLDRCQUFBO0VBQ0EscVhBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQTBDLCtCQUFBO0FBSDVDOztBQU9FO0VBQ0UsV0FBQTtBQUpKOztBQUdFO0VBQ0UsV0FBQTtBQUpKOztBQU1FO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBT0U7RUFDRSx5QkFBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtBQUpKOztBQU9FO0VBQ0UsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFPRTtFQUNFLDZCQUFBO0FBSko7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFORjtBQUNGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBWEY7O0FBY0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBZUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQVpGOztFQWNBO0lBQ0UsZ0JBQUE7RUFYRjs7RUFhQTtJQUNFLFlBQUE7RUFWRjs7RUFZQTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQVZGIiwiZmlsZSI6Im5ld3RpY2tldHBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lclNlYXJjaEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAgIC8vIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTdweDtcclxuICAgIC8vY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8vYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgY2xhc3M9J2JpIGJpLXNlYXJjaCcgdmlld0JveD0nMCAwIDE2IDE2JyUzRSUzQ3BhdGggZD0nTTExLjc0MiAxMC4zNDRhNi41IDYuNSAwIDEgMC0xLjM5NyAxLjM5OGgtLjAwMWMuMDMuMDQuMDYyLjA3OC4wOTguMTE1bDMuODUgMy44NWExIDEgMCAwIDAgMS40MTUtMS40MTRsLTMuODUtMy44NWExLjAwNyAxLjAwNyAwIDAgMC0uMTE1LS4xek0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNhbGMoMTAwJSArIDIwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG5cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICAuaWNvbmNhbGVuZGVyIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLy9mb3IgIHRhYmxlIGhvcml6b250YWwgYWZ0ZXIgdGFibGUgaGVhZGluZyBsaW5lXHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICB9XHJcblxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgdGJvZHkgdHIsIHRkIHtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aCwgdGQsIHRyIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLy8gUmVzcHBvbnNpdmUgdGlja2V0IGhlYWRlclxyXG5cclxuLnRpY2tldEhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJhaXNlZFRpY2tldCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLnRpY2tldEhlYWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVzcG9uc2l2ZSBzZWFyY2ggYmFyIHJvdy5cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogOHB4IDExcHggMHB4O1xyXG59XHJcblxyXG4uZmxleC1pdGVtIHtcclxuICBmbGV4LWJhc2lzOiAyNzBweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICB9XHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgICBmbGV4LWJhc2lzOiA2MHB4O1xyXG4gIH1cclxuICAuc2VsZWN0WWVhciB7XHJcbiAgICB3aWR0aDoyODBweDtcclxuICB9XHJcbiAgLnNlYXJjaEJhciB7XHJcbiAgICB3aWR0aDoyNzBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGhlbWUtZGFyay1ibHVlIHtcclxuICBtYXJnaW4tbGVmdDogMTglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_contactlist-module_contactlist-module_module_ts-es5.js.map