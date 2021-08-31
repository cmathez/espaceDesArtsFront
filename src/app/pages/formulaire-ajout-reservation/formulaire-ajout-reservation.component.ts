import { Component, Input, OnInit } from '@angular/core';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-formulaire-ajout-reservation',
  templateUrl: './formulaire-ajout-reservation.component.html',
  styleUrls: ['./formulaire-ajout-reservation.component.scss']
})
export class FormulaireAjoutReservationComponent implements OnInit {

  @Input() idEspaceExposition:any;
  reservation: any = {
    nom: "",
    dateDebut: "",
    dateFin: "",
    artiste: {
      idUtilisateur: 0
    },
    espaceExposition: {
      idEspaceExposition: 0
    }
  };
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  idArtiste = this.currentUser['idUtilisateur'];

  constructor(private reservationEspaceService:ReservationEspaceService) {
   }

  ngOnInit(): void {
  }

  saveReservation() {
    this.reservation.artiste.idUtilisateur = this.idArtiste;
    this.reservation.espaceExposition.idEspaceExposition = this.idEspaceExposition;

    this.reservationEspaceService.save(this.reservation).subscribe(() => {this.reservation.nom=""; this.reservation.dateDebut=""; this.reservation.dateFin="";});
  }

}
