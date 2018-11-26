import { Component, OnInit } from '@angular/core';

//Services
import {AdminService} from '../../../services/admin.service';
import {AuthService} from '../../../services/auth.service';
import {PasswordValition} from '../../../models/password-valition';

//Router
import {Router, Route} from '@angular/router';

//Messages
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';

import { NgForm, FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  public email: string;
  public password: string;


  form: FormGroup;
  constructor(fb: FormBuilder)
  {
    this.form = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValition.MatchPassword // your validation method
    })
  }


  ngOnInit() {
   // this.adminService.getAdmins();
  }
  //Agregar administrador
  onSubmit(adminForm: NgForm){
    //this.adminService.insertAdmin(adminForm.value)
  }
  //Agregar Una cuentra
  onSubmitAddUser(){
   // this.authService.RegistryUser(this.email, this.password)
    //.then((res) =>{
    // this.flashMessagesServices.show('Usuario Creado Correactamente!', 
    // {cssClass: 'alert-success', timeout: 4000});
     //this.router.navigate(['']);
   //   }).catch((err) =>{
     // console.log(err);
    //});
    console.log(this.form)
  }
}
