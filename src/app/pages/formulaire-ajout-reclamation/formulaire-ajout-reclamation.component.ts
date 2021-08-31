import { Component, OnInit, Input } from '@angular/core';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-formulaire-ajout-reclamation',
  templateUrl: './formulaire-ajout-reclamation.component.html',
  styleUrls: ['./formulaire-ajout-reclamation.component.scss']
})
export class FormulaireAjoutReclamationComponent implements OnInit {
  @Input() idOeuvreASignaler:any;
  reclamation:any = {motif:"", commentaire:"", oeuvre: {idOeuvre: 0}, date:"", utilisateur: {idUtilisateur: 0}};
  idOeuvre:any;
  currentUser:any;
  idCurrentUser:any;

  constructor(private reclamationService:ReclamationService) {  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.idCurrentUser = this.currentUser['idUtilisateur'];
  }

  saveReclamation() {
    this.reclamation.oeuvre.idOeuvre = this.idOeuvreASignaler;
    this.reclamation.utilisateur.idUtilisateur = this.idCurrentUser;

    this.reclamationService.save(this.reclamation).subscribe(()=>{this.reclamation.motif="";this.reclamation.commentaire=""});
  }

}
