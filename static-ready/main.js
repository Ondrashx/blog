(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\Repos\scully\blog\blog\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _services_social_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/social-tags.service */ "pTLg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppComponent {
    constructor(scully, socialTagsService) {
        this.scully = scully;
        this.socialTagsService = socialTagsService;
        this.title = 'Osobní finance';
        this.currentPage$ = this.scully.getCurrent(); //available$;
        this.socialTagsService.setTitleAndTags();
    }
    ngOnInit() {
        // debug current pages
        this.currentPage$.subscribe((links) => {
            console.log(links);
            // subscribe to changed url and recreate whole iframe
            this.create_remarkbox_iframe();
            var thread_fragment = window.location.hash;
            window.iFrameResize({
                checkOrigin: ["https://my.remarkbox.com"],
                inPageLinks: true,
                initCallback: function (e) { e.iFrameResizer.moveToAnchor(thread_fragment); }
            }, document.getElementById("remarkbox-iframe"));
        });
    }
    removeChilds(parent) {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }
    create_remarkbox_iframe() {
        var rb_owner_key = "4777168b-89b1-11eb-9666-040140774501";
        var thread_uri = window.location.href;
        var thread_title = window.document.title;
        var thread_fragment = window.location.hash;
        var rb_src = "https://my.remarkbox.com/embed" +
            "?rb_owner_key=" + rb_owner_key +
            "&thread_title=" + encodeURI(thread_title) +
            "&thread_uri=" + encodeURIComponent(thread_uri) +
            thread_fragment;
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("id", "remarkbox-iframe");
        ifrm.setAttribute("scrolling", "no");
        ifrm.setAttribute("src", rb_src);
        ifrm.setAttribute("frameborder", "0");
        ifrm.setAttribute("tabindex", "0");
        ifrm.setAttribute("title", "Remarkbox");
        ifrm.setAttribute("style", 'height:600px;width:100%;border:none!important"');
        ifrm.style.width = "100%";
        const div = document.getElementById("remarkbox-div");
        this.removeChilds(div);
        div.appendChild(ifrm);
        //document.getElementsByClassName("whats-next").innerHTML = "A co ted?";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_social_tags_service__WEBPACK_IMPORTED_MODULE_2__["SocialTagsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 9, consts: [[1, "overlay"], [1, "header-content"], [1, "top-row"], ["routerLink", "/", 1, "left-title"], [1, "header-items"], ["routerLink", "/", 1, "header-item"], ["routerLink", "/about", 1, "header-item"], [1, "main-title"], [1, "antialiased", "text-gray-900"], [1, "discussion"], ["id", "remarkbox-div"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Osobn\u00ED finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "O str\u00E1nce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.currentPage$)) == null ? null : tmp_0_0.img) != null ? "url(" + ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.currentPage$)) == null ? null : tmp_0_0.img) + ")" : "url(../assets/home-bg-s.jpg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx.currentPage$)) == null ? null : tmp_1_0.title) || "Osobn\u00ED finance krok za krokem");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: solid 1px #e1e1e1;\n  min-height: 560px;\n  background-size: cover;\n  position: relative;\n  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.43);\n}\nheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 20px;\n  max-width: 1024px;\n  margin: auto;\n  padding-right: 20px;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .left-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 30px;\n  cursor: pointer;\n  outline: none !important;\n  padding-left: 20px;\n  max-width: 40%;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .left-title[_ngcontent-%COMP%]:hover {\n  color: lightgray;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .header-items[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: uppercase;\n  line-height: 30px;\n  position: relative;\n  top: 6px;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .header-items[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  cursor: pointer;\n  color: white;\n  display: inline-block;\n  border-top: 2px solid transparent;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .header-items[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: lightgray;\n  border-top: 2px solid;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  padding: 150px 0;\n  min-width: 90%;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 80px;\n  font-weight: 800;\n  cursor: default;\n}\n.discussion[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  z-index: 2;\n  margin: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUFBRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRU47QUFETTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR1I7QUFGUTtFQUNFLGdCQUFBO0FBSVY7QUFETTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFFUjtBQURRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFHVjtBQUZVO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUlaO0FBQ0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHdpZHRoOjEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTFlMWUxO1xuICBtaW4taGVpZ2h0OiA1NjBweDtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2hvbWUtYmcuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIC50b3Atcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAubGVmdC10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmhlYWRlci1pdGVtcyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC8vZGlzcGxheTogYmxvY2s7ICAgICAgICAgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICAuaGVhZGVyLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tdGl0bGUge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMTUwcHggMDtcbiAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kaXNjdXNzaW9uIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyLibModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyLibModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "pTLg":
/*!*************************************************!*\
  !*** ./src/app/services/social-tags.service.ts ***!
  \*************************************************/
/*! exports provided: SocialTagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTagsService", function() { return SocialTagsService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");






class SocialTagsService {
    constructor(titleService, router, activatedRoute, scully, meta) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.scully = scully;
        this.meta = meta;
        this.urlPrefix = 'https://osobni-finance.netlify.app/blog';
    }
    // skipped readonly props
    setTitleAndTags() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(route => route.outlet === 'primary')).subscribe(() => {
            this.scully.getCurrent().subscribe(link => {
                if (link === null || link === void 0 ? void 0 : link.title) {
                    this.titleService.setTitle(link.title);
                    this.meta.updateTag({ name: 'og:title', property: 'og:title', content: link.title });
                    this.meta.updateTag({ name: 'og:description', property: 'og:description', content: link.description });
                    this.meta.updateTag({ name: 'og:image', content: this.urlPrefix + '/' + link.img });
                }
                else {
                    let title = this.data.title;
                    this.titleService.setTitle(title);
                    this.meta.updateTag({ name: 'og:title', content: title });
                    this.meta.updateTag({ name: 'og:description', content: 'Osobní finance. Tečka.' });
                    this.meta.updateTag({ name: 'og:image', content: this.urlPrefix + '/' + '../assets/money-stack-l.jpg' });
                }
            });
        });
    }
    get data() { return this.activatedRoute.snapshot.firstChild.data; }
}
SocialTagsService.ɵfac = function SocialTagsService_Factory(t) { return new (t || SocialTagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
SocialTagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocialTagsService, factory: SocialTagsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule), data: { 'title': "osobni-finance" } },
    { path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule), data: { 'title': "blog" } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map