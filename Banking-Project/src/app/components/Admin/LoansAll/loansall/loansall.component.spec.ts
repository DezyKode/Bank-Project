import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansallComponent } from './loansall.component';

describe('LoansallComponent', () => {
  let component: LoansallComponent;
  let fixture: ComponentFixture<LoansallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
