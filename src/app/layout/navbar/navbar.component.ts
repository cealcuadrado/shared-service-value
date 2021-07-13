import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nivel = 1;

  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.obtenerNivelTamannio().subscribe(nivel => {
      this.nivel = nivel;
    });
  }

  esNivel(nivel: number): boolean {
    return (this.nivel == nivel);
  }

  setearNivel(nivel: number): void {
    this.nivel = nivel;
    this.navbarService.setearNivelTamannio(nivel);
  }

}
