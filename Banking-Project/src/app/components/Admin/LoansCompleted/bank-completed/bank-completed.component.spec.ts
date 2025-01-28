import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCompletedComponent } from './bank-completed.component';

describe('BankCompletedComponent', () => {
  let component: BankCompletedComponent;
  let fixture: ComponentFixture<BankCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
