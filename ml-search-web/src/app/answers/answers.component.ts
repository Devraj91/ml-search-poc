import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  @Input() ans: any;
  constructor() { }

  ngOnInit() {
    console.log("answers", this.ans)
  }

}
