import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAgeingReportComponent } from './loan-ageing-report.component';

describe('LoanAgeingReportComponent', () => {
  let component: LoanAgeingReportComponent;
  let fixture: ComponentFixture<LoanAgeingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanAgeingReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAgeingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
