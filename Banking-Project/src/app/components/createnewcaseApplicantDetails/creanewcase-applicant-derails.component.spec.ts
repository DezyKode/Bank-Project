import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreanewcaseApplicantDerailsComponent } from './creanewcase-applicant-derails.component';

describe('CreanewcaseApplicantDerailsComponent', () => {
  let component: CreanewcaseApplicantDerailsComponent;
  let fixture: ComponentFixture<CreanewcaseApplicantDerailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreanewcaseApplicantDerailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreanewcaseApplicantDerailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
