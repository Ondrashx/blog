import { ViewChild } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { InvestInfo, FinCalcService } from '../fin-calc.service';
import { AbstractFinCalc } from '../fin-calcs-page/fin-calcs-ancestor';

@Component({
  selector: 'app-fin-calc-inflation-value',
  templateUrl: './fin-calc-inflation-value.component.html',
  styleUrls: ['./fin-calc-inflation-value.component.scss']
})
export class FinCalcInflationValueComponent extends AbstractFinCalc implements OnInit {

  @ViewChild(BaseChartDirective) baseChartDirective: BaseChartDirective;

  private _yearValueInput: number;
  public get yearValueInput() : number {
    return this._yearValueInput;
  }
  @Input() public set yearValueInput(v : number) {
    this._yearValueInput = Math.round(v);
    if (this.isConnected) {
      this.yearValue = this._yearValueInput;
    }
    this.recompute();
  }

  
  private _inflationValueInput: number;
  public get inflationValueInput() : number {
    return this._inflationValueInput;
  }
  @Input() public set inflationValueInput(v : number) {
    this._inflationValueInput = Math.round(v);
    if (this.isConnected) {
      this.inflationValue = this._inflationValueInput;
    }
    this.recompute();
  }
  
  @Input() public isConnected = false;

  @Input() public showCharts: false;
  @Input() public showTables: false;
  
  @Output() neededRentChanged = new EventEmitter<number>();

  public chartData;

  @Input() public yearValue = 20;
  @Input() public moneyValue = 20000;
  @Input() public inflationValue = 2;
  
  public chartOptions: ChartOptions = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',     
    },
  };

  public compoundBasicInfo: InvestInfo;
  public rows: {year: number, value: number, valueFromInterest: number}[];
  

  constructor(finCalcService: FinCalcService) {
    super(finCalcService)
   }

  ngOnInit(): void {
    this.prefix = 'inf_';
    this.enabledSetProps = ['yearValue', 'moneyValue', 'inflationValue'];
    this.setParamsFromUrl();
    this.recompute();
  }

  onValueChange() {
    console.log('change');
    // workaround for blur vs chart redraw weird scroll
    setTimeout(() => this.recompute(), 50);
  }

  public isConnectedChanged() {
    if (this.isConnected) {
      this.inflationValue = this._inflationValueInput;
      this.yearValue = this._yearValueInput;
       this.recompute();
    }
  }

  private recompute() {

    if (this.baseChartDirective) {
      (this.baseChartDirective.chart.config as any)._config.data.datasets = [];
      (this.baseChartDirective.chart.config as any)._config.data.labels = [];
    }

    const years = this.finCalcService.generateArrayOfNumbers(this.yearValue + 1);

    this.compoundBasicInfo = this.finCalcService.calculateInvestInfo(this.moneyValue, 0, this.inflationValue, years, 0);

    this.rows = Array.from(this.compoundBasicInfo.values.entries()).map(e => ({
      value: e[1].value,
      valueFromInterest: e[1].valueFromInterest,
      year: e[0]
    }));

    this.chartData = {
      labels: years.map(y => this.finCalcService.formatYearLabel(y)),
      data: [
        {
          label: 'Částka po inflaci',
          data: this.rows.map(v => v.value.toFixed(2)),
          fill: true,
          borderColor: '#42A5F5'
        },
      ]
    }

      this.neededRentChanged.emit(this.compoundBasicInfo.lastValue);

  }

}
