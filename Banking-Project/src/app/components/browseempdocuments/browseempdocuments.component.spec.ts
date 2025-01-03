import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseempdocumentsComponent } from './browseempdocuments.component';

describe('BrowseempdocumentsComponent', () => {
  let component: BrowseempdocumentsComponent;
  let fixture: ComponentFixture<BrowseempdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseempdocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseempdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
