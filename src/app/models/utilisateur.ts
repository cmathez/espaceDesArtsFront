import { Role } from "./role";

export class Utilisateur {
    idUtilisateur:number;
    dateNaissance:string="";
    mail:string="";
    nom:string="";
    prenom:string="";
    password:string="";
    username:string="";
    roles: Role;
}
