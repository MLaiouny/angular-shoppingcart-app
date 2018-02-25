import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Fruit } from '../../fruit.model';
import { FruitService } from '../../fruit.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  fruit: Fruit;
  id: number;

  constructor(
          private route: ActivatedRoute,
          private fruitService: FruitService,
          private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.fruit = this.fruitService.getFruit(this.id);
        });
  }

  backTostore() {
    this.router.navigate(['/']);
  }

}
