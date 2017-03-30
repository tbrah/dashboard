import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { NavServiceService } from '../nav-service.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
})
export class MainviewComponent implements OnInit {


  constructor(private TaskService:TaskService, private NavService:NavServiceService) { }

  ngOnInit() {
  }

}
