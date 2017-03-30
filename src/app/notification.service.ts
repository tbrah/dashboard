import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  not = [
    {text: "Finish website task was updated", date: "07-07-09", participent:[{name:"Kristy Cunt", picture:"kristy.png"}]},
    {text: "Create website task was updated", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]},
    {text: "This is working John", date: "02-04-09", participent:[{name:"John Doet", picture:"profpic.jpg"}]}
  ]

}
