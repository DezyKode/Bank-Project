import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsLoginComponent } from './application-details-login.component';

describe('ApplicationDetailsLoginComponent', () => {
  let component: ApplicationDetailsLoginComponent;
  let fixture: ComponentFixture<ApplicationDetailsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationDetailsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationDetailsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
