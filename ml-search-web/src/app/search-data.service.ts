import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class SearchDataService {
  page_size = 10;
      private service_url = "http://localhost:3000/search/";


  constructor(private http: Http) {}

  getSearchData(params): Observable<any[]> {
    return this.http
      .get(this.service_url + params )
      .map((res: Response) => res.json());
  }
}
