import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error=false;
  credentials = {username: '', password: ''}
  role:string;
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private appService : AppService, private httpClient : HttpClient, private routeur : Router) { }

  ngOnInit(): void {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(currentUser!=null){
      this.role = currentUser["roles"][0]['libelle'];
      if(this.role=='user'){
        this.routeur.navigateByUrl("/user-home");
      }else{
        this.routeur.navigateByUrl("/page-acceuil");
      }

    }
  }

  login(){
    this.appService.authenticate(this.credentials, () => {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.role = currentUser["roles"][0]['libelle'];
    if(this.role=='user'){
      this.routeur.navigateByUrl("/user-home");
    }else{
      this.routeur.navigateByUrl("/page-acceuil");
    }});
      
    return false;
  }

}
