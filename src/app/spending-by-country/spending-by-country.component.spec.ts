import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingByCountryComponent } from './spending-by-country.component';

describe('SpendingByCountryComponent', () => {
  let component: SpendingByCountryComponent;
  let fixture: ComponentFixture<SpendingByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
