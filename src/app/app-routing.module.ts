import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
