import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NotificationService {

  constructor(private af:AngularFire) {
    this.af.database.list('/notifications').subscribe(notifications =>{
      this.notifications = notifications;
    })
   }

  notifications = <any>[{
    date: "",
    participent:{},
    title: "",
    type: "",
  }];

  not = [
    {text: "Finish website task was updated", date: "07-07-09", participent:[{name:"Kristy Cunt", picture:"kristy.png"}]},
    {text: "Create website task was updated", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]},
    {text: "This is working John", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]}
  ]

}
