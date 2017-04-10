import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  apiUrl = "http://admin.ordbogen.com.tme.dev.ordbogen.com/testing.php";
  testing = <any>[];

  constructor(private http:Http) {}

  getData(){
    return this.http.get(this.apiUrl)
      .map(res => console.log(res))
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

}
