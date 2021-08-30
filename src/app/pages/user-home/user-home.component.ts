import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

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
