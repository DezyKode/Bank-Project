import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentleadComponent } from './lead.component';

describe('ComponentleadComponent', () => {
  let component: ComponentleadComponent;
  let fixture: ComponentFixture<ComponentleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentleadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
