import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  users:any = [
    {id: 0, name : "Whitney Jørgensen", position : "Head of Talent Recruitment" , picture: "whitney.jpg", admin: true,},
    {id: 1, name : "John Doet" , position : "Front-end Developer" , picture: "profpic.jpg", admin: false,},
    {id: 2, name : "Kristy Cunt" , position : "Software Developer" , picture: "kristy.png", admin: false,},
  ];

  loggedUser = {id: 0, name : "Whitney Jørgensen", position : "Head of Talent Recruitment" , picture: "whitney.jpg", admin: true,};
  currentSearch:any;

  constructor() { }

}
