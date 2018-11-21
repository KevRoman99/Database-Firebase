import { Component, OnInit } from '@angular/core';

//fireBase
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
//class
import { Admin } from 'src/app/models/admin';
//Services 
import {AdminService} from '../../services/admin.service'
import { ToastrService } from 'ngx-toastr';
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-job-positions-page',
  templateUrl: './job-positions-page.component.html',
  styleUrls: ['./job-positions-page.component.scss']
})
export class JobPositionsPageComponent implements OnInit {
  adminList: Admin[];
  constructor(private adminService: AdminService,
      private flashMessagesServices: FlashMessagesService) { }

  ngOnInit() {
    this.adminService.getAdmins()
      .snapshotChanges()
        .subscribe(item =>{
          this.adminList = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.adminList.push(x as Admin);
          });
        });
  }
  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')){
      this.adminService.deleteAdmin($key);
      this.flashMessagesServices.show('Usuario Creado Correactamente!',
      {cssClass: 'alert-success', timeout: 4000});
    }
  }
  onEdit(admin: Admin){
    this.adminService.selectedAdmin = Object.assign({}, admin);
  }

}
