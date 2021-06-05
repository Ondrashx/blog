import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialTagsService {

  urlPrefix = 'https://osobni-finance.eu/blog';
  titlePrefix = 'Osobní finance - ';
  descriptionDefault = 'Osobni finance. Návod krok za krokem jak si zlepšit finanční situaci. ETF, dluhopisy, spoření stavební a důchodoé atd. v kontextu osobních financí.';
  keyWordsDefault = 'osobní finance, ETF, dluhopisy, pojištění, stavební spoření, finanční poradce, finanční poradenství, zdarma';

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
          let dataItem: {
            title: string;
            description: string;
            seoKeywords: string;
            img: string;
          };
          if (link?.title) {
            dataItem = link as any;
          } else {
            dataItem = this.data as any;
          }

          let title = this.titlePrefix + dataItem.title;
          this.titleService.setTitle(title);            
          this.meta.updateTag({ name: 'og:title', property: 'og:title', content: title });
          this.meta.updateTag({ name: 'og:description', property: 'og:description', content: dataItem.description || this.descriptionDefault});
          this.meta.updateTag({ name: 'og:image', property: 'og:image', content: this.urlPrefix + '/' + (dataItem.img || '../assets/money-stack-l.jpg') });

          this.meta.updateTag({ name: 'description', content: dataItem.description || this.descriptionDefault });
          this.meta.updateTag({ name: 'keywords', dataItem: dataItem.seoKeywords || this.keyWordsDefault });
        });
    });
  }


  private get data() { return this.activatedRoute.snapshot.firstChild.data; }
}

