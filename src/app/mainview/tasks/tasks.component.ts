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

  /*Calendar variables*/
  setCalendarStartDate = null;
  setCalendarDeadline = null;
  currentDate = [];
  pickedDate:any;

  constructor(private TaskService:TaskService, private UsersService:UsersService, private PopupService:PopupService, private DatepickerService:DatepickerService) {
  }

  ngOnInit() {

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
  approve(item){
    item.adminapprove = true;
    item.papprove = false;
    item.status = "done";
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
    this.currentDate = null;
    this.setCalendarStartDate = null;
    this.setCalendarDeadline = null;
  }
  openCalendarStart(idx, item){
    this.currentDate = item;
    if(this.setCalendarStartDate === null){
      this.setCalendarStartDate = idx;
    } else {
      this.setCalendarStartDate = null;
    }
  }
  openCalendarDeadline(idx, item){
    this.currentDate = item;
    if(this.setCalendarDeadline === null){
      this.setCalendarDeadline = idx;
    } else {
      this.setCalendarDeadline = null;
    }
  }

}
