import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortCloseComponent } from './add-short-close.component';

describe('AddShortCloseComponent', () => {
  let component: AddShortCloseComponent;
  let fixture: ComponentFixture<AddShortCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddShortCloseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShortCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
