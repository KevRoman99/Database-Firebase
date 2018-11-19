import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin = true;
        this.nombreUser = auth.displayName;
        this.emailUser = auth.email;
      }else{
        this.isLogin = false
      }
    })
  }
  onClickLogout(){
    this.authService.logout();
  }
}
