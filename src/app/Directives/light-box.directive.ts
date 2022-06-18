import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input('appLightBox') highlightColor:string="darkblue";

  constructor(public elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `3px solid ${this.defaultColor}` 
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemRef.nativeElement.style.border = `3px solid ${this.defaultColor}` 
  
  }

   @Input() defaultColor:string="yellow"

   @HostListener('mouseover') onMouseOver() 
   {
    this.elemRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
   }

   @HostListener('mouseout') onMouseOut() 
   {
    this.elemRef.nativeElement.style.border = `3px solid ${this.defaultColor}`
   }

}
