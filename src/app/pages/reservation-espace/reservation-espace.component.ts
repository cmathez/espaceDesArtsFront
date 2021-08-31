import { Component, OnInit } from '@angular/core';
import { ReservationEspace } from 'src/app/models/reservation-espace';
import { EvenementService } from 'src/app/service/evenement.service';
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
 
  role:string;
  idProprio:string;
  idReservation:string;
  etatChoixEvenement:boolean=false;
  etatListeReservation:boolean=true;
  etatListeEnAttenteConfirmation:boolean=false;
  constructor(private reservationEspaceService: ReservationEspaceService ) { }

  
  ngOnInit(): void {
    this.findAllReservationEspace();
    

    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.role = currentUser["roles"][0]['libelle'];
    console.log(currentUser);
    if(this.role=="proprio"){
      this.idProprio = String(currentUser["idUtilisateur"]);

      console.log("id proprio  : " + this.idProprio);
    }
  }

  findAllReservationEspace(){
    this.reservationEspaceService.findAllReservationEspace().subscribe(data=>{this.reservationEspaces = data;  console.log(data)});
    
  }

  deleteReservationEspace(id:number){
    this.reservationEspaceService.deleteReservationEspace(id).subscribe(()=>{this.findAllReservationEspace()})
  }

  accepterReservation(id:number){
    this.reservationEspaceService.update(id).subscribe(()=>{this.findAllReservationEspace()});
  }
  

  saveReservationEspace(){
    this.reservationEspaceService.saveReservationEspace(this.reservationEspace).subscribe(()=>{this.findAllReservationEspace();
    this.reservationEspace = new ReservationEspace();
    })
   
  }

  setIdReservation(id:string){
    this.idReservation = id;
    console.log(this.idReservation);
    
  }
 
  modifierEtatChoixEvenement(){
    this.etatChoixEvenement=true;
    this.etatListeReservation=false;
  }
  modifieretatListeReservation(){
    this.etatChoixEvenement=false;
    this.etatListeReservation=true;

  }

  modifierEtatListeEnAttenteConfirmation(){
    this.etatListeEnAttenteConfirmation=!this.etatListeEnAttenteConfirmation;
  }
 
}
