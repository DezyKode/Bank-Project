import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCompletedComponent } from './application-completed.component';

describe('ApplicationCompletedComponent', () => {
  let component: ApplicationCompletedComponent;
  let fixture: ComponentFixture<ApplicationCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
