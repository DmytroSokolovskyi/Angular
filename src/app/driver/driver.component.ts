import {Component, OnInit} from '@angular/core';
import {ICar} from '../interface';
import {cars} from '../../db/cars';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  cars: ICar[] = cars;
  constructor() {
  }

  ngOnInit(): void {
  }

}
