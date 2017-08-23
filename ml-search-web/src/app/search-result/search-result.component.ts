import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() searchData: any;
  constructor() { }

  ngOnInit() {
    console.log("search data from child",this.searchData);
  }

}
