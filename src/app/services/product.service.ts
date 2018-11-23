import { Injectable } from '@angular/core';


import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

import {Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product = new Product(); 
  productList: AngularFireList <any>;

  constructor(private firebase: AngularFireDatabase) { }

  getProducts(){
    return this.productList = this.firebase.list('products');
  }
  insertProducts(product: Product){
    this.productList.push({
      id: product.id,
      description: product.description,
      solution: product.solution
    });
  }
  updateProduct(product: Product){
    this.productList.update(product.$key,{
      id: product.id,
      description: product.description,
      solution: product.solution
    });
  }
  deleteProduct($key: string){
    this.productList.remove($key);
  }


}
