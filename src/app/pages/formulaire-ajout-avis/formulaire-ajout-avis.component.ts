import { Component, OnInit, Input } from '@angular/core';
import { AvisService } from 'src/app/service/avis.service';

@Component({
  selector: 'app-formulaire-ajout-avis',
  templateUrl: './formulaire-ajout-avis.component.html',
  styleUrls: ['./formulaire-ajout-avis.component.scss']
})
export class FormulaireAjoutAvisComponent implements OnInit {

  @Input() idOeuvreACommenter:any;
  avis:any = {titre:"", commentaire:"", oeuvre: {idOeuvre: 0}, date:"", utilisateur: {idUtilisateur: 0}};
  currentUser:any;
  idCurrentUser:any;

  constructor(private avisService:AvisService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.idCurrentUser = this.currentUser['idUtilisateur'];
  }

  saveAvis() {
    this.avis.oeuvre.idOeuvre = this.idOeuvreACommenter;
    this.avis.utilisateur.idUtilisateur = this.idCurrentUser;

    this.avisService.save(this.avis).subscribe(()=>{this.avis.titre="";this.avis.commentaire=""});
  }

}
