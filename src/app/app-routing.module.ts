import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from "./pages/login/login.component";
import { InscriptionComponent } from "./pages/inscription/inscription.component";
import { EspaceExpositionComponent } from "./pages/espace-exposition/espace-exposition.component";
import { EditEspaceExpositionComponent } from "./pages/edit-espace-exposition/edit-espace-exposition.component";
import { ReservationEspaceComponent } from "./pages/reservation-espace/reservation-espace.component";
import { EvenementComponent } from "./pages/evenement/evenement.component";

const routes: Routes = [
  {
    path: 'evenement',
    component: EvenementComponent,
    data: {
      title: 'evenement'
    }
  },
  {
    path: 'reservationEspace',
    component: ReservationEspaceComponent,
    data: {
      title: 'reservationEspace'
    }
  },
  {
    path: 'editEspaceExposition',
    component: EditEspaceExpositionComponent,
    data: {
      title: 'editEspaceExposition'
    }
  },
  {
    path: 'espaceExposition',
    component: EspaceExpositionComponent,
    data: {
      title: 'espaceExposition'
    }
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    data: {
      title: 'Inscription'
    }
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },

  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
