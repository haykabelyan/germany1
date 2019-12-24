import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpClient) { }

  getCapabilityToken() {
    return this.http.get('https://call-center-demo1.herokuapp.com/call/generateToken');
  }

}
