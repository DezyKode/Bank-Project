import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksLoginComponent } from './banks-login.component';

describe('BanksLoginComponent', () => {
  let component: BanksLoginComponent;
  let fixture: ComponentFixture<BanksLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanksLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
