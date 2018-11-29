import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

import * as firebase from 'firebase';
import { $, $$ } from 'protractor';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  

  public email: string;
  public password: string;
  constructor(private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit() {
    
    var user = firebase.auth().currentUser;
    if (user != null){
      user.providerData.forEach(function(profile){
        var ref = firebase.database().ref("logo");
        
        var logo = {};
        ref.on('value',function(datos){
          logo = datos.val();
          
        })
        
      });
    }

  }

  cambioPagPuestos(): void{
    this.authService.Login(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['/job']);
    }).catch((err) =>{
      console.log(err);
      this.router.navigate(['S']);
    });
  }
}
