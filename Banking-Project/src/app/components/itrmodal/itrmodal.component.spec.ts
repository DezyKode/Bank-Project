import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItrmodalComponent } from './itrmodal.component';

describe('ItrmodalComponent', () => {
  let component: ItrmodalComponent;
  let fixture: ComponentFixture<ItrmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItrmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItrmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
