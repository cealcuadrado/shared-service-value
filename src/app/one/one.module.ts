import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule,
    SharedModule
  ]
})
export class OneModule { }
