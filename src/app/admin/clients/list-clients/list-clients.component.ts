import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../services/resources.service';
import { Clients } from './../clients';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  constructor(private resources: ResourcesService, private shareService: ShareService) { }
  public clients;
  ngOnInit() {
    this.resources.path = "client";
     this.resources.getList().subscribe(
      resp=>{
        this.clients = resp.result.sEcho;
      }
    )
  }
  getCover(cover){
    return this.shareService.getCover(cover)
  }

}
