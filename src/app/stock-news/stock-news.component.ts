import { Component, OnInit } from '@angular/core';
import { StockNewsService } from '../stock-news/stock-news.service';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css'],
  providers: [StockNewsService]
})
export class StockNewsComponent implements OnInit {

  public news;
  constructor(private stocknewsservice: StockNewsService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews(){
    this.stocknewsservice.getAllNews('aapl').subscribe(data => {
      this.news = data; 
   })
  }
  
}
