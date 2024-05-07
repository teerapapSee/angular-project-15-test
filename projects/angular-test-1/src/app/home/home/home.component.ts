import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../share/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  protected router:Router
  protected authService:AuthService
  data = []
  constructor(
    protected injectorObj:Injector
  ) {
    this.router = this.injectorObj.get(Router)
    this.authService = this.injectorObj.get(AuthService)

  }


  async ngOnInit() {
    const callApi = await this.authService.asyncMiddlewareCallApi('post','remobile/get-mobile')
    console.log("HomeComponent  ngOnInit  callApi:", callApi)
    this.data = callApi.playload
    console.log("HomeComponent  ngOnInit  this.data:", this.data)
  }
}
