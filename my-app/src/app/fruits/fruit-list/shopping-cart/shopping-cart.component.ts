import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../purchase.model';
import { FruitService } from '../../fruit.service';
import { CartService } from './shopping-cart.service';
import { Fruit } from '../../fruit.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  purchases: Purchase[];
  fruits: Fruit[];
  private index: number;
  private item: Fruit;
  private quantity: number;
  private price: number;
  private id: number;
  purchaseEdited = new Subject<any>();
  private count: number;
  private totalPrice: number;

  constructor(private fruitService: FruitService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.purchases = this.cartService.getPurchases();
    // for (let i = 0; i < this.purchases.length; i++){
    this.fruits = this.fruitService.getFruits();
    this.count = this.cartService.getCount();
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalPrice = Math.round(this.totalPrice * 100 ) / 100;
    }

    clearPurchase(index: number) {
      this.cartService.deletePurchase(index);
      this.count = this.cartService.getCount();
      this.totalPrice = this.cartService.getTotalPrice();
    }

    editPurchase(id: number ) {
      this.purchaseEdited.next(this.id);
      const link = ['/shoppingCartEdit', id];
      this.router.navigate(link);
    }

    goToCheckOut() {
      const link = ['/checkOut'];
      this.router.navigate(link);
    }

    backToStore() {
      const link = ['/'];
      this.router.navigate(link);
    }

    clearCart() {
      this.cartService.deleteCart();
      this.purchases = this.cartService.getPurchases();
      this.count = this.cartService.getCount();
      this.totalPrice = this.cartService.getTotalPrice();
    }
  }

