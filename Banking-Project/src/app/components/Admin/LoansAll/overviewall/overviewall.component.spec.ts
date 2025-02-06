import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewallComponent } from './overviewall.component';

describe('OverviewallComponent', () => {
  let component: OverviewallComponent;
  let fixture: ComponentFixture<OverviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
