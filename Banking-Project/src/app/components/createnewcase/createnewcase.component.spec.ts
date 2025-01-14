import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewcaseComponent } from './createnewcase.component';

describe('CreatenewcaseComponent', () => {
  let component: CreatenewcaseComponent;
  let fixture: ComponentFixture<CreatenewcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatenewcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
