import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutStructureComponent } from './payout-structure.component';

describe('PayoutStructureComponent', () => {
  let component: PayoutStructureComponent;
  let fixture: ComponentFixture<PayoutStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayoutStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
