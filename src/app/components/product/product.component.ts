import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { PrdouctService } from 'src/app/services/prdouct.service';

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
