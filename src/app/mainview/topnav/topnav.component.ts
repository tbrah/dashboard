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

  toggleButton = true;
  storedText:string;

  setTab(e){

    let button = e.srcElement.innerHTML.toLowerCase();

    //toggling the button, check if it is already selected.
    if (this.storedText === button){
      this.toggleButton = !this.toggleButton; // click off button
    }

    console.log(this.toggleButton);

    this.storedText = button;



    console.log("CurrentTab = " + this.TaskService.currentTab);

    if(button === "active"){
      this.TaskService.currentTab = "active";
    } else if (button === "on hold"){
      this.TaskService.currentTab = "on hold";
    } else if (button === "done"){
      this.TaskService.currentTab = "done";
    }
    
    if (this.toggleButton === true){
      this.TaskService.currentTab = "all";
    }

    console.log("Ending state = " + this.TaskService.currentTab);

  }

}
