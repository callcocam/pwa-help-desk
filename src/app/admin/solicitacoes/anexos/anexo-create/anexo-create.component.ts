import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../../../services/resources.service';

@Component({
  selector: 'app-anexo-create',
  templateUrl: './anexo-create.component.html',
  styleUrls: ['./anexo-create.component.css']
})
export class AnexoCreateComponent implements OnInit {

  public anexos;
  public total;
  constructor(private resources:ResourcesService) { }

  ngOnInit() {
    this.resources.path = "anexo"
    this.resources.getList().subscribe(
      resp=>{
        this.anexos = resp.result.sEcho;
        this.total = resp.result.iTotalDisplayRecords;
      }
    )
  }

}
