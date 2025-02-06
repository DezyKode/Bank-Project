import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCompletedComponent } from './overview-completed.component';

describe('OverviewCompletedComponent', () => {
  let component: OverviewCompletedComponent;
  let fixture: ComponentFixture<OverviewCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewCompletedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
