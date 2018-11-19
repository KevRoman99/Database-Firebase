import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, Route} from '@angular/router';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages'
import {Admin} from '../../models/admin';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.scss']
})
export class RegistryPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService,
    public router: Router,
    public flashMessagesServices: FlashMessagesService ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.RegistryUser(this.email, this.password)
    .then((res) =>{
      this.flashMessagesServices.show('Usuario Creado Correactamente!', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['']);
    }).catch((err) =>{
      console.log(err);
    });
  }
  onSubmitAddAdmin(RegisterAdmin: NgForm){
    this.authService.RegisterCompanyDataBase(RegisterAdmin.value);
  }
}
