import { HttpClient } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseURL = "http://localhost:8080/gestionUtilisateur/utilisateur";

   constructor(private httpClient:HttpClient) { }
  
  public findAll():Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  public findByUsername(username:String):Observable<any> {
    return this.httpClient.get(this.baseURL + "/search/" + username);
  }

  public findById(id:number):Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }

  public delete(id:number):Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }

  public save(file:File, utilisateur:Utilisateur): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nom', utilisateur.nom);
    formData.append('prenom', utilisateur.prenom);
    formData.append('file', file);
    formData.append('username', utilisateur.username);
    formData.append('password', utilisateur.password);
    formData.append('mail', utilisateur.mail);
    formData.append('dateNaissance', utilisateur.dateNaissance);
    const req = new HttpRequest('POST', this.baseURL, formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public update(file:File, utilisateur:Utilisateur, id:number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nom', utilisateur.nom);
    formData.append('prenom', utilisateur.prenom);
    formData.append('file', file);
    formData.append('username', utilisateur.username);
    formData.append('password', utilisateur.password);
    formData.append('mail', utilisateur.mail);
    formData.append('dateNaissance', utilisateur.dateNaissance);
    const req = new HttpRequest('PUTT', this.baseURL, formData, {reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }
}