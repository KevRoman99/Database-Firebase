import { Component, OnInit } from '@angular/core';

import { AppsRolesService } from 'src/app/services/apps-roles.service';
import { ToastrService } from 'ngx-toastr';
import { AppsRoles } from 'src/app/models/apps-roles';
import { NgForm } from '@angular/forms';
import { element } from '@angular/core/src/render3/instructions';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';

@Component({
  selector: 'app-aplications-roles-page',
  templateUrl: './aplications-roles-page.component.html',
  styleUrls: ['./aplications-roles-page.component.scss']
})
export class AplicationsRolesPageComponent implements OnInit {
  appsRolesList: AppsRoles[];
  constructor(private appsRolesService: AppsRolesService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.appsRolesService.getAppsRoles()
      .snapshotChanges()
        .subscribe(item =>{
          this.appsRolesList = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.appsRolesList.push(x as AppsRoles);
          });
        });
  }
  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')){
      this.appsRolesService.deleteAppsRoles($key);
      this.toastr.success('Operations success', 'Delete AppsRoles');
    }
  }
  onEdit(appsRoles: AppsRoles){
    this.appsRolesService.selectedAppsRoles = Object.assign({}, appsRoles);
  }
  onSubmit(appsRolesForm: NgForm){
    this.appsRolesService.updateAppsRoles(appsRolesForm.value);
    this.resetForm(appsRolesForm);
    this.toastr.success('Operation success', 'Update Job')
  }
  resetForm(appsRolesForm?: NgForm){
    if(appsRolesForm != null){
      appsRolesForm.reset();
      this.appsRolesService.selectedAppsRoles = new AppsRoles();
    }
  }
}
