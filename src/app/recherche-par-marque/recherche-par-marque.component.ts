import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Montre } from '../model/montre.model';
import { MontreService } from '../montre.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  montres!: Montre[];
  marque! : Marque[];
  IdMarque!:number;

  constructor(private montreService: MontreService) { }

  ngOnInit(): void {
    this.marque=this.montreService.listeMarque();
    this.montres=[];
  }

onChange(){
  console.log(this.IdMarque);
  this.montres=this.montreService.rechercherParMarque(this.IdMarque);
}
supprimerMontre(p:Montre)
{
  let conf=confirm('Etes-vous sur?');
  if(conf)
  {
    this.montreService.supprimerMontre(p);
    this.montres=this.montreService.rechercherParMarque(this.IdMarque);
  }
}
}
