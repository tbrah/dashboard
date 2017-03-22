import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks=[
    {id:0, status:"active", title:"Testing", description:"testing description", startdate:"01-02-2017", deadline:"24-02-2017", budget:"500", print:false, location:"MainStorage/here/there/here/file.psd", papprove:false, adminapprove:false, participent:"John Doet", participentpic:"profpic.jpg", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
    {id:0, status:"on hold", title:"Testing 2", description:"testing description 2", startdate:"02-03-2017", deadline:"24-03-2017", budget:"550", print:true, location:"MainStorage/here/there/here/file.psd", papprove:true, adminapprove:false, participent:"Kristy Cunt", participentpic:"kristy.png", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
    {id:0, status:"done", title:"Testing 32", description:"testing description 3", startdate:"02-03-2017", deadline:"24-03-2017", budget:"550", print:true, location:"MainStorage/here/there/here/file.psd", papprove:false, adminapprove:true, participent:"Kristy Cunt", participentpic:"kristy.png", orderby:"Whitney Jørgensen", orderbypic:"whitney.jpg"},
  ]

  constructor() { }

}
