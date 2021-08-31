import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserHomeComponent } from "../../pages/user-home/user-home.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { EspaceExpositionComponent } from "src/app/pages/espace-exposition/espace-exposition.component";
import { ReservationEspaceComponent } from "src/app/pages/reservation-espace/reservation-espace.component";
import { EvenementComponent } from "src/app/pages/evenement/evenement.component";
import { EspacesHomeComponent } from "src/app/pages/espaces-home/espaces-home.component";
import { ListeReclamationsComponent } from "src/app/pages/liste-reclamations/liste-reclamations.component";
import { ReservationDetailsComponent } from "src/app/pages/reservation-details/reservation-details.component";
import { DetailOeuvreComponent } from "src/app/pages/detail-oeuvre/detail-oeuvre.component";
import { PageAcceuilComponent } from "src/app/pages/page-acceuil/page-acceuil.component";
import { ListeUtilisateursComponent } from "src/app/pages/liste-utilisateurs/liste-utilisateurs.component";
import { ListeExpositionsArtisteComponent } from "src/app/pages/liste-expositions-artiste/liste-expositions-artiste.component";
import { EspaceExpositionArtisteComponent } from "src/app/pages/espace-exposition-artiste/espace-exposition-artiste.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "page-acceuil", component: PageAcceuilComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "user-home", component: UserHomeComponent },
  { path: "login", component: LoginComponent},
  { path: "espaceExposition", component: EspaceExpositionComponent},
  { path: "reservationEspace/:id", component: ReservationEspaceComponent},
  { path: "evenement", component: EvenementComponent},
  { path: "reservation-details", component: ReservationDetailsComponent},
  { path: "reservationEspace", component: ReservationEspaceComponent},
  { path: "utilisateur", component: ListeUtilisateursComponent},
  { path: "espaces-home" , component: EspacesHomeComponent},
  { path: "reclamation", component: ListeReclamationsComponent},
  { path: "exposition/:id", component: ReservationDetailsComponent},
  { path: "oeuvre/:id", component: DetailOeuvreComponent},
  { path: "expositionArtiste", component: ListeExpositionsArtisteComponent},
  { path: "espaceExpositionArtiste", component: EspaceExpositionArtisteComponent}
  // { path: "rtl", component: RtlComponent }
];
