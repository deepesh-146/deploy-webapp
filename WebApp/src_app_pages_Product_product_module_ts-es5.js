(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_Product_product_module_ts"], {
    /***/
    17946:
    /*!*********************************************************!*\
      !*** ./src/app/pages/Product/product-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductRoutingModule": function ProductRoutingModule() {
          return (
            /* binding */
            _ProductRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-list/product-list.component */
      7185);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _servicelist_servicelist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./servicelist/servicelist.component */
      63654);
      /* harmony import */


      var _offer_list_offer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./offer-list/offer-list.component */
      61527);
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product.component */
      30021);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _request_order_list_request_order_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./request-order-list/request-order-list.component */
      14731);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent,
        children: [{
          path: '',
          redirectTo: 'product-list',
          pathMatch: 'full'
        }, {
          path: 'product-list',
          component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent
        }, {
          path: 'service-list',
          component: _servicelist_servicelist_component__WEBPACK_IMPORTED_MODULE_1__.ServicelistComponent
        }, {
          path: 'offer-list',
          component: _offer_list_offer_list_component__WEBPACK_IMPORTED_MODULE_2__.OfferListComponent
        }, {
          path: 'request-order-list',
          component: _request_order_list_request_order_list_component__WEBPACK_IMPORTED_MODULE_4__.RequestOrderListComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _ProductRoutingModule = /*#__PURE__*/_createClass(function _ProductRoutingModule() {
        _classCallCheck(this, _ProductRoutingModule);
      });

      _ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
        return new (t || _ProductRoutingModule)();
      };

      _ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ProductRoutingModule
      });
      _ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerModule.forRoot()], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    30021:
    /*!****************************************************!*\
      !*** ./src/app/pages/Product/product.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductComponent": function ProductComponent() {
          return (
            /* binding */
            _ProductComponent
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ProductComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Request Order List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _ProductComponent = /*#__PURE__*/function () {
        function _ProductComponent() {
          _classCallCheck(this, _ProductComponent);

          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProductComponent;
      }();

      _ProductComponent.ɵfac = function ProductComponent_Factory(t) {
        return new (t || _ProductComponent)();
      };

      _ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ProductComponent,
        selectors: [["app-product"]],
        decls: 15,
        vars: 1,
        consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./product-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./service-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], ["class", "links col-xxl-1 col-xl-1 col-lg-2 col-md-3 col-sm-4 col-xs-4", 4, "ngIf"], [1, "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-3", "col-sm-0", "col-xs-0"], [1, "mt-1"], ["routerLink", "./request-order-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"]],
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Service List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductComponent_div_10_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.userType === "WAREHOUSE");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["@media screen and (max-width: 575px) {\n  .links[_ngcontent-%COMP%] {\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNFO0VBRUU7SUFDRSxrQkFBQTtFQW5DSjtBQUNGIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4gIC8vIC5wcm9kdWN0TGluayBhOmhvdmVye1xyXG4gIC8vICAgICAvL2JvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRkM3NjQzO1xyXG4gIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzXHJcblxyXG4gIC8vIH1cclxuXHJcbiAgLy8gLnByb2R1Y3RMaW5rICNwcm9kdWN0bGlzdExpbms6aG92ZXJ7XHJcbiAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyB9XHJcblxyXG4vLyAgIC5saW5rc3tcclxuLy8gICAgIHdpZHRoOmF1dG87XHJcbi8vIH1cclxuXHJcbi8vICAgYXtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGNvbG9yOmJsYWNrO1xyXG4vLyAgIH1cclxuXHJcbi8vICAuYWN0aXZlIHtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNGQzc2NDM7XHJcblxyXG4vLyAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4vLyAgIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzVweCkge1xyXG5cclxuICAgIC5saW5rcyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    57721:
    /*!*************************************************!*\
      !*** ./src/app/pages/Product/product.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductModule": function ProductModule() {
          return (
            /* binding */
            _ProductModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-routing.module */
      17946);
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.component */
      30021);
      /* harmony import */


      var _productlist_view_productlist_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./productlist-view/productlist-view.component */
      75181);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _servicelist_view_servicelist_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servicelist-view/servicelist-view.component */
      61470);
      /* harmony import */


      var _offerlist_view_offerlist_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./offerlist-view/offerlist-view.component */
      14067);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _clone_service_clone_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./clone-service/clone-service.component */
      90054);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _request_order_list_request_order_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./request-order-list/request-order-list.component */
      14731);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      63737);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _request_order_list_components_view_request_order_view_request_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./request-order-list/components/view-request-order/view-request-order.component */
      35273);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316); // import { MaterialExampleModule } from 'src/app/material.module';
      // import { MatDatepickerModule } from '@angular/material/datepicker';
      // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
      // import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


      var _ProductModule = /*#__PURE__*/_createClass(function _ProductModule() {
        _classCallCheck(this, _ProductModule);
      });

      _ProductModule.ɵfac = function ProductModule_Factory(t) {
        return new (t || _ProductModule)();
      };

      _ProductModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _ProductModule
      });
      _ProductModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__.BsDatepickerModule.forRoot(), _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_ProductModule, {
          declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent, _productlist_view_productlist_view_component__WEBPACK_IMPORTED_MODULE_2__.ProductlistViewComponent, _servicelist_view_servicelist_view_component__WEBPACK_IMPORTED_MODULE_3__.ServicelistViewComponent, _offerlist_view_offerlist_view_component__WEBPACK_IMPORTED_MODULE_4__.OfferlistViewComponent, _request_order_list_request_order_list_component__WEBPACK_IMPORTED_MODULE_7__.RequestOrderListComponent, _request_order_list_components_view_request_order_view_request_order_component__WEBPACK_IMPORTED_MODULE_8__.ViewRequestOrderComponent, _clone_service_clone_service_component__WEBPACK_IMPORTED_MODULE_6__.CloneServiceComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialExampleModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__.MatMomentDateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__.BsDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    35273:
    /*!****************************************************************************************************************!*\
      !*** ./src/app/pages/Product/request-order-list/components/view-request-order/view-request-order.component.ts ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewRequestOrderComponent": function ViewRequestOrderComponent() {
          return (
            /* binding */
            _ViewRequestOrderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/assets/langTranslation/language_translation */
      21283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/warehouse.service */
      78381);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ViewRequestOrderComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Order No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.orderNo);
        }
      }

      function ViewRequestOrderComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Requester");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.requesterData.firstName);
        }
      }

      function ViewRequestOrderComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r4 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.barcode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, item_r3.product.itemName));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.quantity, " ");
        }
      }

      var _ViewRequestOrderComponent = /*#__PURE__*/function () {
        function _ViewRequestOrderComponent(dialogRef, data, warehouseService, commonService, titleCasePipe) {
          _classCallCheck(this, _ViewRequestOrderComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.warehouseService = warehouseService;
          this.commonService = commonService;
          this.titleCasePipe = titleCasePipe;
          this.lang = src_assets_langTranslation_language_translation__WEBPACK_IMPORTED_MODULE_0__["default"].UAE;
        }

        _createClass(_ViewRequestOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.requestId = this.data.requestId;
            this.getPartyDetails();
          }
        }, {
          key: "getPartyDetails",
          value: function getPartyDetails() {
            var _this = this;

            this.warehouseService.getStockTransferById({}, this.requestId).then(function (res) {
              _this.orderNo = res.data.record.orderNo;
              _this.requesterData = res.data.requesterData; // this.transferproducts = res.data.record.transferproducts

              _this.sales_products = res.data.record.transferproducts; // this.partyName = party.data.a.partyName
              // this.mobile = party.data.a.mobile
              // this.email = party.data.a.email
              // this.billingAddress = party.data.a.billingAddress
              // this.shippingAddress = party.data.a.shippingAddress
              // this.openingBalance = party.data.a.openingBalance
              // this.asOfDate = party.data.a.asOfDate
              // this.balanceStatus = party.data.a.balanceStatus
              // this.relationSince = party.data.a.relationSince
              // this.payment = party.data.a.payment
              // this.creditPeriodDay = party.data.a.creditPeriodDay
              // this.creditLimit = party.data.a.creditLimit
              // this.UpdatedCreditLimit = party.data.a.UpdatedCreditLimit
              // this.noOfCredits = party.data.a.noOfCredits
              // this.creditCount = party.data.a.creditCount
              // this.distance = party.data.a.distance
              // this.isCustomer = party.data.a.isCustomer
              // this.totalDebt = party.data.a.totalDebt
              // this.totalCredit = party.data.totalCredit
              // this.address = party.data.a.address
              // this.pincode = party.data.a.pincode
              // this.homeno = party.data.a.homeno
              // this.city = party.data.a.city
              // this.district = party.data.a.district
              // this.landmark = party.data.a.landmark
              // this.state = party.data.a.state
              // this.country = party.data.a.country
              // this.groupNames = party.data.group.map((item) => item.groupName);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return _ViewRequestOrderComponent;
      }();

      _ViewRequestOrderComponent.ɵfac = function ViewRequestOrderComponent_Factory(t) {
        return new (t || _ViewRequestOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe));
      };

      _ViewRequestOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ViewRequestOrderComponent,
        selectors: [["app-view-request-order"]],
        decls: 28,
        vars: 3,
        consts: [[1, "modal-header", "row"], [1, "col-sm-6"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder", "margin-left", "6px"], [1, "col-sm-2"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-4"], [1, "row"], [1, "col-sm-12", "col-lg-6", "col-md-6"], ["class", "mb-3", 4, "ngIf"], [1, "table-responsive", "my-custom-scrollbar", "mb-3"], [1, "table", "bg-white", "table-bordered", "table-stripped"], [1, "table", "inner-model-table-heading"], [1, "font_size", "font-weight-bold"], ["scope", "col", 2, "width", "7%"], ["scope", "col", 2, "width", "10%"], ["scope", "col", 1, "text-nowrap"], [1, "mod"], [4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "example-full-width", "form-label"], [2, "vertical-align", "middle"], [2, "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center"]],
        template: function ViewRequestOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Requested Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewRequestOrderComponent_Template_button_click_6_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ViewRequestOrderComponent_div_12_Template, 6, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ViewRequestOrderComponent_div_14_Template, 6, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "SKU");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "SKU Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ViewRequestOrderComponent_ng_container_27_Template, 11, 6, "ng-container", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.requesterData == null ? null : ctx.requesterData.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sales_products);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcXVlc3Qtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    14731:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/Product/request-order-list/request-order-list.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RequestOrderListComponent": function RequestOrderListComponent() {
          return (
            /* binding */
            _RequestOrderListComponent
          );
        }
        /* harmony export */

      });
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


      var _components_view_request_order_view_request_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/view-request-order/view-request-order.component */
      35273);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/warehouse.service */
      78381);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _c0 = ["dropdown"];

      function RequestOrderListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_span_14_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_span_14_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r21.upiCheckedId.length > 0 ? ctx_r21.getUPIcheckId(ctx_r21.upiCheckedId) : ctx_r21.getSingleCheckedId(ctx_r21.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "archive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_span_14_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestOrderListComponent_span_14_button_1_span_1_Template, 2, 0, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r19.checkSingleArray.length > 0 || ctx_r19.isChecked);
        }
      }

      function RequestOrderListComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestOrderListComponent_span_14_button_1_Template, 2, 1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.checkSingleArray.length > 0 || ctx_r1.isChecked);
        }
      }

      function RequestOrderListComponent_span_15_button_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_span_15_button_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r25.upiCheckedId.length > 0 ? ctx_r25.getUPIcheckId(ctx_r25.upiCheckedId) : ctx_r25.getSingleCheckedId(ctx_r25.checkSingleArray);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "unarchive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_span_15_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestOrderListComponent_span_15_button_1_span_1_Template, 2, 0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r23.checkSingleArray.length > 0 || ctx_r23.isChecked);
        }
      }

      function RequestOrderListComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestOrderListComponent_span_15_button_1_Template, 2, 1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.checkSingleArray.length > 0 || ctx_r2.isChecked);
        }
      }

      var _c1 = function _c1() {
        return {
          "gst-status-tickmark": true
        };
      };

      function RequestOrderListComponent_ng_container_27_tr_1_mat_icon_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_ng_container_27_tr_1_mat_icon_17_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

            var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r32.getAcceptOrReject(item_r27.record.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u2713 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return {
          "gst-status-cross": true
        };
      };

      function RequestOrderListComponent_ng_container_27_tr_1_mat_icon_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_ng_container_27_tr_1_mat_icon_18_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r35.getAcceptOrReject(item_r27.record.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u2717 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c2));
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "background-color": a0
        };
      };

      var _c4 = function _c4(a0, a1) {
        return {
          "custom-checkbox": a0,
          "custom-checkbox deleted": a1
        };
      };

      var _c5 = function _c5(a0, a1, a2) {
        return {
          "gst-status-accepted": a0,
          "gst-status-rejected": a1,
          "gst-status-pending": a2
        };
      };

      function RequestOrderListComponent_ng_container_27_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RequestOrderListComponent_ng_container_27_tr_1_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);

            var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r38.onChekedsingleCheck($event, item_r27.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, RequestOrderListComponent_ng_container_27_tr_1_mat_icon_17_Template, 2, 2, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RequestOrderListComponent_ng_container_27_tr_1_mat_icon_18_Template, 2, 2, "mat-icon", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_ng_container_27_tr_1_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);

            var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r41.viewRequest(item_r27.record.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var item_r27 = ctx_r43.$implicit;
          var i_r28 = ctx_r43.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c3, item_r27.isDeleted ? "#c7c2de" : i_r28 % 2 === 0 ? "#ffffff" : "#f2f2f2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c4, !item_r27.isDeleted, item_r27.isDeleted))("checked", ctx_r29.shippingIdList.includes(item_r27.id))("value", item_r27.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 15, item_r27.record == null ? null : item_r27.record.date, "dd MMM YYYY")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27.requesterData == null ? null : item_r27.requesterData.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27 == null ? null : item_r27.location, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27.record == null ? null : item_r27.record.quantity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](23, _c5, (item_r27.record == null ? null : item_r27.record.status) === "ACCEPTED", (item_r27.record == null ? null : item_r27.record.status) === "REJECTED", (item_r27.record == null ? null : item_r27.record.status) === "PENDING"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r27.record == null ? null : item_r27.record.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r27.record.status === "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r27.record.status === "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", item_r27.isDeleted === true);
        }
      }

      function RequestOrderListComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, RequestOrderListComponent_ng_container_27_tr_1_Template, 21, 27, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.selectedTypeFilter === null || item_r27.type === ctx_r3.selectedTypeFilter);
        }
      }

      function RequestOrderListComponent_tbody_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are you sure to unarchive all Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are you sure to unarchive all selected Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_44_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r44.unArchiveMultipleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Unarchive");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_45_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r46.unArchiveMultipleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Unarchive");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are you sure to archive all Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are you sure to archive all selected Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_61_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r48.archiveMultipleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_62_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r50.archiveMultipleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Archive");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h2_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Archive Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h2_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Unarchive Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are You Sure To Archive Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_h4_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Are You Sure To Unarchive Shipping List? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_77_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r52.archiveSignleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Archive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function RequestOrderListComponent_a_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_a_78_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r54.archiveSignleShippingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Unarchive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _RequestOrderListComponent = /*#__PURE__*/function () {
        function _RequestOrderListComponent(router, dialog, commonService, route, warehouseService, toastService, titleCasePipe) {
          _classCallCheck(this, _RequestOrderListComponent);

          this.router = router;
          this.dialog = dialog;
          this.commonService = commonService;
          this.route = route;
          this.warehouseService = warehouseService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.shippingList = [];
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.pagesize = 1;
          this.count = 0;
          this.shippingIdList = [];
          this.selectedIdList = [];
          this.archiveIconfalse = false;
          this.checkSingleArray = [];
          this.isChecked = false;
          this.upiCheckedId = [];
          this.upiCheckedId1 = [];
          this.allSelect = false;
          this.checkSelect = false;
          this.checkSelectsingle = false;
          this.checkSelectsinglefalse = false;
          this.checkSelectsingletrue = false;
          this.selectedTypeFilter = null;
        }

        _createClass(_RequestOrderListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getAllStockTransfer();
            this.commonService.rowAdded$.subscribe(function () {
              // Fetch the updated list of users
              _this2.getAllStockTransfer();
            });
            this.searchSubscription = this.searchSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(800), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(function () {
              _this2.isLoading = true; // Show the loader when the API call is initiated
            })).subscribe(function (searchKey) {
              // Call the API with the search key
              if (searchKey.length >= 3) {
                _this2.searchKey = searchKey;

                _this2.searchShippingList(searchKey.trim());
              } else if (searchKey === '') {
                _this2.isLoading = false; // Hide the loader if the search key is less than the threshold

                _this2.getAllStockTransfer();
              } else {
                _this2.isLoading = false; // Hide the loader if the search key is less than the threshold
              }
            });
          }
        }, {
          key: "getAllStockTransfer",
          value: function getAllStockTransfer(searchKey) {
            var _this3 = this;

            this.warehouseService.getAllStockTransfer({
              data: {},
              status: '',
              requesterId: '',
              senderId: this.currentUser.id
            }).then(function (res) {
              if (res.success) {
                _this3.shippingList = res.data; // this.currentPageNo = res.data.currentPage;
                // this.totalrow = res.data.totalrows;
                // this.totalPages = res.data.totalPages
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
          key: "archhiveShippingList",
          value: function archhiveShippingList(warehouseId, isdeleted) {
            this.warehouseId = warehouseId;
            this.isdeletedParty = isdeleted;
            this.selectedIdList.push(warehouseId);
          }
        }, {
          key: "archiveSignleShippingList",
          value: function archiveSignleShippingList() {// if (this.isdeletedParty) {
            //   this.warehouseService.unArchiveMultiplewarehouses({data: { unArchivewarehouses: this.selectedIdList }, userId: this.currentUser.id}).then((res: any) => {
            //     if (res.success) {
            //       this.toastService.toastMsg({
            //         title: 'Success',
            //         content: "warehouse Unarchived Successfully!!!"
            //       });
            //       this.getAllWarehouse();
            //     }
            //   })
            // }
            // else {
            //   this.warehouseService.deleteMultiplewarehouses({data: { archivewarehouses: this.selectedIdList }, userId: this.currentUser.id}).then((res: any) => {
            //     if (res.success) {
            //       this.toastService.toastMsg({
            //         title: 'Success',
            //         content: "ShippingList Archived Successfully!!!"
            //       });
            //       this.getAllStockTransfer();
            //     }
            //   })
            // }
          }
        }, {
          key: "onChekedsingleCheck",
          value: function onChekedsingleCheck(e, partyId) {
            var _this4 = this;

            if (e.target.checked) {
              this.shippingIdList.push(partyId);
              this.checkSingleArray.push(e.target.value);
            } else {
              var index = this.shippingIdList.indexOf(partyId);

              if (index !== -1) {
                this.shippingIdList.splice(index, 1);
                this.checkSingleArray.splice(index, 1);
              }
            } // Clear the archived and unarchived party IDs


            this.archivedPartyIds = [];
            this.unarchivedPartyIds = []; // Update the archived and unarchived party IDs based on the selected parties

            this.shippingIdList.forEach(function (partyId) {
              var party = _this4.shippingList.find(function (item) {
                return item.id === partyId;
              });

              if (party) {
                if (party.isDeleted) {
                  _this4.archivedPartyIds.push(partyId);
                } else {
                  _this4.unarchivedPartyIds.push(partyId);
                }
              }
            }); // Check if all the selected parties are archived

            var allArchived = this.shippingIdList.every(function (partyId) {
              var party = _this4.shippingList.find(function (item) {
                return item.id === partyId;
              });

              return party && party.isDeleted;
            }); // Check if all the selected parties are unarchived

            var allUnarchived = this.shippingIdList.every(function (partyId) {
              var party = _this4.shippingList.find(function (item) {
                return item.id === partyId;
              });

              return party && !party.isDeleted;
            }); // if (allArchived && allUnarchived) {

            if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
              // Show an alert error message to the user
              alert("Please select either archived or unarchived ShippingLists."); // Uncheck all the selected parties and header checkbox

              this.shippingIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false; // Uncheck all the checkboxes in the template

              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              });
            } else if (allArchived) {
              console.log('Archived'); // Show unarchive button

              this.showUnarchiveButton = true;
              this.showDeleteButton = false;
            } else if (allUnarchived) {
              console.log('Unarchived'); // Show archive button

              this.showDeleteButton = true;
              this.showUnarchiveButton = false;
            } else {
              // Show error message or handle the case when there are both archived and unarchived parties selected
              alert("Please select either archived or unarchived ShippingLists."); // Uncheck all the selected parties and header checkbox

              this.shippingIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false;
              this.showDeleteButton = false;
              this.showUnarchiveButton = false; // Uncheck all the checkboxes in the template

              var _checkboxes = document.querySelectorAll('input[type="checkbox"]');

              _checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              });
            }
          }
        }, {
          key: "getSingleCheckedId",
          value: function getSingleCheckedId(warehouseId) {
            this.warehouseId = warehouseId;
          }
        }, {
          key: "onChekMultiple",
          value: function onChekMultiple($event) {
            var _this5 = this;

            var isChecked = $event.target.checked;

            if (isChecked) {
              this.shippingIdList = this.shippingList.map(function (item) {
                return item.id;
              });
            } else {
              this.shippingIdList = [];
              this.showDeleteButton = false;
              this.showUnarchiveButton = false;
            }

            this.checkSelect = isChecked; // Update the checkbox state in the header

            var id = $event.target.value;
            this.isChecked = $event.target.checked;
            this.upiCheckedId = this.shippingList.map(function (item) {
              if (id === -1) {
                if (_this5.isChecked == true) {
                  _this5.checkSelectsingle = true;
                  return item.id;
                } else {
                  _this5.checkSelectsingle = false;
                  _this5.upiCheckedId = [];
                }
              }
            }); // Clear the archived and unarchived party IDs

            this.archivedPartyIds = [];
            this.unarchivedPartyIds = []; // Update the archived and unarchived party IDs based on the selected parties

            this.shippingIdList.forEach(function (partyId) {
              var party = _this5.shippingList.find(function (item) {
                return item.id === partyId;
              });

              if (party) {
                if (party.isDeleted) {
                  _this5.archivedPartyIds.push(partyId);
                } else {
                  _this5.unarchivedPartyIds.push(partyId);
                }
              } // Check if all the selected parties are archived


              var allArchived = _this5.shippingIdList.every(function (partyId) {
                var party = _this5.shippingList.find(function (item) {
                  return item.id === partyId;
                });

                return party && party.isDeleted;
              }); // Check if all the selected parties are unarchived


              var allUnarchived = _this5.shippingIdList.every(function (partyId) {
                var party = _this5.shippingList.find(function (item) {
                  return item.id === partyId;
                });

                return party && !party.isDeleted;
              });

              if (allArchived) {
                // Show unarchive button
                _this5.showUnarchiveButton = true;
                _this5.showDeleteButton = false;
              } else if (allUnarchived) {
                // Show archive button
                _this5.showDeleteButton = true;
                _this5.showUnarchiveButton = false;
              } else {// Show error message or handle the case when there are both archived and unarchived parties selected
              }
            });

            if (this.archivedPartyIds.length > 0 && this.unarchivedPartyIds.length > 0) {
              alert("Please select either archived or unarchived ShippingLists"); // Uncheck all the selected parties and header checkbox

              this.shippingIdList = [];
              this.checkSingleArray = [];
              this.checkSelectsingle = false;
              this.upiCheckedId = [];
              this.isChecked = false;
              this.allSelect = false;
              this.checkSelect = false;
              this.checkSelectsingle = false; // Uncheck all the checkboxes in the template

              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              checkboxes.forEach(function (checkbox) {
                var inputElement = checkbox;
                inputElement.checked = false;
              }); // Throw an error to prevent further processing

              this.toastService.toastMsg({
                title: 'Warning',
                content: 'Please select either archived or unarchived ShippingLists'
              });
              throw new Error("Please select either archived or unarchived ShippingLists");
            }
          }
        }, {
          key: "getUPIcheckId",
          value: function getUPIcheckId(warehouseId) {
            this.warehouseId = warehouseId;
          }
        }, {
          key: "archiveMultipleShippingList",
          value: function archiveMultipleShippingList() {
            if (this.currentPageNo === 1) {
              this.currentPageNo = this.currentPageNo;
            } else {
              if (this.totalPages > this.currentPageNo) {
                this.currentPageNo = this.currentPageNo - 1;
              }
            }

            var requestBody = {
              archiveShippingLists: this.shippingIdList
            }; // this.warehouseService.deleteMultiplewarehouses({ data: requestBody, userId: this.currentUser.id }).then((result: any) => {
            //   if (result.success) {
            //     this.getAllStockTransfer();
            //     this.toastService.toastMsg({
            //       title: 'Success',
            //       content: "ShippingList Archived Successfully!!!"
            //     });
            //     this.showDeleteButton = false;
            //     this.showUnarchiveButton = false
            //     this.shippingIdList = []; // Clear the selected party IDs after deletion
            //     this.checkSelect = false // Reset the checkbox state in the header
            //   }
            // }, (err) => {
            //   if (err.error.expose) {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: this.titleCasePipe.transform(err.error.error_message)
            //     });
            //   } else {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: "Something Went Wrong."
            //     });
            //   }
            // });
          }
        }, {
          key: "showDeleteButtonFunc",
          value: function showDeleteButtonFunc() {
            return this.unarchivedPartyIds.length > 0;
          }
        }, {
          key: "unArchiveMultipleShippingList",
          value: function unArchiveMultipleShippingList() {
            var requestBody = {
              unArchiveShippingLists: this.shippingIdList
            }; // this.warehouseService.unArchiveMultiplewarehouses({data: requestBody, userId: this.currentUser.id}).then((result: any) => {
            //   if (result.success) {
            //     this.getAllStockTransfer();
            //     this.toastService.toastMsg({
            //       title: 'Success',
            //       content: "ShippingList Unarchived Successfully!!!"
            //     });
            //     this.showDeleteButton = false;
            //     this.showUnarchiveButton = false
            //     this.shippingIdList = []; // Clear the selected party IDs after unarchiving
            //     this.checkSelect = false; // Reset the checkbox state in the header
            //   }
            // }, (err) => {
            //   if (err.error.expose) {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: this.titleCasePipe.transform(err.error.error_message)
            //     });
            //   } else {
            //     this.toastService.toastMsg({
            //       title: 'Error',
            //       content: "Something Went Wrong."
            //     });
            //   }
            // });
          }
        }, {
          key: "searchShippingList",
          value: function searchShippingList(searchKey) {
            var _this6 = this;

            setTimeout(function () {
              if (searchKey.trim() === '') {
                _this6.getAllStockTransfer();

                _this6.isLoading = false;
              } else {
                _this6.isLoading = false;

                _this6.getAllStockTransfer(searchKey);

                if (_this6.shippingList.length === 0) {
                  _this6.isLoading = false;

                  _this6.toastService.toastMsg({
                    title: "Error",
                    content: searchKey + " Is Not Found"
                  });
                }
              }

              _this6.isLoading = false; // Hide the loader after the API call is completed
            }, 500);
          }
        }, {
          key: "onSearchInputChange",
          value: function onSearchInputChange(searchKey) {
            console.log(searchKey); // Emit the search key to the searchSubject

            this.searchSubject.next(searchKey.trim());
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            this.excelFileUpload = e.target.files[0];
            var pattern = /\.(xlsx|xls)$/i; // Pattern to match ".xlsx" or ".xls" extension

            if (!pattern.test(this.excelFileUpload.name)) {
              this.toastService.toastMsg({
                title: "Error",
                content: "Invalid Format. Please Select An Excel File."
              });
              return;
            }

            if (this.excelFileUpload) {
              var formdata = new FormData();
              formdata.set("file", this.excelFileUpload); // this.truckOwnerService.postBulkowner(formdata, this.currentUser.id).then((res) => {
              //   this.toastService.toastMsg({
              //     title: "Success",
              //     content: "Excel Uploaded Successfully",
              //   });
              //   this.getAllStockTransfer();
              // }, (err) => {
              //   if (err.error.expose) {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: this.titleCasePipe.transform(err.error.error_message),
              //     });
              //   }
              //   else if (err.error.status == "409" && err.error.expose == false) {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: "List Of Consignments Already Exists",
              //     });
              //   }
              //   else {
              //     this.toastService.toastMsg({
              //       title: "Error",
              //       content: "Something Went Wrong.",
              //     });
              //   }
              // });
            }
          }
        }, {
          key: "startUpload",
          value: function startUpload() {
            var uploadInput = document.getElementById('uploadFile');

            if (uploadInput) {
              var event = new MouseEvent('click', {
                view: window,
                bubbles: false,
                cancelable: true
              });
              uploadInput.dispatchEvent(event);
            } else {
              this.toastService.toastMsg({
                title: 'Error',
                content: "Upload element not found"
              });
            }
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.shippingList.length > 0) {
              if (this.searchKey !== '') {
                this.partyPageSize = e.pageSize;
                this.searchShippingList(this.searchKey);
              } else {
                this.partyPageSize = e.pageSize;
                this.getAllStockTransfer();
              }
            }
          }
        }, {
          key: "viewRequest",
          value: function viewRequest(requestId) {
            var dialogRef = this.dialog.open(_components_view_request_order_view_request_order_component__WEBPACK_IMPORTED_MODULE_0__.ViewRequestOrderComponent, {
              width: '700px',
              height: "100vh",
              data: {
                requestId: requestId
              },
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          } // editShippingListModal(packageData) {
          //   const dialogRef: MatDialogRef<EditShippingComponent> = this.dialog.open(EditShippingComponent, {
          //     width: '700px',
          //     height: '100vh',
          //     data: { packageData: packageData },
          //     disableClose: true,
          //     position: {
          //       right: '0',
          //     },
          //   });
          //   dialogRef.afterClosed().subscribe((result) => {
          //     console.log(`Dialog result: ${result}`);
          //   });
          // }
          // isActive(warehouseId, isActive) {
          //   const newStatus = !isActive; // Toggle between '1' and '0'
          //   const payload = {
          //     warehouseId: warehouseId,        
          //   };
          //   this.warehouseService.warehouseToggle({ data: payload, userId: this.currentUser.id })
          //     .then((res) => {
          //       if (res.success) {
          //             if (newStatus) {
          //               this.toastService.toastMsg({
          //                 title: "Success",
          //                 content: "Status Has Changed To Active",
          //               });
          //               this.getAllStockTransfer()
          //             } else {
          //               this.toastService.toastMsg({
          //                 title: "Success",
          //                 content: "Status Has Changed To Inactive",
          //               });
          //               this.getAllStockTransfer()
          //             }
          //           }
          //     })
          //     .catch((error) => {
          //       this.toastService.toastMsg({
          //         title: 'Error',
          //         content: this.titleCasePipe.transform(error.error.error_message)
          //       })
          //     });
          // }
          // Add a method to update the filter value

        }, {
          key: "updateTypeFilter",
          value: function updateTypeFilter(filterValue) {
            if (filterValue === 'ALL') {
              this.selectedTypeFilter = null;
            } else {
              this.selectedTypeFilter = filterValue;
            }
          }
        }, {
          key: "toggleFilter",
          value: function toggleFilter() {
            this.isFilterVisible = !this.isFilterVisible;
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            this.isFilterVisible = false;
          }
        }, {
          key: "getAcceptOrReject",
          value: function getAcceptOrReject(id) {
            this.stocktransferId = id;
          }
        }, {
          key: "stockTransferAcceptReject",
          value: function stockTransferAcceptReject(string) {
            var _this7 = this;

            this.warehouseService.stockTransferAcceptReject({
              stocktransferId: this.stocktransferId,
              status: "".concat(string)
            }).then(function (res) {
              if (res.success) {
                _this7.commonService.notifyDataAdded();

                _this7.toastService.toastMsg({
                  title: 'Success',
                  content: "Order ".concat(string.toLowerCase())
                });

                if (string.toLowerCase() === 'accepted') {
                  _this7.router.navigate(['pages/warehouse-landing/packages/package-list']);
                }
              }
            });
          }
        }]);

        return _RequestOrderListComponent;
      }();

      _RequestOrderListComponent.ɵfac = function RequestOrderListComponent_Factory(t) {
        return new (t || _RequestOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_3__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe));
      };

      _RequestOrderListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RequestOrderListComponent,
        selectors: [["app-request-order-list"]],
        viewQuery: function RequestOrderListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
          }
        },
        decls: 111,
        vars: 22,
        consts: [["class", "loader-container", 4, "ngIf"], [1, "container-fluid", "bg-white", "p-0"], ["id", "showoptionHide", 1, "row", "headerButtons", "mb-3"], [1, "flex-item", "searchBar"], ["type", "search", "id", "searchInput", "placeholder", "Search...", 1, "search-form-control", "pe-5", "my-2", 3, "input"], [1, "navOption-btns", "flex-item", "formButtons", "mx-0"], [1, "table-container", "overflow-visible"], [1, "table-div", 2, "overflow-x", "scroll"], [1, "table", "table-responsive"], [1, "text-nowrap", 2, "display", "flex", "justify-content", "flex-start", "align-items", "center"], ["type", "checkbox", 1, "form-check-input", 3, "value", "checked", "ngModel", "change", "ngModelChange"], [1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "text-nowrap"], [4, "ngFor", "ngForOf"], ["id", "errorUnarchiveSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], ["aria-hidden", "true", 1, "fa", "fa-unlock-alt"], ["class", "text-center", 4, "ngIf"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success"], ["class", "btn btn-outline-danger", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["id", "errorArchiveSelect-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["aria-hidden", "true", 1, "fa", "fa-lock-alt"], ["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["class", "mb-1 text-center font-weight-bold", "style", "font-weight: 800", "id", "modalExampleDemoLabel", 4, "ngIf"], ["class", "btn btn-outline-warning", "data-bs-dismiss", "modal", 3, "click", 4, "ngIf"], ["id", "accept-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "text-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-success", 3, "click"], ["id", "reject-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-danger", 3, "click"], [1, "loader-container"], [1, "loader"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorArchiveSelect-modal", "style", "padding-top: 15px", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorArchiveSelect-modal", 1, "btn", 2, "padding-top", "15px"], ["class", "material-icons icon-color iconFontSize", "data-bs-toggle", "tooltip", "style", "color: #fc7643", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Archive", 1, "material-icons", "icon-color", "iconFontSize", 2, "color", "#fc7643", 3, "click"], ["class", "btn", "data-bs-toggle", "modal", "data-bs-target", "#errorUnarchiveSelect-modal", "style", "padding-top: 15px", 4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#errorUnarchiveSelect-modal", 1, "btn", 2, "padding-top", "15px"], ["class", "material-icons icon-color iconFontSize", "data-bs-toggle", "tooltip", "style", "color: #fc7643", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Unrchive", 3, "click", 4, "ngIf"], ["data-bs-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Unrchive", 1, "material-icons", "icon-color", "iconFontSize", 2, "color", "#fc7643", 3, "click"], ["style", "color: #676398 !important", 3, "ngStyle", 4, "ngIf"], [2, "color", "#676398 !important", 3, "ngStyle"], [1, "text-nowrap", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input", 3, "ngClass", "checked", "value", "change"], [1, "long-name", 2, "vertical-align", "middle"], [1, "long-address", 2, "vertical-align", "middle"], [1, "long-address", 2, "vertical-align", "middle", 3, "ngClass"], [1, "text-nowrap", 2, "text-align", "center", "vertical-align", "middle"], ["style", "text-align: center; vertical-align: middle", "data-bs-toggle", "modal", "data-bs-target", "#accept-modal", 3, "ngClass", "click", 4, "ngIf"], ["style", "text-align: center; vertical-align: middle", "data-bs-toggle", "modal", "data-bs-target", "#reject-modal", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btnp", "me-2", 3, "disabled", "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View", 1, "bi", "bi-eye", "icon-color", "iconFontSize"], ["data-bs-toggle", "modal", "data-bs-target", "#accept-modal", 2, "text-align", "center", "vertical-align", "middle", 3, "ngClass", "click"], ["data-bs-toggle", "modal", "data-bs-target", "#reject-modal", 2, "text-align", "center", "vertical-align", "middle", 3, "ngClass", "click"], ["colspan", "10"], ["src", "../../../assets/img/icons/spot-illustrations/notfound1.png", "alt", "notfound1", "width", "200", "height", "150", 1, "image-responsive"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-warning", 3, "click"]],
        template: function RequestOrderListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, RequestOrderListComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function RequestOrderListComponent_Template_input_input_4_listener($event) {
              return ctx.onSearchInputChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RequestOrderListComponent_Template_input_change_12_listener($event) {
              return ctx.onChekMultiple($event);
            })("ngModelChange", function RequestOrderListComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.allSelect = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RequestOrderListComponent_span_14_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RequestOrderListComponent_span_15_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Total Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RequestOrderListComponent_ng_container_27_Template, 2, 1, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RequestOrderListComponent_tbody_28_Template, 4, 0, "tbody", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Unarchive Shipping List? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, RequestOrderListComponent_h4_39_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RequestOrderListComponent_h4_40_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, RequestOrderListComponent_a_44_Template, 2, 0, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, RequestOrderListComponent_a_45_Template, 2, 0, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Archive Shipping List? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, RequestOrderListComponent_h4_56_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, RequestOrderListComponent_h4_57_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, RequestOrderListComponent_a_61_Template, 2, 0, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, RequestOrderListComponent_a_62_Template, 2, 0, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, RequestOrderListComponent_h2_70_Template, 2, 0, "h2", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, RequestOrderListComponent_h2_71_Template, 2, 0, "h2", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, RequestOrderListComponent_h4_72_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, RequestOrderListComponent_h4_73_Template, 2, 0, "h4", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, RequestOrderListComponent_a_77_Template, 2, 0, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, RequestOrderListComponent_a_78_Template, 2, 0, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " Accept Order ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "h4", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " Are You Sure To Accept Order? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_Template_a_click_93_listener() {
              return ctx.stockTransferAcceptReject("ACCEPTED");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Accept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, " Decline Order ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "h4", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " Are You Sure To Decilne Order? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestOrderListComponent_Template_a_click_109_listener() {
              return ctx.stockTransferAcceptReject("REJECTED");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Decline ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", -1)("checked", ctx.shippingIdList.length === ctx.shippingList.length)("ngModel", ctx.allSelect);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUnarchiveButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.shippingList);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.shippingList.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isdeletedParty);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isdeletedParty);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f8f8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  color: #848e99;\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n\n.table-body-tr[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n  .custom-dialog-clone-class {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n  .custom-dialog-edit-class {\n  margin-left: 50%;\n  height: 100vh !important;\n}\n\n.headerButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  flex-basis: 320px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  flex-basis: 350px;\n}\n\n@media screen and (max-width: 600px) {\n  .headerButtons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  border-color: black;\n  \n}\n\n.custom-checkbox.deleted[_ngcontent-%COMP%] {\n  border-color: white;\n  \n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35px;\n  height: 20px;\n  border-radius: 15px;\n  border: 2px solid #ccc;\n  background-color: #ddd;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0px;\n  width: 16px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s;\n}\n\n.active[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n}\n\n.inactive[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  transform: translateX(-3);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #2c7be5;\n  border-color: #2c7be5;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.toggle-button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3px #01080e;\n}\n\n\n\n.toggle-button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 100%;\n}\n\n.gst-status-cross[_ngcontent-%COMP%] {\n  color: #ff0000;\n  \n  margin-bottom: 10px;\n}\n\n.gst-status-tickmark[_ngcontent-%COMP%] {\n  color: #00ff00;\n  \n  margin-bottom: 10px;\n}\n\n.gst-status-accepted[_ngcontent-%COMP%] {\n  color: #00ff00;\n  \n}\n\n.gst-status-rejected[_ngcontent-%COMP%] {\n  color: red;\n  \n}\n\n.gst-status-pending[_ngcontent-%COMP%] {\n  color: orange;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3Qtb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFGRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQXFCLCtDQUFBO0FBRXpCOztBQUNFO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTs7RUFFRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFOzs7RUFHRSw2QkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUVFLFVBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlFO0VBQ0U7SUFDRSx1QkFBQTtFQURKO0FBQ0Y7O0FBSUU7RUFDRSxtQkFBQTtFQUFxQix5QkFBQTtBQUR6Qjs7QUFJRTtFQUNFLG1CQUFBO0VBQXFCLDRDQUFBO0FBQXpCOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUU7RUFDRSwyQkFBQTtBQURKOztBQUlFO0VBQ0UseUJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLDJCQUFBO0FBREo7O0FBSUUsa0RBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUVFLGNBQUE7RUFBZ0Isa0NBQUE7RUFDaEIsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7RUFBZ0Isa0NBQUE7RUFDaEIsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFBZ0IsbURBQUE7QUFDcEI7O0FBRUU7RUFDRSxVQUFBO0VBQVksbURBQUE7QUFFaEI7O0FBQ0U7RUFDRSxhQUFBO0VBQWUsa0RBQUE7QUFHbkIiLCJmaWxlIjoicmVxdWVzdC1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclNlYXJjaEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICBcclxuICAubmF2T3B0aW9ucyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2hCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IC8qIEFkanVzdCB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGljb24ncyB3aWR0aCAqL1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0Ym9keSB0cixcclxuICB0ZCB7XHJcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0aCxcclxuICB0ZCxcclxuICB0ciB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1vYmlsZSB7XHJcbiAgICBjb2xvcjogIzg0OGU5OTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG1pbi13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1ib2R5LXRyIHtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtcmVzcG9uc2l2ZSB0Ym9keSB0ZCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1jbG9uZS1jbGFzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctZWRpdC1jbGFzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvLyBSZXNwb25zaXZlIEJ1dHRvbnNcclxuICAuaGVhZGVyQnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1pdGVtIHtcclxuICAgIC8vZmxleC1iYXNpczogMjQwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuc2VhcmNoQmFyIHtcclxuICAgIGZsZXgtYmFzaXM6IDMyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybUJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IDM1MHB4O1xyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSBxdWVyeSBmb3IgYnV0dG9ucyBhbmQgc2VhcmNoIGJhci5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlckJ1dHRvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyAvKiBEZWZhdWx0IGJvcmRlciBjb2xvciAqL1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNoZWNrYm94LmRlbGV0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgLyogUmVkIGJvcmRlciBjb2xvciB3aGVuIGlzRGVsZXRlZCBpcyB0cnVlICovXHJcbiAgfVxyXG4gIFxyXG4gIC8vIFRvZ2dsZSBidXR0b24gQ3NzXHJcbiAgLnRvZ2dsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlLXNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUgLnRvZ2dsZS1zbGlkZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gIH1cclxuICBcclxuICAuaW5hY3RpdmUgLnRvZ2dsZS1zbGlkZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zKTtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3YmU1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmM3YmU1O1xyXG4gIH1cclxuICBcclxuICAuaW5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnRvZ2dsZS1idXR0b246Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjMDEwODBlO1xyXG4gIH1cclxuICBcclxuICAvKiBPcHRpb25hbDogQ2VudGVyIHRoZSB0b2dnbGUgc2xpZGVyIHZlcnRpY2FsbHkgKi9cclxuICAudG9nZ2xlLWJ1dHRvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmdzdC1zdGF0dXMtY3Jvc3Mge1xyXG4gICAgLy8gZm9udC1zaXplOiAzNXB4OyAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cclxuICAgIGNvbG9yOiAjZmYwMDAwOyAvKiBSZWQgY29sb3IgZm9yIGluYWN0aXZlIHN0YXR1cyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdzdC1zdGF0dXMtdGlja21hcmsge1xyXG4gICAgY29sb3I6ICMwMGZmMDA7IC8qIEdyZWVuIGNvbG9yIGZvciBhY3RpdmUgc3RhdHVzICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdzdC1zdGF0dXMtYWNjZXB0ZWQge1xyXG4gICAgY29sb3I6ICMwMGZmMDA7IC8qIEFkanVzdCB0aGUgY29sb3IgYXMgbmVlZGVkIGZvciBhY2NlcHRlZCBzdGF0dXMgKi9cclxuICB9XHJcbiAgXHJcbiAgLmdzdC1zdGF0dXMtcmVqZWN0ZWQge1xyXG4gICAgY29sb3I6IHJlZDsgLyogQWRqdXN0IHRoZSBjb2xvciBhcyBuZWVkZWQgZm9yIHJlamVjdGVkIHN0YXR1cyAqL1xyXG4gIH1cclxuICBcclxuICAuZ3N0LXN0YXR1cy1wZW5kaW5nIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7IC8qIEFkanVzdCB0aGUgY29sb3IgYXMgbmVlZGVkIGZvciBwZW5kaW5nIHN0YXR1cyAqL1xyXG4gIH0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_Product_product_module_ts-es5.js.map