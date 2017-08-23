import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class SearchDataService {
  private service_url = "http://localhost:3000/search/";
  private page_size = 10;

  constructor(private http: Http) {}

  createHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');

    headers.append('page_size', 'Basic '); 
  }

  getSearchData(params): Observable<any[]> {
    let headers = new Headers();
    this.createHeader(headers);
    return this.http
      .get(this.service_url + params)
      .map((res: Response) => res.json());
  }
}
