import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationapiComponent } from './verificationapi.component';

describe('VerificationapiComponent', () => {
  let component: VerificationapiComponent;
  let fixture: ComponentFixture<VerificationapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
