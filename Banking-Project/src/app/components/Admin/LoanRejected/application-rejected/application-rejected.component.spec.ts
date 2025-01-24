import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRejectedComponent } from './application-rejected.component';

describe('ApplicationRejectedComponent', () => {
  let component: ApplicationRejectedComponent;
  let fixture: ComponentFixture<ApplicationRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
