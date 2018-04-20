import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.check){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }

}
