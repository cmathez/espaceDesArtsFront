import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/service/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  evenements: any = null;
  evenement: Evenement = new Evenement();

  constructor(private evenementService: EvenementService, private router: Router) { }

  ngOnInit(): void {
    this.findAllEvenement();
  }


  findAllEvenement() {
    this.evenementService.findAllEvenement().subscribe(data => { this.evenements = data })
  }

  deleteEvenement(id: number) {
    this.evenementService.deleteEvenement(id).subscribe(() => { this.findAllEvenement() })
  }

  saveEvenement(){
    this.evenementService.saveEvenement(this.evenement).subscribe(()=>{this.findAllEvenement();
    this.evenement = new Evenement();
    })
   
  }

}
