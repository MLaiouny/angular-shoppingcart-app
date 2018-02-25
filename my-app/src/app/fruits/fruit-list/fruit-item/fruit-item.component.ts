import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../../fruit.model';

@Component({
  selector: 'app-fruit-item',
  templateUrl: './fruit-item.component.html',
  styleUrls: ['./fruit-item.component.css']
})
export class FruitItemComponent implements OnInit {
  @Input() fruit: Fruit;

  constructor() { }

  ngOnInit() {
  }

}
