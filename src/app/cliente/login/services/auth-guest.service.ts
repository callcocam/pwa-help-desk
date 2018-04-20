import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuestService implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { } 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(this.authService.check)
    if(this.authService.check){
      this.route.navigate(['inicio'])
      return false;
    }
    return true;
  }


}
