import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { UsersService } from '../../users.service';
import { PopupService } from '../../popup.service';
import { DatepickerService } from '../../datepicker.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  /*Edit*/
  editActive:number;
  currentTask = [];
  undoChanges = []; // {id:0, title: "testing", description: ""}


  constructor(private TaskService:TaskService, private UsersService:UsersService, private PopupService:PopupService, private DatepickerService:DatepickerService) {

}

  ngOnInit() {
  }
  //check if the icon clicked on is the tick
  printSelector(event, item){
    if (event.srcElement.className.includes("fa-check-circle")){
      item.print = true;
    } else {
      item.print = false;
    }
  }
  enableEdit(item, idx){
    if(this.editActive === idx){
      this.editActive = null;
      this.currentTask = [];
    } else {
      // Undochanges saves the state in an array for undo
      // Comming soon
      this.undoChanges = item;
      this.editActive = idx;
      this.currentTask = item;
    }
  }
  delete(item,idx){
    let i = idx;
    this.TaskService.tasks.splice(i, 1);
  }
  adminApprove(item){
    item.adminapprove = true;
    item.papprove = false;
    item.status = "done";
  }
  pApprove(item){
    item.papprove = true;
  }
  deny(item){
    item.adminapprove = false;
    item.papprove =  false;
  }
  reopen(item){
    item.adminapprove = false;
    item.papprove = true;
    item.status = "active";
  }
  setHold(item){
    item.status = "on hold";
  }
  setActive(item){
    item.status = "active";
  }
  closeCalendar(){
    this.DatepickerService.currentDate = null;
    this.DatepickerService.setCalendarStartDate = null;
    this.DatepickerService.setCalendarDeadline = null;
  }
  openCalendarStart(idx, item){

    if(this.UsersService.loggedUser.admin){
        this.DatepickerService.currentDate = item;
      if(this.DatepickerService.setCalendarStartDate === null){
        this.DatepickerService.setCalendarStartDate = idx;
      } else {
        this.DatepickerService.setCalendarStartDate = null;
      }
    }

  }
  openCalendarDeadline(idx, item){
    if(this.UsersService.loggedUser.admin){
        this.DatepickerService.currentDate = item;
      if(this.DatepickerService.setCalendarDeadline === null){
        this.DatepickerService.setCalendarDeadline = idx;
      } else {
        this.DatepickerService.setCalendarDeadline = null;
      }
    }

  }







}
