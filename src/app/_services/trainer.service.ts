import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../_models/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor(private httpClient: HttpClient) {}

  getAllTrainers(): Observable<{data:Trainer[],status:boolean,error:any}> {
    return this.httpClient.get<{data:Trainer[],status:boolean,error:any}>(`${environment.baseUrl}trainers`);
  }
}
