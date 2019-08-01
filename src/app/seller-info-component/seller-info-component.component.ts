import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'seller',
  template: 'The seller is Ting Laing, id {{ sellerID }}',
  styles: [':host {background: yellow}']
})
export class SellerInfoComponentComponent implements OnInit {

  public sellerID:string;

  constructor(private route:ActivatedRoute) { 
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

}
