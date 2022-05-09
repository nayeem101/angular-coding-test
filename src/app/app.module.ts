import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './user/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SncakbarComponent } from './components/sncakbar/sncakbar.component';

@NgModule({
  declarations: [AppComponent, SignInComponent, DashboardComponent, HomeComponent, NotFoundComponent, HeaderComponent, SncakbarComponent],
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
