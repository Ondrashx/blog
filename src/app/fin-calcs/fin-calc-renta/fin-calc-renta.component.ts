import { Component, Input, OnInit } from '@angular/core';
import { RentaCalcInfo, FinCalcService } from '../fin-calc.service';

@Component({
  selector: 'app-fin-calc-renta',
  templateUrl: './fin-calc-renta.component.html',
  styleUrls: ['./fin-calc-renta.component.scss']
})
export class FinCalcRentaComponent implements OnInit {
  

  @Input() public showCharts: false;
  @Input() public showTables: false;



  private _startNestEggInput: number;
  public get startNestEggInput() : number {
    return this._startNestEggInput;
  }
  @Input() public set startNestEggInput(v : number) {
    this._startNestEggInput = Math.round(v);
    if (this.isConnected) {
      this.startNestEgg = this._startNestEggInput;
    }
    this.recompute();
  }

  
  private _monthlyNeededRentInput: number;
  public get monthlyNeededRentInput() : number {
    return this._monthlyNeededRentInput;
  }
  @Input() public set monthlyNeededRentInput(v : number) {
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
  public inflationValue = 2;
  public interestValue = 4;
  public calcInfo: RentaCalcInfo;



  basicOptions = {
    tooltips: {
      mode: 'x'
    },
    legend: {
      labels: {
        fontColor: '#495057'
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#495057'
        }
      }],
      yAxes: [{
        id: 'A',
        ticks: {
          fontColor: '#495057'
        },
        position: 'left',
        display: 'auto',

        scaleLabel: {
          display: true,
          labelString: 'Zbývající úspory v Kč'
        }

      }, {
        id: 'B',
        ticks: {
          fontColor: '#495057'
        },
        position: 'right',
        display: 'auto',
        scaleLabel: {
          display: true,
          labelString: 'Získ z úroku / Měsíční náklady v Kč'
        }
      }]
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

    this.chartData = {
      labels: years.map(y => this.finCalcService.formatYearLabel(y)),
      datasets: [
        {
          label: 'Zbývající úspory',
          data: Array.from(this.calcInfo.values.values()).map(v => v.remainingMoney.toFixed(2)),
          yAxisID: 'A',
          fill: true,
          borderColor: '#42A5F5'
        },
        {
          label: 'Měsiční náklady po inflaci',
          data: Array.from(this.calcInfo.values.values()).map(v => v.monthlyNeededValue.toFixed(2)),
          fill: true,
          yAxisID: 'B',
          borderColor: '#FFA726'
        },
        {
          label: 'Zisk z úroků z úspor',
          data: Array.from(this.calcInfo.values.values()).map(v => v.gainFromInterest == null ? null : (v.gainFromInterest/12).toFixed(2)),
          fill: true,
          yAxisID: 'B',
          borderColor: 'green'
        }
      ]
    }
  }

}


