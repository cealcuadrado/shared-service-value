import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeComponent } from './three.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ThreeComponent
  ],
  imports: [
    CommonModule,
    ThreeRoutingModule,
    SharedModule
  ]
})
export class ThreeModule { }
