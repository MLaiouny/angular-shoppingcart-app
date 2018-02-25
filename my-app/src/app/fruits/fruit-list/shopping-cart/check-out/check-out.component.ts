import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  private count: number;
  private totalPrice: number;
  private amountDue: number;

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    this.count = this.cartService.getCount();
    this.totalPrice = this.cartService.getTotalPrice();
    this.amountDue = this.totalPrice * 1.05;
    this.amountDue = Math.round(this.amountDue * 100) / 100;
  }

  backToShoppingCart() {
    const link = ['/shoppingCart'];
    this.router.navigate(link);
  }
}
