import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category, Categoryobj } from 'src/app/_models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategororyService {
  constructor(private httpClient: HttpClient) {}
  categoryArray!: Categoryobj;

  getcategories(): Observable<Categoryobj> {
    return this.httpClient.get<Categoryobj>(environment.baseUrl + 'categories');
  }

  // getCategoryById(id:number): Observable<{ data: Category; status: boolean; error: any }>{
  //   return this.httpClient.get<{ data: Category; status: boolean; error: any }>(environment.baseUrl + 'categories/'+ id);
  // }

  addcategory(data: any) {
    return this.httpClient.post(environment.baseUrl + 'categories', data);
  }

  getCategorybyId(id: number ): Observable<{ data: Category; status: boolean; error: any }> {
    return this.httpClient.get<{ data: Category; status: boolean; error: any }>(
      `${environment.baseUrl}categories/${id}`
    );
  }

  editCategory(id: number, updatedCategory: Category): Observable<Category> {
    return this.httpClient.post<Category>(
      environment.baseUrl + 'categories/' + id,
      updatedCategory
    );
  }

  updatecategory(id: number, data: any) {
    return this.httpClient.post(environment.baseUrl + 'categories/' + id, data);
  }

  deleteCategoryById(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(
      environment.baseUrl + 'categories/' + id
    );
  }


  getCoursesOfCategory(id: number ):Observable<{ data: Category; status: boolean; error: any }>{
    return this.httpClient.get<{ data: Category; status: boolean; error: any }>(
      `${environment.baseUrl}categories/${id}`
    );
  }
}
