import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }

  productList : product[] = [
    { id: 1, title: 'Bic', quantity: 12, notation: 4, price: 150 },
    { id: 2, title: 'Sac à dos', quantity: 7, notation: 10, price: 8000 },
    { id: 3, title: 'Cahier', quantity: 12, notation: 3, price: 3500 },
    { id: 4, title: 'Trousseau', quantity: 5, notation: 26, price: 500 },
    { id: 5, title: 'Crayon couleur', quantity: 0, notation: 13, price: 100 },
  ];

  getProduct(id: number){
    let prod = new product();
    for (let i = 0; i < this.productList.length; i++) {
      if(this.productList[i].id == id){
        prod = this.productList[i];
      }
    }
    return prod;
  }

}
