import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import {MatInputModule} from '@angular/material/input'
import {MatSliderModule} from '@angular/material/slider'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatIconModule} from '@angular/material/icon'


import { FinCalcsRoutingModule } from './fin-calcs-routing.module';
import { FinCalcsPageComponent } from './fin-calcs-page/fin-calcs-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FinCalcInvestComponent } from './fin-calc-invest/fin-calc-invest.component';
import { FinCalcRentaComponent } from './fin-calc-renta/fin-calc-renta.component';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FinCalcInflationValueComponent } from './fin-calc-inflation-value/fin-calc-inflation-value.component';


@NgModule({
  declarations: [FinCalcsPageComponent, FinCalcInvestComponent, FinCalcRentaComponent, FinCalcInflationValueComponent],
  imports: [
    CommonModule,
    FinCalcsRoutingModule,
    ChartModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule
  ],
  //exports: [ArticleListComponent]
})
export class FinCalcsModule { }
