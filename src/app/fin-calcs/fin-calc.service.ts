import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinCalcService {

  constructor() { }

  public generateArrayOfNumbers(numbers: number): number[] {
    return [...Array(numbers).keys()];//.slice(1)
  }

  public calculateInvestInfo (startInvestment: number, monthlyInvestment: number, 
    interest: number, years: number[], interestRaiseSalary: number): InvestInfo {
    const result: InvestInfo = { // start year
      lastValue: startInvestment,
      lastInterest: 0,
      lastMonthlyInvestment: monthlyInvestment,
      values: new Map<number, InvestInfoItem>([
        [years[0], {value: startInvestment, monthlyInvestment, valueFromInterest: 0 }]
      ])
    };

    years.slice(1).reduce((prev, next) => {

      const interestFromYear = (interest / 100 * prev.lastValue);

      const newValueFromInterest = prev.lastInterest + interestFromYear;
      const newMonthlyInvestment = prev.lastMonthlyInvestment + (interestRaiseSalary / 100 * prev.lastMonthlyInvestment);
      const newValue = prev.lastValue + interestFromYear + (prev.lastMonthlyInvestment * 12);

      prev.lastValue = newValue;
      prev.lastInterest = newValueFromInterest;
      prev.lastMonthlyInvestment = newMonthlyInvestment;

      prev.values.set(next, {
        value: newValue,
        monthlyInvestment: newMonthlyInvestment,
        valueFromInterest:  newValueFromInterest,
      });

      return prev;
    }, result);

    return result;
  }

  public generateRentaCalcInfo(startNestEgg: number, monthlyNeededValue: number, interestValue: number, inflationValue: number): RentaCalcInfo {
    const result: RentaCalcInfo = {
      yearsCount: 0,
      values: new Map<number, RentaCalcPerYearItem>([[0, {
        remainingMoney: startNestEgg,
        gainFromInterest: null,
        monthlyNeededValue
      }]]),
      isInfinite: false
    }

    let remainingMoney = startNestEgg;
    let months = 1;
    let monthlyGainFromInterest = remainingMoney * interestValue / 100 / 12;

    let continueCalc = true;

    while (remainingMoney > monthlyNeededValue && continueCalc) {      

      if (months > 12 && months % 12 === 1) {
        result.yearsCount++;        
        
        monthlyNeededValue += monthlyNeededValue * inflationValue / 100; // each month prices goes up
        result.values.set(result.yearsCount, { remainingMoney, monthlyNeededValue, gainFromInterest: (monthlyGainFromInterest * 12) });
        //console.log('YEAR 1.1.' + result.yearsCount, remainingMoney, monthlyNeededValue);

        monthlyGainFromInterest = remainingMoney * interestValue / 100 / 12;
      }

      // console.log('   1.' + (((months) % 12)) + ' rok ' + result.yearsCount + ', zbyva ' + remainingMoney + 
      // ' a v tomto mesici budu potrebovat vybrat ' + monthlyNeededValue + ', ale pribude ' + monthlyGainFromInterest);

      months++;

      if (result.yearsCount === 100) {
        result.isInfinite = remainingMoney > startNestEgg; // does money go up?
        continueCalc = false;
      }

      remainingMoney += monthlyGainFromInterest; // but our investment is alive and working for us
      remainingMoney -= monthlyNeededValue;   

    }

    return result;
  }

  public formatYearLabel(y: number): string {
    return (new Date().getFullYear() + y) + ` (${y})`;
  }
}


export interface InvestInfo {
  lastMonthlyInvestment: any;
  lastValue: number,
  lastInterest: number,
  values: Map<number, InvestInfoItem>;
}

export interface InvestInfoItem {
  value: number;
  monthlyInvestment: number;
  valueFromInterest: number;
}
export interface RentaCalcInfo {
  yearsCount: number; // -1 means never ending
  values: Map<number, RentaCalcPerYearItem>; // month number/ remaining money
  isInfinite: boolean;
}

export interface RentaCalcPerYearItem {
  remainingMoney: number;
  monthlyNeededValue: number;
  gainFromInterest: number;

}