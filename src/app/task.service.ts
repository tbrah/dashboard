import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks=[
    {id:0, title:"Testing", description:"testing description", startdate:"01-02-2017", deadline:"24-02-2017", budget:"500DKK", print:false, location:"MainStorage/here/there/here/file.psd", papprove:false, adminaprov:false, participent:"John Doet", orderby:"Whitney Jørgensen"},
  ]

  constructor() { }

}
