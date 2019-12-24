import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  setProfileConfig(userConfig): Observable<User>{
      return this.http.put<User>('https://call-center-demo1.herokuapp.com/user', userConfig);
  }


}
