import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FruitsComponent } from './fruits/fruits.component';
import { ProductDetailComponent } from './fruits/fruit-list/product-detail/product-detail.component';
import { FruitListComponent } from './fruits/fruit-list/fruit-list.component';
import { ShoppingCartComponent } from './fruits/fruit-list/shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './fruits/fruit-list/shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import {CheckOutComponent } from './fruits/fruit-list/shopping-cart/check-out/check-out.component';
const routes: Routes = [
    { path: '', component: FruitListComponent},
    { path: 'detail/:id', component: ProductDetailComponent},
    {path: 'shoppingCart', component: ShoppingCartComponent},
    {path: 'shoppingCartEdit/:id', component: ShoppingCartEditComponent},
    {path: 'checkOut', component: CheckOutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }