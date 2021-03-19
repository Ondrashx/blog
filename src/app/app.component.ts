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

  ngOnInit() {
    // debug current pages
    this.currentPage$.subscribe((links) => {
      console.log(links);
    });
  }
}
