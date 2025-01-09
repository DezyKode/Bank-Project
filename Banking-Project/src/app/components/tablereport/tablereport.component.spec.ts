import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereportComponent } from './tablereport.component';

describe('TablereportComponent', () => {
  let component: TablereportComponent;
  let fixture: ComponentFixture<TablereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
