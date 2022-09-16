import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../models/product';
import { ElementsService } from '../services/elements.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private products: ProductsService) { }
  id: number;
  product : product;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.product = this.element.getProduct(this.id);
    this.products.getprod(this.id).subscribe((data: product) => this.product = data);
  }

  // achat(id: number) {
  //   for (let i = 0; i < this.element.productList.length; i++) {
  //     if (this.element.productList[i].id == id) {
  //       this.element.productList[i].quantity--;
  //     }
  //   }
  // }
  // note(id: number) {
  //   for (let i = 0; i < this.element.productList.length; i++) {
  //     if (this.element.productList[i].id == id) {
  //       this.element.productList[i].notation++;
  //     }
  //   }
  // }
  achat(prod: product){
    this.product.quantity--
    const val = this.product.quantity;
    this.products.updateprod(prod,'quantity',val)?.subscribe(()=>this.product.quantity = val);
  }
  note(prod: product){
    this.product.notation++;
    const val = this.product.notation;
    this.products.updateprod(prod, 'notation', val)?.subscribe(()=>this.product.notation = val);
  }

}
