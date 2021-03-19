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

  links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(map(links => links.filter(l => l.isBlog)));

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    console.log('DD');
    this.links$.subscribe((links) => {
      console.log('X', links);
    });
  }

}
