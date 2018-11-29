import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { AppsRoles } from '../models/apps-roles';
@Injectable({
  providedIn: 'root'
})
export class AppsRolesService {

  appsRolesList: AngularFireList <any>;
  selectedAppsRoles: AppsRoles = new AppsRoles();

  constructor(private firebase: AngularFireDatabase) { }
  getAppsRoles(){
    return this.appsRolesList = this.firebase.list('AppsRoles')
  }
  insertAppsRoles(appsRoles: AppsRoles){
    this.appsRolesList.push({
      id: appsRoles.id,
      name: appsRoles.name,
      description: appsRoles.description,
      rol: appsRoles.rol
    });
  }
  deleteAppsRoles($key: string){
    this.appsRolesList.remove($key);
  }
  updateAppsRoles(appsRoles: AppsRoles){
    this.appsRolesList.update(appsRoles.$key,{
      id: appsRoles.id,
      name: appsRoles.name,
      description: appsRoles.description,
      rol: appsRoles.rol
    });
  }
}
