import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { PrdouctService } from 'src/app/services/prdouct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private productID!: string | null;
  product!: Product | null;

  constructor(
    private _route: ActivatedRoute,
    private _productService: PrdouctService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.productID = params.get('id');
      // console.log(this.productID);

      if (this.productID) {
        this._productService.getProduct(this.productID).subscribe((product) => {
          this.product = product;
          // console.log(product);
        });
      }
    });
  }
}
