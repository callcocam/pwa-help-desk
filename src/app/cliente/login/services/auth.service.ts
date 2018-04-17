import { Injectable } from "@angular/core";
import { ShareService } from "../../../services/share.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  constructor(private shareService: ShareService) {}

  login(data): Observable<any> {
    return this.shareService.http.post(
      `${this.shareService.API.url}auth/client`,
      data
    );
  }
  create(data): Observable<any> {
    return this.shareService.http.post(
      `${this.shareService.API.url}client`,
      data
    );
  }

  get(data): Observable<any> {
    return this.shareService.http.get(`${this.shareService.API.url}client`);
  }
}
