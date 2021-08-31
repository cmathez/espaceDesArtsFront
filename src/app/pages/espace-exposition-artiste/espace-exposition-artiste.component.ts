import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspaceExposition } from 'src/app/models/espace-exposition';
import { EspaceExpositionService } from 'src/app/service/espace-exposition.service';

@Component({
  selector: 'app-espace-exposition-artiste',
  templateUrl: './espace-exposition-artiste.component.html',
  styleUrls: ['./espace-exposition-artiste.component.scss']
})
export class EspaceExpositionArtisteComponent implements OnInit {

  espaceExpositions:any=null;
  espaceExposition:EspaceExposition = new EspaceExposition();
  selectedFiles: FileList;
  currentFileUpload: File;
  
  constructor(private espaceExpositionService: EspaceExpositionService, private router:Router) { }
  

    
  ngOnInit(): void {
    this.findAllEspaceExposition();
  }

  findAllEspaceExposition(){
    this.espaceExpositionService.findAllEspaceExposition().subscribe(data=>{this.espaceExpositions = data})
  }

  /*deleteEspaceExposition(id:number){
    this.espaceExpositionService.deleteEspaceExposition(id).subscribe(()=>{this.findAllEspaceExposition()})
  }

  saveEspaceExposition(){

    this.currentFileUpload = this.selectedFiles.item(0);
    this.espaceExpositionService.saveEspaceExposition(this.currentFileUpload,this.espaceExposition).subscribe(()=>{
      this.findAllEspaceExposition();this.espaceExposition = new EspaceExposition(); this.selectedFiles = undefined})
    
  }

  editEspaceExposition(espaceExposition:EspaceExposition){
 
    localStorage.removeItem("editEspaceExpositionId");
    localStorage.setItem("editEspaceExpositionId",espaceExposition.idEspaceExposition.toString())
    this.router.navigate(['/#/editEspaceExposition',espaceExposition.idEspaceExposition])
  
    
  }

  selectFile(event){
    this.selectedFiles=event.target.files;
  }*/
}
