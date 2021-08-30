import { Component, OnInit } from '@angular/core';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-espaces-home',
  templateUrl: './espaces-home.component.html',
  styleUrls: ['./espaces-home.component.scss']
})
export class EspacesHomeComponent implements OnInit {
  reservationEspaces:any;
  role:string;

  constructor(private reservationEspaceService:ReservationEspaceService) {}

  ngOnInit(): void {
    this.findAll();
    this.role = sessionStorage.getItem('role');

  }

  findAll() {
    this.reservationEspaceService.findByAccepte().subscribe(data => {this.reservationEspaces = data});
  }
}
