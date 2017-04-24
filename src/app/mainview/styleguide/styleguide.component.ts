import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../../nav-service.service';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {

  constructor(private NavService:NavServiceService) { }

  ngOnInit() {
  }

}
