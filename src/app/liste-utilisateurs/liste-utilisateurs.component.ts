import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.scss']
})
export class ListeUtilisateursComponent implements OnInit {
  utilisateurs:any;

  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data});
  }

  delete(id:any) {
    this.utilisateurService.delete(id).subscribe(() => {this.findAll()});
  }

}
