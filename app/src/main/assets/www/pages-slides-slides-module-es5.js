(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/slides/slides.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/slides/slides.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border [ngClass]=\"ocultar\">\r\n    <ion-toolbar>\r\n        <img src=\"/assets/slides/user-6.svg\" class=\"avatar animated fadeIn\">\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n    <ion-slides pager=\"true\" class=\"slide-full\">\r\n\r\n        <ion-slide *ngFor=\"let slide of slides\">\r\n            <ion-card mode=\"ios\">\r\n                <img [src]=\"slide.img\" class=\"slide-image\">\r\n\r\n                <ion-card-header>\r\n                    <ion-card-title> {{ slide. titulo }} </ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                    {{ slide.desc }}\r\n                </ion-card-content>\r\n\r\n            </ion-card>\r\n\r\n        </ion-slide>\r\n\r\n        <ion-slide>\r\n            <ion-button expand=\"full\" color=\"primary\" fill=\"clear\" (click)=\"onClick()\">\r\n                comenzar!\r\n            </ion-button>\r\n        </ion-slide>\r\n\r\n    </ion-slides>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/slides/slides.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.module.ts ***!
  \***********************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "./src/app/pages/slides/slides.page.ts");







var routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]
    }
];
var SlidesPageModule = /** @class */ (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/slides/slides.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/slides/slides.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-full {\n  height: 100% !important;\n}\n\nion-card {\n  overflow: unset !important;\n}\n\nion-card {\n  height: 200px;\n  width: 300px;\n}\n\n.slide-image {\n  width: 100px;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card-header {\n  position: relative;\n  top: -50px;\n}\n\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n\n.avatar {\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2xpZGVzL0M6XFxVc2Vyc1xcZ3VpbGxcXERlc2t0b3BcXFByaW1lci1wcm9ncmFtYS1JT05JQy9zcmNcXGFwcFxccGFnZXNcXHNsaWRlc1xcc2xpZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2xpZGVzL3NsaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2xpZGVzL3NsaWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtZnVsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zbGlkZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iLCIuc2xpZGUtZnVsbCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/slides/slides.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/slides/slides.page.ts ***!
  \*********************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ocultar = '';
        this.slides = [
            {
                img: '/assets/slides/photos.svg',
                titulo: 'Comparte Fotos',
                desc: 'Mira y comparte increíbles fotos de todo el mundo'
            },
            {
                img: '/assets/slides/music-player-2.svg',
                titulo: 'Escucha Música',
                desc: 'Toda tu música favorita está aquí'
            },
            {
                img: '/assets/slides/calendar.svg',
                titulo: 'Nunca olvides nada',
                desc: 'El mejor calendario del mundo a tu disposición'
            },
            {
                img: '/assets/slides/placeholder-1.svg',
                titulo: 'Tu ubicación',
                desc: 'Siempre sabremos donde estás!'
            }
        ];
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage.prototype.onClick = function () {
        this.ocultar = 'animated fadeOut fast';
        this.navCtrl.navigateBack('/');
    };
    SlidesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! raw-loader!./slides.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/slides/slides.page.html"),
            styles: [__webpack_require__(/*! ./slides.page.scss */ "./src/app/pages/slides/slides.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SlidesPage);
    return SlidesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-slides-slides-module-es5.js.map