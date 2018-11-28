import { Component, OnInit } from '@angular/core';

//Services
import {AdminService} from '../../../services/admin.service';
import {AuthService} from '../../../services/auth.service';
import {PasswordValition} from '../../../models/password-valition';

//Router
import {Router, Route} from '@angular/router';

//Messages
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';

import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Admin } from 'src/app/models/admin';



@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  public email: string;
  public password: string;
  form: FormGroup;
  
  constructor(private fb: FormBuilder,
    public authService: AuthService,
    public adminService: AdminService,
    public router: Router)
  {
    this.form =  this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25),
        
      ])),
      confirmPassword: new FormControl ('', Validators.compose([
        Validators.required
      ])),
    }, {
      validator: PasswordValition.MatchPassword // your validation method
    })
  }


  ngOnInit() {
    
  }
  //Agregar administrador
  onSubmit(adminForm: NgForm){
    this.adminService.insertAdmin(adminForm.value);
  }
  //Agregar Una cuenta
  onSubmitAddUser(form){
   this.authService.RegistryUser(form.email, form.password)
    .then((res) =>{
     this.router.navigate(['']);
      }).catch((err) =>{
      console.log(err);
    });
   
  }
}
