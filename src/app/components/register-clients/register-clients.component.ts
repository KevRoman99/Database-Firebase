import { Component, OnInit } from '@angular/core';

import { Clients } from 'src/app/models/clients';
import { clientService } from 'src/app/services/clients.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.scss']
})
export class RegisterClientsComponent implements OnInit {

  constructor(private clientService: clientService){}

  ngOnInit() {
    this.clientService.getClient();
  }
  onSubmit(clientsForm: NgForm){
    if (clientsForm.value.$key == null)
      this.clientService.insertClient(clientsForm.value);
    else
     this.clientService.updateClient(clientsForm.value);
     this.resetForm(clientsForm); 
  }
  resetForm(clientsForm?: NgForm){
    if(clientsForm != null){
      clientsForm.reset();
      this.clientService.selectedClient = new Clients();
    }
  }

}