import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRacComponent } from './new-rac.component';

describe('NewRacComponent', () => {
  let component: NewRacComponent;
  let fixture: ComponentFixture<NewRacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
