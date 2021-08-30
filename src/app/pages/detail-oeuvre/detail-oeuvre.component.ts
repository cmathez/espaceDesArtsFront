import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/service/avis.service';
import { OeuvreService } from 'src/app/service/oeuvre.service';

@Component({
  selector: 'app-oeuvre-details',
  templateUrl: './detail-oeuvre.component.html',
  styleUrls: ['./detail-oeuvre.component.scss']
})
export class DetailOeuvreComponent implements OnInit {
  oeuvre:any;
  avis:any;
  id:number;
  afficheSignalement:boolean=false;

  constructor(private router:Router, private oeuvreService:OeuvreService, private avisService:AvisService, private route:ActivatedRoute) {
    this.id=this.route.snapshot.params['id'];
 }
  ngOnInit(): void {
    this.oeuvreService.findById(this.id).subscribe(data => {this.oeuvre = data});
    this.findAvis();
  }

  findAvis() {
    this.avisService.findByIdOeuvre(this.id).subscribe(data=>{this.avis=data;console.log(this.avis)});
  }

  deleteOeuvre() {
    this.oeuvreService.delete(this.id).subscribe(() => this.router.navigate(['']));
  }

  toggleSignalement() {
    this.afficheSignalement = !this.afficheSignalement;
  }

}
