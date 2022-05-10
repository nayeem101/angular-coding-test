import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCreateComponent } from 'src/app/admin/product-create/product-create.component';
import { Product } from 'src/app/interfaces/product.interface';
import { PrdouctService } from 'src/app/products/prdouct.service';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private _productService: PrdouctService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this._dialog.open(ProductCreateComponent, {
      data: this.product,
    });
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this._snackBar.open(val, 'ok', {
          duration: 1500,
        });
      }
    });
  }

  deleteProduct(id: string) {
    const dialogRef = this._dialog.open(DeleteDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((value) => {
      console.log(value);

      if (value) {
        this._productService.deleteProduct(id).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
}
