import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalSearchComponent } from './global-search/global-search.component';
import { StockInfoComponent } from './stock-info/stock-info.component';

const routes: Routes = [
  { path: '', component: GlobalSearchComponent,
    children: [
      { path: 'stockInfo', component: StockInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
