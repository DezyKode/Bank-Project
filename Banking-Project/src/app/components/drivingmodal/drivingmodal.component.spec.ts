import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingmodalComponent } from './drivingmodal.component';

describe('DrivingmodalComponent', () => {
  let component: DrivingmodalComponent;
  let fixture: ComponentFixture<DrivingmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrivingmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
