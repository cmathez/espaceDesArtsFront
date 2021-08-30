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
import { EspacesHomeComponent } from "src/app/pages/espaces-home/espaces-home.component";
import { ListeReclamationsComponent } from "src/app/pages/liste-reclamations/liste-reclamations.component";
import { ReservationDetailsComponent } from "src/app/pages/reservation-details/reservation-details.component";
import { DetailOeuvreComponent } from "src/app/pages/detail-oeuvre/detail-oeuvre.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "user-home", component: UserHomeComponent },
  { path: "login", component: LoginComponent},
  {path: "espaces-home" , component: EspacesHomeComponent},
  { path: "reclamation", component: ListeReclamationsComponent},
  { path: "exposition/:id", component: ReservationDetailsComponent},
  { path: "oeuvre/:id", component: DetailOeuvreComponent}
  // { path: "rtl", component: RtlComponent }
];
