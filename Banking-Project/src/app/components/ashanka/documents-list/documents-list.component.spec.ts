import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsListComponentss } from './documents-list.component';

describe('DocumentsListComponent', () => {
  let component: DocumentsListComponentss;
  let fixture: ComponentFixture<DocumentsListComponentss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsListComponentss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsListComponentss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
