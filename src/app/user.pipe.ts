import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user',
  pure: false,
})
export class UserPipe implements PipeTransform {

  transform(array: any, currentUser: any): any {

    let ret = [];

    if(currentUser === null) return array;

    if(currentUser.admin === true) return array;

    array.forEach(function (item){
      let ret1 = item.participent.filter(function (e){
        return e.name.toLowerCase().includes(currentUser.name.toLowerCase());
      });

       if(ret1.length > 0){
         ret.push(item);
       }
    });
   
    return ret;

  }
}
