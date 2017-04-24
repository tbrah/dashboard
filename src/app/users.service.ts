import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  userDB = [];
  loggedUserP = <any>[];

  constructor(private af:AngularFire, private http:Http) {
      this.af.database.list('/users').subscribe(users => {
      this.userDB = users;
    });
    this.checkJson();
  }

  apiUrl = "/loggedUserApi.php";

  getData(){
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  checkJson(){
    this.getData().subscribe(
      data => this.loggedUser = data,
      error => alert(error)
    );
    this.loggedUser = this.loggedUserP;
  }

  users:any = [
    {id: 0, name : "Whitney Jørgensen", position : "Head of Talent Recruitment" , image: "whitney.jpg", admin: true,},
    {id: 1, name : "John Doet" , position : "Front-end Developer" , image: "profpic.jpg", admin: false,},
    {id: 2, name : "Kristy Cunt" , position : "Software Developer" , image: "kristy.png", admin: false,},
  ];

  loggedUser = this.users[2];
  currentSearch:any;


}
