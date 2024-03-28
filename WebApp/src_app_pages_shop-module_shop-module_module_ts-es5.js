(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_shop-module_shop-module_module_ts"], {
    /***/
    21983:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-dashboard/shop-dashboard.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopDashboardComponent": function ShopDashboardComponent() {
          return (
            /* binding */
            _ShopDashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShopDashboardComponent = /*#__PURE__*/function () {
        function _ShopDashboardComponent() {
          _classCallCheck(this, _ShopDashboardComponent);
        }

        _createClass(_ShopDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ShopDashboardComponent;
      }();

      _ShopDashboardComponent.ɵfac = function ShopDashboardComponent_Factory(t) {
        return new (t || _ShopDashboardComponent)();
      };

      _ShopDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShopDashboardComponent,
        selectors: [["app-shop-dashboard"]],
        decls: 2,
        vars: 0,
        template: function ShopDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shop-dashboard works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    77014:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/shop-module/components/shop-layout/shop-layout.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopLayoutComponent": function ShopLayoutComponent() {
          return (
            /* binding */
            _ShopLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/directive/has-permission.directive */
      99700);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/auth.service */
      90263);
      /* harmony import */


      var src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/profile.service */
      44687);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/party.service */
      42109);
      /* harmony import */


      var src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/subscription.service */
      43525);
      /* harmony import */


      var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/notification.service */
      91645);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _c0 = ["searchInput"];

      function ShopLayoutComponent_a_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r2.categoryRouterLinks[category_r11]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](category_r11);
        }
      }

      function ShopLayoutComponent_a_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ShopLayoutComponent_a_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ShopLayoutComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No new notifications. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ShopLayoutComponent_div_73_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShopLayoutComponent_div_73_div_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r14.GoTOPages(ctx_r14.type);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\uD83D\uDCAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r13.msg, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r12.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", i_r13.timeAgo, " ");
        }
      }

      function ShopLayoutComponent_div_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ShopLayoutComponent_div_73_div_1_Template, 15, 4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.notificationReadArray);
        }
      }

      function ShopLayoutComponent_div_74_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShopLayoutComponent_div_74_div_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

            return ctx_r18.GoTOPages(ctx_r18.type);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\uD83D\uDCAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r17 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](i_r17.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", i_r17.msg, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r16.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", i_r17.timeAgo, " ");
        }
      }

      function ShopLayoutComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ShopLayoutComponent_div_74_div_1_Template, 15, 4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r7.notificationUnreadArray);
        }
      }

      function ShopLayoutComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "View all");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ShopLayoutComponent_a_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Profile & account");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function ShopLayoutComponent_a_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "show": a0
        };
      };

      var _ShopLayoutComponent = /*#__PURE__*/function () {
        function _ShopLayoutComponent(authService, renderer, el, profileService, dialog, router, partyService, subscriptionService, notificationService, rolePermission, toastService, titleCasePipe, commonService) {
          _classCallCheck(this, _ShopLayoutComponent);

          this.authService = authService;
          this.renderer = renderer;
          this.el = el;
          this.profileService = profileService;
          this.dialog = dialog;
          this.router = router;
          this.partyService = partyService;
          this.subscriptionService = subscriptionService;
          this.notificationService = notificationService;
          this.rolePermission = rolePermission;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.commonService = commonService;
          this.isFluid = JSON.parse(localStorage.getItem("isFluid"));
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.permissionArray = JSON.parse(localStorage.getItem("Permission"));
          this.notificationReadArray = [];
          this.notificationUnreadArray = [];
          this.isData = false;
          this.type = "Bidding";
          this.imageLoaded = false;
          this.imageSrc = '';
          this.isShow = false;
          this.currentPageNo = 0;
          this.pageSize = 100;
          this.directive = null;
          this.searchTerm = '';
          this.categories = ["Contacts", "Product", "Sale", "Purchase", "Promotions", "Bank", "Bid", "Shop Schedule", "Expense", "Campaign", "Admin", "Employee", "Payroll", "Time Sheet", "CRM", "GST Report", "Remote Shopping", "Ledger", "Contact Us", "Tickets", "Settings", "Help and FAQs", "Assets", "Books of Account", "Organization Structure"]; // uaeCategories: string[] = [
          //   "Contacts", "Product", "Sale", "Purchase", "Contact Us","Help and FAQs" ];

          this.filteredCategories = [];
          this.categoryRouterLinks = {
            "Contacts": "/pages/party-page",
            "Product": "/pages/new-product",
            "Sale": "/pages/sale_new",
            "Purchase": "/pages/purchase-page",
            "Promotions": "/pages/prmotions",
            "Bank": "/pages/Bank-page",
            "Bid": "/pages/Bid-page",
            "Shop Schedule": "/pages/shop-schedule-page",
            "Expense": "/pages/expense_page",
            "Campaign": "/pages/campaign-page",
            "Admin": "/pages/Admin-page",
            "Employee": "/pages/employee-page",
            "Payroll": "/pages/payroll-page",
            "Time Sheet": "/pages/time-sheet",
            "CRM": "/pages/crm",
            "GST Report": "/pages/reportgst",
            "Remote Shopping": "/pages/remote-shop-page",
            "Ledger": "pages/ledger-page/create-ledger",
            "Books of Account": "pages/books-of-account",
            "Assets": "pages/new-assets",
            "Organization Structure": "pages/organization-structure",
            "Contact Us": "/pages/Contact-page-new",
            "Tickets": "/pages/contactlist-page",
            "Settings": "/pages/settings",
            "Help and FAQs": "/pages/help-faq-page"
          };
        }

        _createClass(_ShopLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //call profile get api
            this.partyService.partyAdded$.subscribe(function () {
              // Fetch the updated list of users
              _this.getProfileData();
            });
            this.getPermissionById();
            this.getProfileData();
            this.getSubscribedUser();

            if (this.currentUser == null) {
              this.router.navigate(["/auth"]);
            } else {
              this.interval = setInterval(function () {
                _this.getExpirationTime();
              }, 1000);
            }

            this.getAllNotificationByUserId();
          }
        }, {
          key: "handleKeyboardEvent",
          value: function handleKeyboardEvent(event) {
            if (event.ctrlKey && event.key === '/') {
              event.preventDefault(); // Prevent the default browser behavior

              this.searchInput.nativeElement.focus();
            }
          }
        }, {
          key: "clickOutside",
          value: function clickOutside(event) {
            if (!this.searchInput.nativeElement.contains(event.target)) {
              // If clicked outside then the dropdown is get closed
              this.closeDropdown();
            }
          }
        }, {
          key: "getPermissionById",
          value: function getPermissionById() {
            var _this2 = this;

            if (this.currentUser != null) {
              this.rolePermission.getPermissions({}, this.currentUser.id).then(function (res) {
                _this2.permissionData = res.data;
                localStorage.setItem("Permission", JSON.stringify({
                  data: res.data,
                  id: res.id
                }));
              });
            }
          }
        }, {
          key: "getSubscribedUser",
          value: function getSubscribedUser() {
            if (this.currentUser != null && this.currentUser.userType == 'CLIENT') {
              this.subscriptionService.getSubscribedUsersDetails({}, this.currentUser.id).then(function (res) {});
            }
          }
        }, {
          key: "getExpirationTime",
          value: function getExpirationTime() {
            var planExpiration = new Date(this.currentUser.planExpiresOn).getTime();
            var currentDate = new Date().getTime();
            this.difference = planExpiration - currentDate; // Time calculations for days, hours, minutes and seconds

            var days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor(this.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(this.difference % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(this.difference % (1000 * 60) / 1000); // Output the result in an element with id="demo"

            this.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; // If the count down is over, write some text

            if (this.difference < 0) {
              clearInterval(this.interval);
              this.showTimeInterval = "EXPIRED";
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigateByUrl("/auth/login");
          }
          /**
           * get notification by userId
           */

        }, {
          key: "getAllNotificationByUserId",
          value: function getAllNotificationByUserId() {
            var _this3 = this;

            this.notificationService.getAllNotification({}, this.currentUser.id, this.pageSize, this.currentPageNo + 1).then(function (res) {
              _this3.isData = true;
              var notification = res.data.pageData;
              notification.forEach(function (element) {
                if (element.read == true) {
                  _this3.notificationReadArray.push(element);

                  _this3.isShow = false;
                  _this3.notificationUnreadArray = [];
                } else if (element.read === null) {
                  _this3.notificationUnreadArray.push(element);

                  _this3.isShow = true;
                  _this3.notificationReadArray = [];
                }
              });
            }, function (err) {
              if (err.error.expose) {
                _this3.isData = false;
              } else {
                _this3.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went To Wrong"
                });
              }
            });
          }
        }, {
          key: "getProfileData",
          value: function getProfileData() {
            var _this4 = this;

            this.profileService.getUserProfile({}, this.currentUser.id).then(function (res) {
              _this4.imageSrc = res.data.basicdetails.profileImage;
            });
          }
        }, {
          key: "handleImageLoad",
          value: function handleImageLoad() {
            this.imageLoaded = true;
          }
        }, {
          key: "GoTOPages",
          value: function GoTOPages(type) {
            if (type) {
              this.router.navigate(["/pages/client-bid"]);
            }
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            var _this5 = this;

            this.filteredCategories = this.categories.filter(function (category) {
              return category.toLowerCase().includes(_this5.searchTerm.toLowerCase());
            });
          }
        }, {
          key: "onEnter",
          value: function onEnter() {
            // If user entered a category then this function will get called
            if (this.filteredCategories.length > 0) {
              var firstCategory = this.filteredCategories[0];
              var routerLink = this.categoryRouterLinks[firstCategory];

              if (routerLink) {
                this.router.navigateByUrl(routerLink);
              }
            }

            this.closeDropdown(); //after the navigation is done dropdown get closed
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            this.filteredCategories = [];
            this.searchTerm = '';
          }
        }]);

        return _ShopLayoutComponent;
      }();

      _ShopLayoutComponent.ɵfac = function ShopLayoutComponent_Factory(t) {
        return new (t || _ShopLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_party_service__WEBPACK_IMPORTED_MODULE_3__.PartyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_subscription_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_6__.RolesPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_7__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService));
      };

      _ShopLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _ShopLayoutComponent,
        selectors: [["app-shop-layout"]],
        viewQuery: function ShopLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](src_app_directive_has_permission_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.directive = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        hostBindings: function ShopLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown", function ShopLayoutComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyboardEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("click", function ShopLayoutComponent_click_HostBindingHandler($event) {
              return ctx.clickOutside($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"]);
          }
        },
        decls: 93,
        vars: 18,
        consts: [["id", "top", 1, "main"], ["data-layout", "container-fluid", 1, ""], ["id", "sidebarPrint", 1, "navbar", "navbar-vertical", "navbar-expand-md"], [1, "row"], [1, "d-flex", "align-items-center", "hide22"], [1, "toggle-icon-wrapper", "d-flex", "align-items-center", "m-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "left", "title", "", "data-bs-original-title", "Toggle Navigation", "aria-label", "Toggle Navigation", 1, "btn", "navbar-toggler-humburger-icon", "navbar-vertical-toggle"], [1, "navbar-toggle-icon"], [1, "toggle-line"], ["id", "navbarVerticalCollapse", 1, "custom-li", "collapse", "navbar-collapse", "m-0", "p-0", 2, "background-color", "#110152", "overflow", "auto", "width", "100%"], [1, "navbar-vertical-content", "scrollbar", 2, "width", "auto"], ["id", "navbarVerticalNav", 1, "navbar-nav", "d-flex", "align-items-center", "flex-column", "mb-3"], ["routerLink", "/pages/shop-landing/dashboard", "routerLinkActive", "active", 1, "nav-item", "d-flex", "justify-content-center", "mb-2", "align-items-center"], ["role", "button", "aria-expanded", "true", "aria-controls", "dashboard", 1, "nav-link"], [1, "nav-link-icon"], ["src", "/assets/icons/dashboard-icons/Vector.png", 1, "bi-pie-chart", 2, "font-size", "1.1rem"], [1, "nav-link-text", "text-center", 2, "font-size", "16px"], ["routerLink", "/pages/shop-landing/product", "routerLinkActive", "active", 1, "nav-item", "d-flex", "justify-content-center", "mb-2", "align-items-center"], ["role", "button", "aria-expanded", "true", "aria-controls", "products", 1, "nav-link"], ["src", "/assets/icons/dashboard-icons/product.png", 1, "bi-pie-chart", 2, "font-size", "1.1rem"], ["routerLinkActive", "active", "routerLink", "/pages/shop-landing/sale", 1, "nav-item", "d-flex", "justify-content-center", "mb-2", "align-items-center"], ["role", "button", "aria-expanded", "true", "aria-controls", "sale", 1, "nav-link"], ["src", "/assets/icons/dashboard-icons/sale.png", 1, "bi-pie-chart", 2, "font-size", "1.1rem"], ["routerLinkActive", "active", "routerLink", "/pages/shop-landing/purchase", 1, "nav-item", "d-flex", "justify-content-center", "mb-2", "align-items-center"], ["role", "button", "aria-expanded", "true", "aria-controls", "purchase", 1, "nav-link"], ["src", "/assets/icons/dashboard-icons/purchase.png", 1, "bi-pie-chart", 2, "font-size", "1.1rem"], [1, "content", 2, "width", "auto", "margin-right", "0 !important", "padding-left", "10px", "padding-right", "10px"], ["id", "headNavPrint", 1, "navbar", "navbar-expand-md", "bg-white"], [1, "container-fluid"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarVerticalCollapse", "aria-controls", "navbarVerticalCollapse", "aria-expanded", "false", "aria-label", "Toggle Navigation", 1, "btn", "navbar-toggler-humburger-icon", "navbar-toggler", "me-1", "me-sm-3", "collapsed"], [1, "d-flex", "align-items-center", "py-3"], ["src", "assets/img/icons/spot-illustrations/test_logo.png", "alt", "", "alt", "iceipts logo", "width", "50", "height", "50", 1, "me-2"], [1, "search-form", 3, "ngSubmit"], ["insideElement", "", "searchInput", ""], ["type", "search", "name", "searchTerm", "placeholder", "Search Here...", 3, "ngModel", "ngModelChange", "input", "keyup.enter"], ["type", "submit", 3, "keyup.enter"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "dropdown", 3, "ngClass", "click"], [1, "dropbtn", "align-items-center"], [1, "dropdown-content"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "nav-list-items"], [1, "navbar-nav", "navbar-horizantal"], [1, "nav-item", "mx-4", "bellIcon"], [1, "col-4"], ["class", "nav-link notification-indicator notification-indicator-primary px-2 fa-icon-wait", "id", "navbarDropdownNotification", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["style", "color: var(--falcon-navbar-light-color)", "id", "navbarDropdownNotification", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "navbarDropdownNotification", 1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-card", "dropdown-menu-notification", "dropdown-caret-bg"], [1, "card", "card-notification", "shadow-none"], [1, "card-header"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto"], [1, "card-header-title", "mb-0"], [1, "col-auto", "ps-0", "ps-sm-3"], [1, "scrollbar-overlay", 2, "max-height", "19rem"], [1, "list-group", "list-group-flush", "fw-normal"], ["class", "notification-body list-group-title border-bottom text-center p-2", 4, "ngIf"], [4, "ngIf"], ["class", "card-footer text-center border-top", 4, "ngIf"], [1, "nav-item", "profilePic"], ["id", "navbarDropdownUser", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "p-0"], [1, "avatar", "avatar-xl"], [1, "rounded-circle", 3, "src"], ["aria-labelledby", "navbarDropdownUser", 1, "dropdown-menu", "dropdown-menu-end", "py-3", 2, "font-size", "13px !important", "min-width", "150px"], [1, "bg-white", "dark__bg-1000", "rounded-2", "py-2"], ["routerLink", "/auth/subscription", 1, "dropdown-item", "fw-bold", "text-warning"], [1, "fas", "fa-crown", "me-1"], [1, "dropdown-divider"], ["class", "dropdown-item", "routerLinkActive", "active", "routerLink", "/pages/shop-landing/shop-profile-setting/shop-profile", 4, "ngIf"], ["class", "dropdown-item", "routerLinkActive", "active", "routerLink", "/pages/shop-landing/shop-profile-setting", 4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [3, "routerLink"], ["id", "navbarDropdownNotification", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "notification-indicator", "notification-indicator-primary", "px-2", "fa-icon-wait"], ["data-fa-transform", "shrink-6", 1, "svg-inline--fa", "fa", "fa-bell", "fa-w-14", "fs-2"], ["id", "navbarDropdownNotification", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 2, "color", "var(--falcon-navbar-light-color)"], [1, "notification-body", "list-group-title", "border-bottom", "text-center", "p-2"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "notification", "notification-flush", "notification-unread", 3, "click"], [1, "notification-avatar"], [1, "avatar", "avatar-2xl", "me-3"], [1, "notification-body"], [1, "mb-1"], [1, "notification-time"], ["role", "img", "aria-label", "Emoji", 1, "me-2"], [1, "card-footer", "text-center", "border-top"], ["routerLink", "/pages/notifications", 1, "card-link", "d-block"], ["routerLinkActive", "active", "routerLink", "/pages/shop-landing/shop-profile-setting/shop-profile", 1, "dropdown-item"], ["routerLinkActive", "active", "routerLink", "/pages/shop-landing/shop-profile-setting", 1, "dropdown-item"]],
        template: function ShopLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "li", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "li", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "nav", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "form", 33, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ShopLayoutComponent_Template_form_ngSubmit_45_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ShopLayoutComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.searchTerm = $event;
            })("input", function ShopLayoutComponent_Template_input_input_48_listener() {
              return ctx.onSearch();
            })("keyup.enter", function ShopLayoutComponent_Template_input_keyup_enter_48_listener() {
              return ctx.onEnter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keyup.enter", function ShopLayoutComponent_Template_button_keyup_enter_49_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShopLayoutComponent_Template_div_click_51_listener() {
              return ctx.closeDropdown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Categories");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, ShopLayoutComponent_a_55_Template, 2, 2, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ShopLayoutComponent_a_60_Template, 2, 0, "a", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, ShopLayoutComponent_a_61_Template, 2, 0, "a", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "h4", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, ShopLayoutComponent_div_72_Template, 2, 0, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, ShopLayoutComponent_div_73_Template, 2, 1, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, ShopLayoutComponent_div_74_Template, 2, 1, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, ShopLayoutComponent_div_75_Template, 3, 0, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "a", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](83, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Go Pro");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, ShopLayoutComponent_a_87_Template, 2, 0, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](88, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, ShopLayoutComponent_a_89_Template, 2, 0, "a", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "a", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShopLayoutComponent_Template_a_click_90_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](92, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](16, _c1, ctx.filteredCategories.length > 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("display", ctx.filteredCategories.length > 0 ? "flex" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("display", ctx.filteredCategories.length > 0 ? "block" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.filteredCategories);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isData && !ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isData && ctx.isShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.imageSrc ? ctx.imageSrc : "/assets/images/default-profile-pic.JPG", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentUser.userType == "CLIENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentUser.userType == "CLIENT");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet],
        styles: [".navbar-vertical[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #2c7be5;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.navbar-vertical[_ngcontent-%COMP%] {\n  background-color: #110152;\n  max-width: auto;\n  min-width: 50px !important;\n}\n\n.notification-indicator[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  right: 0.125rem;\n  top: 0.1rem;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n}\n\n.notification-indicator-warning[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  right: -0.29rem;\n  top: 0.1rem;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n}\n\n.notification-indicator-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: -0.29rem;\n  top: 0.2rem;\n  height: 1rem;\n  width: 1rem;\n  font-size: 0.67rem;\n  color: #fff;\n  font-weight: 700;\n}\n\nimg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nav-link-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.nav-link-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px !important;\n}\n\n.custom-li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #FC7643;\n}\n\n.nav-item.active[_ngcontent-%COMP%] {\n  background-color: #FC7643;\n}\n\n.custom-li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.custom-outline[_ngcontent-%COMP%] {\n  background: #FC7643 !important;\n  border: #fc7643 !important;\n}\n\n.page-name[_ngcontent-%COMP%] {\n  min-width: 72px;\n}\n\n\n\n\n\n.nav-link-icon[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.custom-mat-select[_ngcontent-%COMP%]     .mat-select-arrow {\n  color: #A098AE;\n}\n\n.custom-mat-select[_ngcontent-%COMP%]     .mat-select-value-text {\n  color: #374557;\n}\n\n.custom-mat-select.mat-option[_ngcontent-%COMP%]:hover {\n  background-color: green;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-radius: 20px;\n  padding: 5px;\n  width: 300px;\n  position: relative;\n}\n\n.search-label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: none;\n  outline: none;\n}\n\n.matautocomplete[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top: none;\n  z-index: 9999;\n  padding: 10px;\n}\n\n.search-option[_ngcontent-%COMP%] {\n  background-color: white;\n  transition: background-color 0.3s ease;\n  display: block;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.search-option[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin-left: 10%;\n  height: 35px;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 8px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  margin-left: 8px;\n  cursor: pointer;\n}\n\n#navbarNav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-basis: 220px;\n}\n\n@media only screen and (max-width: 1024px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-vertical[_ngcontent-%COMP%] {\n    top: 0 !important;\n    background-color: transparent !important;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n  }\n\n  .hide22[_ngcontent-%COMP%] {\n    display: none !important;\n    background-color: transparent !important;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .navbar-horizantal[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row !important;\n    justify-content: space-around !important;\n    align-items: center;\n    white-space: nowrap;\n  }\n\n  .search-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .dropdown[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .reportButton[_ngcontent-%COMP%] {\n    margin-right: 0%;\n  }\n\n  .bellIcon[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .profilePic[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n}\n\n@media (min-width: 460px) and (max-width: 767px) {\n  .navbar-horizantal[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row !important;\n    justify-content: space-around !important;\n    align-items: center;\n    white-space: nowrap;\n    margin: auto;\n  }\n\n  .search-form[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    padding: 2px;\n    border: 1px solid currentColor;\n    border-radius: 5px;\n    margin-top: 20px;\n    margin-left: auto;\n  }\n\n  .dropdown[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n\n  .reportButton[_ngcontent-%COMP%] {\n    margin-right: 0%;\n  }\n\n  .bellIcon[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .profilePic[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n}\n\n@media (max-width: 460px) {\n  .search-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .dropdown[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .navbar-horizantal[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column !important;\n    align-items: center;\n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  color: white;\n  padding: 10px;\n  border: none;\n  cursor: pointer;\n  height: 35px;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  z-index: 1;\n}\n\n.dropdown-content.show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFHSSxhQUFBO0VBR0EsbUJBQUE7RUFHQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0ksV0FBQTtBQUhKOztBQVVBO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtBQVBKOztBQVVBLFVBQUE7O0FBTUEsVUFBQTs7QUF3QkE7RUFDSSxZQUFBO0FBbkNKOztBQTJDQTtFQUNJLGNBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksY0FBQTtBQXhDSjs7QUEyQ0E7RUFDSSx1QkFBQTtBQXhDSjs7QUEyQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXhDSjs7QUEyQ0E7RUFDSSxrQkFBQTtBQXhDSjs7QUEyQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF4Q0o7O0FBMkNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUF4Q0o7O0FBNENBO0VBQ0ksdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXpDSjs7QUE0Q0E7RUFDSSwyQkFBQTtBQXpDSjs7QUE2Q0E7RUFDSSxpQkFBQTtBQTFDSjs7QUErQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBN0NGOztBQWdEQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBN0NGOztBQWdEQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQTdDRjs7QUFnREE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBN0NGOztBQWdEQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSx3Q0FBQTtFQTdDTjs7RUFnREU7SUFDSSx3Q0FBQTtFQTdDTjs7RUErQ0U7SUFDSSx3QkFBQTtJQUNBLHdDQUFBO0VBNUNOOztFQThDRTtJQUNFLDZCQUFBO0VBM0NKO0FBQ0Y7O0FBc0hBO0VBRUU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSx3Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFySEY7O0VBd0hBO0lBQ0UsYUFBQTtFQXJIRjs7RUF3SEE7SUFDRSxrQkFBQTtFQXJIRjs7RUF3SEE7SUFDRSxnQkFBQTtFQXJIRjs7RUF3SEE7SUFDRSxZQUFBO0VBckhGOztFQXdIQTtJQUNFLGVBQUE7RUFySEY7QUFDRjs7QUEwSEE7RUFFRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUF6SEY7O0VBNEhBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFFQSxZQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUExSEY7O0VBNkhBO0lBQ0UsbUJBQUE7RUExSEY7O0VBNkhBO0lBQ0UsZ0JBQUE7RUExSEY7O0VBNkhBO0lBQ0UsWUFBQTtFQTFIRjs7RUE2SEE7SUFDRSxlQUFBO0VBMUhGO0FBQ0Y7O0FBa0pBO0VBRUU7SUFDRSxhQUFBO0VBakpGOztFQW9KQTtJQUNFLGtCQUFBO0VBakpGOztFQW9KQTtJQUNFLGFBQUE7SUFDQSxpQ0FBQTtJQUNBLG1CQUFBO0VBakpGOztFQW9KQTtJQUNFLGtCQUFBO0VBakpGO0FBQ0Y7O0FBK0pBO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsOEJBQUE7QUE5SkY7O0FBbUtBO0VBQ0UsV0FBQTtBQWhLRjs7QUErSkE7RUFDRSxXQUFBO0FBaEtGOztBQW9LQSwyQkFBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFsS0Y7O0FBc0tBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQW5LRjs7QUFzS0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBbktGOztBQXNLQTtFQUNFLGNBQUE7QUFuS0Y7O0FBc0tBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBbktGOztBQXNLQTtFQUNFLHlCQUFBO0FBbktGIiwiZmlsZSI6InNob3AtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci12ZXJ0aWNhbCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzJjN2JlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdmVydGljYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMDE1MjtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWluZGljYXRvcjo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcmlnaHQ6IDAuMTI1cmVtO1xyXG4gICAgdG9wOiAwLjFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taW5kaWNhdG9yLXdhcm5pbmc6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHJpZ2h0OiAtMC4yOXJlbTtcclxuXHJcbiAgICB0b3A6IDAuMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1pbmRpY2F0b3ItbnVtYmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTAuMjlyZW07XHJcbiAgICB0b3A6IDAuMjAwcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBmb250LXNpemU6IC42N3JlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uYXYtbGluay1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2LWxpbmstdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWxpIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQzc2NDM7XHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkM3NjQzO1xyXG59XHJcblxyXG4uY3VzdG9tLWxpIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuY3VzdG9tLWxpIGxpe1xyXG4vLyAgICAgcGFkZGluZzogMjBweCFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW46IDIwcHghaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jdXN0b20tb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkM3NjQzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNmYzc2NDMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtbmFtZSB7XHJcbiAgICBtaW4td2lkdGg6IDcycHg7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4vLyAgICAgLy8gICB3aWR0aDogMjBweDtcclxuLy8gICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gfVxyXG5cclxuLyogVHJhY2sgKi9cclxuLy8gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbi8vICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGJsYWNrO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLyogSGFuZGxlICovXHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuLy8gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4vLyB9XHJcblxyXG4vLyAubmF2YmFyLXZlcnRpY2FsIC5uYXZiYXItY29sbGFwc2Uge1xyXG4vLyAgICAgd2lkdGg6IDEyMCU7XHJcbi8vICAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMTEwMTUyO1xyXG4vLyB9XHJcblxyXG5cclxuLm5hdi1saW5rLWljb24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLy8gLm5hdmJhci12ZXJ0aWNhbC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItY29sbGFwc2Uge1xyXG4vLyAgICAgd2lkdGg6IDcwJTtcclxuLy8gfVxyXG5cclxuLmN1c3RvbS1tYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICBjb2xvcjogI0EwOThBRTtcclxufVxyXG5cclxuLmN1c3RvbS1tYXQtc2VsZWN0IDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMzc0NTU3O1xyXG59XHJcblxyXG4uY3VzdG9tLW1hdC1zZWxlY3QubWF0LW9wdGlvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXRhdXRvY29tcGxldGUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDI0cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLW9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtb3B0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4vLyBGb3IgbmV3IHNlYXJjaCBiYXIuXHJcblxyXG4uc2VhcmNoLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNuYXZiYXJOYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtYmFzaXM6IDIyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLm5hdmJhciAubmF2YmFyLXZlcnRpY2FsIHtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oaWRlMjJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblxyXG4vLyAgICNuYXZiYXJOYXYge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XHJcbi8vICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLm5hdmJhci1uYXYge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnNlYXJjaC1mb3JtIHtcclxuLy8gICAgIC8vIG1hcmdpbjogYXV0bztcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5yZXBvcnRCdXR0b24ge1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OjMwJTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5iZWxsSWNvbiB7XHJcbi8vICAgICBtYXJnaW46YXV0bztcclxuLy8gICB9XHJcblxyXG4vLyAgIC5wcm9maWxlUGljIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbi8vICAgI25hdmJhck5hdiB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxuLy8gICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgfVxyXG5cclxuLy8gICAubmF2YmFyLW5hdiB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuc2VhcmNoLWZvcm0ge1xyXG4vLyAgICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnJlcG9ydEJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6MzAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmJlbGxJY29uIHtcclxuLy8gICAgIG1hcmdpbjphdXRvO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnByb2ZpbGVQaWMge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4vLyAgIH1cclxuXHJcbi8vIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gIC5uYXZiYXItaG9yaXphbnRhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnJlcG9ydEJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MCU7XHJcbiAgfVxyXG5cclxuICAuYmVsbEljb24ge1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZVBpYyB7XHJcbiAgICBtYXJnaW4tbGVmdDowJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NDYwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAubmF2YmFyLWhvcml6YW50YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIHZpc2liaWxpdHk6dmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC5yZXBvcnRCdXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjAlO1xyXG4gIH1cclxuXHJcbiAgLmJlbGxJY29uIHtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGVQaWMge1xyXG4gICAgbWFyZ2luLWxlZnQ6MCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4vLyAgIC5zZWFyY2gtZm9ybSB7XHJcbi8vICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLnJlcG9ydEJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6MCU7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuYmVsbEljb24ge1xyXG4vLyAgICAgbWFyZ2luOmF1dG87XHJcbi8vICAgfVxyXG5cclxuLy8gICAucHJvZmlsZVBpYyB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDowJTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuXHJcbiAgLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1ob3JpemFudGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyAuZm9ybS1jb250cm9sIHtcclxuLy8gICBjb2xvcjogIzU1NTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIHBhZGRpbmc6IDJweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbi8vICAgd2lkdGg6IDI1JTtcclxuLy8gfVxyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBjbGFzcz0nYmkgYmktc2VhcmNoJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNFJTNDcGF0aCBkPSdNMTEuNzQyIDEwLjM0NGE2LjUgNi41IDAgMSAwLTEuMzk3IDEuMzk4aC0uMDAxYy4wMy4wNC4wNjIuMDc4LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEuMDA3IDEuMDA3IDAgMCAwLS4xMTUtLjF6TTEyIDYuNWE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xyXG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb24teDogY2FsYygxMDAlICsgMjBweCk7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNiYmI7XHJcbn1cclxuXHJcblxyXG4vKiBEcm9wZG93biBpbiBzZWFyY2ggYm94ICovXHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLy8gdHJhbnNmb3JtIDogdHJhbnNsYXRlWCgxMHB4KTtcclxufVxyXG5cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50LnNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    85758:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/shop-module/shop-module-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopModuleRoutingModule": function ShopModuleRoutingModule() {
          return (
            /* binding */
            _ShopModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_shop_dashboard_shop_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/shop-dashboard/shop-dashboard.component */
      21983);
      /* harmony import */


      var _components_shop_layout_shop_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/shop-layout/shop-layout.component */
      77014);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _components_shop_layout_shop_layout_component__WEBPACK_IMPORTED_MODULE_1__.ShopLayoutComponent,
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          component: _components_shop_dashboard_shop_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.ShopDashboardComponent
        }, {
          path: "product",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_Product_product_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../Product/product.module */
            57721)).then(function (m) {
              return m.ProductModule;
            });
          }
        }, {
          path: "sale",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_Invoice_sale_sale_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../Invoice/sale/sale.module */
            14515)).then(function (m) {
              return m.SaleModule;
            });
          }
        }, {
          path: "purchase",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_purchase_purchase_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../purchase/purchase.module */
            14928)).then(function (m) {
              return m.PurchaseModule;
            });
          }
        }, {
          path: "shop-profile-setting",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_shop-module_components_shop-settings_shop-settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../shop-module/components/shop-settings/shop-settings.module */
            6795)).then(function (m) {
              return m.ShopSettingsModule;
            });
          }
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _ShopModuleRoutingModule = /*#__PURE__*/_createClass(function _ShopModuleRoutingModule() {
        _classCallCheck(this, _ShopModuleRoutingModule);
      });

      _ShopModuleRoutingModule.ɵfac = function ShopModuleRoutingModule_Factory(t) {
        return new (t || _ShopModuleRoutingModule)();
      };

      _ShopModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ShopModuleRoutingModule
      });
      _ShopModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ShopModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    72721:
    /*!************************************************************!*\
      !*** ./src/app/pages/shop-module/shop-module.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopModuleComponent": function ShopModuleComponent() {
          return (
            /* binding */
            _ShopModuleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShopModuleComponent = /*#__PURE__*/function () {
        function _ShopModuleComponent() {
          _classCallCheck(this, _ShopModuleComponent);
        }

        _createClass(_ShopModuleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ShopModuleComponent;
      }();

      _ShopModuleComponent.ɵfac = function ShopModuleComponent_Factory(t) {
        return new (t || _ShopModuleComponent)();
      };

      _ShopModuleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShopModuleComponent,
        selectors: [["app-shop-module"]],
        decls: 2,
        vars: 0,
        template: function ShopModuleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shop-module works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLW1vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    10131:
    /*!*********************************************************!*\
      !*** ./src/app/pages/shop-module/shop-module.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShopModuleModule": function ShopModuleModule() {
          return (
            /* binding */
            _ShopModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shop_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shop-module-routing.module */
      85758);
      /* harmony import */


      var _shop_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shop-module.component */
      72721);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      40950);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _components_shop_layout_shop_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/shop-layout/shop-layout.component */
      77014);
      /* harmony import */


      var _components_shop_dashboard_shop_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/shop-dashboard/shop-dashboard.component */
      21983);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShopModuleModule = /*#__PURE__*/_createClass(function _ShopModuleModule() {
        _classCallCheck(this, _ShopModuleModule);
      });

      _ShopModuleModule.ɵfac = function ShopModuleModule_Factory(t) {
        return new (t || _ShopModuleModule)();
      };

      _ShopModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _ShopModuleModule
      });
      _ShopModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shop_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopModuleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_ShopModuleModule, {
          declarations: [_shop_module_component__WEBPACK_IMPORTED_MODULE_1__.ShopModuleComponent, _components_shop_layout_shop_layout_component__WEBPACK_IMPORTED_MODULE_4__.ShopLayoutComponent, _components_shop_dashboard_shop_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.ShopDashboardComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _shop_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopModuleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__.BsDatepickerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_shop-module_shop-module_module_ts-es5.js.map