import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandisburmentComponent } from './loandisburment.component';

describe('LoandisburmentComponent', () => {
  let component: LoandisburmentComponent;
  let fixture: ComponentFixture<LoandisburmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoandisburmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoandisburmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
