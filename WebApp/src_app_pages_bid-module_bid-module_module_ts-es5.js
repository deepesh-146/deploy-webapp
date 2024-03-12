(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_bid-module_bid-module_module_ts"], {
    /***/
    63929:
    /*!***************************************************************!*\
      !*** ./src/app/pages/bid-module/bid-module-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BidModuleRoutingModule": function BidModuleRoutingModule() {
          return (
            /* binding */
            _BidModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-bid-client/new-bid-client.component */
      62082);
      /* harmony import */


      var _new_bid_new_bid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-bid/new-bid.component */
      35471);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _new_bid_new_bid_component__WEBPACK_IMPORTED_MODULE_1__.NewBidComponent,
        children: [{
          path: '',
          redirectTo: 'bid_product',
          pathMatch: 'full'
        }, {
          path: "bid_product",
          component: _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_0__.NewBidClientComponent
        }]
      }];

      var _BidModuleRoutingModule = /*#__PURE__*/_createClass(function _BidModuleRoutingModule() {
        _classCallCheck(this, _BidModuleRoutingModule);
      });

      _BidModuleRoutingModule.ɵfac = function BidModuleRoutingModule_Factory(t) {
        return new (t || _BidModuleRoutingModule)();
      };

      _BidModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _BidModuleRoutingModule
      });
      _BidModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_BidModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    78753:
    /*!*******************************************************!*\
      !*** ./src/app/pages/bid-module/bid-module.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BidModuleModule": function BidModuleModule() {
          return (
            /* binding */
            _BidModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bid-module-routing.module */
      63929);
      /* harmony import */


      var _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-bid-client/new-bid-client.component */
      62082);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-add-bid-client/new-add-bid-client.component */
      86868);
      /* harmony import */


      var _new_bid_new_bid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./new-bid/new-bid.component */
      35471);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BidModuleModule = /*#__PURE__*/_createClass(function _BidModuleModule() {
        _classCallCheck(this, _BidModuleModule);
      });

      _BidModuleModule.ɵfac = function BidModuleModule_Factory(t) {
        return new (t || _BidModuleModule)();
      };

      _BidModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _BidModuleModule
      });
      _BidModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BidModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_BidModuleModule, {
          declarations: [_new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_1__.NewBidClientComponent, _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_3__.NewAddBidClientComponent, _new_bid_new_bid_component__WEBPACK_IMPORTED_MODULE_4__.NewBidComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BidModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    86868:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/bid-module/new-add-bid-client/new-add-bid-client.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewAddBidClientComponent": function NewAddBidClientComponent() {
          return (
            /* binding */
            _NewAddBidClientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/bidding.service */
      56889);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function NewAddBidClientComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewAddBidClientComponent_mat_option_24_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var option_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.selectedProduct(option_r8.itemName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r8.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", option_r8.coverImage ? option_r8.coverImage : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, option_r8.itemName), " ");
        }
      }

      function NewAddBidClientComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Product Name Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Selected Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.prodName);
        }
      }

      function NewAddBidClientComponent_mat_error_36_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seller Range Is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewAddBidClientComponent_mat_error_36_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.sellerRange.errors.required);
        }
      }

      function NewAddBidClientComponent_div_45_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delivery Charge Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function NewAddBidClientComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delivery Charge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NewAddBidClientComponent_div_45_mat_error_7_Template, 2, 0, "mat-error", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r5.f.deleveryCharge.invalid && ctx_r5.f.deleveryCharge.touched && ctx_r5.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r5.submitted || ctx_r5.f.deleveryCharge.touched) && (ctx_r5.f.deleveryCharge.errors == null ? null : ctx_r5.f.deleveryCharge.errors.required));
        }
      }

      function NewAddBidClientComponent_mat_error_54_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Expected Delivery Date Is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewAddBidClientComponent_mat_error_54_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.deliveryDate.errors.required);
        }
      }

      function NewAddBidClientComponent_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _NewAddBidClientComponent = /*#__PURE__*/function () {
        function _NewAddBidClientComponent(bidDetails, biddingService, commonService, formBuilder, productService, toastService, titleCasePipe, dialog, dialogRef) {
          _classCallCheck(this, _NewAddBidClientComponent);

          this.bidDetails = bidDetails;
          this.biddingService = biddingService;
          this.commonService = commonService;
          this.formBuilder = formBuilder;
          this.productService = productService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.submitted = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
          this.p = 1;
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.quotePriceForm = this.formBuilder.group({
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deliveryDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            sellerRange: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            prodName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            homeDelivery: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deleveryCharge: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
          });
        }

        _createClass(_NewAddBidClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllBiddings();
            this.getGoodsbyUser();
            this.todaysDate = new Date();
            console.log(this.bidDetails.wishlistId); // this.interval = setInterval(() => {
            //   this.getExpiryTime();
            // }, 1000)
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "showHomeDelevery",
          value: function showHomeDelevery(checked) {
            this.isHome = checked;
          }
        }, {
          key: "postClientQuotePrice",
          value: function postClientQuotePrice() {
            var _this = this;

            this.submitted = true;

            if (this.quotePriceForm.invalid) {
              // this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              this.toastService.toastMsg({
                title: "Error",
                content: "Fill All Required Fields."
              });
              return false;
            } else {
              var data = {
                "wishlistId": this.bidDetails.wishlistId,
                "userId": this.currentUser.id,
                "price": this.quotePriceForm.controls.sellerRange.value,
                "description": this.quotePriceForm.controls.description.value,
                "productId": this.prodId,
                "deliveryDate": this.todaysDate,
                "homeDelivery": this.quotePriceForm.controls.homeDelivery.value,
                "deliveryCharge": this.quotePriceForm.controls.deleveryCharge.value
              };
              this.biddingService.postClientQuotePrice(data).then(function (res) {
                _this.toastService.toastMsg({
                  title: "Success",
                  content: "Price Quoted Successfully!!!"
                }); // this.toastService.openSnackBar("Price Quoted Successfully!!!");


                _this.quotePriceForm.reset();

                _this.searchedProduct = [];

                _this.dialogRef.close();
              }, function (err) {
                // this.toastService.openErrorSnackBar("Please Try Again Later!!!");
                _this.toastService.toastMsg({
                  title: "Error",
                  content: "Please Try Again Later!!!"
                });
              });
            }
          }
        }, {
          key: "getAllBiddings",
          value: function getAllBiddings() {
            var _this2 = this;

            this.biddingService.getAllBiddings({}, this.currentUser.id).then(function (res) {
              // this.bidData = res.data.pageData;
              _this2.totalrow = res.data.totalrows;
              var bid = res.data.pageData;
              bid.forEach(function (element) {
                var createDate = new Date(element.createdAt).getTime();
                var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
                var todaysDate = new Date().getTime();
                _this2.difference = lastDate - todaysDate; // Time calculations for days, hours, minutes and seconds

                var days = Math.floor(_this2.difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor(_this2.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                var minutes = Math.floor(_this2.difference % (1000 * 60 * 60) / (1000 * 60));
                var seconds = Math.floor(_this2.difference % (1000 * 60) / 1000);
                _this2.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

                if (element.product) {
                  var data = {
                    itemName: element.product ? element.product.itemName : "-",
                    id: element.product ? element.product.id : "-",
                    publish: element.publish ? element.publish : "-",
                    description: element.product ? element.product.description : "-",
                    budgetMin: element.budgetMin ? element.budgetMin : "-",
                    budgetMax: element.budgetMax ? element.budgetMax : "-",
                    pincode: element.pincode ? element.pincode : "-",
                    location: element.location ? element.location : "-",
                    approxCompletedDate: element.approxCompletedDate ? element.approxCompletedDate : "-",
                    price: element.product ? element.product.salePrice : "-",
                    showTimeInterval: _this2.showTimeInterval ? _this2.showTimeInterval : "",
                    biddings: element.biddings ? element.biddings : "-",
                    createdAt: element.createdAt ? element.createdAt : "",
                    wishlistId: element.id,
                    coverPic: element.product ? element.product.coverImage : ""
                  };

                  _this2.bidData.push(data);
                } // If the count down is over, write some text 


                if (_this2.difference < 0) {
                  clearInterval(_this2.interval);
                  _this2.showTimeInterval = "EXPIRED";
                }
              });
            }, function (err) {
              if (err.error.expose) {
                _this2.toastService.openErrorSnackBar(_this2.titleCasePipe.transform(err.error.error_message));
              } else {
                _this2.toastService.toastMsg({
                  title: "Error",
                  content: "Something Went Wrong."
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.quotePriceForm.controls;
          }
        }, {
          key: "searchProduct",
          value: function searchProduct() {
            var _this3 = this;

            this.biddingService.getAllProductsByUserSearch({}, this.currentUser.id, this.myControl.value, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this3.toatlPages = res.data.totalPages;
              _this3.totalrow = res.data.totalRows;
              _this3.p = res.data.currentPage;
              _this3.searchedProduct = res.data.pageData;
              _this3.prodName = _this3.searchedProduct[0].itemName;
              _this3.prodId = _this3.searchedProduct[0].id, _this3.quotePriceForm.patchValue({
                prodName: _this3.prodName
              });
            });
          }
        }, {
          key: "selectedProduct",
          value: function selectedProduct(itemName) {
            var _this4 = this;

            this.biddingService.getAllProductsByUserSearch({}, this.currentUser.id, itemName, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this4.toatlPages = res.data.totalPages;
              _this4.totalrow = res.data.totalRows;
              _this4.p = res.data.currentPage;
              _this4.searchedProduct = res.data.pageData;
              _this4.prodName = res.data.pageData[0].itemName;
              _this4.prodId = res.data.pageData[0].id;

              _this4.quotePriceForm.patchValue({
                prodName: _this4.prodName
              });
            });
          }
        }, {
          key: "getGoodsbyUser",
          value: function getGoodsbyUser() {
            var _this5 = this;

            this.productService.getGoodsProductByUser_Type({}, this.currentUser.id, "goods", "DESC", this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this5.goodsData = res.data.pageData;
              _this5.filteredOptions = _this5.myControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (name) {
                return name ? _this5.filterNames(name) : _this5.goodsData.slice();
              }));
            }, function (err) {
              if (err.error.status == 404) {}
            });
          }
        }, {
          key: "filterNames",
          value: function filterNames(name) {
            return this.goodsData.filter(function (goods) {
              return goods.itemName.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }, {
          key: "openDatepicker",
          value: function openDatepicker() {
            // Check if the current value of taskdate is an "Invalid Date"
            var selectedDate = this.quotePriceForm.get('deliveryDate').value;

            if (isNaN(selectedDate.getTime())) {
              // Set a default date or any valid date here
              this.quotePriceForm.get('deliveryDate').setValue(new Date());
            }
          }
        }]);

        return _NewAddBidClientComponent;
      }();

      _NewAddBidClientComponent.ɵfac = function NewAddBidClientComponent_Factory(t) {
        return new (t || _NewAddBidClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_1__.BiddingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
      };

      _NewAddBidClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewAddBidClientComponent,
        selectors: [["app-new-add-bid-client"]],
        decls: 64,
        vars: 26,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "5px"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "ps-0"], [3, "formGroup"], [1, "py-4", "pb-0", "mb-2"], [1, "row"], [1, "col-12"], [1, "form-label"], [1, "error-asterisk"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "placeholder", "Product Name", "aria-label", "Select Product Name", "matInput", "", 3, "formControl", "matAutocomplete", "input"], ["matSuffix", "", 1, "m-2"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["matNativeControl", "", "type", "text", "required", "", "matInput", "", "ngxOnlyNumbers", "", "placeholder", "Seller Range", "formControlName", "sellerRange", "value", "", 3, "ngClass"], [1, "d-flex", "ps-2", 2, "font-size", "12px"], [1, "text-nowrap"], [1, "form-check", "form-switch"], ["id", "inlineCheckbox1", "type", "checkbox", "formControlName", "homeDelivery", 1, "form-check-input", "toggleB", "text-warning", 2, "margin-left", "3px!important", 3, "checked", "change"], ["class", "col-12", 4, "ngIf"], [1, "col-sm-12"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "formControlName", "deliveryDate", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "minDate", "ngModel", "bsConfig", "ngClass", "click", "ngModelChange"], ["matInput", "", "rows", "5", "required", "", "placeholder", "Description", "formControlName", "description", 3, "ngClass"], [3, "value", "onSelectionChange"], ["width", "50", "height", "50", "alt", "", 1, "img-circle", "m-1", "imageRound", 3, "src"], [1, "invalid-feedback"], [1, "text-capitalize", "fw-bold"], ["width", "50", "height", "50", "src", "../../../assets/img/products/2.jpg", "alt", "", 1, "img-circle", "m-1", "imageRound"], ["class", "error-font", 4, "ngIf"], [1, "error-font"], ["matNativeControl", "", "type", "number", "required", "", "matInput", "", "formControlName", "deleveryCharge", "placeholder", "Delivery Charge", "min", "0", "oninput", "this.value = Math.abs(this.value)", "value", "deleveryCharge", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
        template: function NewAddBidClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Accept Bid");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAddBidClientComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAddBidClientComponent_Template_button_click_6_listener() {
              return ctx.postClientQuotePrice();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Product Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function NewAddBidClientComponent_Template_input_input_19_listener() {
              return ctx.searchProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-autocomplete", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NewAddBidClientComponent_mat_option_24_Template, 5, 5, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NewAddBidClientComponent_mat_error_26_Template, 2, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, NewAddBidClientComponent_div_27_Template, 8, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Seller Range ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, NewAddBidClientComponent_mat_error_36_Template, 2, 1, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Home Delivery");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function NewAddBidClientComponent_Template_input_change_43_listener($event) {
              return ctx.showHomeDelevery($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, NewAddBidClientComponent_div_45_Template, 8, 4, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Expected Delivery Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAddBidClientComponent_Template_input_click_53_listener() {
              return ctx.openDatepicker();
            })("ngModelChange", function NewAddBidClientComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.todaysDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, NewAddBidClientComponent_mat_error_54_Template, 2, 1, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "textarea", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, NewAddBidClientComponent_mat_error_63_Template, 2, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.quotePriceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 17, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.myControl.touched) && ctx.myControl.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchedProduct);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.f.sellerRange.invalid && ctx.f.sellerRange.touched && ctx.f.sellerRange.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.sellerRange.touched) && ctx.f.sellerRange.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("minDate", ctx.todaysDate)("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.f.deliveryDate.invalid && ctx.f.deliveryDate.touched && ctx.f.deliveryDate.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.deliveryDate.invalid && ctx.f.deliveryDate.touched && ctx.f.deliveryDate.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, ctx.f.description.invalid && ctx.f.description.touched && ctx.f.description.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.description.touched) && ctx.f.description.pristine);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe],
        styles: [".form-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .addProductButtons[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hZGQtYmlkLWNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoibmV3LWFkZC1iaWQtY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    62082:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/bid-module/new-bid-client/new-bid-client.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBidClientComponent": function NewBidClientComponent() {
          return (
            /* binding */
            _NewBidClientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../new-add-bid-client/new-add-bid-client.component */
      86868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/bidding.service */
      56889);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function NewBidClientComponent_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "EXPIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function NewBidClientComponent_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h5", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Days : Hours : Mins : Secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.showTimeInterval);
        }
      }

      function NewBidClientComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NewBidClientComponent_div_1_div_6_Template, 4, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewBidClientComponent_div_1_div_8_Template, 6, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewBidClientComponent_div_1_Template_button_click_24_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.AddOpenDialog(item_r3.wishlistId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.difference < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r3.difference > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r3.coverPic, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Delivery code : ", item_r3.pincode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("City : ", item_r3.location, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Expected Delivery : ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 14, item_r3.approxCompletedDate, "dd MMM YYYY")), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Expected Range : (\u20B9", item_r3.budgetMin, " - \u20B9", item_r3.budgetMax, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", item_r3.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", item_r3.difference < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", item_r3.difference < 0);
        }
      }

      function NewBidClientComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "No Data Found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20, 30];
      };

      function NewBidClientComponent_mat_paginator_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function NewBidClientComponent_mat_paginator_3_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx_r2.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0))("length", ctx_r2.totalrow)("pageIndex", ctx_r2.currentPageNo);
        }
      }

      var _NewBidClientComponent = /*#__PURE__*/function () {
        function _NewBidClientComponent(biddingService, commonService, formBuilder, productService, toastService, titleCasePipe, dialog) {
          _classCallCheck(this, _NewBidClientComponent);

          this.biddingService = biddingService;
          this.commonService = commonService;
          this.formBuilder = formBuilder;
          this.productService = productService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.bidData = [];
          this.goodsData = [];
          this.searchedProduct = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
          this.p = 1;
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.pagesize = 1;
          this.count = 0;
          this.submitted = false;
          this.databid = [];
        }

        _createClass(_NewBidClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.getAllBiddings();
            this.todaysDate = new Date();
            this.interval = setInterval(function () {
              _this6.getExpiryTime();
            }, 1000);
          } // getAllBiddings() {
          //   this.biddingService.getAllBiddings({}, this.currentUser.id).then((res) => {
          //      //this.bidData = res.data.pageData;
          //     this.totalrow=res.data.totalrows;
          //     let bid = res.data.pageData;
          //     bid.forEach(element => {
          //       let createDate = new Date(element.createdAt).getTime();
          //       let lastDate = new Date(moment(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
          //       let todaysDate = new Date().getTime();
          //       this.difference = lastDate - todaysDate;
          //       // Time calculations for days, hours, minutes and seconds
          //       var days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
          //       var hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          //       var minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
          //       var seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
          //       this.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
          //       if(element.product){
          //         console.log("element.product",element.product)
          //         let data = {
          //           itemName: element.product ? element.product.itemName : "-",
          //           id:element.product ? element.product.id : "-",
          //           publish: element.publish ? element.publish : "-",
          //           description: element.product ? element.product.description : "-",
          //           budgetMin: element.budgetMin ? element.budgetMin :"-",
          //           budgetMax: element.budgetMax ? element.budgetMax : "-",
          //           pincode: element.pincode ? element.pincode :"-",
          //           location: element.location ? element.location : "-",
          //           approxCompletedDate: element.approxCompletedDate ? element.approxCompletedDate : "-",
          //           price: element.product ? element.product.salePrice : "-",
          //           showTimeInterval: this.showTimeInterval ? this.showTimeInterval : "",
          //           biddings: element.biddings ? element.biddings : "-",
          //           createdAt: element.createdAt ? element.createdAt : "",
          //           wishlistId: element.id,
          //          coverPic:element.product ? element.product.coverImage : "",
          //         }
          //         this.bidData.push(data);
          //       }
          //       // If the count down is over, write some text 
          //       if (this.difference < 0) {
          //         clearInterval(this.interval);
          //         this.showTimeInterval = "EXPIRED";
          //       }
          //     })
          //   },(err)=>{
          //     if(err.error.expose){
          //       this.toastService.openErrorSnackBar(this.titleCasePipe.transform(err.error.error_message));
          //     }
          //     else{
          //       this.toastService.openErrorSnackBar("Something Went Wrong.");
          //     }
          //   }
          //   )
          // }

        }, {
          key: "getAllBiddings",
          value: function getAllBiddings() {
            var _this7 = this;

            this.biddingService.getBiddings({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this7.bidData = [];
              _this7.totalrow = res.data.totalrows;
              _this7.databid = res.data.pageData;
              var bid = res.data.pageData;

              for (var i = 0; i < bid.length; i++) {
                var element = bid[i];
                var createDate = new Date(element.createdAt).getTime();
                var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
                var todaysDate = new Date().getTime();
                _this7.difference = lastDate - todaysDate;
                console.log("this.difference", _this7.difference); // Time calculations for days, hours, minutes, and seconds

                var days = Math.floor(_this7.difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor(_this7.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                var minutes = Math.floor(_this7.difference % (1000 * 60 * 60) / (1000 * 60));
                var seconds = Math.floor(_this7.difference % (1000 * 60) / 1000);
                _this7.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                console.log("this.showTimeInterval", _this7.showTimeInterval);

                if (element.product) {
                  console.log("element.product", i, element.product);
                  var data = {
                    itemName: element.product ? element.product.itemName : "-",
                    id: element.product ? element.product.id : "-",
                    publish: element.publish ? element.publish : "-",
                    description: element.product ? element.product.description : "-",
                    budgetMin: element.budgetMin ? element.budgetMin : "-",
                    budgetMax: element.budgetMax ? element.budgetMax : "-",
                    pincode: element.pincode ? element.pincode : "-",
                    location: element.location ? element.location : "-",
                    approxCompletedDate: element.approxCompletedDate ? element.approxCompletedDate : "-",
                    price: element.product ? element.product.salePrice : "-",
                    showTimeInterval: _this7.showTimeInterval ? _this7.showTimeInterval : "",
                    difference: _this7.difference,
                    biddings: element.biddings ? element.biddings : "-",
                    createdAt: element.createdAt ? element.createdAt : "",
                    wishlistId: element.id,
                    coverPic: element.product ? element.product.coverImage : ""
                  };

                  _this7.bidData.push(data);
                } // If the countdown is over, write some text 


                if (_this7.difference < 0) {
                  clearInterval(_this7.interval); //this.showTimeInterval = "EXPIRED";
                }
              }
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
                }); // this.toastService.openErrorSnackBar("Something Went Wrong.");

              }
            });
          }
        }, {
          key: "getExpiryTime",
          value: function getExpiryTime() {
            var _this8 = this;

            this.bidData.forEach(function (element) {
              var createDate = new Date(element.createdAt).getTime();
              var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
              var todaysDate = new Date().getTime();
              _this8.difference = lastDate - todaysDate; // Time calculations for days, hours, minutes and seconds

              var days = Math.floor(_this8.difference / (1000 * 60 * 60 * 24));
              var hours = Math.floor(_this8.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              var minutes = Math.floor(_this8.difference % (1000 * 60 * 60) / (1000 * 60));
              var seconds = Math.floor(_this8.difference % (1000 * 60) / 1000);
              _this8.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
              element.showTimeInterval = _this8.showTimeInterval;
            });

            if (this.difference < 0) {
              clearInterval(this.interval);
              this.showTimeInterval = "EXPIRED";
            }
          }
          /**
           * Filter customer name search
           * @param name
           * @returns
           */

        }, {
          key: "filterNames",
          value: function filterNames(name) {
            return this.goodsData.filter(function (goods) {
              return goods.itemName.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            console.log("e.pageIndex", e.pageIndex);
            this.currentPageNo = e.pageIndex;
            console.log("currentPageNo", this.currentPageNo);
            this.pagesize = e.pageSize;

            if (this.databid.length > 0) {
              this.partyPageSize = e.pageSize;
              this.getAllBiddings();
            }
          }
        }, {
          key: "AddOpenDialog",
          value: function AddOpenDialog(wishlistId) {
            var dialogRef = this.dialog.open(_new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_1__.NewAddBidClientComponent, {
              width: '50%',
              height: '100vh',
              data: {
                wishlistId: wishlistId
              },
              panelClass: 'custom-dialog-AddReject-class',
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

        return _NewBidClientComponent;
      }();

      _NewBidClientComponent.ɵfac = function NewBidClientComponent_Factory(t) {
        return new (t || _NewBidClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_2__.BiddingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
      };

      _NewBidClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _NewBidClientComponent,
        selectors: [["app-new-bid-client"]],
        decls: 4,
        vars: 3,
        consts: [[1, "container-fluid"], [4, "ngFor", "ngForOf"], ["class", "card-body p-0 overflow-hidden m-2 p-2", 4, "ngIf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], [1, "card"], [1, "card-head"], [1, "itemName"], [1, "card-body"], ["class", "d-grid", "style", "position: absolute; transform: rotate(-45deg);margin:10px ", 4, "ngIf"], [1, "card-image"], ["class", "intervalbutton", 4, "ngIf"], ["height", "150", "width", "200", "onerror", "this.src='../../../assets/img/products/2.jpg';", "alt", "Image", 1, "coverImage", 3, "src"], [1, "bid-content"], [1, "p-1", "content1"], [1, "p-1", "content2"], [1, "p-1", "content3"], [1, "p-1", "content4"], [1, "p-1", "content5", "text-warning"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-save", 2, "margin-right", "10px !important", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled"], [1, "d-grid", 2, "position", "absolute", "transform", "rotate(-45deg)", "margin", "10px"], [1, "btn", "btn-warning", "rounded-0", "diagonal-button"], [1, "text-white", "text-bold", "mb-0"], [1, "intervalbutton"], [1, "btn", "btn-warning"], [1, "timeInterval"], [1, "card-body", "p-0", "overflow-hidden", "m-2", "p-2"], [1, "text-center"], ["colspan", "10"], ["src", "assets/img/icons/spot-illustrations/GST No Transaction.png", "width", "124", "height", "142", "alt", "", 1, "image-responsive"], [1, "text-nowrap", "pt-2", 2, "font-weight", "600", "color", "#000000"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"]],
        template: function NewBidClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NewBidClientComponent_div_1_Template, 28, 17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NewBidClientComponent_div_2_Template, 6, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NewBidClientComponent_mat_paginator_3_Template, 1, 5, "mat-paginator", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bidData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bidData == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.databid == null ? null : ctx.databid.length) > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".card-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.custom-dialog-AddReject-class[_ngcontent-%COMP%] {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 16px 0px;\n}\n\n.card-head[_ngcontent-%COMP%] {\n  width: 350px;\n  text-align: center;\n}\n\n.itemName[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  font-family: \"Poppins\";\n  margin: 16px 0px;\n}\n\n.intervalbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42%;\n}\n\n.timeInterval[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 0px;\n  font-weight: 500;\n}\n\n.coverImage[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n}\n\n.bid-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 16px;\n}\n\n.content1[_ngcontent-%COMP%], .content2[_ngcontent-%COMP%], .content3[_ngcontent-%COMP%], .content4[_ngcontent-%COMP%], .content5[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1iaWQtY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUVBLHdCQUFBO0FBQ0Y7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkYiLCJmaWxlIjoibmV3LWJpZC1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY3VzdG9tLWRpYWxvZy1BZGRSZWplY3QtY2xhc3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gIC8vIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIE5ldyBTdHlsZVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDE2cHggMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbU5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgbWFyZ2luOiAxNnB4IDBweDtcclxufVxyXG5cclxuLmludGVydmFsYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MiU7XHJcbn1cclxuXHJcbi50aW1lSW50ZXJ2YWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvdmVySW1hZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmFkZFByb2R1Y3RCdXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vLyBBZnRlciBBbGlnbi1pdGVtcyAtPiBmbGV4LXN0YXJ0LCB0byBtYWtlIGV2ZXJ5IGxpbmUgYWxpZ25lZCwgZm9sbG93aW5nIGNvZGUgaXMgdXNlZC5cclxuXHJcbi5jb250ZW50MSwgLmNvbnRlbnQyLCAuY29udGVudDMsIC5jb250ZW50NCwgLmNvbnRlbnQ1IHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    35471:
    /*!***************************************************************!*\
      !*** ./src/app/pages/bid-module/new-bid/new-bid.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBidComponent": function NewBidComponent() {
          return (
            /* binding */
            _NewBidComponent
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

      var _NewBidComponent = /*#__PURE__*/function () {
        function _NewBidComponent() {
          _classCallCheck(this, _NewBidComponent);
        }

        _createClass(_NewBidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NewBidComponent;
      }();

      _NewBidComponent.ɵfac = function NewBidComponent_Factory(t) {
        return new (t || _NewBidComponent)();
      };

      _NewBidComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NewBidComponent,
        selectors: [["app-new-bid"]],
        decls: 11,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "px-3", "pt-3"], ["id", "navPanel", "id", "headingPrintHide", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./bid_product", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function NewBidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All Bid Product");

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
        styles: [".navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 40px !important;\n}\n\n#download[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.component-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.navOptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  font-size: 1.1em;\n  font-weight: bold !important;\n  transition-duration: 0.5s;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #FC7643;\n  border: 2px solid #FC7643;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  z-index: 1;\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n  }\n}\n\n@media (max-width: 992px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 18%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 28%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n    margin-top: -16%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 35%;\n    margin-top: -16%;\n  }\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1iaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUg1Qzs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFHRTtFQUNFLFdBQUE7QUFKSjs7QUF3QkE7RUFDSSxzQkFBQTtBQXJCSjs7QUE0QkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtBQTFCSjs7QUE2QkE7RUFFSSxZQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEzQko7O0FBNENBO0VBQ0k7SUFDSSxnQkFBQTtFQXpDTjtBQUNGOztBQTRDQTtFQUNJO0lBQ0ksZ0JBQUE7RUExQ047QUFDRjs7QUE2Q0U7RUFDRTtJQUNJLGdCQUFBO0VBM0NOO0FBQ0Y7O0FBOENBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBNUNOO0FBQ0Y7O0FBK0NBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBN0NOO0FBQ0Y7O0FBZ0RBO0VBQ0ksYUFBQTtBQTlDSjs7QUFpREE7RUFDSSxtQkFBQTtFQUFxQiwrQ0FBQTtBQTdDekI7O0FBZ0RBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTlDSjs7QUFpREE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUE5Q0oiLCJmaWxlIjoibmV3LWJpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZPcHRpb24tYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Rvd25sb2Fke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuIHtcclxuICAvLyAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgd2lkdGg6IDQwcHg7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogODElO1xyXG4gIC8vICAgbWFyZ2luLXRvcDogLTE0JTtcclxuICAvLyAgIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgb3BhY2l0eTogMC43O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuOmhvdmVyIHtcclxuICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgLy8gfVxyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbi8vIC5uYXZPcHRpb25zIHAge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbi8vIH1cclxuXHJcbi5uYXZPcHRpb25zIHA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBkZWxheSAwLjMgc2Vjb25kcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXNcclxufVxyXG5cclxuLm5hdk9wdGlvbnMge1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyAuYnRue1xyXG4gICAgY29sb3I6ICNGQzc2NDM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM3NjQzO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIC5hY3RpdmUtbGlua3tcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZDNzY0MztcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6OmFmdGVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY3VzdG9tLWRpYWxvZy1QYXJ0eS1jbGFzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgaWNvbidzIHdpZHRoICovXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2T3B0aW9uLWJ0bnMgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bid-module_bid-module_module_ts-es5.js.map