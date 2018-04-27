import { LocalStorageService } from './../../../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private authService: AuthService, private router: Router,private localStorage: LocalStorageService) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      return true;
    }
    this.localStorage.remove(this.localStorage.USER_KEY);
    this.localStorage.remove(this.localStorage.USER_TOKEN);
    this.router.navigate(['login'])
    return false;
  }

}
