(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return h});var i=n("ofXK"),r=n("sbAP"),s=n("tyNb"),o=n("fXoL"),c=n("pj/B");let l=(()=>{class t{constructor(t){this.scully=t,this.inited=!1,this.currentPage$=this.scully.getCurrent()}ngOnInit(){}init(){this.currentPage$.subscribe(t=>{console.log(t),this.create_remarkbox_iframe();var e=window.location.hash;window.iFrameResize({checkOrigin:["https://my.remarkbox.com"],inPageLinks:!0,initCallback:function(t){t.iFrameResizer.moveToAnchor(e)}},document.getElementById("remarkbox-iframe"))})}onScroll(t){this.inited||(window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)>300&&(this.init(),this.inited=!0)}removeChilds(t){for(;t&&t.lastChild;)t.removeChild(t.lastChild)}create_remarkbox_iframe(){var t=window.location.href,e=window.document.title,n=window.location.hash,i="https://my.remarkbox.com/embed?rb_owner_key=06263375-c6b9-11eb-a7d6-040140774501&thread_title="+encodeURI(e)+"&thread_uri="+encodeURIComponent(t)+n,r=document.createElement("iframe");r.setAttribute("id","remarkbox-iframe"),r.setAttribute("scrolling","no"),r.setAttribute("src",i),r.setAttribute("frameborder","0"),r.setAttribute("tabindex","0"),r.setAttribute("title","Remarkbox"),r.setAttribute("style",'height:600px;width:100%;border:none!important"'),r.style.width="100%";const s=document.getElementById("remarkbox-div");s&&(this.removeChilds(s),s.appendChild(r))}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(r.c))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-discussion-wrapper"]],hostBindings:function(t,e){1&t&&o.Zb("scroll",function(t){return e.onScroll(t)},!1,o.lc)},decls:2,vars:0,consts:[[1,"discussion"],["id","remarkbox-div"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Ob(1,"div",1),o.Rb())},styles:[".discussion[_ngcontent-%COMP%]{max-width:1024px;z-index:2;margin:auto;padding-left:20px;padding-right:20px;position:relative}"]}),t})();const a=function(){return["facebook","twitter","linkedin"]};let d=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.scully=n,this.currentPage$=this.scully.getCurrent(),setTimeout(window.lazyload,750)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(s.d),o.Nb(s.a),o.Nb(r.c))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-blog"]],decls:25,vars:8,consts:[[1,"app-center"],[1,"py-3","flex","justify-between","px-6"],[1,"text-left","align-middle","top-4","relative","text-xl"],[1,"text-right",3,"theme","include","show","size"],[1,"px-4","py-10","max-w-3xl","mx-auto","sm:px-6","sm:py-12","lg:max-w-4xl","lg:py-16","lg:px-8","xl:max-w-6xl"],[1,"prose","prose-sm","sm:prose","lg:prose-lg","xl:prose-2xl","mx-auto"]],template:function(t,e){if(1&t&&(o.Sb(0,"div",0),o.sc(1,"\n    "),o.Sb(2,"div",1),o.sc(3,"\n        "),o.Sb(4,"span",2),o.sc(5),o.cc(6,"async"),o.Rb(),o.sc(7,"\n        "),o.Sb(8,"share-buttons",3),o.sc(9,"\n        "),o.Rb(),o.sc(10,"\n    "),o.Rb(),o.sc(11,"\n\n    "),o.Sb(12,"div",4),o.sc(13,"\n        "),o.Sb(14,"article",5),o.sc(15,"\n            "),o.Ob(16,"scully-content"),o.sc(17,"\n        "),o.Rb(),o.sc(18,"\n    "),o.Rb(),o.sc(19,"\n"),o.Rb(),o.sc(20,"\n\n"),o.Sb(21,"div",0),o.sc(22,"\n    "),o.Ob(23,"app-discussion-wrapper"),o.sc(24,"\n"),o.Rb()),2&t){let t=null;o.Bb(5),o.tc(null==(t=o.dc(6,5,e.currentPage$))?null:t.publishedDate),o.Bb(3),o.hc("theme","circles-dark")("include",o.ic(7,a))("show",3)("size",1)}},directives:[c.a,r.a,l],pipes:[i.b],styles:[".app-center[_ngcontent-%COMP%]{max-width:1024px;margin:auto}"]}),t})();const u=[{path:":slug",component:d},{path:"**",component:d}];let b=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(u)],s.f]}),t})(),p=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var m=n("Sz05");let h=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c,b,r.b,p,c.b,m.a]]}),t})()}}]);