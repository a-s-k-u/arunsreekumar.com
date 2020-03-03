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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:'';content:none}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}.chatbotbox[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n    background: #27ae60;\r\n    font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n    font-size: 1em;\r\n    letter-spacing: 0.1px;\r\n    color: #32465a;\r\n    text-rendering: optimizeLegibility;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n    -webkit-font-smoothing: antialiased;\r\n  }#frame[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    min-width: 360px;\r\n    max-width: 1000px;\r\n    height: 92vh;\r\n    min-height: 300px;\r\n    \r\n    background: #E6EAEA;\r\n  }@media screen and (max-width: 360px) {\r\n    #frame[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 100vh;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%] {\r\n    float: left;\r\n    min-width: 280px;\r\n    max-width: 340px;\r\n    width: 40%;\r\n    height: 100%;\r\n    background: #2c3e50;\r\n    color: #f5f5f5;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%] {\r\n      width: 58px;\r\n      min-width: 58px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 25px auto;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin: 0 auto;\r\n      padding: 5px 0 0 0;\r\n      background: #32465a;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    height: 210px;\r\n    line-height: initial;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile.expanded[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n    -webkit-transform: scaleY(-1);\r\n    transform: scaleY(-1);\r\n    -webkit-filter: FlipH;\r\n            filter: FlipH;\r\n    -ms-filter: \"FlipH\";\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    overflow: hidden;\r\n    -webkit-transition: 0.3s height ease;\r\n    transition: 0.3s height ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n      height: 55px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    padding: 3px;\r\n    border: 2px solid #e74c3c;\r\n    height: auto;\r\n    float: left;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s border ease;\r\n    transition: 0.3s border ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 40px;\r\n      margin-left: 4px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.online[_ngcontent-%COMP%] {\r\n    border: 2px solid #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.away[_ngcontent-%COMP%] {\r\n    border: 2px solid #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.busy[_ngcontent-%COMP%] {\r\n    border: 2px solid #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img.offline[_ngcontent-%COMP%] {\r\n    border: 2px solid #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-left: 15px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 23px;\r\n    font-size: 0.8em;\r\n    cursor: pointer;\r\n    color: #435f7a;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   i.expand-button[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 150px;\r\n    margin: 70px 0 0 0;\r\n    border-radius: 6px;\r\n    z-index: 99;\r\n    line-height: initial;\r\n    background: #435f7a;\r\n    -webkit-transition: 0.3s all ease;\r\n    transition: 0.3s all ease;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%] {\r\n      width: 58px;\r\n      margin-top: 57px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options.active[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    margin: 75px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options.active[_ngcontent-%COMP%] {\r\n      margin-top: 62px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #435f7a;\r\n    margin: -8px 0 0 24px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]:before {\r\n      margin-left: 23px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    border-radius: 6px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 15px 0 30px 18px;\r\n    display: block;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      padding: 15px 0 35px 22px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background: #496886;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    margin: 5px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n      width: 14px;\r\n      height: 14px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: -3px 0 0 -3px;\r\n    background: transparent;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n      height: 18px;\r\n      width: 18px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding-left: 12px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-online[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-online.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-away[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-away.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-busy[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-busy.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-offline[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%] {\r\n    background: #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #status-options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li#status-offline.active[_ngcontent-%COMP%]   span.status-circle[_ngcontent-%COMP%]:before {\r\n    border: 1px solid #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%] {\r\n    padding: 100px 0 0 0;\r\n    display: block;\r\n    line-height: initial !important;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    float: left;\r\n    clear: both;\r\n    margin: 0 8px 5px 0;\r\n    padding: 5px 0;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-bottom: 6px;\r\n    background: #32465a;\r\n    border-radius: 3px;\r\n    color: #f5f5f5;\r\n    padding: 7px;\r\n    width: calc(100% - 43px);\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #profile[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   #expanded[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #32465a;\r\n    border-bottom: 1px solid #32465a;\r\n    font-weight: 300;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin: 10px 0 0 20px;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    padding: 10px 0 10px 46px;\r\n    width: calc(100% - 25px);\r\n    border: none;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%] {\r\n    height: calc(100% - 177px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%] {\r\n      height: calc(100% - 149px);\r\n      overflow-y: scroll;\r\n      overflow-x: hidden;\r\n    }\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts.expanded[_ngcontent-%COMP%] {\r\n    height: calc(100% - 334px);\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: #2c3e50;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: #243140;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 10px 0 15px 0;\r\n    font-size: 0.9em;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%] {\r\n      padding: 6px 0 46px 8px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]:hover {\r\n    background: #32465a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact.active[_ngcontent-%COMP%] {\r\n    background: #32465a;\r\n    border-right: 5px solid #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact.active[_ngcontent-%COMP%]   span.contact-status[_ngcontent-%COMP%] {\r\n    border: 2px solid #32465a !important;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    width: 88%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    margin: -2px 0 0 -2px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    border: 2px solid #2c3e50;\r\n    background: #95a5a6;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.online[_ngcontent-%COMP%] {\r\n    background: #2ecc71;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.away[_ngcontent-%COMP%] {\r\n    background: #f1c40f;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   span.busy[_ngcontent-%COMP%] {\r\n    background: #e74c3c;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 10px;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      margin-right: 0px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n    padding: 5px 0 0 0;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\r\n    margin: 5px 0 0 0;\r\n    padding: 0 0 1px;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    -webkit-transition: 1s all ease;\r\n    transition: 1s all ease;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #contacts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.contact[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: initial;\r\n    border-radius: initial;\r\n    background: none;\r\n    border: none;\r\n    padding: 0 2px 0 0;\r\n    margin: 0 0 0 1px;\r\n    opacity: .5;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 0;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    border: none;\r\n    width: 50%;\r\n    padding: 10px 0;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n    cursor: pointer;\r\n    font-size: 0.85em;\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      float: none;\r\n      width: 100%;\r\n      padding: 15px 0;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\r\n    border-right: 1px solid #2c3e50;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\r\n      border-right: none;\r\n      border-bottom: 1px solid #2c3e50;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 3px;\r\n    font-size: 1em;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      font-size: 1.3em;\r\n    }\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   #sidepanel[_ngcontent-%COMP%]   #bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    float: right;\r\n    width: 60%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      width: calc(100% - 58px);\r\n      min-width: 300px !important;\r\n    }\r\n  }@media screen and (min-width: 900px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n      width: calc(100% - 340px);\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin: 9px 12px 0 9px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-left: 14px;\r\n    cursor: pointer;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-last-child(1) {\r\n    margin-right: 20px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contact-profile[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    color: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    min-height: calc(100% - 93px);\r\n    max-height: calc(100% - 93px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\r\n      max-height: calc(100% - 105px);\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 8px;\r\n    background: transparent;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    clear: both;\r\n    float: left;\r\n    margin: 15px 15px 5px 15px;\r\n    width: calc(100% - 25px);\r\n    font-size: 0.9em;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(1) {\r\n    margin-bottom: 20px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 6px 8px 0 0;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background: #435f7a;\r\n    color: #f5f5f5;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 6px 0 0 8px;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    float: right;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n    border-radius: 50%;\r\n    float: left;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 10px 15px;\r\n    border-radius: 20px;\r\n    max-width: 205px;\r\n    line-height: 130%;\r\n  }@media screen and (min-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      max-width: 300px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: 99;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n    float: left;\r\n    border: none;\r\n    width: calc(100% - 90px);\r\n    padding: 11px 32px 10px 8px;\r\n    font-size: 0.8em;\r\n    color: #32465a;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      padding: 15px 32px 16px 8px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 60px;\r\n    z-index: 4;\r\n    margin-top: 10px;\r\n    font-size: 1.1em;\r\n    color: #435f7a;\r\n    opacity: .5;\r\n    cursor: pointer;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%] {\r\n      margin-top: 17px;\r\n      right: 65px;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    border: none;\r\n    width: 50px;\r\n    padding: 12px 0;\r\n    cursor: pointer;\r\n    background: #32465a;\r\n    color: #f5f5f5;\r\n  }@media screen and (max-width: 735px) {\r\n    #frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n      padding: 16px 0;\r\n    }\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background: #435f7a;\r\n  }#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdHMvY2hhdGJvdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyWkFBMlosUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLDhFQUE4RSxhQUFhLENBQUMsS0FBSyxhQUFhLENBQUMsTUFBTSxlQUFlLENBQUMsYUFBYSxXQUFXLENBQUMsb0RBQW9ELFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FFdnZCO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw2Q0FBNkM7SUFDN0MsbUNBQW1DO0VBQ3JDLENBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckIsQ0FDQTtJQUNFO01BQ0UsV0FBVztNQUNYLGFBQWE7SUFDZjtFQUNGLENBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQixDQUNBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsZUFBZTtJQUNqQjtFQUNGLENBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CLENBQ0E7SUFDRTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjtFQUNGLENBQ0E7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCLENBQ0E7SUFDRSxnQkFB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a0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0VBQ2IsQ0FDQTtJQUNFLGtCQUFrQjtFQUNwQixDQUNBO0lBQ0UsMkRBQTJEO0lBQzNELFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQixDQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRixDQUNBO0lBQ0UsYUFBYTtFQUNmLENBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQixDQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0VBQ0YsQ0FDQTtJQUNFLFVBQVU7RUFDWixDQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQixDQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0YsQ0FDQTtJQUNFLG1CQUFtQjtFQUNyQixDQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJvdHMvY2hhdGJvdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keSxkaXYsc3BhbixhcHBsZXQsb2JqZWN0LGlmcmFtZSxoMSxoMixoMyxoNCxoNSxoNixwLGJsb2NrcXVvdGUscHJlLGEsYWJicixhY3JvbnltLGFkZHJlc3MsYmlnLGNpdGUsY29kZSxkZWwsZGZuLGVtLGltZyxpbnMsa2JkLHEscyxzYW1wLHNtYWxsLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0dCx2YXIsYix1LGksY2VudGVyLGRsLGR0LGRkLG9sLHVsLGxpLGZpZWxkc2V0LGZvcm0sbGFiZWwsbGVnZW5kLHRhYmxlLGNhcHRpb24sdGJvZHksdGZvb3QsdGhlYWQsdHIsdGgsdGQsYXJ0aWNsZSxhc2lkZSxjYW52YXMsZGV0YWlscyxlbWJlZCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixvdXRwdXQscnVieSxzZWN0aW9uLHN1bW1hcnksdGltZSxtYXJrLGF1ZGlvLHZpZGVve21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXNpemU6MTAwJTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bGluZS1oZWlnaHQ6MX1vbCx1bHtsaXN0LXN0eWxlOm5vbmV9YmxvY2txdW90ZSxxe3F1b3Rlczpub25lfWJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlcntjb250ZW50OicnO2NvbnRlbnQ6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH1cclxuXHJcbi5jaGF0Ym90Ym94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKm1pbi1oZWlnaHQ6IDEwMHZoOyovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgIGNvbG9yOiAjMzI0NjVhO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDA0KTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIH1cclxuICBcclxuICAjZnJhbWUge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogOTJ2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgLyptYXgtaGVpZ2h0OiA3MjBweDsqL1xyXG4gICAgYmFja2dyb3VuZDogI0U2RUFFQTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICNmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCB7XHJcbiAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDU4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIHtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICAgIGZpbHRlcjogRmxpcEg7XHJcbiAgICAtbXMtZmlsdGVyOiBcIkZsaXBIXCI7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAge1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vbmxpbmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlY2M3MTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLmF3YXkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxYzQwZjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLmJ1c3kge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLm9mZmxpbmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk1YTVhNjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNDM1ZjdhO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDcwcHggMCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHtcclxuICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucy5hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBtYXJnaW46IDc1cHggMCAwIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjJweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM0MzVmN2E7XHJcbiAgICBtYXJnaW46IC04cHggMCAwIDI0cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkge1xyXG4gICAgcGFkZGluZzogMTVweCAwIDMwcHggMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcclxuICAgICAgcGFkZGluZzogMTVweCAwIDM1cHggMjJweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0OTY4ODY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDVweCAwIDAgMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgICB3aWR0aDogMTRweDtcclxuICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgcCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb25saW5lIHNwYW4uc3RhdHVzLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9ubGluZS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmVjYzcxO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWF3YXkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWM0MGY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYXdheS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFjNDBmO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWJ1c3kgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYnVzeS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTc0YzNjO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9mZmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICM5NWE1YTY7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNWE2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQge1xyXG4gICAgcGFkZGluZzogMTAwcHggMCAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBsYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiAwIDhweCA1cHggMDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2gge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMjQ2NWE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyNDY1YTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDIwcHg7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggNDZweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTc3cHgpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDlweCk7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cy5leHBhbmRlZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMzNHB4KTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMTQwO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTVweCAwO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IHtcclxuICAgICAgcGFkZGluZzogNnB4IDAgNDZweCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QuYWN0aXZlIHNwYW4uY29udGFjdC1zdGF0dXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyNDY1YSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCB7XHJcbiAgICB3aWR0aDogODglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyYzNlNTA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNWE2O1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuLm9ubGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuLmF3YXkge1xyXG4gICAgYmFja2dyb3VuZDogI2YxYzQwZjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5idXN5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIHtcclxuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLnByZXZpZXcge1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5wcmV2aWV3IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMnB4IDAgMDtcclxuICAgIG1hcmdpbjogMCAwIDAgMXB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24ge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJjM2U1MDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzZTUwO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU4cHgpO1xyXG4gICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzQwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDlweCAxMnB4IDAgOXB4O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSBwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIGk6bnRoLWxhc3QtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MzVmN2E7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA5M3B4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMge1xyXG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweCA1cHggMTVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGk6bnRoLWxhc3QtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IGltZyB7XHJcbiAgICBtYXJnaW46IDZweCA4cHggMCAwO1xyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnNlbnQgcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBpbWcge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA2cHggMCAwIDhweDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIHAge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczNXB4KSB7XHJcbiAgICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHAge1xyXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCAgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgcGFkZGluZzogMTFweCAzMnB4IDEwcHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiAjMzI0NjVhO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcclxuICAgICAgcGFkZGluZzogMTVweCAzMnB4IDE2cHggOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICM0MzVmN2E7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICAgIHJpZ2h0OiA2NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQ6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxuICB9XHJcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0iXX0= */"] });
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