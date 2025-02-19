import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksTableComponent } from './banks-table.component';

describe('BanksTableComponent', () => {
  let component: BanksTableComponent;
  let fixture: ComponentFixture<BanksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanksTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
