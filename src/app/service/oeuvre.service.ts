import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {

  private baseURL = "http://localhost:8080/gestionOeuvre";

   constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any> {
    return this.httpClient.get(this.baseURL + "/oeuvre");
  }

  public delete(id:number):Observable<any> {
    return this.httpClient.delete(this.baseURL + "/oeuvre/" + id)
  }

  public save(file:File, oeuvre:any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nomOeuvre', oeuvre.nomOeuvre);
    formData.append('description', oeuvre.description);
    formData.append('prix', oeuvre.prix);
    formData.append('idEspaceExposition', oeuvre.espaceExposition.idEspaceExposition);
    formData.append('file', file);
    const req = new HttpRequest('POST', this.baseURL + "/oeuvre", formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public findById(id:number):Observable<any> {
    return this.httpClient.get(this.baseURL + "/oeuvre/" + id);
  }

  public findByEspaceExposition(idEspace:number):Observable<any> {
    return this.httpClient.get(this.baseURL + "/espaceExposition/" + idEspace);
  }
}
