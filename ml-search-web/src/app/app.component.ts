import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchDataService } from "./search-data.service";
// import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  http: Http;
  result = [];
  data = [];
  

  constructor(http: Http, private search: SearchDataService) {
    this.http = http;
  }

  performSearch(searchTerm) {
    console.log("start searching", searchTerm.value);
    const page_size = "?10";
    const api_link = searchTerm.value + page_size;
          console.log(api_link);
    this.search.getSearchData(api_link).subscribe(res => {
      this.data = res;
      console.log("Data", this.data);
    });

  }
}
