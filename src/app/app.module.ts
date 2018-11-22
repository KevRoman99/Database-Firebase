import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegistryPageComponent } from './components/registry-page/registry-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { RegisterAdminComponent } from './components/registry-page/register-admin/register-admin.component';
import { JobPositionsPageComponent } from './components/job-positions-page/job-positions-page.component';



import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ToastrModule} from 'ngx-toastr';
//services
import {AuthService} from './services/auth.service';
import {AdminService} from './services/admin.service';
import {JobService} from './services/job.service'
//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';


import {AuthGuard} from './guards/auth.guard';
import { RegisterJobComponent } from './components/register-job/register-job.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegistryPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    RegisterAdminComponent,
    JobPositionsPageComponent,
    RegisterJobComponent,
    ProductPageComponent,
    RegisterProductComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, AdminService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
