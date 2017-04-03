import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TaskService {

  items = [];

  /*items: FirebaseListObservable<any[]>;*/
/*    this.items = af.database.list('/');
    this.items.subscribe(
     val => console.log(val)
*/
  constructor(private af:AngularFire){
      this.af.database.list('/tasks').subscribe(items => {
      this.items = items
    })
  }

  currentSearch:any;
  deleteActivation = false;
  currentTab = "all";

  //This toggles the user task filter.
  //Switch is in top-nav.
  myTask = null;
  

}
