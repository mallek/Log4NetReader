webpackJsonp([1,4],{

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 182;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(76);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(76);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(291),
        styles: [__webpack_require__(288)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_viewer_log_viewer_component__ = __webpack_require__(233);
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
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(76);
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
        this.selectedEnvironment = 'seed';
        this.selectedSort = 'desc';
        this.selectedLevel = 'debug';
        this.totalRecords = 0;
        this.skip = 0;
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
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/Log/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment + '&sort=' + this.selectedSort + '&skip=' + this.skip + '&take=' + this.take;
    };
    LogViewerComponent.prototype.getCount = function () {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/api/Log/Count/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment + '&sort=' + this.selectedSort + '&skip=' + this.skip + '&take=' + this.take;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-log-viewer',
        template: __webpack_require__(292),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LogViewerComponent);

var _a;
//# sourceMappingURL=log-viewer.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<h2>\n  {{title}}  - Env:{{currentEnv}}\n</h2>\n\n<app-log-viewer>Loading Log Viewer...</app-log-viewer>\n"

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "<h3>{{totalRecords}}</h3>\n<md-toolbar color=\"primary\">\n  <span>LogViewer {{selectedLog}}</span>\n\n  <span class=\"spacer\"></span>\n  <md-select placeholder=\"Log\" [ngModel]=\"selectedLog\" (ngModelChange)=\"onChangeLog($event)\">\n    <md-option *ngFor=\"let logs of logsTables\" [value]=\"logs.name\">\n      {{ logs.name }}\n    </md-option>\n  </md-select>\n  <md-select placeholder=\"Environment\" [ngModel]=\"selectedEnvironment\" (ngModelChange)=\"onChangeEnvironment($event)\">\n    <md-option *ngFor=\"let environment of logEnvironments\" [value]=\"environment.name\">\n      {{ environment.name }}\n    </md-option>\n  </md-select>\n  <md-select placeholder=\"Logging Level\" [ngModel]=\"selectedLevel\" (ngModelChange)=\"onChangeLevel($event)\">\n    <md-option *ngFor=\"let level of logLevels\" [value]=\"level.name\">\n      {{ level.name }}\n    </md-option>\n  </md-select>\n\n</md-toolbar>\n<md-card *ngFor=\"let log of logEntrys; let i = index\">\n  <md-card-content>\n    <h3>{{ log.logger }}</h3>\n    <p>{{ log.message }}</p>\n    <p>{{ log.exception }}</p>\n\n  </md-card-content>\n  <md-card-actions>\n    <button md-button>\n            <i class=\"material-icons\">today</i> {{log.date | date: 'short' }}\n        </button>\n    <button md-button>\n            <i class=\"material-icons\">developer_mode</i> {{log.level}}\n        </button>\n    <button md-button>\n            <i class=\"material-icons\">computer</i> {{log.environment}}\n        </button>\n  </md-card-actions>\n</md-card>\n\n<md-card *ngIf=\"logEntrys?.length == 0\">\n  <md-card-content>\n    <h3>No log entries for these filters</h3>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);


/***/ }),

/***/ 76:
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

},[337]);
//# sourceMappingURL=main.bundle.js.map