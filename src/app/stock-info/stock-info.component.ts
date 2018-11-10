import { Component, OnInit } from '@angular/core';
import { StockInfoService } from '../stock-info/services/stock-info.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css'],
  providers: [StockInfoService]
})
export class StockInfoComponent implements OnInit {

  constructor(private stockinfoservice: StockInfoService) { }

  ngOnInit() {
    this.getSecInfo()
  }

  getSecInfo(){
    this.stockinfoservice.getStockQuotes('aapl').subscribe(data => {
       console.log(data);
    })
    this.stockinfoservice.getStockEarnings('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockFinancials('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockFinancialsAnnual('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockOHLC('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockKeyStats('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockCompanyInfo('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockinfoservice.getStockprice('aapl').subscribe(data => {
      console.log(data);
    })
  }

}
