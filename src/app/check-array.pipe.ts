import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkArray',
  pure: false,
})
export class CheckArrayPipe implements PipeTransform {

  transform(array: any, args?: any): any {
    return array.filter(function(array:any){
      if(array.department !== null){
        return array;
      }
    })
  }

}
