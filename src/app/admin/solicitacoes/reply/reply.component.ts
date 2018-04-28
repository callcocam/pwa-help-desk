import { LocalStorageService } from './../../../services/local-storage.service';
import { NotificationService } from './../../../components/snackbar/notification.service';
import { Component, OnInit } from '@angular/core';
import { ShareService } from './../../../services/share.service';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService, SearchCriteria } from './../../../services/resources.service';
import { ReplyBy } from './../../../cliente/profile/solicitacoes/reply-by';
import { Solicitacao } from './../../../cliente/profile/solicitacoes/solicitacao';
import { Reply } from './reply';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
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
  public reply = new Reply()
  public text = '';
  public id;
  public solicitacao = new Solicitacao();
  public replyBy = new ReplyBy();
  constructor(private resourse: ResourcesService,
    private route: ActivatedRoute,
    private shareService: ShareService,
    private ns: NotificationService,
    private localStorage: LocalStorageService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getItem();
    })
  }
  getItem() {
    this.resourse.path = 'solicitacao'
    this.resourse.getItem(this.id).subscribe(
      resp => {
        if (resp.result.reply_by) {
          this.replyBy = resp.result.reply_by;
        }
        this.solicitacao = resp.result;
        this.getReplys();
      })
  }
  getReplys() {
    this.resourse.path = 'solicitacao'
    let criteria = new SearchCriteria()
    let user = this.localStorage.getObject(this.localStorage.ADMIN_KEY).id
    criteria.zfTableColumn = JSON.stringify({
      receptionBy: user,
      parent: this.id
    });
    this.resourse.getList(criteria).subscribe(
      resp => {
        this.replys = resp.result.sEcho;
      }
    )
  }
  getCover(cover) {
    return this.shareService.getCover(cover)
  }

  save() {
    this.resourse.path = 'solicitacao';
    this.reply.client = this.solicitacao.client.id;
    this.reply.parent = this.solicitacao.id;
    this.reply.reply = this.text;
    this.reply.description = this.solicitacao.description;
    this.reply.empresa = this.localStorage.getObject(this.localStorage.ADMIN_KEY).empresa;
    this.reply.returnForm = this.solicitacao.returnform;
    this.reply.instancy = 2;
    this.reply.receptionby = this.solicitacao.reception_by.id;
    this.reply.status = 1;
    this.reply.replyBy = this.localStorage.getObject(this.localStorage.ADMIN_KEY).id;
    this.resourse.create(this.reply).subscribe(
      resp => {
        this.ns.notify(resp.result.msg)
        this.getReplys();
        this.resourse.update({status:2},this.id).subscribe(
          resp=>{
            this.ns.notify(resp.result.msg)
          }
        )
      }
    )
  }
}
