import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../shopping-cart.service';
import { Purchase } from '../../../purchase.model';
import { Fruit } from '../../../fruit.model';
import { FruitService } from '../../../fruit.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit {
  purchase: Purchase;
  id: number;
  fIndex: number;
  purchases: Purchase[];
  fruits: Fruit[];
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  constructor(private cartService: CartService,
              private fruitService: FruitService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.purchases = this.cartService.getPurchases();
    this.fruits = this.fruitService.getFruits();
    this.route.params
    .subscribe(
      params => {
        this.id = +params['id'];
        console.log('the id is: ' + this.id);
        this.purchase = this.cartService.getPurchase(this.id);
      });
      this.fIndex = this.purchases[this.id].index;
      this.quantity = this.purchase.quantity;
      this.price = this.quantity * this.fruits[this.fIndex].price;
    }

  onSave() {
    const p = this.cartService.getPurchase(this.id);
    this.purchases[this.id] = p;
    const myValue = Number(document.getElementsByTagName('select')[0].value);
    this.quantity = myValue;
    this.cartService.decreasePrice(this.price);
    this.price = this.fruits[this.purchases[this.id].index].price * this.quantity;
    const newPurchase = new Purchase(this.purchases[this.id].index, this.quantity, this.price);
    console.log(newPurchase);
    this.cartService.updatePurchase(this.id, newPurchase);
    this.cartService.increasePrice(this.price);
    this.totalPrice = this.cartService.getTotalPrice();
    const link = ['/shoppingCart'];
    this.router.navigate(link);

  }
}
