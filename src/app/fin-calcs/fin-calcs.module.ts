import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FinCalcsRoutingModule } from './fin-calcs-routing.module';
import { FinCalcsPageComponent } from './fin-calcs-page/fin-calcs-page.component';


@NgModule({
  declarations: [FinCalcsPageComponent],
  imports: [
    CommonModule,
    FinCalcsRoutingModule,
    MatCardModule,
    MatButtonModule,
    ShareButtonsModule,
    ShareIconsModule,    
  ],
  //exports: [ArticleListComponent]
})
export class FinCalcsModule { }
