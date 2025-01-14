import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxmasterComponent } from './taxmaster.component';

describe('TaxmasterComponent', () => {
  let component: TaxmasterComponent;
  let fixture: ComponentFixture<TaxmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
