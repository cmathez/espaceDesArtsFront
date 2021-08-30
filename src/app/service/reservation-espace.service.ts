import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationEspace } from '../models/reservation-espace';

@Injectable({
  providedIn: 'root'
})
export class ReservationEspaceService {
  private baseURL = "http://localhost:8080/gestionReservationEspace/reservationEspace";

  constructor(private httpClient: HttpClient) { }

  public findAllReservationEspace():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public deleteReservationEspace(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public saveReservationEspace(reservationEspace:ReservationEspace){
   return this.httpClient.post(this.baseURL,reservationEspace);

 
  }



  
}
