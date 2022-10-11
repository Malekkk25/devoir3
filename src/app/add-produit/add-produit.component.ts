import { Component, OnInit } from '@angular/core';
import { ProduitsComponent } from '../produits/produits.component';
import { produit } from '../model/produit.model';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  
})
export class AddProduitComponent implements OnInit {
newProduit= new produit();
  constructor() { }

  ngOnInit(): void {
  }
addProduit(){
  console.log(this.newProduit);
}
}
