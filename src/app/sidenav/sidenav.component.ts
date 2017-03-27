import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  profileNavCtrl:boolean = false;

  constructor(private UsersService:UsersService) {

  }

  ngOnInit() {
  }

  toggleProfileNav(){
    if(this.profileNavCtrl === false){
      this.profileNavCtrl = !this.profileNavCtrl;
    } else {
      this.profileNavCtrl = false;
    }
  }
}
