import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConnectorComponent } from './create-connector.component';

describe('CreateConnectorComponent', () => {
  let component: CreateConnectorComponent;
  let fixture: ComponentFixture<CreateConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateConnectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
