import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanrequirementComponent } from './loanrequirement.component';

describe('LoanrequirementComponent', () => {
  let component: LoanrequirementComponent;
  let fixture: ComponentFixture<LoanrequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanrequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
