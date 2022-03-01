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

  constructor(private httpClient : HttpClient) {

   }
categoryArray!:Categoryobj

// UploadData(data:any){
//   const headers=new HttpHeaders();
//   return this.httpClient.
// }

//   getcategories():Observable<{data:Category[],status:boolean,error:any}>{
//    return this.httpClient.get<{data:Category[],status:boolean,error:any}>(environment.baseUrl+'categories')
//  }


getcategories():Observable<Categoryobj>{
  return this.httpClient.get<Categoryobj>(environment.baseUrl+'categories')
}


// addcategory(data:Category):Observable<Category>{
//   const headers=new HttpHeaders();
//   return this.httpClient.post<Category>(environment.baseUrl+'categories',data,
//     {headers: headers}
//   );
// }

addcategory(data:any){
  return this.httpClient.post(environment.baseUrl+'categories',data);
}


deleteCategoryById(id: number): Observable<Category>{
  return this.httpClient.delete<Category>(environment.baseUrl + 'categories/' + id);
}

}
