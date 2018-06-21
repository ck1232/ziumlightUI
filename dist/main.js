(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CK';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/http.interceptor */ "./src/app/helpers/http.interceptor.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "./src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_template_template_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/template/template.component */ "./src/app/components/template/template.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_product_listing_template_product_listing_template_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/product-listing-template/product-listing-template.component */ "./src/app/components/product-listing-template/product-listing-template.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product-filter/product-filter.component */ "./src/app/components/product-filter/product-filter.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_breadcrumb_node_breadcrumb_node_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/breadcrumb-node/breadcrumb-node.component */ "./src/app/components/breadcrumb-node/breadcrumb-node.component.ts");
/* harmony import */ var _pipe_capitalize_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipe/capitalize.pipe */ "./src/app/pipe/capitalize.pipe.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/product-sort/product-sort.component */ "./src/app/components/product-sort/product-sort.component.ts");
/* harmony import */ var _components_product_pagination_product_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/product-pagination/product-pagination.component */ "./src/app/components/product-pagination/product-pagination.component.ts");
/* harmony import */ var _components_price_filter_price_filter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/price-filter/price-filter.component */ "./src/app/components/price-filter/price-filter.component.ts");
/* harmony import */ var _components_shipping_filter_shipping_filter_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/shipping-filter/shipping-filter.component */ "./src/app/components/shipping-filter/shipping-filter.component.ts");
/* harmony import */ var _components_product_sort_mobile_product_sort_mobile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/product-sort-mobile/product-sort-mobile.component */ "./src/app/components/product-sort-mobile/product-sort-mobile.component.ts");
/* harmony import */ var _components_product_filter_mobile_product_filter_mobile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/product-filter-mobile/product-filter-mobile.component */ "./src/app/components/product-filter-mobile/product-filter-mobile.component.ts");
/* harmony import */ var _components_product_filter_dialog_product_filter_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/product-filter-dialog/product-filter-dialog.component */ "./src/app/components/product-filter-dialog/product-filter-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: _components_template_template_component__WEBPACK_IMPORTED_MODULE_16__["TemplateComponent"],
        children: [
            { path: '',
                component: _components_product_listing_template_product_listing_template_component__WEBPACK_IMPORTED_MODULE_18__["ProductListingTemplateComponent"],
                outlet: 'content'
            }
        ]
    },
    {
        path: 'user-list',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"]
    },
    {
        path: 'user-add',
        component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"]
    },
    {
        path: 'user-edit/:id',
        component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"]
    },
    {
        path: '**',
        redirectTo: '/404'
    },
    {
        path: '404',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _components_template_template_component__WEBPACK_IMPORTED_MODULE_16__["TemplateComponent"],
                _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_17__["NavMenuComponent"],
                _components_product_listing_template_product_listing_template_component__WEBPACK_IMPORTED_MODULE_18__["ProductListingTemplateComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _components_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_20__["ProductFilterComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbComponent"],
                _components_breadcrumb_node_breadcrumb_node_component__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbNodeComponent"],
                _pipe_capitalize_pipe__WEBPACK_IMPORTED_MODULE_23__["CapitalizePipe"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_24__["ProductComponent"],
                _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_25__["ProductSortComponent"],
                _components_product_pagination_product_pagination_component__WEBPACK_IMPORTED_MODULE_26__["ProductPaginationComponent"],
                _components_price_filter_price_filter_component__WEBPACK_IMPORTED_MODULE_27__["PriceFilterComponent"],
                _components_shipping_filter_shipping_filter_component__WEBPACK_IMPORTED_MODULE_28__["ShippingFilterComponent"],
                _components_product_sort_mobile_product_sort_mobile_component__WEBPACK_IMPORTED_MODULE_29__["ProductSortMobileComponent"],
                _components_product_filter_mobile_product_filter_mobile_component__WEBPACK_IMPORTED_MODULE_30__["ProductFilterMobileComponent"],
                _components_product_filter_dialog_product_filter_dialog_component__WEBPACK_IMPORTED_MODULE_31__["ProductFilterDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_6__["NouisliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_9__["HttpInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]],
            entryComponents: [_components_product_filter_dialog_product_filter_dialog_component__WEBPACK_IMPORTED_MODULE_31__["ProductFilterDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb-node/breadcrumb-node.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/breadcrumb-node/breadcrumb-node.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/breadcrumb-node/breadcrumb-node.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/breadcrumb-node/breadcrumb-node.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\r\n\t<a href=\"{{breadcrumb.url}}\">{{breadcrumb.text | capitalize}}</a>\r\n\t<span *ngIf=\"breadcrumb.next\">\r\n\t\t>\r\n\t\t<app-breadcrumb-node [breadcrumb]=\"breadcrumb.next\"></app-breadcrumb-node>\t\t\t\t\r\n\t</span>\r\n</span>"

/***/ }),

/***/ "./src/app/components/breadcrumb-node/breadcrumb-node.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/breadcrumb-node/breadcrumb-node.component.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbNodeComponent", function() { return BreadcrumbNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbNodeComponent = /** @class */ (function () {
    function BreadcrumbNodeComponent() {
    }
    BreadcrumbNodeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"])
    ], BreadcrumbNodeComponent.prototype, "breadcrumb", void 0);
    BreadcrumbNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb-node',
            template: __webpack_require__(/*! ./breadcrumb-node.component.html */ "./src/app/components/breadcrumb-node/breadcrumb-node.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb-node.component.css */ "./src/app/components/breadcrumb-node/breadcrumb-node.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbNodeComponent);
    return BreadcrumbNodeComponent;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.breadcrumb_wrap{\r\n\tmargin-bottom: 0px;\r\n\tfont-size: 14px;\r\n}"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left\">\r\n\t\t<p class=\"breadcrumb_wrap\">\r\n\t\t\t<app-breadcrumb-node [breadcrumb]=\"breadcrumb\"></app-breadcrumb-node>\r\n\t\t</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent, Breadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.breadcrumb = new Breadcrumb();
        this.breadcrumb.text = 'home';
        this.breadcrumb.url = '/home';
        var childCrumb = new Breadcrumb();
        childCrumb.text = 'Product';
        childCrumb.url = '/product';
        this.breadcrumb.next = childCrumb;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/components/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
        this.next = null;
    }
    return Breadcrumb;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"colophon\" class=\"site-footer footer bg-dark\" role=\"contentinfo\">\n\t<div class=\"container footer-inner\">\n\t\t<div class=\"row\">\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"site-info col-sm-6\">\n\t\t\t\t<div class=\"copyright-text\">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"footer-credits\">\n\t\t\t\t\tPowered By <a>Angular</a>\n\t\t\t\t</div>\n\t\t\t</div><!-- .site-info -->\n\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t<nav id=\"social\" class=\"social-icons\">\n\t\t\t\t\t<ul class=\"list-inline social-list\">\n\t\t\t\t\t\t<li class=\"menu-item menu-item-type-custom menu-item-object-custom\" *ngFor=\"let socialIcon of socialList\">\n\t\t\t\t\t\t\t<a href=\"{{socialIcon.url}}\"><i class=\"{{socialIcon.icon}}\"></i></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<a class=\"btn btn-sm fade-half back-to-top inner-link\" href=\"#top\"><i class=\"fa fa-angle-up\"></i></a>\n</footer><!-- #colophon -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent, SocialIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return SocialIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.socialList = [];
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.socialList.push(new SocialIcon('facebook', 'fab fa-facebook-f', 'https://facebook.com/colorlib'));
        this.socialList.push(new SocialIcon('Twitter', 'fab fa-twitter', 'https://facebook.com/colorlib'));
        this.socialList.push(new SocialIcon('Instagram', 'fab fa-instagram', 'https://facebook.com/colorlib'));
        this.socialList.push(new SocialIcon('LinkedIn', 'fab fa-linkedin', 'https://facebook.com/colorlib'));
        this.socialList.push(new SocialIcon('Youtube', 'fab fa-youtube', 'https://facebook.com/colorlib'));
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

var SocialIcon = /** @class */ (function () {
    function SocialIcon(text, icon, url) {
        this.text = text;
        this.icon = icon;
        this.url = url;
    }
    return SocialIcon;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  padding-right: 30px;\r\n  z-index: 999;\r\n}\r\n\r\n.sticky + .content {\r\n  /* padding-top: 102px; */\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"masthead\" class=\"site-header\" role=\"banner\" [ngClass]=\"[stickyMenu ? 'sticky':'']\">\n\t\t<div class=\"nav-container\">\n\t\t\t<nav id=\"site-navigation\" class=\"main-navigation\" role=\"navigation\">\n\t\t\t\t<div class=\"container-fluid nav-bar\" [ngClass]=\"[navOpen ? 'nav-open':'']\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"module left site-title-container\">\n\t\t\t\t\t\t\t<a href=\"/home\" class=\"custom-logo-link\"><span class=\"site-title\">Ziumlight</span></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"module widget-handle mobile-toggle right visible-sm visible-xs\" (click)=\"mobileToggle()\"\n\t\t\t\t\t\t\t[ngClass]=\"navOpen ? 'active':''\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"module-group left\">\n\t\t\t\t\t\t\t<div class=\"module left\">\n\t\t\t\t\t\t\t\t<app-nav-menu></app-nav-menu>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--end of menu module-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"module-group right hidden-sm hidden-xs\">\n\t\t\t\t\t\t\t<div class=\"module widget-handle search-widget-handle left\"\n\t\t\t\t\t\t\t[ngClass]=\"navOpen ? 'hidden-xs hidden-sm':''\">\n\t\t\t\t\t\t\t\t<div class=\"search\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"module widget-handle search-widget-handle left hidden-xs hidden-sm\">\n\t\t\t\t\t\t\t\t<div class=\"login\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--end of module group-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</nav><!-- #site-navigation -->\n\t\t</div>\n\t</header><!-- #masthead -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.mobileView = false;
        this.navOpen = false;
        this.stickyMenu = false;
        this.scroll = function () {
            if (window.pageYOffset >= 1) {
                _this.stickyMenu = true;
            }
            else {
                _this.stickyMenu = false;
            }
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true); // third parameter
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.scroll, true);
    };
    // Mobile Menu
    HeaderComponent.prototype.mobileToggle = function () {
        this.mobileView = true;
        this.navOpen = !this.navOpen;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n\t<ul id=\"menu\" class=\"menu\">\r\n\t\t<li class=\"menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active\"><a href=\"/shop\">HOME</a></li>\r\n\t\t<li class=\"menu-item menu-item-type-post_type menu-item-object-page\"><a href=\"/shop\">BLOG</a></li>\r\n\t\t<li class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children\">\r\n\t\t\t<a href=\"/shop\">SHOP</a>\r\n\t\t\t<span class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></span>\r\n\t\t\t<ul role=\"menu\" class=\"dropdown-menu\">\r\n\t\t\t\t<li class=\"menu-item menu-item-type-post_type menu-item-object-page\"><a href=\"/pageA\">Page A</a></li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/components/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/price-filter/price-filter.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/price-filter/price-filter.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.price-filter-wrap{\r\n\tpadding: 15px;\r\n\tborder-color: gray;\r\n\tborder-width: 1px;\r\n\tborder-radius: 4px;\r\n\tmin-height: 120px;\r\n\tborder-style: solid;\r\n\tmargin: 15px 0px;\r\n}\r\n\r\ndiv.filter-title-box{\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh5.filter-title-name{\r\n\tfont-weight: 700;\t\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.price-body-wrap{\r\n\tpadding: 5px 15px;\r\n}\r\n\r\ndiv.price-display-label-wrap{\r\n\tmargin: 5px 0px;\r\n}\r\n\r\ndiv.price-label-wrap{\r\n\tdisplay: inline-block;\r\n}\r\n\r\ndiv.currency{\r\n\tdisplay: inline-block;\r\n}\r\n\r\ndiv.price-label{\r\n\tdisplay: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/price-filter/price-filter.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/price-filter/price-filter.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"price-filter-wrap\">\n\t<div class=\"price-header-wrap\">\n\t\t<div class=\"filter-title-box\">\n\t\t\t<h5 class=\"filter-title-name\">Price($)</h5>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"price-body-wrap\">\n\t\t<form [formGroup]=\"form\">\n\t\t    <nouislider [config]=\"priceRangeConfig\" [connect]=\"true\" [min]=\"0\" [max]=\"10\" [formControl]=\"form.controls.range\"></nouislider>\n\t\t</form>\n\t\t<div class=\"price-display-label-wrap\">\n\t\t\t<div class=\"price-label-wrap pull-left\">\n\t\t\t\t<div class=\"currency\">$</div>\n\t\t\t\t<div class=\"price-label\">{{form.value.range[0]}}</div>\n\t\t\t</div>\n\t\t\t<div class=\"price-label-wrap pull-right\">\n\t\t\t\t<div class=\"currency\">$</div>\n\t\t\t\t<div class=\"price-label\">{{form.value.range[1]}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/price-filter/price-filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/price-filter/price-filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: PriceFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceFilterComponent", function() { return PriceFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PriceFilterComponent = /** @class */ (function () {
    function PriceFilterComponent(fb, _productListingStoreService) {
        this.fb = fb;
        this._productListingStoreService = _productListingStoreService;
        this.minPrice = 0;
        this.maxPrice = 100;
        this.priceRangeConfig = {
            behaviour: 'drag',
            connect: 'true',
            keyboard: true,
            margin: 20,
            step: 10,
            range: {
                min: 10,
                max: 100,
            }
        };
    }
    PriceFilterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({ 'range': [[this.minPrice, this.maxPrice]] });
        this.onChanges();
    };
    PriceFilterComponent.prototype.ngOnDestroy = function () {
        this.priceFilterSubscription.unsubscribe();
    };
    PriceFilterComponent.prototype.onChanges = function () {
        var _this = this;
        this.priceFilterSubscription = this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200))
            .subscribe(function (val) {
            _this._productListingStoreService.changePrice(val.range);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PriceFilterComponent.prototype, "minPrice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PriceFilterComponent.prototype, "maxPrice", void 0);
    PriceFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price-filter',
            template: __webpack_require__(/*! ./price-filter.component.html */ "./src/app/components/price-filter/price-filter.component.html"),
            styles: [__webpack_require__(/*! ./price-filter.component.css */ "./src/app/components/price-filter/price-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_3__["ProductListingStoreService"]])
    ], PriceFilterComponent);
    return PriceFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/product-filter-dialog/product-filter-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/product-filter-dialog/product-filter-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.mat-raised-button{\r\n\tmargin: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/product-filter-dialog/product-filter-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/product-filter-dialog/product-filter-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Filter</h1>\n<div mat-dialog-content>\n  <app-price-filter></app-price-filter>\n  <app-shipping-filter></app-shipping-filter>\n</div>\n<div mat-dialog-actions>\n\t<button mat-raised-button (click)=\"applyFilterClick()\">Apply Filter</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-filter-dialog/product-filter-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/product-filter-dialog/product-filter-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductFilterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterDialogComponent", function() { return ProductFilterDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProductFilterDialogComponent = /** @class */ (function () {
    function ProductFilterDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProductFilterDialogComponent.prototype.ngOnInit = function () {
    };
    ProductFilterDialogComponent.prototype.applyFilterClick = function () {
        this.dialogRef.close();
    };
    ProductFilterDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-filter-dialog',
            template: __webpack_require__(/*! ./product-filter-dialog.component.html */ "./src/app/components/product-filter-dialog/product-filter-dialog.component.html"),
            styles: [__webpack_require__(/*! ./product-filter-dialog.component.css */ "./src/app/components/product-filter-dialog/product-filter-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProductFilterDialogComponent);
    return ProductFilterDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/product-filter-mobile/product-filter-mobile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/product-filter-mobile/product-filter-mobile.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product-filter-mobile/product-filter-mobile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/product-filter-mobile/product-filter-mobile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-sm-6\">\n\t<button mat-raised-button class=\"pull-left\" (click)=\"openDialog()\"><i class=\"fas fa-filter\"></i> Filter</button>\n</div>"

/***/ }),

/***/ "./src/app/components/product-filter-mobile/product-filter-mobile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/product-filter-mobile/product-filter-mobile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductFilterMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterMobileComponent", function() { return ProductFilterMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_filter_dialog_product_filter_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-filter-dialog/product-filter-dialog.component */ "./src/app/components/product-filter-dialog/product-filter-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductFilterMobileComponent = /** @class */ (function () {
    function ProductFilterMobileComponent(dialog) {
        this.dialog = dialog;
        this.filterControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ProductFilterMobileComponent.prototype.ngOnInit = function () {
    };
    ProductFilterMobileComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_product_filter_dialog_product_filter_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProductFilterDialogComponent"], { width: '500px' });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('dialog is closed');
        });
    };
    ProductFilterMobileComponent.prototype.onResize = function (event) {
        var size = event.target.innerWidth; // window width
        if (size >= 992) {
            this.dialog.closeAll();
        }
    };
    ProductFilterMobileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-filter-mobile',
            template: __webpack_require__(/*! ./product-filter-mobile.component.html */ "./src/app/components/product-filter-mobile/product-filter-mobile.component.html"),
            styles: [__webpack_require__(/*! ./product-filter-mobile.component.css */ "./src/app/components/product-filter-mobile/product-filter-mobile.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProductFilterMobileComponent);
    return ProductFilterMobileComponent;
}());



/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside.filter-aside{\r\n\tpadding-left: 0px;\r\n}\r\n\r\nh5.category-title-name{\r\n\tfont-weight: 700;\t\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.categories_wrap{\r\n\tpadding: 15px;\r\n\tborder-color: gray;\r\n\tborder-width: 1px;\r\n\tborder-radius: 4px;\r\n\tmin-height: 200px;\r\n\tborder-style: solid;\r\n\tmargin: 15px 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"widget-area col-md-3 hidden-sm hidden-xs filter-aside\">\r\n\t<div class=\"categories_wrap\">\r\n\t\t<div>\r\n\t\t\t<h5 class=\"category-title-name\">Categories</h5>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<app-price-filter></app-price-filter>\r\n\t<app-shipping-filter></app-shipping-filter>\r\n</aside>"

/***/ }),

/***/ "./src/app/components/product-filter/product-filter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-filter/product-filter.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent() {
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/components/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/components/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/product-listing-template/product-listing-template.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/product-listing-template/product-listing-template.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.products {\r\n\tmargin: 0 0 1em;\r\n\tpadding: 0;\r\n\tlist-style: none outside;\r\n\tclear: both;\r\n}\r\n\r\ndiv.header_title_wrap{\r\n\tmargin-top: 20px;\r\n\ttext-align: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-image: url('http://via.placeholder.com/1800x180');\r\n\tbackground-position: center;\r\n\tmin-height: 180px;\r\n}\r\n\r\ndiv.header_title_description{\r\n\tmargin: auto;\r\n\tmax-width: 900px;\r\n}"

/***/ }),

/***/ "./src/app/components/product-listing-template/product-listing-template.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/product-listing-template/product-listing-template.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<app-breadcrumb></app-breadcrumb>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"header_title_wrap\">\r\n\t\t\t<div class=\"header_title_name\">\r\n\t\t\t\t<h1>Area Rugs & Outdoor Rugs</h1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"header_title_description\">\r\n\t\t\t\tJust like what the rug said to the floor, here at HipVan, we've got you covered too! Feel at ease and at home with our wide selection of rugs &amp; mats. Find your favourite picks from our extensive range of patterns and designs. \r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<app-product-filter></app-product-filter>\r\n\t\t<div class=\"col-md-9 sidebar-left\">\r\n\t\t\t<app-product-sort></app-product-sort>\r\n\t\t\t<div class=\"row hidden-md hidden-lg\">\r\n\t\t\t\t<app-product-filter-mobile></app-product-filter-mobile>\r\n\t\t\t\t<app-product-sort-mobile></app-product-sort-mobile>\r\n\t\t\t</div>\r\n\t\t\t<div #productListingBox class=\"row\">\r\n\t\t\t\t<ul class=\"products columns-4\">\r\n\t\t\t\t\t<app-product [product]=\"product\" *ngFor=\"let product of productList\" [width]=\"productWidthSize\"></app-product>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<app-product-pagination></app-product-pagination>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/product-listing-template/product-listing-template.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/product-listing-template/product-listing-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductListingTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingTemplateComponent", function() { return ProductListingTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
/* harmony import */ var _enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/sort-element.enum */ "./src/app/enums/sort-element.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductListingTemplateComponent = /** @class */ (function () {
    function ProductListingTemplateComponent(_productListingStoreService) {
        var _this = this;
        this._productListingStoreService = _productListingStoreService;
        this.productList = [];
        this.productWidthSize = 250;
        this.priceFilterArray = [];
        this.shippingFilter = 0;
        this.pageNum = 1;
        this.sort = _enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_5__["SortElement"].Featured;
        Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe(function (event) {
            _this.adjustProductWidth();
        });
        this.priceFilterSubscription =
            this._productListingStoreService.priceChange$.subscribe(function (priceFilterArray) { return _this.priceFilterHandler(priceFilterArray); });
        this.shippingFilterSubscription =
            this._productListingStoreService.shippingChange$.subscribe(function (shippingFilter) { return _this.shippingFilterHandler(shippingFilter); });
        this.paginationSubscription = this._productListingStoreService.pignationChange$.subscribe(function (pageNum) { return _this.paginationHandler(pageNum); });
        this.sortSubscription = this._productListingStoreService.sortChange$.subscribe(function (sort) { return _this.sortingHandler(sort); });
    }
    ProductListingTemplateComponent_1 = ProductListingTemplateComponent;
    ProductListingTemplateComponent.prototype.priceFilterHandler = function (priceFilterArray) {
        console.log(priceFilterArray);
        this.priceFilterArray = priceFilterArray;
    };
    ProductListingTemplateComponent.prototype.shippingFilterHandler = function (shippingFilter) {
        console.log(shippingFilter);
        this.shippingFilter = shippingFilter;
    };
    ProductListingTemplateComponent.prototype.paginationHandler = function (pageNum) {
        console.log(pageNum);
        this.pageNum = pageNum;
    };
    ProductListingTemplateComponent.prototype.sortingHandler = function (sortElement) {
        console.log(sortElement);
        this.sort = sortElement;
    };
    ProductListingTemplateComponent.prototype.ngOnInit = function () {
        var c1 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Colour"]();
        c1.colourName = 'Green';
        c1.imageIconUrl = 'http://via.placeholder.com/25x25';
        var c2 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Colour"]();
        c2.colourName = 'Red';
        c2.imageIconUrl = 'http://via.placeholder.com/25x25';
        var c3 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Colour"]();
        c3.colourName = 'Blue';
        c3.imageIconUrl = 'http://via.placeholder.com/25x25';
        var p1 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        p1.productName = 'Cleo Floor Lamp';
        p1.productCode = 'cleo';
        p1.usualPrice = 139;
        p1.imageUrl = 'http://via.placeholder.com/250x150';
        p1.discount = true;
        p1.discountPrice = 120;
        p1.colourList.push(c1, c2, c3);
        this.productList.push(p1);
        var p2 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Product"]();
        p2.productName = 'Cleo Floor Lamp1';
        p2.productCode = 'cleo';
        p2.usualPrice = 139;
        p2.imageUrl = 'http://via.placeholder.com/250x150';
        p2.discount = true;
        p2.discountPrice = 120;
        p2.colourList.push(c1, c2, c3);
        this.productList.push(p2);
        for (var i = 0; i < 10; i++) {
            var p3 = new _product_product_component__WEBPACK_IMPORTED_MODULE_1__["Product"]();
            p3.productName = 'Cleo Floor Lamp1';
            p3.productCode = 'cleo';
            p3.usualPrice = 139;
            p3.imageUrl = 'http://via.placeholder.com/250x150';
            p3.discount = true;
            p3.discountPrice = 120;
            p3.colourList.push(c1, c2, c3);
            this.productList.push(p3);
        }
        console.log(p1.colourList);
    };
    ProductListingTemplateComponent.prototype.ngOnDestroy = function () {
        this.priceFilterSubscription.unsubscribe();
        this.shippingFilterSubscription.unsubscribe();
        this.paginationSubscription.unsubscribe();
        this.sortSubscription.unsubscribe();
    };
    ProductListingTemplateComponent.prototype.ngAfterContentInit = function () {
        this.adjustProductWidth();
    };
    ProductListingTemplateComponent.prototype.adjustProductWidth = function () {
        var boxSize = this.productListingBox.nativeElement.offsetWidth;
        var numOfBoxes = Math.floor(boxSize / ProductListingTemplateComponent_1.maxBoxSize);
        var spaceLeft = boxSize % ProductListingTemplateComponent_1.maxBoxSize;
        var percentageSpaceLeft = spaceLeft / ProductListingTemplateComponent_1.maxBoxSize;
        var canSqueeze = percentageSpaceLeft > 0.75;
        if (canSqueeze) {
            numOfBoxes = numOfBoxes + 1;
        }
        this.productWidthSize = (boxSize / numOfBoxes) - 15;
    };
    ProductListingTemplateComponent.maxBoxSize = 250;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productListingBox'),
        __metadata("design:type", Object)
    ], ProductListingTemplateComponent.prototype, "productListingBox", void 0);
    ProductListingTemplateComponent = ProductListingTemplateComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-listing-template',
            template: __webpack_require__(/*! ./product-listing-template.component.html */ "./src/app/components/product-listing-template/product-listing-template.component.html"),
            styles: [__webpack_require__(/*! ./product-listing-template.component.css */ "./src/app/components/product-listing-template/product-listing-template.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_4__["ProductListingStoreService"]])
    ], ProductListingTemplateComponent);
    return ProductListingTemplateComponent;
    var ProductListingTemplateComponent_1;
}());



/***/ }),

/***/ "./src/app/components/product-pagination/product-pagination.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/product-pagination/product-pagination.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.pagination-wrap{\r\n\ttext-align: center;\r\n\tmargin: 20px 0px;\r\n}\r\n\r\nul.pagination{\r\n\tvertical-align: bottom;\r\n}"

/***/ }),

/***/ "./src/app/components/product-pagination/product-pagination.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product-pagination/product-pagination.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pagination-wrap\">\n\t<ul class=\"pagination\">\n\t\t<li><a href=\"#\"><</a></li>\n\t\t<li *ngFor=\"let pageNum of numOfPages\" [ngClass]=\"{'active': currentPageNum === pageNum}\"><a [routerLink]=\"\" (click)=\"onPageSelected(pageNum)\">{{pageNum}}</a></li>\n\t\t<li><a href=\"#\">></a></li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/components/product-pagination/product-pagination.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product-pagination/product-pagination.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPaginationComponent", function() { return ProductPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductPaginationComponent = /** @class */ (function () {
    function ProductPaginationComponent(fb, _productListingStoreService) {
        this.fb = fb;
        this._productListingStoreService = _productListingStoreService;
        this.numOfPages = [1, 2, 3, 4, 5];
        this.currentPageNum = 3;
    }
    ProductPaginationComponent.prototype.ngOnInit = function () {
    };
    ProductPaginationComponent.prototype.onPageSelected = function (pageNumSelected) {
        this._productListingStoreService.changePagination(pageNumSelected);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductPaginationComponent.prototype, "numOfPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductPaginationComponent.prototype, "currentPageNum", void 0);
    ProductPaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-pagination',
            template: __webpack_require__(/*! ./product-pagination.component.html */ "./src/app/components/product-pagination/product-pagination.component.html"),
            styles: [__webpack_require__(/*! ./product-pagination.component.css */ "./src/app/components/product-pagination/product-pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_1__["ProductListingStoreService"]])
    ], ProductPaginationComponent);
    return ProductPaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/product-sort-mobile/product-sort-mobile.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/product-sort-mobile/product-sort-mobile.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product-sort-mobile/product-sort-mobile.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/product-sort-mobile/product-sort-mobile.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-6 col-sm-6\">\r\n\t\t<mat-form-field class=\"pull-right\">\r\n\t\t\t<mat-select placeholder=\"Sort by:\" [formControl]=\"sortByControl\" [style.width]=\"'100%'\">\r\n\t\t\t\t<mat-option *ngFor=\"let sort of sortElements()\" [value]=\"sort\">\r\n\t\t\t      {{sort}}\r\n\t\t\t    </mat-option>\r\n\t\t\t</mat-select>\r\n\t\t</mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/components/product-sort-mobile/product-sort-mobile.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product-sort-mobile/product-sort-mobile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductSortMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSortMobileComponent", function() { return ProductSortMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/sort-element.enum */ "./src/app/enums/sort-element.enum.ts");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductSortMobileComponent = /** @class */ (function () {
    function ProductSortMobileComponent(fb, _productListingStoreService) {
        this.fb = fb;
        this._productListingStoreService = _productListingStoreService;
        this.sortByControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Featured');
    }
    ProductSortMobileComponent.prototype.ngOnInit = function () {
        this.onChanges();
    };
    ProductSortMobileComponent.prototype.ngOnDestroy = function () {
        this.sortSubscription.unsubscribe();
    };
    ProductSortMobileComponent.prototype.onChanges = function () {
        var _this = this;
        this.sortSubscription = this.sortByControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(50))
            .subscribe(function (val) {
            var selectedSort = val;
            _this._productListingStoreService.changeSorting(selectedSort);
        });
    };
    ProductSortMobileComponent.prototype.sortElements = function () {
        return Object.keys(_enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_3__["SortElement"]);
    };
    ProductSortMobileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-sort-mobile',
            template: __webpack_require__(/*! ./product-sort-mobile.component.html */ "./src/app/components/product-sort-mobile/product-sort-mobile.component.html"),
            styles: [__webpack_require__(/*! ./product-sort-mobile.component.css */ "./src/app/components/product-sort-mobile/product-sort-mobile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_4__["ProductListingStoreService"]])
    ], ProductSortMobileComponent);
    return ProductSortMobileComponent;
}());



/***/ }),

/***/ "./src/app/components/product-sort/product-sort.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-sort/product-sort.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-wrap{\r\n\tmargin: 15px 0px;\t\r\n}\r\n.filter-desktop{\r\n\tfloat: right;\r\n\tdisplay: inline-block;\r\n}\r\ndiv.filter_name{\r\n\tdisplay: inline-block;\r\n}\r\ndiv.sort-option-wrap{\r\n\tdisplay: inline-block;\r\n}\r\nul.sort-options{\r\n\tdisplay: inline-block;\r\n\twidth: auto;\r\n\tlist-style-type: none;\r\n\tmargin: 0px;\r\n\tvertical-align: middle;\r\n}\r\nul.sort-options li{\r\n\tfloat: left;\r\n\tmargin: 0px 5px;\r\n}\r\nul.sort-options li.active{\r\n\tcolor: #745cf9;\r\n\tfont-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/components/product-sort/product-sort.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-sort/product-sort.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-wrap\">\r\n\t<div class=\"filter-desktop hidden-sm hidden-xs\">\r\n\t\t<div class=\"filter_name\">Sort By: </div>\r\n\t\t<div class=\"sort-option-wrap\">\r\n\t\t\t<ul class=\"sort-options\" *ngFor=\"let item of sortElements()\">\r\n\t\t\t\t<li><a [routerLink]=\"\" (click)=\"onSortSelected(item)\">{{item}}</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/product-sort/product-sort.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-sort/product-sort.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSortComponent", function() { return ProductSortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
/* harmony import */ var _enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/sort-element.enum */ "./src/app/enums/sort-element.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductSortComponent = /** @class */ (function () {
    function ProductSortComponent(_productListingStoreService) {
        this._productListingStoreService = _productListingStoreService;
    }
    ProductSortComponent.prototype.ngOnInit = function () {
    };
    ProductSortComponent.prototype.onSortSelected = function (sortElementString) {
        var selectedSort = sortElementString;
        this._productListingStoreService.changeSorting(selectedSort);
    };
    ProductSortComponent.prototype.sortElements = function () {
        return Object.keys(_enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_2__["SortElement"]);
    };
    ProductSortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-sort',
            template: __webpack_require__(/*! ./product-sort.component.html */ "./src/app/components/product-sort/product-sort.component.html"),
            styles: [__webpack_require__(/*! ./product-sort.component.css */ "./src/app/components/product-sort/product-sort.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_1__["ProductListingStoreService"]])
    ], ProductSortComponent);
    return ProductSortComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.product{\r\n\tfloat: left;\r\n\tmargin: 7px 5px\t;\r\n\tpadding: 0 5px;\r\n\ttext-align: center;\r\n}\r\n\r\nh5.product_title{\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.product_amount_wrap{\r\n\ttext-align: center;\r\n}\r\n\r\ndiv.colours_wrap{\r\n\ttext-align: left;\t\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tleft: -50%;\r\n}\r\n\r\nul.colours{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tposition: relative;\r\n\tleft: 50%;\r\n}\r\n\r\nli.colour{\r\n\tfloat: left;\r\n\tmargin: 0px;\r\n\tpadding: 0 1px;\r\n\tposition: relative;\r\n}"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"product\" [style.width.px]=\"width\">\n\t<div>\n\t\t<div>\n\t\t\t<a href=\"/products/{{product.productName}}\">\n\t\t\t\t<img alt=\"{{product.productName}}\" src=\"{{product.imageUrl}}\">\n\t\t\t</a>\n\t\t</div>\n\t\t<div>\n\t\t\t<a href=\"/products/{{product.productName}}\">\n\t\t\t\t<h5 class=\"product_title\">{{product.productName}}</h5>\n\t\t\t</a>\n\t\t\t<div class=\"product_amount_wrap\">\n\t\t\t\t<span class=\"product_price\">\n\t\t\t\t\t<del *ngIf=\"product.discount\">${{product.usualPrice}}</del>\n\t\t\t\t\t\n\t\t\t\t\t<span class=\"product_amount\" *ngIf=\"product.discount\">\n\t\t\t\t\t\t${{product.discountPrice}}\n\t\t\t\t\t</span>\n\t\t\t\t\t\n\t\t\t\t\t<span class=\"product_amount\" *ngIf=\"!product.discount\">\n\t\t\t\t\t\t${{product.usualPrice}}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"colours_wrap\">\n\t\t\t\t<ul class=\"colours\">\n\t\t\t\t\t<li class=\"colour\" *ngFor=\"let colour of product.colourList\"><img alt=\"{{colour.colourName}}\" src=\"{{colour.imageIconUrl}}\"/></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</li>"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent, Product, Colour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.width = 250;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Product)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductComponent.prototype, "width", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());

var Product = /** @class */ (function () {
    function Product() {
        this.colourList = [];
        this.selectedColour = null;
    }
    return Product;
}());

var Colour = /** @class */ (function () {
    function Colour() {
    }
    return Colour;
}());



/***/ }),

/***/ "./src/app/components/shipping-filter/shipping-filter.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/shipping-filter/shipping-filter.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.shipping-filter-wrap{\r\n\tpadding: 15px;\r\n\tborder-color: gray;\r\n\tborder-width: 1px;\r\n\tborder-radius: 4px;\r\n\tmin-height: 120px;\r\n\tborder-style: solid;\r\n\tmargin: 15px 0px;\r\n}\r\n\r\ndiv.filter-title-box{\r\n\tdisplay: inline-block;\r\n}\r\n\r\nh5.filter-title-name{\r\n\tfont-weight: 700;\t\r\n\tmargin: 0px;\r\n}\r\n\r\ndiv.shipping-body-wrap{\r\n\tpadding: 5px 15px;\r\n}"

/***/ }),

/***/ "./src/app/components/shipping-filter/shipping-filter.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/shipping-filter/shipping-filter.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shipping-filter-wrap\">\n\t<div class=\"shipping-header-wrap\">\n\t\t<div class=\"filter-title-box\">\n\t\t\t<h5 class=\"filter-title-name\">Ships in (days): {{form.value.single}}</h5>\n\t\t</div>\n\t\t<!-- <div class=\"filter-clear-box\">\n\t\t\tClear\n\t\t</div> -->\n\t</div>\n\t\n\t<div class=\"shipping-body-wrap\">\n\t\t<form [formGroup]=\"form\">\n\t\t    <nouislider [config]=\"shippingRangeConfig\" [connect]=\"true\" [formControl]=\"form.controls.single\"></nouislider>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/shipping-filter/shipping-filter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/shipping-filter/shipping-filter.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShippingFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFilterComponent", function() { return ShippingFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product-listing-store.service */ "./src/app/services/product-listing-store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShippingFilterComponent = /** @class */ (function () {
    function ShippingFilterComponent(fb, _productListingStoreService) {
        this.fb = fb;
        this._productListingStoreService = _productListingStoreService;
        this.shippingRangeConfig = {
            behaviour: 'drag',
            connect: 'true',
            keyboard: true,
            step: 5,
            range: {
                min: 0,
                max: 60,
            },
            pips: {
                mode: 'range',
                density: 100,
                stepped: true
            }
        };
    }
    ShippingFilterComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({ 'single': [60] });
        this.onChanges();
    };
    ShippingFilterComponent.prototype.ngOnDestroy = function () {
        this.shippingSubscription.unsubscribe();
    };
    ShippingFilterComponent.prototype.onChanges = function () {
        var _this = this;
        this.shippingSubscription = this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200))
            .subscribe(function (val) {
            _this._productListingStoreService.changeShipping(val.single);
        });
    };
    ShippingFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping-filter',
            template: __webpack_require__(/*! ./shipping-filter.component.html */ "./src/app/components/shipping-filter/shipping-filter.component.html"),
            styles: [__webpack_require__(/*! ./shipping-filter.component.css */ "./src/app/components/shipping-filter/shipping-filter.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_product_listing_store_service__WEBPACK_IMPORTED_MODULE_2__["ProductListingStoreService"]])
    ], ShippingFilterComponent);
    return ShippingFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/template/template.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/template/template.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar{\r\n\toverflow: hidden;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  padding-right: 30px;\r\n}\r\n\r\n.sticky + #content {\r\n  padding-top: 60px;\r\n}\r\n\r\n#content {\r\n  padding: 16px;\r\n}"

/***/ }),

/***/ "./src/app/components/template/template.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/template/template.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<div>\r\n\t<app-header></app-header>\r\n</div>\r\n\r\n<div>\r\n\t<router-outlet name=\"content\"></router-outlet>\r\n</div>\r\n\r\n<div>\r\n\t<app-footer></app-footer>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/template/template.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/template/template.component.ts ***!
  \***********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.prototype.ngOnDestroy = function () {
    };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/components/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/components/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\t<form #userForm=\"ngForm\" (ngSubmit)=\"save(userForm.value)\">\r\n\t\t<mat-card-header>\r\n    \t\t<mat-card-title><h2>{{user.name ? 'Edit' : 'Add'}} Car</h2></mat-card-title>\r\n    \t</mat-card-header>\r\n    \t\r\n    \t<mat-card-content>\r\n      <input type=\"hidden\" name=\"href\" [(ngModel)]=\"user.href\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"User Name\" [(ngModel)]=\"user.name\"\r\n               required name=\"name\" #name>\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" type=\"submit\"\r\n              [disabled]=\"!userForm.form.valid\">Save</button>\r\n      <button mat-raised-button color=\"secondary\" (click)=\"remove(user.href)\"\r\n              *ngIf=\"user.href\" type=\"button\">Delete</button>\r\n      <a mat-button routerLink=\"/user-list\">Cancel</a>\r\n    </mat-card-actions>\r\n    <mat-card-footer>\r\n      <div class=\"giphy\">\r\n        <img src=\"{{user.giphyUrl}}\" alt=\"{{user.name}}\">\r\n      </div>\r\n    </mat-card-footer>\r\n\t</form> \r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = {};
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.userService.get(id).subscribe(function (user) {
                    if (user) {
                        _this.user = user;
                        _this.user.href = user._links.self.href;
                    }
                    else {
                        console.log("user with id'" + id + "' not found");
                        _this.gotoList();
                    }
                });
            }
        });
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserEditComponent.prototype.gotoList = function () {
        this.router.navigate(['/user-list']);
    };
    UserEditComponent.prototype.save = function (form) {
        var _this = this;
        this.userService.save(form).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    UserEditComponent.prototype.remove = function (href) {
        var _this = this;
        this.userService.remove(href).subscribe(function (result) {
            _this.gotoList();
        }, function (error) { return console.error(error); });
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/components/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/components/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>User List</mat-card-header>\n  <mat-card-content>\n    <mat-list>\n      <mat-list-item *ngFor=\"let user of users\">\n        <!-- <img mat-list-avatar src=\"{{user.giphyUrl}}\" alt=\"{{user.name}}\"> -->\n        <h3 mat-line>\n        \t<a mat-button [routerLink]=\"['/user-edit', user.userId]\">{{user.name}}</a>\n        </h3>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  <button mat-fab color=\"primary\" [routerLink]=\"['/user-add']\">Add</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/enums/sort-element.enum.ts":
/*!********************************************!*\
  !*** ./src/app/enums/sort-element.enum.ts ***!
  \********************************************/
/*! exports provided: SortElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortElement", function() { return SortElement; });
var SortElement;
(function (SortElement) {
    SortElement["Featured"] = "Featured";
    SortElement["Shipping"] = "Shipping";
    SortElement["Price"] = "Price";
    SortElement["Popular"] = "Popular";
})(SortElement || (SortElement = {}));


/***/ }),

/***/ "./src/app/helpers/http.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/http.interceptor.ts ***!
  \*********************************************/
/*! exports provided: HttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptor", function() { return HttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment.dev */ "./src/environments/environment.dev.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpInterceptor = /** @class */ (function () {
    function HttpInterceptor() {
        this.base64EncodedString = btoa('admin:password');
    }
    /*headers = new HttpHeaders({'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='});*/
    HttpInterceptor.prototype.intercept = function (req, next) {
        var url = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        req = req.clone({
            headers: req.headers,
            url: url + req.url,
            responseType: 'json',
            method: req.method
        });
        return next.handle(req);
    };
    HttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpInterceptor);
    return HttpInterceptor;
}());



/***/ }),

/***/ "./src/app/pipe/capitalize.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipe/capitalize.pipe.ts ***!
  \*****************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, words) {
        if (words === void 0) { words = false; }
        if (value) {
            if (words) {
                return value.replace(/\b\w/g, function (first) { return first.toLocaleUpperCase(); });
            }
            else {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/services/product-listing-store.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/product-listing-store.service.ts ***!
  \***********************************************************/
/*! exports provided: ProductListingStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingStoreService", function() { return ProductListingStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/sort-element.enum */ "./src/app/enums/sort-element.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListingStoreService = /** @class */ (function () {
    function ProductListingStoreService() {
        this._priceFilterSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._shippingFilterSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._paginationSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._sortSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_enums_sort_element_enum__WEBPACK_IMPORTED_MODULE_2__["SortElement"].Featured);
        this.priceChange$ = this._priceFilterSource.asObservable();
        this.shippingChange$ = this._shippingFilterSource.asObservable();
        this.pignationChange$ = this._paginationSource.asObservable();
        this.sortChange$ = this._sortSource.asObservable();
    }
    ProductListingStoreService.prototype.changePrice = function (priceFilterArray) {
        this._priceFilterSource.next(priceFilterArray);
    };
    ProductListingStoreService.prototype.changeShipping = function (shippingFilter) {
        this._shippingFilterSource.next(shippingFilter);
    };
    ProductListingStoreService.prototype.changePagination = function (pageNum) {
        this._paginationSource.next(pageNum);
    };
    ProductListingStoreService.prototype.changeSorting = function (selectedSort) {
        this._sortSource.next(selectedSort);
    };
    ProductListingStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductListingStoreService);
    return ProductListingStoreService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.USER_API = 'user';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.USER_API);
    };
    UserService.prototype.get = function (id) {
        return this.http.get(this.USER_API + '/' + id);
    };
    UserService.prototype.remove = function (href) {
        return this.http.delete(href);
    };
    UserService.prototype.save = function (user) {
        var result;
        if (user['href']) {
            result = this.http.put(user.href, user);
        }
        else {
            result = this.http.post(this.USER_API, user);
        }
        return result;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    envName: 'dev',
    baseUrl: 'http://localhost:8080/ziumlight/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");




if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\JJck-development\ziumlightUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map