import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Admin} from '../models/admin';
import {map} from 'rxjs/operators';

import { Validator } from '@angular/forms';
import { Direct } from 'protractor/built/driverProviders';
import { containsElement } from '@angular/animations/browser/src/render/shared';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  adminList: AngularFireList <any>;
  selectedAdmin: Admin = new Admin();


  constructor(public afAuth: AngularFireAuth,
    private fireData: AngularFireDatabase) { }
    
  RegistryUser(
    email: string,
    password: string
  ){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        .then( userData => {
          resolve(userData)
        },
        err => reject(err));
    });
  }
  Login(
    email: string,
    password: string
  ){
      return new Promise((resolve, reject) =>{
        this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then( 
          userData => {
            var ref= firebase.database().ref('/Logo/admins/-LSR6n81oos9JNHOjZGn');
            var q = ref.child('email').equalTo(email).on('value', function(snapshot){
              resolve(userData);
              return userData;

            })
            
          } ,
        err =>  {
          reject(err)
          return err;
        } );
    });
    
  }
  getAuth(){
    return this.afAuth.authState.pipe(map( auth => auth ));
  }
 
  logout(){
    return this.afAuth.auth.signOut();
  }


}