import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, Route} from '@angular/router';
@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.scss']
})
export class RegistryPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    this.authService.RegistryUser(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['/profile']);
    }).catch((err) =>{
      console.log(err);
    });
  }
}
