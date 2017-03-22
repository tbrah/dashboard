import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private UsersService:UsersService, private TaskService:TaskService) { }

  ngOnInit() {
  }

}
