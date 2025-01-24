import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewcaseDocumentComponent } from './createnewcase-document.component';

describe('CreatenewcaseDocumentComponent', () => {
  let component: CreatenewcaseDocumentComponent;
  let fixture: ComponentFixture<CreatenewcaseDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatenewcaseDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewcaseDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
