import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FruitService } from './fruits/fruit.service';
import { CartService } from './fruits/fruit-list/shopping-cart/shopping-cart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitListComponent } from './fruits/fruit-list/fruit-list.component';
import { FruitItemComponent } from './fruits/fruit-list/fruit-item/fruit-item.component';
import { ProductDetailComponent } from './fruits/fruit-list/product-detail/product-detail.component';
import { ShoppingCartComponent } from './fruits/fruit-list/shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './fruits/fruit-list/shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { CheckOutComponent } from './fruits/fruit-list/shopping-cart/check-out/check-out.component';




@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitListComponent,
    FruitItemComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShoppingCartEditComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FruitService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
