import { ResourcesService } from './../../services/resources.service';

import { Router } from '@angular/router';
import { AuthService } from './../login/services/auth.service';
import { ShareService } from './../../services/share.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user;
  public image;


  constructor(
    private storage: LocalStorageService,
    private share: ShareService) { }


  ngOnInit() {
    this.user = this.storage.getObject(this.storage.USER_KEY)
    if (this.user) {
      this.user.cover = this.share.getCover(this.user.cover)
      this.image = this.user.cover
    }
  }
}
