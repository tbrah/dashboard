import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { UsersService } from '../users.service';
import { TaskService } from '../task.service';
import { DatepickerService } from '../datepicker.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private PopupService:PopupService, private UsersService:UsersService, private DatepickerService:DatepickerService, private TaskService:TaskService) { }

  ngOnInit() {
  }

  showCalendar = "";
  newItem =
      {id:null,
      status:"active",
      title:"",
      description:"",
      startdate:"",
      deadline:"",
      budget:"",
      print:false,
      location:"Not uploaded",
      papprove:false,
      adminapprove:false,
      participent:[],
    orderby:[]
    };

  toggleCalendar(e){

    if(e.srcElement.dataset.id === "startCalendar"){
      this.showCalendar = e.srcElement.dataset.id;
    } else if (e.srcElement.dataset.id === "deadline"){
      this.showCalendar = e.srcElement.dataset.id;
    } else {
      this.showCalendar = "";
    }
  }

  addItem(){
    let i = this.TaskService.tasks.length - 1;
    i++;
    this.newItem.id = i;
    this.newItem.orderby.push(this.UsersService.loggedUser);
    this.TaskService.tasks.push(this.newItem);
    this.cancelAdd();
  }

  cancelAdd(){
    this.newItem =
        {id:null,
        status:"active",
        title:"",
        description:"",
        startdate:"",
        deadline:"",
        budget:"",
        print:false,
        location:"Not uploaded",
        papprove:false,
        adminapprove:false,
        participent:[],
      orderby:[]
      };
    this.PopupService.togglePopup();
  }

  showEmplList = false;

  focusfun(){
    this.showEmplList = !this.showEmplList;
  }

  selectedEmpl(user){
      if(!this.newItem.participent.includes(user)){
        this.newItem.participent.push(user);
      }
  }

  deleteP(p){
    this.newItem.participent.splice(this.newItem.participent.indexOf(p), 1);
  }

  togglePrint(e){
    console.log(e.srcElement.innerHTML);
    if(e.srcElement.innerHTML === "No"){
      this.newItem.print = false;
    } else {
      this.newItem.print = true;
    }
  }

}
