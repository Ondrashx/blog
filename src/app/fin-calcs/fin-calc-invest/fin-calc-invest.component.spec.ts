import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCalcInvestComponent } from './fin-calc-invest.component';

describe('FinCalcInvestComponent', () => {
  let component: FinCalcInvestComponent;
  let fixture: ComponentFixture<FinCalcInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCalcInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCalcInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
