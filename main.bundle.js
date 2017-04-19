webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(20);
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
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'app works!';
    }
    AppComponent.prototype.getProjectNames = function () {
        return this.userService.projectNames;
    };
    AppComponent.prototype.getProjectInfo = function (event, projectName) {
        console.log(this.userService.getProject(projectName));
        this.selectedProject = this.userService.getProject(projectName);
        return this.selectedProject;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__container__["a" /* MainComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__components__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components__["b" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__container__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components__["c" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components__["d" /* DialogProjectCreatorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components__["e" /* DialogUserNameEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__components__["d" /* DialogProjectCreatorComponent */], __WEBPACK_IMPORTED_MODULE_8__components__["e" /* DialogUserNameEditComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogProjectCreatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogProjectCreatorComponent = (function () {
    function DialogProjectCreatorComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
    }
    DialogProjectCreatorComponent.prototype.ngOnInit = function () {
    };
    DialogProjectCreatorComponent.prototype.createProject = function (projectName) {
        if (projectName !== '') {
            console.log('done ', projectName);
            this.userService.setProjectByName(projectName);
            this.dialogRef.close();
        }
    };
    return DialogProjectCreatorComponent;
}());
DialogProjectCreatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-dialog-project-creator',
        template: __webpack_require__(178),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */]) === "function" && _b || Object])
], DialogProjectCreatorComponent);

var _a, _b;
//# sourceMappingURL=dialog-project-creator.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(180),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(181),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_user_name_edit_dialog_user_name_edit_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopbarComponent = (function () {
    function TopbarComponent(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_user_name_edit_dialog_user_name_edit_component__["a" /* DialogUserNameEditComponent */]);
    };
    Object.defineProperty(TopbarComponent.prototype, "userName", {
        get: function () {
            return this.userService.userName;
        },
        enumerable: true,
        configurable: true
    });
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-topbar',
        template: __webpack_require__(182),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _b || Object])
], TopbarComponent);

var _a, _b;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services___ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        this.user = this.userService.Model;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components__["d" /* DialogProjectCreatorComponent */]);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(183),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services___["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services___["a" /* UserService */]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/*material-app, md-sidenav-container, .my-content {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}*/\r\nmd-sidenav-container{\r\n  width: 100%;\r\n  height: calc(100% - 64px);\r\n}\r\napp-footer{\r\n    bottom: 0;\r\n    position: fixed;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\napp-main{\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n.list-item__button{\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\nmd-list-item.list-header{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".title{\r\n    font-family: 'Roboto Regular';\r\n    font-size: xx-large;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".title{\r\n    font-family: 'Roboto Regular';\r\n    font-size: xx-large;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".main{\r\n    height: 100%;\r\n}\r\na.main-button-add-btn{\r\n  position: fixed;\r\n  bottom: 70px;\r\n  right: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<md-sidenav-container class=\"example-container\">\n  <md-sidenav #sidenav mode=\"side\" opened=\"true\">\n    <md-list class=\"list\">\n      <md-list-item class=\"list-header\"> Projects </md-list-item>\n      <md-list-item *ngFor=\"let item of getProjectNames()\">\n        <button md-button class=\"list-item__button\" (click)=\"getProjectInfo($event, item)\">{{item}}</button>\n      </md-list-item>\n    </md-list>\n  </md-sidenav>\n\n  <app-main>\n    <router-outlet></router-outlet>\n  </app-main>\n\n  <app-footer></app-footer>\n\n</md-sidenav-container>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<!--<md-dialog-container>\n  <md-dialog-title>Title</md-dialog-title>\n <h1 md-dialog-title=\"\" class=\"mat-dialog-title\">Dialog</h1>\n  <md-dialog-content>What would you like to do?</md-dialog-content>\n  <div md-dialog-content=\"\" class=\"mat-dialog-content\"></div>\n  <md-dialog-actions>\n    <md-button>Button1</md-button>\n  </md-dialog-actions>\n</md-dialog-container>-->\n<div class=\"title\">Dialog Title</div>\n<md-input-container>\n  <input #projectName mdInput placeholder=\"Write project name\">\n</md-input-container>\n<button md-raised-button type=\"\" (click)=\"createProject(projectName.value)\">Create</button>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Dialog Title</div>\n<md-input-container>\n  <input #userName mdInput placeholder=\"Write user name\">\n</md-input-container>\n<button md-raised-button type=\"\" (click)=\"editUserName(userName.value)\">Create</button>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"footer\">\n  <span>Application Title</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <span (ngModel)= \"projectName\" >Right Aligned Text {{projectName}}</span>\n</md-toolbar>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div>\n  app-not-found\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    <span>Custom Toolbar</span>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <span> hello {{userName}} </span>\r\n    <button md-button (click)=\"openDialog($event)\">EDIT</button>\r\n</md-toolbar>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <ng-content></ng-content>\n  <a md-primary-button md-fab (click)=\"openDialog()\" class=\"main-button-add-btn\">\n    <md-icon>add</md-icon>\n  </a>\n</div>"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserNameEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogUserNameEditComponent = (function () {
    function DialogUserNameEditComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
    }
    DialogUserNameEditComponent.prototype.ngOnInit = function () {
    };
    DialogUserNameEditComponent.prototype.editUserName = function (value) {
        if (this.userService.userName === value) {
            alert('err');
        }
        else {
            this.userService.userName = value;
            console.log(this.userService.userName);
            this.dialogRef.close();
        }
    };
    return DialogUserNameEditComponent;
}());
DialogUserNameEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-dialog-user-name-edit',
        template: __webpack_require__(179),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */]) === "function" && _b || Object])
], DialogUserNameEditComponent);

var _a, _b;
//# sourceMappingURL=dialog-user-name-edit.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topbar_topbar_component__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__topbar_topbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_project_creator_dialog_project_creator_component__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__dialog_project_creator_dialog_project_creator_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_user_name_edit_dialog_user_name_edit_component__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__dialog_user_name_edit_dialog_user_name_edit_component__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var user = {
    "userName": "User1",
    "projects": [
        {
            "projectName": "12345",
            "isCurrentProject": true,
            "framework": "angular",
            "options": []
        },
        {
            "projectName": "123",
            "isCurrentProject": false,
            "framework": "angular2",
            "options": []
        }
    ]
};
var UserService = (function () {
    function UserService() {
        this.projects = [];
        this.emptyProject = {
            "projectName": "",
            "isCurrentProject": false,
            "framework": "",
            "options": []
        };
        this.projects = user.projects;
    }
    Object.defineProperty(UserService.prototype, "Model", {
        get: function () {
            return user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "userName", {
        get: function () {
            return user.userName;
        },
        set: function (value) {
            user.userName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "projectNames", {
        get: function () {
            return user.projects.map(function (projects) {
                return projects.projectName;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "currentProject", {
        get: function () {
            return user.projects.find(function (project) { return project.isCurrentProject == true; });
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.changeCurrentProject = function (projectName) {
        var currentProjectName;
        var currentProject = user.projects.find(function (project) { return project.isCurrentProject == true; });
    };
    UserService.prototype.getProject = function (projectName) {
        var projects = user.projects.find(function (project) { return project.projectName == projectName; });
        return projects;
    };
    UserService.prototype.setProjectByName = function (projectName) {
        this.emptyProject.projectName = projectName;
        this.emptyProject.isCurrentProject = false;
        this.emptyProject.framework = '';
        this.emptyProject.options = [];
        user.projects.push(this.emptyProject);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.bundle.js.map