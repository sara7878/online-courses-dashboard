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


  addcategory(data: any) {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post(environment.baseUrl + 'categories', data,{headers});
  }

  getCategorybyId(id: number ): Observable<{ data: Category; status: boolean; error: any }> {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.get<{ data: Category; status: boolean; error: any }>(
      `${environment.baseUrl}categories/${id}`,{headers}
    );
  }

  editCategory(id: number, updatedCategory: Category): Observable<Category> {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post<Category>(
      environment.baseUrl + 'categories/' + id,
      updatedCategory,{headers}
    );
  }

  updatecategory(id: number, data: any) {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post(environment.baseUrl + 'categories/' + id, data,{headers});
  }

  deleteCategoryById(id: number): Observable<Category> {
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.delete<Category>(
      environment.baseUrl + 'categories/' + id,{headers}
    );
  }


  getCoursesOfCategory(id: number ):Observable<{ data: Category; status: boolean; error: any }>{

    return this.httpClient.get<{ data: Category; status: boolean; error: any }>(
      `${environment.baseUrl}categories/${id}`
    );
  }
}
