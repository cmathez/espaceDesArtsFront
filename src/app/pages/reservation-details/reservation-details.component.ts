import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OeuvreService } from 'src/app/service/oeuvre.service';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {

  id:any;
  reservation:any;
  oeuvres:any;
  currentUser:any;
  idCurrentUser:any;

  constructor(private route:ActivatedRoute,
              private reservationEspaceService:ReservationEspaceService,
              private oeuvreService:OeuvreService) {
    this.id=this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.idCurrentUser = this.currentUser['idUtilisateur'];
    this.findAll();
  }

  findAll() {
    this.reservationEspaceService.findById(this.id).subscribe(data => {
      this.reservation = data;
      this.oeuvreService.findByEspaceExposition(this.reservation.espaceExposition.idEspaceExposition).subscribe (data => {this.oeuvres = data});
    });
  }

  deleteOeuvre(idOeuvre:any) {
    this.oeuvreService.delete(idOeuvre).subscribe(() => { this.findAll()});
  }
}
