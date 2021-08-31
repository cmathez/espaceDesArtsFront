import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  condition : string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/page-acceuil",
    title: "Accueil",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: "",
    condition: "admin"
  },
  {
    path: "/page-acceuil",
    title: "Accueil",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: "",
    condition: "proprio"
  },
  {
    path: "/page-acceuil",
    title: "Accueil",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: "",
    condition: "artiste"
  },
  {
    path: "/espaceExposition",
    title: "Espace d'exposition",
    rtlTitle: "الرموز",
    icon: "icon-bullet-list-67",
    class: "",
    condition: "proprio"
  },
  {
    path: "/reservationEspace",
    title: "Espaces réservés",
    rtlTitle: "لوحة القيادة",
    icon: "icon-notes",
    class: "",
    condition: "proprio"
  },
  {
    path: "/evenement",
    title: "Evenement",
    rtlTitle: "لوحة القيادة",
    icon: "icon-calendar-60",
    class: "",
    condition: "proprio"
  },

  
  
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: "",
    condition: ""
  },
 
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "",
    condition: ""
  },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: "",
    condition: ""
  },

  {
    path: "/utilisateur",
    title: "Utilisateurs",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
    condition: "admin"
  },
  {
    path: "/expositionArtiste",
    title: "Mes expositions",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
    condition: "artiste"
  },
  {
    path: "/espaceExpositionArtiste",
    title: "Espaces d'Exposition",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
    condition: "artiste"
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: "",
    condition: ""
  },
  /*{
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-book-bookmark",
    class: ""
  },*/
  {
    path: "/reclamation",
    title: "Réclamations",
    rtlTitle: "طباعة",
    icon: "icon-book-bookmark",
    class: "",
    condition: "admin"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isUser = true;
  role:string;

  constructor() {}

  ngOnInit() {

    this.role = sessionStorage.getItem('role');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
