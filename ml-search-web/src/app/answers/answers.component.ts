import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() ans: any;
  @Input() accepted: any;
  constructor() { }

  ngOnInit() {
    console.log("answers", this.ans);
    console.log("Accepted id", this.accepted)
  }

  getClasses(id) {
    var className = '';
    if(this.accepted == id){
      className += 'accepted-ans ';
    }
      return className;
  }

}
