import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsAllComponent } from './loan-details-all.component';

describe('LoanDetailsAllComponent', () => {
  let component: LoanDetailsAllComponent;
  let fixture: ComponentFixture<LoanDetailsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDetailsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
