import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(color: string): string {
    return `color: ${color};`;
  }
}
