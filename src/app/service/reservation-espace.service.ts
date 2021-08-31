import { HttpClient, HttpRequest } from '@angular/common/http';
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

  public findByAccepte():Observable<any> {
    return this.httpClient.get(this.baseURL + "/expositions");
  }
  




  public findAll():Observable<any> {
    return this.httpClient.get(this.baseURL + "/reservationEspace");
  }

  public findById(id:any):Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id); ///reservationEspace
  }

  

  public save(reservation:any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nom', reservation.nom);
    formData.append('dateDebut', reservation.dateDebut);
    formData.append('dateFin', reservation.dateFin);
    formData.append('idUtilisateur', reservation.artiste.idUtilisateur);
    formData.append('idEspaceExposition', reservation.espaceExposition.idEspaceExposition);
    const req = new HttpRequest('POST', this.baseURL + "/reservationEspace", formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public update( id:number): Observable<any> {
    
    //const formData: FormData = new FormData();
    let reservationEspace = new ReservationEspace();
    reservationEspace.idReservationEspace=String(id);/*
    formData.append('idReservationEspace',reservationEspace.idReservationEspace);
    formData.append('nom', reservation.nom);
    formData.append('dateDebut', reservation.dateDebut);
    formData.append('dateFin', reservation.dateFin);
    formData.append('idUtilisateur', reservation.artiste.idUtilisateur);
    formData.append('idEspaceExposition', reservation.espaceExposition.idEspaceExposition);*/
    const req = new HttpRequest('PUT', this.baseURL + "/"+ id, reservationEspace, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
    //return this.httpClient.put(this.baseURL+"/"+id);

  }
  
}
