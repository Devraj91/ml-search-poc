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
  doc = [];
  title = "app";
  http: Http;
  result = [];
  data = [];

  constructor(
    http: Http,
    private view: ViewDocService
  ) {
    this.http = http;
  }


  viewJson(list) {
    const l = '?text='+ list;
    var d = [];
   // this.router.navigateByUrl(`/view?url=${encodeURI(list)}`);
    // this.router.navigate([(l).replace(/%3F/g, '?')]);
           console.log("link", l);
    // this.router.navigate([`view?url=${list}`]);
    this.view.getViewData(l).subscribe(res => {
      this.doc = res;
      //var e = JSON.stringify(this.doc);
      //this.router.navigate(['/view']);
      console.log("doc obj ", this.doc );

    });
  }

}
