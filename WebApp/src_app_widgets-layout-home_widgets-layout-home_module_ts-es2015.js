"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_widgets-layout-home_widgets-layout-home_module_ts"],{

/***/ 33399:
/*!***************************************************************************!*\
  !*** ./src/app/widgets-layout-home/widgets-layout-home-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsLayoutHomeRoutingModule": function() { return /* binding */ WidgetsLayoutHomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _widgets_layout_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-layout-home.component */ 36885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _widgets_layout_home_component__WEBPACK_IMPORTED_MODULE_0__.WidgetsLayoutHomeComponent,
        data: {
            title: 'Home'
        }
    }
];
class WidgetsLayoutHomeRoutingModule {
}
WidgetsLayoutHomeRoutingModule.ɵfac = function WidgetsLayoutHomeRoutingModule_Factory(t) { return new (t || WidgetsLayoutHomeRoutingModule)(); };
WidgetsLayoutHomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WidgetsLayoutHomeRoutingModule });
WidgetsLayoutHomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WidgetsLayoutHomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9163:
/*!*******************************************************************!*\
  !*** ./src/app/widgets-layout-home/widgets-layout-home.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsLayoutHomeModule": function() { return /* binding */ WidgetsLayoutHomeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widgets_layout_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-layout-home-routing.module */ 33399);
/* harmony import */ var _widegts_library_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widegts-library/header/header.module */ 57636);
/* harmony import */ var _widegts_library_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widegts-library/footer/footer.module */ 71245);
/* harmony import */ var _widegts_library_testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widegts-library/testimonial/testimonial.module */ 13560);
/* harmony import */ var _widegts_library_feature_product_feature_product_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widegts-library/feature-product/feature-product.module */ 39212);
/* harmony import */ var _widegts_library_image_image_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widegts-library/image/image.module */ 49821);
/* harmony import */ var _widegts_library_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widegts-library/slider/slider.module */ 8684);
/* harmony import */ var _widegts_library_section_section_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widegts-library/section/section.module */ 87015);
/* harmony import */ var _widegts_library_gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widegts-library/gallery/gallery.module */ 81101);
/* harmony import */ var _widgets_layout_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets-layout-home.component */ 36885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);












class WidgetsLayoutHomeModule {
}
WidgetsLayoutHomeModule.ɵfac = function WidgetsLayoutHomeModule_Factory(t) { return new (t || WidgetsLayoutHomeModule)(); };
WidgetsLayoutHomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: WidgetsLayoutHomeModule });
WidgetsLayoutHomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _widgets_layout_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsLayoutHomeRoutingModule,
            _widegts_library_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
            _widegts_library_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
            _widegts_library_testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_3__.TestimonialModule,
            _widegts_library_feature_product_feature_product_module__WEBPACK_IMPORTED_MODULE_4__.FeatureProductModule,
            _widegts_library_image_image_module__WEBPACK_IMPORTED_MODULE_5__.ImageModule,
            _widegts_library_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__.SliderModule,
            _widegts_library_section_section_module__WEBPACK_IMPORTED_MODULE_7__.SectionModule,
            _widegts_library_gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__.GallerySliderModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WidgetsLayoutHomeModule, { declarations: [_widgets_layout_home_component__WEBPACK_IMPORTED_MODULE_9__.WidgetsLayoutHomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _widgets_layout_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsLayoutHomeRoutingModule,
        _widegts_library_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
        _widegts_library_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _widegts_library_testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_3__.TestimonialModule,
        _widegts_library_feature_product_feature_product_module__WEBPACK_IMPORTED_MODULE_4__.FeatureProductModule,
        _widegts_library_image_image_module__WEBPACK_IMPORTED_MODULE_5__.ImageModule,
        _widegts_library_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__.SliderModule,
        _widegts_library_section_section_module__WEBPACK_IMPORTED_MODULE_7__.SectionModule,
        _widegts_library_gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__.GallerySliderModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_widgets-layout-home_widgets-layout-home_module_ts-es2015.js.map