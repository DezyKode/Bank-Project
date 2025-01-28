import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsLoginComponent } from './loan-details-login.component';

describe('LoanDetailsLoginComponent', () => {
  let component: LoanDetailsLoginComponent;
  let fixture: ComponentFixture<LoanDetailsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDetailsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDetailsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
