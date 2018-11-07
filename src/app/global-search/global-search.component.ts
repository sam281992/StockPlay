import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STOCKS } from '../mock-data/stocks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  @ViewChild('searchDiv') searchDiv:ElementRef;
  @ViewChild('titleHeader') titleHeader:ElementRef;
  @ViewChild('searchFormField') searchFormField:ElementRef;

  stateCtrl = new FormControl();
  filteredStates: Observable<String[]>;

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
  }

  getSecInfo(){
    this.transitionSearchElements()
  }

  transitionSearchElements(){
    this.searchDiv.nativeElement.className = 'transitioned-search-div' 
    this.titleHeader.nativeElement.className = 'transitioned-title-header'
    //this.searchFormField.nativeElement.className = 'transitioned-search-formfield'
    this.router.navigateByUrl('/stockInfo');
  }
}
