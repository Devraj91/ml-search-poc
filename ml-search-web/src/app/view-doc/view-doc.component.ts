import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ViewDocService } from "../view-doc.service";

@Component({
  selector: "app-view-doc",
  templateUrl: "./view-doc.component.html",
  styleUrls: ["./view-doc.component.css"]
})
export class ViewDocComponent implements OnInit {
  com: any;
  docs: any;
  doc: any[];
  url: any;
  private sub: any;
  comments = [];

  constructor(private route: ActivatedRoute, private view: ViewDocService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = params["url"];
    });

    console.log("params", this.sub);
    let param1 = this.route.snapshot.queryParams["url"];

    console.log("params 1", param1);

    const l = "?url=" + param1;

    this.view.getViewData(l).subscribe(res => {
      this.doc = res;
      this.getDoc(this.doc);
      //var e = JSON.stringify(this.doc);
      //this.router.navigate(['/view']);
      console.log("doc obj ", this.doc);
    });
  }

  getDoc(doc) {
    this.docs = doc;
    console.log("docs data", this.docs);

    for (var i = 0; i < this.doc[0].content.comments.length; i++) {
      this.comments.push(this.doc[0].content.comments[i]);
    }

    this.getComments(this.comments);

   
  }

  getComments(com) {
    this.com = com;
 console.log("comments", this.com);
  }
}
