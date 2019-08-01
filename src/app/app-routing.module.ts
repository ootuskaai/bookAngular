import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Error404Component } from './error404/error404.component';
import { ProductDescriptionComponentComponent } from './product-description-component/product-description-component.component';
import { SellerInfoComponentComponent } from './seller-info-component/seller-info-component.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'product/:id', component: ProductDetailComponent, 
    children: [
      { path:'', component: ProductDescriptionComponentComponent},
      { path: 'seller/:id', component: SellerInfoComponentComponent}
    ]
  },
  { path:'**', component: Error404Component}
];

//export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
