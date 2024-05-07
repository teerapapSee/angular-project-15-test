import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutimageRoutingModule } from './cutimage-routing.module';
import { CutimageComponent } from './cutimage/cutimage.component';


@NgModule({
  declarations: [
    CutimageComponent
  ],
  imports: [
    CommonModule,
    CutimageRoutingModule
  ]
})
export class CutimageModule { }
