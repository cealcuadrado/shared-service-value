import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private nivelTamannio = new BehaviorSubject<number>(1);

  constructor() {
  }

  public setearNivelTamannio(nivel: number) {
    this.nivelTamannio.next(nivel);
  }

  public obtenerNivelTamannio(): Observable<number> {
    return this.nivelTamannio.asObservable();
  }
}
