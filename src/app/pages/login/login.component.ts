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

  constructor(private appService : AppService, private httpClient : HttpClient, private routeur : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.appService.authenticate(this.credentials, () => {this.routeur.navigateByUrl("/user-home")});
    return false;
  }

}
