import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UsersService {

  userDB = [];

  constructor(private af:AngularFire) {
      this.af.database.list('/users').subscribe(users => {
      this.userDB = users;
    })
  }

  users:any = [
    {id: 0, name : "Whitney Jørgensen", position : "Head of Talent Recruitment" , picture: "whitney.jpg", admin: true,},
    {id: 1, name : "John Doet" , position : "Front-end Developer" , picture: "profpic.jpg", admin: false,},
    {id: 2, name : "Kristy Cunt" , position : "Software Developer" , picture: "kristy.png", admin: false,},
  ];

  loggedUser = this.users[0];
  currentSearch:any;


}
