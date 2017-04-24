import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TaskService {

  items = [];
  activeUsers = [];
  selectedActiveUser = "all";

  constructor(private af:AngularFire){
      this.af.database.list('/tasks').subscribe(data =>{
      this.items = data;
      this.findPendingNumber();
      this.searchForUsers();
    });
  }

  currentSearch:any;
  deleteActivation = false;
  currentTab = "all";
  pendingNumber:number;

  //This toggles the user task filter.
  //Switch is in top-nav.
  myTask = null;

  findPendingNumber(){
    let i = 0;
    this.items.forEach(function(entry, index){
      if(entry.papprove){
        i++;
      }
    })
    this.pendingNumber = i;
  }
  
  searchForUsers(){
    let userArray = <any>[];
    this.items.forEach(function(entry){
      entry.participent.forEach(function(childEntry){
        let name = childEntry.name;
        if(userArray.indexOf(name) === -1){
          userArray.push(childEntry.name)
        }
      })  
    });
    this.activeUsers = userArray;
  }
}
