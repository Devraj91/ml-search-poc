import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() ans: any;
  @Input() accepted: any;
  @Input() ids: any;

  constructor() { }

  ngOnInit() {
    
  }

  getClasses(id) {
    var className = '';
    if(this.accepted == id){
      className += 'accepted-ans ';
    }
      return className;
  }

}
