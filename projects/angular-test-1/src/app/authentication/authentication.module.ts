import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../share/share.module';
import { MaterialModule } from '../share/modules/material/material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
