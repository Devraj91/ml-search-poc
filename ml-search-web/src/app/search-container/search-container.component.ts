import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchDataService } from "../search-data.service";
import { Router } from "@angular/router";
import { SearchBoxComponent } from "../search-box/search-box.component";


@Component({
  selector: "app-search-container",
  templateUrl: "./search-container.component.html",
  styleUrls: ["./search-container.component.css"]
})
export class SearchContainerComponent implements OnInit {
  searchData: any;
  doc = [];
  title = "app";
  http: Http;
  result = [];
  data = [];

  constructor(
    http: Http,
    private search: SearchDataService,
    private router: Router
  ) {}

  ngOnInit() {}

  performSearch(searchTerm) {
    const page_size = "10";

    var page_no = 1;
    var search_link = "?text=" + searchTerm + "&page_no=" + page_no;
    this.search.getSearchData(search_link).subscribe(res => {
      this.data = res;
      this.getData(this.data);
    });
  }

  getData(data) {
    this.searchData = data;
  }
}
