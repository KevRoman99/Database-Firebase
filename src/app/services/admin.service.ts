import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminList: AngularFireList <any>;
  nuevaLista: AngularFireList<any>;
  selectedAdmin: Admin = new Admin ();
  constructor(private firebase: AngularFireDatabase) { }

  getAdmins(name:string) {
    return this.adminList = this.firebase.list(name);
  }
  insertAdmin(admin: Admin){
    this.getAdmins(admin.name);
    this.nuevaLista = this.firebase.list(admin.name + '/admins');
    this.nuevaLista.push({
      name: admin.name,
      id: admin.id,
      logo: admin.logo,
      nombres: admin.names,
      apellidos: admin.lastNames,
      fechaC: admin.date,
      email: admin.email
   });
  }
  deleteAdmin($key: string){
    this.adminList.remove($key);
  }
  updateAdmin(admin: Admin){
    this.adminList.update(admin.$key,{
      name: admin.name,
      id: admin.id,
      logo: admin.logo,
      nombres: admin.names,
      apellidos: admin.lastNames,
      fechaC: admin.date,
      email: admin.email
    });
  }

}
