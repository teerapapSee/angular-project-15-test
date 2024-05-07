import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../share/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.scss']
})
export class SellRequestComponent implements OnInit{
  protected router:Router
  protected authService:AuthService


  form=new FormGroup({
    name : new FormControl(),
    tel: new FormControl(),
    email: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    expect_price: new FormControl(),
  })

  constructor(
    protected injectorObj:Injector
  ) {
    this.router = this.injectorObj.get(Router)
    this.authService = this.injectorObj.get(AuthService)

  }


  ngOnInit(): void {

  }

  async submitForm(){
    console.log("SellRequestComponent  submitForm  this.form.value:", this.form.value)
    const callApi = await this.authService.asyncMiddlewareCallApi('post','remobile/create-request',{
      ...this.form.value
    })
    console.log("SellRequestComponent  submitForm  callApi:", callApi)
    this.router.navigate(['home'],{relativeTo:null})
  }
}
