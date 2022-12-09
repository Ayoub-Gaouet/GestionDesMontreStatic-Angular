import { Marque } from './model/marque.model';
import { Injectable } from '@angular/core';
import { Montre } from './model/montre.model';
@Injectable({
  providedIn: 'root'
})
export class MontreService {
  montres: Montre[];
  montre!:Montre;
  marque:Marque[];
  montresRecherche!: Montre[];
  constructor() {  
    this.marque = [ {idMar : 1, nomMar : "Rolex"},
                    {idMar : 2, nomMar : "Apple"}
                  ];
    this.montres = [
    {idMontre : 1, nomMontre : "Appel watch", prixMontre : 3000.600, dateCreation : new Date("01/14/2011"),marque : {idMar : 1, nomMar : "Appel"}},
    {idMontre : 2, nomMontre : "Lennox dorée", prixMontre : 450, dateCreation : new Date("12/17/2010"),marque : {idMar : 2, nomMar : "Rolex"}},
    {idMontre : 3, nomMontre :"Lennox argent", prixMontre : 900.123, dateCreation : new Date("02/20/2020"),marque : {idMar : 3, nomMar : "Rolex"}}
    ]; 
  }
  listeMarque():Marque[] {
    return this.marque;
    }
  listeMontres(): Montre[] {
    return this.montres;
  }
  ajouterMontre(mon: Montre) {
    this.montres.push(mon);
  }
  supprimerMontre( mon: Montre){
    const index = this.montres.indexOf(mon, 0);
    if (index > -1) {
    this.montres.splice(index, 1);
    }
  }
  consulterMarque(id:number): Marque{
    return this.marque.find(mar => mar.idMar == id)!;
    }
  consulterMontre(id:number): Montre{
    this.montre = this.montres.find(m => m.idMontre == id)!;
    return this.montre;
    }
    trierMontres(){
      this.montres = this.montres.sort((n1,n2) => {
      if (n1.idMontre! > n2.idMontre!) 
      {
      return 1;
      }
      if (n1.idMontre! < n2.idMontre!) {
      return -1;
      }
      return 0;
      });
      }
    updateMontre(a:Montre)
    {
    // console.log(p);
    this.supprimerMontre(a);
    this.ajouterMontre(a);
    this.trierMontres();
    }
    rechercherParMarque(idCat: number): Montre[]{
      this.montresRecherche = [];
     
      this.montres.forEach((cur, index) => {
       if(idCat == cur.marque?.idMar) {
           console.log("cur "+cur);
          this.montresRecherche.push(cur);
           }
     });
     return this.montresRecherche;
     }
}
