import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUser',
  pure: false
})
export class ActiveUserPipe implements PipeTransform {

  transform(array: any, activeUser: any): any {

    let ret = [];

    if(activeUser === "all") return array;

    array.forEach(function (item){
      let ret1 = item.participent.filter(function (e){
        return e.name.toLowerCase().includes(activeUser.toLowerCase());
      });

       if(ret1.length > 0){
         ret.push(item);
       }
    });
   
    return ret;
  }

}
