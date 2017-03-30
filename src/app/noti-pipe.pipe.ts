import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notiPipe'
})
export class NotiPipePipe implements PipeTransform {

  

  transform(array: any, currentUser?: any): any {

    let ret = [];
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
