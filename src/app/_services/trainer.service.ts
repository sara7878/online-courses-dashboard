import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../_models/trainer.model';

interface admin {
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

  getTrainerById(id: number): Observable<Trainer> {
    return this.httpClient.get<Trainer>(environment.baseUrl + 'trainers/' + id);
  }


  deleteTrainerById(id: number): Observable<Trainer>{
    return this.httpClient.delete<Trainer>(environment.baseUrl + 'trainers/' + id);
  }

  addTrainer(data: any): Observable<{data:Trainer,status: boolean,error: any[]}>{
    return this.httpClient.post<{data:Trainer,status: boolean,error: any[]}>(environment.baseUrl+'trainers/register',data);
  }


  checkTrainer(data:any): Observable<admin>{
    console.log(data);
    return this.httpClient.post<admin>(environment.baseUrl+'trainers/login',data);
  }

}
