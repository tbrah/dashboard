import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { TaskService } from '../../task.service';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private UsersService:UsersService, private TaskService:TaskService, private PopupService:PopupService) { }

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
    }

    if(this.storedValue === button){
      this.toggleButton = true;
    } else {
      this.toggleButton = false;
    }
  }

}
