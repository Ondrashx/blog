import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCalcsPageComponent } from './fin-calcs-page.component';

describe('FinCalcsPageComponent', () => {
  let component: FinCalcsPageComponent;
  let fixture: ComponentFixture<FinCalcsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCalcsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCalcsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
