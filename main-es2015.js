(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chatbots_chatbots_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatbots/chatbots.component */ "./src/app/chatbots/chatbots.component.ts");





const routes = [
    { path: "", component: _chatbots_chatbots_component__WEBPACK_IMPORTED_MODULE_2__["ChatbotsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'chatbotA';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chatbots_chatbots_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatbots/chatbots.component */ "./src/app/chatbots/chatbots.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chatbots_chatbots_component__WEBPACK_IMPORTED_MODULE_4__["ChatbotsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chatbots_chatbots_component__WEBPACK_IMPORTED_MODULE_4__["ChatbotsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chatbots/chatbots.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatbots/chatbots.component.ts ***!
  \************************************************/
/*! exports provided: ChatbotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotsComponent", function() { return ChatbotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "expanded": a0 }; };
class ChatbotsComponent {
    constructor() {
    }
    ngOnInit() {
    }
    toggle() {
        this.isToggled = !this.isToggled;
    }
}
ChatbotsComponent.ɵfac = function ChatbotsComponent_Factory(t) { return new (t || ChatbotsComponent)(); };
ChatbotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotsComponent, selectors: [["app-chatbots"]], decls: 193, vars: 3, consts: [[1, "chatbotbox"], ["id", "frame"], ["id", "sidepanel"], ["id", "profile", 3, "ngClass"], [1, "wrap"], ["id", "profile-img", "src", "../../assets/Images/profile.jpg", "alt", "", 1, "online"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down", "expand-button", 3, "click"], ["id", "status-options"], ["id", "status-online", 1, "active"], [1, "status-circle"], ["id", "status-away"], ["id", "status-busy"], ["id", "status-offline"], ["id", "expanded"], ["for", "twitter"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "fa-fw"], ["name", "twitter", "type", "text", "value", "arun-sree-kumar"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-fw"], ["name", "twitter", "type", "text", "value", "_asku"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-fw"], ["name", "twitter", "type", "text", "value", "arun_sreekumar"], ["id", "search"], ["for", ""], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "text", "placeholder", "Search contacts..."], ["id", "contacts"], [1, "contact"], [1, "contact-status", "online"], ["src", "http://emilcarlsson.se/assets/louislitt.png", "alt", ""], [1, "meta"], [1, "name"], [1, "preview"], [1, "contact", "active"], [1, "contact-status", "busy"], ["src", "http://emilcarlsson.se/assets/harveyspecter.png", "alt", ""], [1, "contact-status", "away"], ["src", "http://emilcarlsson.se/assets/rachelzane.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/donnapaulsen.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/jessicapearson.png", "alt", ""], [1, "contact-status"], ["src", "http://emilcarlsson.se/assets/haroldgunderson.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/danielhardman.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/katrinabennett.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/charlesforstman.png", "alt", ""], ["src", "http://emilcarlsson.se/assets/jonathansidwell.png", "alt", ""], ["id", "bottom-bar"], ["id", "addcontact"], ["aria-hidden", "true", 1, "fa", "fa-user-plus", "fa-fw"], ["id", "settings"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-fw"], [1, "content"], [1, "contact-profile"], [1, "social-media"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "messages"], [1, "sent"], ["src", "http://emilcarlsson.se/assets/mikeross.png", "alt", ""], [1, "replies"], [1, "message-input"], ["type", "text", "placeholder", "Write your message..."], ["aria-hidden", "true", 1, "fa", "fa-paperclip", "attachment"], [1, "submit"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane"]], template: function ChatbotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Arun Sree Kumar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotsComponent_Template_i_click_8_listener($event) { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Away");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Louis Litt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "You just got LITT up, Mike.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Harvey Specter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Rachel Zane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "I was thinking that we could have chicken tonight, sounds good?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Donna Paulsen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Mike, I know everything! I'm Donna..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Jessica Pearson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Have you finished the draft on the Hinsenburg deal?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Harold Gunderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Thanks Mike! :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Daniel Hardman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "We'll meet again, Mike. Tell Jessica I said 'Hi'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Katrina Bennett");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "I've sent you the files for the Garrett trial.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Charles Forstman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Mike, this isn't over.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Jonathan Sidwell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "You:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " That's bullshit. This deal is solid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Add contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Harvey Specter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "When you're backed against the wall, break the god damn thing down.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Excuses don't win championships.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Oh yeah, did Michael Jordan tell you that?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "No, I told him that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "What are your choices when someone puts a gun to your head?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "What are you talking about? You do what they say or they shoot you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isToggled == true));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:'';content:none}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}.chatbotbox[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    min-height: 100vh;\r\n    background: #27ae60;\r\n    font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.1px;\r\n    color: #32465a;\r\n    text-rendering: optimizeLegibility;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n    -webkit-font-smoothing: antialiased;\r\n  }#frame[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    min-width: 360px;\r\n    max-width: 1000px;\r\n    height: 92vh;\r\n    min-height: 300px;\r\n    max-height: 720px;\r\n    background: #E6EAEA;\r\n  }@media screen and (max-width: 360px) {\r\n    #frame[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 100vh;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%] {\r\n    float: left;\r\n    min-width: 280px;\r\n    max-width: 340px;\r\n    width: 40%;\r\n    height: 100%;\r\n    background: #2c3e50;\r\n    color: #f5f5f5;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%] {\r\n      width: 58px;\r\n      min-width: 58px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 25px auto;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin: 0 auto;\r\n      padding: 5px 0 0 0;\r\n      background: #32465a;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    height: 210px;\r\n    line-height: initial;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n    -webkit-transform: scaleY(-1);\r\n    transform: scaleY(-1);\r\n    -webkit-filter: FlipH;\r\n            filter: FlipH;\r\n    -ms-filter: \"FlipH\";\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    overflow: hidden;\r\n    -webkit-transition: 0.3s height ease;\r\n    transition: 0.3s height ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n      height: 55px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    padding: 3px;\r\n    border: 2px solid #e74c3c;\r\n    height: auto;\r\n    float: left;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s border ease;\r\n    transition: 0.3s border ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 40px;\r\n      margin-left: 4px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.online[_ngcontent-%COMP%] {\r\n    border: 2px solid #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.away[_ngcontent-%COMP%] {\r\n    border: 2px solid #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.busy[_ngcontent-%COMP%] {\r\n    border: 2px solid #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.offline[_ngcontent-%COMP%] {\r\n    border: 2px solid #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-left: 15px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 23px;\r\n    font-size: 0.8em;\r\n    cursor: pointer;\r\n    color: #435f7a;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 150px;\r\n    margin: 70px 0 0 0;\r\n    border-radius: 6px;\r\n    z-index: 99;\r\n    line-height: initial;\r\n    background: #435f7a;\r\n    -webkit-transition: 0.3s all ease;\r\n    transition: 0.3s all ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%] {\r\n      width: 58px;\r\n      margin-top: 57px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options.active[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    margin: 75px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options.active[_ngcontent-%COMP%] {\r\n      margin-top: 62px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #435f7a;\r\n    margin: -8px 0 0 24px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]:before {\r\n      margin-left: 23px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    border-radius: 6px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 15px 0 30px 18px;\r\n    display: block;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      padding: 15px 0 35px 22px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background: #496886;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin: 5px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n      width: 14px;\r\n      height: 14px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: -3px 0 0 -3px;\r\n    background: transparent;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n      height: 18px;\r\n      width: 18px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding-left: 12px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-online[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-online.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-away[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-away.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-busy[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-busy.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-offline[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-offline.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%] {\r\n    padding: 100px 0 0 0;\r\n    display: block;\r\n    line-height: initial !important;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    float: left;\r\n    clear: both;\r\n    margin: 0 8px 5px 0;\r\n    padding: 5px 0;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-bottom: 6px;\r\n    background: #32465a;\r\n    border-radius: 3px;\r\n    color: #f5f5f5;\r\n    padding: 7px;\r\n    width: calc(100% - 43px);\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #32465a;\r\n    border-bottom: 1px solid #32465a;\r\n    font-weight: 300;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin: 10px 0 0 20px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    padding: 10px 0 10px 46px;\r\n    width: calc(100% - 25px);\r\n    border: none;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%] {\r\n    height: calc(100% - 177px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%] {\r\n      height: calc(100% - 149px);\r\n      overflow-y: scroll;\r\n      overflow-x: hidden;\r\n    }\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts.expanded[_ngcontent-%COMP%] {\r\n    height: calc(100% - 334px);\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: #2c3e50;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #243140;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 10px 0 15px 0;\r\n    font-size: 0.9em;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%] {\r\n      padding: 6px 0 46px 8px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]:hover {\r\n    background: #32465a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact.active[_ngcontent-%COMP%] {\r\n    background: #32465a;\r\n    border-right: 5px solid #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact.active[_ngcontent-%COMP%]   span.contact-status[_ngcontent-%COMP%] {\r\n    border: 2px solid #32465a !important;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    width: 88%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    margin: -2px 0 0 -2px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #2c3e50;\r\n    background: #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.online[_ngcontent-%COMP%] {\r\n    background: #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.away[_ngcontent-%COMP%] {\r\n    background: #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.busy[_ngcontent-%COMP%] {\r\n    background: #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 10px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      margin-right: 0px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n    padding: 5px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\r\n    margin: 5px 0 0 0;\r\n    padding: 0 0 1px;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    -webkit-transition: 1s all ease;\r\n    transition: 1s all ease;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: initial;\r\n    border-radius: initial;\r\n    background: none;\r\n    border: none;\r\n    padding: 0 2px 0 0;\r\n    margin: 0 0 0 1px;\r\n    opacity: .5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    border: none;\r\n    width: 50%;\r\n    padding: 10px 0;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    font-size: 0.85em;\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      float: none;\r\n      width: 100%;\r\n      padding: 15px 0;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\r\n    border-right: 1px solid #2c3e50;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\r\n      border-right: none;\r\n      border-bottom: 1px solid #2c3e50;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 3px;\r\n    font-size: 1em;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      font-size: 1.3em;\r\n    }\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 60%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      width: calc(100% - 58px);\r\n      min-width: 300px !important;\r\n    }\r\n  }@media screen and (min-width: 900px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      width: calc(100% - 340px);\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin: 9px 12px 0 9px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-left: 14px;\r\n    cursor: pointer;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-last-child(1) {\r\n    margin-right: 20px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    min-height: calc(100% - 93px);\r\n    max-height: calc(100% - 93px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n      max-height: calc(100% - 105px);\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: transparent;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    clear: both;\r\n    float: left;\r\n    margin: 15px 15px 5px 15px;\r\n    width: calc(100% - 25px);\r\n    font-size: 0.9em;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1) {\r\n    margin-bottom: 20px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 6px 8px 0 0;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background: #435f7a;\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 6px 0 0 8px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    float: right;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    border-radius: 50%;\r\n    float: left;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    border-radius: 20px;\r\n    max-width: 205px;\r\n    line-height: 130%;\r\n  }@media screen and (min-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      max-width: 300px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: 99;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    float: left;\r\n    border: none;\r\n    width: calc(100% - 90px);\r\n    padding: 11px 32px 10px 8px;\r\n    font-size: 0.8em;\r\n    color: #32465a;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      padding: 15px 32px 16px 8px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 60px;\r\n    z-index: 4;\r\n    margin-top: 10px;\r\n    font-size: 1.1em;\r\n    color: #435f7a;\r\n    opacity: .5;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%] {\r\n      margin-top: 17px;\r\n      right: 65px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    border: none;\r\n    width: 50px;\r\n    padding: 12px 0;\r\n    cursor: pointer;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      padding: 16px 0;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdHMvY2hhdGJvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyWkFBMlosUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLDhFQUE4RSxhQUFhLENBQUMsS0FBSyxhQUFhLENBQUMsTUFBTSxlQUFlLENBQUMsYUFBYSxXQUFXLENBQUMsb0RBQW9ELFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FFdnZCO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw2Q0FBNkM7SUFDN0MsbUNBQW1DO0VBQ3JDLENBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckIsQ0FDQTtJQUNFO01BQ0UsV0FBVztNQUNYLGFBQWE7SUFDZjtFQUNGLENBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQixDQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsZUFBZTtJQUNqQjtFQUNGLENBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CLENBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjtFQUNGLENBQ0E7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCLENBQ0E7SUFDRSxnQkFB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a0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0VBQ2IsQ0FDQTtJQUNFLGtCQUFrQjtFQUNwQixDQUNBO0lBQ0UsMkRBQTJEO0lBQzNELFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQixDQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRixDQUNBO0lBQ0UsYUFBYTtFQUNmLENBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQixDQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0VBQ0YsQ0FDQTtJQUNFLFVBQVU7RUFDWixDQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQixDQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YsQ0FDQTtJQUNFLG1CQUFtQjtFQUNyQixDQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJvdHMvY2hhdGJvdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keSxkaXYsc3BhbixhcHBsZXQsb2JqZWN0LGlmcmFtZSxoMSxoMixoMyxoNCxoNSxoNixwLGJsb2NrcXVvdGUscHJlLGEsYWJicixhY3JvbnltLGFkZHJlc3MsYmlnLGNpdGUsY29kZSxkZWwsZGZuLGVtLGltZyxpbnMsa2JkLHEscyxzYW1wLHNtYWxsLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0dCx2YXIsYix1LGksY2VudGVyLGRsLGR0LGRkLG9sLHVsLGxpLGZpZWxkc2V0LGZvcm0sbGFiZWwsbGVnZW5kLHRhYmxlLGNhcHRpb24sdGJvZHksdGZvb3QsdGhlYWQsdHIsdGgsdGQsYXJ0aWNsZSxhc2lkZSxjYW52YXMsZGV0YWlscyxlbWJlZCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixvdXRwdXQscnVieSxzZWN0aW9uLHN1bW1hcnksdGltZSxtYXJrLGF1ZGlvLHZpZGVve21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXNpemU6MTAwJTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bGluZS1oZWlnaHQ6MX1vbCx1bHtsaXN0LXN0eWxlOm5vbmV9YmxvY2txdW90ZSxxe3F1b3Rlczpub25lfWJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlcntjb250ZW50OicnO2NvbnRlbnQ6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH1cclxuXHJcbi5jaGF0Ym90Ym94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgY29sb3I6ICMzMjQ2NWE7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMDQpO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNmcmFtZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWluLXdpZHRoOiAzNjBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFNkVBRUE7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAjZnJhbWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwge1xyXG4gICAgICB3aWR0aDogNThweDtcclxuICAgICAgbWluLXdpZHRoOiA1OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICBmaWx0ZXI6IEZsaXBIO1xyXG4gICAgLW1zLWZpbHRlcjogXCJGbGlwSFwiO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub25saW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5idXN5IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vZmZsaW5lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5NWE1YTY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzQzNWY3YTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1N3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luOiA3NXB4IDAgMCAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zLmFjdGl2ZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9uczpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNDM1ZjdhO1xyXG4gICAgbWFyZ2luOiAtOHB4IDAgMCAyNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAzNXB4IDIycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDk2ODg2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9ubGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWF3YXkuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxYzQwZjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWJ1c3kuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U3NGMzYztcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vZmZsaW5lIHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9mZmxpbmUuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogMCA4cHggNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0M3B4KTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzI0NjVhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjQ2NWE7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAyMHB4O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDQ2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3N3B4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQ5cHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMzRweCk7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MzE0MDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwIDQ2cHggOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0LmFjdGl2ZSBzcGFuLmNvbnRhY3Qtc3RhdHVzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ2NWEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gICAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5hd2F5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYnVzeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIGltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAwIDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDJweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMCAwIDFweDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYzNlNTA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1OHB4KTtcclxuICAgICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM0MHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA5cHggMTJweCAwIDlweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDkzcHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xyXG4gICAgbWFyZ2luOiA2cHggOHB4IDAgMDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IHAge1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogNnB4IDAgMCA4cHg7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgaW1nIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICAgIHBhZGRpbmc6IDExcHggMzJweCAxMHB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzMyNDY1YTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNnB4IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICByaWdodDogNjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50OmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbots',
                templateUrl: './chatbots.component.html',
                styleUrls: ['./chatbots.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ME\chatbotA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map