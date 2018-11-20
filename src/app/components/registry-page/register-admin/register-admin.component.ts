import { Component, OnInit } from '@angular/core';

//Services
import {AdminService} from '../../../services/admin.service';
import {AuthService} from '../../../services/auth.service';

//Router
import {Router, Route} from '@angular/router';

//Messages
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public adminService: AdminService,
    public authService: AuthService,
    public router: Router,
    public flashMessagesServices: FlashMessagesService) { }

  ngOnInit() {
    this.adminService.getAdmins();
  }
  //Agregar administrador
  onSubmit(adminForm: NgForm){
    this.adminService.insertAdmin(adminForm.value)
  }
  //Agregar Una cuentra
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
}
