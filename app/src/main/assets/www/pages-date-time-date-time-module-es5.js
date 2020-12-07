(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-date-time-date-time-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/date-time/date-time.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/date-time/date-time.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header titulo=\"DateTime\"></app-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list>\r\n\r\n        <ion-list-header>\r\n            <ion-label>Datos de nacimiento</ion-label>\r\n        </ion-list-header>\r\n\r\n\r\n\r\n\r\n        <ion-item>\r\n            <ion-label>Fecha de Nacimiento</ion-label>\r\n            <ion-datetime placeholder=\"Nacimiento\" display-format=\"YYYY MMMM DD\" cancelText=\"Cancelar!!!\" [ngModel]=\"fechaNaci.toISOString\" (ionChange)=\"cambioFecha($event)\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-list-header>\r\n            <ion-label>Restricciones</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label>Min y Max</ion-label>\r\n            <ion-datetime placeholder=\"yyyy-mm-dd\" display-format=\"YYYY MMMM DD\" min=\"2015-01-01\" max=\"2015-12-31\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label>Años</ion-label>\r\n            <ion-datetime placeholder=\"YYYY\" display-format=\"YYYY\" min=\"2015\" max=\"2025\" value=\"2020\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Custom Date</ion-label>\r\n            <ion-datetime [pickerOptions]=\"customPickerOptions\" [(ngModel)]=\"customDate\"></ion-datetime>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.module.ts ***!
  \*****************************************************/
/*! exports provided: DateTimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function() { return DateTimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-time.page */ "./src/app/pages/date-time/date-time.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]
    }
];
var DateTimePageModule = /** @class */ (function () {
    function DateTimePageModule() {
    }
    DateTimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
        })
    ], DateTimePageModule);
    return DateTimePageModule;
}());



/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/date-time/date-time.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/date-time/date-time.page.ts ***!
  \***************************************************/
/*! exports provided: DateTimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePage", function() { return DateTimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateTimePage = /** @class */ (function () {
    function DateTimePage() {
        this.fechaNaci = new Date();
    }
    DateTimePage.prototype.ngOnInit = function () {
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function (evento) {
                        console.log('Clicked Save!');
                        console.log(evento);
                    }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    };
    DateTimePage.prototype.cambioFecha = function (event) {
        console.log('ionChange', event);
        console.log('Date', new Date(event.detail.value));
    };
    DateTimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-time',
            template: __webpack_require__(/*! raw-loader!./date-time.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/date-time/date-time.page.html"),
            styles: [__webpack_require__(/*! ./date-time.page.scss */ "./src/app/pages/date-time/date-time.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateTimePage);
    return DateTimePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-date-time-date-time-module-es5.js.map