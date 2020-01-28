import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.trim() === '') {
      return;
    }
    return value.split('').reverse().join('');
  }

}
