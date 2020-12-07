(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/botones/botones.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n\r\n        <ion-title>Botones</ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button color=\"primary\">\r\n                <ion-icon name=\"star\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button color=\"primary\">\r\n                <ion-icon name=\"heart\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <!-- Botones normales-->\r\n    <ion-button size=\"small\" expand=\"full\">Small</ion-button>\r\n    <ion-button size=\"default\" expand=\"full\">Default</ion-button>\r\n    <ion-button size=\"large\" expand=\"full\">Large</ion-button>\r\n\r\n    <!-- Anchor-->\r\n    <ion-button class=\"top-20\" expand=\"full\" routerLink=\"/alert\" color=\"tertiary\">\r\n        Anchor\r\n    </ion-button>\r\n\r\n    <!-- ion-row + ion-col -->\r\n    <ion-row class=\"top-20\">\r\n        <ion-col>\r\n            <ion-button expand=\"full\" routerLink=\"/avatar\" color=\"tertiary\">\r\n                Avatar\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n            <ion-button expand=\"full\" routerLink=\"/action-sheet\" color=\"tertiary\">\r\n                Action-Sheet\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Fill -->\r\n    <ion-button class=\"top-20\" fill=\"clear\">Clear</ion-button>\r\n    <ion-button class=\"top-20\" fill=\"outline\">Outline</ion-button>\r\n    <ion-button class=\"top-20\" fill=\"solid\">Solid</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/botones/botones.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");







const routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]
    }
];
let BotonesPageModule = class BotonesPageModule {
};
BotonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
    })
], BotonesPageModule);



/***/ }),

/***/ "./src/app/pages/botones/botones.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/botones/botones.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BotonesPage = class BotonesPage {
    constructor() { }
    ngOnInit() {
    }
};
BotonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-botones',
        template: __webpack_require__(/*! raw-loader!./botones.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html"),
        styles: [__webpack_require__(/*! ./botones.page.scss */ "./src/app/pages/botones/botones.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BotonesPage);



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module-es2015.js.map