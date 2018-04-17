import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../../services/share.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public AppForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private shareService: ShareService, private authService: AuthService) { }

  ngOnInit() {
    this.AppForm = this.formBuilder.group({
      document: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.shareService.documentCpCn)
      ]),
      password: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }
  getMask($event){
    this.AppForm.controls["document"].patchValue(this.shareService.convertToCpfCnpj($event.target.value));
 }
 login(data){
  this.authService.login(data).subscribe(
            resp=>{
              console.log(resp)
            }
  )
    
 }
}
