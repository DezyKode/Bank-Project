import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewLoginComponent } from './over-view-login.component';

describe('OverViewLoginComponent', () => {
  let component: OverViewLoginComponent;
  let fixture: ComponentFixture<OverViewLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverViewLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
