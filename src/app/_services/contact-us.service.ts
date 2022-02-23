import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { url } from "inspector";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Contactus } from '../_models/contactus.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient: HttpClient) { }

  getAllContacs(): Observable<Contactus[]>{
    return this.httpClient.get<Contactus[]>(`${environment.baseUrl}Contact_us`);



 }



deleteContact(id:number){
  return this.httpClient.delete<Contactus>(environment.baseUrl+'Contact_us/'+id)

}

}
