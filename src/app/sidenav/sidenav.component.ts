import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NotificationService } from '../notification.service';
import { NavServiceService } from '../nav-service.service';
import { PostsService } from '../posts.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  profileNavCtrl:boolean = false;

  constructor(private TaskService:TaskService, private UsersService:UsersService, private NavService:NavServiceService, private NotificationService:NotificationService, private PostsService:PostsService) {
    
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
    this.NotificationService.findArrayLength();
  }

  selectMenu(menu){
    if (menu === "home"){
      this.NavService.selectedNav = "home";
    } if (menu === "calendar"){
      this.NavService.selectedNav = "calendar";
    } if (menu === "tasks"){
      this.NavService.selectedNav = "tasks";
    } if (menu === "styleguide-ordbogen"){
      this.NavService.selectedNav = "styleguide-ordbogen";
    } if (menu === "print checklist"){
      this.NavService.selectedNav = "print checklist";
    } if (menu === "styleguide-grammatip"){
      this.NavService.selectedNav = "styleguide-grammatip";
    }
    console.log(this.NavService.selectedNav);
  }

  checkList(){
    this.NotificationService.findArrayLength();
  }
  
  errorMessage;

  getData: string;

  selectActiveUser(user){
    this.TaskService.selectedActiveUser = user.toString();
  }

  clearSelEmpl(){
    this.TaskService.selectedActiveUser = "all";
  }
}
