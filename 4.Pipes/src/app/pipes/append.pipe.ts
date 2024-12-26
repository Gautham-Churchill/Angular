import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendPipe implements PipeTransform {

  transform(value: string, appendText: string, position?: string): string {
    if(value == null ) return value;
    if(position === undefined || position === 'suffix') {
      return value + ' ' + appendText;
    } else {
      return appendText + ' ' + value;
    }
  }

}
