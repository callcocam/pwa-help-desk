import { ResourcesService } from './../../../services/resources.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private id;
  public status=[
    "Todas","Aberto","Em tramitacao","Respondido","Negado"
  ]
  public statusColor=[
    "info","warning","success","purple","pink"
  ]

  public solicitacoes;
  constructor(private route: ActivatedRoute, private resources: ResourcesService) { }

  ngOnInit() {
    this.solicitacoes = null;
    this.route.params.subscribe(params => {
      this.id = params['id'];
       this.getSolicitacoes();  
    })
  }

  getSolicitacoes() {
      this.resources.path = 'solicitacao'
      this.resources.getList({zfTableStatus:this.id}).subscribe(
        resp=>{
          if(resp.result){
            this.solicitacoes = resp.result.sEcho;
            console.log(this.solicitacoes)
           }
          
        }
      )
  }
}
