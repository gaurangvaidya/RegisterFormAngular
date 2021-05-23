import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowErrors]'
})
export class ShowErrorsDirective {


  @Input('appShowErrors') data:any;
  constructor(private el:ElementRef) { }

  
  checkErrors()
  {
    
    if(this.data.name==='firstname')
     {
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
          
            if(this.data.errors.required)
            {
              console.log(this.data);
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='lastname')
     {
       console.log(this.data);
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='password')
     {
       console.log(this.data);
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     
     else if(this.data.name==='country')
     {
      
        if(this.el.nativeElement.value==="None" && (this.data.dirty||this.data.touched))
        {
            console.log(this.data)
              
              this.el.nativeElement.style.border="thick solid red";
      
            
           
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='phoneNo')
     {
       
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='emailid')
     {
       console.log(this.data);
        if(this.data.invalid && (this.data.dirty||this.data.touched))
        {
            if(this.data.errors.required)
            {
              
              this.el.nativeElement.style.border="thick solid red";
      
            }
            else if(this.data.errors.pattern)
            {
              this.el.nativeElement.style.border="thick solid yellow";

            }
          
        }
        else
        {
          this.el.nativeElement.style.border="thick solid green";

        }

     }
     else if(this.data.name==='dateofbirth')
     {
      if(this.data.invalid && (this.data.dirty||this.data.touched))
      {
          if(this.data.errors.required)
          {
            
            this.el.nativeElement.style.border="thick solid red";
    
          }

      }
      else
      {
        this.el.nativeElement.style.border="thick solid green";

      }

     }

    
     
     
     
    
  }
  @HostListener('change') onChange()
  {
    
    this.checkErrors();
  }
  @HostListener('keyup',['$event']) onKeyUp(e)
  {
        
      this.checkErrors();
    
  }

  @HostListener('paste') onPaste()
  {
    this.checkErrors();
  }

  







}
