import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Job } from '../models/job';
import {Admin} from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobList: AngularFireList <any>;
  adminList: AngularFireList <any>;
  selectedJob: Job = new Job();
  constructor(private firebase: AngularFireDatabase) { }
  getJob(){
    return this.jobList = this.firebase.list('kev/admins/-LSQ0ZjtixlCUxJLOayV/jobs');
  }
  insertJob(job: Job){
    this.jobList.push({
      id: job.id,
      name: job.name,
      description: job.description
    });
  }
  deleteJob($key: string){
    this.jobList.remove($key);
  }
  updateJob(job: Job){
    this.jobList.update(job.$key,{
      id: job.id,
      name: job.name,
      description: job.description
    });
  }
}
