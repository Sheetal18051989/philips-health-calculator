import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculatorDashboardComponent } from './main-calculator-dashboard.component';

describe('MainCalculatorDashboardComponent', () => {
  let component: MainCalculatorDashboardComponent;
  let fixture: ComponentFixture<MainCalculatorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCalculatorDashboardComponent]
    });
    fixture = TestBed.createComponent(MainCalculatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
