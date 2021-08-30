import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Injectable, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AppService } from "./app.service";
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { Error404Component } from "./pages/error404/error404.component";
import { EditEspaceExpositionComponent } from "./pages/edit-espace-exposition/edit-espace-exposition.component";



@Injectable()
export class XhrInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr=req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    })
    return next.handle(xhr);
  }
  
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, EditEspaceExpositionComponent, InscriptionComponent, Error404Component],
  providers: [
    AppService,
    {provide: HTTP_INTERCEPTORS,useClass: XhrInterceptor,multi:true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
