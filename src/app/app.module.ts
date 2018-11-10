import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { StockNewsComponent } from './stock-news/stock-news.component';
import { PlayStockComponent } from './play-stock/play-stock.component';
import { HttpModule } from '@angular/http';
import { StockChartInfoComponent } from './stock-chart-info/stock-chart-info.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    GlobalSearchComponent,
    StockInfoComponent,
    StockNewsComponent,
    PlayStockComponent,
    StockChartInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    HttpModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
