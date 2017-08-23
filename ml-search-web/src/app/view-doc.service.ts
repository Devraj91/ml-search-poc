import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class ViewDocService {
  private service_url = "http://localhost:3000/view/";


  constructor(private http: Http) {}

  getViewData(params): Observable<any[]> {
    return this.http
      .get(this.service_url + params )
      .map((res: Response) => res.json());
  }
}
