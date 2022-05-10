import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  amount = 1;
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  increaseAmount() {
    this.amount++;
  }
  decreaseAmount() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
}
