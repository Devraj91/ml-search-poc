import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchDataService } from "./search-data.service";
import { Router } from "@angular/router";
import { ViewDocService } from "./view-doc.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  doc: any[];
  title = "app";
  http: Http;
  result = [];
  data = [];

  constructor(
    http: Http,
    private search: SearchDataService,
    private router: Router,
    private view: ViewDocService
  ) {
    this.http = http;
  }

  performSearch(searchTerm) {
    console.log("start searching", searchTerm.value);
    const page_size = "10";

    const search = "?" + searchTerm.value;
    var page_no = 1;
    const url = link => {
      return { text: searchTerm.value, page_size: page_size };
    };

    const search_link =
      "a?" + "text=" + searchTerm.value + "&page_no=" + page_no;
    this.search.getSearchData(search_link).subscribe(res => {
      this.data = res;
    });
  }

  viewJson(list) {
    const link = "a?text=" + list;
    
    this.view.getViewData(link).subscribe(res => {
      this.doc = res;
      // this.router.navigate(['/view']);
      console.log("document", this.doc);
      var viewData = this.doc['content'];
      console.log('Docs',viewData);
    });
  }
}
