import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ArticleListPageComponent, ArticleListComponent],
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    MatCardModule,
    MatButtonModule    
  ],
  exports: [ArticleListComponent]
})
export class ArticleListModule { }
