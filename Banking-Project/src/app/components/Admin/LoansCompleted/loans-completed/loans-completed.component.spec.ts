import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCompletedComponent } from './loans-completed.component';

describe('LoansCompletedComponent', () => {
  let component: LoansCompletedComponent;
  let fixture: ComponentFixture<LoansCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
