import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationReportsComponent } from './verification-reports.component';

describe('VerificationReportsComponent', () => {
  let component: VerificationReportsComponent;
  let fixture: ComponentFixture<VerificationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
