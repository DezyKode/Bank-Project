import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewcaseProvisionalLetterComponent } from './createnewcase-provisional-letter.component';

describe('CreatenewcaseProvisionalLetterComponent', () => {
  let component: CreatenewcaseProvisionalLetterComponent;
  let fixture: ComponentFixture<CreatenewcaseProvisionalLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatenewcaseProvisionalLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewcaseProvisionalLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
