import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../models/product';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  erInsert: boolean = true;
  @Input() typeArticle: string;
  title: string;
  quantity: number;
  notation: number;
  price: number;
  datapro: product;
  btn: string = " btn btn-secondary";
  
  @Output() insprod = new EventEmitter<product>();
  @Output() stock: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  envoyer(){
    if(this.title!=null && this.title!="" && this.quantity!=null && this.notation!=null && this.price!=null){
      this.datapro = { id: 0, title: this.title, quantity: this.quantity, notation: this.notation, price: this.price };
      this.insprod.emit(this.datapro);
      this.erInsert = true;
      this.title = "";
      this.quantity = this.notation = this.price = 0;
      this.btn = "btn btn-success";
    }else{
      this.erInsert = false;
      this.btn="btn btn-warning";
    }
  }
}
