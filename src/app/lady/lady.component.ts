import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lady',
  templateUrl: './lady.component.html',
  styleUrls: ['./lady.component.css']
})
export class LadyComponent implements OnInit {

  @Input()
  ledy: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
