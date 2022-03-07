import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor() { }
  @Input()
  user!: string;

  @Output()
  subscribe = new EventEmitter();

  subscribeToNewsletter(name:string) {
      this.subscribe.emit(name);
  }
}
