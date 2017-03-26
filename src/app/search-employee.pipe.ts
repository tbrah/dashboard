import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee',
  pure: false,
})
export class SearchEmployeePipe implements PipeTransform {

  transform(user: any, currentSearch: any): any {
    //check if search term is undefined
    if(currentSearch === undefined) return user;
    // return updated list array
     return user.filter(function(user:any){
      return user.name.toLowerCase().includes(currentSearch.toLowerCase());
    });
  }

}
