import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellRequestComponent } from './sell-request/sell-request.component';

const routes: Routes = [
  {path:'sell-request',component:SellRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
