webpackJsonp([2,4],{

/***/ 383:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 383;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Log4Net Reader version ' + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].version;
        this.currentEnv = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(517),
        styles: [__webpack_require__(491)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_viewer_log_viewer_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__log_viewer_log_viewer_component__["a" /* LogViewerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["b" /* PaginationModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogViewerComponent = (function () {
    function LogViewerComponent(http) {
        var _this = this;
        this.http = http;
        this.logLevels = [{ name: 'Debug' }, { name: 'Info' }, { name: 'Warn' }, { name: 'Error' }, { name: 'Fatal' }];
        this.selectedLog = 'SeedTable_do_not_delete_Log';
        this.selectedEnvironment = 'all';
        this.selectedSort = 'desc';
        this.selectedLevel = 'all';
        this.totalRecords = 0;
        this.skip = 1;
        this.take = 10;
        this._http = http;
        http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/table')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.logsTables = res; });
        this.loadEnvironments();
        http.get(this.getUrl())
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.logEntrys = res; });
        http.get(this.getUrl())
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.logEntrys = res; });
    }
    LogViewerComponent.prototype.setPage = function (pageNo) {
        this.skip = pageNo;
    };
    LogViewerComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.skip = event.page;
        this.loadLogData();
    };
    LogViewerComponent.prototype.onChangeLog = function (newValue) {
        console.log(newValue);
        this.selectedLog = newValue;
        // ... do other stuff here ...
        this.loadLogData();
        this.loadEnvironments();
    };
    LogViewerComponent.prototype.onChangeEnvironment = function (newValue) {
        this.selectedEnvironment = newValue;
        this.loadLogData();
    };
    LogViewerComponent.prototype.onChangeLevel = function (newValue) {
        this.selectedLevel = newValue;
        this.loadLogData();
    };
    LogViewerComponent.prototype.loadLogData = function () {
        var _this = this;
        console.log('Loading Log data' + this.getUrl());
        this.loadLogCount();
        this._http.get(this.getUrl())
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.logEntrys = res; });
    };
    LogViewerComponent.prototype.loadLogCount = function () {
        var _this = this;
        this._http.get(this.getCount())
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.totalRecords = res; });
    };
    LogViewerComponent.prototype.getUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/Log/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment + '&sort=' + this.selectedSort + '&skip=' + (this.skip - 1) + '&take=' + this.take;
    };
    LogViewerComponent.prototype.getCount = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/Log/Count/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment + '&sort=' + this.selectedSort + '&skip=' + (this.skip - 1) + '&take=' + this.take;
    };
    LogViewerComponent.prototype.loadEnvironments = function () {
        var _this = this;
        this._http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/table/getenvironments/' + this.selectedLog)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.logEnvironments = res; });
    };
    // loadLogLevels() {
    //   this._http.get(environment.apiUrl + '/api/table/getlevels/' + this.selectedLog)
    //     .map(response => response.json())
    //     .subscribe(res => this.logLevels = res);
    // }
    LogViewerComponent.prototype.ngOnInit = function () {
    };
    return LogViewerComponent;
}());
LogViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-log-viewer',
        template: __webpack_require__(518),
        styles: [__webpack_require__(492)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LogViewerComponent);

var _a;
//# sourceMappingURL=log-viewer.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 212,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 212,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bn": 216,
	"./bn.js": 216,
	"./bo": 217,
	"./bo.js": 217,
	"./br": 218,
	"./br.js": 218,
	"./bs": 219,
	"./bs.js": 219,
	"./ca": 220,
	"./ca.js": 220,
	"./cs": 221,
	"./cs.js": 221,
	"./cv": 222,
	"./cv.js": 222,
	"./cy": 223,
	"./cy.js": 223,
	"./da": 224,
	"./da.js": 224,
	"./de": 226,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de.js": 226,
	"./dv": 227,
	"./dv.js": 227,
	"./el": 228,
	"./el.js": 228,
	"./en-au": 229,
	"./en-au.js": 229,
	"./en-ca": 230,
	"./en-ca.js": 230,
	"./en-gb": 231,
	"./en-gb.js": 231,
	"./en-ie": 232,
	"./en-ie.js": 232,
	"./en-nz": 233,
	"./en-nz.js": 233,
	"./eo": 234,
	"./eo.js": 234,
	"./es": 236,
	"./es-do": 235,
	"./es-do.js": 235,
	"./es.js": 236,
	"./et": 237,
	"./et.js": 237,
	"./eu": 238,
	"./eu.js": 238,
	"./fa": 239,
	"./fa.js": 239,
	"./fi": 240,
	"./fi.js": 240,
	"./fo": 241,
	"./fo.js": 241,
	"./fr": 244,
	"./fr-ca": 242,
	"./fr-ca.js": 242,
	"./fr-ch": 243,
	"./fr-ch.js": 243,
	"./fr.js": 244,
	"./fy": 245,
	"./fy.js": 245,
	"./gd": 246,
	"./gd.js": 246,
	"./gl": 247,
	"./gl.js": 247,
	"./he": 248,
	"./he.js": 248,
	"./hi": 249,
	"./hi.js": 249,
	"./hr": 250,
	"./hr.js": 250,
	"./hu": 251,
	"./hu.js": 251,
	"./hy-am": 252,
	"./hy-am.js": 252,
	"./id": 253,
	"./id.js": 253,
	"./is": 254,
	"./is.js": 254,
	"./it": 255,
	"./it.js": 255,
	"./ja": 256,
	"./ja.js": 256,
	"./jv": 257,
	"./jv.js": 257,
	"./ka": 258,
	"./ka.js": 258,
	"./kk": 259,
	"./kk.js": 259,
	"./km": 260,
	"./km.js": 260,
	"./ko": 261,
	"./ko.js": 261,
	"./ky": 262,
	"./ky.js": 262,
	"./lb": 263,
	"./lb.js": 263,
	"./lo": 264,
	"./lo.js": 264,
	"./lt": 265,
	"./lt.js": 265,
	"./lv": 266,
	"./lv.js": 266,
	"./me": 267,
	"./me.js": 267,
	"./mi": 268,
	"./mi.js": 268,
	"./mk": 269,
	"./mk.js": 269,
	"./ml": 270,
	"./ml.js": 270,
	"./mr": 271,
	"./mr.js": 271,
	"./ms": 273,
	"./ms-my": 272,
	"./ms-my.js": 272,
	"./ms.js": 273,
	"./my": 274,
	"./my.js": 274,
	"./nb": 275,
	"./nb.js": 275,
	"./ne": 276,
	"./ne.js": 276,
	"./nl": 278,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 278,
	"./nn": 279,
	"./nn.js": 279,
	"./pa-in": 280,
	"./pa-in.js": 280,
	"./pl": 281,
	"./pl.js": 281,
	"./pt": 283,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 283,
	"./ro": 284,
	"./ro.js": 284,
	"./ru": 285,
	"./ru.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 292,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 292,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./th": 299,
	"./th.js": 299,
	"./tl-ph": 300,
	"./tl-ph.js": 300,
	"./tlh": 301,
	"./tlh.js": 301,
	"./tr": 302,
	"./tr.js": 302,
	"./tzl": 303,
	"./tzl.js": 303,
	"./tzm": 305,
	"./tzm-latn": 304,
	"./tzm-latn.js": 304,
	"./tzm.js": 305,
	"./uk": 306,
	"./uk.js": 306,
	"./uz": 307,
	"./uz.js": 307,
	"./vi": 308,
	"./vi.js": 308,
	"./x-pseudo": 309,
	"./x-pseudo.js": 309,
	"./yo": 310,
	"./yo.js": 310,
	"./zh-cn": 311,
	"./zh-cn.js": 311,
	"./zh-hk": 312,
	"./zh-hk.js": 312,
	"./zh-tw": 313,
	"./zh-tw.js": 313
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 494;


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<alert type=\"success\">Welcome to the {{title}}  - Env:{{currentEnv}}</alert>\n\n<app-log-viewer>Loading Log Viewer...</app-log-viewer>\n\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>LogViewer {{selectedLog}}</span>\n\n  <span class=\"spacer\"></span>\n\n  <md-select placeholder=\"Log\" [ngModel]=\"selectedLog\" (ngModelChange)=\"onChangeLog($event)\">\n    <md-option *ngFor=\"let logs of logsTables\" [value]=\"logs.name\">\n      {{ logs.name }}\n    </md-option>\n  </md-select>\n  <md-select placeholder=\"Environment\" [ngModel]=\"selectedEnvironment\" (ngModelChange)=\"onChangeEnvironment($event)\">\n    <md-option *ngFor=\"let environment of logEnvironments\" [value]=\"environment.name\">\n      {{ environment.name }}\n    </md-option>\n  </md-select>\n  <md-select placeholder=\"Logging Level\" [ngModel]=\"selectedLevel\" (ngModelChange)=\"onChangeLevel($event)\">\n    <md-option *ngFor=\"let level of logLevels\" [value]=\"level.name\">\n      {{ level.name }}\n    </md-option>\n  </md-select>\n\n</md-toolbar>\n<pagination [totalItems]=\"totalRecords\" [(ngModel)]=\"skip\" (pageChanged)=\"pageChanged($event)\"></pagination>\n<md-card *ngFor=\"let log of logEntrys; let i = index\">\n  <md-card-content>\n    <h3>{{ log.logger }}</h3>\n    <p>{{ log.message }}</p>\n    <p>{{ log.exception }}</p>\n\n  </md-card-content>\n  <md-card-actions>\n    <button md-button>\n            <i class=\"material-icons\">today</i> {{log.date | date: 'short' }}\n        </button>\n    <button md-button>\n            <i class=\"material-icons\">developer_mode</i> {{log.level}}\n        </button>\n    <button md-button>\n            <i class=\"material-icons\">computer</i> {{log.environment}}\n        </button>\n  </md-card-actions>\n</md-card>\n\n<md-card *ngIf=\"logEntrys?.length == 0\">\n  <md-card-content>\n    <h3>No log entries for these filters</h3>\n  </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(384);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:14798',
    version: 'v0.0.0.1'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[574]);
//# sourceMappingURL=main.bundle.js.map