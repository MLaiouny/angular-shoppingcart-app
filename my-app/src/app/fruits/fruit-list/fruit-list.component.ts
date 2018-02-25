import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Fruit } from '../fruit.model';
import { FruitService } from '../fruit.service';
import { CartService } from '../fruit-list/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})

@Injectable()
export class FruitListComponent implements OnInit {
  fruits: Fruit[];
  index: number;
  count = 0;
  quantity = 0;
  price = 0;
  totalPrice = 0;
  public clicked = false;

  productSelected = new Subject<any>();
  constructor(
    private fruitService: FruitService,
    private router: Router,
    private cartService: CartService ) { }

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
    this.totalPrice = this.cartService.getTotalPrice();
    this.count = this.cartService.getCount();
    this.clicked = false;
  }
  gotoDetail(index: number ): void {
    this.productSelected.next(this.index);
    const link = ['/detail', index];
    this.router.navigate(link);
  }

  toShoppingCart() {
    const link = ['/shoppingCart'];
    this.router.navigate(link);
  }

  onAddtocart(i: number): void {
    this.clicked = true;
    const myValue = document.getElementsByTagName('select')[i].value;
    // const myButton = document.getElementsByClassName('btnAddToCart')[i];
    // const myButton = document.getElementById('btnCart-' + i);
    this.quantity = Number(myValue);
    this.price = this.fruits[i].price * this.quantity;
    this.cartService.createPurchase(this.index, this.quantity, this.price );
    this.totalPrice = this.cartService.getTotalPrice();
    this.count = this.cartService.getCount();
    
    // console.log(myButton);
    
  }

}
