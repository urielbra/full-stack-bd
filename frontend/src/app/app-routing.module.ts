import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponentComponent} from './views/login-component/login-component.component'
import {DashboardComponent} from './views/dashboard/dashboard.component'
import {SignUpComponent} from './views/sign-up/sign-up.component'
import {AuthGuard} from '../app/services/AuthGuard'
import {ConfirmComponent} from './views/confirm/confirm.component';
const routes: Routes = [
  { path: 'login', component: LoginComponentComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'confirm', component: ConfirmComponent},
  { path: 'main', canActivate: [AuthGuard], component: DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
