import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private baseURL = "http://localhost:8080/gestionAvis";

  constructor(private httpClient:HttpClient) { }

  save(avis:any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('titre', avis.titre);
    formData.append('commentaire', avis.commentaire);
    formData.append('idOeuvre', avis.oeuvre.idOeuvre);
    formData.append('idUtilisateur', avis.utilisateur.idUtilisateur);
    const req = new HttpRequest('POST', this.baseURL + "/avis", formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  delete(id:any) {
    this.httpClient.delete(this.baseURL + "/" + id);
  }

  findByIdOeuvre(idOeuvre:number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/oeuvre/" + idOeuvre);
  }
}
