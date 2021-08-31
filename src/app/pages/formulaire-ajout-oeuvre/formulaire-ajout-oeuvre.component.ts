import { Component, Input, OnInit } from '@angular/core';
import { OeuvreService } from 'src/app/service/oeuvre.service';

@Component({
  selector: 'app-formulaire-ajout-oeuvre',
  templateUrl: './formulaire-ajout-oeuvre.component.html',
  styleUrls: ['./formulaire-ajout-oeuvre.component.scss']
})
export class FormulaireAjoutOeuvreComponent implements OnInit {
  @Input() idEspaceExposition:any;

  oeuvre:any = {
    nomOeuvre: "",
    description: "",
    prix: 0,
    espaceExposition: {
      idEspaceExposition: 0
    }
  };
  selectedFile:any;
  currentFileUpload:any;

  constructor(private oeuvreService:OeuvreService) { }

  ngOnInit(): void {
  }

  selectFile(event:any) {
    this.selectedFile = event.target.files;
  }

  saveOeuvre() {
    this.currentFileUpload = this.selectedFile.item(0);
    this.oeuvre.espaceExposition.idEspaceExposition = this.idEspaceExposition;
    console.log(this.oeuvre);
    this.oeuvreService.save(this.currentFileUpload, this.oeuvre).subscribe(() => {this.oeuvre.nomOeuvre = "", this.oeuvre.description = "", this.oeuvre.prix = 0});
  }

}
