import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value, gender): string {
    return gender == 'male' ? `Mr. ${value}` : `Miss. ${value}`
  }

}
