import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Montre } from '../model/montre.model';
import { MontreService } from '../montre.service';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
  styleUrls: ['./montres.component.css']
})
export class MontresComponent implements OnInit {
  montres! : Montre[]; 
  constructor(private montreService :MontreService,
    public authService: AuthService) { this.montres = montreService.listeMontres();}

  ngOnInit(): void {
  }
  supprimerMontre(m: Montre)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.montreService.supprimerMontre(m);
  }

}
