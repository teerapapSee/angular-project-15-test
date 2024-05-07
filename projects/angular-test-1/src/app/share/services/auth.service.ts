import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected httpClient:HttpClient
  constructor(
    protected injectorObj:Injector
  ) {
    this.httpClient = this.injectorObj.get(HttpClient)
  }

    async asyncMiddlewareCallApi(method:string,url:string,body:any = {},authen=false){
      try{
        let resultApi = null
        if(method=='post'){
          resultApi = await lastValueFrom(this.httpClient.post<any>(`http://localhost:3000/${url}`,body))
        }else{
          resultApi = await lastValueFrom(this.httpClient.get<any>(`http://localhost:3000/${url}`))
        }
        console.log("AuthService  asyncMiddlewareCallApi  resultApi:", resultApi)
        return resultApi
      }catch(error){

      }
    }
}
