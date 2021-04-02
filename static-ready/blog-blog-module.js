(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "51b1":
/*!*************************************************!*\
  !*** ./src/app/discussion/discussion.module.ts ***!
  \*************************************************/
/*! exports provided: DiscussionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionModule", function() { return DiscussionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _discussion_wrapper_discussion_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discussion-wrapper/discussion-wrapper.component */ "DfMH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class DiscussionModule {
}
DiscussionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DiscussionModule });
DiscussionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function DiscussionModule_Factory(t) { return new (t || DiscussionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DiscussionModule, { declarations: [_discussion_wrapper_discussion_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["DiscussionWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_discussion_wrapper_discussion_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["DiscussionWrapperComponent"]] }); })();


/***/ }),

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.component */ "LgBW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: ':slug',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"],
    },
    {
        path: '**',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"],
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "DfMH":
/*!*******************************************************************************!*\
  !*** ./src/app/discussion/discussion-wrapper/discussion-wrapper.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DiscussionWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionWrapperComponent", function() { return DiscussionWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");


class DiscussionWrapperComponent {
    constructor(scully) {
        this.scully = scully;
        this.currentPage$ = this.scully.getCurrent(); //available$;
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
DiscussionWrapperComponent.ɵfac = function DiscussionWrapperComponent_Factory(t) { return new (t || DiscussionWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"])); };
DiscussionWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscussionWrapperComponent, selectors: [["app-discussion-wrapper"]], decls: 2, vars: 0, consts: [[1, "discussion"], ["id", "remarkbox-div"]], template: function DiscussionWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".discussion[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  z-index: 2;\n  margin: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXNjdXNzaW9uLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGlzY3Vzc2lvbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2N1c3Npb24ge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xufSJdfQ== */"] });


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _discussion_discussion_wrapper_discussion_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../discussion/discussion-wrapper/discussion-wrapper.component */ "DfMH");




class BlogComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 17, vars: 0, consts: [[1, "app-center"], [1, "px-4", "py-10", "max-w-3xl", "mx-auto", "sm:px-6", "sm:py-12", "lg:max-w-4xl", "lg:py-16", "lg:px-8", "xl:max-w-6xl"], [1, "prose", "prose-sm", "sm:prose", "lg:prose-lg", "xl:prose-2xl", "mx-auto"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "scully-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-discussion-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n");
    } }, directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyContentComponent"], _discussion_discussion_wrapper_discussion_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["DiscussionWrapperComponent"]], styles: [".app-center[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFiRiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaDEge1xuXG4vLyAgIGNvbG9yOnJnYig1MSwgNiwgMzcpO1xuXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIxMSwgMjM2KTtcblxuLy8gICBwYWRkaW5nOiA1cHg7XG5cbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4vLyAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuLy8gfVxuXG4uYXBwLWNlbnRlciB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC8vIHBhZGRpbmc6IDUwcHggMzBweDs7XG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "LgBW");
/* harmony import */ var _discussion_discussion_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discussion/discussion.module */ "51b1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyLibModule"], _discussion_discussion_module__WEBPACK_IMPORTED_MODULE_4__["DiscussionModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyLibModule"], _discussion_discussion_module__WEBPACK_IMPORTED_MODULE_4__["DiscussionModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map