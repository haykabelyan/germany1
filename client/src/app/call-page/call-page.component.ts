import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../shared/services/project.service";
import {TicketService} from "../shared/services/ticket.service";
import {Ticket} from "../shared/interfaces";


@Component({
  selector: 'app-call-page',
  templateUrl: './call-page.component.html',
  styleUrls: ['./call-page.component.scss']
})
export class CallPageComponent implements OnInit {

  ticket: Ticket;

  constructor(private projectService: ProjectService, private ticketService: TicketService) {}

  ngOnInit() {
   }

   startCall(){
    this.ticketService.nextTicket(this.projectService.currentProject.ticketListId).subscribe(data=>{
        this.ticket = data;
        console.log(this.ticket);
    })
   }


}
