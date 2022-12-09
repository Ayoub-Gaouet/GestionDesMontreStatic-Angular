import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Montre } from '../model/montre.model';
import { MontreService } from '../montre.service';

@Component({
  selector: 'app-update-montre',
  templateUrl: './update-montre.component.html',
  styles: [
  ]
})
export class UpdateMontreComponent implements OnInit {
  marque! : Marque[];
  updatedMarId! : number;
  currentMontre = new Montre();
  constructor(private activatedRoute: ActivatedRoute,
  private montreService: MontreService,private router :Router) { }
  
  ngOnInit(): void {
    this.marque = this.montreService.listeMarque();
    this.currentMontre =
    this.montreService.consulterMontre(this.activatedRoute.snapshot.params['id']);
    this.updatedMarId!=this.currentMontre.marque?.idMar;
    }
    updateMontre() {
      this.currentMontre.marque=this.montreService.consulterMarque(this.updatedMarId);
      this.montreService.updateMontre(this.currentMontre);
      this.router.navigate(['montres']);
      }
}
