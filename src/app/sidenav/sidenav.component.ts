import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  profileNavCtrl:boolean = false;

  constructor(private UsersService:UsersService, private NavService:NavServiceService) {
    
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

  changeUser(){
    if(this.UsersService.loggedUser === this.UsersService.users[2]){
       this.UsersService.loggedUser = this.UsersService.userDB[0];
    } else {
      this.UsersService.loggedUser = this.UsersService.users[2];
    }

  }

  selectMenu(menu){
    if (menu === "home"){
      this.NavService.selectedNav = "home";
    } if (menu === "calendar"){
      this.NavService.selectedNav = "calendar";
    } if (menu === "tasks"){
      this.NavService.selectedNav = "tasks";
    } if (menu === "styleguide"){
      this.NavService.selectedNav = "styleguide";
    } if (menu === "print checklist"){
      this.NavService.selectedNav = "print checklist";
    }
  }

}
