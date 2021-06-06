import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FinCalcsModule } from './fin-calcs/fin-calcs.module';
// import locale from '@angular/common/locales/cs';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(locale);


@NgModule({
  declarations: [
    AppComponent
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
