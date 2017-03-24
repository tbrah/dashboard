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

}
