import { Component, OnInit } from '@angular/core';


import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();

  }
  onSubmit(productForm: NgForm){
    this.productService.insertProducts(productForm.value);
  }
  

}
