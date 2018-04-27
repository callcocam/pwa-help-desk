import { LocalStorageService } from './../../../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuestService implements CanActivate {

  constructor(private authService: AuthService, private route: Router,private localStorage:LocalStorageService) { } 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      this.route.navigate(['inicio'])
      return false;
    }
    else{
      this.localStorage.remove(this.localStorage.USER_KEY);
      this.localStorage.remove(this.localStorage.USER_TOKEN);
    }    
    return true;
  }


}
