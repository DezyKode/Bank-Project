import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueReconReportComponent } from './revenue-recon-report.component';

describe('RevenueReconReportComponent', () => {
  let component: RevenueReconReportComponent;
  let fixture: ComponentFixture<RevenueReconReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueReconReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueReconReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
