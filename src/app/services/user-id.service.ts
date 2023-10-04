import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  private idUser = new BehaviorSubject<string>('');

  constructor() { }

  setIdUser(valor: string): void {
    this.idUser.next(valor);
  }
  getIdUser(): Observable<string> {
    return this.idUser.asObservable();
  }


}
