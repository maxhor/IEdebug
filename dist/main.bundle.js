webpackJsonp([1,4],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerConstants; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerConstants = (function () {
    function ServerConstants() {
        this.rooturl = 'http://localhost:53823/';
        this.loginurl = 'http://localhost:53823/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        this.headers.append('Accept', 'q=0.8;application/json;q=0.9');
        //alert(window.location.href.indexOf("localhost"));
    }
    return ServerConstants;
}());
ServerConstants = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ServerConstants);

//# sourceMappingURL=constants.on_server.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_qt) {
        this._qt = _qt;
        this.qtService = _qt;
    }
    AppComponent.prototype.LoggedIn = function (event) {
        this.qtService.initUser_part1(event);
        var i = 1;
    };
    AppComponent.prototype.offLineInit = function (email) {
        this.qtService.offLineInit(email);
    };
    AppComponent.prototype.test = function () {
        var i = 0;
    };
    AppComponent.prototype.HideGallery = function () {
        debugger;
        this.qtService.bGallery = false;
    };
    AppComponent.prototype.initoverlay = function (p) {
        debugger;
        this.qtService.Gallery = p;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(384),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 304;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(314);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_qtrack_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_constants_on_server__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_navbar_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_login_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__kop_kop_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__kop_adres_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__detail_details_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__detail_artikelgallery_component__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {LocalStorageService,LOCAL_STORAGE_SERVICE_CONFIG} from 'angular-2-local-storage';













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__navigation_navbar_component__["a" /* navbar */], __WEBPACK_IMPORTED_MODULE_14__kop_kop_component__["a" /* kopcomponent */], __WEBPACK_IMPORTED_MODULE_15__kop_adres_component__["a" /* adrescomponent */], __WEBPACK_IMPORTED_MODULE_16__detail_details_component__["a" /* detailscomponent */], __WEBPACK_IMPORTED_MODULE_13__navigation_login_component__["a" /* login */], __WEBPACK_IMPORTED_MODULE_17__detail_artikelgallery_component__["a" /* artikelgallery */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataGridModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_qtrack_service__["a" /* qtService */], __WEBPACK_IMPORTED_MODULE_11__services_constants_on_server__["a" /* ServerConstants */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return artikelgallery; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Observable} from 'rxjs/observable';

var artikelgallery = (function () {
    function artikelgallery(_qtService) {
        this._qtService = _qtService;
        this.qtService = {};
        this.qtService = _qtService;
    }
    return artikelgallery;
}());
artikelgallery = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(385),
        selector: 'artikelgallery',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _a || Object])
], artikelgallery);

var _a;
//# sourceMappingURL=artikelgallery.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detailscomponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
var detailscomponent = (function () {
    function detailscomponent(_qtService) {
        this._qtService = _qtService;
        this.qtService = {};
        this.qtService = _qtService;
    }
    detailscomponent.prototype.ngAfterViewInit = function () {
        this.qtService["detail_element"] = this.detailelement;
    };
    return detailscomponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("detailtable"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], detailscomponent.prototype, "detailelement", void 0);
detailscomponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(386),
        selector: 'details-info',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _b || Object])
], detailscomponent);

var _a, _b;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(290);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//import styles from 'primeui-ng-all.min.css';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adrescomponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
var adrescomponent = (function () {
    function adrescomponent(_qtService) {
        this._qtService = _qtService;
        this.qtService = {};
        this.qtService = _qtService;
    }
    return adrescomponent;
}());
adrescomponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'adres-info',
        // providers: [qtService,HTTP_PROVIDERS],
        template: " \n   \n  <div class=\"w3-container w3-teal overlay\"  [style.cursor]=\"qtService.cursorShape\">\n  <h1 class=\"header\">{{qtService.adresheader}}</h1>\n <br>\n\n  <form [formGroup] = \"qtService.adresForm\" >\n <div   class=\"qcontentcontainer \" >\n \n\n\n <div class=\"width6col \" *ngFor = \" let ibtc=index let btc of qtService.visible_klantfields\"> \n \n <div *ngFor = \"let ifield=index let field of btc\"  > \n\n <div >\n  <label htmlFor=\"{{field.name}}\">{{field.name}}</label>\n  <input [style.width]=\"field.width\" [formControlName]=\"field.name\"  (change) =\"qtService.Changed($event)\" #allfields  \n          [type]=\"field.type\"   id=\"{{field.name}}\" class=\"qinputtext\">\n  </div>\n\n\n \n  </div>\n \n  </div>\n \n  \n  \n  \n <div style=\"text-align: center;\">\n\t\n\n\t\t\t\n\t\t\t<span ><button id=\"error\" type=\"button\" style=\"margin-top:4%;\" pButton icon=\"fa-min\" (click)=\"qtService.HideMessage()\" label=\"Ok\"></button></span>\n\t\t\n\t\t\n\t\t</div>\n  \n  </div>\n\n      \n  </form>\n  \n\n </div>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _a || Object])
], adrescomponent);

var _a;
//# sourceMappingURL=adres.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kopcomponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
var kopcomponent = (function () {
    function kopcomponent(_qtService) {
        this._qtService = _qtService;
        this.qtService = {};
        this.qtService = _qtService;
    }
    kopcomponent.prototype.test = function () {
        var i = 1;
    };
    kopcomponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this.qtService.formBuilt.subscribe(function(){let i = 1;})
        this.allfields.changes.subscribe(function () {
            _this.qtService["dom_elements"] = _this.allfields;
        });
        // this.qtService.formBuilt.subscribe(function (value)
        // { this.qtService.dom_elements = this.allfields; }
        // );
    };
    kopcomponent.prototype.copyDOM = function () {
        this.qtService["dom_elements"] = this.allfields;
    };
    return kopcomponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('allfields'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], kopcomponent.prototype, "allfields", void 0);
kopcomponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'kop-info',
        // providers: [qtService,HTTP_PROVIDERS],
        template: " \n  \n\n  <form [formGroup] = \"qtService.kopForm\" >\n <div   class=\"contentcontainer\" >\n <div class=\"horizontalsplit\" >\n\n\n <div class=\"onecol col-sm-4 col-md-3\" *ngFor = \" let ibtc=index let btc of qtService.visible_fields\"> \n \n <div *ngFor = \"let ifield=index let field of btc\"  > \n \n\n<div *ngIf=\"field.type=='text' || field.type=='number' ||field.type=='date'||field.type=='decimal' ||field.type=='checkbox' \" [hidden] = \"qtService.hidden[field.name]\">\n\n  <label htmlFor=\"{{field.name}}\">{{field.title}}</label>\n  <input  [style.width]=\"field.width\" [formControlName]=\"field.name\"  (change) =\"qtService.Changed($event)\" #allfields [class.autofocus]=\"field.getsfocus\" \n          [type]=\"field.type\"  (click) =\"test(ctrl)\" [class.dtcolm] = \"qtService.bLoggedIn\"\n          id=\"{{field.name}}\"  (mouseover)=\"qtService.showtooltip($event)\" \n                   (mouseleave)=\"qtService.hidetooltip()\" \n          class=\"inputtext\">\n  </div>\n\n  <div *ngIf=\"field.type =='listbox'\" class=\"autoComplete\" [hidden] = \"qtService.hidden[field.name]\" >\n  <label htmlFor=\"{{field.name}}\">{{field.title}}</label>\n   \n  <p-autoComplete   [suggestions]=\"qtService.autocomplete_list[field.lbcount]\" (completeMethod)=\"qtService.filtercustomer(field.lbcount,$event)\" \n                   [minLength]=\"1\"   (dblclick)=\"qtService.InputfieldIsDBLClicked($event)\" (mouseover)=\"qtService.showtooltip($event)\" \n                   (mouseleave)=\"qtService.hidetooltip()\" \n                    [formControlName]=\"field.name\"   id=\"{{field.name}}\"  (change) =\"qtService.Changed($event)\"\n                     (onSelect)=\"qtService.cust_add($event,field.lbcount)\"  \n\n                     >\n                     \n  </p-autoComplete>\n\n  \n  \n  </div>\n\n    <div *ngIf=\"field.type =='dropdown'\" [hidden]=\"qtService.bHideAfleverAdres\" >\n<label htmlFor=\"{{field.name}}\">{{field.title}}</label>\n\n\n<select #thisfield [style.width]=\"field.width\" [formControlName]=\"field.name\"   (dblclick)=\"qtService.InputfieldIsDBLClicked($event)\"   \n        (mouseleave)=\"qtService.hidetooltip()\" (change) =\"qtService.populate_adrespopup(thisfield.value)\" id=\"{{field.name}}\" \n          class=\"inputtext\">\n           <option  *ngFor = \"let value of qtService.dropdownlist_adres\" [selected]=\"qtService.dropdown_selected(thisfield,value)\">{{value}}</option>\n \n</select>\n\n\n</div>\n\n<div *ngIf=\"field.type =='textarea'\"  >\n<label htmlFor=\"{{field.name}}\" style=\"margin-left:40%;\">{{field.title}}  </label>\n<textarea [formControlName]=\"field.name\" (change) =\"qtService.Changed($event)\"></textarea>\n</div>\n\n \n  </div>\n \n  </div>\n  \n   <p class = \"inlinemsg\">{{qtService.sBevestigdMessage}}</p>\n  </div>\n\n  <div class=\"mytooltip\" [hidden]=\"qtService.bToolTipHide\"  [style.top]=\"qtService.tttop\" [style.left]=\"qtService.ttleft\">{{qtService.sToolTip}}</div>\n  </div>\n\n      \n  </form>\n  \n\n \n    ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _b || Object])
], kopcomponent);

var _a, _b;
//# sourceMappingURL=kop.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants_on_server__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var login = (function () {
    function login(fb, http, _sc) {
        this.fb = fb;
        this.http = http;
        this._sc = _sc;
        this.LoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.OfflineInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bLoggedIn = false;
        this.bConnected = false;
        this.hideOffline = true;
        this.bpassworderror = false;
        this.relatienr = "0";
        this.hide = true;
        this.bHidePasswordControle = true;
        this.sLoginBanner = "Login";
        this.sLoginLabel = "Login";
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
        this.loginctrl = fb.group;
        this.sc = _sc;
        // this.buildForm;
    }
    login.prototype.ngOnInit = function () {
        this.hideOffline = window.localStorage.getItem('user') == null;
        this.checkconnection();
        this.buildForm();
    };
    login.prototype.buildForm = function () {
        var _ctrls = {};
        _ctrls["email"] = ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required];
        _ctrls["password"] = ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required];
        _ctrls["password_controle"] = [{ value: '', disabled: true }];
        this.loginForm = this.fb.group(_ctrls, { validator: this.compare_password });
    };
    login.prototype.compare_password = function (ctrl) {
        if (ctrl != undefined) {
            if (!ctrl.get("password_controle").disabled) {
                if (ctrl.get("password").value != ctrl.get("password_controle").value) {
                    return { "passwoorden stemmen niet overeen": true };
                }
            }
        }
    };
    ;
    login.prototype.checkconnection = function () {
        var _this = this;
        var _url = this.sc.loginurl + 'api/check_connection';
        var _tthis = this;
        this.http.get(_url, { headers: this.sc.headers }).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data == "connected") {
                _tthis.bConnected = true;
            }
        }, function (error) {
            _this.sErrorMsg = "fout, status is" + error.status;
        });
    };
    login.prototype.login = function (event) {
        var _this = this;
        var _url = this.sc.loginurl + 'api/login';
        //var headers = new Headers();
        var _tthis = this;
        this.sErrorMsg = "";
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        var name = this.loginForm.value;
        var loginstring = this.loginForm.controls["email"].value;
        if (this.bHidePasswordControle) {
            var body = JSON.stringify({
                "email": this.loginForm.controls["email"].value, "password": this.loginForm.controls["password"].value,
                "password_controle": ""
            });
        }
        else {
            var body = JSON.stringify({
                "relatienr": this.relatienr,
                "email": this.loginForm.controls["email"].value, "password": this.loginForm.controls["password"].value,
                "password_controle": this.loginForm.controls["password_controle"].value
            });
        }
        if (loginstring.substring(0, 4) == "test") {
            var logindata = {
                relatienr: "0",
                email: "tester@test.nl",
                role: "admin",
                defaults: [{ "pair": ["seizoen", "2017 Voorjaar"] }, { "pair": ["verkoopjn", "1"] }]
            };
            _tthis.LoggedIn.emit(logindata);
            _tthis.bLoggedIn = true;
        }
        else {
            this.http.post(_url, body, { headers: this.sc.headers }).
                map(function (res) { return res.json(); }).subscribe(function (data) {
                var strDummy = JSON.stringify(data);
                if (data == null) {
                }
                else if (data.loginstatus == -1) {
                    _tthis.sErrorMsg = data.message;
                }
                else if (data.loginstatus == -2) {
                    _tthis.sLoginBanner = data.message;
                    _tthis.sLoginLabel = "Passwoord aanpassen";
                    _tthis.bHidePasswordControle = false;
                    _tthis.relatienr = data.relatienr;
                    _tthis.loginForm.get("password_controle").reset({ value: '', disabled: false }, _this.compare_password);
                }
                else if (data.loginstatus == -3) {
                    _tthis.sLoginBanner = "Fout in de server, " + data.message;
                }
                else if (data.loginstatus == "0") {
                    _tthis.sLoginLabel = "Login";
                    _tthis.bHidePasswordControle = true;
                }
                else if (data.loginstatus == "Ok") {
                    _tthis.LoggedIn.emit(data);
                    _tthis.bLoggedIn = true;
                }
            });
        }
    };
    login.prototype.offlineinit = function () {
        var email = this.loginForm.controls["email"].value;
        this.OfflineInit.emit(email);
    };
    login.prototype.errorclear = function () {
        this.sErrorMsg = "";
    };
    login.prototype.LoginDisabledMsg = function () {
        if (!this.loginForm.valid) {
            this.sErrorMsg = "passwoorden zijn niet gelijk";
        }
        else {
            this.sErrorMsg = "";
        }
        var i = 0;
    };
    return login;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], login.prototype, "LoggedIn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], login.prototype, "OfflineInit", void 0);
login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(387),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_constants_on_server__["a" /* ServerConstants */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_constants_on_server__["a" /* ServerConstants */]) === "function" && _c || Object])
], login);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navbar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var navbar = (function () {
    function navbar(_qtService) {
        this._qtService = _qtService;
        this.msg = [];
        this.qtService = _qtService;
    }
    navbar.prototype.move = function (direction) { this.qtService.moverequest(direction); };
    navbar.prototype.clear = function () {
        this.qtService.clear();
    };
    navbar.prototype.search = function () {
        this.qtService.search();
    };
    return navbar;
}());
navbar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        // providers: [qtService,HTTP_PROVIDERS],
        template: "\n <div class=\"horizontalsplit\">\n\n\n     <div \n     id = \"clientname\" (dblclick)=\"qtService.toggle_tooltip()\" style=\"cursor:auto\">\n     <span> {{qtService.user.naam_plaats}}</span> <span style=\"font-size: 40%;\">{{qtService.dbname}} </span>\n     <div class=\"dropdown\">\n     <span id=\"help\" class=\"dropbtn\">help</span>\n     <div class=\"dropdown-content\">\n    <button class=\"helpbutton\" (click)=\"qtService.help('algemeen')\">Welkom tekst</button>\n    <button class=\"helpbutton\" (click)=\"qtService.help('tooltiptoggle')\">{{qtService.sTooltipMessage}}</button>\n   \n  </div>\n  </div>\n  </div>\n\n        <div class=\"buttonbar\" >\n        <button id=\"clear\"      type=\"button\" [disabled] =\"qtService.disable_clear\"  class=\"btn btn-custom \" (click)=\"qtService.clearrequest()\" (mouseover)=\"qtService.showtooltip($event)\"><span class=\"fa fa-remove\"></span>Nieuw</button>\n        <button id=\"search\" type=\"button\" [disabled] =\"qtService.disable_search\" class=\"btn btn-custom \" (click)=\"search()\" (mouseover)=\"qtService.showtooltip($event)\"><span class=\"fa fa-search\"></span>Zoek</button>\n  \n       \n        <button id=\"save\" type=\"submit\" class=\"btn btn-custom\" (click)=\"qtService.savetx()\" \n              [disabled] =\"qtService.disable_save\"><span (mouseover)=\"qtService.SaveBtnMsg()\" (mouseleave)=\"qtService.CloseBtnMsg()\" \n              class=\"fa fa-floppy-o\"></span> <span (mouseover)=\"qtService.SaveBtnMsg()\" (mouseleave)=\"qtService.CloseBtnMsg()\">Bewaar</span></button>\n        <button id=\"first\" type=\"button\" class=\"btn btn-custom\" (click)=\"move(0)\" (mouseover)=\"qtService.showtooltip($event)\"  [disabled] =\"qtService.disable_moveFirst\">   <span class=\"fa fa-fast-backward\"></span>Eerste</button>\n        <button id=\"previous\" type=\"button\" class=\"btn btn-custom\" (click)=\"move(-1)\" (mouseover)=\"qtService.showtooltip($event)\" [disabled] =\"qtService.disable_movePrevious\">  <span class=\"fa fa-step-backward\"></span>Vorige</button>\n        <button id=\"next\" type=\"button\" class=\"btn btn-custom\" (click)=\"move(1)\" (mouseover)=\"qtService.showtooltip($event)\" [disabled] =\"qtService.disable_moveNext\">   <span class=\"fa fa-step-forward\"></span>Volgende</button>\n        <button id=\"last\" type=\"button\" class=\"btn btn-custom\" (click)=\"move(9999)\" (mouseover)=\"qtService.showtooltip($event)\" [disabled] =\"qtService.disable_moveEnd\"><span class=\"fa fa-fast-forward\"></span>Laatste</button>\n        <button  type=\"submit\" class=\"btn btn-custom\" (click)=\"qtService.Excel()\" [disabled] =\"!qtService.bSummy\">\n              <span id=\"excel\" (mouseover)=\"qtService.showtooltip($event)\"  \n              class=\"fa fa-floppy-o\"></span> <span id=\"excel\" (mouseover)=\"qtService.showtooltip($event)\" >Excel</span></button>\n        \n        \n        </div>             \n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_qtrack_service__["a" /* qtService */]) === "function" && _a || Object])
], navbar);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(276)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n\r\n<div class=\"container-fluid\"> \r\n\t<h1>\r\n\t\t<login [hidden]=\"qtService.bLoggedIn\" (LoggedIn)=\"LoggedIn($event)\" (OfflineInit)=\"offLineInit($event)\" (FormBuiltReady)=\"test()\"></login>\r\n\t\t</h1>\r\n<h1 style=\"width:75%;\">\r\n\t<navbar [hidden]=\"!qtService.bLoggedIn\"></navbar>\r\n\r\n\r\n</h1>\r\n\r\n<div>\r\n\r\n\t<div id=\"opening_message\">\r\n\t\r\n\t\t</div>\r\n<kop-info ></kop-info>\r\n\r\n\r\n\r\n<div class=\"mydialog\">\r\n\t<p-dialog id=\"mydialog\" [header]=\"qtService.sDialogHeader\" [visible]=\"qtService.bDialog_NeeJa\" showEffect=\"fade\" [closable]=\"false\">\r\n\t\t<p class=\"message\">{{qtService.sDialogMsg}}</p>\r\n\t\t<footer>\r\n\t\t\t<div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n\t\t\t\t<button type=\"button\" style=\"float: left;\" pButton icon=\"fa-close\" (click)=\"qtService.deleteItem(false)\" label=\"Nee\"></button>\r\n<button type=\"button\" style=\"float: right;\" pButton icon=\"fa-check\" (click)=\"qtService.deleteItem(true)\" label=\"Ja\"></button>\r\n</div>\r\n</footer>\r\n</p-dialog>\r\n</div>\r\n\r\n<div class=\"mydialog\">\r\n\t<p-dialog id=\"mydialog\"  [header]=\"qtService.sDialogHeader\" modal=\"true\" [visible]=\"qtService.bDialog_JaNee\" showEffect=\"fade\"\r\n\t\t[closable]=\"false\">\r\n\t\t<p class=\"message\"> {{qtService.sDialogMsg}}</p>\r\n\t\t\r\n\t\t<footer>\r\n\t\t\t<div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n\t\t\t\t<button type=\"button\" style=\"float: left;\" pButton icon=\"fa-close\" (click)=\"qtService.execute_request()\" label=\"Ja\"></button>\r\n<button type=\"button\" style=\"float: right;\" pButton icon=\"fa-check\" (click)=\"qtService.hide_confirm_dialog()\" label=\"Nee\"></button>\r\n</div>\r\n</footer>\r\n</p-dialog>\r\n</div>\r\n\r\n<div class=\"mydialog\">\r\n\t<p-dialog id=\"mydialogreverse\" [header]=\"qtService.sDialogHeader\" modal=\"true\" [visible]=\"qtService.bDialog_JaNeeReverse\"\r\n\t\tshowEffect=\"fade\" [closable]=\"false\">\r\n\t\t<p class=\"message\">{{qtService.sDialogMsg}}</p>\r\n\t\t<footer>\r\n\t\t\t<div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n\t\t\t\t<button type=\"button\" style=\"float: left;\" pButton icon=\"fa-close\" (click)=\"qtService.hide_confirm_dialog()\" label=\"Ja\"></button>\r\n<button type=\"button\" style=\"float: right;\" pButton icon=\"fa-check\" (click)=\"qtService.execute_request()\" label=\"Nee\"></button>\r\n</div>\r\n</footer>\r\n</p-dialog>\r\n</div>\r\n\r\n<div>\r\n\t<p-dialog id=\"mydialog\" [class]=\"qtService.MessageClass\" [header]=\"qtService.sDialogHeader\" [visible]=\"qtService.bMessage\" showEffect=\"fade\" [closable]=\"false\">\r\n\t\t\r\n\t\t<p class=\"message\" [innerHTML]=\"qtService.sDialogMsg\"></p>\r\n\t\t<footer>\r\n\t\t\t<div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n\t\t\t\t<button type=\"button\" style=\"float: none;\" pButton icon=\"fa-check\" (click)=\"qtService.HideMessage(true)\" label=\"Ok\"></button>\r\n</div>\r\n</footer>\r\n</p-dialog>\r\n</div>\r\n\r\n<div class=\"error\">\r\n\t<p-dialog id=\"error\" [header]=\"qtService.sErrorHeader\" [visible]=\"qtService.bError\" [closable]=\"false\" showEffect=\"fade\">\r\n\r\n\t\t<p id=\"errormsg\">{{qtService.sErrorMsg}}</p>\r\n\t\t<footer id=\"error\">\r\n\t\t\t<button id=\"error\" type=\"button\" style=\"margin: auto;\" pButton icon=\"fa-min\" (click)=\"qtService.HideErrorMessage($event)\" label=\"Ok\"></button>\r\n</footer>\r\n</p-dialog>\r\n</div>\r\n\r\n<artikelgallery></artikelgallery>\r\n\r\n\r\n\r\n<details-info [hidden]=\"!qtService.bLoggedIn\" #details></details-info>\r\n</div>\r\n<adres-info [hidden]=\"!qtService.bAdresInfo\" ></adres-info>\r\n</div>\r\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <p-dialog class=\"artikelimages\" [visible]=\"qtService.bArtikelGallery\" [closable]=\"false\"  position=\"center top\" [responsive]=\"true\"\r\n        [style]=\"{'overflow':'scroll','background-color' :'#ffffe6'}\" [showHeader]=\"'false'\">\r\n\r\n        <p-dataGrid id=\"artgallery\" [value]=\"qtService.artgallery\" [paginator]=\"true\" [rows]=\"qtService.galleryrows\" [pageLinks]=\"qtService.gallerypagelinks\">\r\n            <p-header class=\"ui-dialog-draggable\">\r\n\r\n                <button type=\"button\" pButton style=\"margin-right:15%\" (click)=\"qtService.toggle_images_size()\" [label]=\"qtService.gallerybutton_label\"></button>\r\n{{qtService.sGalleryHeader}}\r\n<button type=\"button\" pButton style=\"margin-left:15%\" (click)=\"qtService.toggleArtikelGallery()\" label=\"verberg\"></button>\r\n\r\n</p-header>\r\n\r\n<div>\r\n    <ng-template let-artikel pTemplate=\"item\" let-galaryindex=\"index\">\r\n        \r\n        <div [id]=\"galaryindex\" [class]=\"qtService.galleryclass\" (click)=\"qtService.art_add_from_gallery(artikel)\" \r\n       >\r\n<p-panel [header]=\"artikel.artikelnr + '         '\" >\r\n    <img class=\"galleryimage img-responsive\"  [ngClass] = \"artikel.dynclass\"\r\n     src=\"../resources/fotoos/{{artikel.omschr}}.jpg\" alt=\"Image not found\" onerror=\"this.src='../resources/fotoos/default.jpg';\">\r\n\r\n<hr class=\"ui-widget-content\" style=\"border-top:0\"> {{artikel.voorraad}}\r\n\r\n</p-panel>\r\n</div>\r\n<!--</div>-->\r\n</ng-template>\r\n</div>\r\n</p-dataGrid>\r\n\r\n</p-dialog>\r\n</div>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"qtService.detailForm\">\r\n\r\n\r\n\t<div class=\"horizontalsplit\" style=\"margin-top:1%;\">\r\n<div>\r\n\t<div id=\"mastertable\">\r\n\r\n\t\t<p-dialog width=500 class=\"voorraad\" [id]=\"qtService.voorraad_id\" [visible]=\"qtService.bVoorraad\" showEffect=\"fade\" [closable]=\"false\"\r\n\t\t\t[class.notcounted]=\"!qtService.bCounted\" (mouseover)=\"qtService.showtooltip($event)\" [class.naleveren]=\"qtService.naleveren\">\r\n\r\n\r\n\t\t\t<p-dataTable [value]=\"qtService.rowsvrrdmatrix\" [editable]=\"true\" paginator=\"true\" [rows]=\"10\" [responsive]=\"true\">\r\n\t\t\t\t<p-header> {{qtService.voorraadtitle}}</p-header>\r\n\r\n\t\t\t\t<p-column *ngFor=\"let col of qtService.colsvrrdmatrix let i=index\" (Edit)=\"qtService.test()\" [field]=\"qtService.colsvrrdmatrix[i]\"\r\n\t\t\t\t\t[header]=\"qtService.colsvrrdmatrix[i]\" [style]=\"qtService.colvrrdstyles[i]\"></p-column>\r\n\r\n\r\n\r\n\t\t\t</p-dataTable>\r\n\r\n\r\n\t\t\t<footer>\r\n\t\t\t\t<div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n<button type=\"button\" pButton  pButton icon=\"fa-min\" (click)=\"qtService.toggle_showvoorraad()\" label=\"Sluit\"></button>\r\n<button type=\"button\" style=\"margin-left: 11% !important\" pButton  pButton icon=\"fa-min\" (click)=\"qtService.toggle_single_voorraad()\" [label]=\"qtService.button_singlevrrd_label\"></button>\r\n<button type=\"button\" style=\"margin-left: 11% !important\" pButton  pButton icon=\"fa-min\" (click)=\"qtService.ExcelVoorraad()\" label=\"Excel\"></button>\r\n\r\n\r\n\r\n<button type=\"button\" style=\"float: right\" pButton  [disabled]=\"qtService.disable_VrrdFris\" pButton icon=\"fa-min\" (click)=\"qtService.getvoorraad()\" label=\"Fris\"></button>\r\n</div>\r\n</footer>\r\n</p-dialog>\r\n\r\n\r\n<p-dataTable id=\"lefttable\" class=\"datatable col-sm-2\"  [value]=\"qtService.rowsvalues\" (onRowClick)=\"qtService.onRowClick($event)\" selectionMode=\"single\" \r\n(onRowDblclick)=\"qtService.deleteItemDialogue($event)\" paginator=\"true\" [rows]=\"6\" \r\n[responsive]=\"true\" emptyMessage=\"\" [style]=\"qtService.iteminputstyle\">\r\n\r\n\t<p-header id=\"iteminput\">\r\n\t\t<span (mouseover)=\"qtService.nwArtikelMsg()\" (mouseleave)=\"qtService.CloseBtnMsg()\">\r\n           <button type=\"button\"   class=\"bluebutton\" [disabled]=\"qtService.disable_nwArtikel\" style=\"float:left\" (click)=\"qtService.toggleArtikelGallery()\" >foto's\r\n</button>\r\n<button id=\"nieuwartikel\" type=\"button\" class=\"bluebutton\" [disabled]=\"qtService.disable_nwArtikel\" style=\"float:right\" \r\n(click)=\"qtService.ClearNwArtikel()\" (mouseover)=\"qtService.showtooltip($event)\" >nieuw artikel\r\n</button>\r\n<div>\r\n\t<p-autoComplete [class.notcounted]=\"!qtService.bCounted\" [suggestions]=\"qtService.arts\" (completeMethod)=\"qtService.filter_from_artgallery($event)\"\r\n\t\t[minLength]=\"0\" [dropdown]=\"true\" (onDropdownClick)=\"qtService.handle_artikel_dropdown($event)\" placeholder=\"type hier volgend artikel\" (onSelect)=\"qtService.art_add($event)\"\r\n\t\tformControlName=\"nwartikel\"  id=\"nieuwartikel\" (mouseleave)=\"qtService.hidetooltip(qqw)\"\r\n\t\t(change)=\"qtService.art_addfromchange_event($event)\">\r\n\t</p-autoComplete>\r\n</div>\r\n</span>\r\n</p-header>\r\n<p-column >\r\n\t<ng-template pTemplate type=\"header\">\r\n\r\n\t</ng-template>\r\n\t<ng-template  let-artdata=\"rowData\" let-index=\"rowIndex\" pTemplate type=\"body\">\r\n\t\t<span  [style.color]=\"artdata.icon_color\" class=\"{{qtService.iconRowHeader[index]}}\"></span>\r\n\t</ng-template>\r\n</p-column>\r\n\r\n\r\n<p-column *ngFor=\"let col of qtService.colssummy let i=index\" id=\"artnr\" (keyup)=\"test(data)\" [style]=\"qtService.colstyles[i+1]\"\r\n\t[field]=\"col.name\" [header]=\"qtService.colssummy[i].header\" [footer]=\"qtService.totals[i]\" class=\"dtcolm\"></p-column>\r\n\r\ntekst 3\r\n<!--<footer><div class=\"ui-helper-clearfix\" style=\"width:100%\"></div></footer>-->\r\n\r\n</p-dataTable>\r\n</div>\r\n\r\n<div (blur)=\"qtService.test()\" class=\"col-md-7\">\r\n\t<!--<div class=\"ContentSideSections Implementation\">-->\r\n\t<p-dataTable class=\"datatable\" [class.summary]=\"qtService.bSummy\" (onEdit)=\"qtService.setmatrixrows()\" [value]=\"qtService.rowsmatrix\"\r\n\t\t[editable]=\"!qtService.bSummy\" paginator=\"true\" [rows]=\"10\" [responsive]=\"true\" (click)=\"qtService.onEdit($event)\" emptyMessage=\"\"\r\n\t\t(onEditInit)=\"qtService.startCellEdit($event)\" (wheel)=\"qtService.addOne($event)\">\r\n\t\t<p-header>{{qtService.matrixtitle}}{{qtService.tt}}</p-header>\r\n\r\n\t\t<p-column *ngFor=\"let col of qtService.colsmatrix let i=index\" [field]=\"qtService.colsmatrix[i]\" [class.dtcolm]=\"qtService.bLoggedIn\"\r\n\t\t\t[header]=\"qtService.colsqtitle[i]\" [editable]=\"qtService.col_editable[i]\" (mouseover)=\"qtService.tooltipvoorraad(this)\"\r\n\t\t\t[style]=\"qtService.colstyles_detail[i]\">\r\n\t\t\t<ng-template let-row=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t<span [class]=\"qtService.rows_disabled_cells[ri][i]\">{{row[col]}}</span>\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\r\n\r\n\r\n\t\t<p-footer>\r\n\t\t\t<div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n<button type=\"button\" class=\"bluebutton\" [disabled]=\"qtService.bDetailEmpty\" style=\"float:left\" (click)=\"qtService.toggle_editmode()\" ><span id=\"overzicht\" (mouseover)=\"qtService.showtooltip($event)\">{{qtService.button_ovt_label}}</span></button>\r\n<span [hidden]=\"qtService.bHideVoorraadButton\"><button type=\"button\" [disabled]=\"!qtService.bVoorraadFetched\" pButton style=\"float:right\" (click)=\"qtService.toggle_showvoorraad()\" [label]=\"qtService.button_voorraad_label\" ></button>\r\n</span>\r\n</div>\r\n</p-footer>\r\n<h1>tekst12</h1>\r\n</p-dataTable>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n</div>\r\n</form>"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"login \">\r\n\r\n\t<h1 style=\"text-align: center; margin: 3%;\"> {{sLoginBanner}}</h1>\r\n\r\n\t<form [formGroup]=\"loginForm\" id=\"login\" autocomplete=\"on\" >\r\n\t\t\r\n\t\t<div>\r\n\t\t\t<!--<label for=\"username\" width=\"20%\">Username</label>-->\r\n\t\t\t<input type=\"email\" autofocus  id = \"login\" name=\"username\" autocomplete=\"on\" formControlName=\"email\" #username  placeholder=\"email adres\" (click)=\"errorclear()\" autocomplete=\"on\" \r\n\t\t\t(dblclick)=\"offlineinit(email)\">\r\n\t\t</div>\r\n\t\t<br/>\r\n\t\t<div>\r\n\t\t\t<!--<label for=\"password\" width=\"30%\">Password</label>-->\r\n\t\t\t<input type=\"password\" formControlName=\"password\" #password name=\"password\" id=\"password\" placeholder=\"Password\"  (click)=\"errorclear()\">\r\n\t\t\t<div [hidden]=\"bHidePasswordControle\">\r\n\t\t\t\t<!--<label for=\"password_controle\">Password (controle)</label>-->\r\n\t\t\t\t<input type=\"password\" formControlName=\"password_controle\" #password id=\"password_controle\" placeholder=\"Password\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<div style=\"text-align: center\">\r\n\t\t\t<span (mouseover)=\"LoginDisabledMsg()\">\r\n\t\t\t<span [hidden]=\"!bConnected\"><button style=\"width: auto;padding-left: 10%;padding-right:10%\" [disabled] = \"!loginForm.valid\" (click)=\"login($event)\" class=\"btn btn-default login\">{{sLoginLabel}}</button></span>\r\n\t\t\t<span [hidden] = \"hideOffline\"><button style=\"width: auto;padding-left: 10%;padding-right:10%\" (click)=\"offlineinit(email)\"  class=\"btn btn-default login\">off-line</button></span>\r\n\t\t\t</span>\r\n\t\t\t<p >{{sErrorMsg}}</p>\r\n\t\t</div>\r\n\r\n\t</form>\r\n</div>"

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(305);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_on_server__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qtService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LocalStorageService } from 'angular-2-local-storage';

var qtService = (function () {
    //iconRowHeader = ["fa-pencil","fa-search","fa-check","fa-trash-o","fa-plus-square","fa-plus","fa fa-check","fa fa-check","fa fa-check","fa-check","fa-check","fa-check","fa-check"];
    function qtService(fb, http, _serverconstants) {
        this.fb = fb;
        this.http = http;
        this._serverconstants = _serverconstants;
        this.bLoggedIn = false;
        this.bError = false;
        this.bSummy = false;
        this.b_vrrd_single_item = false;
        this.bVoorraad = false;
        this.bSaving = false;
        this.bLoading = false;
        this.bHidePasswordControle = false;
        this.bHideAfleverAdres = false;
        this.bDialog_NeeJa = false;
        this.bDialog_JaNee = false;
        this.bDialog_JaNeeReverse = false;
        this.bArtikelGallery = false;
        this.bBevestigd = false;
        this.bNewRelatie = false;
        this.bMessage = false;
        this.bAdresInfo = false;
        this.bHideToolTip = false;
        this.bToolTipHide = true;
        this.bHideVoorraadButton = true;
        this.bVoorraadExists = false;
        this.bArtikelenFetched = false;
        this.bSeizoenIsValid = false;
        this.bDetailEmpty = true;
        this.bDetailHidden = false;
        this.bKopChanged = false;
        this.bCounted = true;
        this.bOffLine = false;
        this.bAdress = false;
        this.bSynchronising = false;
        this.bnaleveren = false;
        this.gallerystyle = "width:100%";
        this.art_selected = false;
        this.disable_nwArtikel = true;
        this.disable_search = true;
        this.disable_save = true;
        this.disable_actions = false;
        this.disable_delete = true;
        this.disable_clear = true;
        this.disable_moveFirst = true;
        this.disable_movePrevious = true;
        this.disable_moveNext = true;
        this.disable_moveEnd = true;
        this.disable_tabel = true;
        this.disable_copy = true;
        this.disable_VrrdFris = false;
        this.seizoen_idx = -1;
        this.btc_idx = -1;
        this.art_idx = -1;
        this.kleur_idx = -1;
        this.maat_idx = -1;
        this.aantal_idx = -1;
        this.bBevestigd_idx = -1;
        this.freenumfield1_idx = -1;
        this.not_counted_idx = -1;
        this.valbedrag_idx = -1;
        this.autoadded_idx = -1;
        this.rowid_idx = -1;
        this.naam_idx = -1;
        this.relatie_idx = -1;
        this.adres_idx = -1;
        this.datum_idx = 0;
        this.order_idx = 0;
        this.ordernr_idx = -1;
        this.relatienr_idx = -1;
        this.rowid_relatie_idx = -1;
        this.rowid_adres_idx = -1;
        this.rspointer = 0; // resultset pointer
        this.matrixprijs = 0;
        this.move_direction = 0;
        this.galleryrows = 12;
        this.gallerypagelinks = 10;
        this.MessageClass = "";
        this.tttop = "";
        this.ttleft = "";
        this.sToolTip = "";
        this.sNull = "";
        this.adresheader = "";
        this.voorraad_id = "voorraadcrnt";
        this.cursorShape = "auto";
        this.sErrorHeader = "";
        this.request = "";
        this.sErrorMsg = "test";
        this.sDialogHeader = "test";
        this.sDialogMsg = "testest";
        this.sTooltipMessage = "Tooltips aan";
        this.formname = "order";
        this.formdef_id = "";
        this.button_ovt_label = "overzicht";
        this.button_voorraad_label = "voorraad";
        this.gallerybutton_label = "kleine plaatjes";
        this.button_singlevrrd_label = "alles";
        this.nwartikelctrl = "";
        this.matrixtitle = "";
        this.oldSeizoen = ""; // should in fact be dealt via additional attribute 'oldvalue' to 'control' But that involves change of control.reset method because oldvalue  
        this.form_content = "";
        this.sBevestigdMessage = "";
        this.ssCSV = "a, b, c";
        this.dbname = "";
        this.voorraadtitle = "";
        this.voorraadclass = "";
        this.NewArtIconColor = "";
        this.nwArtikel = "";
        this.textFile = null;
        this.today = new Date();
        this.arts = ["a", "M", "PPO"];
        this.all_art = [];
        this.all_art_is_counted = [];
        this.all_seizoen = [];
        this.formdefs_in_localstorage = [];
        this.size = [];
        this.visible_fields = [];
        this.visible_klantfields = [];
        this.rowids = [];
        this.rowsvalues = [];
        this.colsmatrix = [];
        this.colsvrrdmatrix = [];
        this.rowsmatrix = [];
        this.totals = [];
        this.iconRowHeader = [];
        this.rowsvrrdmatrix = [];
        this.rows_disabled_cells = [];
        this.NotCounted = [];
        this.dropdownlist_adres = [];
        this.dr_a = [{ label: "add", value: {} }, { label: "lala", value: {} }];
        this.autocomplete_list = [[], []]; // I use this mulitydimensional array because it is not possible to share the same lookuparray for different input fields.
        this.templateaccess = {};
        this.lookup_userdata = {};
        this.seizoen = {};
        this.hidden = {};
        this.disable_inputfields = {};
        this.cell_disabled = {};
        this.formdef = {};
        this.colnames = {};
        this.constants = {};
        this.kopFormToFormdefMapping = {};
        this.kopForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
        this.detailForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
        this.adresForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
        //galleryclass = "col-xs-12 col-sm-3 col-md-1";
        this.galleryclass = "col-xs-12 col-sm-4 col-md-2";
        this.iteminputstyle = { 'padding': '0px', 'textalign': 'left' };
        this.colssummy = [
            {
                name: "artikelnr",
                header: "artikelnr",
                editable: true
            },
            {
                name: "aantal",
                header: "aantal",
                editable: false
            },
            {
                name: "valbedrag",
                header: "bedrag",
                editable: false
            },
        ];
        this.kopstyles = [
            { 'color': 'blue', 'width': '3' },
            { 'color': 'red', 'width': '14' }
        ];
        this.colstyles_detail = [];
        this.colstyles = [
            { 'color': 'blue', 'width': '13%' },
            { 'color': 'blue', 'width': '40%' },
            { 'color': 'blue', 'width': '17%', 'text-align': 'right' },
            { 'color': 'blue', 'width': '30%', 'text-align': 'right' }
        ];
        this.colstyles_detail_editmode = [
            { 'color': 'blue', 'backgroundcolor': 'yellow', 'width': '30%' },
            { 'width': '11%' },
            { 'width': '11%' },
            { 'width': '11%' },
            { 'width': '11%' },
            { 'width': '11%' },
            { 'width': '11%' },
            { 'width': '11%' },
        ];
        this.colstyles_detail_viewmode = [
            { 'color': 'blue', 'width': '15%' },
            { 'width': '10%' },
            { 'width': '10%' },
            { 'width': '10%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '7%' },
            { 'width': '9%', 'text-align': 'right' }
        ];
        this.colvrrdstyles = [];
        this.colvrrdstyles_single = [
            { 'color': 'blue', 'width': '15%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
            { 'width': '5%' },
        ];
        this.colvrrdstyles_entire = [
            { 'color': 'blue', 'width': '15%' },
            { 'color': 'blue', 'width': '15%' },
            { 'width': '9%' },
            { 'width': '9%' },
            { 'width': '9%' },
            { 'width': '9%' },
            { 'width': '9%' },
            { 'width': '9%' },
            { 'width': '15%' },
        ];
        this.col_editable = [false, true, true, true, true, true, true];
        this.Icon_Color = ["green", "red", "blue", "red", "blue", "yellow"];
        this.color_counted = "#98b95f";
        this.color_not_counted = "#fa836b";
        //tbversioninit: tbversion;
        this.tbversioninit = {
            artikelen: -1,
            relatie: -1,
            seizoen: -1,
            blank_order: -1,
            blank_artikel: -1
        };
        this.ServerConstants = _serverconstants;
        var _tthis = this;
        var j = 0;
        this.user = { "relatienr": "0" };
        this.createDetailForm();
        this.colstyles_detail = this.colstyles_detail_editmode;
    }
    qtService.prototype.SaveBtnMsg = function () {
        // this.bChanged = (this.bKopChanged && !this.bDetailEmpty) || this.bDetailChanged;
        // return !(this.bChanged && this.kopForm.valid);
        this.sDialogHeader = "";
        this.sDialogMsg = "";
        if ((this.bDetailChanged || !this.kopForm.pristine) && this.bBevestigd) {
            this.sDialogMsg = "order is bevestigd op " + this.kopForm.get("datum").value;
            this.sDialogHeader = "order kan niet worden gewijzigd";
            this.bMessage = true;
        }
        else if (this.bDetailChanged || !this.kopForm.pristine || !this.adresForm.pristine) {
            if (!this.kopForm.valid) {
                this.sDialogHeader = "foute / onvolledige invoer";
                this.bMessage = true;
                for (var ctrl in this.kopForm.controls) {
                    if (!this.kopForm.controls[ctrl].valid) {
                        for (var msg in this.kopForm.controls[ctrl].errors) {
                            if (this.sDialogMsg != '') {
                                this.sDialogMsg = this.sDialogMsg + "\n";
                            }
                            if (msg == "required") {
                                msg = "ontbreekt";
                            }
                            if (msg == "pattern") {
                                msg = "ongeldig";
                            }
                            this.sDialogMsg = this.sDialogMsg + ctrl + ": " + msg;
                        }
                    }
                }
            }
            if (!this.adresForm.valid) {
                this.sDialogHeader = "foute / onvolledige invoer";
                this.bMessage = true;
                for (var ctrl in this.adresForm.controls) {
                    if (!this.adresForm.controls[ctrl].valid) {
                        for (var msg in this.adresForm.controls[ctrl].errors) {
                            if (this.sDialogMsg != '') {
                                this.sDialogMsg = this.sDialogMsg; //  new line with /n or \n does not work 
                            }
                            if (msg == "required") {
                                msg = "ontbreekt";
                            }
                            if (msg == "pattern") {
                                msg = "ongeldig";
                            }
                            this.sDialogMsg = this.sDialogMsg + ctrl + ": " + msg;
                        }
                    }
                }
            }
            else if (this.bDetailEmpty) {
                this.bMessage = true;
                this.sDialogMsg = "orderdetails zijn leeg";
                this.sDialogHeader = "geen orderdetails aanwezig";
            }
        }
    };
    qtService.prototype.CloseBtnMsg = function () { };
    ;
    qtService.prototype.tabel = function () { };
    ;
    qtService.prototype.copy = function () {
        var i = 0;
    };
    ;
    qtService.prototype.initUser_part1 = function (user) {
        var _this = this;
        this.bLoggedIn = true;
        this.bHideToolTip = Boolean(window.localStorage.getItem('bHideToolTip'));
        this.bHidePasswordControle = true;
        this.user = user;
        this.dbname = user.dbname;
        this.tbversion = JSON.parse(window.localStorage.getItem('tbversion'));
        if (window.location.href.indexOf("localhost") < 0) {
            this.ServerConstants.rooturl = user.dbname + "/";
            this.ServerConstants.loginurl = "login/";
        }
        // else  {
        // initional settings in this.ServerConstants remain valid, pointing to local host
        // }
        if (this.tbversion == null) {
            window.localStorage.setItem('tbversion', JSON.stringify(this.tbversioninit));
            this.tbversion = this.tbversioninit;
        }
        if (user.relatienr != "0") {
            this.getusersettings(user.dbname, user.email).subscribe(function (user) {
                _this.user = user;
                if (user.loginstatus == "Ok") {
                    var b_new_user = true;
                    var olduser = JSON.parse(window.localStorage.getItem('user'));
                    if (olduser != null) {
                        if (user.relatienr == olduser.relatienr) {
                            b_new_user = false;
                        }
                    }
                    if (b_new_user) {
                        window.localStorage.removeItem('adres');
                        window.localStorage.removeItem('relatie');
                    }
                    window.localStorage.setItem('user', JSON.stringify(user));
                    _this.initUser_part2();
                }
                else {
                    _this.bError = true;
                    _this.sErrorHeader = "fout bij ophalen gebruikersgegevens";
                    _this.sErrorMsg = _this.user.message;
                }
            });
        }
        else {
            this.initUser_part2();
        }
    };
    qtService.prototype.initUser_part2 = function () {
        // var PostcodeObservable = this.PostcodeApi("1600AA");
        // PostcodeObservable.subscribe(response => {
        var _this = this;
        //     var data = response.json();
        //     var headers = response.headers;
        //     if (data._embedded.addresses.length > 0) {
        //         this.adresForm.get("straat").setValue(data._embedded.addresses[0].street);
        //         this.adresForm.get("woonplaats").setValue(data._embedded.addresses[0].city.label);
        //     }
        //     else {
        //         this.adresForm.get("straat").setValue(null);
        //         this.adresForm.get("woonplaats").setValue(null);
        //     }
        //     return null;
        // },
        //     error => {
        //         this.sErrorHeader = "ophalen postcode mislukt";
        //         this.bError = true;
        //         switch (error.status) {
        //             case 429:
        //                 this.sErrorMsg = "limiet overschreden, response status " + error.status;
        //                 break;
        //             default:
        //                 this.sErrorMsg = "response: " + error.status;
        //                 break;
        //         }
        //     });
        this.lookup_generic("tbversion").subscribe(function (data) {
            _this.initUser_part3(data);
            //  var t = JSON.stringify(this.tbversioninit)
        });
    };
    qtService.prototype.initUser_part3 = function (serverversions) {
        var _this = this;
        this.cursorShape = "wait";
        if (window.localStorage.getItem('seizoen') == null) {
            this.help("algemeen");
        }
        this.disable_nwArtikel = true;
        var tbversion = {};
        if (serverversions.rows != undefined) {
            for (var i = 0; i < serverversions.rows.length; i++) {
                tbversion[serverversions.rows[i].values[0]] = serverversions.rows[i].values[1];
            }
        }
        else {
            tbversion = serverversions;
        }
        if (this.tbversion.seizoen != tbversion.seizoen || window.localStorage.getItem('seizoen') == null || this.user.relatienr == "0") {
            this.lookup_generic("seizoenlookup").subscribe(function (data) {
                if (data.TableName.substring(0, 5) == "error") {
                    _this.bError = true;
                    _this.sErrorMsg = data.TableName;
                }
                else {
                    _this.all_seizoen = data;
                    _this.tbversion.seizoen = tbversion.seizoen;
                    window.localStorage.setItem('seizoen', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(_this.tbversion));
                    _this.buildform(_this.tbversion.blank_order, tbversion.blank_order);
                }
            }, function (d) {
                console.log("completed");
            });
        }
        else {
            this.all_seizoen = JSON.parse(window.localStorage.getItem('seizoen'));
            this.buildform(this.tbversion.blank_order, tbversion.blank_order);
        }
        if (this.tbversion.relatie != tbversion.relatie || window.localStorage.getItem('relatie') == null || this.user.relatienr == "0") {
            this.lookup_generic("klantlookup").subscribe(function (data) {
                if (data.TableName.substring(0, 5) == "error") {
                    _this.bError = true;
                    _this.sErrorMsg = data.TableName;
                }
                else {
                    _this.all_klant = data;
                    _this.tbversion.relatie = tbversion.relatie;
                    window.localStorage.setItem('relatie', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(_this.tbversion));
                }
            });
        }
        else {
            this.all_klant = JSON.parse(window.localStorage.getItem('relatie'));
        }
        if (this.tbversion.adres != tbversion.adres || window.localStorage.getItem('adres') == null || this.user.relatienr == "0") {
            this.lookup_generic("adreslookup").subscribe(function (data) {
                if (data.TableName.substring(0, 5) == "error") {
                    _this.bError = true;
                    _this.sErrorMsg = data.TableName;
                }
                else {
                    _this.all_adres = data;
                    var strDummy = JSON.stringify(data);
                    _this.tbversion.adres = tbversion.adres;
                    window.localStorage.setItem('adres', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(_this.tbversion));
                    if (_this.user.role == "customer") {
                        _this.filteradresses(_this.user.relatienr); //relatienr itself is added to the order at serverside in setdataauto
                        if (_this.dropdownlist_adres.length == 1) {
                            _this.bHideAfleverAdres = true;
                        }
                        else {
                            _this.bHideAfleverAdres = false;
                            if (_this.dropdownlist_adres.length == 0) {
                                _this.dropdownlist_adres[0] = "nieuwadres";
                            }
                        }
                    }
                }
            });
        }
        else {
            this.all_adres = JSON.parse(window.localStorage.getItem('adres'));
            if (this.user.role == "customer") {
                this.filteradresses(this.user.relatienr);
                if (this.dropdownlist_adres.length == 1) {
                    this.bHideAfleverAdres = true;
                }
                else {
                    this.bHideAfleverAdres = false;
                    if (this.dropdownlist_adres.length == 0) {
                        this.dropdownlist_adres[0] = "nieuwadres";
                    }
                }
            }
        }
        if (this.tbversion.artikelen != tbversion.artikelen || window.localStorage.getItem('artikelen') == null || this.user.relatienr == "0") {
            this.bError = false;
            this.lookup_art("artikellookup").subscribe(//context is quite unclear to me. 
            function (//context is quite unclear to me. 
                data) {
                var strDummy = JSON.stringify(data);
                if (data[0]["pair"] != undefined) {
                    if (data[0].pair[0] == "error") {
                        _this.bError = true;
                        _this.sErrorMsg = data[0].pair[1];
                    }
                }
                else {
                    _this.all_art = data;
                    _this.tbversion.artikelen = tbversion.artikelen;
                    window.localStorage.setItem('artikelen', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(_this.tbversion));
                    _this.ProcessAllArt(); //via calling this function, I get the proper qtService context for all variables. Directly here, context not ok 
                }
            });
        }
        else {
            this.all_art = JSON.parse(window.localStorage.getItem('artikelen'));
            this.createArtGallery();
            this.cursorShape = "auto";
            this.disable_nwArtikel = false;
            this.bArtikelenFetched = true;
            this.disable_search = false;
            this.disable_clear = false;
            if (this.bSeizoenIsValid) {
                this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
            }
        }
        if (!this.bOffLine) {
            this.lookup_generic("voorraadlookup").subscribe(function (data) {
                _this.all_voorraad = data;
                if (data.TableName.substring(0, 5) == "error") {
                    _this.bError = true;
                    _this.sErrorHeader = "fout bij ophalen " + data.TableName;
                    _this.sErrorMsg = data.TableName;
                }
                else {
                    _this.bVoorraadFetched = true;
                    _this.updateArtGalleryVoorraad();
                }
            });
            this.lookup_generic("art_stock_is_counted_lookup").subscribe(function (data) {
                _this.all_art_is_counted = data["rows"].map(function (row) { return row.values[0]; });
                if (data.TableName.substring(0, 5) == "error") {
                    _this.bError = true;
                    _this.sErrorMsg = data.TableName;
                }
            });
            this.get_allformdefs_from_localstorage();
            if (this.formdefs_in_localstorage.length > 1) {
                this.bDialog_JaNee = true;
                this.sDialogMsg = "";
                this.sDialogHeader = "Orders bewaren op de server ?";
                this.request = "synchronise";
                for (var i = 0; i < this.formdefs_in_localstorage.length; i++) {
                    this.sDialogMsg = this.sDialogMsg + this.formdefs_in_localstorage[i];
                    if (i < this.formdefs_in_localstorage.length) {
                        this.sDialogMsg = this.sDialogMsg + ", " + String.fromCharCode(13);
                    }
                }
            }
        }
    };
    qtService.prototype.ProcessAllArt = function () {
        this.createArtGallery(); //under subscribe, this=safesubscriber. Still, this works. Whatever
        this.cursorShape = "auto";
        this.disable_nwArtikel = false;
        this.bArtikelenFetched = true;
        this.disable_search = false;
        this.disable_clear = false;
        if (this.bSeizoenIsValid) {
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
        }
    };
    qtService.prototype.offLineInit = function (email) {
        if (email.substr(0, 4) != "test") {
            this.tbversion = JSON.parse(window.localStorage.getItem('tbversion'));
            this.user = JSON.parse(window.localStorage.getItem('user'));
        }
        else {
            this.user.relatienr == "0";
            this.user.email = "tester@test.nl";
            this.user.role = "admin";
            this.user["defaults"] = [{ "pair": ["seizoen", "2017 Voorjaar"] }, { "pair": ["verkoopjn", "1"] }];
            this.tbversion = this.tbversioninit;
        }
        this.bOffLine = true;
        this.dbname = "(Off-line)";
        this.initUser_part3(this.tbversion);
        this.bLoggedIn = true;
    };
    qtService.prototype.lookup_art = function (tbname) {
        var _url = this.ServerConstants.rooturl + 'api/AllItems';
        var lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": tbname
        };
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            return this.http.post(_url, JSON.stringify(lookupRequest), { headers: this.ServerConstants.headers }).
                map(function (res) { return res.json(); });
        }
        else {
            _url = "mockapi/artikel_lookup.jsn";
            return this.http.get(_url, { headers: this.ServerConstants.headers }).
                map(function (res) { return res.json(); });
        }
    };
    qtService.prototype.lookup_generic = function (tbname) {
        var _url = this.ServerConstants.rooturl + 'api/TxGetLookups';
        var lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": tbname
        };
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            return this.http.post(_url, JSON.stringify(lookupRequest), { headers: this.ServerConstants.headers }).
                map(function (res) { return res.json(); });
        }
        else {
            switch (tbname) {
                case "seizoenlookup":
                    _url = "mockapi/seizoen_lookup.jsn";
                    break;
                case "tbversion":
                    _url = "mockapi/tbversion_lookup.jsn";
                    break;
                case "klantlookup":
                    _url = "mockapi/klant_lookup.jsn";
                    break;
                case "adreslookup":
                    _url = "mockapi/adres_lookup.jsn";
                    break;
                case "voorraadlookup":
                    _url = "mockapi/voorraad_lookup.jsn";
                    break;
                case "art_stock_is_counted_lookup":
                    _url = "mockapi/stock_counted.jsn";
                    break;
                default:
                    _url = "";
                    break;
            }
            if (_url != '') {
                var data = this.http.get(_url);
                var data1 = data.map(function (res) { return res.json(); });
                return data1;
            }
            else {
            }
        }
    };
    qtService.prototype.buildform = function (localVersion, serverVersion) {
        var _this = this;
        if (localVersion != serverVersion || window.localStorage.getItem('blank_order') == null) {
            var _tthis = this;
            this.getblankfromdb(this.formname).subscribe(function (data) {
                var strDummy = JSON.stringify(data);
                if (data.Status != "Ok") {
                    _tthis.sErrorMsg = data.Message;
                    _tthis.bError = true;
                }
                else {
                    _tthis.formdef = data;
                    _tthis.createForm(null);
                    _tthis.createForm("klant");
                    _this.tbversion.blank_order = serverVersion;
                    window.localStorage.setItem('blank_order', JSON.stringify(data));
                    window.localStorage.setItem('tbversion', JSON.stringify(_this.tbversion));
                }
            });
        }
        else {
            this.formdef = JSON.parse(window.localStorage.getItem('blank_order'));
            this.createForm(null);
            this.createForm("klant");
        }
    };
    qtService.prototype.getblank = function () {
        if (this.disable_actions) {
            return;
        }
    };
    qtService.prototype.getblankfromdb = function (formname) {
        var _url = this.ServerConstants.rooturl + 'api/FormGetBlank' + "/" + formname;
        // var headers = new Headers();
        var lookupRequest = {
            "dbname": this.user.dbname,
            "relatienr": this.user.relatienr,
            "agentnr": this.user.agentnr,
            "role": this.user.role,
            "formname": formname
        };
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr == "0") {
            _url = "http://localhost:4200/mockapi/blank.jsn";
        }
        return this.http.get(_url, { headers: this.ServerConstants.headers }).
            map(function (res) { return res.json(); });
        ;
    };
    qtService.prototype.createForm = function (formName) {
        var field_count = 0;
        var btc_count = 0;
        //this.clear();
        this.disable_inputfields = {};
        var _visible = [];
        var _btc = [];
        var _btcfields = [];
        var _cols = [];
        var _ctrls = {};
        var row = {};
        var _hidden = false;
        var listboxcount = 0;
        var attribute_lb_count = null;
        this.formdef["bootstrapcolumns"].forEach(function (btc) {
            field_count = 0;
            _btcfields = [];
            var _field;
            btc.fielddefs.forEach(function (field) {
                if (!field.hidden && field.popup_windowname == formName) {
                    if (!field.detail) {
                        _hidden = this.determineHidden(field.tbname); //does not apear in DOM
                        if (!_hidden) {
                            this.determineHidden2(field.name); //detrmine if domfield is hidden
                        }
                        if (!_hidden) {
                            if (field.haslistbox) {
                                attribute_lb_count = listboxcount;
                                listboxcount++;
                            }
                            else {
                                attribute_lb_count = null;
                            }
                            _field =
                                {
                                    name: field.name,
                                    tbname: field.tbname,
                                    title: field.title,
                                    type: field.type,
                                    maxlen: field.maxlen,
                                    minlen: field.minlen,
                                    format: field.format,
                                    //width: field.width+"%",
                                    width: field.width + 'em',
                                    getsfocus: field.getsfocus,
                                    required: field.required,
                                    popup_windowname: field.popup_windowname,
                                    tooltip: field.tooltip,
                                    disabled: field.disabled,
                                    haslistbox: field.haslistbox,
                                    lbcount: attribute_lb_count,
                                    btc_idx: btc_count,
                                    field_idx: field_count
                                };
                            // _field.disabled = this.determineDisabled(field.disabled);
                            _btcfields.push(_field);
                            var validatorarray = [];
                            var asynch_validatorarray = [];
                            if (field.name == "seizoen") {
                                this.SeizoenExists = this.SeizoenExists.bind(this);
                                validatorarray[0] = this.SeizoenExists;
                            }
                            else if (field.name == "relatienr") {
                                this.KlantExists = this.KlantExists.bind(this);
                                validatorarray[0] = this.KlantExists;
                            }
                            // else if (field.type == "email") {
                            //     this.EmailCheck = this.EmailCheck.bind(this);
                            //     validatorarray[0] = this.EmailCheck;
                            // }
                            // if (field.maxlen != 0 && field.maxlen > 0) {
                            //     validatorarray.push(this.MaxLenCheck(field.maxlen));
                            // }
                            if (field.required) {
                                validatorarray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
                            }
                            if (field.name == "qq_postcode") {
                                this.GetAdres = this.GetAdres.bind(this);
                                //asynch_validatorarray.push(setTimeout(this.GetAdres,1000));
                                asynch_validatorarray.push(this.GetAdres);
                                field.format = "^[0-9]{4}[A-Z]{2}$";
                            }
                            if (field.format.length > 2) {
                                validatorarray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(field.format));
                            }
                            if (_field.disabled == 0 || _field.disabled == 3) {
                                var ctrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', validatorarray, asynch_validatorarray);
                            }
                            else {
                                if (_field.disabled == 2 && this.user.role != "customer") {
                                    var ctrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', validatorarray, asynch_validatorarray);
                                }
                                else {
                                    var ctrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: '', disabled: true }, validatorarray, asynch_validatorarray);
                                }
                            }
                            // ctrl.registerOnChange(this.CheckInput);
                            _ctrls[field.name] = ctrl;
                        }
                        else {
                            _cols.push({
                                name: field.name,
                                tbname: field.tbname,
                                header: field.title,
                                editable: field.editable,
                                btc_idx: field.btcColm,
                                field_idx: field_count,
                                grid: field.grid
                            });
                        }
                    }
                    if (field.disabled) {
                        this.disable_inputfields[field.name] = true;
                    }
                }
                field_count++;
            }, this);
            if (_btcfields.length > 0) {
                _btc.push(_btcfields);
            }
            btc_count++;
        }, this);
        if (formName == null) {
            this.bKopChanged = false;
            this.get_important_fieldindexes();
            this.visible_fields = _btc;
            this.kopForm = this.fb.group(_ctrls);
            this.setdefaults();
        }
        else if (formName == "klant") {
            this.visible_klantfields = _btc;
            this.adresForm = this.fb.group(_ctrls);
        }
    };
    qtService.prototype.createDetailForm = function () {
        var _ctrls = { disabled: true };
        var ctrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', []);
        _ctrls["nwartikel"] = ctrl;
        this.detailForm = this.fb.group(_ctrls);
        this.nwartikelctrl = "nwartikel";
    };
    qtService.prototype.search = function () {
        if ((!this.bOffLine && !this.bSynchronising) || this.user.relatienr == "0")
            this.gettxs();
        else if (this.user.relatienr != "0")
            this.show_formdefs_from_localstorage();
    };
    qtService.prototype.gettxs = function () {
        var _this = this;
        if (this.disable_actions) {
            return;
        }
        var _url = this.ServerConstants.rooturl + 'api/FormGetTxs';
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);
        this.formdef["usersettings"] = this.user;
        this.form_content = JSON.stringify(this.formdef);
        this.bLoading = true;
        //    this.qq=JSON.stringify({'fd':'test'});
        //    var data=JSON.stringify({'fd':'test'});
        // var headers = new Headers();
        var _icon = "";
        var _tthis = this;
        var _summariser = {};
        this.cursorShape = "wait";
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.user.relatienr != "0") {
            var observable = this.http.post(_url, this.form_content, { headers: this.ServerConstants.headers });
        }
        else {
            _url = "http://localhost:4200/mockapi/order.jsn";
            var observable = this.http.get(_url, { headers: this.ServerConstants.headers });
        }
        observable.
            map(function (res) { return res.json(); }).subscribe(function (data) {
            //   console.log(data);
            _this.cursorShape = "auto";
            if (data.Status == "Ok") {
                _tthis.rowids = data.rowids.slice(); //keep resultset. resultset in info{} will be lost after moving in rs
                _tthis.rspointer = 0;
                //this.rowsvalues = this.getdetailrows();
                _tthis.formdef = data;
                _tthis.copyFormDefToFormControls();
                _tthis.bKopChanged = false;
                _tthis.bDetailChanged = false;
                _tthis.disable_save = true;
                _tthis.getDetailsMatrix(_tthis);
                //     _tthis.find_seizoen(data["bootstrapcolumns"][0].fielddefs[_tthis.seizoen_idx].value);
                if (_tthis.rowsvalues.length > 0) {
                    _tthis.getmatrixrows(_tthis.findartikel(_tthis.rowsvalues[0]));
                    _tthis.getvrrdmatrixrows();
                }
                else {
                    _tthis.rowsmatrix.length = 0;
                }
            }
            else if (data.Status == "niets gevonden") {
                _tthis.rowids = [];
                _tthis.sDialogMsg = data.Message;
                _tthis.sDialogHeader = data.Status;
                _tthis.bMessage = true;
            }
            else {
                _tthis.rowids = [];
                _tthis.sErrorMsg = data.Message;
                _tthis.sErrorHeader = data.Status;
                _tthis.bError = true;
            }
            _tthis.bLoading = false;
            _tthis.enableMoveButtons();
            _tthis.set_iconcolors();
        });
    };
    qtService.prototype.gettx = function (rowid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var _summariser = {};
        var _icon = "";
        var _tthis = this;
        this.cursorShape = "auto";
        headers.append('Content-Type', 'application/json');
        this.gettxfromdb(rowid).subscribe(function (data) {
            _tthis.cursorShape = "auto";
            _tthis.formdef = data;
            //this.rowsvalues = this.getdetailrows();
            var _tt = data.bootstrapcolumns.filter(function (btc) { return !btc.detail; }).map(function (btc) { return btc.fielddefs; });
            _tthis.bKopChanged = false;
            _tthis.bDetailChanged = false;
            _tthis.disable_save = true;
            _tthis.copyFormDefToFormControls();
            _tthis.getDetailsMatrix(_tthis);
            //   _tthis.find_seizoen(data["bootstrapcolumns"][0].fielddefs[_tthis.seizoen_idx].value);
            if (_tthis.rowsvalues.length > 0) {
                _tthis.getmatrixrows(_tthis.findartikel(_tthis.rowsvalues[0]));
                _tthis.getvrrdmatrixrows();
            }
            else {
                _tthis.rowsmatrix.length = 0;
            }
            _tthis.set_iconcolors();
        });
    };
    qtService.prototype.gettxfromdb = function (rowid) {
        var _url = this.ServerConstants.rooturl + 'api/FormGetTx/' + rowid;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        return this.http.get(_url).
            map(function (res) { return res.json(); });
        ;
    };
    qtService.prototype.gettx_fromlocalstorage = function (id) {
        this.formdef = JSON.parse(window.localStorage.getItem(id));
        this.copyFormDefToFormControls();
        this.getDetailsMatrix(this);
        if (this.rowsvalues.length > 0) {
            this.getmatrixrows(this.findartikel(this.rowsvalues[0]));
        }
        this.bDetailChanged = false;
    };
    qtService.prototype.get_allformdefs_from_localstorage = function () {
        this.formdefs_in_localstorage.length = 0;
        for (var formdef in window.localStorage) {
            if (formdef.substr(0, 6) == "order_") {
                this.formdefs_in_localstorage.push(formdef.slice(0));
            }
        }
    };
    qtService.prototype.show_formdefs_from_localstorage = function () {
        this.get_allformdefs_from_localstorage();
        this.gettx_fromlocalstorage(this.formdefs_in_localstorage[0]);
        this.enableMoveButtons();
    };
    qtService.prototype.getusersettings = function (dbname, email) {
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/dbname/' + dbname + "/email" + "/" + email;
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/dbname/' + dbname + "/email" + "/" + email;
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/';
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/';
        //var _url = this.ServerConstants.rooturl + 'api/getUserSettings/' + email;
        var _url = this.ServerConstants.rooturl + 'api/getUserSettings/' + dbname + "/" + email + "/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json;q=0.9');
        return this.http.get(_url).
            map(function (res) { return res.json(); });
    };
    qtService.prototype.savetx = function () {
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);
        if (!this.bOffLine)
            this.savetoserver();
        else
            this.savetolocalstorage();
    };
    qtService.prototype.savetolocalstorage = function () {
        var seqnumber = window.localStorage.length;
        if (this.formdef_id == "") {
            var customername = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value;
            this.formdef_id = "order_" + customername + "_" + seqnumber;
        }
        window.localStorage.setItem(this.formdef_id, JSON.stringify(this.formdef));
        this.clear();
        this.gettx_fromlocalstorage(this.formdef_id);
        this.formdef_id = "";
        this.sDialogMsg = "order is bewaard op dit werkstation";
        this.sDialogHeader = "order ";
        this.bMessage = true;
        this.bDetailChanged = false;
        this.update_all_adres();
    };
    //
    qtService.prototype.savetoserver = function () {
        var _this = this;
        var _url = this.ServerConstants.rooturl + 'api/FormSave';
        this.delete_null_rows_from_formdef();
        if (this.bSaving) {
            return;
        }
        this.bSaving = true;
        this.cursorShape = "wait";
        this.formdef["usersettings"] = this.user;
        this.form_content = JSON.stringify(this.formdef);
        var _tthis = this;
        var len = 0;
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (!this.disable_actions) {
            this.disable_actions = true;
            this.disable_save = true;
            this.http.post(_url, this.form_content, { headers: this.ServerConstants.headers }).
                map(function (res) { return res.json(); }).subscribe(function (data) {
                //  console.log(data);
                _tthis.disable_actions = false;
                _tthis.cursorShape = "auto";
                if (data.Message == "Ok") {
                    _tthis.rowids[_this.rspointer] = data.bootstrapcolumns[0].fielddefs[0].value;
                    _tthis.formdef = data;
                    _tthis.bKopChanged = false;
                    _tthis.bDetailChanged = false;
                    _tthis.getDetailsMatrix(_tthis);
                    if (_tthis.bSynchronising) {
                        _tthis.clearfromlocalstorage();
                    }
                    _tthis.update_all_adres();
                    _tthis.bNewRelatie = false;
                    _tthis.copyFormDefToFormControls();
                }
                else {
                    _tthis.sErrorMsg = data.Message;
                    _tthis.sErrorHeader = data.Status;
                    _tthis.bError = true;
                    _tthis.disable_save = false;
                }
                _tthis.bSaving = false;
            });
        }
    };
    qtService.prototype.setdefaults = function () {
        var _this = this;
        var index = 0;
        for (var i = 0; i < this.user["defaults"].length; i++) {
            if (this.kopForm.controls[this.user["defaults"][i].pair[0]] != undefined) {
                this.kopForm.controls[this.user["defaults"][i].pair[0]].setValue(this.user["defaults"][i].pair[1]);
            }
            else {
                var fieldindex = this.formdef["bootstrapcolumns"][0].fielddefs.findIndex(function (fielddef) { return fielddef.name == _this.user["defaults"][i].pair[0]; });
                this.formdef["bootstrapcolumns"][0].fielddefs[fieldindex].value = this.user["defaults"][i].pair[1];
            }
            if (this.user["defaults"][i].pair[0] == 'seizoen') {
                if (this.kopForm.controls["seizoen"] != undefined) {
                    if (this.kopForm.controls["seizoen"].disabled) {
                        //     this.find_seizoen(this.user["defaults"][i].pair[1]);//must be called explicitly because in case field seizoen is diabled,                
                        this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false }); //seizoenexists is not called from validator 
                        this.bSeizoenIsValid = true;
                    }
                }
            }
        }
    };
    qtService.prototype.determineHidden = function (fieldtbname) {
        if (this.user.role == "customer" && fieldtbname == "relatie") {
            return true;
        }
        else {
            return false;
        }
    };
    qtService.prototype.determineHidden2 = function (fieldname) {
        if (this.user.role == "customer" && fieldname == "seizoen") {
            this.hidden[fieldname] = true;
        }
    };
    qtService.prototype.determineDisabled = function (disabled) {
        if ((disabled == 2 && this.user.role == "customer") || disabled == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    qtService.prototype.artselect = function (event) {
        var i = 0;
    };
    // copyAdresToFormDef(dropdownfield) {
    //     let label = dropdownfield.label;
    //     this.kopForm.get("afleveradres").setValue(label);
    //     let adres = dropdownfield.selectedOption.values;
    //     for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
    //         let btcfields = this.visible_klantfields[btc];
    //         let fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];
    //             if (adres[field.name] != undefined) {
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = adres[field.name];
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].oldvalue = adres[field.name];
    //                 this.adresForm.get(field.name).setValue(adres[field.name]);
    //             }
    //         }
    //     }
    // }
    // copyKlantToFormDef(index) {
    //     let i = 0;
    // }
    // qqcopyFormControlsToFormDef(bSearch) {
    //     var btcfields = [];
    //     var fieldcount = 0;
    //     for (var btc = 0; btc < this.visible_fields.length; btc++) {
    //         btcfields = this.visible_fields[btc];
    //         fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];
    //             if (field.disabled != 3 || bSearch) { //diables=3 means: field can be edited for purpose of seraching. But when saving, the input is ignored 
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = this.kopForm.controls[field.name].value;
    //             }
    //         }
    //     }
    //     for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
    //         btcfields = this.visible_klantfields[btc];
    //         fieldcount = 0;
    //         for (var j = 0; j < btcfields.length; j++) {
    //             let field: field;
    //             field = btcfields[j];
    //             if (field.disabled != 3 || bSearch) { //diables=3 means: field can be edited for purpose of seraching. But when saving, the input is ignored 
    //                 this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = this.adresForm.controls[field.name].value;
    //             }
    //         }
    //     }
    //     this.adresheader = this.kopForm.get("afleveradres").value + " adres " + this.kopForm.get("naam").value;
    // }
    qtService.prototype.copyFormControlsToFormDef = function (bSearch, bOldValues, visible_fields) {
        var btcfields = [];
        var fieldcount = 0;
        var formgroup;
        if (visible_fields[0][0].popup_windowname != "klant") {
            formgroup = this.kopForm;
        }
        else {
            formgroup = this.adresForm;
        }
        for (var btc = 0; btc < visible_fields.length; btc++) {
            btcfields = visible_fields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                var field = void 0;
                field = btcfields[j];
                if (field.disabled != 3 || bSearch) {
                    this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value = formgroup.controls[field.name].value;
                    if (bOldValues) {
                        this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].oldvalue = formgroup.controls[field.name].value;
                    }
                }
            }
        }
    };
    qtService.prototype.copyFormDefToFormControls = function () {
        var btcfields = [];
        //this.kopForm.reset(); this statement generates  TypeError: Cannot read property 'length' of null. I have no clue. I replace is with createform
        this.createForm(null);
        for (var btc = 0; btc < this.visible_fields.length; btc++) {
            btcfields = this.visible_fields[btc];
            var _tthiss = this;
            var _loop_1 = function () {
                var field = btcfields[j];
                if (field.popup_windowname == null) {
                    this_1.kopForm.get(field.name).setValue(this_1.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value);
                    if (this_1.dom_elements != undefined) {
                        if (this_1.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].type === "checkbox") {
                            var index = this_1.dom_elements._results.findIndex(function (el) { return el.nativeElement.id == field.name; });
                            if (this_1.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value == 1) {
                                this_1.dom_elements._results[index].nativeElement.checked = true;
                            }
                            else {
                                this_1.dom_elements._results[index].nativeElement.checked = false;
                            }
                        }
                    }
                }
            };
            var this_1 = this;
            for (var j = 0; j < btcfields.length; j++) {
                _loop_1();
            }
        }
        if (this.user.role != "customer") {
            this.getcustomeradresses(this.kopForm.get("relatienr").value); // customers only see their own orders. So existing adressesfor customer do not change between orders
        }
        for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
            btcfields = this.visible_klantfields[btc];
            for (var j = 0; j < btcfields.length; j++) {
                var field = btcfields[j];
                if (field.popup_windowname == "klant") {
                    this.adresForm.get(field.name).setValue(this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value);
                }
            }
        }
        if (this.formdef["bootstrapcolumns"][0].fielddefs[this.bBevestigd_idx].value == "1") {
            this.sBevestigdMessage = "Order is bevestigd op " + this.kopForm.get("datum").value;
            this.bBevestigd = true;
        }
        else {
            this.sBevestigdMessage = "";
            this.bBevestigd = false;
        }
        if (this.user.role == "customer") {
            this.adresheader = this.kopForm.get("afleveradres").value + " adres " + this.user.naam_plaats;
        }
        else {
            this.adresheader = this.kopForm.get("afleveradres").value + " adres " + this.kopForm.get("naam").value;
        }
    };
    qtService.prototype.dropdown_selected = function (field, value) {
        if (this.kopForm.get("afleveradres").value == value) {
            return true;
        }
    };
    qtService.prototype.Changed = function (event) {
        //      if (!this.bValidatingFromAutocomplete) {
        this.bKopChanged = false;
        var btcfields = [];
        var fieldcount = 0;
        for (var btc = 0; btc < this.visible_fields.length; btc++) {
            btcfields = this.visible_fields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                var field = void 0;
                field = btcfields[j];
                if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value != this.kopForm.controls[field.name].value) {
                    this.bKopChanged = true;
                    j = 100;
                    btc = 100;
                }
            }
        }
        for (var btc = 0; btc < this.visible_klantfields.length; btc++) {
            btcfields = this.visible_klantfields[btc];
            fieldcount = 0;
            for (var j = 0; j < btcfields.length; j++) {
                var field = void 0;
                field = btcfields[j];
                if (this.formdef["bootstrapcolumns"][field.btc_idx].fielddefs[field.field_idx].value != this.adresForm.controls[field.name].value) {
                    this.bKopChanged = true;
                    j = 100;
                    btc = 100;
                }
            }
        }
        this.disable_save = this.SetDisableSave();
        if (event.currentTarget.id == "naam") {
            var _tthis = this;
        }
        //this.bValidatingFromAutocomplete = false;
    };
    qtService.prototype.move = function (direction) {
        if (this.disable_actions) {
            return;
        }
        if (direction == 1) {
            this.rspointer++;
        }
        else if (direction == -1) {
            this.rspointer--;
        }
        else if (direction == 0) {
            this.rspointer = 0;
        }
        else if (direction == 9999) {
            if (this.bOffLine || this.bSynchronising)
                this.rspointer = this.formdefs_in_localstorage.length;
            else
                this.rspointer = this.rowids.length - 1;
        }
        if (this.bOffLine || this.bSynchronising)
            this.gettx_fromlocalstorage(this.formdefs_in_localstorage[this.rspointer]);
        else
            this.gettx(this.rowids[this.rspointer]);
        this.enableMoveButtons();
    };
    qtService.prototype.enableMoveButtons = function () {
        if (this.rspointer == 0) {
            this.disable_moveFirst = true;
            this.disable_movePrevious = true;
        }
        else {
            this.disable_moveFirst = false;
            this.disable_movePrevious = false;
        }
        var len = 0;
        if (this.bOffLine || this.bSynchronising)
            len = this.formdefs_in_localstorage.length;
        else
            len = this.rowids.length;
        if (this.rspointer == len - 1) {
            this.disable_moveEnd = true;
            this.disable_moveNext = true;
        }
        else {
            this.disable_moveEnd = false;
            this.disable_moveNext = false;
        }
    };
    qtService.prototype.onEdit = function (event) {
        var i = 0;
    };
    qtService.prototype.clearrequest = function () {
        if (this.bDetailChanged || !this.kopForm.pristine) {
            this.sDialogMsg = "Er zijn wijzigingen die nog niet zijn bewaard. Cancel ?";
            this.sDialogHeader = "er zijn wijzigingen die niet zijn opgeslagen";
            this.bDialog_JaNeeReverse = true;
            this.request = "clear";
        }
        else {
            this.clear();
        }
    };
    qtService.prototype.moverequest = function (direction) {
        if (this.bDetailChanged || !this.kopForm.pristine) {
            this.sDialogMsg = "Er zijn wijzigingen die nog niet zijn bewaard. Cancel ?";
            this.sDialogHeader = "er zijn wijzigingen die niet zijn opgeslagen";
            this.bDialog_JaNeeReverse = true;
            this.request = "move";
            this.move_direction = direction;
        }
        else {
            this.bDialog_JaNeeReverse = false;
            this.move(direction);
        }
    };
    qtService.prototype.execute_request = function () {
        if (this.request == "clear") {
            this.clear();
        }
        else if (this.request == "move") {
            this.move(this.move_direction);
        }
        else if (this.request == "synchronise") {
            this.bSynchronising = true;
            this.gettx_fromlocalstorage(this.formdefs_in_localstorage[0]);
            this.enableMoveButtons();
        }
        else if (this.request == "clearfromlocalstorage") {
            this.clearfromlocalstorage();
        }
        else if (this.request == "synchronise_stop") {
            this.bSynchronising = false;
        }
        this.hide_confirm_dialog();
    };
    qtService.prototype.hide_confirm_dialog = function () {
        //let bLocalStorageSynchronising = false;
        if (this.request == "clearfromlocalstorage") {
            // if (this.formdefs_in_localstorage.length > 0) {
            //let bLocalStorageSynchronising = true;
            this.bDialog_JaNee = true;
            this.sDialogHeader = "bevestig";
            this.sDialogMsg = "stoppen met synchroniseren?";
            this.request = "synchronise_stop";
            //}
            //else {
            this.bSynchronising = false;
        }
        //if (!bLocalStorageSynchronising) {
        this.bDialog_JaNee = false;
        this.bDialog_JaNeeReverse = false;
        this.bDialog_NeeJa = false;
        this.request = "";
        //}
    };
    qtService.prototype.clear = function () {
        this.bDialog_JaNeeReverse = false;
        //this.saveForm=true;
        //this.kopForm.reset();
        this.createForm(null);
        this.createForm("klant");
        this.detailForm.reset();
        this.rowsvalues = [];
        this.rowsmatrix = [];
        this.dropdownlist_adres.length = 0;
        this.bError = false;
        this.nwArtikel = "";
        this.matrixtitle = "";
        this.voorraadtitle = "";
        this.adresheader = "";
        this.bKopChanged = false;
        this.bBevestigd = false;
        this.bDetailChanged = false;
        this.bDetailHidden = true;
        this.bDetailEmpty = true;
        this.bDialog_JaNee = false;
        this.bDialog_JaNeeReverse = false;
        this.bDialog_NeeJa = false;
        this.bAdresInfo = false;
        this.bMessage = false;
        this.disable_copy = true;
        this.disable_delete = true;
        this.disable_moveEnd = true;
        this.disable_moveFirst = true;
        this.disable_moveNext = true;
        this.disable_movePrevious = true;
        this.disable_save = true;
        this.disable_tabel = true;
        this.rowids = [];
        this.totals.length = 0;
        //this.bSynchronising = false;
        this.bNewRelatie = false;
        this.bValidatingFromAutocomplete = false;
        if (this.formdef["FormName"] == this.formname) {
            this.formdef["rowids"].length = 0;
            for (var i = 0; i < this.formdef["bootstrapcolumns"].length; i++) {
                this.formdef["bootstrapcolumns"][i].rows.length = 0;
                for (var j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].value = null;
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].oldvalue = null;
                }
            }
            this.setdefaults();
        }
        if (this.user.role == "customer") {
            this.filteradresses(this.user.relatienr);
            if (this.dropdownlist_adres.length == 1) {
                this.bHideAfleverAdres = true;
            }
            else {
                this.bHideAfleverAdres = false;
                if (this.dropdownlist_adres.length == 0) {
                    this.dropdownlist_adres[0] = "nieuwadres";
                }
            }
        }
        if (this.bSynchronising) {
            this.request = "clearfromlocalstorage";
            this.bDialog_JaNee = true;
            this.sDialogHeader = "bevestigen";
            this.sDialogMsg = "verwijderen van dit werkstation?";
        }
    };
    qtService.prototype.clearfromlocalstorage = function () {
        localStorage.removeItem(this.formdefs_in_localstorage[this.rspointer]);
        this.formdefs_in_localstorage.splice(this.rspointer, 1);
        if (this.rspointer + 1 > this.formdefs_in_localstorage.length) {
            this.rspointer = this.formdefs_in_localstorage.length - 1;
        }
        if (this.formdefs_in_localstorage.length == 0) {
            this.bSynchronising = false;
        }
        else {
            this.gettx_fromlocalstorage(this.formdefs_in_localstorage[this.rspointer]);
        }
    };
    qtService.prototype.findartikel = function (art_argument) {
        var artfound = this.all_art.find(function (art) { return art.artikelnr == art_argument.artikelnr; });
        return artfound;
    };
    qtService.prototype.setrequest = function (request) {
        this.request = request;
    };
    qtService.prototype.toggle_images_size = function () {
        this.createArtGallery();
        this.updateArtGalleryVoorraad();
        var t = this.artgallery.pop();
        //setTimeout(this.artgallery.push(t),1000);
        if (this.galleryclass == "col-xs-12 col-sm-3 col-md-1") {
            this.galleryclass = "col-xs-12 col-sm-6 col-md-2";
            this.gallerybutton_label = "kleine plaatjes";
            this.galleryrows = 12;
            this.gallerypagelinks = 3;
        }
        else {
            this.galleryclass = "col-xs-12 col-sm-3 col-md-1";
            this.gallerybutton_label = "grote plaatjes";
            this.galleryrows = 36;
            this.gallerypagelinks = 6;
        }
    };
    qtService.prototype.toggle_editmode = function () {
        if (!this.bSummy) {
            var _bedrag = 0;
            var newheader = false;
            var _attributeMirrored = "";
            var _artikel = {};
            var _thisrow = [];
            var _rowssummy = [];
            var _rowdata = {};
            var _cols = [];
            var oldMaat = void 0;
            //_cols = ["artikel", "kleur", "adviesprijs", "prijs", "XS", "S", "M", "L", "XL", "XXL", "aantal", "bedrag"]
            for (var i = 0; i < this.rowsvalues.length; i++) {
                _artikel = this.findartikel(this.rowsvalues[i]);
                if (i > 0) {
                    newheader = oldMaat != _artikel["artmaat"].join();
                }
                if (newheader) {
                    _rowdata = new (rowdata);
                    _rowdata["Artikel"] = "Artikel";
                    _rowdata["Kleur"] = "Kleur";
                    _rowdata["Adviesprijs"] = "AdviesPrijs";
                    _rowdata["Prijs"] = "Prijs";
                    for (var j = 0; j < _artikel["artmaat"].length; j++) {
                        _attributeMirrored = "Maat_" + String.fromCharCode(65 + j);
                        _rowdata[_attributeMirrored] = _artikel["artmaat"][j];
                    }
                    _rowdata["Aantal"] = "Aantal";
                    _rowdata["Bedrag"] = "Bedrag";
                    _rowssummy.push(_rowdata);
                }
                oldMaat = _artikel["artmaat"].join();
                this.getmatrixrows(_artikel);
                for (var j = 0; j < this.rowsmatrix.length; j++) {
                    _rowdata = new (rowdata);
                    var k = 0;
                    var aantal = 0;
                    for (var attribute in this.rowsmatrix[j]) {
                        if (attribute != "Kleur") {
                            _attributeMirrored = "Maat_" + String.fromCharCode(65 + k);
                            aantal = aantal + this.rowsmatrix[j][attribute];
                            k++;
                        }
                        else {
                            _attributeMirrored = attribute;
                            _rowdata["Artikel"] = _artikel["artikelnr"];
                            _rowdata["Adviesprijs"] = _artikel["adviesprijs"];
                            _rowdata["Prijs"] = _artikel["verkoopprijs"];
                        }
                        _rowdata[_attributeMirrored] = this.rowsmatrix[j][attribute];
                    }
                    _rowdata["Aantal"] = aantal;
                    _bedrag = Math.round(aantal * _artikel["verkoopprijs"] * 100) / 100;
                    //_rowdata["bedrag"] = _bedrag.toLocaleString(undefined, { minimumFractionDigits: 2 });
                    _rowdata["Bedrag"] = _bedrag.toFixed(2);
                    if (aantal != 0) {
                        _rowssummy.push(_rowdata);
                    }
                }
                ;
            }
            this.rowsmatrix = _rowssummy;
            _cols.length = 0;
            this.bSummy = true;
            //this.rows_disabled_cells=[];
            this.colstyles_detail = this.colstyles_detail_viewmode;
            this.colsqtitle = ["Artikel", "Kleur", "Adviesprijs", "Prijs"];
            _artikel = this.findartikel(this.rowsvalues[0]);
            this.colsqtitle = this.colsqtitle.concat(_artikel["artmaat"]).concat(["Aantal", "Bedrag"]);
            var _dummy = ["Artikel", "Kleur", "Adviesprijs", "Prijs", "Maat_A", "Maat_B", "Maat_C", "Maat_D", "Maat_E", "Maat_F", "Aantal", "Bedrag"];
            this.colsmatrix = _dummy;
            var _row_disabled_cel = Array(this.colsmatrix.length);
            _row_disabled_cel.fill("");
            this.rows_disabled_cells = Array(_rowssummy.length);
            this.rows_disabled_cells.fill(_row_disabled_cel);
            this.button_ovt_label = "wijzigmodus";
            this.matrixtitle = "totaal overzicht";
        }
        else {
            this.colstyles_detail = this.colstyles_detail_editmode;
            this.getmatrixrows(this.findartikel(this.rowsvalues[0]));
            this.button_ovt_label = "overzicht";
            this.bSummy = false;
        }
    };
    qtService.prototype.toggle_single_voorraad = function () {
        if (this.b_vrrd_single_item)
            this.show_voorraad_entire();
        else
            this.getvrrdmatrixrows();
    };
    qtService.prototype.show_voorraad_entire = function () {
        var _rowdata;
        var startindex = -1;
        var _bedrag = 0;
        var art_idx = 0;
        var voorraad = 0;
        var totvoorraad = 0;
        var newheader = false;
        var dim1waarde_idx = 1;
        var dim2waarde_idx = 2;
        var vrrdecono_idx = 3;
        var vrrdtech_idx = 4;
        var _attributeMirrored = "";
        var _artstam;
        var oldMaat = "";
        var _thisrow = [];
        var _rows_all_voorraad = [];
        var _cols = [];
        this.b_vrrd_single_item = false;
        this.colstyles_detail = this.colstyles_detail_viewmode;
        for (var i = 0; i < this.artgallery.length; i++) {
            _artstam = this.findartikel(this.artgallery[i]);
            if (i == 0) {
                //*** the header is created usting the maat[x] from the first _artstam
                this.colsvrrdmatrix = ["Artikelnr", "Kleur"];
                for (var j = 0; j < _artstam["artmaat"].length; j++) {
                    this.colsvrrdmatrix.push(_artstam.artmaat[j]);
                }
                this.colsvrrdmatrix.push("Totaal");
                oldMaat = _artstam.artmaat.join();
            }
            newheader = oldMaat != _artstam.artmaat.join();
            if (newheader) {
                _rowdata["Artikel"] = "Artikelnr";
                _rowdata["Kleur"] = "Kleur";
                for (var j = 0; j < _artstam.artmaat.length; j++) {
                    _rowdata[_artstam.artmaat[j]] = _artstam.artmaat[j];
                }
                oldMaat = _artstam.artmaat.join();
            }
            startindex = this.all_voorraad["rows"].findIndex(function (row) { return row.values[art_idx] == _artstam.artikelnr; });
            for (var j = 0; j < _artstam.artkleur.length; j++) {
                voorraad = null;
                totvoorraad = 0;
                _rowdata = new (rowdata);
                _rowdata.Artikelnr = _artstam.artikelnr;
                _rowdata.Kleur = _artstam.artkleur[j];
                for (var k = 0; k < _artstam.artmaat.length; k++) {
                    if (startindex != -1) {
                        voorraad = null;
                        for (var m = startindex; m < this.all_voorraad["rows"].length; m++) {
                            if (this.all_voorraad["rows"][m].values[art_idx] != _artstam.artikelnr) {
                                m = this.all_voorraad["rows"].length;
                            }
                            else if (this.all_voorraad["rows"][m].values[dim1waarde_idx] == _artstam.artkleur[j] &&
                                this.all_voorraad["rows"][m].values[dim2waarde_idx] == _artstam.artmaat[k]) {
                                voorraad = Number(this.all_voorraad["rows"][m].values[vrrdecono_idx]);
                                totvoorraad = totvoorraad + voorraad;
                            }
                        }
                    }
                    _rowdata[_artstam.artmaat[k]] = voorraad;
                }
                if (totvoorraad >= 0) {
                    _rows_all_voorraad.push(_rowdata);
                    _rowdata["Totaal"] = totvoorraad;
                }
            }
        }
        this.rowsvrrdmatrix = _rows_all_voorraad;
        this.colvrrdstyles = this.colvrrdstyles_entire;
        this.button_singlevrrd_label = "enkel";
        this.voorraadtitle = "alle voorraad van " + this.createSeizoenReferencetext();
    };
    qtService.prototype.toggle_showvoorraad = function () {
        this.bVoorraad = !this.bVoorraad;
    };
    qtService.prototype.getvoorraad = function () {
        var _this = this;
        var _tthis = this;
        this.disable_VrrdFris = true;
        this.lookup_generic("voorraadlookup").subscribe(function (data) {
            _tthis.all_voorraad = data;
            if (data.TableName.substring(0, 5) == "error") {
                _tthis.bError = true;
                _this.sErrorMsg = data.TableName;
            }
            else {
                _tthis.getvrrdmatrixrows();
                _tthis.updateArtGalleryVoorraad();
            }
            _this.disable_VrrdFris = false;
        });
    };
    qtService.prototype.get_important_fieldindexes = function () {
        this.seizoen_idx = 7; //hardcode. after implement use of formcontroller, I get value from there using controller["fieldname"]
        for (var i = 0; i < this.formdef["bootstrapcolumns"].length; i++) {
            for (var j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                if (this.formdef["bootstrapcolumns"][i].detail) {
                    switch (this.formdef["bootstrapcolumns"][i].fielddefs[j].name) {
                        case "dim1waarde":
                            this.btc_idx = i;
                            this.art_idx = j;
                            break;
                        case "dim2waarde":
                            this.kleur_idx = j;
                            break;
                        case "dim3waarde":
                            this.maat_idx = j;
                            break;
                        case "freenumfield1":
                            this.freenumfield1_idx = j;
                            break;
                        case "autoadded":
                            this.autoadded_idx = j;
                            break;
                        case "aantal":
                            this.aantal_idx = j;
                            break;
                        case "valbedrag":
                            this.valbedrag_idx = j;
                            break;
                        case "rowid":
                            this.rowid_idx = j;
                            break;
                        case "stock_not_counted":
                            this.not_counted_idx = j;
                            break;
                    }
                }
                else {
                    switch (this.formdef["bootstrapcolumns"][i].fielddefs[j].name) {
                        case "bevestigd":
                            this.bBevestigd_idx = j;
                            break;
                        case "naam":
                            this.naam_idx = j;
                            this.relatie_idx = i;
                            break;
                        case "relatienr":
                            if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie") {
                                this.relatienr_idx = j;
                            }
                            break;
                        case "datum":
                            this.datum_idx = j;
                            break;
                        case "ordernr":
                            this.order_idx = i;
                            this.ordernr_idx = j;
                            break;
                        case "rowid":
                            if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie") {
                                this.rowid_relatie_idx = j;
                            }
                            else if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "adres") {
                                this.adres_idx = i;
                                this.rowid_adres_idx = j;
                            }
                            break;
                    }
                }
            }
        }
    };
    qtService.prototype.populate_relatie = function (klant) {
        var _this = this;
        var relatienr = this.kopForm.get("relatienr").value;
        var ctrl;
        var bFound;
        var fd_index;
        //let klant = this.all_klant["rows"].find(row => row.values[1] == relatienr).values;
        this.all_klant["fields"].forEach(function (field, index) {
            if (field == "rrowid")
                field = "rowid";
            ctrl = _this.kopForm.get(field);
            if (field != "relatienr" && ctrl != undefined) {
                ctrl.setValue(klant.values[index]);
            }
            bFound = false;
            var len = _this.formdef["bootstrapcolumns"].length;
            for (var i = 0; i < len; i++) {
                fd_index = _this.formdef["bootstrapcolumns"][i].fielddefs.findIndex(function (fd) { return fd.tbname == "relatie" && fd.name == field; });
                if (fd_index != -1) {
                    _this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].value = klant["values"][index];
                    _this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].oldvalue = klant["values"][index];
                    i = 1000;
                }
            }
        }, this);
        var afleveradres = this.getcustomeradresses(relatienr);
        this.kopForm.controls["afleveradres"].setValue(afleveradres);
        if (afleveradres != null) {
            this.populate_adrespopup(afleveradres);
        }
    };
    qtService.prototype.populate_adrespopup = function (adreslabel) {
        var _this = this;
        var relatienr;
        if (this.user.role == "customer") {
            relatienr = this.user.relatienr;
            this.kopForm.controls["afleveradres"].setValue(adreslabel); // for customer, no populate_relatie. thats done in server via 'defaults' 
            this.adresheader = adreslabel + " adres " + this.user.naam_plaats;
        }
        else {
            relatienr = this.kopForm.get("relatienr").value;
            this.adresheader = adreslabel + " adres " + this.kopForm.get("naam").value;
        }
        var ctrl;
        var bFound;
        var fd_index;
        var adres = this.all_adres["rows"].find(function (row) { return row.values[1] == relatienr && row.values[2] == adreslabel; }).values;
        //@#! forEach just does not work. A mess with the this context
        this.all_adres["fields"].forEach(function (field, index) {
            if (field == "rrowid")
                field = "rowid";
            ctrl = _this.adresForm.get(field);
            if (ctrl != undefined) {
                ctrl.setValue(adres[index]);
            }
            bFound = false;
            var len = _this.formdef["bootstrapcolumns"].length;
            for (var i = 0; i < len; i++) {
                fd_index = _this.formdef["bootstrapcolumns"][i].fielddefs.findIndex(function (fd) { return fd.tbname == "adres" && fd.name == field; });
                if (fd_index != -1) {
                    _this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].value = adres[index];
                    _this.formdef["bootstrapcolumns"][i].fielddefs[fd_index].oldvalue = adres[index];
                    i = 1000;
                }
            }
        }, this);
    };
    qtService.prototype.clearklant = function (bClearName) {
        var len = this.formdef["bootstrapcolumns"].length;
        this.adresheader = "";
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < this.formdef["bootstrapcolumns"][i].fielddefs.length; j++) {
                if (this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "relatie" ||
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].tbname == "adres" ||
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].name == "afleveradres") {
                    this.formdef["bootstrapcolumns"][i].fielddefs[j].value = null;
                    var ctrl = this.kopForm.get(this.formdef["bootstrapcolumns"][i].fielddefs[j].name);
                    if (ctrl != null && bClearName) {
                        ctrl.setValue("");
                    }
                    ctrl = this.adresForm.get(this.formdef["bootstrapcolumns"][i].fielddefs[j].name);
                    if (ctrl != null) {
                        ctrl.setValue("");
                    }
                }
            }
        }
        //this.copyFormDefToFormControls();// this does not work. In 'copyFormDefToFormControls', the context 'this' is lost
    };
    qtService.prototype.update_all_adres = function () {
        var _this = this;
        var adreslabel = this.kopForm.get("afleveradres").value;
        var relatienr = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.relatienr_idx].value;
        var ctrl;
        var adres;
        if (!this.bNewRelatie) {
            adres = this.all_adres["rows"].find(function (row) {
                return row.values[1] == relatienr && row.values[2] == adreslabel;
            });
            if (adres == null) {
                return;
            }
        }
        else {
            adres = { values: [] };
            this.all_adres.rows.push(adres);
        }
        this.all_adres["fields"].forEach(function (field, index) {
            ctrl = _this.adresForm.get(field);
            if (ctrl != undefined) {
                adres.values[index] = ctrl.value;
            }
            else if (_this.bNewRelatie) {
                if (field == "doel") {
                    adres.values[index] = _this.kopForm.get("afleveradres").value;
                }
                if (field == 'relatienr') {
                    adres.values[index] = relatienr;
                }
            }
        }, this);
        adres.values[0] = this.formdef["bootstrapcolumns"][this.adres_idx].fielddefs[this.rowid_adres_idx].value;
    };
    qtService.prototype.dummy = function () {
        var f = 0;
    };
    // cust_addfromchange_event(lookupindex) {
    //     if (this.autocomplete_list[lookupindex].length > 0) {
    //         this.cust_add(this.autocomplete_list[lookupindex][0], lookupindex);
    //     }
    //     else {
    //         this.bAdress = true;
    //     }
    //     this.disable_save = this.SetDisableSave();
    // }
    qtService.prototype.cust_add = function (searchargument, lookupindex) {
        var olduppername = this.kopForm.get("naam").value.toUpperCase();
        var name = searchargument;
        var uppername = name.toUpperCase();
        if (olduppername != uppername && olduppername.indexOf(uppername) >= 0)
            return;
        searchargument = searchargument.toUpperCase();
        if (lookupindex == 0) {
        }
        else if (lookupindex == 1) {
            var LinefeedPos = searchargument.indexOf("\n");
            if (LinefeedPos != -1) {
                var searchargument2 = searchargument.substr(LinefeedPos + 1, 100);
                searchargument = searchargument.substr(0, LinefeedPos);
                var klanten = this.all_klant["rows"].filter(function (row) { return row.values[2].toUpperCase() == searchargument &&
                    row.values[4].toUpperCase() == searchargument2; }).map(function (row) { return row.values[1]; });
            }
            else {
                var klanten = this.all_klant["rows"].filter(function (row) { return row.values[2].toUpperCase().indexOf(searchargument) == 0; }).map(function (row) { return row.values[1]; });
            }
            if (klanten.length == 1) {
                this.kopForm.controls["relatienr"].setValue(klanten[0]);
            }
            else {
                this.bNewRelatie = true;
                this.bAdresInfo = true;
                this.clearklant(0);
                this.adresheader = "afleveradres van nieuwe klant " + name;
                this.kopForm.get("afleveradres").setValue("statutair");
                this.dropdownlist_adres[0] = "statutair";
            }
        }
    };
    qtService.prototype.filtercustomer = function (index, x) {
        this.autocomplete_list[0].length = 0;
        this.autocomplete_list[1].length = 0;
        var relatieword = "";
        if (this.bNewRelatie) {
            relatieword = " nieuwe klant ";
        }
        this.adresheader = "afleveradres van " + relatieword + x.query;
        this.clearklant(0);
        if (index == 0) {
            this.autocomplete_list[0] = this.all_seizoen["rows"].map(function (row) { return row.values[0]; }).filter(function (seizoen) { return seizoen.search(new RegExp(x.query, "i"))
                === 0 && seizoen != 'Basic'; });
        }
        else if (index = 1) {
            this.autocomplete_list[1] = this.all_klant["rows"].map(function (row) { return row.values[2] + "\n" + row.values[4]; }).filter(function (cust) { return cust.search(new RegExp(x.query, "i")) === 0; });
        }
    };
    qtService.prototype.getcustomeradresses = function (relatienr) {
        if (this.kopForm.get("relatienr").valid) {
            return this.filteradresses(relatienr);
        }
    };
    qtService.prototype.filteradresses = function (relatienr) {
        this.dropdownlist_adres.length = 0;
        this.dropdownlist_adres = this.all_adres["rows"].filter(function (adres) { return adres.values[1] == relatienr; }).map(function (adres) {
            return adres.values[2];
        });
        if (this.dropdownlist_adres.length > 0) {
            this.populate_adrespopup(this.dropdownlist_adres[0]);
        }
        return this.dropdownlist_adres[0];
    };
    qtService.prototype.KopBindings = function () {
        // this.kopForm.valueChanges.subscribe(value=>console.log(value));
        var i = 0;
    };
    qtService.prototype.HideErrorMessage = function () {
        this.bError = false;
        this.sErrorHeader = "";
        this.sErrorMsg = "";
    };
    qtService.prototype.HideMessage = function () {
        this.bMessage = false;
        this.MessageClass = "";
        //  this.sDialogHeader = "";
        // this.sDialogMsg = "";
        // this.bArtikelGallery = false;
        this.bAdresInfo = false;
    };
    qtService.prototype.InputfieldIsDBLClicked = function (field) {
        if (field.currentTarget.id == "afleveradres") {
            this.bAdresInfo = !this.bAdresInfo;
        }
    };
    qtService.prototype.toggleArtikelGallery = function () {
        this.bArtikelGallery = !this.bArtikelGallery;
    };
    qtService.prototype.nwArtikelMsg = function () {
        if (!this.bArtikelenFetched) {
            this.sDialogHeader = "artikel ingeven is nog niet mogelijk";
            this.sDialogMsg = "bezig met laden artikelen";
            this.bMessage = true;
        }
        else if (!this.bSeizoenIsValid) {
            this.sDialogHeader = "artikel ingeven is niet mogelijk";
            this.sDialogMsg = "seizoen eerst invullen";
            this.bMessage = true;
        }
        else {
        }
    };
    qtService.prototype.deleteItemDialogue = function (event) {
        var artikelnr = event.data.artikelnr;
        this.bDialog_NeeJa = true;
        this.sDialogHeader = "bevestig";
        this.sDialogMsg = "artikel " + event.data.artikelnr + " verwijderen?";
    };
    qtService.prototype.art_addfromchange_event = function (x) {
        var _tthis = this;
        setTimeout(function () { _tthis.art_add(x.target.value); }, 200);
    };
    qtService.prototype.art_add_from_gallery = function (art) {
        if (this.voorraadmessage(art))
            return;
        this.art_add(art["artikelnr"]);
        this.setmatrixrows_just_one_empty(art["artikelnr"]);
    };
    qtService.prototype.art_add = function (artnr) {
        var upperartnr = artnr.toUpperCase();
        var oldupperartnr = this.matrixtitle;
        if (oldupperartnr != null) {
            oldupperartnr = oldupperartnr.toUpperCase();
            if (oldupperartnr.indexOf(upperartnr) == 0)
                return;
        }
        var artikel = this.artgallery.find(function (art) { return art.artikelnr.toUpperCase().search(artnr.toUpperCase()) == 0; });
        if (artikel == undefined) {
            this.bMessage = true;
            this.sDialogHeader = "foutieve invoer";
            this.sDialogMsg = "artikel " + artnr + " niet gevonden";
            return "";
        }
        else if (artikel.dynclass == "blurred") {
            this.voorraadmessage(artikel);
            return "";
        }
        artikel = this.findartikelbyartnr(artikel.artikelnr);
        this.getmatrixrows(artikel);
        this.getvrrdmatrixrows();
        // if (this.all_art_is_counted.indexOf(artnr) >= 0 || this.seizoen["iscurrent"] == "1") {
        //     this.NewArtIconColor = this.color_counted;
        // }
        // else {
        //     this.NewArtIconColor = this.color_not_counted;
        // }
        return artikel.artikelnr;
    };
    qtService.prototype.findartikelbyartnr = function (artnr) {
        //var artfound = this.all_art.find(art => art.artikelnr == artnr);
        var artfound = this.all_art.find(function (art) { return art.artikelnr.toLowerCase() == artnr.toLowerCase(); });
        return artfound;
    };
    qtService.prototype.art_select = function (x) {
        var artnr = x.target.value;
        this.bError = true;
        this.sErrorMsg = "artikel: " + x.target.value;
        if (this.arts.find(function (art) { return art == artnr; })) {
            this.art_add(x.target.value);
        }
    };
    qtService.prototype.getdetailrows = function () {
        //from all datarows the visible fields are copied into the detailrows. Only for non-matrix. (matrix view has 'createSummariser')
        // wel gecodeerd, nog niet getest
        var _rowvalues = new (rowdata);
        var _rowsvalues = [];
        var tt;
        var rowcount = 0;
        var field = null;
        var btc_idx = 0;
        var attribute = "";
        var attribute_lookup = "";
        for (var i = 0; i < this.formdef["bootstrapcolumns"][this.btc_idx].rows; i++) {
            for (var j = 0; j < this["fields"].length; j++) {
                if (this["fields"][j].btc_idx == i && this["fields"][j].field_idx == j) {
                    _rowvalues[this["fields"][j].name] = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].fielddefs[j].value;
                }
                this.rowsvalues.push(_rowvalues);
            }
        }
        return _rowsvalues;
    };
    qtService.prototype.filter_from_artgallery = function (x) {
        this.art_selected = false;
        //this.arts = this.all_art.filter(this_art => this_art.artikelnr.search(new RegExp(x.query, "i")) === 0 &&
        //  (this_art.seizoen === this.kopForm.controls["seizoen"].value || this_art.seizoen == "Basic" || this.voorraadexists(this_art.artikelnr))).map(this_art => this_art.artikelnr);
        if (x.query != "") {
            this.arts = this.artgallery.filter(function (this_art) { return this_art.artikelnr.search(new RegExp(x.query, "i")) === 0; }).
                map(function (this_art) { return this_art.artikelnr; });
        }
        else {
            this.arts = this.artgallery.map(function (this_art) { return this_art.artikelnr; });
        }
    };
    qtService.prototype.handle_artikel_dropdown = function () {
        var _this = this;
        this.arts = [];
        //mimic remote call
        setTimeout(function () {
            _this.arts = _this.artgallery.map(function (this_art) { return this_art.artikelnr; });
        }, 100);
    };
    qtService.prototype.voorraadexists = function (artikelnr) {
        return this.all_voorraad["rows"].findIndex(function (row) { return row["values"][0] == artikelnr; }) > -1;
    };
    qtService.prototype.createSummariser = function () {
        var _existing;
        var _rowvalues = [];
        var _oldrowvalues = [];
        var summariser = {};
        var existing = {};
        var aantal = 0;
        var oldaantal = 0;
        var count = 0;
        var artnr = "";
        var method = "";
        var autoadded = false;
        var valbedrag = 0;
        var icon_color = "green";
        for (count = 0; count < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; count++) {
            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method == "") {
                this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method = null;
            }
            _rowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].values;
            _oldrowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].oldvalues;
            autoadded = this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].values[this.autoadded_idx] == 1;
            if (!autoadded) {
                artnr = _rowvalues[this.art_idx];
                aantal = Number(_rowvalues[this.aantal_idx]) * -1;
                oldaantal = Number(_oldrowvalues[this.aantal_idx]) * -1;
                valbedrag = Number(_rowvalues[this.valbedrag_idx]) * -1;
                if (_rowvalues[this.rowid_idx] != null) {
                    existing[artnr] = true;
                }
                if (summariser[artnr] == undefined) {
                    summariser[artnr] = {
                        icon_color: "green",
                        artikelnr: artnr,
                        aantal: aantal,
                        valbedrag: valbedrag,
                        method: this.formdef["bootstrapcolumns"][this.btc_idx].rows[count].method
                    };
                }
                else {
                    if (summariser[artnr].method != "delete") {
                        summariser[artnr].aantal = summariser[artnr].aantal + aantal;
                        summariser[artnr].valbedrag = summariser[artnr].valbedrag + valbedrag;
                        if (existing[artnr] != undefined) {
                            if (aantal != oldaantal) {
                                summariser[artnr].method = "update";
                            }
                        }
                        else {
                            if (aantal != 0) {
                                summariser[artnr].method = "insert";
                            }
                        }
                    }
                }
            }
        }
        return summariser;
    };
    qtService.prototype.createlookup_userdata = function () {
        //The attribute (combi of item+kleur+maat) points to 
        //rownumber in bootstrapcolumns[x].row[?]
        var rowcount = 0;
        var rowvalues = [];
        var attribute_lookup = "";
        var _lookup_userdata = {};
        var btc = this.formdef["bootstrapcolumns"][this.btc_idx];
        for (rowcount = 0; rowcount < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; rowcount++) {
            rowvalues = this.formdef["bootstrapcolumns"][this.btc_idx].rows[rowcount].values;
            attribute_lookup = rowvalues[this.art_idx] + rowvalues[this.kleur_idx] + rowvalues[this.maat_idx];
            _lookup_userdata[attribute_lookup] = rowcount;
        }
        return _lookup_userdata;
    };
    qtService.prototype.getmatrixrows = function (art) {
        if (art.artkleur == null) {
            this.bError = true;
            this.sErrorMsg = "geen kleuren gedefinieerd in stamgegevens artikel, artikel kan niet worden gebruikt";
            return;
        }
        if (art.artmaat == null) {
            this.bError = true;
            this.sErrorMsg = "geen maten gedefinieerd in stamgegevens artikel, artikel kan niet worden gebruikt";
            return;
        }
        var _sourcerow = [];
        var artnr = "";
        var kleur = "";
        var maat = "";
        var maat_idx = 0;
        var _rows = [];
        var _cols = [];
        var index = 0;
        var _row = {};
        _cols.push("Kleur");
        for (var i = 0; i < art.artmaat.length; i++) {
            _cols.push(art.artmaat[i]);
        }
        for (var i = 0; i < art.artkleur.length; i++) {
            _rows.push(this.creatematrixrow(art.artkleur[i], art.artmaat));
        }
        for (var i = 0; i < this.formdef["bootstrapcolumns"][this.btc_idx].rows.length; i++) {
            //_sourcerow=this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values;
            artnr = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.art_idx];
            kleur = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.kleur_idx];
            maat = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.maat_idx];
            if (artnr == art.artikelnr) {
                index = _rows.findIndex(function (_row) { return _row.Kleur == kleur; });
                if (index == -1) {
                    _rows.push(this.creatematrixrow(kleur, art.artmaat)); // add item if not present in maat/kleur in artikelstam
                    index = _rows.length - 1;
                }
                _rows[index][maat] = this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.aantal_idx] * -1;
            }
        }
        this.matrixtitle = art.artikelnr;
        this.bVoorraadExists = false;
        if (this.bVoorraadFetched) {
            var art_in_gallery = this.artgallery.find(function (artgal) { return artgal.artikelnr == art.artikelnr; });
            if (art_in_gallery.voorraad > 0) {
                this.bVoorraadExists = true;
            }
        }
        this.matrixprijs = art.verkoopprijs;
        this.rowsmatrix = _rows;
        this.colsmatrix = _cols;
        this.colsqtitle = _cols;
        this.button_ovt_label = "overzicht";
        this.bSummy = false;
    };
    qtService.prototype.creatematrixrow = function (kleur, maat) {
        var _row = new (rowdata);
        var _rowstyles = [];
        _row.Kleur = kleur;
        for (var j = 0; j < maat.length; j++) {
            _row[maat[j]] = null;
        }
        // _row.styles=_rowstyles;
        return _row;
    };
    qtService.prototype.getDetailsMatrix = function (_tthis) {
        //based on summariser: create the array that feeds the left datatable
        var _summariser = {};
        var _icon = "";
        var bedrag = 0;
        var totaantal = 0;
        var totbedrag = 0;
        _tthis.rowsvalues.length = 0;
        _tthis.iconRowHeader.length = 0;
        _summariser = this.createSummariser();
        _tthis.bDetailChanged = false;
        _tthis.bDetailEmpty = true;
        for (var attribute in _summariser) {
            var i = 0;
            _tthis.bDetailEmpty = false;
            bedrag =
                _summariser[attribute].valbedrag = _summariser[attribute].valbedrag.toFixed(2);
            _tthis.rowsvalues.push(_summariser[attribute]);
            if (_summariser[attribute].method != 'delete') {
                totaantal = totaantal + _summariser[attribute].aantal;
                totbedrag = totbedrag + Number(_summariser[attribute].valbedrag);
            }
            if (_summariser[attribute].method == 'update') {
                _icon = "fa fa-pencil";
                _tthis.bDetailChanged = true;
            }
            else if (_summariser[attribute].method == 'insert') {
                _icon = "fa fa-plus";
                _tthis.bDetailChanged = true;
            }
            else if (_summariser[attribute].method == 'delete') {
                _icon = "fa fa-trash";
                _tthis.bDetailChanged = true;
            }
            else {
                _icon = "fa fa-square";
            }
            _tthis.iconRowHeader.push(_icon);
        }
        _tthis.totals.length = 0;
        _tthis.totals.push(null);
        _tthis.totals.push(totaantal);
        _tthis.totals.push(totbedrag.toFixed(2));
        _tthis.lookup_userdata = this.createlookup_userdata();
        _tthis.disable_save = this.SetDisableSave();
        _tthis.set_iconcolors();
    };
    qtService.prototype.setmatrixrows_just_one_empty = function (artnr) {
        var artikel = this.findartikelbyartnr(artnr);
        var propertyname = artikel.artikelnr + artikel.artkleur[0] + artikel.artmaat[0];
        var index = this.lookup_userdata[propertyname];
        if (index == undefined) {
            index = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length;
            var rowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
            rowvalues[this.art_idx] = artikel.artikelnr;
            rowvalues[this.kleur_idx] = artikel.artkleur[0];
            rowvalues[this.maat_idx] = artikel.artmaat[0];
            rowvalues[this.aantal_idx] = null;
            rowvalues[this.valbedrag_idx] = null;
            rowvalues[this.not_counted_idx] = "0";
            this.formdef["bootstrapcolumns"][this.btc_idx].rows.push({ method: "", values: rowvalues, oldvalues: rowvalues });
            //this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method = "insert";
            this.getDetailsMatrix(this);
        }
    };
    qtService.prototype.setmatrixrows = function () {
        var artnr = this.matrixtitle; //Call getDetailsMatrix to reflect the user input in the left matrix.  
        var bOk = true;
        var index = 0;
        var kleur = "";
        var aantal = 0;
        var vrrdaantal = 0;
        var propertyname = "";
        var method = null;
        var rowvalues = [];
        var oldrowvalues = [];
        //this.getvrrdmatrixrows();
        for (var i = 0; i < this.rowsmatrix.length; i++) {
            kleur = this.rowsmatrix[i].Kleur;
            for (var maat in this.rowsmatrix[i]) {
                if (maat != "Kleur" && bOk) {
                    aantal = this.rowsmatrix[i][maat];
                    if (aantal != null) {
                        aantal = this.rowsmatrix[i][maat];
                        if (isNaN(aantal)) {
                            this.sDialogMsg = this.rowsmatrix[i][maat] + " is geen geldig getal";
                            bOk = false;
                        }
                        else if (aantal < 0) {
                            this.sDialogMsg = "het aantal " + this.rowsmatrix[i][maat] + " is kleiner dan nul, niet toegestaan";
                            bOk = false;
                        }
                        else {
                            index = this.rowsvrrdmatrix.findIndex(function (vrrdart) { return vrrdart.Kleur === kleur; });
                            if (index >= 0) {
                                vrrdaantal = this.rowsvrrdmatrix[index][maat] * 1;
                                if (vrrdaantal < 0) {
                                    vrrdaantal = 0; //in case of negative stock, set stock=0 so user can always change oldamount into a new lesser amount
                                }
                                if (isNaN(vrrdaantal)) {
                                    vrrdaantal = 0;
                                }
                                var propertyname_1 = artnr + kleur + maat;
                                var index2 = this.lookup_userdata[propertyname_1];
                                var oudaantal = 0;
                                if (index2 >= 0) {
                                    oudaantal = this.formdef["bootstrapcolumns"][this.btc_idx].rows[index2].oldvalues[this.aantal_idx] * -1;
                                }
                                if (vrrdaantal < aantal - oudaantal && aantal > 0 && this.seizoen["iscurrent"] != "1") {
                                    this.sDialogMsg = "het aantal " + aantal + " is groter dan de beschikbare voorraad ";
                                    bOk = false;
                                    this.rowsmatrix[i][maat] = null;
                                }
                            }
                        }
                    }
                }
                if (!bOk) {
                    i = 1000;
                }
            }
        }
        if (!bOk) {
            this.sDialogHeader = "invoerfout";
            this.bMessage = true;
            this.getmatrixrows(this.findartikelbyartnr(artnr));
        }
        else {
            for (var i = 0; i < this.rowsmatrix.length; i++) {
                kleur = this.rowsmatrix[i].Kleur;
                for (var maat in this.rowsmatrix[i]) {
                    if (maat != "Kleur") {
                        propertyname = artnr + kleur + maat;
                        aantal = this.rowsmatrix[i][maat] * -1;
                        index = this.lookup_userdata[propertyname];
                        //initional lookup_userdata is created after fetching from db. Its a mapping between the item/kleur/maat to rownumber 
                        //in the formdef that will be written to db after save.
                        if (index == undefined && aantal != 0 && aantal != null) {
                            index = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length;
                            rowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
                            oldrowvalues = new Array(this.formdef["bootstrapcolumns"][this.btc_idx].fielddefs.length);
                            rowvalues[this.art_idx] = artnr;
                            rowvalues[this.kleur_idx] = kleur;
                            rowvalues[this.maat_idx] = maat;
                            rowvalues[this.freenumfield1_idx] = this.matrixprijs;
                            rowvalues[this.aantal_idx] = 0;
                            rowvalues[this.valbedrag_idx] = 0;
                            oldrowvalues[this.aantal_idx] = 0;
                            oldrowvalues[this.valbedrag_idx] = 0;
                            if (this.NewArtIconColor == this.color_not_counted) {
                                rowvalues[this.not_counted_idx] = "1";
                            }
                            else {
                                rowvalues[this.not_counted_idx] = "0";
                            }
                            this.formdef["bootstrapcolumns"][this.btc_idx].rows.push({ method: "", values: rowvalues, oldvalues: oldrowvalues });
                            this.lookup_userdata[propertyname] = index;
                        }
                        if (index != undefined) {
                            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method != "delete") {
                                method = null;
                                if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.rowid_idx] == null) {
                                    if (aantal != 0) {
                                        //rowid = null meaning that user added this in this same session, having pressed 'add' before   
                                        method = 'insert';
                                    }
                                }
                                else if (aantal != this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].oldvalues[this.aantal_idx]) {
                                    method = 'update';
                                }
                                this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].method = method;
                            }
                            this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.aantal_idx] = aantal;
                            this.formdef["bootstrapcolumns"][this.btc_idx].rows[index].values[this.valbedrag_idx] = (aantal * this.matrixprijs).toFixed(2);
                        }
                    }
                }
            }
        }
        this.getDetailsMatrix(this);
    };
    // set_iconcolors() {
    //     var artnr: string;
    //     var artnr2: string;
    //     var index: number;
    //     var _NotCounted= this.rowsvalues.filter(rowsvalue => {
    //         artnr=rowsvalue.artikelnr;
    //         index=this.formdef["bootstrapcolumns"][this.btc_idx].rows.findIndex(row => { 
    //             artnr2=row["values"][this.art_idx] ;
    //             if (artnr == artnr2 && row["values"][this.not_counted_idx]) return true},
    //             this);
    //         if (index>=0) return true;
    //         //return true;
    //     }, 
    //     this).map(rowsvalue=>rowsvalue.artikelnr);
    //     this.NotCounted=_NotCounted;
    // }
    qtService.prototype.set_iconcolors = function () {
        var _this = this;
        var artnr;
        var voorraadstatus;
        var index;
        var _colors = this.rowsvalues.forEach(function (rowsvalue) {
            artnr = rowsvalue.artikelnr;
            voorraadstatus = _this.getvoorraadstatus(artnr);
            if (voorraadstatus == "voorraadgreen")
                rowsvalue.icon_color = "green";
            else if (voorraadstatus == "voorraadblue")
                rowsvalue.icon_color = "blue";
        }, this);
    };
    qtService.prototype.TotalVrrdForArtikel = function (artnr) {
        var art_idx = 0;
        var dim1waarde_idx = 1;
        var dim2waarde_idx = 2;
        var vrrdecono_idx = 3;
        var vrrdtech_idx = 4;
        var vrrd = 0;
        var totvrrd = null;
        if (this.all_voorraad != null) {
            var startindex = this.all_voorraad["rows"].findIndex(function (row) { return row.values[art_idx] == artnr; });
            if (startindex != -1) {
                for (var j = startindex; j < this.all_voorraad["rows"].length; j++) {
                    if (this.all_voorraad["rows"][j].values[art_idx] == artnr) {
                        var vrrd_1 = Number(this.all_voorraad["rows"][j].values[vrrdecono_idx]);
                        if (!isNaN(vrrd_1)) {
                            totvrrd = totvrrd + vrrd_1;
                        }
                    }
                    else {
                        j = 100000;
                    }
                }
            }
            if (totvrrd < 0) {
                totvrrd = 0;
            }
        }
        return totvrrd;
    };
    qtService.prototype.getvrrdmatrixrows = function () {
        var _this = this;
        if (this.bOffLine) {
            return;
        }
        var row = null;
        var kleur = null;
        var voorraad = null;
        var startindex;
        var art_idx = 0;
        var dim1waarde_idx = 1;
        var dim2waarde_idx = 2;
        var vrrdecono_idx = 3;
        var vrrdtech_idx = 4;
        var _row = {};
        var _rows = [];
        var _colsvrrdmatrix = [];
        var _rows_disabled_cells = [];
        this.b_vrrd_single_item = true;
        this.button_singlevrrd_label = "alles";
        startindex = this.all_voorraad["rows"].findIndex(function (row) { return row.values[art_idx] == _this.matrixtitle; });
        this.bCounted = this.all_art_is_counted.indexOf(this.matrixtitle) >= 0 || this.seizoen["iscurrent"] == 1;
        // this.rowsvrrdmatrix= Object.assign({},this.rowsmatrix);
        this.rowsvrrdmatrix.length = 0;
        var _tthis = this;
        this.rowsmatrix.forEach(function (row, loopcount) {
            _row = new (rowdata);
            var _row_disabled_cells = [" "]; //array for setting backgroundcolor to red if vrrd<0. Start with empty element "" correspond with first column 'kleur'
            for (var attribute in row) {
                if (loopcount == 0) {
                    _colsvrrdmatrix.push(attribute);
                }
                if (attribute == "Kleur") {
                    kleur = row[attribute];
                    _row[attribute] = kleur;
                    _row_disabled_cells[attribute] = kleur;
                }
                else {
                    var bFound = false;
                    if (startindex != -1) {
                        for (var j = startindex; j < _this.all_voorraad["rows"].length; j++) {
                            if (_tthis.all_voorraad["rows"][j].values[art_idx] == _tthis.matrixtitle && _tthis.all_voorraad["rows"][j].values[dim1waarde_idx] == kleur
                                && _tthis.all_voorraad["rows"][j].values[dim2waarde_idx] == attribute) {
                                bFound = true;
                                _row[attribute] = _tthis.all_voorraad["rows"][j].values[vrrdecono_idx];
                                if ((_row[attribute] <= 0) && row[attribute] == null && _this.seizoen["iscurrent"] != "1") {
                                    _row_disabled_cells.push("cell_disabled");
                                }
                                else {
                                    _row_disabled_cells.push("");
                                }
                                j = 100000;
                            }
                        }
                    }
                    if (!bFound) {
                        _row[attribute] = null;
                        if (row[attribute] == null && _this.seizoen["iscurrent"] != "1")
                            _row_disabled_cells.push("cell_disabled");
                        else
                            _row_disabled_cells.push("");
                    }
                }
            }
            _rows.push(_row);
            _rows_disabled_cells.push(_row_disabled_cells);
        }, this);
        this.voorraadtitle = "de totale voorraad van " + this.matrixtitle + " is " + this.TotalVrrdForArtikel(this.matrixtitle);
        this.bCounted = true;
        if (!this.bCounted) {
            this.voorraadtitle = this.voorraadtitle + " (onder voorbehoud)";
            this.bCounted = false;
        }
        this.rowsvrrdmatrix = _rows;
        this.colsvrrdmatrix = _colsvrrdmatrix;
        this.colvrrdstyles = this.colvrrdstyles_single;
        this.rows_disabled_cells = _rows_disabled_cells;
        this.voorraad_id = this.getvoorraadstatus(this.matrixtitle);
    };
    // getentirevrrdmatrixrows() {// creates the array that feeds the datatable to shows the voorraad     
    //     var kleur = null;
    //     var voorraad = null;
    //     var startindex;
    //     var art_idx = 0;
    //     var dim1waarde_idx = 1;
    //     var dim2waarde_idx = 2;
    //     var vrrdecono_idx = 3;
    //     var vrrdtech_idx = 4;
    //     var _row = {};
    //     var _rows = [];
    //     this.voorraadtitle = "de totale voorraad van " + this.matrixtitle + " is " + this.TotalVrrdForArtikel(this.matrixtitle);
    //     startindex = this.all_voorraad["rows"].findIndex(row => row.values[art_idx] == this.matrixtitle);
    //     this.rowsmatrix.forEach(row => {
    //         _row = new (rowdata);
    //         for (var attribute in row) {
    //             if (attribute == "kleur") {
    //                 kleur = row[attribute]
    //                 _row[attribute] = kleur;
    //             }
    //             else {
    //                 if (startindex != -1) {
    //                     for (var j = startindex; j < this.all_voorraad["rows"].length; j++) {
    //                         if (this.all_voorraad["rows"][j].values[art_idx] == this.matrixtitle && this.all_voorraad["rows"][j].values[dim1waarde_idx] == kleur
    //                             && this.all_voorraad["rows"][j].values[dim2waarde_idx] == attribute) {
    //                             _row[attribute] = this.all_voorraad["rows"][j].values[vrrdecono_idx];
    //                             j = 100000;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         _rows.push(_row);
    //     }, this);
    //     this.all_voorraad["rows"].forEach(row => {
    //         row.values.forEach(value =>
    //             _row)
    //     })
    //     this.voorraadtitle = "de totale voorraad van " + this.matrixtitle + " is " + this.TotalVrrdForArtikel(this.matrixtitle);
    //     if (!this.bCounted) {
    //         this.voorraadtitle = this.voorraadtitle + " (onder voorbehoud)"
    //     }
    //     this.rowsvrrdmatrix = _rows;
    //     this.voorraad_id = this.getvoorraadstatus(this.matrixtitle)
    // }
    qtService.prototype.getvoorraadstatus = function (artnr) {
        var artikel = this.findartikelbyartnr(artnr);
        var _seizoen = this.all_seizoen["rows"].find(function (row) { return row.values[0] == artikel.seizoen; });
        this.bnaleveren = false;
        var voorraad_status = "";
        if (_seizoen != undefined) {
            voorraad_status = "voorraadgreen"; //for now, its simple. Voorraadbasic we show as blue icon. All other is green. 
        }
        else {
            voorraad_status = "voorraadblue"; //basic artikel
        }
        // if (_seizoen != undefined) {
        //     let bCurrentSeizoen = _seizoen.values[3] == "1";
        //     if (bCurrentSeizoen) {
        //         voorraad_status = "voorraadcrnt";
        //     }
        //     else if (_seizoen.values[2] == "1") {
        //         this.bnaleveren = true;
        //         if (this.all_art_is_counted.indexOf(artnr) >= 0) {
        //             voorraad_status = "voorraadcounted";
        //         }
        //         else {
        //             voorraad_status = "voorraadnotcounted";
        //         }
        //     }
        // }
        // else {
        //     if (artikel.seizoen == "Basic") {
        //         voorraad_status = "voorraadbasic";
        //     }
        //     else {
        //         voorraad_status = "voorraadcrnt";
        //     }
        // }
        return voorraad_status;
    };
    qtService.prototype.onRowClick = function (event) {
        this.getmatrixrows(this.findartikel(event.data));
        this.getvrrdmatrixrows();
    };
    qtService.prototype.celledit = function (event) {
        event.data[event.column.field]++;
    };
    qtService.prototype.startCellEdit = function (event) {
        this.keepEvent = event;
        this.column_ID = event.column.field;
    };
    qtService.prototype.addOne = function (x) {
        if (x.deltaY < 0) {
            this.keepEvent.data[this.column_ID]++;
        }
        else if (this.keepEvent.data[this.column_ID] > 0) {
            this.keepEvent.data[this.column_ID]--;
        }
        x.stopPropagation(x);
        //event.data[event.column.field]++;
    };
    qtService.prototype.delete_null_rows_from_formdef = function () {
        for (var i = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length - 1; i >= 0; i--) {
            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.rowid_idx] == undefined &&
                (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.valbedrag_idx] == null ||
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.valbedrag_idx] == 0)) {
                this.formdef["bootstrapcolumns"][this.btc_idx].rows.splice(i, 1);
            }
        }
    };
    qtService.prototype.deleteItem = function (yesorno) {
        var allitems_removed = true;
        this.bDialog_NeeJa = false;
        this.sDialogMsg = "";
        var deletesetting = null;
        if (yesorno) {
            deletesetting = "delete";
        }
        else {
            deletesetting = null;
        }
        for (var i = this.formdef["bootstrapcolumns"][this.btc_idx].rows.length - 1; i >= 0; i--) {
            if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].values[this.art_idx] == this.matrixtitle) {
                if (this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].oldvalues[this.aantal_idx] != null &&
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].oldvalues[this.aantal_idx] != 0) {
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows[i].method = deletesetting;
                    allitems_removed = false;
                }
                else {
                    this.formdef["bootstrapcolumns"][this.btc_idx].rows.splice(i, 1);
                }
            }
        }
        //this.setmatrixrows();
        if (allitems_removed) {
            this.rowsmatrix.length = 0;
        }
        this.getDetailsMatrix(this);
    };
    qtService.prototype.SetDisableSave = function () {
        this.bChanged = (this.bKopChanged && !this.bDetailEmpty) || this.bDetailChanged;
        return !(this.bChanged && this.kopForm.valid && this.adresForm.valid && !this.bBevestigd);
    };
    qtService.prototype.CheckInput = function (control) {
        var i = 0;
    };
    qtService.prototype.ClearNwArtikel = function () {
        this.detailForm.get("nwartikel").setValue("");
    };
    qtService.prototype.SeizoenExists = function (control) {
        if (control["oldvalue"] != control.value) {
            if (this.all_seizoen["rows"].length > 0) {
                if (!this.find_seizoen(control.value)) {
                    this.detailForm.controls["nwartikel"].reset({ value: null, disabled: true });
                    return {
                        "seizoen niet ingevuld of ongeldig": true
                    };
                }
                else {
                    control["oldvalue"] = control.value;
                }
            }
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
            return null;
        }
    };
    qtService.prototype.EmailCheck = function (control) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return {
                " ongeldig": true
            };
        }
    };
    qtService.prototype.FormatCheck = function (fieldname, minlen, format) {
        return function (control) {
            if (format.length < 4 || control.value.length == 0) {
                return null;
            }
            if (control.value.length < minlen) {
                var msg = "de lengte van " + fieldname + " is kleiner dan de minimale " + minlen + " tekens";
                return _a = {}, _a[msg] = true, _a;
            }
            var check = new RegExp(format);
            var bError = !check.test(control.value);
            if (bError) {
                var msg = " is ongeldig";
                return _b = {}, _b[msg] = true, _b;
            }
            else
                return null;
            var _a, _b;
        };
    };
    qtService.prototype.MaxLenCheck = function (maxlen) {
        return function (control) {
            if (control.value.length > maxlen) {
                var msg = "lengte " + control.value.length.toString() + " is groter dan toegestane " + maxlen.toString() + " tekens";
                return _a = {},
                    _a[msg] = true,
                    _a;
            }
            var _a;
        }.bind(this);
    };
    qtService.prototype.showtooltip = function (event) {
        var _this = this;
        var id = event.currentTarget.id;
        var bDragable = false;
        if (this.bHideToolTip)
            return;
        this.sToolTip = null;
        switch (id) {
            case "nieuwartikel":
                {
                    this.sToolTip = "type nieuw artikelnummer of dubbelklik voor foto's";
                }
                break;
            case "leveringtext":
                {
                    this.sToolTip = "indicatie van de levertijd voor deze bestelling";
                }
                break;
            case "clear":
                {
                    this.sToolTip = "wis alle inhoud van dit scherm";
                }
                break;
            case "search":
                {
                    this.sToolTip = "vind alle orders met de waardes zoals die zijn ingevuld op het scherm";
                }
                break;
            case "overzicht":
                {
                    if (!this.bSummy) {
                        this.sToolTip = "klik voor het overzicht van alle bestelde artikelen.";
                    }
                    else {
                        this.sToolTip = "klik om de bestelling aan te passen";
                    }
                }
                break;
            case "excel":
                {
                    if (!this.bSummy) {
                        this.sToolTip = "Klik op de knop 'overzicht' om deze knop te activeren";
                    }
                    else {
                        this.sToolTip = "Klik voor 'copy' van deze order naar het computergeheugen. Ga dan naar een werkblad in Excel druk ctrl+V (paste)";
                    }
                }
                break;
            case "voorraadbasic":
                {
                    this.sToolTip = "dit artikel blijft ieder seizoen in de collectie. Voorzover er voorraad aanwezig is, kan dit artikel binnen 3 dagen worden geleverd ";
                    bDragable = true;
                    break;
                }
            case "voorraadnotcounted":
                {
                    this.sToolTip = "de getoonde voorraad en dus levering van dit artikel is 3 dagen, maar onder voorbehoud.";
                    bDragable = true;
                    break;
                }
            case "voorraadcounted":
                {
                    this.sToolTip = "voor zover voorraad aanwezig: dit artikel kan binnen 3 dagen worden geleverd";
                    bDragable = true;
                    break;
                }
            case "lefttable":
                {
                    this.sToolTip = "klik op een rij in deze tabel om voor dit artikel te bestellen ";
                }
            default:
                {
                    var btcindex = 0;
                    var index = void 0;
                    for (btcindex = 0; btcindex < this.visible_fields.length; btcindex++) {
                        index = this.visible_fields[btcindex].findIndex(function (field) { return field.name == id; });
                        if (index >= 0)
                            break;
                    }
                    if (index == -1) {
                    }
                    else {
                        this.sToolTip = this.formdef["bootstrapcolumns"][btcindex].fielddefs[this.visible_fields[btcindex][index].field_idx].tooltip;
                    }
                }
                break;
        }
        if (this.sToolTip != null) {
            if (!bDragable) {
                if (id != "lefttable") {
                    if (event.currentTarget.firstElementChild != null) {
                        this.tttop = (event.currentTarget.firstElementChild.getBoundingClientRect().top) + "px";
                        this.ttleft = event.currentTarget.firstElementChild.getBoundingClientRect().right + 60 + "px";
                    }
                    else {
                        this.tttop = (event.currentTarget.getBoundingClientRect().top) + "px";
                        this.ttleft = event.currentTarget.getBoundingClientRect().right + "px";
                    }
                }
                else {
                    this.tttop = (event.currentTarget.getBoundingClientRect().top + 130) + "px";
                    this.ttleft = event.currentTarget.getBoundingClientRect().right + "px";
                }
            }
            else {
                this.tttop = ((event.currentTarget.firstElementChild.getBoundingClientRect().top) + 30) + "px";
                this.ttleft = event.currentTarget.firstElementChild.getBoundingClientRect().right + "px";
            }
            this.bToolTipHide = false;
        }
        this.timeout_id = setTimeout(function () { _this.bToolTipHide = true; }, 3000);
    };
    qtService.prototype.hidetooltip = function () {
        this.bToolTipHide = true;
        clearTimeout(this.timeout_id);
    };
    qtService.prototype.voorraadmessage = function (art) {
        if (art.dynclass == "blurred") {
            this.sDialogHeader = art.artikelnr + " kan niet worden geleverd";
            if (!art.counted) {
                this.sDialogMsg = "de eerste uitlevering van dit artikel is nog niet afgehandeld.";
            }
            else {
                this.sDialogMsg = "van " + art.artikelnr + " is geen voorraad meer beschikbaar";
            }
            this.bMessage = true;
            return true;
        }
        else
            return false;
    };
    qtService.prototype.GetAdres = function (control) {
        var _this = this;
        if (!control.pristine) {
            var check = /^[0-9]{4}[A-Z]{2}$/;
            if (!check.test(control.value))
                return ({
                    ongeldig: true
                });
            var PostcodeObservable = this.PostcodeApi(control.value);
            PostcodeObservable.subscribe(function (response) {
                var data = response.json();
                var headers = response.headers;
                if (data._embedded.addresses.length > 0) {
                    _this.adresForm.get("straat").setValue(data._embedded.addresses[0].street);
                    _this.adresForm.get("woonplaats").setValue(data._embedded.addresses[0].city.label);
                }
                else {
                    _this.adresForm.get("straat").setValue(null);
                    _this.adresForm.get("woonplaats").setValue(null);
                }
                control.markAsPristine();
                //control.setValue(control.value.toUpperCase())
                return null;
            }, function (error) {
                _this.sErrorHeader = "ophalen postcode mislukt";
                _this.bError = true;
                switch (error.status) {
                    case 429:
                        _this.sErrorMsg = "limiet overschreden, response status " + error.status;
                        break;
                    default:
                        _this.sErrorMsg = "response: " + error.status;
                        break;
                }
            });
        }
    };
    qtService.prototype.PostcodeApi = function (postcode) {
        if (postcode.length == 6) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('X-Api-Key', 'IqaKLykXtV5zAbpCIMALK1h9FttdLgvD6xRSdySu');
            // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
            // headers.append('Accept', 'q=0.8;application/json;q=0.9');
            var _url = "https://postcode-api.apiwise.nl/v2/addresses/?postcode=" + postcode;
            // return this.http.get(_url, { headers: headers }).
            //     map(res => res.json())
            return this.http.get(_url, { headers: headers });
        }
    };
    qtService.prototype.createSeizoenReferencetext = function () {
        var seizoenref = "";
        if (this.user.role == 'customer' || this.seizoen["iscurrent"] != "1") {
            this.all_seizoen["rows"].forEach(function (seizoen) {
                if (seizoen.values[2] != 1) {
                    if (seizoenref != "") {
                        seizoenref = seizoenref + ", ";
                    }
                    seizoenref = seizoenref + seizoen.values[0];
                }
            });
        }
        else {
            seizoenref = this.kopForm.controls["seizoen"].value;
        }
        return seizoenref;
    };
    qtService.prototype.createArtGallery = function () {
        var _this = this;
        this.sGalleryHeader = "artikelen seizoen " + this.createSeizoenReferencetext();
        this.artgallery = this.all_art
            .filter(function (artikel) {
            return _this.artikelfilter(artikel);
        })
            .map(function (artikel) {
            //  let voorraad = _tthis.TotalVrrdForArtikel(artikel.artikelnr);
            var omschr = artikel.omschr;
            if (artikel.omschr == " ")
                omschr = artikel.artikelnr;
            //  alert(omschr);
            if (this == undefined) {
                var numDummy = 0;
            }
            var naleveren;
            var index = this.all_seizoen["rows"].findIndex(function (row) { return row.values[0] == artikel.seizoen; });
            if (index >= 0) {
                naleveren = this.all_seizoen["rows"][index].values[2] != 1; //not a current seizoen, so it is naleveren
            }
            else {
                naleveren = true; // seizoen is basic: voorraadcount is relevant.
            }
            return {
                artikelnr: artikel.artikelnr,
                seizoen: artikel.seizoen,
                omschr: omschr,
                voorraad: null,
                counted: false,
                naleveren: naleveren,
            };
        }, this);
    };
    qtService.prototype.artikelfilter = function (artikel) {
        if (this.all_seizoen["rows"].length == 0) {
            return false;
        }
        if (this.user.role == "customer" || this.seizoen["iscurrent"] != "1") {
            if (this == undefined) {
                var numDummy = 0;
            }
            var index = this.all_seizoen["rows"].findIndex(function (row) { return row.values[0] == artikel.seizoen; });
            if (index >= 0) {
                return this.all_seizoen["rows"][index].values[2] != 1;
            }
            else
                return false;
        }
        else {
            return ((artikel.seizoen === this.kopForm.controls["seizoen"].value || artikel.seizoen == "Basic") && artikel.artkleur.length != 0);
        }
    };
    qtService.prototype.updateArtGalleryVoorraad = function () {
        var _this = this;
        if (this.seizoen["iscurrent"] != "1") {
            if (this.all_voorraad != undefined) {
                this.artgallery.forEach(function (art) {
                    art.counted = _this.all_art_is_counted.indexOf(art.artikelnr) >= 0;
                    if (art.counted)
                        art.voorraad = _this.TotalVrrdForArtikel(art.artikelnr);
                    else
                        art.voorraad = null;
                    if (!art.counted || art.voorraad <= 0 || art.voorraad == null)
                        art.dynclass = "blurred";
                    if (_this.user.role == "customer")
                        art.voorraad = null; // hide voorraad voor customer
                    //when artikel is not naleveren, voorraad is not relevant. So do nothing
                }, this);
            }
        }
    };
    qtService.prototype.find_seizoen = function (searchargument) {
        if (this.oldSeizoen == searchargument) {
            this.bSeizoenIsValid = true;
            return true;
        }
        if (searchargument == "") {
            this.bSeizoenIsValid = false;
            return false;
        }
        if (this.all_seizoen["rows"].length == 0) {
            return false;
        }
        this.seizoen = {};
        var index = this.all_seizoen["rows"].findIndex(function (row) { return row.values[0] == searchargument; });
        if (index >= 0) {
            for (var fieldcount = 0; fieldcount < this.all_seizoen["fields"].length; fieldcount++) {
                this.seizoen[this.all_seizoen["fields"][fieldcount]] = this.all_seizoen["rows"][index]["values"][fieldcount];
            }
            var year = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(0, 4));
            var month = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(5, 2)) + 1;
            var day = parseInt(this.all_seizoen["rows"][index]["values"][1].substr(8.2));
            if (!isNaN(year) && !isNaN(month) && !isNaN(day)) { }
            this.seizoen["enddate"] = new Date(year, month, day);
            this.bSeizoenIsValid = true;
            this.oldSeizoen = searchargument;
            this.createArtGallery();
            this.updateArtGalleryVoorraad();
            this.kopForm.get("leveringtext").setValue(this.seizoen["leveringtext"]);
            if (this.user.role != "customer" && this.seizoen["iscurrent"] != "1")
                this.bHideVoorraadButton = false;
            else
                this.bHideVoorraadButton = true;
            if (this.bArtikelenFetched) {
                this.detailForm.controls["nwartikel"].reset({ value: null, disabled: false });
            }
            return true;
        }
        else {
            this.detailForm.controls["nwartikel"].reset({ value: null, disabled: true });
            this.bSeizoenIsValid = false;
            return false;
        }
    };
    qtService.prototype.CreateGalleryItem = function (artikel) {
        return { artnr: artikel.artikelnr };
    };
    qtService.prototype.KlantExists = function (control) {
        if (!this.kopForm.pristine && control.value.length >= 3) {
            var this_klant = this.all_klant["rows"].find(function (row) { return row.values[1] == control.value; });
            if (this_klant == null) {
                // this.clearklant(1);
                return {
                    "niet bestaande klant": true
                };
            }
            else {
                this.bValidatingFromAutocomplete = true;
                this.populate_relatie(this_klant);
                return null;
            }
        }
    };
    qtService.prototype.SaveToLocalTextFile = function () {
        var data = new Blob([" hi there"], { type: 'text/plain' });
        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (this.textFile !== null) {
            window.URL.revokeObjectURL(this.textFile);
        }
        this.textFile = window.URL.createObjectURL(data);
    };
    ;
    qtService.prototype.help = function (Sortof) {
        if (Sortof == "algemeen") {
            this.bMessage = true;
            this.MessageClass = "welcometext";
            this.sDialogHeader = "Bestelpagina van Sophia Perla";
            var welcomeMessage = "";
            welcomeMessage = welcomeMessage + "Welkom op de bestelpagina van Sophia Perla. <br /> <br />";
            welcomeMessage = welcomeMessage + "Geef Uw bestelling op door eerst op de foto's te klikken van de gewenste artikelen. Nadat U de foto's heeft verborgen met de knop 'verberg' kunt U van de aantallen per maat / kleur opgeven. Als U uw bestelling bewaart (klik de knop 'Bewaar'), dan heeft U de rest van de dag de gelegenheid om die bestelling nog aan te passen. Pas aan het einde van de dag wordt de bestelling definitief opgenomen in het bestelboek van Sophia Perla en kunt U de bestelling niet meer aanpassen.  <br /> <br /> U kunt uw eigen bestellinghistorie inzien door op de knop ‘Zoek’ te klikken. U krijgt dan de eerste order te zien die U bij Sophia Perla via deze bestelpagina heeft opgegeven. Met de knoppen ‘begin’, ‘verder’, ‘terug’ en ‘eind’ kunt U heen en terug gaan in Uw historie. En, zoals gezegd: als een bestelling vandaag is opgegeven kunt U die bestelling nog aanpassen. <br /> <br /> Bij veel plekken op scherm verschijnt een help tekst als U met de muis over dat gebied heen beweegt. U kunt die helpteksten uit/inschakelen door met de  muis op 'help'  te klikken en vervolgens op de knop 'Tooltips uit'/'Tooltips aan'  te klikken. <br /> <br /> U kunt deze tekst altijd oproepen door met de muis naar ' help'  te gaan en dan te klikken op 'Welkom tekst'";
            this.sDialogMsg = welcomeMessage;
        }
        if (Sortof == "tooltiptoggle") {
            this.bHideToolTip = !this.bHideToolTip;
            window.localStorage.setItem('bHideToolTip', this.bHideToolTip.toString());
            if (this.bHideToolTip)
                this.sTooltipMessage = "Tooltips aan";
            else
                this.sTooltipMessage = "Tooltips uit";
        }
    };
    qtService.prototype.Excel = function () {
        if (this.rowsmatrix.length == 0) {
            this.bError = true;
            this.sErrorHeader = "boodschap excel";
            this.sErrorMsg = "order is leeg, Excel kan niet worden gemaakt";
            return;
        }
        ;
        var ssCSV = "";
        var fieldvalue = "";
        var btcdetail = -1;
        var field_countmax = -1;
        var column_count = 0;
        var visible_fieldcount = 0;
        var btcfield_countmax = 0;
        var visible_fields = [];
        this.copyFormControlsToFormDef(true, false, this.visible_fields);
        this.copyFormControlsToFormDef(true, false, this.visible_klantfields);
        var naam = this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value.replace("\n", ",  ");
        for (var btccount = 0; btccount < this.formdef["bootstrapcolumns"].length; btccount++) {
            if (!this.formdef["bootstrapcolumns"][btccount].detail) {
                btcfield_countmax = 0;
                visible_fields.push([]);
                for (var fieldcount = 0; fieldcount < this.formdef["bootstrapcolumns"][btccount]["fielddefs"].length; fieldcount++)
                    if (!this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].hidden &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "naam" &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "bcomplete" &&
                        this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].name != "valbedrag") {
                        visible_fields[btccount].push([this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].title, this.formdef["bootstrapcolumns"][btccount]["fielddefs"][fieldcount].value]);
                        btcfield_countmax++;
                    }
                if (btcfield_countmax > field_countmax) {
                    field_countmax = btcfield_countmax;
                }
            }
            else {
                btcdetail = btccount;
            }
        }
        ssCSV = " Order voor\t" + naam + "\t\t" + "Order_" + this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.ordernr_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.datum_idx].value + "\r\n" + "\r\n";
        for (var fieldcount = 0; fieldcount < field_countmax; fieldcount++) {
            for (var btccount = 0; btccount < visible_fields.length; btccount++) {
                if (fieldcount < visible_fields[btccount].length) {
                    ssCSV = ssCSV + visible_fields[btccount][fieldcount][0] + "\t";
                    if (visible_fields[btccount][fieldcount][1] != null) {
                        ssCSV = ssCSV + visible_fields[btccount][fieldcount][1].replace("\n", "  ") + "\t";
                    }
                    else {
                        ssCSV = ssCSV + "\t";
                    }
                }
            }
            ssCSV = ssCSV + "\r\n";
        }
        ssCSV = ssCSV + "\r\n" + "\r\n";
        var sRow = "";
        this.colsqtitle.forEach(function (title) { return ssCSV = ssCSV + title + "\t"; });
        ssCSV = ssCSV + "\r\n";
        for (var rowcount = 0; rowcount < this.rowsmatrix.length; rowcount++) {
            for (var colcount = 0; colcount < this.colsmatrix.length; colcount++) {
                if (this.rowsmatrix[rowcount][this.colsmatrix[colcount]] != null)
                    ssCSV =
                        ssCSV + this.rowsmatrix[rowcount][this.colsmatrix[colcount]] + "\t";
                else {
                    ssCSV = ssCSV + "\t";
                }
            }
            ssCSV = ssCSV + "\r\n";
        }
        for (var i_1 = 0; i_1 < this.colsqtitle.length - 2; i_1++) {
            ssCSV = ssCSV + "\t";
        }
        for (var i_2 = 1; i_2 < this.totals.length; i_2++) {
            ssCSV = ssCSV + this.totals[i_2] + "\t";
        }
        ssCSV = ssCSV + "\r\n" + "\r\n";
        ssCSV = ssCSV + "bestandnaam" + "\t\t" + "Order_" + this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.ordernr_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.relatie_idx].fielddefs[this.naam_idx].value + "_" +
            this.formdef["bootstrapcolumns"][this.order_idx].fielddefs[this.datum_idx].value + "\r\n" + "\r\n";
        var aux = document.createElement("textarea");
        aux.setAttribute("id", "txtsscsv");
        aux.value = ssCSV;
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        var sCsvFile = "data:text/scsv;base64," + window.btoa(ssCSV);
        window.open(sCsvFile, '_blank');
        var i = 1;
    };
    qtService.prototype.ExcelVoorraad = function () {
        var sCSV = this.voorraadtitle + "\r\n";
        sCSV = sCSV + new Date().toLocaleString() + " uur" + "\r\n" + "\r\n";
        for (var i = 0; i < this.colsvrrdmatrix.length; i++) {
            sCSV = sCSV + this.colsvrrdmatrix[i] + "\t";
        }
        sCSV = sCSV + "\r\n";
        var previousartikelnr = this.rowsvrrdmatrix[0].Artikelnr;
        ;
        for (var i = 0; i < this.rowsvrrdmatrix.length; i++) {
            if (this.rowsvrrdmatrix[i].Artikelnr != previousartikelnr) {
                previousartikelnr = this.rowsvrrdmatrix[i].Artikelnr;
                sCSV = sCSV + "\r\n";
            }
            for (var j = 0; j < this.colsvrrdmatrix.length; j++) {
                if (this.rowsvrrdmatrix[i][this.colsvrrdmatrix[j]] != null) {
                    sCSV = sCSV + this.rowsvrrdmatrix[i][this.colsvrrdmatrix[j]];
                }
                sCSV = sCSV + "\t";
            }
            sCSV = sCSV + "\r\n";
        }
        sCSV = sCSV + "\r\n";
        var aux = document.createElement("textarea");
        aux.setAttribute("id", "txtsscsv");
        aux.value = sCSV;
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        var sCsvFile = "data:text/scsv;base64," + window.btoa(sCSV);
        window.open(sCsvFile, '_blank');
    };
    return qtService;
}());
qtService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__constants_on_server__["a" /* ServerConstants */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__constants_on_server__["a" /* ServerConstants */]) === "function" && _c || Object])
], qtService);

var rowdata = (function () {
    function rowdata() {
    }
    return rowdata;
}());
;
var cellstyle = (function () {
    function cellstyle() {
    }
    return cellstyle;
}());
var pair = (function () {
    function pair() {
    }
    return pair;
}());
var _a, _b, _c;
//# sourceMappingURL=qtrack.service.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.bundle.js.map