import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [ArticleListPageComponent, ArticleListComponent],
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    MatCardModule,
    MatButtonModule,
    ShareButtonsModule,
    ShareIconsModule,    
  ],
  exports: [ArticleListComponent]
})
export class ArticleListModule { }
