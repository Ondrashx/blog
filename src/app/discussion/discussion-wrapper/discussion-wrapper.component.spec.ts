import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionWrapperComponent } from './discussion-wrapper.component';

describe('DiscussionWrapperComponent', () => {
  let component: DiscussionWrapperComponent;
  let fixture: ComponentFixture<DiscussionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
