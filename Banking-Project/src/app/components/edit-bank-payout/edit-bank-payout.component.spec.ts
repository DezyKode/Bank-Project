import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankPayoutComponent } from './edit-bank-payout.component';

describe('EditBankPayoutComponent', () => {
  let component: EditBankPayoutComponent;
  let fixture: ComponentFixture<EditBankPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBankPayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
