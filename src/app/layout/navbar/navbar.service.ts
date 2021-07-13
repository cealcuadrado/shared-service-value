import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private nivelTamannio = new Subject<number>();

  constructor() { }

  public setearNivelTamannio(nivel: number) {
    this.nivelTamannio.next(nivel);
  }

  public obtenerNivelTamannio(): Observable<number> {
    return this.nivelTamannio.asObservable();
  }
}
