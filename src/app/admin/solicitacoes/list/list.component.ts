import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ResourcesService, SearchCriteria } from '../../../services/resources.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public status = [
    "Todas", "Aberto", "Em tramitacao", "Respondido", "Negado"
  ]
  public solicitacoes;
  constructor(private resources:ResourcesService,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.resources.path = 'solicitacao'
    let user = this.localStorage.getObject(this.localStorage.ADMIN_KEY).id
    let criteria = new SearchCriteria()
    // criteria.zfTableColumn['receptionBy']=user
    // criteria.zfTableColumn['parent']=null
    criteria.zfTableColumn=JSON.stringify({
      receptionBy:user,
      parent:null
    });
     this.resources.getList(criteria).subscribe(resp=>{
        this.solicitacoes = resp.result.sEcho;
     });
  }

}
