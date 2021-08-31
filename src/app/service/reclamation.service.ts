import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseURL = "http://localhost:8080/gestionReclamation/reclamation";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  save(reclamation:any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('motif', reclamation.motif);
    formData.append('commentaire', reclamation.commentaire);
    formData.append('idOeuvre', reclamation.oeuvre.idOeuvre);
    formData.append('idUtilisateur', reclamation.utilisateur.idUtilisateur);
    const req = new HttpRequest('POST', this.baseURL, formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  delete(id:any): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }
}
