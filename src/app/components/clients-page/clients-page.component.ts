import { Component, OnInit } from '@angular/core';

import { clientService } from 'src/app/services/clients.service';
import { ToastrService } from 'ngx-toastr';
import { Clients } from 'src/app/models/clients';
import { NgForm } from '@angular/forms';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  clientList: Clients[];
  constructor(private clientService: clientService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.clientService.getClient()
      .snapshotChanges()
        .subscribe(item =>{
          this.clientList = [];
          item.forEach(element =>{
            let x = element.payload.toJSON();
            x["$key"] = element.payload.toJSON();
            this.clientList.push(x as Clients);
          });
        });
  }
  onDelete($key: string){
    if(confirm('Are you sure you want to delete it?')){
      this.clientService.deleteClient($key);
      this.toastr.success('Operations success', 'Delete Clients');
    }
  }
  onEdit(Clients: Clients){
    this.clientService.selectedClient = Object.assign({}, Clients);
  }
  onSubmit(clientsForm: NgForm){
    this.clientService.updateClient(clientsForm.value);
    this.resetForm(clientsForm);
    this.toastr.success('Operation success', 'Update Clients')
  }
  resetForm(clientsForm?: NgForm){
    if(clientsForm != null){
      clientsForm.reset();
      this.clientService.selectedClient = new Clients();
    }
  }
}
