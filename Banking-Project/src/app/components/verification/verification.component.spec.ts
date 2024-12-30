import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VreportComponent } from './verification.component';

describe('VreportComponent', () => {
  let component: VreportComponent;
  let fixture: ComponentFixture<VreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
