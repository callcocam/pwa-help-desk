import { ActivatedRoute } from '@angular/router';
import { ResourcesService, SearchCriteria } from './../../../../services/resources.service';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../../../services/share.service';

@Component({
  selector: 'app-anexo-list',
  templateUrl: './anexo-list.component.html',
  styleUrls: ['./anexo-list.component.css']
})
export class AnexoListComponent implements OnInit {

  public anexos;
  public total;
  constructor(private route: ActivatedRoute, private resources: ResourcesService, private shared:ShareService) { }

  ngOnInit() {
    this.resources.path = "anexo"
    this.route.params.subscribe(params => {
      let criteria = new SearchCriteria();
      criteria.zfTableColumn = JSON.stringify({
        solicitacion:params['id']
      })
      this.resources.getList(criteria).subscribe(
        resp => {
          this.anexos = resp.result.sEcho;
          this.total = resp.result.iTotalDisplayRecords;
        }
      )
    })
  }
  getAnexo(name){
    return this.shared.getCover(name)
  }

  downloadFile(filename){
    this.resources.path = "anexo"
    this.resources.DownloadFile(filename)
  }
}
