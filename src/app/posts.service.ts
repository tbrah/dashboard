import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  posts=[
    {id:0, author:"Whitney Jørgensen",
    title: "In Beijing, Two Wheels Are Only a Smartphone Away",
    content: "Stepping off a stylish, compact, orange-and-silver bicycle on the sidewalk outside her Beijing office, Cao Dachui kicked down its metal stand and locked the back wheel. Her half mile ride from a nearby subway station cost just 14 cents, and she could leave the bike anywhere.“It’s so very convenient,” Ms. Cao, 27, said as buses and cars roared by, disgorging the stink of gasoline exhaust. Walking to the advertising agency would have taken twice as long. “Life has really gotten easier,” she said. Her friend Ma Zheng, 23, who was parking his own shared bike, nodded.",
    date: "12 / 21 / 2017",
    username : "Whitney Jørgensen",
    position : "Head of Talent Recruitment",
    img: "whitney.jpg",
    admin: true,},
    {id:1, author: "Whitney Jørgensen", title: "New dashboard in development", content: "President Trump has so far maintained the strategy of training and supporting indigenous forces to fight their own wars instead of deploying large American forces to far-flung hot spots.", date: "13 / 21 / 2017", username : "John Doet" , position : "Front-end Developer" , img: "profpic.jpg", admin: false,},
    {id:2, author: "John Doet", title: "This is title 3", content: "This is the content to show, Another one", date: "14 / 21 / 2017", username : "Kristy Cunt" , position : "Software Developer" , img: "kristy.png", admin: false,}
  ]


  constructor() { }

}
