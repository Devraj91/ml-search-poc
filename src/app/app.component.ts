import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'MarkLogic Search';
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  result = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm) {
    console.log('start searching', searchTerm.value);
    const api_link = this.link + searchTerm.value;

    this.http.request(api_link).subscribe((res: Response) => {
      this.result = res.json().data;
      console.log(this.result);
    });
  }
}
