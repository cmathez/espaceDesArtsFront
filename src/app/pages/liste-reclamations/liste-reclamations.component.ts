import { Component, OnInit } from "@angular/core";
import { ReclamationService } from "src/app/service/reclamation.service";

@Component({
  selector: "app-tables",
  templateUrl: "liste-reclamations.component.html"
})
export class ListeReclamationsComponent implements OnInit {
  reclamations:any;

  constructor(private reclamationService:ReclamationService) {}
  ngOnInit(): void {
    this.findAll();
  }



  findAll() {
    this.reclamationService.findAll().subscribe(data=>{
      console.log("Component: ");
      console.log(data);
      this.reclamations = data;
      console.log(this.reclamations[0].motif);
      });
  }
}
