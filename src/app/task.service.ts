import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TaskService {

  items = [];

  constructor(private af:AngularFire){
      this.af.database.list('/tasks').subscribe(data =>{
      this.items = data;
      this.findPendingNumber();
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
  

}
