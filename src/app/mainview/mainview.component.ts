import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
})
export class MainviewComponent implements OnInit {


  constructor(private TaskService:TaskService) { }

  ngOnInit() {
  }

}
