import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { PlayStockComponent } from './play-stock/play-stock.component';
import { StockNewsComponent } from './stock-news/stock-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch:'full'},
    { path: 'search',  component: GlobalSearchComponent,
      children: [
        { path: 'stock-info', component: StockInfoComponent},
        { path: 'stock-news', component: StockNewsComponent},
        { path: 'play-stock', component: PlayStockComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
