import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user',
  pure: false,
})
export class UserPipe implements PipeTransform {

  transform(array: any, currentUser: any): any {

    if(currentUser.admin === true){
      return array;
     } else {
       return array;
     }




  }
}
