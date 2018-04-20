import { AuthService } from './../../login/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { ShareService } from '../../../services/share.service';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;
  constructor(private storage: LocalStorageService, private share: ShareService,
  private router: Router, private authService:AuthService) { }

  ngOnInit() {
    this.user = this.storage.getObject(this.storage.USER_KEY);
    console.log(this.user)
    if(this.user){
      this.user.cover = this.share.getCover(this.user.cover)
    }
    
  }

  logout(){
    this.storage.remove(this.storage.USER_KEY);
    this.storage.remove('token')    
    this.authService.check = false
    // this.router.navigate(['inicio']);
    window.location.href = '/'
  }

}
