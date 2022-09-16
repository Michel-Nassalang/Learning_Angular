import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  urlProd = 'http://localhost:8000/produits';
  getproduct(){
    return this.http.get<product[]>(this.urlProd);
  }
  getprod(id: number){
    return this.http.get<product>(this.urlProd + "/" + id);
  }
  postproduct(p:product){
    return this.http.post(this.urlProd, p);
  }
  deleteprod(id:number){
    return this.http.delete(this.urlProd+"/"+id);
  }
  updateprod(prod: product,type:string,val:number){
    if(type=='quantity'){
      return this.http.put(this.urlProd + "/" + prod.id,{"id":prod.id, "title":prod.title, "quantity":val, "notation":prod.notation, "price":prod.price});
    }else if(type=='notation'){
      return this.http.put(this.urlProd + "/" + prod.id, { "id": prod.id, "title": prod.title, "quantity": prod.quantity, "notation": val, "price": prod.price });
    }else{
      return 
    }
  }
}
