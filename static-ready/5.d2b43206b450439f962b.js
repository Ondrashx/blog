(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return h});var i=n("ofXK"),s=n("sbAP"),r=n("tyNb"),c=n("fXoL"),o=n("pj/B");let l=(()=>{class t{constructor(t){this.scully=t,this.inited=!1,this.currentPage$=this.scully.getCurrent()}ngOnInit(){}init(){this.currentPage$.subscribe(t=>{console.log(t),this.create_remarkbox_iframe();var e=window.location.hash;window.iFrameResize({checkOrigin:["https://my.remarkbox.com"],inPageLinks:!0,initCallback:function(t){t.iFrameResizer.moveToAnchor(e)}},document.getElementById("remarkbox-iframe"))})}onScroll(t){this.inited||(window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)>300&&(this.init(),this.inited=!0)}removeChilds(t){for(;t&&t.lastChild;)t.removeChild(t.lastChild)}create_remarkbox_iframe(){var t=window.location.href,e=window.document.title,n=window.location.hash,i="https://my.remarkbox.com/embed?rb_owner_key=06263375-c6b9-11eb-a7d6-040140774501&thread_title="+encodeURI(e)+"&thread_uri="+encodeURIComponent(t)+n,s=document.createElement("iframe");s.setAttribute("id","remarkbox-iframe"),s.setAttribute("scrolling","no"),s.setAttribute("src",i),s.setAttribute("frameborder","0"),s.setAttribute("tabindex","0"),s.setAttribute("title","Remarkbox"),s.setAttribute("style",'height:600px;width:100%;border:none!important"'),s.style.width="100%";const r=document.getElementById("remarkbox-div");r&&(this.removeChilds(r),r.appendChild(s))}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(s.c))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-discussion-wrapper"]],hostBindings:function(t,e){1&t&&c.Zb("scroll",function(t){return e.onScroll(t)},!1,c.lc)},decls:2,vars:0,consts:[[1,"discussion"],["id","remarkbox-div"]],template:function(t,e){1&t&&(c.Sb(0,"div",0),c.Ob(1,"div",1),c.Rb())},styles:[".discussion[_ngcontent-%COMP%]{max-width:1024px;z-index:2;margin:auto;padding-left:20px;padding-right:20px;position:relative}"]}),t})();const a=function(){return["facebook","twitter","linkedin"]};let d=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.scully=n,this.currentPage$=this.scully.getCurrent(),setTimeout(window.lazyload,750)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(r.d),c.Nb(r.a),c.Nb(s.c))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-blog"]],decls:42,vars:14,consts:[[1,"app-center"],[1,"py-3","flex","justify-between","px-6"],[1,"text-left","align-middle","top-4","relative","text-xl"],[1,"text-left","align-middle","top-4","relative","text-base","italic"],[1,"text-right",3,"theme","include","show","size"],[1,"px-4","py-10","max-w-3xl","mx-auto","sm:px-6","sm:py-4","lg:max-w-4xl","lg:py-6","lg:px-8","xl:max-w-6xl"],[1,"prose","prose-sm","sm:prose","lg:prose-lg","xl:prose-2xl","mx-auto"],["id","toc",1,"pb-6"],[1,"blog-content"]],template:function(t,e){if(1&t&&(c.Sb(0,"div",0),c.sc(1,"\n    "),c.Sb(2,"div",1),c.sc(3,"\n        "),c.Sb(4,"div"),c.sc(5,"\n            "),c.Sb(6,"div",2),c.sc(7),c.cc(8,"async"),c.Rb(),c.sc(9,"\n            "),c.Sb(10,"div",3),c.sc(11),c.cc(12,"number"),c.cc(13,"async"),c.Rb(),c.sc(14,"    \n        "),c.Rb(),c.sc(15,"\n\n        "),c.Sb(16,"share-buttons",4),c.sc(17,"\n        "),c.Rb(),c.sc(18,"\n    "),c.Rb(),c.sc(19,"\n\n    "),c.Sb(20,"div",5),c.sc(21,"\n        "),c.Sb(22,"article",6),c.sc(23,"\n            "),c.Sb(24,"div",7),c.sc(25,"\n                "),c.Sb(26,"h4"),c.sc(27,"Obsah"),c.Rb(),c.sc(28,"\n            "),c.Rb(),c.sc(29,"\n            "),c.Sb(30,"div",8),c.sc(31,"\n                "),c.Ob(32,"scully-content"),c.sc(33,"\n            "),c.Rb(),c.sc(34,"            \n        "),c.Rb(),c.sc(35,"\n    "),c.Rb(),c.sc(36,"\n"),c.Rb(),c.sc(37,"\n\n"),c.Sb(38,"div",0),c.sc(39,"\n    "),c.Ob(40,"app-discussion-wrapper"),c.sc(41,"\n"),c.Rb()),2&t){let t=null,n=null;c.Bb(7),c.tc(null==(t=c.dc(8,6,e.currentPage$))?null:t.publishedDate),c.Bb(4),c.uc("\u010cas \u010dten\xed: ",c.ec(12,8,null==(n=c.dc(13,11,e.currentPage$))?null:n.readingTime,"1.0-0")," minut"),c.Bb(5),c.hc("theme","circles-dark")("include",c.ic(13,a))("show",3)("size",1)}},directives:[o.a,s.a,l],pipes:[i.b,i.e],styles:[".app-center[_ngcontent-%COMP%]{max-width:1024px;margin:auto}"]}),t})();const b=[{path:":slug",component:d},{path:"**",component:d}];let u=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(b)],r.f]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var p=n("Sz05");let h=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[i.c,u,s.b,m,o.b,p.a]]}),t})()}}]);