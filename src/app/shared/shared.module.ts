import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { OtherFooComponent } from './other-foo/other-foo.component';



@NgModule({
  declarations: [
    FooComponent,
    OtherFooComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooComponent,
    OtherFooComponent
  ]
})
export class SharedModule { }
