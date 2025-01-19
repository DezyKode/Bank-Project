import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersprojectformComponent } from './mastersprojectform.component';

describe('MastersprojectformComponent', () => {
  let component: MastersprojectformComponent;
  let fixture: ComponentFixture<MastersprojectformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MastersprojectformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastersprojectformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
