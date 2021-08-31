import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserHomeComponent } from "../../pages/user-home/user-home.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EspaceExpositionComponent } from "src/app/pages/espace-exposition/espace-exposition.component";
import { ReservationEspaceComponent } from "src/app/pages/reservation-espace/reservation-espace.component";
import { EvenementComponent } from "src/app/pages/evenement/evenement.component";
import { ListeReclamationsComponent } from "src/app/pages/liste-reclamations/liste-reclamations.component";
import { DetailOeuvreComponent } from "src/app/pages/detail-oeuvre/detail-oeuvre.component";
import { ReservationDetailsComponent } from "src/app/pages/reservation-details/reservation-details.component";
import { FormulaireAjoutAvisComponent } from "src/app/pages/formulaire-ajout-avis/formulaire-ajout-avis.component";
import { FormulaireAjoutReclamationComponent } from "src/app/pages/formulaire-ajout-reclamation/formulaire-ajout-reclamation.component";
import { FormulaireAjoutOeuvreComponent } from "src/app/pages/formulaire-ajout-oeuvre/formulaire-ajout-oeuvre.component";
import { EspacesHomeComponent } from "src/app/pages/espaces-home/espaces-home.component";
import { ListeUtilisateursComponent } from "src/app/pages/liste-utilisateurs/liste-utilisateurs.component";
import { ListeExpositionsArtisteComponent } from "src/app/pages/liste-expositions-artiste/liste-expositions-artiste.component";
import { EspaceExpositionArtisteComponent } from "src/app/pages/espace-exposition-artiste/espace-exposition-artiste.component";
import { FormulaireAjoutReservationComponent } from "src/app/pages/formulaire-ajout-reservation/formulaire-ajout-reservation.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    UserHomeComponent,
    EspaceExpositionComponent,
    ReservationEspaceComponent,
    EvenementComponent,
    EspacesHomeComponent,
    ListeReclamationsComponent,
    DetailOeuvreComponent,
    ReservationDetailsComponent,
    FormulaireAjoutAvisComponent,
    FormulaireAjoutReclamationComponent,
    FormulaireAjoutOeuvreComponent,
    ListeUtilisateursComponent,
    ListeExpositionsArtisteComponent,
    EspaceExpositionArtisteComponent,
    FormulaireAjoutReservationComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
