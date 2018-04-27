import { LocalStorageService } from './../../../../services/local-storage.service';
import { ReplyBy } from './../reply-by';
import { Solicitacao } from './../solicitacao';
import { ShareService } from './../../../../services/share.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService, SearchCriteria } from './../../../../services/resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // If you want add editors bindings to some model
  options: any = {
    height: 250,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true,                 // set focus to editable area after initializing summernote
    styleWithSpan: false,
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol']]
    ]

  }
  public replys;
  public id;
  public solicitacoe= new Solicitacao();
  public replyBy= new ReplyBy();
  constructor(private resourse: ResourcesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private shareService: ShareService,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.getItem(params);
    })
  }
  getItem(params) {
    this.resourse.path = 'solicitacao'
    this.resourse.getItem(params['id']).subscribe(
      resp => {
        if(resp.result.reply_by){
          this.replyBy = resp.result.reply_by;
          this.replyBy.cover = this.shareService.getCover(resp.result.reply_by.cover)
        }
        this.solicitacoe = resp.result;   
        this.getReplys(params['id'])     
      })
  }
  getCover(cover) {
    return this.shareService.getCover(cover)
  }

  getReplys(id) {
    this.resourse.path = 'solicitacao'
    let criteria = new SearchCriteria()
    let user = this.localStorage.getObject(this.localStorage.USER_KEY).id
    criteria.zfTableColumn = JSON.stringify({
      client: user,
      parent: id
    });
    this.resourse.getList(criteria).subscribe(
      resp => {
        this.replys = resp.result.sEcho;
      }
    )
  }

}
