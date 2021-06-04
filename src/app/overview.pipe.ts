import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(value: string, count:number): unknown {
   
    return value.split(" ").splice(0, count).join(" ")
  }

}
