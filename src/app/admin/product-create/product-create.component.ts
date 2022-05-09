import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product.interface';
import { PrdouctService } from 'src/app/services/prdouct.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productForm!: FormGroup;
  title = 'Add new';
  editing: boolean = false;
  productId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: Product,
    private formBuilder: FormBuilder,
    private _productService: PrdouctService,
    private dialogRef: MatDialogRef<ProductCreateComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      img_url: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['', Validators.required],
      description: [''],
    });

    if (this.dialogData) {
      this.title = 'Edit';
      this.editing = true;
      this.productId = this.dialogData.id;
      this.productForm.setValue({
        name: this.dialogData.name,
        img_url: this.dialogData.img_url,
        price: this.dialogData.price,
        brand: this.dialogData.brand,
        description: this.dialogData?.description,
      });
    }
  }

  onSave() {
    if (this.editing) {
      this._productService
        .updateProduct({
          id: this.productId,
          ...this.productForm.value,
        })
        .subscribe((res) => {
          console.log(res);
          this.dialogRef.close('product updated');
          this.productForm.reset();
        });
    } else {
      this._productService
        .createProduct(this.productForm.value)
        .subscribe((res) => {
          console.log(res);
          this.dialogRef.close('product added');
          this.productForm.reset();
        });
    }
  }
}
