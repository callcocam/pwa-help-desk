import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { ShareService } from './../../../../services/share.service';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from './../../../../services/resources.service';
import { Returnform } from './../returnform';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  returnform = Array<Returnform>();
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
    private resourse: ResourcesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private shareService: ShareService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.AppForm = this.formBuilder.group({
        empresa: this.formBuilder.control("", [Validators.required]),
        client: this.formBuilder.control("", [Validators.required]),
        description: this.formBuilder.control("", [Validators.required]),
        receptionby: this.formBuilder.control("", [Validators.required]),
        returnform: this.formBuilder.control("", [Validators.required]),
      });
      this.getItem(params);


    })

  }
  getItem(params) {
    this.resourse.path = 'solicitacao'
    this.resourse.getItem(params['id']).subscribe(
      resp => {
        this.solicitacoe = resp.result;
        this.setForm(resp.result);
        this.returnform.push(new Returnform(-1, 'Selecione A forma De Resposta'));
        this.returnform.push(new Returnform(1, 'E-Mail'));
        this.returnform.push(new Returnform(2, 'Fax'));
        this.returnform.push(new Returnform(3, 'Correios'));
      })
  }
  setForm(solicitacoe) {
    this.AppForm.controls["empresa"].patchValue(solicitacoe.empresa);
    this.AppForm.controls["receptionby"].patchValue(solicitacoe.receptionby);
    this.AppForm.controls["returnform"].patchValue(solicitacoe.returnform);
    this.AppForm.controls["description"].patchValue(solicitacoe.description);
    this.AppForm.controls["client"].patchValue(solicitacoe.client);
  }

}