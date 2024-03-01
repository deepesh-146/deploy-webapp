(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_setting-module_setting-module_module_ts"], {
    /***/
    66200:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/setting-module/invoice-number/invoice-number.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceNumberComponent": function InvoiceNumberComponent() {
          return (
            /* binding */
            _InvoiceNumberComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InvoiceNumberComponent = /*#__PURE__*/function () {
        function _InvoiceNumberComponent() {
          _classCallCheck(this, _InvoiceNumberComponent);
        }

        _createClass(_InvoiceNumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _InvoiceNumberComponent;
      }();

      _InvoiceNumberComponent.ɵfac = function InvoiceNumberComponent_Factory(t) {
        return new (t || _InvoiceNumberComponent)();
      };

      _InvoiceNumberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InvoiceNumberComponent,
        selectors: [["app-invoice-number"]],
        decls: 2,
        vars: 0,
        template: function InvoiceNumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "invoice-number works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    87994:
    /*!*************************************************************!*\
      !*** ./src/app/pages/setting-module/main/main.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
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

      var _MainComponent = /*#__PURE__*/function () {
        function _MainComponent() {
          _classCallCheck(this, _MainComponent);
        }

        _createClass(_MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MainComponent;
      }();

      _MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)();
      };

      _MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainComponent,
        selectors: [["app-main"]],
        decls: 11,
        vars: 0,
        consts: [[1, "component-container", "container-fluid", "px-3", "pt-3"], ["id", "navPanel", "id", "headingPrintHide", 1, "row", "px-3", "pt-3"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link", 2, "z-index", "1"], [1, "col-lg-2", "col-md-3", "col-sm-6", "links"], ["routerLink", "./invoice_generate", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap"], [1, "col-lg-6"], [1, "mt-1"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Invoice Setting");

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
        styles: [".navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 40px !important;\n}\n\n#download[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 95%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n.component-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.navOptions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  font-size: 1.1em;\n  font-weight: bold !important;\n  transition-duration: 0.5s;\n}\n\n.navOptions[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.navOption-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #FC7643;\n  border: 2px solid #FC7643;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-left: -40px;\n  z-index: 1;\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n  }\n}\n\n@media (max-width: 992px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 18%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-Party-class[_ngcontent-%COMP%] {\n    margin-left: 28%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 58%;\n    margin-top: -16%;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 575px) {\n  .custom-dialog-PartyGrp-class[_ngcontent-%COMP%] {\n    margin-left: 35%;\n    margin-top: -16%;\n  }\n}\n\n.hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding-right: 30px;\n  \n}\n\n.input-group-addon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background-color: transparent;\n  border: none;\n}\n\n.navOption-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBS0EsMEJBQUE7RUFDRiw0QkFBQTtFQUNBLHFYQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtFQUEwQywrQkFBQTtBQUg1Qzs7QUFPRTtFQUNFLFdBQUE7QUFKSjs7QUFHRTtFQUNFLFdBQUE7QUFKSjs7QUF3QkE7RUFDSSxzQkFBQTtBQXJCSjs7QUE0QkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtBQTFCSjs7QUE2QkE7RUFFSSxZQUFBO0FBM0JKOztBQThCQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksYUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUEzQko7O0FBNENBO0VBQ0k7SUFDSSxnQkFBQTtFQXpDTjtBQUNGOztBQTRDQTtFQUNJO0lBQ0ksZ0JBQUE7RUExQ047QUFDRjs7QUE2Q0U7RUFDRTtJQUNJLGdCQUFBO0VBM0NOO0FBQ0Y7O0FBOENBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBNUNOO0FBQ0Y7O0FBK0NBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBN0NOO0FBQ0Y7O0FBZ0RBO0VBQ0ksYUFBQTtBQTlDSjs7QUFpREE7RUFDSSxtQkFBQTtFQUFxQiwrQ0FBQTtBQTdDekI7O0FBZ0RBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQTlDSjs7QUFpREE7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUE5Q0oiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZPcHRpb24tYnRuc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Rvd25sb2Fke1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyU2VhcmNoQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuXHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuIHtcclxuICAvLyAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgd2lkdGg6IDQwcHg7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogODElO1xyXG4gIC8vICAgbWFyZ2luLXRvcDogLTE0JTtcclxuICAvLyAgIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgb3BhY2l0eTogMC43O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuc2VhcmgtYnRuOmhvdmVyIHtcclxuICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgLy8gfVxyXG5cclxuLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbi8vIC5uYXZPcHRpb25zIHAge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbi8vIH1cclxuXHJcbi5uYXZPcHRpb25zIHA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBkZWxheSAwLjMgc2Vjb25kcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXNcclxufVxyXG5cclxuLm5hdk9wdGlvbnMge1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5uYXZPcHRpb24tYnRucyAuYnRue1xyXG4gICAgY29sb3I6ICNGQzc2NDM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkM3NjQzO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8vIC5hY3RpdmUtbGlua3tcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0ZDNzY0MztcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC5hY3RpdmU6OmFmdGVyIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHktY2xhc3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY3VzdG9tLWRpYWxvZy1QYXJ0eS1jbGFzcyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcclxuICAgIH1cclxuICB9IFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA1NzVweCkge1xyXG4gICAgLmN1c3RvbS1kaWFsb2ctUGFydHlHcnAtY2xhc3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTYlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG5cclxuLmhpZGRlbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgaWNvbidzIHdpZHRoICovXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2T3B0aW9uLWJ0bnMgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    24261:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/setting-module/setting-module-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingModuleRoutingModule": function SettingModuleRoutingModule() {
          return (
            /* binding */
            _SettingModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      87994);
      /* harmony import */


      var _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice-receipt-ui/invoice-receipt-ui.component */
      87358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [{
          path: '',
          redirectTo: 'invoice_generate',
          pathMatch: 'full'
        }, {
          path: "invoice_generate",
          component: _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceReceiptUIComponent
        }]
      }];

      var _SettingModuleRoutingModule = /*#__PURE__*/_createClass(function _SettingModuleRoutingModule() {
        _classCallCheck(this, _SettingModuleRoutingModule);
      });

      _SettingModuleRoutingModule.ɵfac = function SettingModuleRoutingModule_Factory(t) {
        return new (t || _SettingModuleRoutingModule)();
      };

      _SettingModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _SettingModuleRoutingModule
      });
      _SettingModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_SettingModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    96575:
    /*!***************************************************************!*\
      !*** ./src/app/pages/setting-module/setting-module.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingModuleModule": function SettingModuleModule() {
          return (
            /* binding */
            _SettingModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./setting-module-routing.module */
      24261);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      87994);
      /* harmony import */


      var _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice-receipt-ui/invoice-receipt-ui.component */
      87358);
      /* harmony import */


      var _invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice-number/invoice-number.component */
      66200);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SettingModuleModule = /*#__PURE__*/_createClass(function _SettingModuleModule() {
        _classCallCheck(this, _SettingModuleModule);
      });

      _SettingModuleModule.ɵfac = function SettingModuleModule_Factory(t) {
        return new (t || _SettingModuleModule)();
      };

      _SettingModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _SettingModuleModule
      });
      _SettingModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingModuleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_SettingModuleModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _invoice_receipt_ui_invoice_receipt_ui_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceReceiptUIComponent, _invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_3__.InvoiceNumberComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _setting_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingModuleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_setting-module_setting-module_module_ts-es5.js.map