import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../_models/trainer.model';

interface trainer {
  id:number,
  role:string,
  access_token:any,
  token_type: any,
  expires_in: any
}
@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private httpClient: HttpClient) {}
  getAllTrainers(): Observable<{data:Trainer[],status: boolean,error: any[]}> {
    return this.httpClient.get<{data:Trainer[],status: boolean,error: any[]}>(`${environment.baseUrl}trainers`);
  }

  getTrainerById(id: number): Observable<{data:Trainer,status: boolean,error: any[]}> {
    return this.httpClient.get<{data:Trainer,status: boolean,error: any[]}>(environment.baseUrl + 'trainers/' + id);
  }


  deleteTrainerById(id: number): Observable<Trainer>{
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.delete<Trainer>(environment.baseUrl + 'trainers/' + id,{headers});
  }

  addTrainer(data: any): Observable<{data:Trainer,status: boolean,error: any[]}>{
    return this.httpClient.post<{data:Trainer,status: boolean,error: any[]}>(environment.baseUrl+'trainers/register',data);
  }

  updateTrainer(id:number, updatedTrainer:any): Observable<{data:Trainer,status: boolean,error: any[]}>{
    const token: string = localStorage.getItem('Authorization')!;
    const headers = new HttpHeaders({
      Authorization: token
    })
    return this.httpClient.post<{data:Trainer,status: boolean,error: any[]}>(`${environment.baseUrl}trainers/${id}`,updatedTrainer,{headers});
  }
  
  checkTrainer(data:any): Observable<trainer>{
    console.log(data);
    return this.httpClient.post<trainer>(environment.baseUrl+'trainers/login',data);
  }

  getTrainersCount(): Observable<number>{
    return this.httpClient.get<number>(`${environment.baseUrl}trainers/count`);
  }
}
