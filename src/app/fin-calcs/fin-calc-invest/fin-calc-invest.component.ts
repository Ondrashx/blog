import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { InvestInfo, FinCalcService } from '../fin-calc.service';

@Component({
  selector: 'app-fin-calc-invest',
  templateUrl: './fin-calc-invest.component.html',
  styleUrls: ['./fin-calc-invest.component.scss']
})
export class FinCalcInvestComponent implements OnInit {

  @ViewChild(BaseChartDirective) baseChartDirective: BaseChartDirective;

  @Input() public showCharts: false;
  @Input() public showTables: false;

  @Output() public nestEggChanged = new EventEmitter<number>();
  @Output() public inflationValueChanged = new EventEmitter<number>()
  @Output() public yearValueChanged = new EventEmitter<number>()

  public chartData;

  public yearValue = 20;
  public investValue = 100000;
  public investMonthlyValue = 10000
  public interestValue = 4;
  public inflationValue = 2;
  public salaryInterestYearlyRaise = 1;


  public chartOptions: ChartOptions = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',     
    },
    };

  public basicInvestInfo: InvestInfo;
  public realInvestInfo: InvestInfo;


  onValueChange(valueType: 'inflation' | 'year' | 'other' = 'other') {
    // console.log('change');
    if (valueType === 'inflation') this.inflationValueChanged.emit(this.inflationValue);
    if (valueType === 'year') this.yearValueChanged.emit(this.yearValue);

    this.nestEggChanged.emit(this.basicInvestInfo.lastValue);
    // workaround for blur vs chart redraw weird scroll
    setTimeout(() => this.recompute(), 50);
  }

  private recompute() {

    if (this.baseChartDirective) {
      (this.baseChartDirective.chart.config as any)._config.data.datasets = [];
      (this.baseChartDirective.chart.config as any)._config.data.labels = [];
    }

    const years = this.finCalcService.generateArrayOfNumbers(this.yearValue + 1);

    this.basicInvestInfo = this.finCalcService.calculateInvestInfo(this.investValue, this.investMonthlyValue,
      this.interestValue, years, this.salaryInterestYearlyRaise);
    this.realInvestInfo = this.finCalcService.calculateInvestInfo(this.investValue, this.investMonthlyValue,
      this.interestValue - this.inflationValue, years, this.salaryInterestYearlyRaise);

    this.chartData  = {
      labels: years.map(y => this.finCalcService.formatYearLabel(y)),
      data: [
        {
          label: 'Zhodnocení investice',
          data: Array.from(this.basicInvestInfo.values.values()).map(v => v.value.toFixed(2)),
          fill: true,
          borderColor: '#42A5F5'
        },
        {
          label: 'Reálné zhodnocení investice',
          data: Array.from(this.realInvestInfo.values.values()).map(v => v.value.toFixed(2)),
          fill: true,
          borderColor: '#FFA726'
        }
      ]
    }

    this.nestEggChanged.emit(this.basicInvestInfo.lastValue);

  }

  constructor(public finCalcService: FinCalcService) { }



  ngOnInit(): void {
    this.recompute();
  }

  public getCalculatedInvestInfo() {
    return Array.from(this.basicInvestInfo.values.entries());
  }

}


