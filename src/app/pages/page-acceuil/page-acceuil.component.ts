import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.scss']
})
export class PageAcceuilComponent implements OnInit {
  currentUser:any;

  constructor() { }

  ngOnInit(): void {
    this.currentUser  = JSON.parse(sessionStorage.getItem('currentUser'));

  }

}
