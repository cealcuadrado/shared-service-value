import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule,
    SharedModule
  ]
})
export class TwoModule { }
