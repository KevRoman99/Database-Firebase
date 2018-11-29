import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Clients } from '../models/clients';
@Injectable({
  providedIn: 'root'
})
export class clientService {

clientList: AngularFireList <any>;
selectedClient: Clients = new Clients();
  constructor(private firebase: AngularFireDatabase) { }
getClient(){
  return this.clientList = this.firebase.list('Clients')
}
insertClient(clients: Clients){
  this.clientList.push({
    id: clients.id,
    name: clients.name,
    country: clients.country,
    contact: clients.contact
  });
  }
  deleteClient($key: string){
    this.clientList.remove($key);
  }
  updateClient(Clients: Clients){
    this.clientList.update(Clients.$key,{
      id: Clients.id,
      name: Clients.name,
      country: Clients.country,
      contact: Clients.contact
    });
  }
}
