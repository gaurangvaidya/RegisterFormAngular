import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoCapitalisation]'
})
export class AutoCapitalisationDirective {

  constructor(private el:ElementRef) { }

  @HostListener('blur') onblur()
  {
    let value:string = this.el.nativeElement.value;
    value = value.substr(0,1).toUpperCase() + value.substr(1,value.length-1).toLowerCase();
    this.el.nativeElement.value = value;

  }


}
