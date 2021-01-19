import { Component, OnInit } from '@angular/core';
import {ladys} from '../../db/ladys';


@Component({
  selector: 'app-ledys',
  templateUrl: './ledys.component.html',
  styleUrls: ['./ledys.component.css']
})
export class LedysComponent implements OnInit {

  ladys = ladys;
  constructor() { }

  ngOnInit(): void {
  }

}
