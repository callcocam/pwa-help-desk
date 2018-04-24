import { LocalStorageService } from './../../../../services/local-storage.service';
import { Returnform } from './../returnform';
import { ShareService } from './../../../../services/share.service';
import { ResourcesService } from './../../../../services/resources.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  returnform = Array<Returnform>();
  public secrataria;
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


  public id;
  public solicitacoe;
  public AppForm: FormGroup;
  constructor(
    private localStorage: LocalStorageService,
    private resourse: ResourcesService,
    private formBuilder: FormBuilder,
    private shareService: ShareService) { }

  ngOnInit() {

    this.getSecretaria();
    this.AppForm = this.formBuilder.group({
      empresa: this.formBuilder.control(this.localStorage.getObject(this.localStorage.USER_KEY).empresa, [Validators.required]),
      client: this.formBuilder.control(this.localStorage.getObject(this.localStorage.USER_KEY).id, [Validators.required]),
      description: this.formBuilder.control("", [Validators.required]),
      receptionby: this.formBuilder.control("", [Validators.required]),
      returnform: this.formBuilder.control("", [Validators.required]),
    });

    this.returnform.push(new Returnform(-1, 'Selecione A forma De Resposta'));
    this.returnform.push(new Returnform(1, 'E-Mail'));
    this.returnform.push(new Returnform(2, 'Fax'));
    this.returnform.push(new Returnform(3, 'Correios'));
  }

  getSecretaria() {
    this.resourse.path = "user"
    this.resourse.getList().subscribe(
      resp => {
        this.secrataria = resp.result.sEcho;
      }
    )
  }
  onChange(event){
    console.log(event)
  }
  enviarSolicitacao(data){
    this.resourse.path = "solicitacao"
    this.resourse.create(data).subscribe(
      resp=>{
        console.log(resp)
      }
    )
  }


}