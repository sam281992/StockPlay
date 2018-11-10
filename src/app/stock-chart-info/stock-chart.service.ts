import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class StockChartService {
  
  private chartApiKey = environment.chartapikey;
  private INITIAL_DAILY_STOCK_DATA = 'https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_DAILY&symbol=';
  private FINAL_DAILY_STOCK_DATA = '&apikey=' + this.chartApiKey;

  private INITIAL_INTRADAY_DATA = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
  private FINAL_INTRADAY_DATA = '&interval=30min&apikey=' + this.chartApiKey;

  private INITIAL_SMA_DATA = 'https://www.alphavantage.co/query?function=SMA&symbol=';
  private FINAL_SMA_DATA = '&interval=daily&time_period=10&series_type=open&apikey=' + this.chartApiKey;

  private INITIAL_EMA_DATA = 'https://www.alphavantage.co/query?function=EMA&symbol=';
  private FINAL_EMA_DATA = '&interval=daily&time_period=10&series_type=open&apikey=' + this.chartApiKey;

  private INITIAL_MACD_DATA = 'https://www.alphavantage.co/query?function=MACD&symbol=';
  private FINAL_MACD_DATA = '&interval=daily&series_type=open&apikey=' + this.chartApiKey;



  constructor(private http:Http) { }

  getDailyTimeSeriesData(stock: String){
    return null;
    // return this.http.get(this.INITIAL_DAILY_STOCK_DATA + stock + this.FINAL_DAILY_STOCK_DATA)
    //       .pipe(map(res => {
    //         return res.json();
    //       }))
  }

  getIntradayData(stock: String){
    return null;
    // return this.http.get(this.INITIAL_INTRADAY_DATA + stock + this.FINAL_INTRADAY_DATA)
    //       .pipe(map(res => {
    //         return res.json();
    //       }))
  }
  
  getSMAData(stock: String){
    return null;
    // return this.http.get(this.INITIAL_SMA_DATA + stock + this.FINAL_SMA_DATA)
    //       .pipe(map(res => {
    //         return res.json();
    //       }))
  }

  getEMAData(stock: String){
    return null;
    // return this.http.get(this.INITIAL_EMA_DATA + stock + this.FINAL_EMA_DATA)
    //       .pipe(map(res => {
    //         return res.json();
    //       }))
  }

  getMACDData(stock: String){
    return null;
    // return this.http.get(this.INITIAL_MACD_DATA + stock + this.FINAL_MACD_DATA)
    //       .pipe(map(res => {
    //         return res.json();
    //       }))
  }
}
