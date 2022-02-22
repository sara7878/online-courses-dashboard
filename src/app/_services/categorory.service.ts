import { EventEmitter } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Category } from 'src/app/_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategororyService {

  constructor(private httpClient : HttpClient) { }

  getcategories():Observable<Category[]>{
   return this.httpClient.get<Category[]>(environment.baseUrl+'categories')
 }
}
