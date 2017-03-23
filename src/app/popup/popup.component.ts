import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';
import { DatepickerService } from '../datepicker.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private PopupService:PopupService, private DatepickerService:DatepickerService) { }

  ngOnInit() {
  }

}
