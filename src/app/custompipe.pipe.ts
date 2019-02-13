import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customslice'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, args?: any){
    if(!value){
      return null;

    }
    // return value.slice(2,10)
    return value.substr(2,5)
  }

}
