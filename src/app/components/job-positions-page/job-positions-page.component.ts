import { Component, OnInit } from '@angular/core';

//fireBase
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
//class
import { Admin } from 'src/app/models/admin';
//Services 
import {AdminService} from '../../services/admin.service'
import { ToastrService } from 'ngx-toastr';
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-job-positions-page',
  templateUrl: './job-positions-page.component.html',
  styleUrls: ['./job-positions-page.component.scss']
})
export class JobPositionsPageComponent implements OnInit {
  adminList: Admin[];
  /////////holansdkjhsdofdsjhgfghyjukijhgfdcxscdfvghjikjgfcdxscdfvghj
  constructor(private adminService: AdminService,
      public toastrService: ToastrService) { }

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
      this.toastrService.success('Successfull Operation', 'Admin Deleted')
    }
  }
  onEdit(admin: Admin){
    this.adminService.selectedAdmin = Object.assign({}, admin);
  }

}
