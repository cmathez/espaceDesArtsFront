import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspaceExposition } from 'src/app/models/espace-exposition';
import { EspaceExpositionService } from 'src/app/service/espace-exposition.service';

@Component({
  selector: 'app-espace-exposition',
  templateUrl: './espace-exposition.component.html',
  styleUrls: ['./espace-exposition.component.scss']
})
export class EspaceExpositionComponent implements OnInit {

  espaceExpositions: any = null;
  espaceExposition: EspaceExposition = new EspaceExposition();
  selectedFiles: FileList;
  currentFileUpload: File;
  nomSalle: string = "";
  etatListeEspaceExposition: boolean = true;
  etatAjoutEspaceExposition: boolean = false;
  etatListeEvenement: boolean = false;
  staticAlertAjoutClosed: boolean = true;
  staticAlertAjoutTitre: string = "";
  staticAlertDeleteClosed: boolean = true;
  staticAlertDeleteTitre: string = "";
  etatListeReservation: boolean = false;

  role:string;
  idProprio:string;

  constructor(private espaceExpositionService: EspaceExpositionService, private router: Router) { }



  ngOnInit(): void {
    this.findAllEspaceExposition();
    
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.role = currentUser["roles"][0]['libelle'];
    //console.log(currentUser);
    if(this.role=="proprio"){
      this.idProprio = String(currentUser["idUtilisateur"]);

      console.log("id proprio  : " + this.idProprio);
    }
  
    


  }

  modifierEtatAjoutEspaceExposition() {
    this.etatAjoutEspaceExposition = true;
    this.etatListeEspaceExposition = false;
    this.etatListeReservation = false;
    this.etatListeEvenement = false;

  }

  modifierEtatListeReservation() {
    this.etatListeReservation = true;
    this.etatAjoutEspaceExposition = false;
    this.etatListeEspaceExposition = false;
    this.etatListeEvenement = false;

  }

  modifierEtatListeEspaceExposition() {
    this.etatListeReservation = false;
    this.etatAjoutEspaceExposition = false;
    this.etatListeEspaceExposition = true;
    this.etatListeEvenement = false;

  }

  modifierEtatListeEvenement() {
    this.etatListeEvenement = true;
    this.etatListeReservation = false;
    this.etatAjoutEspaceExposition = false;
    this.etatListeEspaceExposition = false;
  }


  findAllEspaceExposition() {
    this.espaceExpositionService.findAllEspaceExposition().subscribe(data => { this.espaceExpositions = data })
  }

  deleteEspaceExposition(id: number) {
    this.espaceExpositionService.deleteEspaceExposition(id).subscribe(() => { this.findAllEspaceExposition() })
  }

  saveEspaceExposition() {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.espaceExposition.idProprio = this.idProprio;
    console.log(this.espaceExposition);
    
    this.espaceExpositionService.saveEspaceExposition(this.currentFileUpload, this.espaceExposition).subscribe(() => {
      this.findAllEspaceExposition(); this.espaceExposition = new EspaceExposition(); this.selectedFiles = undefined
    })
    
    
  }

  editEspaceExposition(espaceExposition: EspaceExposition) {

    localStorage.removeItem("editEspaceExpositionId");
    localStorage.setItem("editEspaceExpositionId", espaceExposition.idEspaceExposition.toString())
    this.router.navigate(['/#/editEspaceExposition', espaceExposition.idEspaceExposition])


  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
