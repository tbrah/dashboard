import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { UsersService } from '../../users.service';
import {PopupService } from '../../popup.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private TaskService:TaskService, private UsersService:UsersService, private PopupService:PopupService) { }

  ngOnInit() {
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
}
