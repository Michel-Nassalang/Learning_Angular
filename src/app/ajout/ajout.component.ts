import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../models/product';
import { ElementsService } from '../services/elements.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  productList: product[];
  typeButton: string = "btn btn-primary my-3 align-self-center";
  constructor(private products : ProductsService) { }
  ngOnInit(): void {
    // this.productList = this.element.productList;
    this.products.getproduct().subscribe((data:product[])=>this.productList= data);
  }
  insert(f: NgForm) {
    const newP = new product();
    newP.id = this.productList.length + 1;
    newP.title = f.value['title'];
    newP.quantity = f.value['quantity'];
    newP.notation = f.value['notation'];
    newP.price = f.value['price'];
    // this.productList.push(newP);
    this.products.postproduct(newP).subscribe(()=>this.productList = [newP,...this.productList]);
    // f.value['title'] = "";
    this.typeButton = "btn btn-success my-3 align-self-center";
  }
  save() {

  }
}
