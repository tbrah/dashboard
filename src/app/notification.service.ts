import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NotificationService {

  constructor(private af:AngularFire, private UsersService:UsersService) {
    this.af.database.list('/notifications').subscribe(data =>{
      this.notifications = data;
      this.findArrayLength();
    })
    
   }

  notifications = <any>[{}];

  not = [
    {text: "Finish website task was updated", date: "07-07-09", participent:[{name:"Kristy Cunt", picture:"kristy.png"}]},
    {text: "Create website task was updated", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]},
    {text: "This is working John", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]}
  ]

  seenArray = [];
  seenNumber:number;

  findArrayLength(){
    let loggedUser = this.UsersService.loggedUser;
    let newArray = <any>[];
    let newArrayLogged = <any>[];
    
    this.notifications.forEach(function(entry, index){
        entry.participent.forEach(function(childEntry){
          if(childEntry.view.seen === false){
            newArray.push(childEntry);
          }
        })
    })

    //Array aquired, now filter out the users to loggedUser
    newArray.forEach(function(entry){
      if(entry.id === loggedUser.id){
        newArrayLogged.push(entry);
      }
    })
    this.seenArray = newArrayLogged;
    this.seenNumber = this.seenArray.length;
  }

}
