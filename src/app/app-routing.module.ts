import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//llamar para hacer las rutas

import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegistryPageComponent} from './components/registry-page/registry-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import { from } from 'rxjs';

import {AuthGuard} from './guards/auth.guard';
const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registry', component: RegistryPageComponent},
  {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
