import { NavbarService } from './../../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  nivel: number;

  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.navbarService.obtenerNivelTamannio().subscribe(nivel => {
      this.nivel = nivel;
    });
  }
}
