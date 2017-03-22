import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {

  transform(item: any, currentSearch: any): any {
    //check if search term is undefined
    if(currentSearch === undefined) return item;
    // return updated list array
     return item.filter(function(item:any){
      return item.title.toLowerCase().includes(currentSearch.toLowerCase());
    });
  }

}
