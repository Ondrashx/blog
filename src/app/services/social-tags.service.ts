import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialTagsService {

  urlPrefix = 'https://osobni-finance.netlify.app/blog';
  titlePrefix = 'Osobní finance - '

  public constructor(private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService,
    private meta: Meta) { }

  // skipped readonly props

  setTitleAndTags() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe(() => {
      this.scully.getCurrent().subscribe(
        link => {
          if (link?.title) {
            let title = this.titlePrefix + link.title;
            this.titleService.setTitle(title);
            this.meta.updateTag({ name: 'og:title', property: 'og:title', content: title });
            this.meta.updateTag({ name: 'og:description', property: 'og:description', content: link.description});
            this.meta.updateTag({ name: 'og:image', content: this.urlPrefix + '/' + link.img });
          } else {
            let title = this.titlePrefix + this.data.title
            this.titleService.setTitle(title);
            this.meta.updateTag({ name: 'og:title', content: title });
            this.meta.updateTag({ name: 'og:description', content: 'Osobní finance. Tečka.' });
            this.meta.updateTag({ name: 'og:image', content: this.urlPrefix + '/'+ '../assets/money-stack-l.jpg' });
          }
        });
    });
  }


  private get data() { return this.activatedRoute.snapshot.firstChild.data; }
}

