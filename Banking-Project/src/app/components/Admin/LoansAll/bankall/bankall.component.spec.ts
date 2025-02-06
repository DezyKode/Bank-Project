import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankallComponent } from './bankall.component';

describe('BankallComponent', () => {
  let component: BankallComponent;
  let fixture: ComponentFixture<BankallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
