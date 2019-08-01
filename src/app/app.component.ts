import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'nga-root',
  // template: `
  // <a [routerLink]="['/']">Home</a>
  // <a [routerLink]="['/product']"">Product detail</a>
  // <router-outlet></router-outlet>
  // `

  // template:`
  // <a [routerLink]="['/']">Home </a>
  // <a [routerLink]="['/product', productId]">Product detail </a>
  // <button (click)="NavigateToProductDetail()">Product Details</button>
  // <router-outlet></router-outlet>
  // `


  selector: 'nga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //public title:string = 'ngAuction';
  productId:number = 1234;

  constructor(private router: Router) {}

  public NavigateToProductDetail() {
    //this.router.navigate(["/product"], {skipLocationChange: true}); 
    this.router.navigate(["/product"], {queryParams: { category: 'sports'}}); 
  }

}
