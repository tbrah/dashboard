import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabFilter',
  pure: false,
})
export class TabFilterPipe implements PipeTransform {

  transform(array: any, currentTab: any): any {
    //check if search term is undefined
    if(currentTab === "all"){
      return array;
    } else if (currentTab === "active"){
      return array.filter(function(array:any){
        return array.status === "active";
      }); 
    } else if (currentTab === "done"){
      return array.filter(function(array:any){
        return array.adminapprove === true;
      }); 
    } else if (currentTab === "on hold") {
      return array.filter(function(array:any){
        return array.status === "on hold";
      })
    } else if (currentTab === "pending"){
      return array.filter(function(array:any){
        return array.papprove === true;
      })
    }
  }

}
