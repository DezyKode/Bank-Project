import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersprojectComponent } from './mastersproject.component';

describe('MastersprojectComponent', () => {
  let component: MastersprojectComponent;
  let fixture: ComponentFixture<MastersprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MastersprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastersprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
