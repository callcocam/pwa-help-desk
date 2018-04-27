import { LocalStorageService } from './../../../services/local-storage.service';
import { Router } from '@angular/router';
import { AuthenticateService } from './../services/authenticate.service';
import { ShareService } from './../../../services/share.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../components/snackbar/notification.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  public AppForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private shareService: ShareService,
    private authService: AuthenticateService,
    private router: Router,
    private notifica: NotificationService,
    private storage: LocalStorageService) { }

  ngOnInit() {
    this.AppForm = this.formBuilder.group({
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.pattern(this.shareService.email)
      ]),
      password: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }
  login(data) {
    this.authService.login(data).subscribe(
      resp => {
        if (resp.result.user) {
          this.storage.set(this.storage.ADMIN_TOKEN, resp.result.token)
          this.storage.setObject(this.storage.ADMIN_KEY, resp.result.user)
          this.authService.check = true
          this.router.navigate(['/admin']);
         // window.location.href = '/admin'
        }
      }
    )

  }
}
