import { TestBed } from '@angular/core/testing';

import { StockNewsService } from './stock-news.service';

describe('StockNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockNewsService = TestBed.get(StockNewsService);
    expect(service).toBeTruthy();
  });
});
