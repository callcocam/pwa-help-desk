import { LocalStorageService } from './../../../services/local-storage.service';
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'clientToken';
@Injectable()
export class JwtTokenService {

  
  constructor(private localStorage: LocalStorageService) {
  }

  get token() {
      return this.localStorage.get(TOKEN_KEY);
  }

  set token(value) {
      value ? this.localStorage.set(TOKEN_KEY, value) : this.localStorage.remove(TOKEN_KEY);
  }

}
