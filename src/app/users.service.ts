import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  users:any = [
    {id: 0, username : "Whitney Jørgensen", position : "Head of Talent Recruitment" , img: "whitney.jpg", admin: true,},
    {id: 1, username : "John Doet" , position : "Front-end Developer" , img: "profpic.jpg", admin: false,},
    {id: 2, username : "Kristy Cunt" , position : "Software Developer" , img: "kristy.png", admin: false,},
  ];

  loggedUser = {name:"Whitney Jørgensen", picture:"whitney.jpg"};

  constructor() { }

}
