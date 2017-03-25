import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { UsersService } from '../users.service';
import { DatepickerService } from '../datepicker.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private PopupService:PopupService, private UsersService:UsersService, private DatepickerService:DatepickerService) { }

  ngOnInit() {
  }

  showCalendar = "";
  newItem =
      {id:null,
      status:"",
      title:"",
      description:"",
      startdate:"",
      deadline:"",
      budget:"",
      print:false,
      location:"",
      papprove:false,
      adminapprove:false,
      participent:[],
    participentpic:"",
    orderby:{name:"", picture:""}
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

  }

  cancelAdd(){
    this.newItem =
        {id:null,
        status:"",
        title:"",
        description:"",
        startdate:"",
        deadline:"",
        budget:"",
        print:false,
        location:"",
        papprove:false,
        adminapprove:false,
        participent:[{name:"", picture:""},],
      participentpic:"",
      orderby:{name:"", picture:""}
      };
    this.PopupService.togglePopup();
  }

}
