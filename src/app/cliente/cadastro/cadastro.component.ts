import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ShareService, Cep } from "../../services/share.service";
import { EqualValidator } from "../../services/EqualValidator";
import { AuthService } from "../login/services/auth.service";
@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  public AppForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private shareService: ShareService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
    const formControlReference: FormControl = new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]);

    const senhaConfirmaFormControl: FormControl = new FormControl(
      "",
      Validators.compose([
        Validators.required,
        EqualValidator.sameValue(formControlReference)
      ])
    );

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
      document: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.shareService.documentCpCn)
      ]),
      password: formControlReference,
      reapt_password: senhaConfirmaFormControl
    });
    this.AppForm.controls["empresa"].patchValue(1);
    this.AppForm.controls["access"].patchValue(3);
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
  }

  getMask($event) {
    this.AppForm.controls["document"].patchValue(
      this.shareService.convertToCpfCnpj($event.target.value)
    );
  }

  create(data) {
    this.authService.create(data).subscribe(resp => {
      if(resp.result.result){
         this.router.navigate(['/inicio/login']);
      }
    });
  }

  login(){
    this.router.navigate(['login']);
  }
}
