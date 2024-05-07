import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'partner',loadChildren:()=>import('./partner/partner.module').then(m=>m.PartnerModule)},
  {path:'cutimage',loadChildren:()=>import('./cutimage/cutimage.module').then(m=>m.CutimageModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
