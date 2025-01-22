import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinmodalComponent } from './cinmodal.component';

describe('CinmodalComponent', () => {
  let component: CinmodalComponent;
  let fixture: ComponentFixture<CinmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
