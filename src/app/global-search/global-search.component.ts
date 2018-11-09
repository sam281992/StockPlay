import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STOCKS } from '../mock-data/stocks';
import { Router } from '@angular/router';
import { StockInfoService } from '../stock-info/services/stock-info.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css'],
  providers: [StockInfoService]
})
export class GlobalSearchComponent implements OnInit {
  @ViewChild('searchDiv') searchDiv:ElementRef;
  @ViewChild('titleHeader') titleHeader:ElementRef;
  @ViewChild('searchFormField') searchFormField:ElementRef;

  activeLinkIndex = 0;
  stateCtrl = new FormControl();
  filteredStates: Observable<String[]>;
  navLinks = [];
  navTabDisp: boolean
  stocks: String[] = STOCKS

  constructor(private router: Router, private stockinfoservice: StockInfoService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(stock => stock ? this._filterStates(stock) : this.stocks.slice())
      );
  }

  private _filterStates(value: string): String[] {
    const filterValue = value.toLowerCase();
    return this.stocks.filter(stock => stock.toLowerCase().indexOf(filterValue) === 0);
  }  
  
  ngOnInit() {
    this.navTabDisp = false;
    this.navLinks = [
      { label: 'Stocks Math', link: './stock-info'},
      { label: 'News', link: './stock-news'},
      { label: 'Play Stock', link: './play-stock'}
    ] 
  }

  getSecInfo(){
    this.transitionSearchElements()
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

  transitionSearchElements(){
    this.searchDiv.nativeElement.className = 'transitioned-search-div' 
    this.titleHeader.nativeElement.className = 'transitioned-title-header'
    this.router.navigate(['/search/stock-info']);
    this.navTabDisp = true;
  }
}
