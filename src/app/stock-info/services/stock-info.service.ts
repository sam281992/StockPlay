import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockInfoService {

  private GET_INITIAL_QUOTES = 'https://api.iextrading.com/1.0/stock/market/batch?symbols=';
  private GET_LATER_QUOTES = '&types=quote';

  private GET_INITIAL_EARNING = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_EARNING = '/earnings'; 
  
  private GET_INITIAL_FINANCIALS = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_FINANCIALS = '/financials'; 

  private GET_INITIAL_FINANCIALS_ANNUAL = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_FINANCIALS_ANNUAL = '/financials?period=annual'; 

  private GET_INITIAL_KEY_STATS = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_KEY_STATS = '/stats';

  private GET_INITIAL_COMPANY = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_COMPANY = '/company';

  private GET_INITIAL_STOCK_OPEN_CLOSE_PRICE = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER__STOCK_OPEN_CLOSE_PRICE = '/ohlc';

  private GET_INITIAL_CURRENT_PRICE = 'https://api.iextrading.com/1.0/stock/';
  private GET_LATER_CURRENT_PRICE = '/price';

  private GET_MOST_ACTIVE_STOCKS = 'https://api.iextrading.com/1.0/stock/market/list/mostactive';
  private GET_GAINERS_STOCKS = 'https://api.iextrading.com/1.0/stock/market/list/gainers';
  private GET_LOSSERS_STOCKS = 'https://api.iextrading.com/1.0/stock/market/list/losers'; 
  private GET_MOST_VOLUME_STOCKS = 'https://api.iextrading.com/1.0/stock/market/list/iexvolume';
  private GET_INFOCUS_STOCKS = 'https://api.iextrading.com/1.0/stock/market/list/infocus';
  
  constructor(private http: Http) { 

  }

  getStockQuotes(stock: String) {
    return this.http.get(this.GET_INITIAL_QUOTES + stock + this.GET_LATER_QUOTES)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getStockEarnings(stock: String) {
    return this.http.get(this.GET_INITIAL_EARNING + stock + this.GET_LATER_EARNING)
          .pipe(map(res => {
            return res.json();
          }))
  }


  getStockFinancials(stock: String) {
    return this.http.get(this.GET_INITIAL_FINANCIALS + stock + this.GET_LATER_FINANCIALS)
          .pipe(map(res => {
            return res.json();
          }))
  }
  
  getStockFinancialsAnnual(stock: String) {
    return this.http.get(this.GET_INITIAL_FINANCIALS_ANNUAL + stock + this.GET_LATER_FINANCIALS_ANNUAL)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getStockOHLC(stock: String) {
    return this.http.get(this.GET_INITIAL_STOCK_OPEN_CLOSE_PRICE + stock + this.GET_LATER__STOCK_OPEN_CLOSE_PRICE)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getStockprice(stock: String) {
    return this.http.get(this.GET_INITIAL_CURRENT_PRICE + stock + this.GET_LATER_CURRENT_PRICE)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getStockKeyStats(stock: String) {
    return this.http.get(this.GET_INITIAL_KEY_STATS + stock + this.GET_LATER_KEY_STATS)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getStockCompanyInfo(stock: String) {
    return this.http.get(this.GET_INITIAL_COMPANY + stock + this.GET_LATER_COMPANY)
          .pipe(map(res => {
            return res.json();
          }))
  }

  getMarketWinners(stock: String) {
    let active_stock = this.http.get(this.GET_MOST_ACTIVE_STOCKS)
          .pipe(map(res => {
            return res.json();
          }))
    let gainer_stock = this.http.get(this.GET_GAINERS_STOCKS)
          .pipe(map(res => {
            return res.json();
          }))    
    let losser_stock = this.http.get(this.GET_LOSSERS_STOCKS)
          .pipe(map(res => {
            return res.json();
          }))
    let volume_stock = this.http.get(this.GET_MOST_VOLUME_STOCKS)
          .pipe(map(res => {
            return res.json();
          }))
    let infocus_stock = this.http.get(this.GET_INFOCUS_STOCKS)
          .pipe(map(res => {
            return res.json();
          }))
     
  }
}
