import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinCalcService {

  constructor() { }

  public generateArrayOfNumbers(numbers: number): number[] {
    return [...Array(numbers).keys()];//.slice(1)
  }

  public generateCompoundInterest(startInvestment: number, monthlyInvestment: number, interest: number, years: number[]): CompoundInfo {
    const result: CompoundInfo = {
      lastValue: startInvestment,
      lastInterest: 0,
      values: new Map<number, number>([
        [years[0], startInvestment]
      ])
    };
    years.slice(1).reduce((prev, next) => {
      const prevValue = prev.lastValue;
      const interestFromYear = (interest / 100 * prevValue);
      const newValue = prevValue + interestFromYear + (monthlyInvestment * 12);

      prev.lastValue = newValue;
      prev.lastInterest += interestFromYear;
      prev.values.set(next, newValue);
      return prev;
    }, result);

    return result;
  }

  public generateRentaCalcInfo(startNestEgg: number, monthlyNeededValue: number, interestValue: number, inflationValue: number): RentaCalcInfo {
    const result: RentaCalcInfo = {
      yearsCount: 0,
      values: new Map<number, RentaCalcPerYearItem>([[0, {
        remainingMoney: startNestEgg - monthlyNeededValue,
        gainFromInterest: 0,
        monthlyNeededValue
      }]]),
      isInfinite: false
    }

    let remainingMoney = startNestEgg;
    let months = 0;
    let gainFromInterest = remainingMoney * interestValue / 100 / 12;
    let monthlyNeededValueRaise = monthlyNeededValue * inflationValue / 100 / 12;

    let continueCalc = true;

    while (remainingMoney > monthlyNeededValue && continueCalc) {
      monthlyNeededValue += monthlyNeededValueRaise; // each month prices goes up
      remainingMoney += gainFromInterest; // but our investment is alive and working for us
      remainingMoney -= monthlyNeededValue;

      console.log('  month ' + result.yearsCount + '-' + (months % 12), monthlyNeededValue, remainingMoney);
      months++;
      if (months % 12 === 0) {
        result.yearsCount++;
        result.values.set(result.yearsCount, { remainingMoney, monthlyNeededValue, gainFromInterest });
        gainFromInterest = remainingMoney * interestValue / 100 / 12;
        monthlyNeededValueRaise = monthlyNeededValue * inflationValue / 100 / 12;
        console.log('year ' + result.yearsCount, monthlyNeededValue, remainingMoney);
      }

      if (result.yearsCount === 100) {
        console.log('INFINITE!!')
        result.isInfinite = remainingMoney > startNestEgg; // does money go up?
        continueCalc = false;
      }


    }

    return result;
  }

  public formatYearLabel(y: number): string {
    return (new Date().getFullYear() + y) + ` (${y})`;
  }
}


export interface CompoundInfo {
  lastValue: number,
  lastInterest: number,
  values: Map<number, number>;
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