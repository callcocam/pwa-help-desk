import { AuthenticateService } from './authenticate.service';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';

@Injectable()
export class AuthenticateGuardService  implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router, private localStorage: LocalStorageService) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      return true;
    }else{
      this.localStorage.remove(this.localStorage.ADMIN_KEY);
      this.localStorage.remove(this.localStorage.ADMIN_TOKEN);
      this.router.navigate(['admin/auth'])
    }   
     return false;
  }

}
