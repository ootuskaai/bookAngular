import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = [];

  constructor(){
    this._products = [
      new Product
      (
        0, 
        'First Product',
         24.99, 
         4.3, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Hardware']
      ),
      new Product
      (
        1, 
        'Second Product',
         64.99, 
         3.5, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Firmware']
      ),
      new Product
      (
        2, 
        'Third Product',
         74.99, 
         4.2, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Software']
      ),
      new Product
      (
        3, 
        'Fourth Product',
         84.99, 
         3.9, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Firmware']
      ),
      new Product
      (
        4, 
        'Fifth Product',
         94.99, 
         5, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Software']
      ),
      new Product
      (
        5, 
        'Sixth Product',
         54.99, 
         4.6, 
         'This is a short description. For test product item detail description.', 
         ['Electronics','Software']
      ),
    ];
  }

  public GetProducts() : Product[] {
    return this._products.map(p => new Product(p.Id, p.Title, p.Price, p.Rating, p.Description, p.Categories));
  }

  public GetProductById(productId: number) : Product {
    return this._products.find( p => p.Id === productId);
  }

  // public GetProducts(): Product[] {
  //   return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  // }

  // public GetProductById(productId:number): Product {
  //   return products.find( p => p.id == productId);
  // }
}

export class Product {
  constructor
  (
    public Id: number,
    public Title: string,
    public Price: number,
    public Rating: number,
    public Description: string,
    public Categories: string[]
  ){}
}


