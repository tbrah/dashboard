import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user',
  pure: false,
})
export class UserPipe implements PipeTransform {

  transform(array: any, currentUser: any): any {

    return array.filter(function bruh(array){
      return array.participent.filter(function(array){
        console.log("haystack array " + array.name.toLowerCase());
        console.log("current user " + currentUser.toLowerCase());
        console.log(array.name.toLowerCase().includes(currentUser.toLowerCase()));
        return array.name.toLowerCase().includes(currentUser.toLowerCase());
      })
    })

  }
}
