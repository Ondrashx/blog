import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
    map(links => links.filter(l => l.isBlog)),
    map(links => links.sort((a,b) => a.order - b.order))
    );

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    // this.links$.subscribe((links) => {
    //   console.log('X', links);
    // });
  }

  getThumbnailImgUrl(path) {
    return 'url(' + path  + ')';
  }

}
