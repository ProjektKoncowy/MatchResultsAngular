import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(array: any, field: string): any[] {
    if(!Array.isArray(array)){
      return array;
    }
    array.sort((a:any , b:any)=>{
      if(a[field]<b[field]){
        return 1;
      }else if(a[field]>b[field]){
        return -1;
      }else {
        return 0;
      }
    })
   return array;
  }
}
