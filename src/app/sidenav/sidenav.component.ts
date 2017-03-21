import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  profileNavCtrl:boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  toggleProfileNav(){
    if(this.profileNavCtrl === false){
      this.profileNavCtrl = !this.profileNavCtrl;
    } else {
      this.profileNavCtrl = false;
    }
  }
}
