import { JwtAdminTokenService } from './jwt-admin-token.service';
import { Observable } from 'rxjs/Observable';
import { ShareService } from './../../../services/share.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

  public check:boolean = false;
  constructor(private shareService: ShareService,
    public jwtToken: JwtAdminTokenService
  ) {
    this.check = this.jwtToken.token ? true : false;
  }

  login(data): Observable<any> {
    return this.shareService.http.post(
      `${this.shareService.API.url}auth`,
      data
    );
  }
  create(data): Observable<any> {
    return this.shareService.http.post(
      `${this.shareService.API.url}user`,
      data
    );
  }

  get(data): Observable<any> {
    return this.shareService.http.get(`${this.shareService.API.url}user`);
  }

}
