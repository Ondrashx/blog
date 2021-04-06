import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ArticleListModule } from '../article-list/article-list.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ArticleListModule,
    ShareButtonsModule,
    ShareIconsModule

  ]
})
export class HomeModule { }
