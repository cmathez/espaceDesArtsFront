import { Component, OnInit } from '@angular/core';
import { ReservationEspaceService } from '../../service/reservation-espace.service';

@Component({
  selector: 'app-liste-expositions-artiste',
  templateUrl: './liste-expositions-artiste.component.html',
  styleUrls: ['./liste-expositions-artiste.component.scss']
})
export class ListeExpositionsArtisteComponent implements OnInit {
  expositions:any;
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  idArtiste = this.currentUser['idUtilisateur'];

  constructor(private reservationEspaceService:ReservationEspaceService) { }

  ngOnInit(): void {
    this.findExpos();
  }

  findExpos() {
    this.reservationEspaceService.findByAccepteAndIdArtiste(this.idArtiste).subscribe(data=>{this.expositions=data});
  }

}
