import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationEspaceService {

  private baseURL = "http://localhost:8080/gestionReservationEspace";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any> {
    return this.httpClient.get(this.baseURL + "/reservationEspace");
  }

  public findById(id:any):Observable<any> {
    return this.httpClient.get(this.baseURL + "/reservationEspace/" + id);
  }

  public findByAccepte():Observable<any> {
    return this.httpClient.get(this.baseURL + "/expositions");
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
}