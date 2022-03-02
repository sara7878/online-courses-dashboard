import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Admin } from '../_models/admin.model';

interface admin {
  access_token:any,
  token_type: any,
  expires_in: any
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient : HttpClient) {}

  Adminlogin(data:any):Observable<admin>{
    return this.httpClient.post<admin>(environment.baseUrl+'login',data);
  }
}