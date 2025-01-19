import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancardmodalComponent } from './pancardmodal.component';

describe('PancardmodalComponent', () => {
  let component: PancardmodalComponent;
  let fixture: ComponentFixture<PancardmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PancardmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancardmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
