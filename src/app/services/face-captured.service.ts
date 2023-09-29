import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceCapturedService {

  private miObservableSubject = new BehaviorSubject<string>('');


  setFaceImg(valor: string): void {
    this.miObservableSubject.next(valor);
  }
  getValor(): Observable<string> {
    return this.miObservableSubject.asObservable();
  }

  constructor() { }
}
