import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAllComponent } from './application-all.component';

describe('ApplicationAllComponent', () => {
  let component: ApplicationAllComponent;
  let fixture: ComponentFixture<ApplicationAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
