import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FinCalcsModule } from './fin-calcs/fin-calcs.module';
import { LazyLoadImgDirective } from './directives/lazy-load-img.directive';
// import locale from '@angular/common/locales/cs';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(locale);


@NgModule({
  declarations: [
    AppComponent,
    LazyLoadImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    ChartsModule,
    FinCalcsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
