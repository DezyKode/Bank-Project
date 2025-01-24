import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRejectedComponent } from './bank-rejected.component';

describe('BankRejectedComponent', () => {
  let component: BankRejectedComponent;
  let fixture: ComponentFixture<BankRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
