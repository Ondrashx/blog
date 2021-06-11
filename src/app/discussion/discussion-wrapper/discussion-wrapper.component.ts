import { Component, HostListener, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-discussion-wrapper',
  templateUrl: './discussion-wrapper.component.html',
  styleUrls: ['./discussion-wrapper.component.scss']
})
export class DiscussionWrapperComponent implements OnInit {

  inited = false;

  currentPage$: Observable<ScullyRoute> = this.scully.getCurrent(); //available$;

  constructor(private scully: ScullyRoutesService) { }


  ngOnInit() {
    // debug current pages

  }

  init() {
        this.currentPage$.subscribe((links) => {
      console.log(links);
      // subscribe to changed url and recreate whole iframe
      this.create_remarkbox_iframe();

      var thread_fragment = window.location.hash;
      (window as any).iFrameResize(
        {
          checkOrigin: ["https://my.remarkbox.com"],
          inPageLinks: true,
          initCallback: function (e) { e.iFrameResizer.moveToAnchor(thread_fragment) }
        },
        document.getElementById("remarkbox-iframe")
      );
    });
  }


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
   
    if (!this.inited) {
      let scrollTop = window.pageYOffset || ((document.documentElement || document.body.parentNode || document.body) as any).scrollTop;
      if (scrollTop > 300) {
        this.init();
        this.inited = true;
      }

    }
  }

  removeChilds(parent) {
    while (parent && parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  }

  create_remarkbox_iframe() {

    var rb_owner_key = "06263375-c6b9-11eb-a7d6-040140774501";
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
    const  div = document.getElementById("remarkbox-div");
    if (div) {
      this.removeChilds(div);
      div.appendChild(ifrm);
    }

    //document.getElementsByClassName("whats-next").innerHTML = "A co ted?";
  }

}
