import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
  pure: false
})
export class CapitalizePipe implements PipeTransform {

  transform(value: number, factor: number): number{
    return value * factor;
    
  
  }

}
