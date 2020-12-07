(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fab-fab-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/fab/fab.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/fab/fab.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"Fabs\"></app-header>\r\n\r\n<ion-content>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"facebook\">\r\n                <ion-icon name=\"logo-facebook\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"twitter\">\r\n                <ion-icon name=\"logo-twitter\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"youtube\">\r\n                <ion-icon name=\"logo-youtube\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n\r\n        <ion-fab-list side=\"start\">\r\n            <ion-fab-button color=\"vimeo\">\r\n                <ion-icon name=\"logo-vimeo\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"google\">\r\n                <ion-icon name=\"logo-google\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"github\">\r\n                <ion-icon name=\"logo-github\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n\r\n    </ion-fab>\r\n\r\n\r\n\r\n\r\n\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let i of data; let index = index\">\r\n            Item {{index + 1}}\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-toolbar color=\"google\">\r\n        <ion-title>Este es el footer</ion-title>\r\n    </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/fab/fab.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.module.ts ***!
  \*****************************************/
/*! exports provided: FabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab.page */ "./src/app/pages/fab/fab.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]
    }
];
let FabPageModule = class FabPageModule {
};
FabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
    })
], FabPageModule);



/***/ }),

/***/ "./src/app/pages/fab/fab.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/fab/fab.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhYi9mYWIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/fab/fab.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/fab/fab.page.ts ***!
  \***************************************/
/*! exports provided: FabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPage", function() { return FabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FabPage = class FabPage {
    constructor() {
        this.data = Array(10);
    }
    ngOnInit() {
    }
};
FabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fab',
        template: __webpack_require__(/*! raw-loader!./fab.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/fab/fab.page.html"),
        styles: [__webpack_require__(/*! ./fab.page.scss */ "./src/app/pages/fab/fab.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FabPage);



/***/ })

}]);
//# sourceMappingURL=pages-fab-fab-module-es2015.js.map