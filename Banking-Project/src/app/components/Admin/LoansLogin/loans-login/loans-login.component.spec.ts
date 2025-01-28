import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansLoginComponent } from './loans-login.component';

describe('LoansLoginComponent', () => {
  let component: LoansLoginComponent;
  let fixture: ComponentFixture<LoansLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoansLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
