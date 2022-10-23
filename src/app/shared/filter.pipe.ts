import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any[],filterSring:string,propName:string):any[] {
    const result:any = [];
    if(!value || filterSring===''  || propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterSring.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
