import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class SearchDataService {
  private service_url = "http://localhost:3000/search";
  // private page_size = 10;
headers:Headers;
options:RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({
               'Content-Type': 'application/json',
               'Accept': 'q=0.8;application/json;q=0.9'
               // 'pageSize': '10'
 
           });
        // this.headers.append('pagesize','10');
           this.options = new RequestOptions({ headers: this.headers });
  }
 

  getSearchData(params): Observable<any[]> {
    return this.http
      .get(this.service_url + params  , this.options)
      .map((res: Response) => res.json());
  }
}
