import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';



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
