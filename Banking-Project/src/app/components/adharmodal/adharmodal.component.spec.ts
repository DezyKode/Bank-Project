import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharmodalComponent } from './adharmodal.component';

describe('AdharmodalComponent', () => {
  let component: AdharmodalComponent;
  let fixture: ComponentFixture<AdharmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdharmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdharmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
