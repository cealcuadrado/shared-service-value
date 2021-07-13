import { NavbarService } from './../../layout/navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-foo',
  templateUrl: './other-foo.component.html',
  styleUrls: ['./other-foo.component.scss']
})
export class OtherFooComponent implements OnInit {

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
