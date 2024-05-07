import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutimageComponent } from './cutimage/cutimage.component';

const routes: Routes = [
  {path:'',component:CutimageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutimageRoutingModule { }
