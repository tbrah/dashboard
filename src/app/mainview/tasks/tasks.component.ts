import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { UsersService } from '../../users.service';
import { PopupService } from '../../popup.service';
import { DatepickerService } from '../../datepicker.service';
import { NotificationService } from '../../notification.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
  

  constructor(private TaskService:TaskService, private UsersService:UsersService, private PopupService:PopupService, private DatepickerService:DatepickerService, private NotificationService:NotificationService, private af:AngularFire) {

}

  ngOnInit() {
  }

  updateItem(item){
    let updates = {};
    updates['/tasks/' + item.$key] = item;
    this.af.database.object('').update(updates);
  }

  //check if the icon clicked on is the tick
  printSelector(event, item){
    if (event.srcElement.className.includes("fa-check-circle")){
      item.print = true;
    } else {
      item.print = false;
    }
  }
  enableEdit(item, idx, e){
    if(e.srcElement.innerHTML.toLowerCase() === " save changes"){

      let updates = {};
      updates['/tasks/' + item.$key] = this.currentTask;
      this.af.database.object('').update(updates);

      let textContent = item.title;
      let newNot = {
        text: textContent + "task was updated", 
        date: "07-07-09", 
        participent:[]
      }
      //For loop to grab the participents
      newNot.participent.push(item.participent[0]);
      console.log(newNot.participent);
    }
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
  // This logic should be moved to the task service
  delete(item,idx){
    let i = idx;
    this.af.database.list('/tasks').remove(item.$key);
  }
  adminApprove(item){
    item.adminapprove = true;
    item.papprove = false;
    item.status = "done";
    this.updateItem(item);
  }
  pApprove(item){
    item.papprove = true;
    this.updateItem(item);
  }
  deny(item){
    item.adminapprove = false;
    item.papprove =  false;
    this.updateItem(item);
  }
  reopen(item){
    item.adminapprove = false;
    item.papprove = true;
    item.status = "active";
    this.updateItem(item);
  }
  setHold(item){
    item.status = "on hold";
    this.updateItem(item);
  }
  setActive(item){
    item.status = "active";
    this.updateItem(item);
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
