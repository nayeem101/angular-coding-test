import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './product-item/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ProductComponent, ProductDetailsComponent],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
