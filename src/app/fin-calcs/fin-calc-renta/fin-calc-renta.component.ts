import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { RentaCalcInfo, FinCalcService } from '../fin-calc.service';
//import { ChartDataSet, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-fin-calc-renta',
  templateUrl: './fin-calc-renta.component.html',
  styleUrls: ['./fin-calc-renta.component.scss']
})
export class FinCalcRentaComponent implements OnInit {

  @ViewChild(BaseChartDirective) baseChartDirective: BaseChartDirective;


  @Input() public showCharts: false;
  @Input() public showTables: false;



  private _startNestEggInput: number;

  public get startNestEggInput(): number {
    return this._startNestEggInput;
  }
  @Input() public set startNestEggInput(v: number) {
    this._startNestEggInput = Math.round(v);
    if (this.isConnected) {
      this.startNestEgg = this._startNestEggInput;
    }
    this.recompute();
  }


  private _monthlyNeededRentInput: number;
  public get monthlyNeededRentInput(): number {
    return this._monthlyNeededRentInput;
  }
  @Input() public set monthlyNeededRentInput(v: number) {
    this._monthlyNeededRentInput = Math.round(v);
    if (this.isConnected) {
      this.monthlyNeededRent = this._monthlyNeededRentInput;
    }
    this.recompute();
  }

  public isConnected = false;
  public startNestEgg = 10000000;
  public monthlyNeededRent = 20000;
  public chartData: any;
  public labels: string[];

  public inflationValue = 2;
  public interestValue = 4;
  public calcInfo: RentaCalcInfo;



  public chartOptions: ChartOptions = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        type: 'linear',
        display: 'auto',
        position: 'left',
        title: {
          text: 'Zbývající úspory v Kč',
          display: true
        }

      },
      y1: {
        type: 'linear',
        display: 'auto',
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },

        title: {
          text: 'Získ z úroku / Měsíční náklady v Kč',
          display: true
        }
      },
    }
  };

  constructor(public finCalcService: FinCalcService) { }

  ngOnInit(): void {
    this.recompute();
  }

  public onValueChange() {
    // workaround for blur vs chart redraw weird scroll
    setTimeout(() => this.recompute(), 50);

  }

  public getCalculatedRentaInfo() {
    return Array.from(this.calcInfo.values.entries());
  }


  public isConnectedChanged() {
    if (this.isConnected) {
      this.startNestEgg = this._startNestEggInput;
      this.monthlyNeededRent = this._monthlyNeededRentInput;
      this.recompute();
    }
  }

  private recompute(): void {

    this.calcInfo = this.finCalcService.generateRentaCalcInfo(this.startNestEgg, this.monthlyNeededRent, this.interestValue, this.inflationValue);
    const years = this.finCalcService.generateArrayOfNumbers(this.calcInfo.yearsCount + 1);

    if (this.baseChartDirective) {
      (this.baseChartDirective.chart.config as any)._config.data.datasets = [];
      (this.baseChartDirective.chart.config as any)._config.data.labels = [];
    }

    //this.chartData = {
    this.labels = years.map(y => this.finCalcService.formatYearLabel(y));
    this.chartData = [
      {
        label: 'Zbývající úspory',
        data: Array.from(this.calcInfo.values.values()).map(v => v.remainingMoney.toFixed(2)),
        yAxisID: 'y',
        fill: true,
        borderColor: '#42A5F5'
      },
      {
        label: 'Měsiční náklady po inflaci',
        data: Array.from(this.calcInfo.values.values()).map(v => v.monthlyNeededValue.toFixed(2)),
        fill: true,
        yAxisID: 'y1',
        borderColor: '#FFA726'
      },
      {
        label: 'Zisk z úroků z úspor',
        data: Array.from(this.calcInfo.values.values()).map(v => v.gainFromInterest == null ? null : (v.gainFromInterest / 12).toFixed(2)),
        fill: true,
        yAxisID: 'y1',
        borderColor: 'green'
      }
    ];
    //console.log('this.labels', this.labels);

    //}
  }

}


