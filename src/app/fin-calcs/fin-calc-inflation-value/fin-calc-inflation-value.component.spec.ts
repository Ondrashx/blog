import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCalcInflationValueComponent } from './fin-calc-inflation-value.component';

describe('FinCalcInflationValueComponent', () => {
  let component: FinCalcInflationValueComponent;
  let fixture: ComponentFixture<FinCalcInflationValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCalcInflationValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCalcInflationValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
