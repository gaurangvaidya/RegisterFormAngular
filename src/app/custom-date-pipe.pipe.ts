import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipePipe implements PipeTransform {

  transform(date:Date|string,format:string): string {

    let dob = new Date(date);
    
    return new DatePipe('en-US').transform(dob,format);
   
  }

}
