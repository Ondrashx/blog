import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCalcRentaComponent } from './fin-calc-renta.component';

describe('FinCalcRentaComponent', () => {
  let component: FinCalcRentaComponent;
  let fixture: ComponentFixture<FinCalcRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCalcRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCalcRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
