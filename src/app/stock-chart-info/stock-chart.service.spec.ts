import { TestBed } from '@angular/core/testing';

import { StockChartService } from './stock-chart.service';

describe('StockChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockChartService = TestBed.get(StockChartService);
    expect(service).toBeTruthy();
  });
});
