import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRemarkComponent } from './submit-remark.component';

describe('SubmitRemarkComponent', () => {
  let component: SubmitRemarkComponent;
  let fixture: ComponentFixture<SubmitRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitRemarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
