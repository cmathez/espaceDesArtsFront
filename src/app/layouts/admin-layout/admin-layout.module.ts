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
import { ListeReclamationsComponent } from "src/app/pages/liste-reclamations/liste-reclamations.component";
import { DetailOeuvreComponent } from "src/app/pages/detail-oeuvre/detail-oeuvre.component";
import { ReservationDetailsComponent } from "src/app/pages/reservation-details/reservation-details.component";
import { FormulaireAjoutAvisComponent } from "src/app/pages/formulaire-ajout-avis/formulaire-ajout-avis.component";
import { FormulaireAjoutReclamationComponent } from "src/app/pages/formulaire-ajout-reclamation/formulaire-ajout-reclamation.component";
import { FormulaireAjoutOeuvreComponent } from "src/app/pages/formulaire-ajout-oeuvre/formulaire-ajout-oeuvre.component";
import { EspacesHomeComponent } from "src/app/pages/espaces-home/espaces-home.component";


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
    EspacesHomeComponent,
    ListeReclamationsComponent,
    DetailOeuvreComponent,
    ReservationDetailsComponent,
    FormulaireAjoutAvisComponent,
    FormulaireAjoutReclamationComponent,
    FormulaireAjoutOeuvreComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
