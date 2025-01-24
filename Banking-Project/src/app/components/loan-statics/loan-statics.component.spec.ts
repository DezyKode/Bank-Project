import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStaticsComponent } from './loan-statics.component';

describe('LoanStaticsComponent', () => {
  let component: LoanStaticsComponent;
  let fixture: ComponentFixture<LoanStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanStaticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
