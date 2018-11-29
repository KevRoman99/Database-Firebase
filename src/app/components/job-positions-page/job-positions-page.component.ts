import { Component, OnInit } from '@angular/core';

//fireBase
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
//class
import { Admin } from 'src/app/models/admin';
//Services 
import {JobService} from '../../services/job.service'
import { ToastrService } from 'ngx-toastr';
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";
import { element } from '@angular/core/src/render3/instructions';
import { Job } from 'src/app/models/job';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-job-positions-page',
  templateUrl: './job-positions-page.component.html',
  styleUrls: ['./job-positions-page.component.scss']
})
export class JobPositionsPageComponent implements OnInit {
  jobList: Job[];
  constructor(private jobService: JobService,
      private toastr: ToastrService) { }

  ngOnInit() {
    /*
      .snapshotChanges()
        .subscribe(item =>{
          this.jobList = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.jobList.push(x as Job);
          });
        });*/
  }
  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')){
      this.jobService.deleteJob($key);
      this.toastr.success('Operations success', 'Delete Job');
    }
  }
  onEdit(job: Job){
    this.jobService.selectedJob = Object.assign({}, job);
  }
  onSubmit(jobForm: NgForm){
    this.jobService.updateJob(jobForm.value);
    this.resetForm(jobForm);
    this.toastr.success('Operations success', 'Update Job')
  }
  resetForm(jobForm?: NgForm){
    if(jobForm != null){
      jobForm.reset();
      this.jobService.selectedJob = new Job();
    }
  }

}
