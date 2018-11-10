import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockNewsService {

  constructor(private http: Http) { 

  }
  
  private newsApiKey = environment.newsapikey;
  private PRE_NEWS_URL = 'https://newsapi.org/v2/everything?';
  private POST_NEWS_URL = '&sources=cnbc,financial-times,the-wall-street-journal&sortBy=relevancy&apiKey=' + this.newsApiKey;

  getAllNews(stock: String) {
    return this.http.get(this.PRE_NEWS_URL + stock + this.POST_NEWS_URL)
          .pipe(map(res => {
            return res.json();
          }))
  }

}
