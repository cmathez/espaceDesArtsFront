import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { ReservationEspace } from 'src/app/models/reservation-espace';
import { EvenementService } from 'src/app/service/evenement.service';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  evenements: any = null;
  //evenement: Evenement = new Evenement();
  evenement: any = { nomEvenement: "", dateDebut: "", dateFin: "", description: "", reservationEspace: { idReservationEspace: 0 } };

  etatAjouterEvenement = false;
  etatListeEvenement = true;
  etatAssocierEvenement: boolean;
  reservationEspaces: any = null;
  reservationEspace: ReservationEspace = new ReservationEspace();

  constructor(private evenementService: EvenementService, private router: Router, private reservationEspaceService: ReservationEspaceService) { }

  ngOnInit(): void {
    this.findAllEvenement();
    this.findAllReservationEspace();
  }

  

  findAllEvenement() {
    this.evenementService.findAllEvenement().subscribe(data => {
      this.evenements = data, console.log(data);
    })
  }

  deleteEvenement(id: number) {
    this.evenementService.deleteEvenement(id).subscribe(() => { this.findAllEvenement() })
  }

  saveEvenement() {

    this.evenementService.saveEvenement(this.evenement).subscribe(() => {
      this.evenement = { nomEvenement: "", dateDebut: "", dateFin: "", description: "", reservationEspace: { idReservationEspace: 0 } };
      this.findAllEvenement();

    })

  }

  modifierEtatAjoutEvenement() {
    this.etatListeEvenement = false;
    this.etatAjouterEvenement = true;
  }

  modifierEtatListEvenement() {
    this.etatListeEvenement = true;
    this.etatAjouterEvenement = false;
  }

  modifierEtatAssocierEvenementFalse() {
    this.etatAssocierEvenement = false;
  }
  modifierEtatAssocierEvenementTrue() {
    this.etatAssocierEvenement = true;
  }
  findAllReservationEspace() {
    this.reservationEspaceService.findAllReservationEspace().subscribe(data => { this.reservationEspaces = data; console.log(data) });

  }

  findByIdReservationEspace(id: number) {
    this.reservationEspaceService.findById(id).subscribe(data => { this.reservationEspace = data; console.log(data) });
  }



}
