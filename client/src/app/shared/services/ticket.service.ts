import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project, Ticket} from "../interfaces";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  nextTicket(listId): Observable<Ticket>{
    return this.http.get<Ticket>('https://call-center-demo1.herokuapp.com/ticket/nextScheduled/'+listId);
  }

}
