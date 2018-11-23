import { Component, OnInit } from '@angular/core';


import {JobService} from '../../services/job.service';

import {Job} from '../../models/job'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-job',
  templateUrl: './register-job.component.html',
  styleUrls: ['./register-job.component.scss']
})
export class RegisterJobComponent implements OnInit {

  constructor(private jobService: JobService ) { }

  ngOnInit() {
    this.jobService.getJob();

  }
  onSubmit(jobForm: NgForm){
    if (jobForm.value.$key == null)
      this.jobService.insertJob(jobForm.value);
    else
     this.jobService.updateJob(jobForm.value);
     this.resetForm(jobForm); 
  }
  resetForm(jobForm?: NgForm){
    if(jobForm != null){
      jobForm.reset();
      this.jobService.selectedJob = new Job();
    }
  }
  

}
