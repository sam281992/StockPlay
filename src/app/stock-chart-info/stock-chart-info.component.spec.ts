import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockChartInfoComponent } from './stock-chart-info.component';

describe('StockChartInfoComponent', () => {
  let component: StockChartInfoComponent;
  let fixture: ComponentFixture<StockChartInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockChartInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockChartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
