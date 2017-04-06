import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { UsersService } from '../users.service';
import { TaskService } from '../task.service';
import { DatepickerService } from '../datepicker.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private PopupService:PopupService, private UsersService:UsersService, private DatepickerService:DatepickerService, private TaskService:TaskService, private af:AngularFire,) { }

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

  notArray = {
    date:"",
    participent: [],
    title:"",
    type: "add",
  };

  addItem(){
    let i = this.TaskService.items.length;
    i++;
    this.newItem.id = i;
    
    
    this.notArray.title = this.newItem.title;
    this.notArray.type = "add";
    let currentDate = new Date();
    let convertDate = currentDate.toString();
    this.notArray.date = convertDate;
    this.newItem.orderby.push(this.UsersService.loggedUser);
    let myMa = [];
    myMa['seen']= false;
    console.log(myMa)
    this.newItem.participent.forEach(function(item, index){
      let name = "view"
      item[name] = myMa;
    })
    this.notArray.participent = this.newItem.participent;

    this.af.database.list('/notifications').push(this.notArray);
    this.af.database.list('/tasks').push(this.newItem);

    this.PopupService.togglePopup();
  }

  showEmplList = false;

  cancelAdd(){
    //Reset all the values if user clicks on the (x)
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
    if(e.srcElement.innerHTML === "No"){
      this.newItem.print = false;
    } else {
      this.newItem.print = true;
    }
  }

}
