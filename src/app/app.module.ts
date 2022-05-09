import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SncakbarComponent } from './components/sncakbar/sncakbar.component';

import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';

import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    SncakbarComponent,
    ProductListItemComponent,
    ProductCreateComponent,
    DeleteDialogComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
