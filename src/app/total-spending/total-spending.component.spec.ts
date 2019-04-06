import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSpendingComponent } from './total-spending.component';

describe('TotalSpendingComponent', () => {
  let component: TotalSpendingComponent;
  let fixture: ComponentFixture<TotalSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
