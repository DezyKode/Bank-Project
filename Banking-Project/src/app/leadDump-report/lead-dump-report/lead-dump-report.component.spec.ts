import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDumpReportComponent } from './lead-dump-report.component';

describe('LeadDumpReportComponent', () => {
  let component: LeadDumpReportComponent;
  let fixture: ComponentFixture<LeadDumpReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadDumpReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadDumpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
