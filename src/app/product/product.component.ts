import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../models/product';
import { ElementsService } from '../services/elements.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: product[];
  isActive: boolean = false;
  priceMax: number;
  proTitle: string;
  article: string = "Fournitures";
  newProd: product;
  @Output() productpack = new EventEmitter<product[]>();
  constructor(private products :ProductsService) { }
  
  ngOnInit(): void {
    // this.productList = this.element.productList;
    this.products.getproduct().subscribe(
      (data: product[]) => this.productList = data
    );
  }
  // achat(id: number) {
  //   for (let i = 0; i < this.productList.length; i++) {
  //     if (this.productList[i].id == id) {
  //       this.productList[i].quantity--;
  //     }
  //   }
  // }
  // note(id:number){
  //   for (let i = 0; i < this.productList.length; i++) {
  //     if (this.productList[i].id == id) {
  //       this.productList[i].notation++;
  //     }
  //   }
  // }
  achat(prod: product) {
    prod.quantity--
    const val = prod.quantity;
    this.products.updateprod(prod, 'quantity', val)?.subscribe(() => prod.quantity = val);
  }
  note(prod: product) {
    prod.notation++;
    const val = prod.notation;
    this.products.updateprod(prod, 'notation', val)?.subscribe(() => prod.notation = val);
  }
  insertion(newProduct: product){
    newProduct.id = this.productList.length+1;
    this.productList.push(newProduct);
  }
  pack(prodList: product[]){
    this.productpack.emit(prodList);
  }
}
