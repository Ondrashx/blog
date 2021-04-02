import { Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { SocialTagsService } from './services/social-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Osobní finance';

  currentPage$: Observable<ScullyRoute> = this.scully.getCurrent(); //available$;

  constructor(private scully: ScullyRoutesService, private socialTagsService: SocialTagsService) {
    this.socialTagsService.setTitleAndTags();
  }

  // ngOnInit() {
  //   // debug current pages
  //   this.currentPage$.subscribe((links) => {
  //     console.log(links);
  //     // subscribe to changed url and recreate whole iframe
  //     this.create_remarkbox_iframe();

  //     var thread_fragment = window.location.hash;
  //     (window as any).iFrameResize(
  //       {
  //         checkOrigin: ["https://my.remarkbox.com"],
  //         inPageLinks: true,
  //         initCallback: function (e) { e.iFrameResizer.moveToAnchor(thread_fragment) }
  //       },
  //       document.getElementById("remarkbox-iframe")
  //     );
  //   });
  // }

  // removeChilds(parent) {
  //   while (parent.lastChild) {
  //     parent.removeChild(parent.lastChild);
  //   }
  // }

  // create_remarkbox_iframe() {

  //   var rb_owner_key = "4777168b-89b1-11eb-9666-040140774501";
  //   var thread_uri = window.location.href;
  //   var thread_title = window.document.title;
  //   var thread_fragment = window.location.hash;

  //   var rb_src = "https://my.remarkbox.com/embed" +
  //     "?rb_owner_key=" + rb_owner_key +
  //     "&thread_title=" + encodeURI(thread_title) +
  //     "&thread_uri=" + encodeURIComponent(thread_uri) +
  //     thread_fragment;

  //   var ifrm = document.createElement("iframe");
  //   ifrm.setAttribute("id", "remarkbox-iframe");
  //   ifrm.setAttribute("scrolling", "no");
  //   ifrm.setAttribute("src", rb_src);
  //   ifrm.setAttribute("frameborder", "0");
  //   ifrm.setAttribute("tabindex", "0");
  //   ifrm.setAttribute("title", "Remarkbox");
  //   ifrm.setAttribute("style", 'height:600px;width:100%;border:none!important"');
  //   ifrm.style.width = "100%";
  //   const  div = document.getElementById("remarkbox-div");
  //   this.removeChilds(div);
  //   div.appendChild(ifrm);
  //   //document.getElementsByClassName("whats-next").innerHTML = "A co ted?";
  // }
}
