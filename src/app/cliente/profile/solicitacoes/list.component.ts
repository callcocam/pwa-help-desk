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
  public solicitacoes;
  constructor(private route: ActivatedRoute, private resources: ResourcesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
       this.getSolicitacoes();
      console.log(this.solicitacoes)
    })
  }

  getSolicitacoes() {
      console.log(this.id)
      this.resources.path = 'solicitacao'
      this.resources.getList({valuesState:this.id}).subscribe(
        resp=>{
          this.solicitacoes = resp.result
        }
      )
  }
}
