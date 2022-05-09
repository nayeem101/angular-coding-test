import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product.interface';
import { PrdouctService } from 'src/app/services/prdouct.service';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products!: Product[];

  constructor(
    private _dialog: MatDialog,
    private _productService: PrdouctService
  ) {}

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  addProduct() {
    this._dialog.open(ProductCreateComponent);
  }
}
