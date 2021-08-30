import { Component, OnInit } from '@angular/core';
import { ReservationEspace } from 'src/app/models/reservation-espace';
import { ReservationEspaceService } from 'src/app/service/reservation-espace.service';

@Component({
  selector: 'app-reservation-espace',
  templateUrl: './reservation-espace.component.html',
  styleUrls: ['./reservation-espace.component.scss']
})
export class ReservationEspaceComponent implements OnInit {
  reservationEspaces:any=null;
  reservationEspace:ReservationEspace = new ReservationEspace();
  idArtiste:number=null;
  idProprio:number;

  constructor(private reservationEspaceService: ReservationEspaceService) { }

  
  ngOnInit(): void {
    this.findAllReservationEspace();
  }

  findAllReservationEspace(){
    this.reservationEspaceService.findAllReservationEspace().subscribe(data=>{this.reservationEspaces = data;  console.log(data)});
    
  }

  deleteReservationEspace(id:number){
    this.reservationEspaceService.deleteReservationEspace(id).subscribe(()=>{this.findAllReservationEspace()})
  }

  saveReservationEspace(){
    this.reservationEspaceService.saveReservationEspace(this.reservationEspace).subscribe(()=>{this.findAllReservationEspace();
    this.reservationEspace = new ReservationEspace();
    })
   
  }

 
}
