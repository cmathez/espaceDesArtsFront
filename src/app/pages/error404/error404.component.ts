import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private routeur:Router) { }

  ngOnInit(): void {
  }

  retourAccueil(){
    let role = sessionStorage.getItem('role');
    console.log("role" + role);
    if(role=='user'){
      this.routeur.navigateByUrl("/user-home");
    }else{
      this.routeur.navigateByUrl("/page-acceuil");
    }
  }
}
