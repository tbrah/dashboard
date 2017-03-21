import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks=[
    {id:0, status:"Active", title:"Testing", description:"testing description", startdate:"01-02-2017", deadline:"24-02-2017", budget:"500DKK", print:false, location:"MainStorage/here/there/here/file.psd", papprove:false, adminaprov:false, participent:"John Doet", participentpic:"profpic.jpg", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
    {id:0, status:"On hold", title:"Testing 2", description:"testing description 2", startdate:"02-03-2017", deadline:"24-03-2017", budget:"550DKK", print:true, location:"MainStorage/here/there/here/file.psd", papprove:true, adminaprov:false, participent:"Kristy Cunt", participentpic:"kristy.png", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
    {id:0, status:"Done", title:"Testing 32", description:"testing description 3", startdate:"02-03-2017", deadline:"24-03-2017", budget:"550DKK", print:true, location:"MainStorage/here/there/here/file.psd", papprove:false, adminaprov:true, participent:"Kristy Cunt", participentpic:"kristy.png", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
  ]

  constructor() { }

}
