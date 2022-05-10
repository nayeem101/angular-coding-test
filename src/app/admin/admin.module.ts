import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductListItemComponent,
    ProductCreateComponent,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
