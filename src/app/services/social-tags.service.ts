import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialTagsService {

  urlPrefix = 'https://osobni-finance.eu';
  titlePrefix = 'Osobní finance - ';

  pageInfos:{[key: string]: {description: string, keyWords: string}} = {
    'Krok za krokem': {
      description: 'Osobní finance a investice. Návod krok za krokem jak si zlepšit finanční situaci. Jak investovat. Jak si udělat pořádek ve financích a udržet si ho.',
      keyWords: 'osobní finance, ETF, dluhopisy, pojištění, spoření, finanční poradce, finanční poradenství, zdarma'
    },
    'Seznam článků': {
      description: 'Osobni finance a investice. Seznam všech článků na tomto blogu. Články o investicích, šetření, inflaci a financích obecně.',
      keyWords: 'osobní finance, investice, šetření, inflace, ETF, články'

    },
    'Finanční kalkulačky': {
      description: 'Osobni finance a investice. Kalkulačky a simulace pro investice a osobní finance. Kalkulačka inflace, vývoje investice, čerpání renty atd.',
      keyWords: 'osobní finance, finanční kalkulačky, renta, investice, inflace'

    }
  }

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

          dataItem.description = dataItem.description || this.pageInfos[dataItem.title]?.description || this.throwError();

          const imgUrl = this.urlPrefix + '/blog/' + (dataItem.img || '../assets/money-stack-l.jpg');
          const pageUrl = this.urlPrefix + '/' + link.route + '/';

          let title = this.titlePrefix + dataItem.title;
          this.titleService.setTitle(title);            
          this.meta.updateTag({ name: 'og:title', property: 'og:title', content: title });
          this.meta.updateTag({ name: 'og:url', property: 'og:url', content: pageUrl });
          this.meta.updateTag({ name: 'og:type', property: 'og:type', content: 'article' });
          this.meta.updateTag({ name: 'og:locale', property: 'og:locale', content: 'cz_CS' });
          this.meta.updateTag({ name: 'og:description', property: 'og:description', content: dataItem.description});
          this.meta.updateTag({ name: 'og:image', property: 'og:image', content: imgUrl  });


          this.meta.updateTag({ name: 'twitter:title', content: title });
          this.meta.updateTag({ name: 'twitter:site', content: '@osfin' });
          //this.meta.updateTag({ name: 'og:locale', property: 'og:locale', content: 'cz_CS' });
          this.meta.updateTag({ name: 'twitter:description',  content: dataItem.description});
          this.meta.updateTag({ name: 'twitter:card', content: 'summary'});
          this.meta.updateTag({ name: 'twitter:image', content: imgUrl  });

          this.meta.updateTag({ name: 'description', content: dataItem.description });
          this.meta.updateTag({ name: 'keywords', dataItem: dataItem.seoKeywords || this.pageInfos[dataItem.title]?.keyWords });
        });
    });
  }
  throwError(): string {
    throw new Error('Missing !!!!');
  }


  private get data() { return this.activatedRoute.snapshot.firstChild.data; }
}

