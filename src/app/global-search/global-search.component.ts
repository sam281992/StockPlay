import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { STOCKS } from '../mock-data/stocks';


@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStates: Observable<String[]>;

  stocks: String[] = STOCKS

  constructor() {
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
}
