import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './models/utilisateur';
import { LoginComponent } from './pages/login/login.component';
import { UtilisateurService } from './service/utilisateur.service';





@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;
  currentUsername : string = '';
  role : string ='';
  currentUser: Utilisateur;

  constructor(private httpClient:HttpClient, private utilisateurService: UtilisateurService) { }

  authenticate(credentials, callback){

    const headers = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' +credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:8080/login/user', {headers:headers}).subscribe( response =>{
      if(response['username']){
        this.currentUsername = response['username'];
        console.log(this.currentUsername);
        this.role = response['roles'][0]['libelle']
        console.log(this.role);
       sessionStorage.setItem('currentUser', JSON.stringify(response));

        
      
      this.authenticated = true;
      }
      else{
      this.authenticated = false;

      }
    return callback & callback();
    });
  }
}
