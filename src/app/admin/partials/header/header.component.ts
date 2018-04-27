import { AuthenticateService } from './../../auth/services/authenticate.service';
import { ShareService } from './../../../services/share.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;
  constructor(private localStorage: LocalStorageService, private share: ShareService,
    private router: Router, private authService:AuthenticateService) { }
  ngOnInit() {
     this.user = this.localStorage.getObject(this.localStorage.ADMIN_KEY)
  }
  logout(){
    this.localStorage.remove(this.localStorage.USER_KEY);
    this.localStorage.remove(this.localStorage.ADMIN_TOKEN)    
    this.authService.check = false
    this.router.navigate(['/admin/auth']);
   // window.location.href = '/admin/auth'
  }
}
