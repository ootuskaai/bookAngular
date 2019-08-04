import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  // selector: 'product',
  // styles: ['.product {background: cyan}'],
  // template: `
  //   <div class="product">
  //     <h1>Product Detail for Product: {{ productID }}</h1>
  //     <router-outlet></router-outlet>
  //     <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
  //   </div>
  // `
  

  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  // productCatagory: string;
  // productID:string;
  // sellerId:number = 5678;

  // constructor(router:ActivatedRoute) { 
  //   this.productID = router.snapshot.paramMap.get('id');

  //   // router.paramMap.subscribe(x => {
  //   //    this.productID = x.get('id');
  //   // });

  //  // this.productCatagory = router.snapshot.queryParamMap.get('category');
  // }

  public Product: Product;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService){}

  ngOnInit() {
    const prodId: number = parseInt(
      this.route.snapshot.params['productId']);

    this.Product = this.productService.GetProductById(prodId);
  }

}
