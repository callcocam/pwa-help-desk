import { LocalStorageService } from './../../../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { AuthenticateService } from './authenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthenticateGuestService implements CanActivate {

  constructor(private authService: AuthenticateService, private route: Router, private localStorage: LocalStorageService) { } 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      this.route.navigate(['admin'])
      return false;
    }
    else{
      this.localStorage.remove(this.localStorage.ADMIN_KEY);
      this.localStorage.remove(this.localStorage.ADMIN_TOKEN);
    }
   
    return true;
  }


}
