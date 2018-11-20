import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminList: AngularFireList <any>;
  selectedAdmin: Admin = new Admin ();
  constructor(private firebase: AngularFireDatabase) { }

  getAdmins() {
    return this.adminList = this.firebase.list('admins');
  }
  insertAdmin(admin: Admin){
    this.adminList.push({
      name: admin.name,
      id: admin.id,
      logo: admin.logo,
      nombres: admin.names,
      apellidos: admin.lastNames,
      fechaC: admin.date
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
      fechaC: admin.date
    });
  }

}
