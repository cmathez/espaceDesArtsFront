import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspaceExposition } from '../models/espace-exposition';

@Injectable({
  providedIn: 'root'
})
export class EspaceExpositionService {
  private baseURL = "http://localhost:8080/gestionEspaceExposition/espaceExposition";
  constructor(private httpClient: HttpClient) { }


  public findAllEspaceExposition():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public deleteEspaceExposition(id:number):Observable<any>{    
    return this.httpClient.delete(this.baseURL+"/"+id);
  }

  public findById(id:number):Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }

  public saveEspaceExposition(file:File, espaceExposition:EspaceExposition){
   const formData: FormData = new FormData();

   formData.append('nomSalle',espaceExposition.nomSalle)
   formData.append('superficie',espaceExposition.superficie)
   formData.append('adresse',espaceExposition.adresse)
   formData.append('file',file)
   formData.append('idProprio',espaceExposition.idProprio)

   const req = new HttpRequest('POST', this.baseURL,formData,{reportProgress:true,responseType:'text'})
    return this.httpClient.request(req);
  }

  public updateEspaceExposition(espaceExposition:any):Observable<any>{
    var espaceExpositionParse = JSON.parse(espaceExposition);
    return this.httpClient.put(this.baseURL+'/'+espaceExpositionParse.idEspaceExposition,espaceExpositionParse)
  }
}
