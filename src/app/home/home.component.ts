import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public Products: Product[] = [];
  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.Products = this.productService.GetProducts();
    console.debug("test: ", this.Products);
  }

}
