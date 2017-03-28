import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks=[
    {id:0,
    status:"active",
    title:"Testing",
    description:"testing description",
    startdate:"01-02-2017",
    deadline:"5-02-2017",
    budget:"500",
    print:false,
    location:"MainStorage/here/there/here/file.psd",
    papprove:true,
    adminapprove:false,
    participent:[{name:"John Doet", picture:"profpic.jpg"},
                {name:"Kristy Cunt", picture:"kristy.png"},
              ],
  orderby:[{name:"Whitney Jørgensen", picture:"whitney.jpg"}]
},
{id:1,
status:"on hold",
title:"this is task number 2",
description:"testing description testing descriptiontesting descriptiontesting descriptiontesting descriptiontesting descriptiontesting descriptiontesting description",
startdate:"01-02-2017",
deadline:"5-02-2017",
budget:"500",
print:false,
location:"MainStorage/here/there/here/file.psd",
papprove:false,
adminapprove:false,
participent:[{name:"John Doet", picture:"profpic.jpg"},
          ],
orderby:[{name:"Whitney Jørgensen", picture:"whitney.jpg"}]
},
  ]

  currentSearch:any;
  deleteActivation = false;
  currentTab = "all";

  constructor() { }

}
