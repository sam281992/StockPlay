import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STOCKS } from '../mock-data/stocks';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css'],
})
export class GlobalSearchComponent implements OnInit {
  @ViewChild('searchDiv') searchDiv:ElementRef;
  @ViewChild('titleHeader') titleHeader:ElementRef;
  @ViewChild('searchFormField') searchFormField:MatFormField;

  activeLinkIndex = 0;
  stateCtrl = new FormControl();
  filteredStates: Observable<String[]>;
  navLinks = [];
  navTabDisp: boolean
  stocks: String[] = STOCKS

  constructor(private router: Router) {
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
      { label: 'Stock Chart', link: './stock-chart'},
      { label: 'News', link: './stock-news'},
      { label: 'Play Stock', link: './play-stock'}
    ] 
  }

  searchResults(){
    this.transitionSearchElements();
  }

  transitionSearchElements(){
    this.searchDiv.nativeElement.className = 'transitioned-search-div' 
    this.titleHeader.nativeElement.className = 'transitioned-title-header'
    this.searchFormField._elementRef.nativeElement.className = this.searchFormField._elementRef.nativeElement.className.replace('search-full-width', 'transitioned-search-form-field')
    this.router.navigate(['/search/stock-info']);
    this.navTabDisp = true;
  }
}
