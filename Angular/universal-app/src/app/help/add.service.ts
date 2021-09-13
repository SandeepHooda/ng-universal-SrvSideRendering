import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './constant';

@Injectable()
export class AddService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) { }

  addData(data:any){
   return this.httpClient.post<Number>(Constants.appContext+"/math/add",data,this.options);
  }
}
