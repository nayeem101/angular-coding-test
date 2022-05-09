import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { PrdouctService } from '../services/prdouct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  constructor(private _productService: PrdouctService) {}

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
