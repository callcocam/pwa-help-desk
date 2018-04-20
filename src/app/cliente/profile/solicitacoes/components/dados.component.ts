import { Router } from '@angular/router';
import { ResourcesService } from './../../../../services/resources.service';
import { AuthService } from './../../../login/services/auth.service';
import { ShareService } from './../../../../services/share.service';
import { LocalStorageService } from './../../../../services/local-storage.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  public user;
  public AppForm: FormGroup;
  public image;


  constructor(
    private storage: LocalStorageService,
    private share: ShareService,
    private authService: AuthService,
    private resource: ResourcesService,
    private formBuilder: FormBuilder,
    private shareService: ShareService,
    private router: Router) { }
 

  ngOnInit() {
   
    this.AppForm = this.formBuilder.group({
      empresa: this.formBuilder.control("", [Validators.required]),
      access: this.formBuilder.control("", [Validators.required]),
      name: this.formBuilder.control("", [Validators.required]),
      profession: this.formBuilder.control("", []),
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.shareService.email)
      ]),
      phone: this.formBuilder.control("", [Validators.required]),
      zip: this.formBuilder.control("", [Validators.required]),
      state: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      city: this.formBuilder.control("", [Validators.required]),
      district: this.formBuilder.control("", [Validators.required]),
      street: this.formBuilder.control("", [Validators.required]),
      number: this.formBuilder.control("", [Validators.required]),
      complement: this.formBuilder.control("", []),
      cover: this.formBuilder.control("", []),
      document: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.shareService.documentCpCn)
      ])
    });
    this.user = this.storage.getObject(this.storage.USER_KEY);

    this.AppForm.controls["empresa"].patchValue(this.user.empresa);
    this.AppForm.controls["access"].patchValue(this.user.access);
    this.AppForm.controls["name"].patchValue(this.user.name);
    this.AppForm.controls["profession"].patchValue(this.user.profession);
    this.AppForm.controls["email"].patchValue(this.user.email);
    this.AppForm.controls["phone"].patchValue(this.user.phone);
    this.AppForm.controls["access"].patchValue(this.user.access);
    this.AppForm.controls["zip"].patchValue(this.user.zip);
    this.AppForm.controls["state"].patchValue(this.user.state);
    this.AppForm.controls["city"].patchValue(this.user.city);
    this.AppForm.controls["district"].patchValue(this.user.district);
    this.AppForm.controls["number"].patchValue(this.user.number);
    this.AppForm.controls["complement"].patchValue(this.user.complement);
    this.AppForm.controls["document"].patchValue(this.user.document);
    this.AppForm.controls["cover"].patchValue(this.user.cover);
    if (this.user) {
      this.user.cover = this.share.getCover(this.user.cover)
      this.image = this.user.cover
    }
    this.AppForm.controls["zip"].valueChanges.subscribe(result => {
      let cep: string;
      cep = result.replace(/\D/g, "");
      //Verifica se campo cep possui valor informado.
      if (cep != "") {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
          this.shareService.http
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .subscribe(data => {
              let address = this.shareService.converterRespostaParaCep(data);
              this.AppForm.controls["city"].patchValue(address.city);
              this.AppForm.controls["street"].patchValue(address.street);
              this.AppForm.controls["district"].patchValue(address.district);
              this.AppForm.controls["state"].patchValue(address.state);
            });
        }
      }
    });
    this.resource.path = 'client'
    this.resource.getItem(this.user.id).subscribe(resp=>{
      console.log(resp)
    })
  }

  getMask($event) {
    this.AppForm.controls["document"].patchValue(
      this.shareService.convertToCpfCnpj($event.target.value)
    );
  }
  
  update(data) {
    this.resource.update(data).subscribe(resp => {
     console.log(resp)
    });
  }
  upload($event) {
    console.log(JSON.parse($event).result)
    this.AppForm.controls["cover"].patchValue(JSON.parse($event).result.location);
    this.image = this.share.getCover(JSON.parse($event).result.location);
  }

}
