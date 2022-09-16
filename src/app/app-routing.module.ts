import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

let routes: Routes = [
  {path:'',component:ProductComponent},
  { path: 'acceuil', component: AppComponent },
  { path: 'produits', component: ProductComponent },
  { path: 'ajout', component: AjoutComponent },
  { path: 'produits/:id', component: DetailProductComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
