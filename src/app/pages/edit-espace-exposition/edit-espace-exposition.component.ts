import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EspaceExposition } from 'src/app/models/espace-exposition';
import { EspaceExpositionService } from 'src/app/service/espace-exposition.service';

@Component({
  selector: 'app-edit-espace-exposition',
  templateUrl: './edit-espace-exposition.component.html',
  styleUrls: ['./edit-espace-exposition.component.scss']
})
export class EditEspaceExpositionComponent implements OnInit {
  editForm: FormGroup;
  espaceExposition: EspaceExposition = new EspaceExposition();

  constructor(private router:Router, private espaceExpositionService:EspaceExpositionService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let espaceExpositionId = localStorage.getItem("editEspaceExpositionId")
  if(!espaceExpositionId){
    alert("Invalid Action ...");
    this.router.navigate(['/#/espaceExposition']);
    return;
  }
  this.editForm = this.formBuilder.group({
    idEspaceExposition:[],
    nomSalle:['', Validators.required],
    superficie:['', Validators.required],
    adresse:['', Validators.required]
    
    
  })
  this.espaceExpositionService.findById(+espaceExpositionId).subscribe(data=>{this.editForm.setValue(data);});
  }

updateEspaceExposition(){
 
  var varJson = JSON.stringify(this.editForm.value);
  this.espaceExpositionService.updateEspaceExposition(varJson).subscribe(()=>{this.router.navigate(['/#/espaceExposition']);});

}
}
