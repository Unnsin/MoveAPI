webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".Movies{\n    display: inline;\n    margin: 20px;\n    margin-left: 16px;\n    height: 250px;\n    width: 175px;\n}\n.menu{\n    padding-bottom: 10px;\n    width: 140px;\n    margin-right: 25px;\n    float:right;\n    font-size: 23px;\n}\n.menu ul{\n    display: none;\n    margin: 0px;\n    padding: 0px;\n    padding-top:25px;\n    background-color: grey;\n    width: 140px;\n}\n.menu li{\n    \n    list-style: none;\n    padding-left: 10px;\n    padding-bottom: 4px;\n}\n.menu a{\n    text-decoration: none;\n    color:#fff;\n}\n.menu li:hover ul{\n    display:block;\n}\nimg {\n    margin-top: 20px;\n    -webkit-box-shadow: 6px -2px 3px 0.2px rgba(0, 0, 0, .2);\n            box-shadow: 6px -2px 3px 0.2px rgba(0, 0, 0, .2);\n}\n.title {\n    margin-left:  22px;\n    color: grey;\n}\n.Pager{\n    margin-top: 20px;\n    margin-bottom: 20px;\n    text-align: center;\n}\n.Btn{\n   padding: 10px;\n}\n.NowPage{\n    opacity: .25;\n}\nheader{\n    background-color: grey;\n    width: 100%;\n    height: 100px;\n}\nh1{\n    position: relative;\n    top: 30px;\n    left:20px;\n    color:#fff;\n}\n.FilmInfo{\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n    left:0;\n    top:121px;\n    height: 469%;\n    width: 100%;\n    position: absolute ;\n    background-size:100% 100%;\n    background: transparent;\n    z-index: 98;\n}\n.Info{\n    top: 121px;\n    left:0;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 100;\n}\n.Info img{\n    position: relative;\n    left: 10%;\n    margin-top: 10%;\n}\n.back{\n    margin-left: 11px;\n    display: inline;\n    float:left;\n}\n.next {\n    display: inline;\n    float: right;\n}\n.TitleFilm{\n    position: absolute;;\n    top:35%;\n    display: inline;\n    color: #fff;\n    left: 44.7%;\n}\n.Info p{\n    left: 12%;\n    display:  inline;\n    color: #fff;\n    font-size: 20px;\n}\n.Info img{\n    max-width: 40%;\n}\n.Info > .data{\n    position: absolute;\n    left: 45%;\n    top: 51%;\n}\n.overview{\n    width: 50%;\n    position: absolute;\n    left:45%;\n    top:61%;\n    color:#fff;\n}\n@media screen and (max-width:444px){\n    .Info img{\n        position: absolute;\n        left:3%;\n        top: 29%;\n    }\n    .Info p{\n        font-size: 15px;\n        display: block;\n    }\n    .overview {\n        top:80%;\n    }\n    h1{\n        font-size: 20px;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Movies</h1> \n    <div class=\"menu\">\n        <li><a href=\"#\">My Acount</a>\n            <ul class=\"submenu\"> \n                <li><a href=\"#\">Log Out</a></li>\n            </ul>\n        </li>\n    </div>\n</header>\n<h3 class=\"title\">Latest Releases</h3>\n<div class=\"Movies\" *ngFor=\"let mov of movies\">\n<img src=\"http://image.tmdb.org/t/p/w342/{{mov.poster_path}}\" alt = \"Image Not Found\"\ntitle=\"Title: {{mov.original_title}}\nRating: {{mov.vote_average}}\nData Release: {{mov.release_date}}\" height=\"250px\" width=\"175px\" (click)=\"showFilm(mov)\">\n</div>\n<div class=\"Pager\">\n    <button class=\"Start Btn\" (click) = \"GetStart()\">Start</button>\n    <button class=\"Prev Btn\" (click)=\"GetPage(NowPage-1, false)\">Pred</button>\n    <button class=\"NowPage Btn\">{{NowPage}}</button>\n    <button class=\"Next Btn\" (click)=\"GetPage(NowPage+1, true)\">Next</button>\n    <button class=\"Finish Btn\" (click) = \"GetEnd()\">Finish</button>\n</div>\n<div class=\"FilmInfo\"  [ngStyle] = \"{'display': drop ? 'block':'none',\n                                    'background':URLS}\">\n\n</div>\n<div class=\"Info\" [ngStyle] = \"{'display': drop ? 'block':'none'}\">\n        <button class=\"back\" (click)=\"GetList()\"> <i></i> Back to list</button>\n        <button class=\"next\" (click)=\"GetNext()\"> <i></i> Next</button>\n        <img src=\"http://image.tmdb.org/t/p/w342/{{posterUrl}}\" alt = \"Image Not Found\">\n        <h1 class =\"TitleFilm\">{{MoveTitle}}({{Year}})</h1>\n        <span class=\"data\">\n            <p>\n                Score: {{Score}} |\n            </p>\n            <p>\n                Fames: {{Fames}} |\n            </p>\n            <p>\n                Release Date: {{Data_Release}} \n            </p> \n        </span>\n        <div class=\"overview\">\n            {{overview}}\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(Service) {
        this.Service = Service;
        this.drop = false;
        this.BUF = "http://image.tmdb.org/t/p/w342/";
        this.URLS = "";
        this.title = 'app';
        this.movies = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.NowPage = 1;
        this.Service.GetMovies(1).subscribe(function (data) {
            _this.movies = data.results.slice(0, 12);
        }, function (error) { }, function () { });
    };
    AppComponent.prototype.GetPage = function (index, flag) {
        if (index >= 1) {
            this.NowPage = index;
            this.movies = this.Service.GetPage(index - 1);
        }
    };
    AppComponent.prototype.GetStart = function () {
        this.movies = this.Service.GetPage(0);
        this.NowPage = 1;
    };
    AppComponent.prototype.GetEnd = function () {
        var len = this.Service.GetLenth();
        this.NowPage = len;
        this.movies = this.Service.GetPage(len - 1);
    };
    AppComponent.prototype.showFilm = function (move) {
        this.NowMovi = move;
        this.overview = move.overview;
        this.Data_Release = move.release_date;
        this.Score = move.vote_average;
        this.Year = move.release_date.slice(0, 4);
        this.Fames = move.popularity;
        this.MoveTitle = move.original_title;
        this.posterUrl = move.poster_path;
        this.URLS = 'url(' + this.BUF + move.poster_path + ')';
        this.drop = true;
    };
    AppComponent.prototype.GetList = function () {
        this.drop = false;
    };
    AppComponent.prototype.GetNext = function () {
        var index = this.movies.indexOf(this.NowMovi);
        if (index != this.movies.length - 1) {
            this.showFilm(this.movies[index + 1]);
        }
        else {
            this.GetList();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_service__ = __webpack_require__("./src/app/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.Movies = [];
        this.Page_col = [];
        this.key = 'ebea8cfca72fdff8d2624ad7bbf78e4c';
        this.Page = 2;
        this.GetMovies(1).subscribe(function (data) {
            for (var i = 0; i < data.results.length; i++) {
                _this.Movies.push(data.results[i]);
            }
        }, function (error) { }, function () {
            _this.GetMovies(2).subscribe(function (data) {
                for (var i = 0; i < data.results.length; i++) {
                    _this.Movies.push(data.results[i]);
                }
            }, function (error) { }, function () { _this.GetPageCol(); });
        });
    }
    DataService.prototype.GetMovies = function (Page) {
        return this.http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=' + this.key + "&page=" + Page);
    };
    DataService.prototype.GetPageCol = function () {
        this.Page_col.length = 0;
        var col = this.Movies.length;
        for (var i = 0; i < col / 12; i++) {
            this.Page_col.push(i + 1);
        }
        return this.Page_col;
    };
    DataService.prototype.GetPage = function (numb) {
        var _this = this;
        if (numb == this.Page_col.length - 2) {
            this.GetMovies(this.Page + 1).subscribe(function (data) {
                for (var i = 0; i < data.results.length; i++) {
                    _this.Movies.push(data.results[i]);
                }
            }, function (error) { }, function () { _this.GetPageCol(); _this.Page++; });
        }
        return this.Movies.slice(numb * 12, (numb * 12) + 12);
    };
    DataService.prototype.GetLenth = function () {
        return this.Page_col.length;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map