import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  utilisateur:any = {
    dateNaissance:"",
    mail:"",nom:"",
    prenom:"",
    password:"",
    username:"",
    roles: {idRole:0},}

  selectedFile:any;
  currentFileUpload:any;

  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {
  }

  selectFile(event:any) {
    this.selectedFile = event.target.files;
  }

  saveUtilisateur() {
    this.currentFileUpload = this.selectedFile.item(0);

    this.utilisateurService.save(this.currentFileUpload, this.utilisateur).subscribe(() => {this.utilisateur = {
      dateNaissance:"",
      mail:"",nom:"",
      prenom:"",
      password:"",
      username:"",
      roles: {idRole:0},}});
      this.router.navigateByUrl('/login');
  }

}