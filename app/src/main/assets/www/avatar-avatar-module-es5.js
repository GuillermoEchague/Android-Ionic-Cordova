(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avatar-avatar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/avatar/avatar.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/avatar/avatar.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Avatar</ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-avatar>\r\n                <img src=\"/assets/stan-lee.jpg\">\r\n            </ion-avatar>\r\n\r\n        </ion-buttons>\r\n\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-chip color=\"primary\" *ngFor=\"let i of [1,1,1,1,1,1]\">\r\n        <ion-avatar>\r\n            <img src=\"/assets/stan-lee.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>Stan Lee</ion-label>\r\n    </ion-chip>\r\n\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let i of [1,1,1,1,1,1,1]\">\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"/assets/stan-lee.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>Stan Lee</ion-label>\r\n\r\n\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/avatar/avatar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.module.ts ***!
  \***********************************************/
/*! exports provided: AvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function() { return AvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar.page */ "./src/app/pages/avatar/avatar.page.ts");







var routes = [
    {
        path: '',
        component: _avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]
    }
];
var AvatarPageModule = /** @class */ (function () {
    function AvatarPageModule() {
    }
    AvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]]
        })
    ], AvatarPageModule);
    return AvatarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/avatar/avatar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F2YXRhci9hdmF0YXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/avatar/avatar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.ts ***!
  \*********************************************/
/*! exports provided: AvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPage", function() { return AvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvatarPage = /** @class */ (function () {
    function AvatarPage() {
    }
    AvatarPage.prototype.ngOnInit = function () {
    };
    AvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! raw-loader!./avatar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/avatar/avatar.page.html"),
            styles: [__webpack_require__(/*! ./avatar.page.scss */ "./src/app/pages/avatar/avatar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvatarPage);
    return AvatarPage;
}());



/***/ })

}]);
//# sourceMappingURL=avatar-avatar-module-es5.js.map