(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"U4+L":function(t,e,n){"use strict";n.r(e),n.d(e,"BlogModule",function(){return h});var i=n("ofXK"),r=n("sbAP"),c=n("tyNb"),o=n("fXoL"),s=n("pj/B");let l=(()=>{class t{constructor(t){this.scully=t,this.inited=!1,this.currentPage$=this.scully.getCurrent()}ngOnInit(){}init(){this.currentPage$.subscribe(t=>{console.log(t),this.create_remarkbox_iframe();var e=window.location.hash;window.iFrameResize({checkOrigin:["https://my.remarkbox.com"],inPageLinks:!0,initCallback:function(t){t.iFrameResizer.moveToAnchor(e)}},document.getElementById("remarkbox-iframe"))})}onScroll(t){this.inited||(window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)>300&&(this.init(),this.inited=!0)}removeChilds(t){for(;t&&t.lastChild;)t.removeChild(t.lastChild)}create_remarkbox_iframe(){var t=window.location.href,e=window.document.title,n=window.location.hash,i="https://my.remarkbox.com/embed?rb_owner_key=06263375-c6b9-11eb-a7d6-040140774501&thread_title="+encodeURI(e)+"&thread_uri="+encodeURIComponent(t)+n,r=document.createElement("iframe");r.setAttribute("id","remarkbox-iframe"),r.setAttribute("scrolling","no"),r.setAttribute("src",i),r.setAttribute("frameborder","0"),r.setAttribute("tabindex","0"),r.setAttribute("title","Remarkbox"),r.setAttribute("style",'height:600px;width:100%;border:none!important"'),r.style.width="100%";const c=document.getElementById("remarkbox-div");c&&(this.removeChilds(c),c.appendChild(r))}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(r.c))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-discussion-wrapper"]],hostBindings:function(t,e){1&t&&o.Zb("scroll",function(t){return e.onScroll(t)},!1,o.mc)},decls:2,vars:0,consts:[[1,"discussion"],["id","remarkbox-div"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Ob(1,"div",1),o.Rb())},styles:[".discussion[_ngcontent-%COMP%]{max-width:1024px;z-index:2;margin:auto;padding-left:20px;padding-right:20px;position:relative}"]}),t})();const a=function(){return["facebook","twitter","linkedin"]};let d=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.scully=n,this.currentPage$=this.scully.getCurrent(),setTimeout(window.lazyload,750)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(c.d),o.Nb(c.a),o.Nb(r.c))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-blog"]],decls:42,vars:14,consts:[[1,"app-center"],[1,"py-3","flex","justify-between","px-6"],[1,"text-left","align-middle","top-4","relative","text-xl"],[1,"text-left","align-middle","top-4","relative","text-base","italic"],[1,"text-right",3,"theme","include","show","size"],[1,"px-4","py-10","max-w-3xl","mx-auto","sm:px-6","sm:py-4","lg:max-w-4xl","lg:py-6","lg:px-8","xl:max-w-6xl"],[1,"prose","prose-sm","sm:prose","lg:prose-lg","xl:prose-2xl","mx-auto"],["id","toc",1,"pb-6"],[1,"blog-content"]],template:function(t,e){if(1&t&&(o.Sb(0,"div",0),o.tc(1,"\n    "),o.Sb(2,"div",1),o.tc(3,"\n        "),o.Sb(4,"div"),o.tc(5,"\n            "),o.Sb(6,"div",2),o.tc(7),o.cc(8,"async"),o.Rb(),o.tc(9,"\n            "),o.Sb(10,"div",3),o.tc(11),o.cc(12,"number"),o.cc(13,"async"),o.Rb(),o.tc(14,"    \n        "),o.Rb(),o.tc(15,"\n\n        "),o.Sb(16,"share-buttons",4),o.tc(17,"\n        "),o.Rb(),o.tc(18,"\n    "),o.Rb(),o.tc(19,"\n\n    "),o.Sb(20,"div",5),o.tc(21,"\n        "),o.Sb(22,"article",6),o.tc(23,"\n            "),o.Sb(24,"div",7),o.tc(25,"\n                "),o.Sb(26,"h4"),o.tc(27,"Obsah"),o.Rb(),o.tc(28,"\n            "),o.Rb(),o.tc(29,"\n            "),o.Sb(30,"div",8),o.tc(31,"\n                "),o.Ob(32,"scully-content"),o.tc(33,"\n            "),o.Rb(),o.tc(34,"            \n        "),o.Rb(),o.tc(35,"\n    "),o.Rb(),o.tc(36,"\n"),o.Rb(),o.tc(37,"\n\n"),o.Sb(38,"div",0),o.tc(39,"\n    "),o.Ob(40,"app-discussion-wrapper"),o.tc(41,"\n"),o.Rb()),2&t){let t=null,n=null;o.Bb(7),o.uc(null==(t=o.dc(8,6,e.currentPage$))?null:t.publishedDate),o.Bb(4),o.vc("\u010cas \u010dten\xed: ",o.ec(12,8,null==(n=o.dc(13,11,e.currentPage$))?null:n.readingTime,"1.0-0")," minut"),o.Bb(5),o.hc("theme","circles-dark")("include",o.ic(13,a))("show",3)("size",1)}},directives:[s.a,r.a,l],pipes:[i.b,i.e],styles:[".app-center[_ngcontent-%COMP%]{max-width:1024px;margin:auto}"]}),t})();const b=[{path:":slug",component:d},{path:"**",component:d}];let u=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(b)],c.f]}),t})(),m=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})();var p=n("Sz05");let h=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c,u,r.b,m,s.b,p.a]]}),t})()}}]);