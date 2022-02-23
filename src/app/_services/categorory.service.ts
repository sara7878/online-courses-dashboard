import { EventEmitter } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Category, Categoryobj } from 'src/app/_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategororyService {

  constructor(private httpClient : HttpClient) { }
categoryArray!:Categoryobj


//   getcategories():Observable<{data:Category[],status:boolean,error:any}>{
//    return this.httpClient.get<{data:Category[],status:boolean,error:any}>(environment.baseUrl+'categories')
//  }

getcategories():Observable<Categoryobj>{
  return this.httpClient.get<Categoryobj>(environment.baseUrl+'categories')
}


addcategory(data:Category):Observable<Categoryobj>{
  return this.httpClient.post<Categoryobj>(environment.baseUrl+'categories',data);
}


}
