import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Montre } from '../model/montre.model';
import { MontreService } from '../montre.service';

@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
  styleUrls: ['./add-montre.component.css']
})
export class AddMontreComponent implements OnInit {
  newMontre= new Montre();
  marque! : Marque[];
  newIdMar! : number;
  newMarque! : Marque;
  constructor(private montreService: MontreService,
              private router :Router) { }

  ngOnInit(): void {
    this.marque = this.montreService.listeMarque();
  }
  addMontre(){
    this.newMarque=
    this.montreService.consulterMarque(this.newIdMar);
    this.newMontre.marque = this.newMarque;
    this.montreService.ajouterMontre(this.newMontre);
    this.router.navigate(['montres']);
    }
}
