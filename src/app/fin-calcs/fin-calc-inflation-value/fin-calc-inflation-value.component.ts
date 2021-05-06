import { Component, OnInit } from '@angular/core';
import { CompoundInfo, FinCalcService } from '../fin-calc.service';

@Component({
  selector: 'app-fin-calc-inflation-value',
  templateUrl: './fin-calc-inflation-value.component.html',
  styleUrls: ['./fin-calc-inflation-value.component.scss']
})
export class FinCalcInflationValueComponent implements OnInit {

  public chartData;

  public yearValue = 20;
  public moneyValue = 20000;
  public inflationValue = 2;

  
  public basicOptions = {
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
        ticks: {
          fontColor: '#495057'
        }
      }]
    }
  };

  public compoundBasicInfo: CompoundInfo;

  constructor(public finCalcService: FinCalcService) { }

  ngOnInit(): void {
    this.recompute();
  }

  onValueChange() {
    console.log('change');
    // workaround for blur vs chart redraw weird scroll
    setTimeout(() => this.recompute(), 50);
  }

  private recompute() {
    const years = this.finCalcService.generateArrayOfNumbers(this.yearValue + 1);

    this.compoundBasicInfo = this.finCalcService.generateCompoundInterest(this.moneyValue, 0, this.inflationValue, years);

    this.chartData = {
      labels: years.map(y => this.finCalcService.formatYearLabel(y)),
      datasets: [
        {
          label: 'Částka po inflaci',
          data: Array.from(this.compoundBasicInfo.values.values()).map(v => v.toFixed(2)),
          fill: true,
          borderColor: '#42A5F5'
        },
      ]
    }

  }

}
