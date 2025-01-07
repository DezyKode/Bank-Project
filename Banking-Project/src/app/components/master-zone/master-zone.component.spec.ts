import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterZoneComponent } from './master-zone.component';

describe('MasterZoneComponent', () => {
  let component: MasterZoneComponent;
  let fixture: ComponentFixture<MasterZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
