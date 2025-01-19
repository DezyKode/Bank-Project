import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCriteriaComponent } from './bank-criteria.component';

describe('BankCriteriaComponent', () => {
  let component: BankCriteriaComponent;
  let fixture: ComponentFixture<BankCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankCriteriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
