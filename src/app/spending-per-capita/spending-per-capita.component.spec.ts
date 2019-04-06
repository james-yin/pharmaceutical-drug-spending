import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingPerCapitaComponent } from './spending-per-capita.component';

describe('SpendingPerCapitaComponent', () => {
  let component: SpendingPerCapitaComponent;
  let fixture: ComponentFixture<SpendingPerCapitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingPerCapitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingPerCapitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
