import { Injectable } from '@angular/core';

//import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import {Admin} from '../models/admin';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  
  RegistryUser(
    email: string,
    password: string
  ){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then( userData => resolve(userData),
        err => reject(err));
    });
  }
  Login(
    email: string,
    password: string
  ){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then( userData => resolve(userData),
        err => reject(err));
    });
  }
  getAuth(){
    return this.afAuth.authState.pipe(map( auth => auth ));
  }
  //RegistryEmpresaDataBase(admin: Admin){
   // this.companyList.push({
   //   nombreEmp: admin.nombreEmp,
   //   id: admin.id,
   //   logo: admin.logo,
    //  email: admin.email,
    //  nombres: admin.nombres,
    //  apellidos: admin.apellidos,
     // fechaC: admin.fechaC,
    //  contraseña: admin.contraseña
   // });
  //}

  logout(){
    return this.afAuth.auth.signOut();
  }

}
