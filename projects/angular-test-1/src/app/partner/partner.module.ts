import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SellRequestComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PartnerModule { }
