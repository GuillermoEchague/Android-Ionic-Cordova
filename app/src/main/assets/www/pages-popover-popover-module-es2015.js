(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/popover/popover.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/popover/popover.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Popover</ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"mostrarPop($event)\">\r\n                <ion-icon name=\"contact\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-button expand=\"full\" (click)=\"mostrarPop($event)\">\r\n        <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n        <ion-label>Popover</ion-label>\r\n    </ion-button>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-toolbar color=\"primary\">\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"mostrarPop($event)\">\r\n                <ion-icon name=\"contact\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/popover/popover.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.module.ts ***!
  \*************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
    }
];
let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "./src/app/pages/popover/popover.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/popover/popover.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/popover/popover.page.ts ***!
  \***********************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");




let PopoverPage = class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() {
    }
    mostrarPop(evento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__["PopinfoComponent"],
                event: evento,
                mode: 'ios',
                backdropDismiss: false
            });
            yield popover.present();
            const { data } = yield popover.onWillDismiss();
            console.log('padre:', data);
        });
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: __webpack_require__(/*! raw-loader!./popover.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/popover/popover.page.html"),
        styles: [__webpack_require__(/*! ./popover.page.scss */ "./src/app/pages/popover/popover.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopoverPage);



/***/ })

}]);
//# sourceMappingURL=pages-popover-popover-module-es2015.js.map