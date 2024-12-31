import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationDetailsComponent } from './aplication-details.component';

describe('AplicationDetailsComponent', () => {
  let component: AplicationDetailsComponent;
  let fixture: ComponentFixture<AplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
