import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { TaskService } from '../../task.service';
import { PopupService } from '../../popup.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private UsersService:UsersService, private TaskService:TaskService, private PopupService:PopupService, private NotificationService:NotificationService) { }

  ngOnInit() {
  }

  toggleDelete(){
    if(this.TaskService.deleteActivation === false){
      this.TaskService.deleteActivation = true;
    } else {
      this.TaskService.deleteActivation = false;
    }
  }

  toggleButton = false;
  storedValue:string;

  setTab(e){
    let button = e.srcElement.innerHTML.toLowerCase(); // active, on hold, done

    // Checking if the same button was already active.
    if(this.toggleButton === true && this.storedValue === button){
      this.TaskService.currentTab = "all";
      this.toggleButton = false;
      // Re-setting the storedValue to prevent getting stuck above ^.
      this.storedValue = "";
      // Checking what button is clicked and changing the filter.
    } else if (button === "active"){ 
      this.TaskService.currentTab = "active"; 
      this.storedValue = button;     
    } else if (button === "on hold"){
      this.TaskService.currentTab = "on hold";
      this.storedValue = button;
    } else if (button === "done") {
      this.TaskService.currentTab = "done";
      this.storedValue = button;
    } else if (button === "pending"){
      this.TaskService.currentTab = "pending";
      this.storedValue = button;
    }

    if(this.storedValue === button){
      this.toggleButton = true;
    } else {
      this.toggleButton = false;
    }
  }

  toggleTasks = false;
  storedTask:string;

  toggleMyTask(e){

    let taskbtn = e.srcElement.innerHTML.toLowerCase(); // My Tasks , All Tasks
    if(taskbtn === "my tasks"){
      this.storedTask = "my tasks";
      this.TaskService.myTask = this.UsersService.loggedUser;
      this.TaskService.currentTab = "all";
      this.toggleButton = false;
      this.storedValue = "";
    } else {
      this.storedTask = "all tasks";
      this.TaskService.myTask = null;
      this.TaskService.currentTab = "all";
      this.toggleButton = false;
      this.storedValue = "";
    }
  }

  showNotification = false;

  toggleNotification(){
    this.showNotification = !this.showNotification;
  }

  findArrayLength(){
    console.log(this.NotificationService.notifications[1].participent[0][0].seen)
  }

}
