import { Component, OnInit } from '@angular/core';

import { AppsRoles } from 'src/app/models/apps-roles';
import { AppsRolesService } from 'src/app/services/apps-roles.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-aplications-roles',
  templateUrl: './register-aplications-roles.component.html',
  styleUrls: ['./register-aplications-roles.component.scss']
})
export class RegisterAplicationsRolesComponent implements OnInit {

  constructor(private appsRolesService: AppsRolesService) { }

  ngOnInit() {
    this.appsRolesService.getAppsRoles();
  }
  onSubmit(appsRolesForm: NgForm){
    if (appsRolesForm.value.$key == null)
    this.appsRolesService.insertAppsRoles(appsRolesForm.value);
    else
    this.appsRolesService.updateAppsRoles(appsRolesForm.value);
    this.resetForm(appsRolesForm)
  }
  resetForm(appsRolesForm?: NgForm){
    if(appsRolesForm != null){
      appsRolesForm.reset();
      this.appsRolesService.selectedAppsRoles = new AppsRoles();
    }
  }
}
