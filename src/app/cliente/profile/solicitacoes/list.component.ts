import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocalStorageService } from './../../../services/local-storage.service';
import { ResourcesService, SearchCriteria } from './../../../services/resources.service';
import { NotificationService } from '../../../components/snackbar/notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private id = 0;
  private total = 0;
  public status = [
    "Todas", "Aberto", "Em tramitacao", "Respondido", "Negado"
  ]
  public statusColor = [
    "info", "warning", "success", "purple", "pink"
  ]

  public solicitacoes;
  constructor(private route: ActivatedRoute, 
    private resources: ResourcesService, 
    private notify: NotificationService,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.solicitacoes = null;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getSolicitacoes();
    },
      error => {
         this.getSolicitacoes();
      })
  }

  getSolicitacoes() {
    this.resources.path = 'solicitacao'
    let user = this.localStorage.getObject(this.localStorage.USER_KEY).id
    let criteria = new SearchCriteria()
    // criteria.zfTableColumn['receptionBy']=user
    // criteria.zfTableColumn['parent']=null
    criteria.zfTableColumn=JSON.stringify({
      client:user,
      parent:null
    })
    
    criteria.zfTableStatus = this.id
     this.resources.getList(criteria).subscribe(resp=>{
      if (resp.result) {
        this.solicitacoes = resp.result.sEcho;
        this.total = resp.result.iTotalDisplayRecords;
      }
     });
  
  }

  delete(id) {
    this.resources.delete(id).subscribe(
      resp => {
        if (resp.result) {
         this.getSolicitacoes();
         this.notify.notify(resp.result.msg)
        }

      }
    )
  }
}
