import { Component, OnInit } from '@angular/core';
import { CompoundInfo, FinCalcService } from '../fin-calc.service';

@Component({
  selector: 'app-fin-calc-invest',
  templateUrl: './fin-calc-invest.component.html',
  styleUrls: ['./fin-calc-invest.component.scss']
})
export class FinCalcInvestComponent implements OnInit {

  public chartData;

  public yearValue = 20;
  public investValue = 100000;
  public investMonthlyValue = 10000
  public interestValue = 4;
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
  public compoundRealInfo: CompoundInfo;

  onValueChange() {
    console.log('change');
    // workaround for blur vs chart redraw weird scroll
    setTimeout(() => this.recompute(), 50);
  }

  private recompute() {
    const years = this.finCalcService.generateArrayOfNumbers(this.yearValue + 1);

    this.compoundBasicInfo = this.finCalcService.generateCompoundInterest(this.investValue, this.investMonthlyValue, this.interestValue, years);
    this.compoundRealInfo = this.finCalcService.generateCompoundInterest(this.investValue, this.investMonthlyValue, this.interestValue - this.inflationValue, years);

    this.chartData = {
      labels: years.map(y => this.finCalcService.formatYearLabel(y)),
      datasets: [
        {
          label: 'Zhodnocení',
          data: Array.from(this.compoundBasicInfo.values.values()).map(v => v.toFixed(2)),
          fill: true,
          borderColor: '#42A5F5'
        },
        {
          label: 'Reálné zhodnocení', 
          data: Array.from(this.compoundRealInfo.values.values()).map(v => v.toFixed(2)),
          fill: true,
          borderColor: '#FFA726'
        }
      ]
    }

  }

  constructor(private finCalcService: FinCalcService) { }



  ngOnInit(): void {
    this.recompute();
  }

}


