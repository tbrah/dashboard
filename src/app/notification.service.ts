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

  // Clear the seen new notifications for the user.
  clearNewNotifications(){
    let loggedUser = this.UsersService.loggedUser;

    //Loop through all the notifications and find the ones that should be updated
    this.notifications.forEach(function(entry){
      entry.participent.forEach(function(childEntry){
        if(childEntry.id === loggedUser.id){
          childEntry.view.seen = true;
        }
      })
    })
    //Push the objects to the database so updated values are realised.
    let updates = {};
    updates['/notifications/'] = this.notifications;
    this.af.database.object('').update(updates);
  }
}
