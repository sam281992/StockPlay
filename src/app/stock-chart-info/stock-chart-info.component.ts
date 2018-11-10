import { Component, OnInit } from '@angular/core';
import { StockChartService } from './stock-chart.service';

@Component({
  selector: 'app-stock-chart-info',
  templateUrl: './stock-chart-info.component.html',
  styleUrls: ['./stock-chart-info.component.css'],
  providers: [StockChartService]
})
export class StockChartInfoComponent implements OnInit {

  constructor(private stockchartservice: StockChartService) { }

  ngOnInit() {
    this.getchartInfo()
  } 

  getchartInfo(){
    this.stockchartservice.getDailyTimeSeriesData('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockchartservice.getIntradayData('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockchartservice.getSMAData('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockchartservice.getEMAData('aapl').subscribe(data => {
      console.log(data);
    })
    this.stockchartservice.getMACDData('aapl').subscribe(data => {
      console.log(data);
    })
  }
}
