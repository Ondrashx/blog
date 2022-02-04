import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FinCalcInflationValueComponent } from '../fin-calc-inflation-value/fin-calc-inflation-value.component';
import { FinCalcInvestComponent } from '../fin-calc-invest/fin-calc-invest.component';
import { FinCalcRentaComponent } from '../fin-calc-renta/fin-calc-renta.component';

@Component({
  selector: 'app-fin-calcs-page',
  templateUrl: './fin-calcs-page.component.html',
  styleUrls: ['./fin-calcs-page.component.scss']
})
export class FinCalcsPageComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  @ViewChild(FinCalcInvestComponent) investComp: FinCalcInvestComponent;
  @ViewChild(FinCalcInflationValueComponent) inflationComp: FinCalcInflationValueComponent;
  @ViewChild(FinCalcRentaComponent) rentaComp: FinCalcRentaComponent;

  public showCharts = false;
  public showTables = false;
  public expandFirst = false;

  public neededRent = 20000;
  public startNestEgg = 10000000;
  public inflationValue = 2;
  public yearValue = 20;

  // public inv_yearValue = 20;
  // public inv_investValue = 100000;
  // public inv_investMonthlyValue = 10000
  // public inv_interestValue = 4;
  // public inv_inflationValue = 2;
  // public inv_salaryInterestYearlyRaise = 1;

  // public inf_yearValue = 20;
  // public inf_moneyValue = 20000;
  // public inf_inflationValue = 2;

  // public rnt_startNestEgg = 10000000;
  // public rnt_monthlyNeededRent = 20000;
  // public rnt_inflationValue = 2;
  // public rnt_interestValue = 4;



  public expPanelHeight = '90px';

  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=> this.expandFirst = true, 200);
    

  }

  public shareCalcClick() {
    const params = this.investComp.produceUrlParamsFromProps() + this.inflationComp.produceUrlParamsFromProps() + this.rentaComp.produceUrlParamsFromProps();

    const baseUrl = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(baseUrl + '?' + params.slice(0, -1));
  }
}
