(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_admin-new-module_admin-new-module_module_ts"], {
    /***/
    8021:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/admin-new-module/admin-edit-role-form/admin-edit-role-form.component.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminEditRoleFormComponent": function AdminEditRoleFormComponent() {
          return (
            /* binding */
            _AdminEditRoleFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      function AdminEditRoleFormComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Role Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AdminEditRoleFormComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AdminEditRoleFormComponent_tr_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminEditRoleFormComponent_tr_42_Template_input_change_8_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.selectCrud(i_r4, $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminEditRoleFormComponent_tr_42_Template_input_change_11_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.selectCrud(i_r4, $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminEditRoleFormComponent_tr_42_Template_input_change_14_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.selectCrud(i_r4, $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminEditRoleFormComponent_tr_42_Template_input_change_17_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.selectCrud(i_r4, $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminEditRoleFormComponent_tr_42_Template_input_change_20_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var i_r4 = restoredCtx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.selectAllOption(i_r4, $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, item_r3.value.permissionName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.isAllSelected);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AdminEditRoleFormComponent = /*#__PURE__*/function () {
        function _AdminEditRoleFormComponent(rolePermissionservice, route, fb, titleCasePipe, toast, toastService, router, dialogRef, RoleData) {
          _classCallCheck(this, _AdminEditRoleFormComponent);

          this.rolePermissionservice = rolePermissionservice;
          this.route = route;
          this.fb = fb;
          this.titleCasePipe = titleCasePipe;
          this.toast = toast;
          this.toastService = toastService;
          this.router = router;
          this.dialogRef = dialogRef;
          this.RoleData = RoleData;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.isShowMessage = false;
          this.isShowUpdateBtn = false;
          this.sendArray = [];
        }

        _createClass(_AdminEditRoleFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.roleId = this.RoleData.RoleId;
            this.editRolePermissions();
            this.rolesForm = this.fb.group({
              RoleName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              Description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              permissionsFormArray: this.fb.array([])
            });
          }
        }, {
          key: "formArr",
          get: function get() {
            return this.rolesForm.get('permissionsFormArray');
          }
        }, {
          key: "f",
          get: function get() {
            return this.rolesForm.controls;
          }
        }, {
          key: "selectAllOption",
          value: function selectAllOption(index, checked) {
            var checkboxes = this.rolesForm.get("permissionsFormArray");

            if (checked) {
              checkboxes.controls[index].patchValue({
                read: true,
                "delete": true,
                modify: true,
                create: true
              });
            } else {
              checkboxes.controls[index].patchValue({
                read: false,
                "delete": false,
                modify: false,
                create: false
              });
            }
          }
        }, {
          key: "addDetailsButtonClick",
          value: function addDetailsButtonClick(index, id) {
            var content = this.rolesForm.get("permissionsFormArray");
            content.push(this.addRolesPermission(id));
          }
        }, {
          key: "addRolesPermission",
          value: function addRolesPermission(id) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              permissionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
              permissionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(id),
              read: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
              create: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
              modify: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
              "delete": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false),
              all: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl()
            });
          }
        }, {
          key: "updateCustomRoles",
          value: function updateCustomRoles() {
            var _this = this;

            var data = {
              "roleName": this.rolesForm.controls.RoleName.value,
              "userId": this.currentUser.id,
              "description": this.rolesForm.controls.Description.value,
              // "permissionsArray": this.rolesForm.controls.permissionsFormArray.value
              "permissionsArray": this.formArr.value.map(function (item) {
                return {
                  permissionId: item.permissionId,
                  read: item.read,
                  "delete": item["delete"],
                  create: item.create,
                  modify: item.modify //permissionName: item.permissionName

                };
              })
            };
            this.rolePermissionservice.updateCustomRoles(data, this.roleId).then(function (res) {
              if (res) {
                _this.rolePermissionservice.notifyUserAdded();

                _this.isShowMessage = true;
                setTimeout(function () {
                  _this.isShowMessage = false;
                }, 3000);

                _this.toastService.toastMsg({
                  title: "Success",
                  content: "Role List Updated Successfully!!!"
                }); // this.toast.openSnackBar("Role List Updated Successfully!!!");


                _this.dialogRef.close();

                _this.rolesForm.reset();
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
          /**
           * Row wise selecting and deselecting each crud
           * @param index
           * @param checked
           */

        }, {
          key: "selectCrud",
          value: function selectCrud(index, checked) {
            if (!checked) {
              this.formArr.controls[index].patchValue({
                all: false
              }); // this[type]=false
            } else if (checked) {
              var values = this.formArr.controls[index].value;

              if (values.create && values.modify && values["delete"] && values.read) {
                this.formArr.controls[index].patchValue({
                  all: true
                });
              }
            }
          }
        }, {
          key: "editRolePermissions",
          value: function editRolePermissions() {
            var _this2 = this;

            this.rolePermissionservice.getRolesPermissionById({}, this.roleId).then(function (res) {
              _this2.isShowUpdateBtn = true;

              _this2.rolesForm.get("RoleName").patchValue(res.data.role.roleName);

              _this2.rolesForm.get("Description").patchValue(res.data.role.description);

              for (var i = 0; i < res.data.rolepermissions.length; i++) {
                if (res.data.rolepermissions[i].role_permissions.read && res.data.rolepermissions[i].role_permissions.create && res.data.rolepermissions[i].role_permissions.modify && res.data.rolepermissions[i].role_permissions["delete"]) {
                  _this2.formArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                    permissionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].permissionName),
                    permissionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].id),
                    read: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.read),
                    create: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.create),
                    modify: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.modify),
                    "delete": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions["delete"]),
                    all: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(true)
                  }));
                } else if (res.data.rolepermissions[i].role_permissions.read || res.data.rolepermissions[i].role_permissions.create || res.data.rolepermissions[i].role_permissions.modify || res.data.rolepermissions[i].role_permissions["delete"]) {
                  _this2.formArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                    permissionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].permissionName),
                    permissionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].id),
                    read: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.read),
                    create: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.create),
                    modify: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.modify),
                    "delete": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions["delete"]),
                    all: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false)
                  }));
                } else if (!res.data.rolepermissions[i].role_permissions.read && !res.data.rolepermissions[i].role_permissions.create && !res.data.rolepermissions[i].role_permissions.modify && !res.data.rolepermissions[i].role_permissions["delete"]) {
                  _this2.formArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                    permissionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].permissionName),
                    permissionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].id),
                    read: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.read),
                    create: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.create),
                    modify: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions.modify),
                    "delete": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(res.data.rolepermissions[i].role_permissions["delete"]),
                    all: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false)
                  }));
                }
              }
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return _AdminEditRoleFormComponent;
      }();

      _AdminEditRoleFormComponent.ɵfac = function AdminEditRoleFormComponent_Factory(t) {
        return new (t || _AdminEditRoleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_0__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
      };

      _AdminEditRoleFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AdminEditRoleFormComponent,
        selectors: [["app-admin-edit-role-form"]],
        decls: 45,
        vars: 10,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "4px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, ""], [3, "formGroup"], [1, "row", "mt-3"], [1, "col-sm-12", "col-md-6", "col-lg-6", 2, "font-size", "12px"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "required", "", "placeholder", "Role Name", "matInput", "", "formControlName", "RoleName", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-6", "col-lg-6", "ml-0", 2, "font-size", "12px"], ["matInput", "", "required", "", "formControlName", "Description", "rows", "1", "placeholder", "Description", 3, "ngClass"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "table-responsive", "scrollbar", "table-bordered", "mt-2"], [1, "table", "table-striped", "bg-white", "overflow-hidden"], [1, "btn-reveal-trigger"], ["scope", "col"], ["scope", "col-md-2"], ["formArrayName", "permissionsFormArray"], ["class", "btn-reveal-trigger", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "col-12", "d-flex", "justify-content-end"], [1, "text-danger"], [1, "btn-reveal-trigger", 3, "formGroupName"], [1, "mb-0"], ["value", "item.value.id", 1, ""], ["formControlName", "read", "type", "checkbox", 1, "form-check-input", 3, "change"], ["formControlName", "create", "type", "checkbox", 1, "form-check-input", 3, "change"], ["formControlName", "modify", "type", "checkbox", 1, "form-check-input", 3, "change"], ["formControlName", "delete", "type", "checkbox", 1, "form-check-input", 3, "change"], [1, "form-check", "mb-0"], ["type", "checkbox", "formControlName", "all", 1, "form-check-input", 3, "checked", "change"]],
        template: function AdminEditRoleFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit Roles and Permissions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEditRoleFormComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminEditRoleFormComponent_Template_button_click_6_listener() {
              return ctx.updateCustomRoles();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminEditRoleFormComponent_mat_error_17_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AdminEditRoleFormComponent_mat_error_23_Template, 2, 0, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Permission Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Read");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Modify");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tbody", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AdminEditRoleFormComponent_tr_42_Template, 21, 5, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.rolesForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.f.RoleName.invalid && ctx.f.RoleName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.RoleName.touched) && (ctx.f.RoleName.errors == null ? null : ctx.f.RoleName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.f.Description.invalid && ctx.f.Description.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.Description.touched) && (ctx.f.Description.errors == null ? null : ctx.f.Description.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.formArr.controls);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
        styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700;800&display=swap\");\n.mod1[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", Courier, monospace !important;\n}\n.form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.lab[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #2c7be5 !important;\n}\n.mod[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 1.1em;\n}\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: normal;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: black;\n  font-style: normal;\n}\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -24px;\n}\n.iconrupees[_ngcontent-%COMP%] {\n  float: left !important;\n  margin-top: -3px;\n}\n.plus[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  color: white;\n}\n.minus[_ngcontent-%COMP%] {\n  background-color: #0f3361;\n  color: white;\n}\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.toggleHeader[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-left: 79% !important;\n  position: absolute !important;\n  margin-bottom: 3px !important;\n  margin-top: -20px !important;\n  font-size: 15px !important;\n  color: black !important;\n}\n.icon-color[_ngcontent-%COMP%] {\n  color: #b8babd;\n}\n.dash[_ngcontent-%COMP%] {\n  border: 2px dashed #fc7643;\n}\n.dash[_ngcontent-%COMP%]:hover {\n  border: 1px;\n}\nspan.bi-plus.me-2.fs--1.text-black.newrow[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n.input-euro[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-euro.left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.input-euro.left[_ngcontent-%COMP%]:before {\n  left: 5px;\n}\n.icon-color[_ngcontent-%COMP%]:hover {\n  color: #2c7be5;\n}\ninput#customSwitch3.colortoggle.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: green !important;\n}\nth.ng-star-inserted[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n.reciveToggle[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  color: black;\n}\n  .mat-form-field :hover .mat-form-field-outline-thick {\n  color: #2c7be5;\n}\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2c7be5 !important;\n}\n  .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\n  color: #2c7be5;\n}\n  .mat-form-field-appearance-outline.mat-focused .mat-select-arrow {\n  color: #2c7be5 !important;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #2c7be5 !important;\n  background-color: #f0f7fe !important;\n}\n.theme-wizard[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.theme-wizard[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #2c7be5 !important;\n}\n#pill-tab1[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #pill-tab2[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #2c7be5 !important;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.toggle-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 40px;\n  \n  height: 20px;\n  \n  background: grey;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n  transition: background-color 0.3s ease;\n}\n.toggle-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 2.5px;\n  \n  left: 2.5px;\n  \n  width: 15px;\n  \n  height: 15px;\n  \n  background: #fff;\n  border-radius: 90px;\n  transition: transform 0.3s ease;\n}\n.toggle-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #0174E8;\n}\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  left: calc(100% - 2.5px);\n  transform: translateX(-100%);\n}\n.toggle-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active:after {\n  width: 25px;\n  \n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.small-toggle[_ngcontent-%COMP%] {\n  width: 35px;\n  \n  height: 21px;\n  \n}\n.bold[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bolder;\n}\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  margin-top: -15px !important;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.model-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n  input[type=select]:disabled {\n  background: #dddddd !important;\n}\ninput[type=text][_ngcontent-%COMP%]:disabled {\n  background: #dddddd !important;\n}\ninput[_ngcontent-%COMP%]:readonly {\n  background: #dddddd !important;\n}\n  .mat-select-panel-wrap {\n  width: 100px !important;\n  padding-top: 5px !important;\n}\n.tableBottomLine[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e6e9f0;\n  \n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWVkaXQtcm9sZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZHQUFBO0FBQ1I7RUFDRSx5REFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBTUE7RUFDRSxvQ0FBQTtBQUhGO0FBS0E7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQUFBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQUdGO0FBREE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUlGO0FBRkE7RUFDRSxjQUFBO0FBS0Y7QUFIQTtFQUNFLDBCQUFBO0FBTUY7QUFBQTtFQUNFLFdBQUE7QUFHRjtBQUFBO0VBQ0UsdUJBQUE7QUFHRjtBQURBO0VBQ0ssa0JBQUE7QUFJTDtBQUZDO0VBQ0ksa0JBQUE7QUFLTDtBQURDO0VBQ0ksU0FBQTtBQUlMO0FBRkE7RUFDRSxjQUFBO0FBS0Y7QUFBQTtFQUNFLGtDQUFBO0FBR0Y7QUFEQTtFQUNFLGtDQUFBO0FBSUY7QUFGQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUtGO0FBSEE7RUFDRSxjQUFBO0FBTUY7QUFIQTtFQUdFLHlCQUFBO0FBSUY7QUFJQTtFQUdFLGNBQUE7QUFIRjtBQUtBO0VBQ0UseUJBQUE7QUFGRjtBQUtBOztFQUVFLHlCQUFBO0VBQ0Esb0NBQUE7QUFGRjtBQUlBO0VBQ0UsdUJBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7QUFERjtBQUdBOztFQUVFLHlCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUFhLGdDQUFBO0VBQ2IsWUFBQTtFQUFjLGlDQUFBO0VBQ2QsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFBWSx1Q0FBQTtFQUNaLFdBQUE7RUFBYSx3Q0FBQTtFQUNiLFdBQUE7RUFBYSxnQ0FBQTtFQUNiLFlBQUE7RUFBYyxpQ0FBQTtFQUNkLGdCQUFBO0VBQ0EsbUJBQUE7RUFFRSwrQkFBQTtBQUdKO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFBYSxnQ0FBQTtBQUdmO0FBQUEsY0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7RUFBYSxnQ0FBQTtFQUNiLFlBQUE7RUFBYyxpQ0FBQTtBQUtoQjtBQUZBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUtGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsNEJBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7QUFDRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBRUY7QUFBQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUdGO0FBREE7RUFDRSw4QkFBQTtBQUlGO0FBRkE7RUFDRSw4QkFBQTtBQUtGO0FBSEE7RUFDRSw4QkFBQTtBQU1GO0FBSkE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FBT0Y7QUFIQTtFQUNFLGdDQUFBO0VBQW1DLDBEQUFBO0FBT3JDO0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUY7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTUY7QUFIQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQU1GOztFQUhBO0lBQ0UsZ0JBQUE7RUFNRjtBQUNGIiwiZmlsZSI6ImFkbWluLWVkaXQtcm9sZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4ubW9kMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vLyAqe1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi5sYWIgLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjN2JlNSAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2Qge1xyXG5cclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbi5pY29uY2FsZW5kZXIge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0yNHB4O1xyXG59XHJcbi5pY29ucnVwZWVzIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuLnBsdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzdiZTU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5taW51cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMzM2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50b2dnbGVIZWFkZXIge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA3OSUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29uLWNvbG9yIHtcclxuICBjb2xvcjogI2I4YmFiZDtcclxufVxyXG4uZGFzaCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMjUyLCAxMTgsIDY3LCAxKTtcclxuICAvLyBib3JkZXI6IDFweCAjMmM3YmU1O1xyXG4gIC8vIGhlaWdodDogNDBweDtcclxuICAvLyB3aWR0aDogMTQ1cHg7KlxyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzMkM3QkU1RkYnIHN0cm9rZS13aWR0aD0nMycgc3Ryb2tlLWRhc2hhcnJheT0nNiUyYyAxMScgc3Ryb2tlLWRhc2hvZmZzZXQ9JzAnIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuLmRhc2g6aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggO1xyXG59XHJcblxyXG5zcGFuLmJpLXBsdXMubWUtMi5mcy0tMS50ZXh0LWJsYWNrLm5ld3Jvdzpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LWV1cm8ge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC5pbnB1dC1ldXJvLmxlZnQgaW5wdXQge1xyXG4gICAgIHBhZGRpbmctbGVmdDoxOHB4O1xyXG4gfVxyXG5cclxuXHJcbiAuaW5wdXQtZXVyby5sZWZ0OmJlZm9yZSB7XHJcbiAgICAgbGVmdDogNXB4O1xyXG4gfVxyXG4uaWNvbi1jb2xvcjpob3ZlciB7XHJcbiAgY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuLy8gIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuaW5wdXQjY3VzdG9tU3dpdGNoMy5jb2xvcnRvZ2dsZS5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG50aC5uZy1zdGFyLWluc2VydGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxufVxyXG4ucmVjaXZlVG9nZ2xlIHtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgOmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNTtcclxufVxyXG5cclxuOjpuZy1kZWVwXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZFxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICBjb2xvcjogIzJjN2JlNSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC5teXNlbGVjdCBzZWxlY3Qge1xyXG4vLyAgIGhlaWdodDogMzBweDtcclxuLy8gICBib3JkZXItY29sb3I6ICMyYzdiZTU7XHJcbi8vICAgcGFkZGluZzogMTBweDtcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG4vLyB9XHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtc2VsZWN0OmZvY3VzOm5vdCgubWF0LXNlbGVjdC1kaXNhYmxlZCkubWF0LXByaW1hcnlcclxuICAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgY29sb3I6ICMyYzdiZTU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gIGNvbG9yOiAjMmM3YmU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgY29sb3I6ICMyYzdiZTUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmN2ZlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRoZW1lLXdpemFyZCAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGhlbWUtd2l6YXJkIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICMyYzdiZTUgIWltcG9ydGFudDtcclxufVxyXG4jcGlsbC10YWIxIC5uYXYtbGluay5hY3RpdmUsXHJcbiNwaWxsLXRhYjIgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMyYzdiZTUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvZ2dsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi50b2dnbGUtY29udGFpbmVyIGxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgd2lkdGg6IDQwcHg7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgZGVzaXJlZCAqL1xyXG4gIGhlaWdodDogMjBweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgZGVzaXJlZCAqL1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbnRhaW5lciBsYWJlbDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMi41cHg7IC8qIEFkanVzdCB0aGUgdG9wIHBvc2l0aW9uIGFzIGRlc2lyZWQgKi9cclxuICBsZWZ0OiAyLjVweDsgLyogQWRqdXN0IHRoZSBsZWZ0IHBvc2l0aW9uIGFzIGRlc2lyZWQgKi9cclxuICB3aWR0aDogMTVweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBkZXNpcmVkICovXHJcbiAgaGVpZ2h0OiAxNXB4OyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBkZXNpcmVkICovXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIC8vIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxufVxyXG5cclxuLnRvZ2dsZS1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjMDE3NEU4O1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDIuNXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4udG9nZ2xlLWNvbnRhaW5lciBsYWJlbDphY3RpdmU6YWZ0ZXIge1xyXG4gIHdpZHRoOiAyNXB4OyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIGRlc2lyZWQgKi9cclxufVxyXG5cclxuLyogQ2VudGVyaW5nICovXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc21hbGwtdG9nZ2xlIHtcclxuICB3aWR0aDogMzVweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBkZXNpcmVkICovXHJcbiAgaGVpZ2h0OiAyMXB4OyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBkZXNpcmVkICovXHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vLyAuY29udGFpbmVyLWZsdWlkIGZvcm0gaW5wdXQge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBoZWlnaHQ6IDg4JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xyXG59XHJcbi5tb2RlbC1ib2R5e1xyXG4gIGhlaWdodDo4OCU7XHJcbiAgb3ZlcmZsb3cteTphdXRvO1xyXG59XHJcbi5pY29uY2FsZW5kZXJ7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCBpbnB1dFt0eXBlPXNlbGVjdF06ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkZGRkICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQ6cmVhZG9ubHl7XHJcbiAgYmFja2dyb3VuZDogI2RkZGRkZCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbC13cmFwIHtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDo1cHggIWltcG9ydGFudDtcclxuICAvL21hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGVCb3R0b21MaW5lIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2ZTlmMDs7IC8qIEFkZCBhIDFweCBzb2xpZCBibGFjayBsaW5lIGJlbG93IHRoZSB0YWJsZSBoZWFkZXIgcm93ICovXHJcbn1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    35227:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/admin-new-module/admin-new-module-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminNewModuleRoutingModule": function AdminNewModuleRoutingModule() {
          return (
            /* binding */
            _AdminNewModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _admin_roles_list_admin_roles_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-roles-list/admin-roles-list.component */
      26363);
      /* harmony import */


      var _admin_roles_list_new_role_list_new_role_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-roles-list/new-role-list/new-role-list.component */
      36400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316); // const routes: Routes = [
      // {
      //   path:"",
      //   component:AdminRolesListComponent
      // }
      // ];


      var routes = [{
        path: '',
        component: _admin_roles_list_new_role_list_new_role_list_component__WEBPACK_IMPORTED_MODULE_1__.NewRoleListComponent,
        children: [{
          path: '',
          redirectTo: 'role_product',
          pathMatch: 'full'
        }, {
          path: "role_product",
          component: _admin_roles_list_admin_roles_list_component__WEBPACK_IMPORTED_MODULE_0__.AdminRolesListComponent
        }]
      }];

      var _AdminNewModuleRoutingModule = /*#__PURE__*/_createClass(function _AdminNewModuleRoutingModule() {
        _classCallCheck(this, _AdminNewModuleRoutingModule);
      });

      _AdminNewModuleRoutingModule.ɵfac = function AdminNewModuleRoutingModule_Factory(t) {
        return new (t || _AdminNewModuleRoutingModule)();
      };

      _AdminNewModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AdminNewModuleRoutingModule
      });
      _AdminNewModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AdminNewModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81175:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/admin-new-module/admin-new-module.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminNewModuleModule": function AdminNewModuleModule() {
          return (
            /* binding */
            _AdminNewModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _admin_new_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-new-module-routing.module */
      35227);
      /* harmony import */


      var _admin_roles_list_admin_roles_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-roles-list/admin-roles-list.component */
      26363);
      /* harmony import */


      var _admin_add_role_form_admin_add_role_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-add-role-form/admin-add-role-form.component */
      51914);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _admin_edit_role_form_admin_edit_role_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin-edit-role-form/admin-edit-role-form.component */
      8021);
      /* harmony import */


      var _admin_roles_list_new_role_list_new_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-roles-list/new-role-list/new-role-list.component */
      36400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AdminNewModuleModule = /*#__PURE__*/_createClass(function _AdminNewModuleModule() {
        _classCallCheck(this, _AdminNewModuleModule);
      });

      _AdminNewModuleModule.ɵfac = function AdminNewModuleModule_Factory(t) {
        return new (t || _AdminNewModuleModule)();
      };

      _AdminNewModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _AdminNewModuleModule
      });
      _AdminNewModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _admin_new_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminNewModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_AdminNewModuleModule, {
          declarations: [_admin_roles_list_admin_roles_list_component__WEBPACK_IMPORTED_MODULE_1__.AdminRolesListComponent, _admin_add_role_form_admin_add_role_form_component__WEBPACK_IMPORTED_MODULE_2__.AdminAddRoleFormComponent, _admin_edit_role_form_admin_edit_role_form_component__WEBPACK_IMPORTED_MODULE_4__.AdminEditRoleFormComponent, _admin_roles_list_new_role_list_new_role_list_component__WEBPACK_IMPORTED_MODULE_5__.NewRoleListComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _admin_new_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminNewModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    26363:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/admin-new-module/admin-roles-list/admin-roles-list.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminRolesListComponent": function AdminRolesListComponent() {
          return (
            /* binding */
            _AdminRolesListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _admin_add_role_form_admin_add_role_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../admin-add-role-form/admin-add-role-form.component */
      51914);
      /* harmony import */


      var _admin_edit_role_form_admin_edit_role_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admin-edit-role-form/admin-edit-role-form.component */
      8021);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      function AdminRolesListComponent_tr_20_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AdminRolesListComponent_tr_20_button_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AdminRolesListComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AdminRolesListComponent_tr_20_button_11_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AdminRolesListComponent_tr_20_button_12_Template, 2, 0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminRolesListComponent_tr_20_Template_button_click_15_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.OpenEditRole(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminRolesListComponent_tr_20_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.getRoleID(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.roleName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.countOfUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r2.isRoot);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r2.isRoot);
        }
      }

      function AdminRolesListComponent_tbody_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _AdminRolesListComponent = /*#__PURE__*/function () {
        function _AdminRolesListComponent(rolePermissionservice, titleCasePipe, toastService, dialog) {
          _classCallCheck(this, _AdminRolesListComponent);

          this.rolePermissionservice = rolePermissionservice;
          this.titleCasePipe = titleCasePipe;
          this.toastService = toastService;
          this.dialog = dialog;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.roleId = "";
          this.showDeleteMessage = false;
        }

        _createClass(_AdminRolesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.rolePermissionservice.userAdded$.subscribe(function () {
              _this3.getRole();
            });
            this.getRole();
          }
        }, {
          key: "getRole",
          value: function getRole() {
            var _this4 = this;

            this.rolePermissionservice.getRoles({}, this.currentUser.id).then(function (data) {
              _this4.roleData = data.data;
              _this4.roleId = data.data.id;
            }, function (err) {
              if (err.error.expose) {
                _this4.toastService.toastMsg({
                  title: "Error",
                  content: _this4.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this4.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "deleteRole",
          value: function deleteRole() {
            var _this5 = this;

            this.rolePermissionservice.deleteRoleById({}, this.Id).then(function (data) {
              // this.toastService.openSnackBar("Role Deleted Successfully!!!");
              _this5.toastService.toastMsg({
                title: "Success",
                content: "Role Deleted Successfully!!!"
              });

              _this5.getRole();
            }, function (err) {
              if (err.error.expose) {
                _this5.toastService.toastMsg({
                  title: "Error",
                  content: _this5.titleCasePipe.transform(err.error.error_message)
                }); // this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));

              } else {
                _this5.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "getRoleID",
          value: function getRoleID(id) {
            this.Id = id;
          }
        }, {
          key: "OpenRoleForm",
          value: function OpenRoleForm() {
            var dialogRef = this.dialog.open(_admin_add_role_form_admin_add_role_form_component__WEBPACK_IMPORTED_MODULE_0__.AdminAddRoleFormComponent, {
              width: 'auto',
              height: 'auto',
              data: {},
              panelClass: 'custom-dialog-addRoles-class',
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
          key: "OpenEditRole",
          value: function OpenEditRole(RoleId) {
            var dialogRef = this.dialog.open(_admin_edit_role_form_admin_edit_role_form_component__WEBPACK_IMPORTED_MODULE_1__.AdminEditRoleFormComponent, {
              width: 'auto',
              height: 'auto',
              data: {
                RoleId: RoleId
              },
              panelClass: 'custom-dialog-addeditRoles-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _AdminRolesListComponent;
      }();

      _AdminRolesListComponent.ɵfac = function AdminRolesListComponent_Factory(t) {
        return new (t || _AdminRolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
      };

      _AdminRolesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AdminRolesListComponent,
        selectors: [["app-admin-roles-list"]],
        decls: 40,
        vars: 2,
        consts: [[1, "row", "card-header", "bg-white"], [1, "col-lg-12", "navOption-btns", 2, "float", "right !important"], ["type", "button", 1, "btn", "m-1", "navOption-btns", 2, "float", "right !important", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "card-body", "bg-white", "container-fluid", "mb-2"], [2, "width", "100%", "overflow-x", "auto"], [1, "table", "table-responsive", "table-striped", "mb-0"], [1, "btn-reveal-trigger"], [1, "text-nowrap", 2, "vertical-align", "middle"], [2, "text-align", "center"], ["class", "btn-reveal-trigger", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "error-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-3", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-save", 3, "click"], [1, "center-align"], [1, ""], [1, "dropdown", "font-sans-serif", "position-static"], ["class", "btn btn-link text-600 btn-sm btnp", "style", "cursor: not-allowed;", "title", "not allowed", 4, "ngIf"], ["class", "btn btn-link text-600 btn-sm dropdown-toggle btn-reveal", "type", "submit", "data-bs-toggle", "dropdown", "data-boundary", "window", "aria-haspopup", "true", "aria-expanded", "true", "style", "cursor: pointer;", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "bg-white", "py-0"], ["title", "Edit Role", 1, "btn", "btn-light", "btn-sm", "btn2", 3, "click"], ["aria-hidden", "true", "title", "Delete Role", "data-bs-toggle", "modal", "data-bs-target", "#error-modal", 1, "btn", "btn-light", "btn-sm", "btn2", 3, "click"], ["title", "not allowed", 1, "btn", "btn-link", "text-600", "btn-sm", "btnp", 2, "cursor", "not-allowed"], ["disabled", "", 1, "fas", "fa-ellipsis-h", "fs--1"], ["type", "submit", "data-bs-toggle", "dropdown", "data-boundary", "window", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-link", "text-600", "btn-sm", "dropdown-toggle", "btn-reveal", 2, "cursor", "pointer"], [1, "fas", "fa-ellipsis-h", "fs--1"], ["colspan", "5"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"]],
        template: function AdminRolesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminRolesListComponent_Template_button_click_2_listener() {
              return ctx.OpenRoleForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Add Roles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "No.of Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminRolesListComponent_tr_20_Template, 20, 6, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AdminRolesListComponent_tbody_21_Template, 4, 0, "tbody", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " Delete Role? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Are you sure to delete this role?");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "User already have assign to this role!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminRolesListComponent_Template_button_click_38_listener() {
              return ctx.deleteRole();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.roleData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.roleData == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        styles: [".custom-dialog-addRoles-class {\n  margin-left: 40% !important;\n  height: 100vh !important;\n}\n\n  .custom-dialog-addeditRoles-class {\n  margin-left: 40% !important;\n  height: 100vh !important;\n}\n\n.tableBottomLine[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e6e9f0 !important;\n  \n}\n\nth[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.delete-edit-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  \n}\n\n.delete-edit-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  \n}\n\n.remove-white-space[_ngcontent-%COMP%] {\n  padding: 0px;\n  \n  margin-left: 15px;\n  \n  border: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXJvbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUVBLHdCQUFBO0FBQUo7O0FBR0M7RUFDRywyQkFBQTtFQUVBLHdCQUFBO0FBREo7O0FBSUM7RUFDRSwyQ0FBQTtFQUE0QywwREFBQTtBQUEvQzs7QUFFQztFQUNDLFlBQUE7QUFDRjs7QUFDQztFQUNDLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQWUseUNBQUE7QUFJakI7O0FBREE7RUFDRSxpQkFBQTtFQUFtQixnQ0FBQTtBQUtyQjs7QUFGQTtFQUNFLFlBQUE7RUFBYyxtQkFBQTtFQUNkLGlCQUFBO0VBQW1CLGtCQUFBO0VBQ25CLFlBQUE7RUFBYywwQkFBQTtBQVFoQiIsImZpbGUiOiJhZG1pbi1yb2xlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICAuY3VzdG9tLWRpYWxvZy1hZGRSb2xlcy1jbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCUgIWltcG9ydGFudDtcclxuICAgLy8gb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nLWFkZGVkaXRSb2xlcy1jbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCUgIWltcG9ydGFudDtcclxuICAgLy8gb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG5cclxuIH1cclxuIC50YWJsZUJvdHRvbUxpbmUge1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2ZTlmMCFpbXBvcnRhbnQgOy8qIEFkZCBhIDFweCBzb2xpZCBibGFjayBsaW5lIGJlbG93IHRoZSB0YWJsZSBoZWFkZXIgcm93ICovXHJcbiB9XHJcbiB0aCB7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gfVxyXG4gLmNlbnRlci1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZWxldGUtZWRpdC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBtYW5hZ2UgYnV0dG9uIHNwYWNpbmcgKi9cclxufVxyXG5cclxuLmRlbGV0ZS1lZGl0LWJ1dHRvbnMgYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogQWRqdXN0IHRoZSBtYXJnaW4gYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi5yZW1vdmUtd2hpdGUtc3BhY2Uge1xyXG4gIHBhZGRpbmc6IDBweDsgLyogUmVtb3ZlIHBhZGRpbmcgKi9cclxuICBtYXJnaW4tbGVmdDogMTVweDsgLyogUmVtb3ZlIG1hcmdpbiAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlciwgaWYgYW55ICovXHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36400:
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/admin-new-module/admin-roles-list/new-role-list/new-role-list.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRoleListComponent": function NewRoleListComponent() {
          return (
            /* binding */
            _NewRoleListComponent
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

      var _NewRoleListComponent = /*#__PURE__*/function () {
        function _NewRoleListComponent() {
          _classCallCheck(this, _NewRoleListComponent);
        }

        _createClass(_NewRoleListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NewRoleListComponent;
      }();

      _NewRoleListComponent.ɵfac = function NewRoleListComponent_Factory(t) {
        return new (t || _NewRoleListComponent)();
      };

      _NewRoleListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NewRoleListComponent,
        selectors: [["app-new-role-list"]],
        decls: 11,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "px-3", "pt-3"], ["id", "navPanel", "id", "headingPrintHide", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./role_product", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function NewRoleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Role List");

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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: [".navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 40px !important;\n}\n\n#download[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.component-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.navOptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  font-size: 1.1em;\n  font-weight: bold !important;\n  transition-duration: 0.5s;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #FC7643;\n  border: 2px solid #FC7643;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  z-index: 1;\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n  }\n}\n\n@media (max-width: 992px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 18%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 28%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n    margin-top: -16%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 35%;\n    margin-top: -16%;\n  }\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1yb2xlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUg1Qzs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFHRTtFQUNFLFdBQUE7QUFKSjs7QUF3QkE7RUFDSSxzQkFBQTtBQXJCSjs7QUE0QkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtBQTFCSjs7QUE2QkE7RUFFSSxZQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEzQko7O0FBNENBO0VBQ0k7SUFDSSxnQkFBQTtFQXpDTjtBQUNGOztBQTRDQTtFQUNJO0lBQ0ksZ0JBQUE7RUExQ047QUFDRjs7QUE2Q0U7RUFDRTtJQUNJLGdCQUFBO0VBM0NOO0FBQ0Y7O0FBOENBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBNUNOO0FBQ0Y7O0FBK0NBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBN0NOO0FBQ0Y7O0FBZ0RBO0VBQ0ksYUFBQTtBQTlDSjs7QUFpREE7RUFDSSxtQkFBQTtFQUFxQiwrQ0FBQTtBQTdDekI7O0FBZ0RBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTlDSjs7QUFpREE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUE5Q0oiLCJmaWxlIjoibmV3LXJvbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZPcHRpb24tYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Rvd25sb2Fke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuIHtcclxuICAvLyAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgd2lkdGg6IDQwcHg7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogODElO1xyXG4gIC8vICAgbWFyZ2luLXRvcDogLTE0JTtcclxuICAvLyAgIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgb3BhY2l0eTogMC43O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuOmhvdmVyIHtcclxuICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgLy8gfVxyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbi8vIC5uYXZPcHRpb25zIHAge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbi8vIH1cclxuXHJcbi5uYXZPcHRpb25zIHA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBkZWxheSAwLjMgc2Vjb25kcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXNcclxufVxyXG5cclxuLm5hdk9wdGlvbnMge1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyAuYnRue1xyXG4gICAgY29sb3I6ICNGQzc2NDM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM3NjQzO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIC5hY3RpdmUtbGlua3tcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZDNzY0MztcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6OmFmdGVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY3VzdG9tLWRpYWxvZy1QYXJ0eS1jbGFzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgaWNvbidzIHdpZHRoICovXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2T3B0aW9uLWJ0bnMgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_admin-new-module_admin-new-module_module_ts-es5.js.map