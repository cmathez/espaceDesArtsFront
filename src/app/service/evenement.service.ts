import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private baseURL = "http://localhost:8080/gestionEvenement/evenement";


  constructor(private httpClient: HttpClient) { }

  public findAllEvenement():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public deleteEvenement(id:number):Observable<any>{    
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public findById(id:number):Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }

  /*
  public saveEvenement(evenement:Evenement){
    return this.httpClient.post(this.baseURL,evenement);
   }*/

   saveEvenement(evenement:any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nomEvenement', evenement.nomEvenement);
    formData.append('dateDebut', evenement.dateDebut);
    formData.append('dateFin', evenement.dateFin);
    formData.append('description', evenement.description);
    formData.append('idReservationEspace', evenement.reservationEspace.idReservationEspace);
    console.log("voici ////// : " + evenement);
    
    const req = new HttpRequest('POST', this.baseURL + "/", formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

}
