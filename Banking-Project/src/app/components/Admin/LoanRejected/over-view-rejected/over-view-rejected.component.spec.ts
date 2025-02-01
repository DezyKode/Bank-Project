import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewRejectedComponent } from './over-view-rejected.component';

describe('OverViewRejectedComponent', () => {
  let component: OverViewRejectedComponent;
  let fixture: ComponentFixture<OverViewRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverViewRejectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverViewRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
