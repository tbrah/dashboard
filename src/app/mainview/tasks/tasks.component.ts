import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private TaskService:TaskService, private UsersService:UsersService) { }

  ngOnInit() {
  }

}
